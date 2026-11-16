import { createMascot } from './mascot.js';

// Option B approved for the team illustration and Contact Us customizer.
export const MARKETING_JADE = Object.freeze(['#2f9d86', '#65cdb5']);

export function createMarketingMascot(element, preset) {
  return createMascot(element, {
    ...(preset.settings ?? preset),
    iconFill: 130,
    opticalEnabled: false,
    colorOne: MARKETING_JADE[0],
    colorTwo: MARKETING_JADE[1],
  });
}
