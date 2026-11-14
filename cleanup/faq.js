const dictionaries = new Map();
const supported = ['en', 'es', 'pt', 'id', 'hi', 'ar', 'ms', 'ur', 'fr', 'de'];
let labels;

async function dictionary(locale) {
  labels ||= fetch(new URL('../assets/agimon-faq/copy.json', import.meta.url)).then(response => {
    if (!response.ok) throw new Error('FAQ labels unavailable');
    return response.json();
  }).catch(error => { labels = null; throw error; });
  if (!dictionaries.has(locale)) dictionaries.set(locale,
    fetch(new URL(`../assets/agimon-footer/locales/${locale}.json`, import.meta.url)).then(response => {
      if (!response.ok) throw new Error('FAQ answers unavailable');
      return response.json();
    }).catch(error => { dictionaries.delete(locale); throw error; }));
  const [answers, additions] = await Promise.all([dictionaries.get(locale), labels]);
  return { ...answers, ...additions[locale] };
}

export function initConsolidatedFaq() {
  const root = document.getElementById('faq');
  if (!root) return () => {};
  const events = new AbortController();
  let revision = 0;
  let disposed = false;

  function reveal() {
    const node = document.getElementById(location.hash.slice(1));
    if (node && root.contains(node) && node.matches('details')) node.open = true;
  }
  function click(event) {
    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    const node = link && document.getElementById(link.getAttribute('href').slice(1));
    if (node && root.contains(node) && node.matches('details')) node.open = true;
  }
  async function setLanguage(id) {
    const locale = supported.includes(id) ? id : 'en';
    const request = ++revision;
    try {
      const copy = await dictionary(locale);
      if (disposed || request !== revision || !root.isConnected) return;
      for (const element of root.querySelectorAll('[data-faq-copy]')) {
        const key = element.dataset.faqCopy;
        if (key === 'faq6Answer') {
          const [before, after = ''] = copy[key].split('{demoLink}');
          const link = document.createElement('a');
          link.href = 'https://agimon.io/#get-started';
          link.textContent = copy.faqDemoLabel;
          element.replaceChildren(before, link, after);
        } else {
          element.textContent = copy[key];
        }
      }
      root.lang = locale;
      root.dir = ['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr';
      root.dataset.faqLocale = locale;
      root.dataset.faqReady = 'true';
    } catch (error) {
      console.error('FAQ translation unavailable', error);
    }
  }
  reveal();
  window.addEventListener('hashchange', reveal, { signal: events.signal });
  document.addEventListener('click', click, { signal: events.signal });
  window.addEventListener('agimon:language', event => { void setLanguage(event.detail.id); }, { signal: events.signal });
  void setLanguage(document.documentElement.dataset.agimonLanguage || 'en');
  return () => { disposed = true; revision++; events.abort(); };
}
