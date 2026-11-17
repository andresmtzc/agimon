import { landingMotion } from './landing-motion.js';
// Agimon coordinated entrance v1
import { c as gsap } from './assets/Header-Dej0fn0W.js';

export function initChannelStrip() {
  const viewport = document.querySelector('.channel-logo-viewport');
  if (!viewport || viewport.dataset.initialized) return;
  viewport.dataset.initialized = 'true';
  const track = viewport.querySelector('.channel-logo-track');
  const sets = [...track.children];
  const items = sets.map(set => [...set.children]);
  const mobile = matchMedia('(max-width: 1024px)');
  const reduced = landingMotion;
  let entranceVisible = !window.agimonEntrance || window.agimonEntrance.isVisible('channels') || window.agimonEntrance.isSkipped();
  let timeline, inView = false, hovered = false, focused = false;

  function syncPlayback() {
    const play = entranceVisible && inView && !document.hidden && !hovered && !focused && !reduced.matches;
    if (timeline) play ? timeline.resume() : timeline.pause();
  }
  function configure() {
    timeline?.kill(); timeline = null;
    gsap.set(items.flat(), { clearProps: 'transform' });
    viewport.scrollLeft = 0;
    if (!reduced.matches) {
      gsap.set(items[0], { scale: 1 });
      gsap.set(items[1], { scale: 0 });
      // Match the reference: circ easing, half-second scale and 50ms stagger.
      timeline = gsap.timeline({ paused: true, repeat: -1 })
        .to(items[0], { scale: 0, duration: .5, stagger: .05, ease: 'circ.in' }, 2)
        .to(items[1], { scale: 1, duration: .5, stagger: .05, ease: 'circ.out' }, '+=.5')
        .to(items[1], { scale: 0, duration: .5, stagger: .05, ease: 'circ.in' }, '+=2')
        .to(items[0], { scale: 1, duration: .5, stagger: .05, ease: 'circ.out' }, '+=.5');
    }
    syncPlayback();
  }
  viewport.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { hovered = true; syncPlayback(); } });
  viewport.addEventListener('pointerleave', () => { hovered = false; syncPlayback(); });
  viewport.addEventListener('focusin', () => { focused = true; syncPlayback(); });
  viewport.addEventListener('focusout', () => { focused = false; syncPlayback(); });
  const reveal = () => { entranceVisible = true; syncPlayback(); };
  window.addEventListener('agimon:channels-visible', reveal, { once: true });
  window.addEventListener('agimon:entrance-skip', reveal, { once: true });
  document.addEventListener('visibilitychange', syncPlayback);
  reduced.addEventListener('change', configure);
  new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; syncPlayback(); }, { threshold: .1 }).observe(viewport);
  configure();
  window.agimonChannels = {
    seek: seconds => { timeline?.pause().time(seconds); },
    getState: () => ({ mobile: mobile.matches, reducedMotion: reduced.matches, time: timeline?.time() ?? null, inView }),
  };
}
