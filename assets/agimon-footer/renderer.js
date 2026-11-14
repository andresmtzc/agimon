// A single SVG renderer for the editor, selected-frame exports and icon assets.
// Time values are seconds. Motion is sampled, never driven by CSS or SVG SMIL.
export const defaults = Object.freeze({
  eyeSize: 100, eyeGap: 100, pupilSize: 100, faceScale: 140, faceY: -3,
  mouthSize: 100, mouthOpacity: 15,
  colorOne: '#ea5a40', colorTwo: '#ff845c', gradientAngle: 140,
  iconFill: 100, cornerRadius: 24,
  morph: true, morphAmount: 100, morphPeriod: 8,
  float: true, floatAmount: 100,
  blink: true, blinkInterval: 4.2, blinkDuration: 220,
  glance: true, glanceAmount: 100, glanceInterval: 8,
  smileMotion: true, smileAmount: 100, smilePeriod: 7,
  talk: false, talkInterval: 14, talkDuration: 1500, talkStart: null,
  motion: true,
  opticalEnabled: false, opticalThreshold: 24, opticalEyeSize: 120,
  opticalGap: 110, opticalMouth: false,
  opticalMouthWidth: 100, opticalMouthHeight: 100, opticalMouthY: 0,
  opticalMouthOpacity: 15,
});

export const presets = Object.freeze([
  ['Tomato', '#ea5a40', '#ff845c'], ['Ash', '#b7b7b7', '#d8d8d8'],
  ['Pink', '#f27ab2', '#ff9cc7'], ['Mango', '#f0b438', '#ffd36f'],
  ['Lime', '#9cc958', '#b7e173'], ['Mint', '#67b56f', '#8ad292'],
  ['Ocean', '#59a4c8', '#84c7e5'], ['Lilac', '#a786da', '#c2a5ef'],
  ['Cocoa', '#8f6a55', '#b58a71'], ['Coral', '#ff6b6b', '#ff9f8a'],
  ['Cherry', '#c9364f', '#f05a70'], ['Papaya', '#f58a3d', '#ffc267'],
  ['Lemon', '#e0bf35', '#ffe873'], ['Olive', '#7d9440', '#a9bd63'],
  ['Forest', '#337a52', '#58a875'], ['Jade', '#2f9d86', '#65cdb5'],
  ['Aqua', '#3bb6b4', '#7cddd9'], ['Sky', '#4d9de0', '#82c4f3'],
  ['Denim', '#496fa8', '#7998c9'], ['Indigo', '#5963c5', '#8990e7'],
  ['Violet', '#7e57c2', '#ad8de1'], ['Grape', '#8753a5', '#b47bc9'],
  ['Plum', '#7c416c', '#ad6b99'], ['Rose', '#d95d86', '#f08faf'],
  ['Peach', '#e98a72', '#ffc0aa'], ['Sand', '#caa66b', '#e7cca0'],
  ['Caramel', '#b67b44', '#daa875'], ['Mocha', '#745848', '#9d7a66'],
  ['Slate', '#667786', '#93a4b0'], ['Midnight', '#38405f', '#616a91'],
].map(([name, colorOne, colorTwo]) => Object.freeze({
  id: name.toLowerCase(), name, colorOne, colorTwo,
})));

export const formats = Object.freeze([
  'floating', 'blob', 'circle', 'square', 'circle-inset', 'square-inset',
]);

