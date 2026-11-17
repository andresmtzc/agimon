// Landing page policy: play the full presentation on every device.
// Keep the controller interface used by independently mounted sections.
// Visibility checks and explicit pause controls remain in their owners.
export const landingMotion = Object.freeze({
  matches: false,
  addEventListener() {},
  removeEventListener() {},
});
