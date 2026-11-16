import { createMascot } from './mascot.js';

// Option B approved for the team illustration and Contact Us customizer.
export const MARKETING_JADE = Object.freeze(['#2f9d86', '#65cdb5']);
export const MARKETING_TOMATO = Object.freeze(['#f85235', '#f08760']);

export function createMarketingMascot(element, preset, palette = MARKETING_JADE) {
  return createMascot(element, {
    ...(preset.settings ?? preset),
    iconFill: 130,
    opticalEnabled: false,
    colorOne: palette[0],
    colorTwo: palette[1],
  });
}
