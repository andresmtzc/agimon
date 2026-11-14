import faq from './scenes/faq.js';
import calendar from './scenes/calendar.js';
import inventory from './scenes/inventory.js';
import campaigns from './scenes/campaigns.js';
import receipts from './scenes/receipts.js';
import todo from './scenes/todo.js';
import shipping from './scenes/shipping.js';
import { createMascot } from './mascot.js';
import { loadLocale, localizedArt, fitArt, translateControls, isRTL, fontFor } from './i18n.js';

export async function mountCarousel(root = document, options = {}) {
let locale = options.locale || 'en';
let dictionary = await loadLocale(locale);
let languageRevision = 0;
const t = value => dictionary[value] ?? value;
const scenes = [faq, calendar, inventory, campaigns, receipts, todo, shipping];
const $ = selector => root.querySelector(selector);
const track = $('#track'), viewport = $('#carousel'), section = $('#stories'), dialog = $('#story-dialog');
const presentation = options.presentation === true;
section.classList.toggle('is-presentation', presentation);
if (presentation) {
  const controls = document.createElement('div'); controls.className = 'pause-controls';
  controls.append($('#play-toggle')); section.append(controls);
  viewport.tabIndex = 0;
}
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const smallScreen = matchMedia('(max-width: 700px)');
const duration = 8000;
let paused = reduced.matches, grid = false, hovering = false, focused = false, manualUntil = 0, activeIndex = -1;
let dialogIndex = 0, dialogPaused = false, dialogAnimations = [], lastTrigger = null, mascot;
let drag = null, suppressClickUntil = 0, previousFrame = 0, nextMascotFrame = 0, mascotTime = 0, driftRemainder = 0;
let touching = false, debugFreeze = false;
const cards = [], sceneStates = new Map();
let instance = 0;

function uniqueMarkup(markup) {
  const prefix = `art-${++instance}-`;
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  for (const id of ids) {
    markup = markup.replaceAll(`id="${id}"`, `id="${prefix}${id}"`)
      .replaceAll(`url(#${id})`, `url(#${prefix}${id})`)
      .replaceAll(`href="#${id}"`, `href="#${prefix}${id}"`);
  }
  return markup;
}

function animationsFor(root, scene) {
  if (reduced.matches) return [];
  return (scene.motion || []).flatMap(motion => [...root.querySelectorAll(motion.selector)].map(element => {
    const animation = element.animate(motion.keyframes, { duration, iterations: Infinity, fill: 'both', easing: 'linear', ...motion.options });
    animation.pause();
    return animation;
  }));
}

for (const scene of scenes) {
  if (scene.style) { const style = document.createElement('style'); style.textContent = scene.style; (root === document ? document.head : root).append(style); }
}
for (let copy = 0; copy < 2; copy++) {
  scenes.forEach((scene, index) => {
    const card = document.createElement('article');
    card.className = `work-card scene--${scene.id}`;
    card.dataset.index = index;
    card.style.setProperty('--scene-bg', scene.background);
    card.style.setProperty('--scene-ink', scene.ink);
    if (copy) { card.dataset.clone = ''; card.setAttribute('aria-hidden', 'true'); }
    const button = document.createElement(presentation ? 'div' : 'button');
    button.className = 'card-open';
    if (!presentation) {
      button.setAttribute('aria-label', `${t(scene.label)}: ${t(scene.title)}. ${t('Open animation')}.`);
      button.setAttribute('aria-haspopup', 'dialog');
      if (copy) button.tabIndex = -1;
    }
    button.innerHTML = `<div class="card-art" aria-hidden="true">${uniqueMarkup(localizedArt(scene, t, locale))}</div><div class="card-copy"><h2 class="card-label"></h2><p class="card-title"></p></div>${presentation ? '' : '<span class="open-mark" aria-hidden="true">↗</span>'}`;
    button.querySelector('.card-label').textContent = t(scene.label);
    button.querySelector('.card-title').textContent = t(scene.title);
    if (!presentation) button.addEventListener('click', event => {
      if (performance.now() < suppressClickUntil) { event.preventDefault(); return; }
      openStory(index, button);
    });
    card.append(button); track.append(card); cards.push(card);
    sceneStates.set(card, { animations: animationsFor(card, scene), visible: false, index });
  });
}

scenes.forEach((scene, index) => {
  const button = document.createElement('button');
  button.textContent = t(scene.label);
  button.addEventListener('click', () => {
    if (grid) cards[index].scrollIntoView({ block: 'center', behavior: reduced.matches ? 'instant' : 'smooth' });
    else goTo(index);
  });
  $('#category-nav').append(button);
});

function syncMotion() {
  for (const state of sceneStates.values()) {
    const play = state.visible && (presentation || !paused) && !debugFreeze && !dialog.open && !document.hidden && !reduced.matches;
    for (const animation of state.animations) {
      if (play && animation.playState !== 'running') animation.play();
      else if (!play && animation.playState === 'running') animation.pause();
    }
  }
  for (const animation of dialogAnimations) {
    const play = dialog.open && !dialogPaused && !document.hidden && !reduced.matches;
    if (play && animation.playState !== 'running') animation.play();
    else if (!play && animation.playState === 'running') animation.pause();
  }
  $('#play-toggle').classList.toggle('is-paused', paused);
  $('#play-toggle').setAttribute('aria-pressed', String(paused));
  $('#play-toggle').setAttribute('aria-label', presentation ? (paused ? t('Resume scrolling') : t('Pause scrolling')) : (paused ? t('Play all motion') : t('Pause all motion')));
  $('#play-toggle').disabled = reduced.matches;
  $('#dialog-play').classList.toggle('is-paused', dialogPaused || reduced.matches);
  $('#dialog-play').setAttribute('aria-label', dialogPaused ? t('Play story') : t('Pause story'));
  $('#dialog-play').disabled = reduced.matches;
  $('#dialog-replay').disabled = reduced.matches;
  $('#timeline').disabled = reduced.matches;
}

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const state = sceneStates.get(entry.target);
    if (entry.isIntersecting && !state.visible) {
      // Keep the repeated card on the same frame when the marquee wraps.
      const peer = [...sceneStates.values()].find(other => other !== state && other.index === state.index);
      const time = peer?.animations[0]?.currentTime;
      if (time != null) for (const animation of state.animations) animation.currentTime = time;
    }
    state.visible = entry.isIntersecting;
  }
  syncMotion();
}, { threshold: .08 });
cards.forEach(card => observer.observe(card));

