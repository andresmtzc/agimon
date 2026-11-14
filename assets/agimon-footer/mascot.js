import { blobPath, getMotion, mouthPath, normalizeState, renderSVG } from './renderer.js';

let instance = 0;
const svgNamespace = 'http://www.w3.org/2000/svg';
const round = value => String(Math.round(value * 100000) / 100000);
const finite = (value, fallback) => typeof value === 'number' && Number.isFinite(value) ? value : fallback;
/**
 * Keep the original tomato lab's floating format and full-size face intact.
 * render(seconds) samples that same renderer's motion into a persistent SVG.
 * The .68 character frame, native four-second float, and SVG ground shadow
 * belong to the lab artwork; there is no header/icon bleed or face-size frame.
 */
export function createMascot(element, preset = {}) {
  const state = normalizeState(preset.settings ?? preset);
  const size = Math.round(element.getBoundingClientRect().width) || 128;
  const source = renderSVG(state, { format: 'floating', size, time: 0, id: `footer-lab-${++instance}`, animated: true });
  const parsed = new DOMParser().parseFromString(source, 'image/svg+xml');
  const svg = element.ownerDocument.importNode(parsed.documentElement, true);
  element.replaceChildren(svg);
  const silhouette = svg.querySelector('.silhouette');
  const character = svg.querySelector('.floating-character');
  const shadow = svg.querySelector('.shadow');
  const shadowGradientId = shadow.getAttribute('fill').slice(5, -1);
  const shadowStop = svg.querySelector(`#${shadowGradientId} stop`);
  const mouth = svg.querySelector('.mouth-shape');
  const lips = mouth?.querySelector('.mouth');
  const optical = svg.getAttribute('data-optical') === 'true';
  const eyeScale = state.eyeSize / 100 * (optical ? state.opticalEyeSize / 100 : 1);
  const mouthWidth = state.mouthSize / 100 * (optical ? state.opticalMouthWidth / 100 : 1);
  const mouthHeight = state.mouthSize / 100 * (optical ? state.opticalMouthHeight / 100 : 1);
  const mouthBaseY = 88 + (optical ? 128 * state.opticalMouthY / 100 : 0);
  const eyes = [...svg.querySelectorAll('.eye')].map(eye => {
    const white = eye.querySelector('ellipse');
    const cx = Number(white.getAttribute('cx'));
    const rx = Number(white.getAttribute('rx'));
    const ry = Number(white.getAttribute('ry'));
    const lidId = eye.getAttribute('clip-path').slice(5, -1);
    const aperture = svg.querySelector(`#${lidId} rect`);
    // The export renderer emits these only during closure. Keep them mounted
    // permanently here, so blinking never allocates or replaces a DOM subtree.
    const closedLid = element.ownerDocument.createElementNS(svgNamespace, 'path');
    const attributes = {
      d: `M${round(cx - rx * .8)} ${round(58 + ry * .3)}q${round(rx * .8)} ${round(ry * .18)} ${round(rx * 1.6)} 0`,
      fill: 'none', stroke: '#151311', 'stroke-width': round(1.3 * eyeScale),
      'stroke-linecap': 'round', opacity: '0',
    };
    for (const [name, value] of Object.entries(attributes)) closedLid.setAttribute(name, value);
    eye.after(closedLid);
    return { cx, ry, aperture, closedLid, pupil: eye.querySelector('.pupil') };
  });
  const written = new WeakMap();
  function set(node, name, value) {
    let attributes = written.get(node);
    if (!attributes) { attributes = new Map(); written.set(node, attributes); }
    const text = typeof value === 'number' ? round(value) : value;
    if (attributes.get(name) === text) return;
    node.setAttribute(name, text);
    attributes.set(name, text);
  }
  let disposed = false;
  function render(seconds = 0) {
    if (disposed) return null;
    const motion = getMotion(state, finite(seconds, 0));
    const { gazeX, gazeY } = motion;
    set(silhouette, 'd', blobPath(motion.radii));
    // Keep the floating renderer geometry; deepen the shadow for the dark footer.
    const y = 128 * .12 - 128 * .68 * (16 / 180) * motion.lift;
    set(character, 'transform', `translate(20.48 ${round(y)}) scale(.68)`);
    set(shadow, 'rx', 29.44 * Math.max(.1, 1 - motion.lift * .2));
    set(shadowStop, 'stop-opacity', .65 * Math.max(0, 1 - motion.lift * .4));
    for (const eye of eyes) {
      set(eye.aperture, 'y', 58 - eye.ry + eye.ry * 2 * (1 - motion.eyeOpen) * .65);
      set(eye.aperture, 'height', eye.ry * 2 * motion.eyeOpen);
      set(eye.closedLid, 'opacity', motion.eyeOpen < .06 ? 1 - motion.eyeOpen / .06 : 0);
      set(eye.pupil, 'cx', eye.cx + (1.5 + gazeX) * eyeScale);
      set(eye.pupil, 'cy', 58 + (3 + gazeY) * eyeScale);
    }
    if (mouth) {
      if (lips) set(lips, 'd', mouthPath(motion.mouth));
      set(mouth, 'transform', `translate(64 ${round(mouthBaseY + motion.smileY)}) scale(${round(mouthWidth)} ${round(mouthHeight)}) translate(-64 -88)`);
    }
    return motion;
  }
  render(0);
  return { svg, render, destroy: () => { disposed = true; } };
}
