import { languages } from './language-data.mjs';
import { renderHeadline } from './language-markup.mjs';

let activeLanguage = languages[0];
export const getActiveLanguage = () => activeLanguage;
export const agimonHeaderLabel = label => label === 'Open menu' ? activeLanguage.menuOpen : label === 'Close menu' ? activeLanguage.menuClose : activeLanguage.nav[label] || label;

export function initLanguageSelector(onChange) {
  const host = document.querySelector('.agimon-language');
  const button = host?.querySelector('.language-trigger');
  const menu = host?.querySelector('.language-menu');
  if (!button || !menu) return;
  const options = [...menu.querySelectorAll('[data-language]')];
  let open = false;
  function close(returnFocus = false) {
    open = false;
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    if (returnFocus) button.focus();
  }
  function show(last = false) {
    open = true;
    menu.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    (last ? options.at(-1) : options.find(option => option.dataset.language === activeLanguage.id)).focus();
  }
  function select(id, remember = true) {
    activeLanguage = languages.find(language => language.id === id) || languages[0];
    const language = activeLanguage;
    document.documentElement.lang = language.locale;
    document.documentElement.dataset.agimonLanguage = language.id;
    document.title = `Agimon — ${language.headline}`;
    const headline = document.querySelector('.agimon-headline');
    headline.innerHTML = renderHeadline(language);
    headline.setAttribute('aria-label', language.headline);
    headline.dir = language.dir;
    const caption = document.querySelector('.channel-strip ._text_15cvm_35');
    const strong = document.createElement('strong');
    strong.textContent = language.captionLead;
    const captionEnd = document.createElement('span');
    captionEnd.className = 'channel-caption-end';
    captionEnd.textContent = language.captionEnd;
    caption.replaceChildren(strong, document.createTextNode(' '), captionEnd);
    caption.dir = language.dir;
    button.querySelector('img').src = `/assets/flags/${language.flag}.svg`;
    button.querySelector('.language-code').textContent = language.code;
    button.setAttribute('aria-label', `${language.chooseLanguage}: ${language.name}`);
    menu.setAttribute('aria-label', language.chooseLanguage);
    for (const option of options) {
      const selected = option.dataset.language === language.id;
      option.setAttribute('aria-selected', String(selected));
      option.tabIndex = selected ? 0 : -1;
    }
    if (remember) try { localStorage.setItem('agimon-landing-language', language.id); } catch {}
    onChange(language);
    window.dispatchEvent(new CustomEvent('agimon:language', { detail: { id: language.id } }));
  }
  button.addEventListener('click', () => open ? close() : show());
  button.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); show(event.key === 'ArrowUp'); }
    else if (event.key === 'Escape') close();
  });
  menu.addEventListener('click', event => {
    const option = event.target.closest('[data-language]');
    if (!option) return;
    select(option.dataset.language);
    close(true);
  });
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); close(true); return; }
    if (event.key === 'Tab') { close(); return; }
    const index = options.indexOf(document.activeElement);
    const next = { ArrowDown: (index + 1) % options.length, ArrowUp: (index - 1 + options.length) % options.length, Home: 0, End: options.length - 1 }[event.key];
    if (next !== undefined) { event.preventDefault(); options[next].focus(); }
  });
  document.addEventListener('pointerdown', event => { if (!host.contains(event.target)) close(); });
  window.addEventListener('scroll', () => close(), { passive: true });
  let saved;
  try { saved = localStorage.getItem('agimon-landing-language'); } catch {}
  select(saved || 'en', false);
  return { select, getLanguage: () => activeLanguage.id };
}