function step() { return cards[1].offsetLeft - cards[0].offsetLeft; }
function cycle() { return cards[7].offsetLeft - cards[0].offsetLeft; }
function current() {
  const spacing = step();
  if (!spacing) return Math.max(0, activeIndex);
  return ((Math.round(viewport.scrollLeft / spacing) % scenes.length) + scenes.length) % scenes.length;
}
function goTo(index) {
  const normalized = (index + scenes.length) % scenes.length;
  manualUntil = performance.now() + (presentation ? 1500 : 10000);
  viewport.scrollTo({ left: normalized * step(), behavior: reduced.matches ? 'instant' : 'smooth' });
}
function updateActive() {
  const index = current();
  if (index === activeIndex) return;
  activeIndex = index;
  [...$('#category-nav').children].forEach((button, i) => button.setAttribute('aria-current', String(i === index)));
}
$('#previous').addEventListener('click', () => goTo(current() - 1));
$('#next').addEventListener('click', () => goTo(current() + 1));
$('#play-toggle').addEventListener('click', () => { debugFreeze = false; paused = !paused; syncMotion(); });
$('#view-toggle').addEventListener('click', () => {
  grid = !grid; section.classList.toggle('is-grid', grid);
  $('#view-toggle').setAttribute('aria-pressed', String(grid));
  $('#view-toggle span').textContent = grid ? t('Carousel') : t('View all');
  viewport.scrollLeft = 0; manualUntil = performance.now() + 2000;
  updateActive();
});
viewport.addEventListener('mouseenter', () => { hovering = true; });
viewport.addEventListener('mouseleave', () => { hovering = false; });
viewport.addEventListener('focusin', event => { focused = true; if (!grid && event.target.matches('.card-open')) event.target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' }); });
viewport.addEventListener('focusout', () => { focused = false; });
viewport.addEventListener('wheel', event => { if (!presentation || Math.abs(event.deltaX) > 0) manualUntil = performance.now() + (presentation ? 1200 : 6000); }, { passive: true });
viewport.addEventListener('touchstart', () => { touching = true; manualUntil = performance.now() + (presentation ? 1200 : 10000); }, { passive: true });
for (const type of ['touchend', 'touchcancel']) viewport.addEventListener(type, () => { touching = false; if (presentation) manualUntil = performance.now() + 1200; }, { passive: true });
viewport.addEventListener('scroll', () => { if (!grid) updateActive(); }, { passive: true });
viewport.addEventListener('keydown', event => {
  if (grid || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault(); goTo(current() + (event.key === 'ArrowRight' ? 1 : -1));
});
viewport.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'mouse' || event.button !== 0 || grid) return;
  manualUntil = performance.now() + (presentation ? 1200 : 10000);
  drag = { id: event.pointerId, x: event.clientX, left: viewport.scrollLeft, moved: false };
});
viewport.addEventListener('pointermove', event => {
  if (!drag || event.pointerId !== drag.id) return;
  const distance = event.clientX - drag.x;
  if (Math.abs(distance) > 7 && !drag.moved) { drag.moved = true; viewport.setPointerCapture(event.pointerId); viewport.classList.add('dragging'); }
  if (drag.moved) { event.preventDefault(); viewport.scrollLeft = drag.left - distance; }
});
function endDrag() { if (drag?.moved) suppressClickUntil = performance.now() + 150; drag = null; viewport.classList.remove('dragging'); }
viewport.addEventListener('pointerup', endDrag);
viewport.addEventListener('pointercancel', endDrag);
viewport.addEventListener('lostpointercapture', endDrag);
window.addEventListener('pointerup', endDrag);

