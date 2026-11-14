export const supportedLocales = ['en', 'es', 'pt', 'id', 'hi', 'ar', 'ms', 'ur', 'fr', 'de'];
const cache = new Map();
export async function loadLocale(id) {
  const locale = supportedLocales.includes(id) ? id : 'en';
  if (!cache.has(locale)) cache.set(locale, fetch(new URL(`./locales/${locale}.json`, import.meta.url)).then(response => {
    if (!response.ok) throw new Error(`Carousel language unavailable: ${locale}`);
    return response.json();
  }));
  return cache.get(locale);
}
export const isRTL = locale => ['ar', 'ur'].includes(locale);
export const fontFor = locale => ['ar', 'ur'].includes(locale) ? '"Noto Sans Arabic", Lausanne, Arial, sans-serif' : locale === 'hi' ? '"Noto Sans Devanagari", Lausanne, Arial, sans-serif' : 'Lausanne, Arial, sans-serif';

const widths = {
  'Open Saturday?': 410, 'YOUR SAVED ANSWER': 365, 'Yes.': 295, 'Saturday, 9 am–2 pm.': 410,
  'November': 315, 'WED': 125, 'THU': 125, 'FRI': 125, 'Consultation': 155,
  'boxes': 115, 'Available stock': 340,
  'A LITTLE SOMETHING NEW': 215, 'New': 220, 'flavor.': 220, 'Pistachio & raspberry.': 205, 'How much?': 175,
  'PAYMENT RECEIPT': 185, 'FROM': 90, 'RECEIVED': 90, 'Today, 10:42': 90, 'Ready for review': 199,
  'My': 410, 'to-dos.': 410, 'Call supplier': 345, 'Fri, 10 am': 92, 'Order supplies': 345,
  'TO: MIA': 106, 'Tracking attached': 132, 'All shipping details, ready to go': 355,
};

export function localizedArt(scene, t, locale) {
  const document = new DOMParser().parseFromString(scene.markup, 'image/svg+xml');
  const svg = document.documentElement;
  svg.setAttribute('aria-label', `${t(scene.label)}. ${t(scene.description)}`);
  svg.setAttribute('lang', locale);
  if (scene.id === 'todo' && locale !== 'en') {
    const lines = [...svg.querySelectorAll('.todo-note > g[transform]')];
    ['Call supplier', 'Fri 10'].forEach((key, index) => {
      const line = lines[index];
      if (!line) return;
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '0'); text.setAttribute('y', '29');
      text.setAttribute('font-size', index ? '29' : '32');
      text.setAttribute('fill', '#142e29'); text.setAttribute('stroke', 'none');
      text.setAttribute('data-width', index ? '180' : '260');
      if (!['ar','ur','hi'].includes(locale)) text.setAttribute('font-style', 'italic');
      text.textContent = key;
      line.replaceChildren(text);
    });
  }
  for (const text of svg.querySelectorAll('text')) {
    const original = text.textContent;
    text.dataset.sourceText = original;
    if (t(original) === undefined) continue;
    const hasWords = /[A-Za-z]/.test(original) && !['Mia L.','AG 2048 7391'].includes(original);
    if (!hasWords) { text.setAttribute('direction', 'ltr'); text.style.unicodeBidi = 'isolate'; continue; }
    text.textContent = t(original);
    const maxWidth = Number(text.getAttribute('data-width')) || widths[original] || 350;
    text.dataset.maxWidth = maxWidth;
    let inherited = text;
    while (inherited && !inherited.hasAttribute('font-size')) inherited = inherited.parentElement;
    text.dataset.fontSize = inherited?.getAttribute('font-size') || '16';
    text.style.fontFamily = fontFor(locale);
    if (['ar', 'ur', 'hi'].includes(locale)) text.style.letterSpacing = '0';
    if (original === 'Yes.' && ['ar', 'ur', 'hi'].includes(locale)) {
      text.dataset.fitTop = '292'; text.dataset.fitBottom = '406';
      text.dataset.originalY = text.getAttribute('y');
    }
    if (isRTL(locale)) {
      const anchor = text.getAttribute('text-anchor') || 'start';
      if (anchor === 'start') text.setAttribute('x', String(Number(text.getAttribute('x') || 0) + maxWidth));
      if (anchor === 'end') text.setAttribute('text-anchor', 'start');
      text.setAttribute('direction', 'rtl');
      text.style.unicodeBidi = 'plaintext';
    }
  }
  return new XMLSerializer().serializeToString(svg);
}

export function fitArt(root) {
  for (const text of root.querySelectorAll('svg text[data-max-width]')) {
    const original = Number(text.dataset.fontSize);
    text.removeAttribute('textLength'); text.removeAttribute('lengthAdjust');
    text.style.fontSize = `${original}px`;
    if (text.dataset.originalY) text.setAttribute('y', text.dataset.originalY);
    const length = text.getComputedTextLength();
    const maximum = Number(text.dataset.maxWidth);
    if (length > maximum) text.style.fontSize = `${Math.max(8, original * maximum / length)}px`;
    // Letter spacing is fixed in SVG, so one proportional pass is not enough.
    for (let pass = 0; pass < 4 && text.getComputedTextLength() > maximum; pass++) {
      text.style.fontSize = `${Math.max(8, parseFloat(text.style.fontSize) * maximum / text.getComputedTextLength() * .995)}px`;
    }
    if (text.getComputedTextLength() > maximum) {
      text.setAttribute('textLength', String(maximum)); text.setAttribute('lengthAdjust', 'spacingAndGlyphs');
    }
    if (text.dataset.fitTop) {
      const top = Number(text.dataset.fitTop), bottom = Number(text.dataset.fitBottom);
      let box = text.getBBox();
      if (box.height > bottom - top) text.style.fontSize = `${parseFloat(text.style.fontSize) * (bottom - top) / box.height}px`;
      box = text.getBBox();
      text.setAttribute('y', String(Number(text.getAttribute('y')) + (top + bottom) / 2 - box.y - box.height / 2));
    }
  }
}

const originalText = new WeakMap(), originalLabels = new WeakMap();
export function translateControls(root, t) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('svg,.card-copy,.category-nav,.dialog-copy,.dialog-top')) continue;
    const original = originalText.get(node) ?? node.textContent;
    originalText.set(node, original);
    const key = original.trim();
    if (key && t(key) !== key) node.textContent = original.replace(key, t(key));
    else node.textContent = original;
  }
  for (const element of root.querySelectorAll('[aria-label]')) {
    if (element.closest('svg') || element.matches('.card-open')) continue;
    const original = originalLabels.get(element) ?? element.getAttribute('aria-label');
    originalLabels.set(element, original);
    element.setAttribute('aria-label', t(original));
  }
  for (const element of root.querySelectorAll('[aria-roledescription]')) element.setAttribute('aria-roledescription', t('Carousel'));
}