const RADII = [
  [42, 58, 55, 45, 50, 42, 58, 50],
  [50, 50, 45, 55, 55, 45, 50, 50],
  [45, 55, 50, 50, 48, 52, 48, 52],
  [55, 45, 52, 48, 50, 50, 55, 45],
  [42, 58, 55, 45, 50, 42, 58, 50],
];
// Smile → open A → wide GI → closed M → round O → N → original smile.
// Each row is phase, width, height, curvature of the upper lip.
const SPEECH = [
  [0, 11, 6, 0], [.12, 13, 13, .9], [.28, 13, 13, .9],
  [.40, 17, 5, .2], [.51, 16, 5, .2], [.61, 13, 1.4, .65],
  [.73, 8.5, 12, 1], [.84, 12, 4, .3], [1, 11, 6, 0],
];
const GLANCES = [[1, -.2], [-1, .15], [.75, .3], [-.65, -.15]];
const PUPIL_RIM = Array.from({ length: 64 }, (_, index) => {
  const angle = index / 64 * Math.PI * 2;
  return [Math.cos(angle), Math.sin(angle)];
});
let sequence = 0;
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const number = (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const f = (value) => String(Math.round(value * 100000) / 100000);
const mod = (value, period) => ((value % period) + period) % period;
const smooth = (value) => value * value * (3 - 2 * value);
const color = (value, fallback) => /^#[\da-f]{6}$/i.test(String(value)) ? value : fallback;

export function normalizeState(input = {}) {
  const state = { ...defaults, ...input };
  // Legacy presets used the main mouth opacity for every size.
  if (input.opticalMouthOpacity == null) state.opticalMouthOpacity = state.mouthOpacity;
  const ranges = {
    eyeSize: [25, 220], eyeGap: [0, 250], pupilSize: [0, 200],
    faceScale: [30, 220], faceY: [-35, 35], mouthSize: [0, 250], mouthOpacity: [0, 100],
    iconFill: [25, 300], cornerRadius: [0, 50], gradientAngle: [-360, 360],
    morphAmount: [0, 200], morphPeriod: [.5, 60], floatAmount: [0, 200],
    blinkInterval: [.5, 60], blinkDuration: [60, 1200],
    glanceAmount: [0, 200], glanceInterval: [4, 16],
    smileAmount: [0, 200], smilePeriod: [4, 14],
    talkInterval: [2, 120], talkDuration: [300, 6000],
    opticalThreshold: [8, 128], opticalEyeSize: [50, 200], opticalGap: [0, 200],
    opticalMouthWidth: [20, 300], opticalMouthHeight: [20, 300],
    opticalMouthY: [-20, 20], opticalMouthOpacity: [0, 100],
  };
  for (const [key, [low, high]] of Object.entries(ranges)) {
    state[key] = clamp(number(state[key], defaults[key]), low, high);
  }
  for (const key of ['morph', 'float', 'blink', 'glance', 'smileMotion', 'talk', 'motion', 'opticalEnabled', 'opticalMouth']) {
    state[key] = typeof state[key] === 'boolean' ? state[key] : defaults[key];
  }
  state.colorOne = color(state.colorOne, defaults.colorOne);
  state.colorTwo = color(state.colorTwo, defaults.colorTwo);
  state.talkStart = input.talkStart != null && Number.isFinite(Number(input.talkStart))
    ? Number(input.talkStart) : null;
  return state;
}

// CSS ease-in-out, including inversion of the cubic's time axis.
export function easeInOut(progress) {
  if (progress <= 0 || progress >= 1) return clamp(progress, 0, 1);
  let low = 0;
  let high = 1;
  for (let step = 0; step < 20; step += 1) {
    const t = (low + high) / 2;
    const x = 3 * (1 - t) ** 2 * t * .42 + 3 * (1 - t) * t ** 2 * .58 + t ** 3;
    if (x < progress) low = t;
    else high = t;
  }
  const t = (low + high) / 2;
  return 3 * (1 - t) * t ** 2 + t ** 3;
}

// Limit the whole excursion once, then ease along it. Large pupils never jump
// to a new center to satisfy a clamp; an already crowded resting iris stays put.
function glanceLimit(pupilSize, x, y) {
  const radius = 5 * pupilSize / 100;
  const inside = (amount) => PUPIL_RIM.every(([dx, dy]) =>
    ((1.5 + x * amount + radius * dx) / 10) ** 2
      + ((3 + y * amount + radius * dy) / 12) ** 2 <= .998);
  if (!inside(0)) return 0;
  if (inside(1)) return 1;
  let low = 0;
  let high = 1;
  for (let step = 0; step < 14; step += 1) {
    const mid = (low + high) / 2;
    if (inside(mid)) low = mid;
    else high = mid;
  }
  return low;
}

export function getMotion(input = {}, time = 0) {
  const state = normalizeState(input);
  const now = Math.max(0, number(time, 0));
  let radii = [...RADII[0]];
  let lift = 0;
  let eyeOpen = 1;
  let gazeX = 0;
  let gazeY = 0;
  let smileY = 0;
  let talkProgress = null;
  let mouth = { width: 11, height: 6, top: 0 };
  if (state.motion) {
    if (state.morph && state.morphAmount > 0) {
      const phase = mod(now, state.morphPeriod) / state.morphPeriod * 4;
      const frame = Math.floor(phase);
      const mix = easeInOut(phase - frame);
      radii = RADII[frame].map((from, index) => RADII[0][index]
        + ((from + (RADII[frame + 1][index] - from) * mix) - RADII[0][index]) * state.morphAmount / 100);
    }
    if (state.float) {
      const phase = mod(now, 4) / 4;
      lift = easeInOut(phase < .5 ? phase * 2 : (1 - phase) * 2) * state.floatAmount / 100;
    }
    if (state.blink) {
      const duration = Math.min(state.blinkDuration / 1000, state.blinkInterval * .75);
      // Keep the original first blink near 46% of its 4.2-second interval.
      const elapsed = mod(now - state.blinkInterval * .46 + duration * .22, state.blinkInterval);
      if (elapsed < duration) {
        const phase = elapsed / duration;
        // Fast upper-lid closure, a brief shut beat, then a softer reopening.
        eyeOpen = phase < .22 ? 1 - smooth(phase / .22)
          : phase < .32 ? 0 : smooth((phase - .32) / .68);
      }
    }
    if (state.glance && state.glanceAmount > 0) {
      const elapsed = now - state.glanceInterval * .55;
      if (elapsed >= 0) {
        const cycle = Math.floor(elapsed / state.glanceInterval);
        const phase = mod(elapsed, state.glanceInterval);
        // 0.28s turn, 0.44s settle, 0.93s return; the remaining time is rest.
        const weight = phase < .28 ? smooth(phase / .28)
          : phase < .72 ? 1 : phase < 1.65 ? 1 - smooth((phase - .72) / .93) : 0;
        const direction = GLANCES[cycle % GLANCES.length];
        const x = direction[0] * 1.2 * state.glanceAmount / 100;
        const y = direction[1] * state.glanceAmount / 100;
        const amount = weight * glanceLimit(state.pupilSize, x, y);
        gazeX = x * amount || 0;
        gazeY = y * amount || 0;
      }
    }
    const duration = state.talkDuration / 1000;
    if (state.talkStart !== null && now >= state.talkStart && now < state.talkStart + duration) {
      talkProgress = (now - state.talkStart) / duration;
    } else if (state.talk) {
      const interval = Math.max(state.talkInterval, duration + .5);
      const elapsed = mod(now, interval);
      // Idle repetition starts after a full interval; opening the editor is quiet.
      if (now >= interval && elapsed < duration) talkProgress = elapsed / duration;
    }
    if (talkProgress !== null) {
      for (let index = 1; index < SPEECH.length; index += 1) {
        const from = SPEECH[index - 1];
        const to = SPEECH[index];
        if (talkProgress <= to[0]) {
          const mix = smooth((talkProgress - from[0]) / (to[0] - from[0]));
          const values = from.slice(1).map((value, i) => value + (to[i + 1] - value) * mix);
          mouth = { width: values[0], height: values[1], top: values[2] };
          break;
        }
      }
    }
    if (state.smileMotion && state.smileAmount > 0) {
      let weight = 1;
      if (state.talkStart !== null) {
        const elapsed = now - state.talkStart;
        // A click cannot be anticipated: preserve its exact starting position,
        // ease out during the opening transition, then ease back after speech.
        if (elapsed >= 0 && elapsed < .18) weight = 1 - smooth(elapsed / .18);
        else if (elapsed >= .18 && elapsed < duration) weight = 0;
        else if (elapsed >= duration && elapsed < duration + .35) weight = smooth((elapsed - duration) / .35);
      }
      if (state.talk) {
        const interval = Math.max(state.talkInterval, duration + .5);
        const cycle = Math.floor(now / interval);
        for (const start of [cycle * interval, (cycle + 1) * interval]) {
          if (start < interval) continue;
          const elapsed = now - start;
          const gate = elapsed >= -.3 && elapsed < 0 ? 1 - smooth((elapsed + .3) / .3)
            : elapsed >= 0 && elapsed < duration ? 0
              : elapsed >= duration && elapsed < duration + .35 ? smooth((elapsed - duration) / .35) : 1;
          weight = Math.min(weight, gate);
        }
      }
      smileY = .28 * Math.sin(now / state.smilePeriod * Math.PI * 2) * state.smileAmount / 100 * weight || 0;
    }
  }
  return { time: now, radii, lift, eyeOpen, blink: eyeOpen, gazeX, gazeY, smileY,
    talkProgress, talking: talkProgress !== null, mouth };
}

// CSS border-radius geometry, with the same corner-overlap normalization.
export function blobPath(radii = RADII[0], size = 128) {
  const r = radii.map((value) => Math.max(.01, number(value, 50)) * size / 100);
  const scale = Math.min(1, size / (r[0] + r[1]), size / (r[3] + r[2]),
    size / (r[4] + r[7]), size / (r[5] + r[6]));
  const [tlx, trx, brx, blx, tly, try_, bry, bly] = r.map((value) => value * scale);
  return `M${f(tlx)} 0H${f(size - trx)}A${f(trx)} ${f(try_)} 0 0 1 ${f(size)} ${f(try_)}`
    + `V${f(size - bry)}A${f(brx)} ${f(bry)} 0 0 1 ${f(size - brx)} ${f(size)}`
    + `H${f(blx)}A${f(blx)} ${f(bly)} 0 0 1 0 ${f(size - bly)}`
    + `V${f(tly)}A${f(tlx)} ${f(tly)} 0 0 1 ${f(tlx)} 0Z`;
}

export function mouthPath(mouth) {
  if (mouth.width === 11 && mouth.height === 6 && mouth.top === 0) {
    return 'M58.5 85h11v.5a5.5 5.5 0 0 1-11 0z';
  }
  const left = 64 - mouth.width / 2;
  const right = 64 + mouth.width / 2;
  const top = 88 - mouth.height / 2;
  const bottom = 88 + mouth.height / 2;
  const rx = mouth.width / 2;
  const upper = mouth.height * .5 * mouth.top;
  const lower = Math.min(mouth.height - upper, rx);
  const k = .552284749831;
  // The zero-curvature limit is the original straight-topped semicircle.
  // Curved upper lips and independently changing radii produce real visemes.
  return `M${f(left)} ${f(top + upper)}`
    + `C${f(left)} ${f(top + upper * (1 - k))} ${f(64 - rx * k)} ${f(top)} 64 ${f(top)}`
    + `C${f(64 + rx * k)} ${f(top)} ${f(right)} ${f(top + upper * (1 - k))} ${f(right)} ${f(top + upper)}`
    + `V${f(bottom - lower)}`
    + `C${f(right)} ${f(bottom - lower * (1 - k))} ${f(64 + rx * k)} ${f(bottom)} 64 ${f(bottom)}`
    + `C${f(64 - rx * k)} ${f(bottom)} ${f(left)} ${f(bottom - lower * (1 - k))} ${f(left)} ${f(bottom - lower)}Z`;
}

function faceSVG(state, motion, id, optical) {
  const eyeScale = state.eyeSize / 100 * (optical ? state.opticalEyeSize / 100 : 1);
  const rx = 10 * eyeScale;
  const ry = 12 * eyeScale;
  const gap = 15 * state.eyeGap / 100 * (optical ? state.opticalGap / 100 : 1);
  const distance = rx * 2 + gap;
  const pupil = 5 * eyeScale * state.pupilSize / 100;
  const apertureHeight = ry * 2 * motion.eyeOpen;
  const lidTop = 58 - ry + ry * 2 * (1 - motion.eyeOpen) * .65;
  const defs = [];
  const eyes = [64 - distance / 2, 64 + distance / 2].map((cx, index) => {
    const eyeId = `${id}-eye-${index}`;
    const lidId = `${id}-lid-${index}`;
    defs.push(`<clipPath id="${eyeId}"><ellipse cx="${f(cx)}" cy="58" rx="${f(rx)}" ry="${f(ry)}"/></clipPath>`);
    defs.push(`<clipPath id="${lidId}"><rect x="${f(cx - rx - 1)}" y="${f(lidTop)}" width="${f(rx * 2 + 2)}" height="${f(apertureHeight)}"/></clipPath>`);
    const closedLid = motion.eyeOpen < .06
      ? `<path d="M${f(cx - rx * .8)} ${f(58 + ry * .3)}q${f(rx * .8)} ${f(ry * .18)} ${f(rx * 1.6)} 0" fill="none" stroke="#151311" stroke-width="${f(1.3 * eyeScale)}" stroke-linecap="round" opacity="${f(1 - motion.eyeOpen / .06)}"/>` : '';
    return `<g class="eye" clip-path="url(#${lidId})"><ellipse cx="${f(cx)}" cy="58" rx="${f(rx)}" ry="${f(ry)}" fill="#fff"/>`
      + `<circle class="pupil" cx="${f(cx + (1.5 + motion.gazeX) * eyeScale)}" cy="${f(58 + (3 + motion.gazeY) * eyeScale)}" r="${f(pupil)}" fill="#151311" clip-path="url(#${eyeId})"/></g>${closedLid}`;
  }).join('');
  const mouthWidth = state.mouthSize / 100 * (optical ? state.opticalMouthWidth / 100 : 1);
  const mouthHeight = state.mouthSize / 100 * (optical ? state.opticalMouthHeight / 100 : 1);
  const mouthY = 88 + (optical ? 128 * state.opticalMouthY / 100 : 0) + motion.smileY;
  const mouthOpacity = optical ? state.opticalMouthOpacity : state.mouthOpacity;
  const mouth = optical && !state.opticalMouth ? ''
    : `<g class="mouth-shape" transform="translate(64 ${f(mouthY)}) scale(${f(mouthWidth)} ${f(mouthHeight)}) translate(-64 -88)"><path class="mouth" d="${mouthPath(motion.mouth)}" fill="#000" opacity="${f(mouthOpacity / 100)}"/></g>`;
  return {
    defs: defs.join(''),
    svg: `<g class="face" transform="translate(0 ${f(128 * state.faceY / 100)}) translate(64 64) scale(${f(state.faceScale / 100)}) translate(-64 -64)"><g class="eyes">${eyes}</g>${mouth}</g>`,
  };
}

/**
 * Render a single, fully self-contained frame. `animated` labels an interactive
 * frame only; time is always honored so exports match the visible paused frame.
 * `optical: true` explicitly enables the optical cut at/below opticalThreshold;
 * state.opticalEnabled also enables it. Neither changes the full-size master.
 */
export function renderSVG(input = {}, options = {}) {
  const { format = 'floating', size = 400, time = 0, optical = false, animated = false } = options;
  const state = normalizeState(input);
  const outputSize = clamp(number(size, 400), 1, 8192);
  const selectedFormat = formats.includes(format) ? format : 'floating';
  const isOptical = Boolean(optical || state.opticalEnabled) && outputSize <= state.opticalThreshold;
  const id = `tomato-${String(options.id ?? ++sequence).replace(/[^a-zA-Z0-9_-]/g, '-')}`;
  const motion = getMotion(state, time);
  const face = faceSVG(state, motion, id, isOptical);
  const angle = state.gradientAngle * Math.PI / 180;
  const dx = Math.sin(angle);
  const dy = -Math.cos(angle);
  const reach = (Math.abs(dx) + Math.abs(dy)) / 2;
  let defs = `<linearGradient id="${id}-color" x1="${f(.5 - dx * reach)}" y1="${f(.5 - dy * reach)}" x2="${f(.5 + dx * reach)}" y2="${f(.5 + dy * reach)}"><stop stop-color="${state.colorOne}"/><stop offset="1" stop-color="${state.colorTwo}"/></linearGradient>${face.defs}`;
  const fill = `url(#${id}-color)`;
  const blob = `<path class="silhouette" d="${blobPath(motion.radii)}" fill="${fill}"/>`;
  const scale = state.iconFill / 100;
  const scaleGroup = (content, amount) => `<g class="character" transform="translate(64 64) scale(${f(amount)}) translate(-64 -64)">${content}</g>`;
  let artwork;
  if (selectedFormat === 'floating') {
    const headSize = 128 * .68;
    const y = 128 * .12 - headSize * (16 / 180) * motion.lift;
    defs += `<radialGradient id="${id}-shadow"><stop stop-color="#000" stop-opacity="${f(.08 * Math.max(0, 1 - motion.lift * .4))}"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>`;
    artwork = `<ellipse class="shadow" cx="64" cy="111.36" rx="${f(29.44 * Math.max(.1, 1 - motion.lift * .2))}" ry="4.48" fill="url(#${id}-shadow)"/>`
      + `<g class="floating-character" transform="translate(20.48 ${f(y)}) scale(.68)">${blob}${face.svg}</g>`;
  } else if (selectedFormat === 'blob') {
    artwork = blob + face.svg;
  } else {
    const circle = selectedFormat.startsWith('circle');
    const inset = selectedFormat.endsWith('-inset');
    const container = circle ? '<circle cx="64" cy="64" r="64"'
      : `<rect width="128" height="128" rx="${f(128 * state.cornerRadius / 100)}"`;
    defs += `<clipPath id="${id}-container">${container}/></clipPath>`;
    const body = inset ? blob : `${container} class="silhouette" fill="${fill}"/>`;
    artwork = `<g clip-path="url(#${id}-container)">${container} fill="#f3ebe1"/>`
      + scaleGroup(body + face.svg, scale * (inset ? .72 : 1)) + '</g>';
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${f(outputSize)}" height="${f(outputSize)}" viewBox="0 0 128 128" role="img" aria-label="Agimon tomato" data-format="${selectedFormat}" data-optical="${isOptical}" data-animated="${Boolean(animated)}"><defs>${defs}</defs>${artwork}</svg>`;
}
