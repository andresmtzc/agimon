import { languages } from './language-data.mjs';

const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const strokes = '<svg class="you-strokes" viewBox="0 0 124 34" preserveAspectRatio="none" fill="none" aria-hidden="true"><path class="stroke-one" d="M4 14C31 9 49 14 73 9S102 7 119 4" pathLength="1"/><path class="stroke-two" d="M9 22C35 19 56 22 78 23S101 26 114 27" pathLength="1"/></svg>';

export function renderHeadline(language) {
  return language.lines.map(line => '<span class="headline-line" aria-hidden="true">' + line.map((token, index) => {
    const punctuation = token.accent ? token.text.match(/[.!۔]$/)?.[0] || '' : '';
    const text = escape(punctuation ? token.text.slice(0, -1) : token.text);
    const prefix = token.mobileBreakBefore ? '<span class="mobile-break"></span> ' : '';
    let word;
    if (token.accent === 'chat') word = `<span class="intro-word chat-word"><span class="chat-normal">${text}</span><span class="chat-bubble"><span class="chat-cursive">${text}</span></span></span>`;
    else if (token.accent === 'works') word = `<span class="intro-word works-word"><span class="works-highlight"></span><span class="works-label">${text}</span></span>`;
    else if (token.accent === 'you') word = `<span class="intro-word you-word">${text}${strokes}</span>`;
    else word = `<span class="intro-word">${text}</span>`;
    return (index && !/^[.!۔]$/.test(token.text) ? ' ' : '') + prefix + word + (punctuation ? `<span class="intro-word final-period">${punctuation}</span>` : '');
  }).join('') + '</span>').join('\n');
}

export function renderLanguageControl() {
  return `<button id="agimon-language-button" class="language-trigger" type="button" aria-haspopup="listbox" aria-controls="agimon-language-list" aria-expanded="false" aria-label="Choose language: English"><img src="/assets/flags/us.svg" width="20" height="14" alt=""><span class="language-code">EN</span><svg viewBox="0 0 12 12" width="10" height="10" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  <div id="agimon-language-list" class="language-menu" role="listbox" aria-label="Choose language" hidden>${languages.map(language => `<button type="button" class="language-option" role="option" data-language="${language.id}" aria-label="${escape(language.name)}" aria-selected="${language.id === 'en'}" tabindex="${language.id === 'en' ? 0 : -1}" title="${escape(language.name)}"><svg class="language-check" viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true"><path d="m2 6 2.5 2.5L10 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><img src="/assets/flags/${language.flag}.svg" width="20" height="14" alt=""><span>${language.code}</span><span class="language-native" lang="${language.locale}" dir="${language.dir}">${escape(language.name)}</span></button>`).join('')}</div>`;
}
