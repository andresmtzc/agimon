import { landingMotion } from '../../landing-motion.js';
import { n as getReact, t as getJsxRuntime } from '../jsx-runtime-xcbuSnkB.js';
import { t as ScrollAppearText } from '../ScrollAppearText-C2YF0ZHJ.js';
import { languages } from '../../language-data.mjs';

const { useState, useEffect } = getReact();
const { jsx } = getJsxRuntime();

export function LocalizedIntro() {
  // Match the English SSR on first render, then select the saved language.
  const [id, setId] = useState('en');
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = landingMotion;
    const change = event => setId(event.detail.id);
    const motion = () => setReduced(media.matches);
    setId(document.documentElement.dataset.agimonLanguage || 'en');
    motion();
    window.addEventListener('agimon:language', change);
    media.addEventListener('change', motion);
    return () => { window.removeEventListener('agimon:language', change); media.removeEventListener('change', motion); };
  }, []);
  const language = languages.find(item => item.id === id) || languages[0];
  // A fresh component lets GSAP clean up the old SplitText and measure the new
  // words. Mutating its animated descendants directly would corrupt the split.
  return jsx(ScrollAppearText, {
    data: { text: language.introParagraph, lang: language.locale, dir: language.dir, reducedMotion: reduced },
    className: '_scrollAppearText_1pbcf_39',
  }, `${language.id}:${reduced}`);
}
