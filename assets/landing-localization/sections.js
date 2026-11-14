let teamCopy;
const fontLoads = new Map();
const locales = ['en', 'es', 'pt', 'id', 'hi', 'ar', 'ms', 'ur', 'fr', 'de'];
const selected = id => locales.includes(id) ? id : 'en';
const direction = locale => ['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr';

function loadCopy() {
  teamCopy ||= fetch(new URL('./team-copy.json', import.meta.url)).then(response => {
    if (!response.ok) throw new Error('Team translations unavailable');
    return response.json();
  }).catch(error => { teamCopy = null; throw error; });
  return teamCopy;
}

function loadFont(locale) {
  const spec = ['ar', 'ur'].includes(locale) ? ['Noto Sans Arabic', 'noto-sans-arabic.woff2']
    : locale === 'hi' ? ['Noto Sans Devanagari', 'noto-sans-devanagari.woff2'] : null;
  if (!spec) return Promise.resolve();
  const [family, file] = spec;
  if (!fontLoads.has(file)) fontLoads.set(file, (async () => {
    if ([...document.fonts].some(font => font.family.replaceAll('"', '').replaceAll("'", '') === family && font.status === 'loaded')) return;
    const face = new FontFace(family, `url(${new URL(`../agimon-footer/assets/${file}`, import.meta.url)})`, { weight: '400 800' });
    document.fonts.add(await face.load());
  })().catch(error => { fontLoads.delete(file); throw error; }));
  return fontLoads.get(file);
}

function stylesheet(root) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./sections.css', import.meta.url).href;
  const ready = new Promise(resolve => { link.onload = resolve; link.onerror = resolve; });
  root.append(link);
  return { link, ready };
}

function bindLanguage(root, apply, ready) {
  let disposed = false, revision = 0;
  const update = async id => {
    const locale = selected(id), request = ++revision;
    try {
      const [copy] = await Promise.all([loadCopy(), loadFont(locale), ready]);
      if (disposed || request !== revision || !root.isConnected) return;
      apply(copy[locale], locale);
      root.lang = locale;
      root.dir = direction(locale);
      root.dataset.locale = locale;
      requestAnimationFrame(() => { if (!disposed) window.dispatchEvent(new Event('resize')); });
    } catch (error) { console.error('Section translation unavailable', error); }
  };
  const listener = event => { void update(event.detail.id); };
  window.addEventListener('agimon:language', listener);
  void update(document.documentElement.dataset.agimonLanguage || 'en');
  return () => { disposed = true; revision++; window.removeEventListener('agimon:language', listener); };
}

export function mountTeamLanguage() {
  const root = document.getElementById('team');
  if (!root) return () => {};
  const style = stylesheet(document.head);
  const nodes = {
    eyebrow: '.agimon-team__eyebrow', heading: '.agimon-team ._mainTitle_qubww_97',
    description: '.agimon-team__description', cta: '.agimon-team ._buttonWrapper_qubww_152 .button-inner',
    startChip: '#getting-started ._pill_1ivbs_124', startHeading: '#getting-started ._title_1ivbs_143', startCta: '#getting-started ._label_1ivbs_71',
    pricingChip: '#pricing ._pill_1ivbs_124', pricingHeading: '#pricing ._title_1ivbs_143', pricingCta: '#pricing ._label_1ivbs_71',
  };
  const stop = bindLanguage(root, copy => {
    for (const [key, selector] of Object.entries(nodes)) {
      const element = root.querySelector(selector);
      if (element && !element.hasAttribute('data-team-copy')) element.textContent = copy[key];
    }
  }, style.ready);
  return () => { stop(); style.link.remove(); };
}

export function mountTeamSceneLanguage(host) {
  const root = host.shadowRoot;
  const style = stylesheet(root);
  let copy;
  const refreshControls = () => {
    if (!copy || !host.button) return;
    const paused = host.pausedByUser || host.reduced.matches;
    host.button.setAttribute('aria-label', host.reduced.matches ? copy.reducedMotionLabel : paused ? copy.playAnimation : copy.pauseAnimation);
  };
  const stop = bindLanguage(host, (next, locale) => {
    copy = next;
    const scene = root.querySelector('.scene');
    scene.lang = locale;
    scene.dir = direction(locale);
    root.querySelector('.exchanges').setAttribute('aria-label', copy.sceneAria);
    for (const [selector, key] of [
      ['.exchange-agimon .question', 'questionHours'], ['.exchange-agimon .speaker', 'speakerAgimon'], ['.exchange-agimon .reply-text', 'replyHours'],
      ['.exchange-human .question', 'questionHelp'], ['.exchange-human .speaker', 'speakerTeam'], ['.exchange-human .reply-text', 'replyHelp'],
    ]) root.querySelector(selector).textContent = copy[key];
    refreshControls();
  }, style.ready);
  return { refreshControls, destroy() { stop(); style.link.remove(); } };
}
