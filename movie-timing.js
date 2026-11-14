// The artwork fades inside a persistent sand stage; transport controls stay usable.
export const MOVIE_FADE_END = 52;
export const MOVIE_RESET_HOLD = 1.75;
export const MOVIE_DURATION = MOVIE_FADE_END + MOVIE_RESET_HOLD;
export const MOBILE_REQUEST_AT = 2.4;
export const MOBILE_READING_HOLD_AT = 2.95;
export const MOBILE_READING_HOLD = 2;

export function movieStageOpacity(time, reducedMotion = false) {
  if (reducedMotion) return 1;
  if (time < .5) return Math.max(0, time / .5);
  if (time > MOVIE_FADE_END - .6) return Math.max(0, (MOVIE_FADE_END - time) / .6);
  return 1;
}

// Keep the existing storyboard's timestamps, adding one reading beat after the
// mobile request has fully entered. Pausing, leaving the viewport and switching
// tabs cannot spend this beat: only actual, visible playback advances the clock.
export function advanceMovieClock(time, delta, viewMode, holdRemaining = MOBILE_READING_HOLD) {
  let remaining = Math.max(0, delta);
  let nextTime = time;
  let nextHold = Math.max(0, holdRemaining);
  if (viewMode === 'mobile' && time <= MOBILE_READING_HOLD_AT && nextHold > 0) {
    const beforeHold = Math.min(remaining, MOBILE_READING_HOLD_AT - time);
    nextTime += beforeHold;
    remaining -= beforeHold;
    if (nextTime >= MOBILE_READING_HOLD_AT) {
      const consumed = Math.min(remaining, nextHold);
      nextHold -= consumed;
      remaining -= consumed;
    }
  }
  return { time: Math.min(MOVIE_DURATION, nextTime + remaining), holdRemaining: nextHold };
}
