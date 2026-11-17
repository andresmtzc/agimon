import { landingMotion } from './landing-motion.js';
// Match the landing header's demo-button slide and hamburger spring.
export function mountViewSwitchMotion(host) {
  const tabs = host.shadowRoot?.querySelector('.view-switch');
  if (!tabs) return () => {};
  const buttons = [...tabs.querySelectorAll('button[data-view]')];
  const motion = host.motion || landingMotion;
  tabs.dataset.viewMotion = 'pending';
  const track = document.createElement('span');
  track.className = 'view-switch-track';
  track.setAttribute('aria-hidden', 'true');
  const pill = document.createElement('span');
  pill.className = 'view-switch-pill';
  track.append(pill);
  tabs.prepend(track);

  let active = true;
  let frame = 0;
  let animateNext = false;
  let selected = null;
  let geometry = '';
  function position(animate, force = false) {
    if (!active || !tabs.isConnected) return;
    const button = buttons.find(item => item.getAttribute('aria-selected') === 'true');
    if (!button || !button.offsetWidth || !button.offsetHeight) return;
    const changed = selected && selected !== button;
    const width = `${button.offsetWidth}px`;
    const height = `${button.offsetHeight}px`;
    const transform = `translate3d(${button.offsetLeft}px, ${button.offsetTop}px, 0)`;
    const nextGeometry = `${width}:${height}:${transform}`;
    // Clicking the already-selected tab or an unchanged resize notification
    // must not cut a spring short while it is still settling.
    if (!force && selected === button && geometry === nextGeometry) return;
    pill.style.transition = animate && changed && !motion.matches ? '' : 'none';
    pill.style.width = width;
    pill.style.height = height;
    pill.style.transform = transform;
    tabs.dataset.viewMotion = 'ready';
    selected = button;
    geometry = nextGeometry;
  }
  function schedule(animate = false) {
    animateNext ||= animate;
    if (!active || frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const animate = animateNext;
      animateNext = false;
      position(animate);
    });
  }
  const selectionObserver = new MutationObserver(() => schedule(true));
  selectionObserver.observe(tabs, {subtree:true, attributes:true, attributeFilter:['aria-selected']});
  const resizeObserver = new ResizeObserver(() => schedule());
  resizeObserver.observe(tabs);
  buttons.forEach(button => resizeObserver.observe(button));
  const onMotion = () => position(false, true);
  const onFonts = () => schedule();
  motion.addEventListener('change', onMotion);
  document.fonts.addEventListener('loadingdone', onFonts);
  document.fonts.ready.then(onFonts);
  position(false);

  return () => {
    active = false;
    cancelAnimationFrame(frame);
    selectionObserver.disconnect();
    resizeObserver.disconnect();
    motion.removeEventListener('change', onMotion);
    document.fonts.removeEventListener('loadingdone', onFonts);
    track.remove();
    delete tabs.dataset.viewMotion;
  };
}
