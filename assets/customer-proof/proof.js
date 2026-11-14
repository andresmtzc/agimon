const locales = ['en', 'es', 'pt', 'id', 'hi', 'ar', 'ms', 'ur', 'fr', 'de'];
const fontLoads = new Map();
let dictionaries;

function loadCopy() {
  dictionaries ||= fetch(new URL('./proof-copy.json', import.meta.url)).then(response => {
    if (!response.ok) throw new Error('Customer story translations unavailable');
    return response.json();
  }).catch(error => { dictionaries = null; throw error; });
  return dictionaries;
}

async function prepareFont(locale) {
  const spec = ['ar', 'ur'].includes(locale)
    ? ['Noto Sans Arabic', 'noto-sans-arabic.woff2']
    : locale === 'hi' ? ['Noto Sans Devanagari', 'noto-sans-devanagari.woff2'] : null;
  if (!spec) return;
  const [family, file] = spec;
  if (!fontLoads.has(file)) fontLoads.set(file, (async () => {
    const existing = [...document.fonts].find(font => font.family.replaceAll('"', '').replaceAll("'", '') === family && font.status === 'loaded');
    if (existing) return;
    const font = new FontFace(family, `url(${new URL(`../agimon-footer/assets/${file}`, import.meta.url)})`, { weight: '400 800' });
    document.fonts.add(await font.load());
  })().catch(error => { fontLoads.delete(file); throw error; }));
  return fontLoads.get(file);
}

