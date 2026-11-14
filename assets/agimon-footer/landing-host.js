import { mountLegalDialogs } from '../agimon-legal/dialog.js';
/* agimon-footer-ntfy-v1 */
import { sendLead } from '../lead/notify.js';
import { mountMascotStage } from './mascot-stage.js';

const locales = ['en','es','pt','id','hi','ar','ms','ur','fr','de'];
const dictionaries = new Map();
const fontLoads = new Map();
const validEmail = value => value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const markup = `
  <footer data-faq-consolidated="true" class="_footer_1y8xr_1 _dark_1y8xr_22 _skipCta_1y8xr_31" lang="en">
    <div class="_inner_1y8xr_12">
      <div class="_container_1vxje_1 container">
        <div class="_grid_1y8xr_57">
          <div class="_socialContainer_1y8xr_291">
            <p class="_copyright_1y8xr_307 copyright"></p>
            <nav class="legal-links">
              <a href="#get-demo" data-copy="contact"></a>
              <button type="button" data-copy="privacy" data-legal-dialog="privacy" aria-haspopup="dialog"></button>
              <button type="button" data-copy="deletion" data-legal-dialog="deletion" aria-haspopup="dialog"></button>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="_wrapper_1fzgv_1">
      <div class="_container_1vxje_1 container">
        <div class="_grid_1fzgv_13">
          <figure class="_sticker_1fzgv_35" aria-hidden="true">
            <div class="mascot-stage"><div data-footer-mascot></div></div>
          </figure>
          <form class="_form_1b020_1 signup-form" data-agimon-lead-form="updates" novalidate>
            <h2 class="_title_1b020_23" data-copy="updatesTitle"></h2>
            <div class="signup-fields">
              <div class="_inputContainer_1b020_65">
                <label class="sr-only" for="updates-email" data-copy="emailLabel"></label>
                <input class="_input_1b020_65" id="updates-email" name="email" type="email" inputmode="email" autocomplete="email" maxlength="254" required dir="ltr" aria-describedby="signup-status">
                <button class="_button_ruopi_1 _jade_ruopi_122 _small_ruopi_150 _submit_1b020_111" type="submit"><span class="_inner_ruopi_21" data-copy="subscribe"></span></button>
              </div>
              <p class="form-status" id="signup-status" aria-live="polite" role="status"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>`;

async function dictionary(locale) {
  if (!dictionaries.has(locale)) dictionaries.set(locale, fetch(new URL(`./locales/${locale}.json`, import.meta.url)).then(response => {
    if (!response.ok) throw new Error('Footer copy unavailable');
    return response.json();
  }).catch(error => { dictionaries.delete(locale); throw error; }));
  return dictionaries.get(locale);
}

function prepareFonts(locale) {
  const specs = [['Agimon Footer Lausanne','lausanne-600.woff2','600'],['Agimon Footer Lausanne','lausanne-750.woff2','750'],['Agimon Footer Lausanne','lausanne-800.woff2','800'],['Inter','inter-regular.woff2','400'],['Inter','inter-semibold.woff2','600']];
  if (['ar','ur'].includes(locale)) specs.push(['Noto Sans Arabic','noto-sans-arabic.woff2','400 800']);
  if (locale === 'hi') specs.push(['Noto Sans Devanagari','noto-sans-devanagari.woff2','400 800']);
  return Promise.all(specs.map(([family,file,weight]) => {
    if (!fontLoads.has(file)) fontLoads.set(file,(async () => {
      const existing = [...document.fonts].find(font => font.family.replaceAll('"','').replaceAll("'",'') === family && font.weight === weight && font.status === 'loaded');
      if (existing) return;
      const face = new FontFace(family,`url(${new URL(`./assets/${file}`,import.meta.url)})`,{weight});
      document.fonts.add(await face.load());
    })());
    return fontLoads.get(file);
  }));
}

