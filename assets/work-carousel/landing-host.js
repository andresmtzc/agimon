// Agimon entrance: stable carousel loading (v2).
import { mountCarousel } from './app.js';
import { markup } from './embed-markup.js';

let fontsReady;
function prepareFonts() {
  if (!fontsReady) fontsReady = Promise.all([
    ['Lausanne', 'lausanne-600.woff2', '400 600'],
    ['Lausanne', 'lausanne-800.woff2', '700 900'],
  ].map(async ([family, file, weight]) => {
    const font = new FontFace(family, `url(${new URL(`./assets/${file}`, import.meta.url)})`, { weight });
    document.fonts.add(await font.load());
  }));
  return fontsReady;
}

class AgimonWorkCarousel extends HTMLElement {
  connectedCallback() {
    if (window.agimonEntrance?.isCarouselFailed?.()) this.dataset.carouselState = 'error';
    if (this.shadowRoot || this.dataset.carouselState === 'error') return;
    this.dataset.carouselState = 'loading';
    this.setAttribute('aria-busy', 'true');
    const shadow = this.attachShadow({ mode: 'open' });
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('./style.css', import.meta.url).href;
    const stylesReady = new Promise((resolve, reject) => { stylesheet.onload = resolve; stylesheet.onerror = () => reject(new Error('Carousel stylesheet failed to load')); });
    shadow.append(stylesheet);
    const style = document.createElement('style');
    style.textContent = `
      :host { display:block; margin:140px 0; font:400 16px/1.2 Lausanne,Arial,sans-serif; color:#191d19; direction:ltr;
        --paper:#faf9f6;--ink:#191d19;--muted:#777a70;--edge:#e3e4dc;--jade:#2f9d86;--page-pad:48px;--card-width:460px;--gap:20px }
      :host(:not([data-ready="true"])) #stories{visibility:hidden}
      .stories{padding-bottom:0}.section-toolbar{margin-bottom:23px}.work-card .card-open{line-height:normal}
      .card-copy:lang(ar),.card-copy:lang(ur),.dialog-copy:lang(ar),.dialog-copy:lang(ur){font-family:'Noto Sans Arabic',sans-serif;letter-spacing:0}
      .card-copy:lang(hi),.dialog-copy:lang(hi){font-family:'Noto Sans Devanagari',sans-serif;letter-spacing:0}
      .card-copy:lang(ar) .card-title,.card-copy:lang(ur) .card-title{letter-spacing:0;line-height:1.4}
      .card-copy:lang(hi) .card-title{letter-spacing:0;line-height:1.3}
      @media(min-width:1025px){:host{margin:180px 0}}
      @media(min-width:1729px){:host{--card-width:540px;--page-pad:64px}}
      @media(max-width:1100px){:host{--page-pad:30px;--card-width:420px}}
      @media(max-width:700px){:host{--page-pad:20px;--gap:14px;--card-width:calc(100vw - 52px);margin:100px 0}}
    `;
    shadow.append(style);
    this.language = document.documentElement.dataset.agimonLanguage || 'en';
    this.onLanguage = event => {
      this.language = event.detail.id;
      if (this.api && this.dataset.carouselState !== 'error') void this.api.setLanguage(this.language);
    };
    window.addEventListener('agimon:language', this.onLanguage);
    void Promise.all([prepareFonts(), stylesReady]).then(async () => {
      if (this.dataset.carouselState === 'error') return;
      // Insert markup only after its stylesheet is ready; no raw controls flash.
      const template = document.createElement('template'); template.innerHTML = markup; shadow.append(template.content.cloneNode(true));
      this.api = await mountCarousel(shadow, { locale: this.language, presentation: true });
      if (this.dataset.carouselState === 'error') return;
      if (this.api.getLanguage() !== this.language) await this.api.setLanguage(this.language);
      if (this.dataset.carouselState === 'error') return;
      this.dataset.ready = 'true';
      this.dataset.carouselState = 'ready';
      this.removeAttribute('aria-busy');
      this.dispatchEvent(new CustomEvent('agimon:carousel-ready', { bubbles: true, composed: true, detail: { locale: this.api.getLanguage(), height: this.getBoundingClientRect().height } }));
      // The reference's lower scroll scenes must measure the new section height.
      this.layoutObserver = new ResizeObserver(() => requestAnimationFrame(() => window.dispatchEvent(new Event('resize'))));
      this.layoutObserver.observe(shadow.querySelector('#stories'));
    }).catch(error => {
      if (this.dataset.carouselState === 'error') return;
      this.dataset.carouselState = 'error';
      this.removeAttribute('aria-busy');
      this.dispatchEvent(new CustomEvent('agimon:carousel-error', { bubbles: true, composed: true, detail: { message: error?.message || 'Carousel initialization failed' } }));
      console.error('Agimon carousel failed to initialize', error);
    });
  }
}

if (!customElements.get('agimon-work-carousel')) customElements.define('agimon-work-carousel', AgimonWorkCarousel);
