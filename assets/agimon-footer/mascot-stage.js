import { createMascot } from './mascot.js';
import { normalizeState } from './renderer.js';

const mounted = new WeakMap();
const motionProperties = [
  '--footer-mascot-y',
  '--footer-shadow-scale',
  '--footer-shadow-opacity',
];
const frameInterval = 1000 / 30;

/**
 * Mount the original tomato lab character inside a footer stage.
 *
 * Required descendants:
 *   [data-footer-mascot] — CSS gives this a nonzero width and height.
 * The SVG owns its original floating frame, animation and ground shadow.
 * CSS owns placement only. Hide any legacy .ground-shadow outside the SVG;
 * the old stage motion properties stay neutral to prevent a second float.
 *
 * The returned function is idempotent and restores pre-mount content/styles.
 * Re-mounting the same stage first disposes the previous instance, including
 * an in-flight preset fetch. Neither the shared renderer nor preset is changed.
 */
export async function mountMascotStage(stage) {
  if (!stage || typeof stage.querySelector !== 'function') {
    throw new TypeError('A footer mascot stage element is required.');
  }
  const mount = stage.querySelector('[data-footer-mascot]');
  if (!mount) {
    throw new Error('The footer stage needs a mascot mount.');
  }
  mounted.get(stage)?.();

  const document = stage.ownerDocument;
  const view = document.defaultView;
  const reduced = view.matchMedia('(prefers-reduced-motion: reduce)');
  const controller = new AbortController();
  const savedProperties = motionProperties.map(name => ({
    name,
    value: stage.style.getPropertyValue(name),
    priority: stage.style.getPropertyPriority(name),
  }));
  let active = true;
  let onScreen = false;
  let mascot = null;
  let settings = null;
  let observer = null;
  let previousChildren = null;
  let frameId = 0;
  let previousTimestamp = null;
  let lastPaint = -Infinity;
  let elapsed = 0;

  const shouldAnimate = () => active && stage.isConnected && onScreen
    && !document.hidden && !reduced.matches && settings?.motion;

  function render(seconds) {
    if (!mascot) return;
    mascot.render(seconds);
  }

  function stop() {
    if (frameId) view.cancelAnimationFrame(frameId);
    frameId = 0;
    previousTimestamp = null;
    lastPaint = -Infinity;
  }

  function frame(now) {
    frameId = 0;
    if (!shouldAnimate()) { stop(); return; }
    if (previousTimestamp !== null) elapsed += Math.min((now - previousTimestamp) / 1000, .1);
    previousTimestamp = now;
    if (now - lastPaint >= frameInterval) {
      render(elapsed);
      lastPaint = now;
    }
    frameId = view.requestAnimationFrame(frame);
  }

  function sync() {
    if (!mascot || !active) return;
    if (!shouldAnimate()) { stop(); return; }
    if (!frameId) frameId = view.requestAnimationFrame(frame);
  }

  function preferenceChanged() {
    stop();
    elapsed = 0;
    render(0);
    sync();
  }

  function cleanup() {
    if (!active) return;
    active = false;
    controller.abort();
    stop();
    observer?.disconnect();
    reduced.removeEventListener('change', preferenceChanged);
    document.removeEventListener('visibilitychange', sync);
    mascot?.destroy();
    if (mascot?.svg.parentNode === mount) {
      mount.replaceChildren(...previousChildren);
    }
    for (const { name, value, priority } of savedProperties) {
      if (value) stage.style.setProperty(name, value, priority);
      else stage.style.removeProperty(name);
    }
    if (mounted.get(stage) === cleanup) mounted.delete(stage);
  }

  mounted.set(stage, cleanup);
  try {
    const response = await fetch(new URL('./assets/selected-logo-preset.json', import.meta.url), {
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Footer mascot preset could not load (${response.status}).`);
    const preset = await response.json();
    if (!active) return cleanup;
    if (!preset || typeof preset !== 'object' || Array.isArray(preset)) {
      throw new TypeError('The footer mascot preset must be an object.');
    }
    settings = normalizeState(preset.settings ?? preset);
    previousChildren = [...mount.childNodes];
    mascot = createMascot(mount, settings);
    mascot.svg.setAttribute('aria-label', 'Agimon');
    stage.style.setProperty('--footer-mascot-y', '0px');
    stage.style.setProperty('--footer-shadow-scale', '1');
    stage.style.setProperty('--footer-shadow-opacity', '1');
    render(0);

    const rect = stage.getBoundingClientRect();
    onScreen = rect.bottom > 0 && rect.right > 0
      && rect.top < view.innerHeight && rect.left < view.innerWidth;
    observer = new view.IntersectionObserver(entries => {
      const entry = entries.find(item => item.target === stage);
      if (!entry || !active) return;
      onScreen = entry.isIntersecting;
      sync();
    }, { threshold: 0 });
    observer.observe(stage);
    reduced.addEventListener('change', preferenceChanged);
    document.addEventListener('visibilitychange', sync);
    sync();
    return cleanup;
  } catch (error) {
    const wasActive = active;
    cleanup();
    if (wasActive) throw error;
    return cleanup;
  }
}
