import { n as getReact, t as getJsxRuntime } from './assets/jsx-runtime-xcbuSnkB.js';
import { t as ScrollAppearText } from './assets/ScrollAppearText-C2YF0ZHJ.js';
import { languages } from './language-data.mjs';
import { getActiveLanguage } from './language-selector.js';

const { useSyncExternalStore } = getReact();
const { jsx } = getJsxRuntime();
const getServerLanguage = () => languages[0];
const subscribe = callback => {
  window.addEventListener('agimon:language', callback);
  return () => window.removeEventListener('agimon:language', callback);
};
const motionPreference = typeof window === 'undefined' ? null : window.matchMedia('(prefers-reduced-motion: reduce)');
const getReducedMotion = () => motionPreference?.matches || false;
const getServerReducedMotion = () => false;
const subscribeMotion = callback => {
  motionPreference?.addEventListener('change', callback);
  return () => motionPreference?.removeEventListener('change', callback);
};

export function LocalizedParagraph(props) {
  const language = useSyncExternalStore(subscribe, getActiveLanguage, getServerLanguage);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, getServerReducedMotion);
  // A fresh native component owns each translation's SplitText words and timeline.
  // This keeps React from editing nodes that the current reveal has already split.
  return jsx(ScrollAppearText, {
    ...props,
    data: { ...props.data, text: language.introParagraph, lang: language.locale, dir: language.dir, reducedMotion },
  }, `${language.id}:${reducedMotion}`);
}