/** Translate existing text nodes; all illustration and animation nodes stay put. */
export function mountProofLanguage(host) {
  const root = host.shadowRoot;
  const section = root.querySelector('#customer-proof-section');
  const controller = new AbortController();
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = new URL('./proof.css', import.meta.url).href;
  const stylesReady = new Promise((resolve, reject) => {
    style.onload = resolve;
    style.onerror = () => reject(new Error('Customer story language styles unavailable'));
  });
  root.append(style);
  let disposed = false;
  let revision = 0;
  let current;
  let fitFrame = 0;

  const bindings = [
    ['.section-eyebrow .pill', 'eyebrow'],
    ['.card--alejandra h3', 'aleTitle'], ['.card--alejandra .card-copy p', 'aleBody'], ['.card--alejandra .customer small', 'aleCategory'],
    ['.card--rockstone h3', 'rockTitle'], ['.card--rockstone .card-copy p', 'rockBody'], ['.card--rockstone .customer small', 'rockCategory'],
    ['.card--truly h3', 'trulyTitle'], ['.card--truly .card-copy p', 'trulyBody'], ['.card--truly .customer small', 'trulyCategory'],
  ].map(([selector, key]) => ({ element: root.querySelector(selector), key }));
  const texts = scene => [...root.querySelectorAll(`[data-scene="${scene}"] svg text`)];
  const svgBindings = [
    ['alejandra', 'A LITTLE HELP. MORE POSSIBILITY.', 'aleCaption', 418],
    ['alejandra', 'MORE SALES', 'aleSales', 246],
    ['rockstone', 'SATURDAY', 'rockSaturday', 280],
    ['rockstone', "ONE EVENING'S SALES", 'rockEvening', 310],
    ['rockstone', 'AWAY', 'rockAway', 69],
    ['truly', 'AUTOMATIC REPLIES', 'trulyAutomatic', 264],
    ['truly', 'Hours', 'trulyHours', 184],
    ['truly', 'Location', 'trulyLocation', 184],
    ['truly', 'Orders', 'trulyOrders', 184],
  ].flatMap(([scene, text, key, width]) => texts(scene).filter(element => element.textContent.trim() === text).map(element => ({
    element, key, width, x: Number(element.getAttribute('x')),
    size: Number(element.getAttribute('font-size')),
    spacing: element.getAttribute('letter-spacing') || '0',
    family: element.getAttribute('font-family'),
  })));

  function refreshControls() {
    if (!current || disposed) return;
    const button = root.querySelector('#proof-motion-toggle');
    const frozen = host.paused || host.reduced?.matches;
    const label = frozen ? current.play : current.pause;
    button?.setAttribute('aria-label', label);
    if (button) button.title = label;
  }

  function fitSvg() {
    if (disposed || !host.isConnected) return;
    for (const { element, width, size } of svgBindings) {
      element.removeAttribute('textLength');
      element.removeAttribute('lengthAdjust');
      element.setAttribute('font-size', size);
      let measured = element.getComputedTextLength();
      if (!measured || measured <= width) continue;
      // Fit in SVG coordinates, independent of its displayed responsive scale.
      const fitted = Math.max(size * .8, size * width / measured);
      element.setAttribute('font-size', fitted.toFixed(2));
      measured = element.getComputedTextLength();
      if (measured > width + .1) {
        element.setAttribute('textLength', width);
        element.setAttribute('lengthAdjust', 'spacingAndGlyphs');
      }
    }
    host.measureStack?.();
  }
  function scheduleFit() {
    cancelAnimationFrame(fitFrame);
    fitFrame = requestAnimationFrame(fitSvg);
  }
  const isolate = (text, rtl) => rtl ? text.replace(/MX\$30,000|1,326|15%|Agimon/g, value => `\u2068${value}\u2069`) : text;

  async function setLanguage(id) {
    const locale = locales.includes(id) ? id : 'en';
    const request = ++revision;
    try {
      const [allCopy] = await Promise.all([loadCopy(), prepareFont(locale), stylesReady]);
      if (disposed || request !== revision || !host.isConnected) return;
      const copy = allCopy[locale];
      if (!copy) throw new Error(`Missing customer story locale: ${locale}`);
      const rtl = ['ar', 'ur'].includes(locale);
      current = copy;
      section.lang = locale;
      section.dir = rtl ? 'rtl' : 'ltr';
      host.lang = locale;
      host.dir = section.dir;
      host.dataset.proofLocale = locale;
      for (const { element, key } of bindings) if (element) element.textContent = isolate(copy[key], rtl);
      root.querySelector('#section-title').replaceChildren(copy.titleOne, document.createElement('br'), copy.titleTwo);
      const strong = document.createElement('strong');
      strong.textContent = copy.introStrong;
      root.querySelector('.section-intro > p').replaceChildren(strong, document.createElement('br'), isolate(copy.introRest, rtl));
      for (const name of root.querySelectorAll('.customer strong')) name.dir = 'ltr';
      for (const { element, key, width, x, size, spacing, family } of svgBindings) {
        element.textContent = copy[key];
        element.classList.add('proof-localized-svg-text');
        element.setAttribute('direction', rtl ? 'rtl' : 'ltr');
        element.setAttribute('unicode-bidi', 'isolate');
        // The artwork remains LTR; right-to-left labels start at the right edge
        // of their existing safe text box instead of overflowing its left side.
        element.setAttribute('x', rtl ? x + width : x);
        element.setAttribute('text-anchor', 'start');
        element.setAttribute('font-size', size);
        element.setAttribute('letter-spacing', locale === 'en' ? spacing : '0');
        const languageFont = ['ar', 'ur'].includes(locale) ? 'Noto Sans Arabic' : locale === 'hi' ? 'Noto Sans Devanagari' : null;
        if (languageFont) element.setAttribute('font-family', `${languageFont}, Arial, sans-serif`);
        else if (family) element.setAttribute('font-family', family);
        else element.removeAttribute('font-family');
      }
      for (const [scene, key] of [['alejandra', 'aleArtLabel'], ['rockstone', 'rockArtLabel'], ['truly', 'trulyArtLabel']]) {
        const svg = root.querySelector(`[data-scene="${scene}"] svg`);
        svg?.setAttribute('aria-label', copy[key]);
        svg?.setAttribute('lang', locale);
      }
      refreshControls();
      await document.fonts.ready;
      if (disposed || request !== revision) return;
      fitSvg();
      host.dataset.proofLanguageReady = locale;
      host.dataset.locale = locale;
      scheduleFit();
    } catch (error) {
      if (!disposed && request === revision) console.error('Customer story localization failed', error);
    }
  }
  window.addEventListener('agimon:language', event => { void setLanguage(event.detail.id); }, { signal: controller.signal });
  window.addEventListener('resize', scheduleFit, { signal: controller.signal, passive: true });
  void setLanguage(document.documentElement.dataset.agimonLanguage || 'en');
  return {
    refreshControls,
    destroy() {
      disposed = true;
      revision++;
      controller.abort();
      cancelAnimationFrame(fitFrame);
      style.remove();
      delete host.dataset.proofLanguageReady;
      delete host.dataset.locale;
    },
  };
}
