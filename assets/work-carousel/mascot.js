import { blobPath, getMotion, mouthPath, normalizeState, renderSVG } from './renderer.js';

let instance = 0;
const svgNamespace = 'http://www.w3.org/2000/svg';
const round = value => String(Math.round(value * 100000) / 100000);
const finite = (value, fallback) => typeof value === 'number' && Number.isFinite(value) ? value : fallback;
const pupilRim = Array.from({ length: 64 }, (_, index) => {
  const angle = index / 64 * Math.PI * 2;
  return [Math.cos(angle), Math.sin(angle)];
});

/**
 * Creates one persistent SVG. The caller owns placement, squash/rotation and time.
 * render(seconds, { gazeX?, gazeY?, mouthStretch? }) updates attributes only.
 * Gaze overrides use the renderer's eye-space units, not screen pixels. Stretch
 * is a width multiplier (1 = approved mouth); speech follows the saved preset.
 * Omit overrides for approved idle motion, or hold seconds fixed to hold a pose.
 */
export function createMascot(element, preset = {}) {
  const state = normalizeState({ ...(preset.settings ?? preset), float: false, talkStart: null });
  // Use the displayed size so the approved tiny-icon proportions apply here.
  const size = Math.round(element.getBoundingClientRect().width) || 128;
  const source = renderSVG(state, { format: 'blob', size, time: 0, id: `study-${++instance}`, animated: true });
  const parsed = new DOMParser().parseFromString(source, 'image/svg+xml');
  const svg = element.ownerDocument.importNode(parsed.documentElement, true);
  element.replaceChildren(svg);
  const silhouette = svg.querySelector('.silhouette');
  // Keep the approved tiny face size, within the full organic silhouette.
  // Cropping/bleed belongs to the favicon; the header character stays a blob.
  const face = svg.querySelector('.face');
  const faceFrame = element.ownerDocument.createElementNS(svgNamespace, 'g');
  faceFrame.setAttribute('class', 'tiny-face-frame');
  face.before(faceFrame);
  faceFrame.append(face);
  // Grow the body to the wordmark height while preserving the face's pixel size.
  function fitFace() {
    const bodySize = element.getBoundingClientRect().width || size;
    const referenceSize = parseFloat(getComputedStyle(element).getPropertyValue('--face-reference-size')) || bodySize;
    const scale = state.iconFill / 100 * referenceSize / bodySize;
    faceFrame.setAttribute('transform', `translate(64 64) scale(${scale}) translate(-64 -64)`);
  }
  fitFace();
  new ResizeObserver(fitFace).observe(element);
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
  let previousGaze;
  function containGaze(x, y) {
    if (previousGaze?.x === x && previousGaze.y === y) return previousGaze;
    const radius = 5 * state.pupilSize / 100;
    const inside = amount => pupilRim.every(([dx, dy]) =>
      ((1.5 + x * amount + radius * dx) / 10) ** 2
      + ((3 + y * amount + radius * dy) / 12) ** 2 <= .998);
    let amount = 1;
    if (!inside(0)) amount = 0;
    else if (!inside(1)) {
      let low = 0;
      let high = 1;
      for (let index = 0; index < 14; index += 1) {
        const mid = (low + high) / 2;
        if (inside(mid)) low = mid; else high = mid;
      }
      amount = low;
    }
    previousGaze = { x, y, gazeX: x * amount, gazeY: y * amount };
    return previousGaze;
  }
  function render(seconds = 0, pose = {}) {
    const motion = getMotion(state, finite(seconds, 0));
    let { gazeX, gazeY } = motion;
    if (Number.isFinite(pose.gazeX) || Number.isFinite(pose.gazeY)) {
      ({ gazeX, gazeY } = containGaze(finite(pose.gazeX, gazeX), finite(pose.gazeY, gazeY)));
    }
    set(silhouette, 'd', blobPath(motion.radii));
    for (const eye of eyes) {
      set(eye.aperture, 'y', 58 - eye.ry + eye.ry * 2 * (1 - motion.eyeOpen) * .65);
      set(eye.aperture, 'height', eye.ry * 2 * motion.eyeOpen);
      set(eye.closedLid, 'opacity', motion.eyeOpen < .06 ? 1 - motion.eyeOpen / .06 : 0);
      set(eye.pupil, 'cx', eye.cx + (1.5 + gazeX) * eyeScale);
      set(eye.pupil, 'cy', 58 + (3 + gazeY) * eyeScale);
    }
    if (mouth) {
      if (lips) set(lips, 'd', mouthPath(motion.mouth));
      const stretch = Math.max(.5, Math.min(1.8, finite(pose.mouthStretch, 1)));
      set(mouth, 'transform', `translate(64 ${round(mouthBaseY + motion.smileY)}) scale(${round(mouthWidth * stretch)} ${round(mouthHeight)}) translate(-64 -88)`);
    }
    return motion;
  }
  render(0);
  return { svg, render };
}
