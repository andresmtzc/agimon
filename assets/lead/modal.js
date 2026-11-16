import { COUNTRY_OPTIONS } from './countries.js';
import { EMPLOYEE_COLORS } from './colors.js';
import { modalCopy } from './modal-copy.js';
import { normalize, sendLead } from './notify.js';
import { createMarketingMascot, MARKETING_JADE } from '/marketing-mascot.mjs';

const colors = [['Jade','Jade',...MARKETING_JADE], ...EMPLOYEE_COLORS];
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const flag = code => code === 'other' ? '🌐' : String.fromCodePoint(...[...code].map(c => 127397 + c.charCodeAt(0)));

class AgimonDemoModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:'open' });
    this.busy = false;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)');
    this.locale = 'en';
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${new URL('./modal.css',import.meta.url).href}">
      <dialog aria-labelledby="demo-title" aria-describedby="demo-intro">
        <button class="close" type="button" data-close><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
        <div class="panel">
          <h2 id="demo-title" tabindex="-1" data-copy="title"></h2>
          <p id="demo-intro" data-copy="intro"></p>
          <form data-agimon-lead-form="demo" novalidate>
            <div class="customizer">
              <div class="mascot" aria-hidden="true"></div>
              <fieldset class="palette"><legend data-copy="makeYours"></legend><div class="swatches">${colors.map(([name,,a,b],i)=>`<label title="${escape(name)}" style="--swatch:linear-gradient(145deg,${a},${b})"><input type="radio" name="color" value="${escape(name)}" ${i===0?'checked':''}><span class="sr-only">${escape(name)}</span><span class="swatch" aria-hidden="true"></span></label>`).join('')}</div></fieldset>
            </div>
            <label class="field" for="demo-name"><span data-copy="name"></span><input id="demo-name" name="name" autocomplete="name" maxlength="150" required></label>
            <fieldset class="contact-method"><legend class="sr-only" data-copy="contactMethod"></legend><label><input type="radio" name="method" value="whatsapp" checked><span>WhatsApp</span></label><label><input type="radio" name="method" value="email"><span data-copy="email"></span></label></fieldset>
            <div class="phone-row">
              <div class="country-control"><span aria-hidden="true" class="country-caption"></span><span class="chevron" aria-hidden="true">⌄</span><select name="country" id="demo-country"></select></div>
              <label class="sr-only" for="demo-contact" id="contact-label"></label><input id="demo-contact" name="contact" dir="ltr" required maxlength="254">
            </div>
            <label class="field custom-code" hidden><span data-copy="customCode"></span><input name="prefix" inputmode="tel" maxlength="5" placeholder="+…" dir="ltr"></label>
            <label class="field" for="demo-needs"><span data-copy="needs"></span><textarea id="demo-needs" name="needs" rows="2" maxlength="3000"></textarea></label>
            <div class="submit-row"><button type="submit" class="submit"><span data-copy="send"></span><span aria-hidden="true">↗</span></button><p class="privacy" data-copy="privacy"></p></div>
            <p class="status" role="status" aria-live="polite" aria-atomic="true"></p>
          </form>
        </div>
      </dialog>`;
    this.dialog = this.shadowRoot.querySelector('dialog');
    this.form = this.shadowRoot.querySelector('form');
    this.controls = this.form.elements;
    this.status = this.shadowRoot.querySelector('.status');
    this.button = this.shadowRoot.querySelector('.submit');
    this.onLanguage = event => this.setLanguage(event.detail?.id || 'en');
    this.onVisibility = () => this.syncAnimation();
    this.frame = 0;
    this.elapsed = 0;
    this.lastTime = 0;
  }

  connectedCallback() {
    if (this.initialized) return;
    this.initialized = true;
    this.shadowRoot.querySelector('[data-close]').addEventListener('click',()=>this.dialog.close());
    this.dialog.addEventListener('click',event=>{
      if (event.target !== this.dialog) return;
      const box = this.dialog.getBoundingClientRect();
      if (event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom) this.dialog.close();
    });
    this.dialog.addEventListener('close',()=>{
      document.documentElement.style.overflow = this.previousOverflow || '';
      this.syncAnimation();
      if (this.trigger?.isConnected) this.trigger.focus({preventScroll:true});
    });
    this.form.addEventListener('change',event=>{
      if (event.target.name==='method'||event.target.name==='country') this.updateContact();
      if (event.target.name==='color') this.updateColor();
    });
    this.form.addEventListener('input',event=>{
      event.target.setCustomValidity?.('');
      if (!this.busy) this.setStatus('');
    });
    this.form.addEventListener('submit',event=>{ event.preventDefault(); void this.submit(); });
    window.addEventListener('agimon:language',this.onLanguage);
    document.addEventListener('visibilitychange',this.onVisibility);
    this.reduced.addEventListener('change',this.onVisibility);
    this.setLanguage(document.documentElement.dataset.agimonLanguage || 'en');
  }

  setLanguage(id) {
    this.locale = modalCopy[id] ? id : 'en';
    this.copy = modalCopy[this.locale];
    this.dialog.lang = this.locale;
    this.dialog.dir = ['ar','ur'].includes(this.locale) ? 'rtl' : 'ltr';
    for (const node of this.shadowRoot.querySelectorAll('[data-copy]')) node.textContent = this.copy[node.dataset.copy];
    this.shadowRoot.querySelector('[data-close]').setAttribute('aria-label',this.copy.close);
    const selected = this.controls.country.value || 'MX';
    let displayNames;
    try { displayNames = new Intl.DisplayNames([this.locale], {type:'region'}); } catch {}
    this.controls.country.replaceChildren(...COUNTRY_OPTIONS.map(([code,dial,en,es])=>{
      const label = code==='other' ? this.copy.otherCountry : `${displayNames?.of(code) || (this.locale==='es'?es:en)} (+${dial})`;
      return new Option(label,code);
    }));
    if (![...this.controls.country.options].some(o=>o.value==='other')) this.controls.country.add(new Option(this.copy.otherCountry,'other'));
    this.controls.country.value=selected;
    this.controls.country.setAttribute('aria-label',this.copy.country);
    this.updateContact();
    if (this.statusKey) this.setStatus(this.statusKey,this.status.dataset.state);
    if (this.busy) this.button.querySelector('span').textContent=this.copy.sending;
  }

  updateContact() {
    const email = this.controls.method.value==='email';
    const contact = this.controls.contact;
    contact.type=email?'email':'tel';
    contact.autocomplete=email?'email':'tel-national';
    contact.inputMode=email?'email':'tel';
    contact.placeholder=email?'you@business.com':this.copy.phone;
    this.shadowRoot.querySelector('#contact-label').textContent=email?this.copy.email:'WhatsApp';
    this.shadowRoot.querySelector('.country-control').hidden=email;
    this.controls.country.disabled=email||this.busy;
    const custom=!email&&this.controls.country.value==='other';
    this.shadowRoot.querySelector('.custom-code').hidden=!custom;
    this.controls.prefix.disabled=!custom||this.busy;
    this.controls.prefix.required=custom;
    const country=COUNTRY_OPTIONS.find(c=>c[0]===this.controls.country.value);
    this.shadowRoot.querySelector('.country-caption').textContent=country?`${flag(country[0])} +${country[1]}`:'🌐 +…';
    contact.setCustomValidity('');
    this.controls.prefix.setCustomValidity('');
  }

  updateColor() {
    const color=colors.find(c=>c[0]===this.controls.color.value)||colors[0];
    const stops=this.mascot?.svg.querySelectorAll('linearGradient stop');
    stops?.forEach((stop,index)=>stop.setAttribute('stop-color',color[index===0?2:3]));
  }

  async prepareMascot() {
    if (this.mascot) return;
    if (!this.mascotPromise) this.mascotPromise=(async()=>{
      const response=await fetch('/assets/selected-logo-preset.json');
      if (!response.ok) throw new Error('Mascot preset unavailable');
      const preset=await response.json();
      this.mascot=createMarketingMascot(this.shadowRoot.querySelector('.mascot'),preset);
      this.updateColor(); this.syncAnimation();
    })().catch(error=>{this.mascotPromise=null;console.error('Demo mascot failed',error);});
    await this.mascotPromise;
  }

  syncAnimation() {
    cancelAnimationFrame(this.frame); this.frame=0; this.lastTime=0;
    if (!this.mascot||!this.dialog.open||document.hidden||this.reduced.matches) return;
    const tick=now=>{
      this.elapsed+=this.lastTime?Math.min(.05,(now-this.lastTime)/1000):0; this.lastTime=now;
      this.mascot.render(this.elapsed); this.frame=requestAnimationFrame(tick);
    };
    this.frame=requestAnimationFrame(tick);
  }

  open(trigger) {
    if (this.dialog.open) return;
    if (this.statusKey==='success') this.setStatus('');
    this.trigger=trigger || document.activeElement;
    this.previousOverflow=document.documentElement.style.overflow;
    document.documentElement.style.overflow='hidden';
    this.dialog.showModal();
    this.shadowRoot.querySelector('#demo-title').focus({preventScroll:true});
    void this.prepareMascot(); this.syncAnimation();
  }

  setStatus(key,state='') {
    this.statusKey=key;
    this.status.textContent=key?this.copy[key]:'';
    this.status.dataset.state=state;
  }

  async submit() {
    if (this.busy) return;
    const {name,contact,method,country,prefix,needs,color}=this.controls;
    name.value=normalize(name.value); contact.value=normalize(contact.value);
    name.setCustomValidity(name.value?'':this.copy.nameRequired);
    contact.setCustomValidity(''); prefix.setCustomValidity('');
    let contactValue=contact.value;
    if (method.value==='whatsapp') {
      const dial=country.value==='other'?prefix.value.trim():COUNTRY_OPTIONS.find(c=>c[0]===country.value)?.[1];
      if (!/^\+?[1-9]\d{0,3}$/.test(dial||'')) prefix.setCustomValidity(this.copy.codeInvalid);
      contactValue=contact.value.startsWith('+')?'+'+contact.value.replace(/\D/g,''):'+'+String(dial).replace(/\D/g,'')+contact.value.replace(/\D/g,'');
      const valid=/^[+\d\s().-]+$/.test(contact.value)&&contact.value.replace(/\D/g,'').length>=7&&/^\+[1-9]\d{6,14}$/.test(contactValue);
      contact.setCustomValidity(valid?'':this.copy.phoneInvalid);
    }
    if (!this.form.reportValidity()) return;
    const request={kind:'demo',name:name.value,method:method.value,contact:contactValue,needs:needs.value,color:color.value,language:this.locale};
    this.busy=true; this.form.setAttribute('aria-busy','true'); this.setStatus('');
    for (const control of [...this.controls]) control.disabled=true;
    this.button.querySelector('span').textContent=this.copy.sending;
    try {
      await sendLead(request);
      this.form.reset(); this.updateColor(); this.setStatus('success','success');
    } catch(error) {
      this.setStatus(error.name==='AbortError'?'timeout':error instanceof RangeError?'tooLong':'error','error');
    } finally {
      this.busy=false; this.form.removeAttribute('aria-busy');
      for (const control of [...this.controls]) control.disabled=false;
      this.updateContact(); this.button.querySelector('span').textContent=this.copy.send;
    }
  }
}

if (!customElements.get('agimon-demo-modal')) customElements.define('agimon-demo-modal',AgimonDemoModal);
const modal=document.querySelector('agimon-demo-modal')||document.createElement('agimon-demo-modal');
if (!modal.isConnected) document.body.append(modal);
document.addEventListener('click',event=>{
  if (event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
  const anchor=event.composedPath().find(node=>node instanceof HTMLAnchorElement);
  if (!anchor) return;
  const url=new URL(anchor.href,location.href);
  const isDemo=(url.origin===location.origin&&url.hash==='#get-demo')||(url.origin==='https://agimon.io'&&url.hash==='#get-started');
  if (!isDemo) return;
  event.preventDefault();
  // Let the header's normal click handler close its mobile menu first.
  requestAnimationFrame(()=>modal.open(anchor));
},true);
window.addEventListener('agimon:open-demo',()=>modal.open());
if (location.hash==='#get-demo') modal.open();