function showStory(index) {
  dialogIndex = (index + scenes.length) % scenes.length;
  const scene = scenes[dialogIndex];
  dialogAnimations.forEach(animation => animation.cancel());
  const art = $('#dialog-art');
  art.className = `dialog-art scene--${scene.id}`;
  art.style.setProperty('--scene-bg', scene.background);
  art.innerHTML = uniqueMarkup(localizedArt(scene, t, locale));
  $('#dialog-label').textContent = `${String(dialogIndex + 1).padStart(2, '0')} / 07  ·  ${t(scene.label)}`;
  $('#dialog-title').textContent = t(scene.title);
  $('#dialog-description').textContent = t(scene.description);
  fitArt(art);
  document.fonts.ready.then(() => fitArt(art));
  dialogAnimations = animationsFor(art, scene);
  dialogPaused = reduced.matches;
  $('#timeline').value = 0;
  syncMotion();
}
function openStory(index, trigger) {
  if (presentation) return;
  lastTrigger = trigger;
  showStory(index); dialog.showModal();
  document.body.style.overflow = 'hidden'; syncMotion();
}
function closeStory() { dialog.close(); }
dialog.addEventListener('close', () => {
  dialogAnimations.forEach(animation => animation.cancel()); dialogAnimations = [];
  document.body.style.overflow = '';
  manualUntil = performance.now() + 2000; syncMotion();
  lastTrigger?.focus({ preventScroll: true });
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeStory();
});
dialog.addEventListener('keydown', event => {
  if (event.target === $('#timeline')) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); showStory(dialogIndex + (event.key === 'ArrowRight' ? 1 : -1)); }
});
$('#close-dialog').addEventListener('click', closeStory);
$('#dialog-previous').addEventListener('click', () => showStory(dialogIndex - 1));
$('#dialog-next').addEventListener('click', () => showStory(dialogIndex + 1));
$('#dialog-play').addEventListener('click', () => { dialogPaused = !dialogPaused; syncMotion(); });
$('#dialog-replay').addEventListener('click', () => { dialogAnimations.forEach(animation => { animation.currentTime = 0; }); dialogPaused = false; syncMotion(); });
$('#timeline').addEventListener('input', event => { dialogPaused = true; for (const animation of dialogAnimations) { animation.pause(); animation.currentTime = Number(event.target.value) * 1000; } syncMotion(); });

reduced.addEventListener('change', () => {
  paused = reduced.matches;
  for (const [card, state] of sceneStates) { state.animations.forEach(animation => animation.cancel()); state.animations = animationsFor(card, scenes[state.index]); }
  if (dialog.open) showStory(dialogIndex);
  syncMotion(); mascot?.render(0);
});
document.addEventListener('visibilitychange', syncMotion);