class AgimonLandingFooter extends HTMLElement {
  async connectedCallback() {
    if (this.shadowRoot) return;
    this.revision = 0;
    this.statusKey = '';
    const root = this.attachShadow({ mode:'open' });
    const style = document.createElement('link');
    style.rel = 'stylesheet'; style.href = new URL('./footer.css', import.meta.url).href;
    const stylesReady = new Promise((resolve,reject) => { style.onload = resolve; style.onerror = reject; });
    root.append(style);
    const template = document.createElement('template'); template.innerHTML = markup; root.append(template.content.cloneNode(true));
    this.legalDialogs = mountLegalDialogs(root);
    this.onLegalClick = event => {
      const trigger = event.target instanceof Element ? event.target.closest('[data-legal-dialog]') : null;
      if (trigger) void this.legalDialogs.open(trigger.dataset.legalDialog, trigger);
    };
    root.addEventListener('click', this.onLegalClick);
    const form = root.querySelector('form'), input = root.querySelector('input');
    this.onLanguage = event => { void this.setLanguage(event.detail.id); };
    window.addEventListener('agimon:language', this.onLanguage);
    input.addEventListener('input', () => { input.removeAttribute('aria-invalid'); if (!this.submitting) this.setStatus(''); });
    form.addEventListener('submit', async event => {
      event.preventDefault(); event.stopPropagation();
      if (this.submitting || !this.copy) return;
      const email = input.value.trim();
      if (!input.validity.valid || !validEmail(email)) {
        input.setAttribute('aria-invalid','true'); this.setStatus('invalidEmail','error'); input.focus(); return;
      }
      const button = form.querySelector('button[type="submit"]');
      const buttonLabel = button.querySelector('[data-copy="subscribe"]');
      this.submitting = true;
      form.setAttribute('aria-busy','true');
      input.disabled = true; button.disabled = true;
      buttonLabel.textContent = this.copy.sending;
      this.setStatus('sending');
      try {
        await sendLead({kind:'updates',method:'email',contact:email,language:this.locale});
        input.value = ''; input.removeAttribute('aria-invalid'); this.setStatus('success','success');
      } catch {
        this.setStatus('sendError','error');
      } finally {
        this.submitting = false;
        form.removeAttribute('aria-busy');
        input.disabled = false; button.disabled = false;
        buttonLabel.textContent = this.copy.subscribe;
      }
    });
    try {
      await Promise.all([stylesReady,this.setLanguage(document.documentElement.dataset.agimonLanguage || 'en')]);
      if (!this.isConnected) return;
      this.cleanupMascot = await mountMascotStage(root.querySelector('.mascot-stage'));
      if (!this.isConnected) { this.cleanupMascot(); return; }
      this.dataset.ready = 'true';
      this.layoutObserver = new ResizeObserver(() => requestAnimationFrame(() => window.dispatchEvent(new Event('resize'))));
      this.layoutObserver.observe(root.querySelector('footer'));
    } catch(error) { console.error('Agimon footer failed to initialize',error); }
  }
  setStatus(key,state = '') {
    this.statusKey = key;
    const status = this.shadowRoot.querySelector('#signup-status');
    status.textContent = key ? this.copy[key] : ''; status.dataset.state = state;
  }
  async setLanguage(id) {
    const locale = locales.includes(id) ? id : 'en';
    const revision = ++this.revision;
    const [copy] = await Promise.all([dictionary(locale),prepareFonts(locale)]);
    if (revision !== this.revision || !this.isConnected) return;
    this.locale = locale; this.copy = copy;
    const root = this.shadowRoot, footer = root.querySelector('footer');
    footer.lang = locale; footer.dir = ['ar','ur'].includes(locale) ? 'rtl' : 'ltr';
    footer.setAttribute('aria-label',copy.footerLabel);
    for (const element of root.querySelectorAll('[data-copy]')) element.textContent = copy[element.dataset.copy];
    root.querySelector('input').placeholder = copy.emailPlaceholder;
    root.querySelector('form').setAttribute('aria-label',copy.signupLabel);
    root.querySelector('nav').setAttribute('aria-label',copy.footerLabel);
    root.querySelector('.copyright').textContent = copy.copyright.replace('{year}',new Date().getFullYear());
    if (this.statusKey) root.querySelector('#signup-status').textContent = copy[this.statusKey];
    if (this.submitting) root.querySelector('button[type="submit"] [data-copy="subscribe"]').textContent = copy.sending;
    await document.fonts.ready;
    if (revision === this.revision) this.dataset.locale = locale;
  }
  disconnectedCallback() {
    this.shadowRoot?.removeEventListener('click', this.onLegalClick);
    this.legalDialogs?.destroy();
    window.removeEventListener('agimon:language',this.onLanguage);
    this.cleanupMascot?.(); this.layoutObserver?.disconnect();
  }
}
if (!customElements.get('agimon-landing-footer')) customElements.define('agimon-landing-footer',AgimonLandingFooter);