function frame(now) {
  const delta = Math.min(40, now - (previousFrame || now)); previousFrame = now;
  if (!document.hidden && !reduced.matches) {
    if (!paused && !dialog.open) {
      if (!grid && (presentation || (!smallScreen.matches && !hovering && !focused)) && !drag && !touching && now > manualUntil) {
        const distance = delta * .024 + driftRemainder;
        const pixels = Math.floor(distance);
        driftRemainder = distance - pixels;
        viewport.scrollLeft += pixels;
        const length = cycle();
        if (length && viewport.scrollLeft >= length) viewport.scrollLeft -= length;
      }
      mascotTime += delta / 1000;
      if (mascot && now >= nextMascotFrame) { mascot.render(mascotTime); nextMascotFrame = now + 50; }
    }
    if (dialog.open && !dialogPaused && dialogAnimations[0]) $('#timeline').value = ((dialogAnimations[0].currentTime || 0) % duration) / 1000;
  }
  requestAnimationFrame(frame);
}

const api = {
  scenes: scenes.map(({ id, label }) => ({ id, label })),
  seek(seconds = 4.8) {
    debugFreeze = true; paused = true; syncMotion();
    for (const state of sceneStates.values()) for (const animation of state.animations) animation.currentTime = Math.max(0, Math.min(8, seconds)) * 1000;
  },
  open: index => openStory(index, cards[index]?.querySelector('button')),
  state: () => ({ paused, grid, presentation, reducedMotion: reduced.matches, activeIndex, dialogIndex, dialogOpen: dialog.open, animationCount: [...sceneStates.values()].reduce((n, state) => n + state.animations.length, 0) })
};

async function setLanguage(id) {
  const revision = ++languageRevision;
  const next = await loadLocale(id);
  if (revision !== languageRevision) return;
  locale = id; dictionary = next;
  for (const card of cards) {
    const state = sceneStates.get(card), scene = scenes[state.index];
    const time = state.animations[0]?.currentTime || 0;
    state.animations.forEach(animation => animation.cancel());
    card.querySelector('.card-art').innerHTML = uniqueMarkup(localizedArt(scene, t, locale));
    card.querySelector('.card-label').textContent = t(scene.label);
    card.querySelector('.card-title').textContent = t(scene.title);
    if (!presentation) card.querySelector('.card-open').setAttribute('aria-label', `${t(scene.label)}: ${t(scene.title)}. ${t('Open animation')}.`);
    state.animations = animationsFor(card, scene);
    for (const animation of state.animations) animation.currentTime = time;
  }
  [...$('#category-nav').children].forEach((button, index) => { button.textContent = t(scenes[index].label); });
  for (const element of [section, dialog]) { element.lang = locale; element.style.fontFamily = fontFor(locale); }
  for (const element of root.querySelectorAll('.card-copy,.dialog-copy,.eyebrow,.explore-note')) element.dir = isRTL(locale) ? 'rtl' : 'ltr';
  translateControls(root, t);
  if (presentation) viewport.setAttribute('aria-label', t('Work stories. Drag or swipe to explore.'));
  $('#view-toggle span').textContent = grid ? t('Carousel') : t('View all');
  if (dialog.open) showStory(dialogIndex);
  fitArt(root);
  await document.fonts.ready;
  if (revision === languageRevision) fitArt(root);
  syncMotion();
}
api.setLanguage = setLanguage;
api.getLanguage = () => locale;
window.carouselStudy = api;
if ($('#brand-blob')) fetch(new URL('./assets/selected-logo-preset.json', import.meta.url)).then(response => { if (!response.ok) throw new Error('Logo preset unavailable'); return response.json(); }).then(preset => { mascot = createMascot($('#brand-blob'), preset); mascot.render(0); }).catch(() => { $('#brand-blob').innerHTML = '<img src="./assets/favicon.svg" width="28" height="28" alt=""/>'; });
updateActive(); syncMotion();
await setLanguage(locale);
document.fonts.ready.then(() => requestAnimationFrame(frame));
return api;
}
if (document.querySelector('#stories')) {
  void mountCarousel(document, { locale: new URLSearchParams(location.search).get('lang') || 'en' });
}
