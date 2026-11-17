import { landingMotion } from './landing-motion.js';
import { isPhoneMovie, mountPhoneMovieView } from './movie-phone-view.js?preview=event-anchor-v5';
// Agimon product movie: persistent sand and a readable mobile opening.
import { MOVIE_DURATION, MOBILE_REQUEST_AT, MOBILE_READING_HOLD_AT, MOBILE_READING_HOLD, movieStageOpacity, movieStoryTime, advanceMovieClock } from './movie-timing.js';
import { mountViewSwitchMotion } from './movie-view-motion.js';
import { getActiveLanguage } from './language-selector.js';
import { movieCopy } from './booking-movie-copy.mjs?release=luma-workspace-v11';
import { movieIcons } from './booking-movie-icons.mjs';
import { renderSVG } from './renderer.js';
import { renderDashboard } from './booking-dashboard.mjs';
import { renderInventoryBody } from './booking-inventory.mjs';
import { STOCK_DEMO } from './booking-demo-stock.mjs';
import { appointmentPosition } from './booking-calendar-position.mjs';

// The same source of truth as the approved header/logo lab, including optical sizes.
const presetResponse = await fetch(new URL('./assets/selected-logo-preset.json', import.meta.url));
if (!presetResponse.ok) throw new Error('Approved avatar preset unavailable');
const avatarPreset = await presetResponse.json();

export { MOVIE_DURATION } from './movie-timing.js';
export const MOVIE_CHAPTERS = [0, 3.5, 12, 18, 23, 28, 33, 42.8, 49, 54, 61, 79, 88, 92, 102];
const BOOKING_CHOICE_AT = 15.3;
const STOCK_COMPOSE = {prefix:63.05,query:63.85,filter:64.35,pick:64.8,edit:65.15,clear:65.35,quantity:65.55,editEnd:65.8,suffix:65.85,ready:66.5};
const OPS_HISTORY = [{speaker:'Emma',key:'opsRoomReady',minute:'40'},{speaker:'Lucas',key:'opsStockReady',minute:'42'},{speaker:'Emma',key:'opsTeamReady',minute:'43'}];
const PHONE_FOCUS = [[0,'inbox'],[1.9,'chat'],[3.5,'work'],[9.2,'chat'],[23,'work'],[28,'chat'],[33,'work'],[42.8,'chat'],[52,'work'],[57.8,'inbox'],[59,'chat'],[71.2,'inbox'],[73,'work'],[82,'chat'],[85,'inbox'],[86,'chat'],[96,'work']];
const progress = (time,start,duration) => Math.max(0,Math.min(1,(time-start)/duration));
const easeOut = value => 1-Math.pow(1-value,3);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paths = {
  play:'m9 5 11 7-11 7Z', pause:'M8 5v14M16 5v14', replay:'M3 10a9 9 0 1 1 2 9M3 4v6h6',
  calendar:'M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM3 10h18M7 3v4M17 3v4M7 14h2M13 14h2M7 17h2',
  reply:'M9 10V5l-7 7 7 7v-5h5a6 6 0 0 1 6 6v-3a7 7 0 0 0-7-7Z',
  auto:'m12 2-7 11h6l-1 9 9-13h-7Z', receipt:'M6 3h12v18l-3-2-3 2-3-2-3 2ZM9 7h6M9 11h6M9 15h3',
  todo:'m3 6 2 2 4-4M12 6h9M3 13l2 2 4-4M12 13h9M12 20h9', search:'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6',
  menu:'M4 6h16M4 12h16M4 18h16', chevron:'m9 5 7 7-7 7', back:'m15 5-7 7 7 7', check:'m5 12 4 4L19 6',
  plus:'M12 5v14M5 12h14', send:'m3 3 19 9-19 9 4-9Zm4 9h15', arrow:'M4 12h16m-6-6 6 6-6 6',
  attachment:'m8 12 7-7a4 4 0 0 1 6 6L11 21a6 6 0 0 1-8-8L13 3', clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
  box:'m3 7 9-5 9 5v10l-9 5-9-5Zm0 0 9 5 9-5M12 12v10M7 5l10 5', more:'M5 12h.01M12 12h.01M19 12h.01',
  mail:'M3 5h18v14H3Zm0 0 9 8 9-8', sparkle:'m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z',
};
const icon = (name, extra='') => movieIcons[name] || `<svg class="icon ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.sparkle}"/></svg>`;

class AgimonBookingMovie extends HTMLElement {
  // Content keeps one storyboard clock; the date transition inserts a shared
  // two-second breath without desynchronizing cursor, phone focus or bubbles.
  get storyTime() { return movieStoryTime(this.t); }

  connectedCallback() {
    if (this.root) return;
    this.root = this.shadowRoot || this.attachShadow({mode:'open'});
    this.viewMode=isPhoneMovie(this)?'mobile':this.viewMode||'desktop';
    this.manualPhone=false;this.activePhonePanel='inbox';this.summaryRecord=null;this.dashboardOpen=null;this.inventoryDetail=null;this.receiptDetail=null;
    this.openingReadRemaining = MOBILE_READING_HOLD;
    this.t = 0; this.playing = false; this.started = false; this.inView = false; this.raf = 0; this.loops = 0;
    this.motion = landingMotion;
    if (this.motion.matches) this.t = 36;
    this.onLanguage = () => this.setLanguage();
    this.onVisibility = () => this.syncPlayback();
    this.onMotion = () => { if (this.motion.matches) this.playing = false; this.render(true); this.syncPlayback(); };
    window.addEventListener('agimon:language',this.onLanguage);
    document.addEventListener('visibilitychange',this.onVisibility);
    this.motion.addEventListener('change',this.onMotion);
    this.observer = new IntersectionObserver(entries => {
      const required=this.viewMode==='mobile'?Math.min(.55,innerHeight*.7/Math.max(1,entries[0].boundingClientRect.height)):.25;
      this.inView = entries[0].isIntersecting && entries[0].intersectionRatio >= required;
      if (this.inView && !this.started && !this.motion.matches) { this.started = true; this.playing = true; }
      this.syncPlayback();
    },{threshold:Array.from({length:21},(_,index)=>index/20)});
    this.avatarResizeObserver = new ResizeObserver(()=>{this.updateAvatar();this.updateMotion();this.markPhone();this.positionPhone(false);});
    this.onAvatarStylesheetLoad = () => {this.updateAvatar();this.updateMotion();this.markPhone();this.observePlaybackStage();this.syncPlayback();};
    this.setLanguage();
    this.cleanupPhoneMovieView=mountPhoneMovieView(this);
  }
  disconnectedCallback() {
    this.cleanupPhoneMovieView?.();
    this.cleanupViewSwitchMotion?.();
    cancelAnimationFrame(this.raf); this.observer?.disconnect();
    this.avatarResizeObserver?.disconnect();
    this.avatarResizeObserver = null;
    this.avatarStylesheet?.removeEventListener('load',this.onAvatarStylesheetLoad);
    this.avatarStylesheet = null;
    window.removeEventListener('agimon:language',this.onLanguage);
    document.removeEventListener('visibilitychange',this.onVisibility);
    this.motion?.removeEventListener('change',this.onMotion);
    // Reconnected instances get a clean lifecycle without duplicate listeners.
    this.root = null;
  }
  setLanguage() {
    this.cleanupViewSwitchMotion?.();
    const wasFocused = this.root?.activeElement?.dataset.control;
    this.language = getActiveLanguage();
    this.copy = movieCopy[this.language.id];
    if (!this.copy) throw new Error(`Missing movie language: ${this.language.id}`);
    const loc = this.language.locale;
    this.inboxTimeFormat=new Intl.DateTimeFormat(loc,{hour:'2-digit',minute:'2-digit',hourCycle:'h23',timeZone:'UTC'});
    const date = new Date('2026-11-20T15:00:00Z');
    this.values = {
      day:new Intl.DateTimeFormat(loc,{weekday:'long',month:'short',day:'numeric',timeZone:'UTC'}).format(date),
      shortDay:new Intl.DateTimeFormat(loc,{weekday:'short',day:'numeric',month:'short',timeZone:'UTC'}).format(date),
      firstTime:new Intl.DateTimeFormat(loc,{hour:'numeric',minute:'2-digit',timeZone:'UTC'}).format(new Date('2026-11-20T13:00:00Z')),
      time:new Intl.DateTimeFormat(loc,{hour:'numeric',minute:'2-digit',timeZone:'UTC'}).format(date),
      amount:new Intl.NumberFormat(loc,{style:'currency',currency:'MXN',currencyDisplay:'code',maximumFractionDigits:0}).format(500),
    };
    this.values.firstEnd = new Intl.DateTimeFormat(loc,{hour:'numeric',minute:'2-digit',timeZone:'UTC'}).format(new Date('2026-11-20T13:30:00Z'));
    this.values.end = new Intl.DateTimeFormat(loc,{hour:'numeric',minute:'2-digit',timeZone:'UTC'}).format(new Date('2026-11-20T15:30:00Z'));
    this.values.quantity = new Intl.NumberFormat(loc).format(STOCK_DEMO.used);
    this.values.item = this.copy.usageItem;
    // One localized sentence supplies both the visible draft and sent message.
    const [prefix,afterQuantity] = this.copy.usedItem.split('{quantity}');
    const [connector,suffix] = afterQuantity.split('{item}');
    this.stockConnector=connector;
    const segments=text=>typeof Intl.Segmenter==='function'
      ? [...new Intl.Segmenter(loc,{granularity:'grapheme'}).segment(text)].map(part=>part.segment)
      : Array.from(text);
    this.stockPrefixSegments=segments(prefix);
    this.stockSuffixSegments=segments(suffix);
    const itemSegments=typeof Intl.Segmenter==='function'
      ? [...new Intl.Segmenter(loc,{granularity:'grapheme'}).segment(this.rawText('tip'))].map(item=>item.segment)
      : Array.from(this.rawText('tip'));
    this.stockQuerySegments=['/',...itemSegments.slice(0,2).map(letter=>letter.toLocaleLowerCase(loc))];
    this.summaryDraftSegments=typeof Intl.Segmenter==='function'
      ? [...new Intl.Segmenter(loc,{granularity:'grapheme'}).segment(this.rawText('summaryPrompt'))].map(item=>item.segment)
      : Array.from(this.rawText('summaryPrompt'));
    this.setAttribute('view',this.viewMode);
    this.setAttribute('lang',loc); this.setAttribute('dir',this.language.dir);
    this.avatarStylesheet?.removeEventListener('load',this.onAvatarStylesheetLoad);
    this.root.innerHTML = `<link rel="stylesheet" href="/booking-movie.css?release=ops-avatar-top-v11"><div class="movie-presentation">
      <div class="view-switch" role="tablist" aria-label="${this.text('viewOptions')}">${['desktop','mobile'].map(view=>`<button type="button" role="tab" id="view-${view}" data-view="${view}" aria-controls="movie-screen" aria-selected="${view===this.viewMode}" tabindex="${view===this.viewMode?0:-1}">${this.text(view==='desktop'?'viewDesktop':'viewMobile')}</button>`).join('')}</div>
      <div class="mobile-intro"><h3>${this.text('mobileHeadline')}</h3><p>${this.text('mobileBody')}</p></div>
      <div class="film" id="movie-screen" role="tabpanel" aria-label="${escape(this.copy.loopDescription+" "+this.copy.sceneDescription+" "+this.copy.summaryDescription)}">
      <div class="app-stage" aria-hidden="true"><div class="workspace"><aside class="inbox">${this.sidebar()}</aside><div class="work-area" data-desktop-work></div><div class="mobile-dock">${this.dock()}</div></div>${this.phoneViews()}<div class="time-jump" hidden><div><svg class="time-hourglass" viewBox="0 0 40 40" aria-hidden="true"><path class="sand-top" d="M12 10H28L20 20Z"/><path class="sand-bottom" d="M12 30H28L20 30Z"/><path class="sand-stream" d="M20 20v9"/><path class="hourglass-outline" d="M10 7h20M10 33h20M12 8c0 6 2 8 8 12-6 4-8 6-8 12h16c0-6-2-8-8-12 6-4 8-6 8-12Z"/></svg><span>${this.text('daysPass')}</span><strong>${escape(this.values.shortDay)}</strong><p>${this.text('appointmentDay')}</p></div></div><div class="movie-pointer" aria-hidden="true"><svg viewBox="0 0 24 28"><path d="M3 2v21l6-5 4 8 4-2-4-8h8Z" fill="#162f29" stroke="white" stroke-width="1.8" stroke-linejoin="round"/></svg><span>${escape(this.copy.teamMember)}</span></div></div>
      <div class="phone-nav">${[['inbox','inbox'],['chat','panelChat'],['work','panelWork']].map(([panel,key])=>`<button type="button" data-panel="${panel}" aria-label="${this.text('choosePanel',{panel:this.copy[key]})}">${this.text(key)}</button>`).join('')}</div>
      <div class="movie-controls"><button class="movie-control" data-control="motion" type="button"></button><button class="movie-control" data-control="restart" type="button" aria-label="${this.text('replay')}" title="${this.text('replay')}">${icon('replay')}</button></div></div></div>`;
    this.$ = selector => this.root.querySelector(selector);
    this.installViews();
    this.cleanupViewSwitchMotion = mountViewSwitchMotion(this);
    this.avatarStylesheet = this.$('link[rel=stylesheet]');
    this.avatarStylesheet.addEventListener('load',this.onAvatarStylesheetLoad,{once:true});
    this.$('[data-control=motion]').addEventListener('click',()=>{
      this.started=true; this.playing=!this.playing; if(this.playing)this.manualPhone=false;
      if(this.summaryRecord){this.summaryRecord=null;this.render(true);}
      this.syncPlayback();
    });
    this.$('[data-control=restart]').addEventListener('click',()=>{
      this.started=true; this.playing=true; this.manualPhone=false; this.lastState=''; this.seek(0);
    });
    // Small transport buttons sit outside the product UI. Tapping the picture
    // also pauses/resumes, without introducing a timeline or seeking controls.
    this.$('.app-stage').addEventListener('click',event=>{
      if(event.target.closest('[data-target=calendar-back]')){
        this.playing=false;this.manualPhone=false;this.seek(28);return;
      }
      const receiptOpen=event.target.closest('[data-target=receipt]');
      const receiptClose=event.target.closest('[data-receipt-close]');
      if(receiptOpen||receiptClose){
        this.receiptDetail=Boolean(receiptOpen);this.playing=false;this.manualPhone=this.viewMode==='mobile';
        if(this.manualPhone)this.activePhonePanel='work';
        this.render(true);this.syncPlayback();return;
      }
      const itemOpen=event.target.closest('[data-inventory-open]');
      const itemClose=event.target.closest('[data-inventory-close]');
      if(itemOpen||itemClose){
        this.inventoryDetail=Boolean(itemOpen);this.playing=false;this.manualPhone=this.viewMode==='mobile';
        if(this.manualPhone)this.activePhonePanel='work';
        this.render(true);this.syncPlayback();
        const context=this.viewMode==='desktop'?this.$('[data-desktop-work]'):this.$('.phone-panel[data-panel=work]');
        context.querySelector(itemOpen?'[data-inventory-close]':'[data-inventory-open]')?.focus({preventScroll:true});return;
      }
      if(event.target.closest('[data-target=stock-source]')){
        this.playing=false;this.manualPhone=false;this.seek(88.3);return;
      }
      const open=event.target.closest('[data-dashboard-open]');
      const close=event.target.closest('[data-dashboard-close]');
      if(open||close){
        this.dashboardOpen=Boolean(open);this.summaryRecord=null;this.playing=false;this.manualPhone=false;
        this.render(true);this.syncPlayback();
        const context=this.viewMode==='desktop'?this.$('[data-desktop-work]'):this.$(`.phone-panel[data-panel=${open?'work':'chat'}]`);
        context.querySelector(open?'[data-dashboard-close]':'[data-dashboard-open]')?.focus({preventScroll:true});return;
      }
      const reference=event.target.closest('[data-summary-record]');
      if(reference){
        this.summaryRecord=reference.dataset.summaryRecord;this.playing=false;this.manualPhone=false;
        this.render(true);this.syncPlayback();
        const context=this.viewMode==='desktop'?this.$('[data-desktop-work]'):this.$(`.phone-panel[data-panel=${this.activePhonePanel}]`);
        context.querySelector('[data-summary-return]')?.focus({preventScroll:true});return;
      }
      if(event.target.closest('[data-summary-return]')){
        const record=this.summaryRecord;this.summaryRecord=null;this.manualPhone=false;this.render(true);this.syncPlayback();
        const context=this.viewMode==='desktop'?this.$('[data-desktop-work]'):this.$('.phone-panel[data-panel=chat]');
        context.querySelector(`[data-summary-record=${record}]`)?.focus({preventScroll:true});return;
      }
      if(this.viewMode==='mobile')return;
      this.started=true; this.playing=!this.playing; if(this.playing)this.manualPhone=false;
      if(this.summaryRecord){this.summaryRecord=null;this.render(true);}
      this.syncPlayback();
    });
    this.lastAvatarFrame = -1;
    this.lastState='';this.render(true);this.observePlaybackStage();this.syncPlayback();
    if(wasFocused)this.$(`[data-control=${wasFocused}]`)?.focus({preventScroll:true});
  }
  phoneViews() {
    return `<div class="phone-track">
      <div class="phone-panel" data-panel="inbox"><div class="phone-caption">${this.text('inbox')}</div><div class="phone-screen"><aside class="inbox" data-phone-inbox></aside></div></div>
      <div class="phone-panel" data-panel="chat"><div class="phone-caption">${this.text('panelChat')}</div><div class="phone-screen"><div class="work-area" data-phone-chat></div><div class="mobile-dock">${this.dock()}</div></div></div>
      <div class="phone-panel" data-panel="work"><div class="phone-caption">${this.text('panelWork')}</div><div class="phone-screen"><div class="work-area" data-phone-work></div><div class="mobile-dock">${this.dock()}</div></div></div>
    </div>`;
  }
  phoneWorkKind() {
    if(this.summaryRecord)return this.summaryRecord;
    if(this.scene()==='dashboard')return 'dashboard';
    if(this.storyTime>=73)return 'inventory';
    if(this.storyTime>=52)return 'calendar';
    if(this.storyTime>=33)return 'receipts';
    return 'calendar';
  }
  phoneWork() {
    if(this.summaryRecord)return this.summaryRecordView();
    const kind=this.phoneWorkKind();
    return kind==='dashboard'?this.dashboard():kind==='inventory'?this.inventory():kind==='receipts'?this.receipts():this.calendar();
  }
  installViews() {
    this.root.querySelectorAll('[data-view]').forEach(button=>{
      button.addEventListener('click',()=>this.switchView(button.dataset.view));
      button.addEventListener('keydown',event=>{
        if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
        event.preventDefault();
        const view=event.key==='Home'?'desktop':event.key==='End'?'mobile':this.viewMode==='desktop'?'mobile':'desktop';
        this.switchView(view);this.$(`[data-view=${view}]`).focus({preventScroll:true});
      });
    });
    this.root.querySelectorAll('.phone-nav [data-panel]').forEach(button=>{
      button.addEventListener('click',()=>{
        this.manualPhone=true;this.started=true;this.playing=false;
        this.activePhonePanel=button.dataset.panel;this.syncPlayback();this.positionPhone(true);
      });
    });
    const track=this.$('.phone-track');
    track.addEventListener('pointerdown',()=>{
      if(track.scrollWidth<=track.clientWidth+1)return;
      this.manualPhone=true;this.started=true;this.playing=false;this.syncPlayback();
    },{passive:true});
    track.addEventListener('wheel',event=>{
      if(Math.abs(event.deltaX)<=Math.abs(event.deltaY))return;
      this.manualPhone=true;this.playing=false;this.syncPlayback();
    },{passive:true});
    track.addEventListener('scroll',()=>{
      if(!this.manualPhone)return;
      const bounds=track.getBoundingClientRect();
      const panels=[...track.querySelectorAll('.phone-panel')];
      const nearest=panels.reduce((best,panel)=>Math.abs(panel.getBoundingClientRect().left-bounds.left)<Math.abs(best.getBoundingClientRect().left-bounds.left)?panel:best);
      this.activePhonePanel=nearest.dataset.panel;this.markPhone();
    },{passive:true});
    this.lastPhonePosition='';
  }
  observePlaybackStage() {
    this.observer?.disconnect();
    this.inView=false;
    if(this.avatarStylesheet?.sheet)this.observer?.observe(this.$('.app-stage'));
  }
  switchView(view) {
    if(!['desktop','mobile'].includes(view))return;
    if(view==='desktop'&&isPhoneMovie(this))view='mobile';
    if(view===this.viewMode)return;
    this.viewMode=view;this.setAttribute('view',view);this.manualPhone=false;
    this.root.querySelectorAll('[data-view]').forEach(button=>{
      const selected=button.dataset.view===view;
      button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;
    });
    this.lastPhonePosition='';this.render(true);this.positionPhone(false);this.observePlaybackStage();this.syncPlayback();
  }
  updatePhoneFocus() {
    if(!this.$||!this.$('.phone-track'))return;
    if(!this.manualPhone){
      this.activePhonePanel=PHONE_FOCUS[0][1];
      for(const [at,panel] of PHONE_FOCUS)if(this.storyTime>=at)this.activePhonePanel=panel;
      if(this.summaryRecord||this.scene()==='dashboard')this.activePhonePanel='work';
      if(!this.summaryRecord&&this.dashboardOpen===false&&this.storyTime>=96)this.activePhonePanel='chat';
    }
    this.markPhone();this.positionPhone(false);
  }
  markPhone() {
    if(!this.root||!this.$)return;
    const track=this.$('.phone-track');
    const dim=this.viewMode==='mobile'&&!this.motion.matches&&track?.clientWidth>0&&track.scrollWidth<=track.clientWidth+1;
    const opacity={inbox:dim ? .78 : 1,chat:dim ? .78 : 1,work:dim ? .78 : 1};
    opacity[this.activePhonePanel]=1;
    if(dim&&!this.manualPhone){
      // Brighten the destination shortly before the click. Keep pointer and
      // filmstrip navigation on the source until the actual action completes.
      const next=PHONE_FOCUS.findIndex(([at],index)=>index>0&&this.storyTime>=at-.4&&this.storyTime<at);
      if(next>0){
        const amount=progress(this.storyTime,PHONE_FOCUS[next][0]-.4,.4);
        const blend=amount*amount*(3-2*amount);
        opacity[PHONE_FOCUS[next-1][1]]=1-.22*blend;
        opacity[PHONE_FOCUS[next][1]]=.78+.22*blend;
      }
    }
    this.root.querySelectorAll('.phone-panel').forEach(panel=>{
      panel.classList.toggle('is-active',panel.dataset.panel===this.activePhonePanel);
      panel.style.opacity=String(opacity[panel.dataset.panel]);
    });
    this.root.querySelectorAll('.phone-nav [data-panel]').forEach(button=>button.setAttribute('aria-current',String(button.dataset.panel===this.activePhonePanel)));
  }
  positionPhone(smooth) {
    if(this.viewMode!=='mobile')return;
    const track=this.$('.phone-track'),panel=this.$(`.phone-panel[data-panel=${this.activePhonePanel}]`);
    if(!track||!panel||track.scrollWidth<=track.clientWidth+1)return;
    const key=`${this.activePhonePanel}:${Math.round(track.clientWidth)}`;
    const x=track.scrollLeft+panel.getBoundingClientRect().left-track.getBoundingClientRect().left;
    if(!smooth&&key===this.lastPhonePosition&&Math.abs(x-track.scrollLeft)<1)return;
    this.lastPhonePosition=key;
    // Only this horizontal filmstrip moves. The page keeps its native scroll.
    track.scrollTo({left:x,behavior:smooth&&!this.motion.matches?'smooth':'instant'});
  }
  rawText(key,values={}) {
    return this.copy[key].replace(/\{(\w+)\}/g,(_,name)=>values[name]??this.values[name]??'');
  }
  text(key,values={}) { return escape(this.rawText(key,values)); }
  avatar(name,channel='',klass='') {
    const file={mia:'mia-torres',luna:'luna-piel',daniel:'daniel-kim',team:'studio-team'}[name];
    return `<span class="avatar ${klass}">${file?`<img src="/assets/booking-movie/${file}.jpg" alt="">`:name==='agimon'?'<span class=approved-avatar></span>':icon(name)}${channel?`<span class="channel-badge"><img src="/assets/channels/${channel}.svg" alt=""></span>`:''}</span>`;
  }
  groupAvatar(person) {
    if(person==='agimon')return '<span class="avatar group-message-avatar group-agimon-avatar"><span class="approved-avatar" data-avatar-format="circle"></span></span>';
    const file={Emma:5,Lucas:53,sofia:44}[person];
    return `<span class="avatar group-message-avatar"><img src="/assets/team-scene/people/person-${file}.jpg" alt=""></span>`;
  }
  inboxActivity(person) {
    const t=this.storyTime;
    const [hour,minute]=person==='mia'?[10,t>=44.4?5:t>=29.1?4:t>=18.5?3:t>=15.3?2:1]
      :person==='team'?(t>=67?[15,30]:t>=57?[15,0]:[9,43])
      :person==='agimon'?(t>=90?[15,31]:[9,18])
      :person==='box'&&t>=69?[15,30]:({luna:[9,58],box:[9,46],sparkle:[9,52],mail:[9,41],daniel:[9,29]}[person]||[9,0]);
    return new Date(Date.UTC(2026,10,20,hour,minute));
  }
  inboxStamp(person) {
    const date=this.inboxActivity(person);
    return `<time class="conversation-time" datetime="${date.toISOString()}" dir="ltr">${escape(this.inboxTimeFormat.format(date))}</time>`;
  }
  opsUnreadCount() { return this.storyTime>=59 ? 0 : OPS_HISTORY.length+(this.storyTime>=57?1:0); }
  sidebar() {
    const c=this.copy,unread={team:this.opsUnreadCount(),luna:1,box:4};
    const rows=[['mia',c.customerName,c.request,'whatsapp'],['team',c.studio,`Emma: ${c.opsTeamReady}`,''],['luna','Luna Piel',c.lunaPreview,'instagram'],['box',c.inventory,c.inventoryPreview,''],['sparkle',c.website,c.websitePreview,'codex'],['mail','orders@dermapro.com',c.emailPreview,'email'],['daniel','Daniel Kim',c.danielPreview,'whatsapp']];
    const pinned=`<div class="conversation-row pinned-conversation" data-person="agimon"><span class="avatar agimon-circle-avatar"><span class="approved-avatar" data-avatar-format="circle"></span></span><span class="conversation-copy"><strong>Agimon</strong><span>${this.text('agimonPreview')}</span></span><span class="conversation-meta">${this.inboxStamp('agimon')}<span class="conversation-pin" aria-hidden="true"><svg class="icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path transform="rotate(35 8 8)" d="M5 2h6v1H10v4l2 2v1H8.6v3.8L8 15l-.6-1.2V10H4V9l2-2V3H5z"></path></svg></span></span></div>`;
    const views=`<div class="inbox-views" role="list" aria-label="${this.text('inboxViews')}">${[['all',this.text('viewAll')],['me',this.text('viewMe')],['clients',this.text('viewClients')],['ops',this.text('ops')],['emma','Emma']].map(([id,label])=>`<span class="inbox-view ${id==='all'?'is-selected':''}" role="listitem" data-inbox-view="${id}"${id==='all'?' aria-current="true"':''}>${label}</span>`).join('')}<span class="inbox-view-more" role="listitem" aria-label="${this.text('viewMore')}">…</span></div>`;
    return `<div class="inbox-header">${icon('menu')}<strong>Luma Clinic</strong><span class="member-avatar"><img src="/assets/team-scene/people/person-44.jpg" alt="${this.text('teamMember')}"></span></div><div class="inbox-search">${icon('search')}<span>${this.text('search')}</span><span class=search-sort title="${this.text('searchSort')}">${icon('sort')}</span></div>${views}<div class="conversations">${pinned}${rows.map(([id,title,preview,channel])=>`<div class="conversation-row ${id==='mia'?'selected':''}" data-person="${id}">${this.avatar(id,channel)}<span class="conversation-copy"><strong>${escape(title)}</strong><span>${escape(preview)}</span></span><span class="conversation-meta">${this.inboxStamp(id)}${unread[id]?`<span class=unread-badge>${unread[id]}</span>`:''}</span></div>`).join('')}</div>${this.dock()}`;
  }
  dock() {
    return `<div class="dock">${[['calendar','calendar'],['auto','autoMessages'],['receipt','receipts'],['todo','todo']].map(([i,key])=>`<div class="dock-item" data-dock="${i}">${icon(i)}<span>${this.text(key)}</span>${i==='receipt'?'<i class="dock-count">1</i>':''}</div>`).join('')}</div>`;
  }
  scene() {
    const t=this.storyTime;
    if(this.summaryRecord)return 'summary-record';
    if(this.dashboardOpen===true||(this.dashboardOpen===null&&t>=96))return 'dashboard';
    if(t>=86)return 'summary';
    if(t>=82)return 'ops-return';
    if(t>=73)return 'inventory';
    if(t>=59)return 'ops';
    if(t>=52)return 'arrival';
    if(this.t>=49&&this.t<52)return 'time-jump';
    if(t<3.5)return 'chat';
    if(t<9.2)return 'offer';
    if(t<12)return 'draft';
    if(t<23)return 'chat';
    if(t<28)return 'booked';
    if(t<33)return 'chat';
    if(t<42.8)return 'receipts';
    return 'chat';
  }
  stateKey() { return `${this.scene()}:${[1,1.9,MOBILE_REQUEST_AT,5.3,6.9,9.2,12,13.8,BOOKING_CHOICE_AT,18.5,23,29.1,33,35,39.8,42.8,44.4,49,52,54,57,57.8,59,61.5,63,...Object.values(STOCK_COMPOSE),67,69,71.2,73,77,82,85,86,90,91.5,96].filter(at=>this.storyTime>=at).length}`; }
  header(title,sub,avatar,backToChat=false) {
    const back=backToChat?`<button type="button" class="calendar-back" data-target="calendar-back" title="${this.text('viewSource')}" aria-label="${this.text('viewSource')}">${icon('back')}</button>`:`<span class="phone-inbox-back" data-target="inbox-back" title="${this.text('inbox')}">${icon('back')}</span>`;
    return `<header class="work-header">${back}${avatar}<div><strong>${title}</strong><span>${sub}</span></div><span class="header-more">${icon('more')}</span></header>`;
  }
  bubble(body,kind='incoming',label='',minute='01',arrivedAt=1,highlightAt=null,avatar='') {
    return `<div class="bubble-row ${kind}" data-arrived-at="${arrivedAt}"${highlightAt===null?'':` data-source-highlight="${highlightAt}"`}>${kind==='human'?'':avatar}<div class="bubble">${label?`<div class="bubble-label">${label}</div>`:''}${body}<span class="message-time" dir="ltr">${arrivedAt<0?'09':arrivedAt>=57?'15':'10'}:${minute}${kind==='human'||kind==='automated'&&!avatar?`<span class=delivery-check>${icon('check')}</span>`:''}</span></div>${kind==='human'?avatar:''}${arrivedAt===57?`<span class="reply-affordance">${icon('reply')}</span>`:''}</div>`;
  }
  paper(compact=false) {
    return `<div class="receipt-paper ${compact?'compact':''}"><div class="paper-top">${icon('receipt')}<span>${this.text('receiptDocument')}</span></div><strong class="paper-amount" dir="auto">${escape(this.values.amount)}</strong><div class="paper-rule"></div><dl><div><dt>${this.text('customer')}</dt><dd>${this.text('customerName')}</dd></div><div><dt>${this.text('paymentFor')}</dt><dd>${this.text('receiptCaption')}</dd></div><div><dt>${this.text('appointment')}</dt><dd>${escape(this.values.shortDay)} · <bdi>${escape(this.values.time)}</bdi></dd></div></dl><div class="paper-bottom"><span class="barcode"></span><span>AG — 2048</span></div></div>`;
  }
  chat() {
    const t=this.storyTime, draft=this.scene()==='draft';
    const requestAt=this.viewMode==='mobile'?MOBILE_REQUEST_AT:1;
    let bubbles=t>=requestAt?this.bubble(this.text('request'),'incoming','','01',requestAt):'';
    if(t>=12)bubbles+=this.bubble(this.text('offer'),'human','','01',12);
    if(t>=BOOKING_CHOICE_AT)bubbles+=this.bubble(this.text('choice'),'incoming','','02',BOOKING_CHOICE_AT);
    if(t>=18.5)bubbles+=this.bubble(`<strong>${this.text('booking')}</strong><p>${this.text('depositRequest')}</p>`,'automated',`${icon('auto')}${this.text('autoMessages')}`,'03',18.5);
    if(t>=29.1)bubbles+=this.bubble(`<p>${this.text('paymentSent')}</p><div class="receipt-attachment">${icon('receipt')}<div><strong>${this.text('receiptFile')}</strong><span>${escape(this.values.amount)} · PDF</span></div>${icon('attachment')}</div>`,'incoming','','04',29.1,42.8);
    if(t>=44.4)bubbles+=this.bubble(this.text('paymentThanks'),'automated',`${icon('auto')}${this.text('autoMessages')}`,'05',44.4);
    const typingAt=t<requestAt?(this.viewMode==='mobile'?1.9:0):t>=13.8&&t<BOOKING_CHOICE_AT?13.8:t>=28&&t<29.1?28:null;
    if(typingAt!==null)bubbles+=`<div class="typing" data-typing-at="${typingAt}"><span class="typing-dots"><i></i><i></i><i></i></span><span>${this.text('typing')}</span></div>`;
    // Calendar selection supplies the complete draft immediately.
    const composer=draft?`<div class="prepared"><span>${icon('arrow')}${this.text('prepared')}</span><p class="draft-copy"><span class="draft-text">${this.text('offer')}</span></p></div><div class="composer-bottom"><span>${this.text('humanAction')} · ${this.text('teamMember')}</span></div>`:`<span class="composer-placeholder">${icon('plus')}${this.text('message')}</span>`;
    return this.header(this.text('customerName'),`<img class="inline-channel" src="/assets/channels/whatsapp.svg" alt="">WhatsApp`,this.avatar('mia'))+`<div class="chat-body"><div class="day-separator">${this.text('today')}</div><div class="message-list">${bubbles}</div></div><div class="composer-row"><div class="composer ${draft?'has-draft':''}">${composer}</div><span class="send-circle ${draft?'is-ready':''}" data-target="send" title="${this.text('send')}">${icon('send')}</span></div>`;
  }

  calendar(booked=this.storyTime>=BOOKING_CHOICE_AT) {
    const first=this.storyTime>=5.3, second=this.storyTime>=6.9;
    const arrival=this.storyTime>=52, detail=arrival&&this.storyTime>=54, arrived=this.storyTime>=57;
    const backToChat=this.storyTime>=23&&this.storyTime<28&&!this.summaryRecord;
    const cols=this.copy.weekDays.map((name,i)=>`<div class="weekday ${i===4?'active':''}"><span>${escape(name)}</span><strong>${16+i}</strong></div>`).join('');
    return this.header(this.text('calendar'),this.text('room'),`<span class="tool-avatar">${icon('calendar')}</span>`,backToChat)+`<div class="calendar-body"><div class="calendar-title"><strong>${escape(this.values.shortDay)}</strong><span class="calendar-arrows">${icon('back')}${icon('chevron')}</span></div><div class="week-strip">${cols}</div><div class="room-strip">${[1,2,3].map(n=>`<span>${this.text('room')} ${n}</span>`).join('')}</div><div class="calendar-grid"><div class="hour-labels">${[12,13,14,15,16].map((h,i)=>`<span style="top:${i*25}%">${h}:00</span>`).join('')}</div><div class="grid-columns"><div></div><div></div><div></div></div><div class="other-event"><span>Daniel Kim</span><small>${this.text('otherService')}</small></div><div class="other-event second"><span>Luna Piel</span><small>${this.text('otherService')}</small></div>
      ${booked?`<div class="booked-event ${detail?'is-open':''}" data-target="event" data-duration="30">${this.avatar('mia','','event-avatar')}<strong>${this.text('customerName')}${icon('check')}</strong><span>${this.text('treatment')} · ${this.text('duration')}</span><small><bdi>${escape(this.values.time)}–${escape(this.values.end)}</bdi></small></div>`:`<div class="slot slot-one ${first?'chosen':''}" data-target="slot-one" data-duration="30"><span>${this.text('slotDuration',{start:this.values.firstTime,end:this.values.firstEnd})}</span>${first?icon('check'):icon('plus')}</div><div class="slot slot-two ${second?'chosen':''}" data-target="slot-two" data-duration="30"><span>${this.text('slotDuration',{start:this.values.time,end:this.values.end})}</span>${second?icon('check'):icon('plus')}</div>`}</div>${detail?`<div class="appointment-detail"><div class="appointment-person">${this.avatar('mia')}<strong>${this.text('customerName')}</strong></div><span>${this.text('treatment')} · ${this.text('duration')}</span><span><bdi>${escape(this.values.time)}–${escape(this.values.end)}</bdi></span><span>${this.text('nurse')}</span><span class="arrival-action ${arrived?'is-arrived':''}" data-target="arrived">${icon('check')}${this.text(arrived?'arrived':'markArrived')}</span></div>`:''}</div><div class="calendar-bottom">${booked?`<span>${icon('check')}${this.text('eventNote')} · ${this.text(this.storyTime>=39.8?'depositVerified':'depositPending')}</span>`:`<div><strong>${this.text('treatment')}</strong><span>${second?this.text('selectedTimes'):this.text('chooseTimes')}</span></div><span class="forward-action ${second?'enabled':''}" data-target="forward">${this.text('forward')}${icon('arrow')}</span>`}</div>`;
  }
  receipts() {
    const detail=this.receiptDetail??(this.storyTime>=35&&this.summaryRecord!=='receipts');
    const verified=this.storyTime>=39.8,hasMia=this.storyTime>=29.1;
    const pending=hasMia&&!verified?3:2;
    const miaRow=`<div class="receipt-row active ${verified?'is-verified':''}" data-target="receipt"><span class="verify-box ${verified?'checked':''}">${verified?icon('check'):''}</span>${this.avatar('mia')}<div><strong>${this.text('customerName')}</strong><span>${this.text('treatment')}</span><small>${escape(this.values.shortDay)}</small></div><b>${escape(this.values.amount)}</b></div>`;
    const queue=`<div class="receipt-section-title"><h3>${this.text('pending')}</h3><span>${pending}</span></div><div class="receipt-queue">${hasMia&&!verified?miaRow:''}${['luna','daniel'].map((person,i)=>`<div class="receipt-row subdued"><span class="verify-box"></span>${this.avatar(person)}<div><strong>${i?'Daniel Kim':'Luna Piel'}</strong><span>${this.text('previousReceipt')}</span></div><b>${new Intl.NumberFormat(this.language.locale,{style:'currency',currency:'MXN',currencyDisplay:'code',maximumFractionDigits:0}).format(i?300:400)}</b></div>`).join('')}<div class="history-row">${icon('chevron')}${this.text('verifiedHistory')}</div>${verified?miaRow:''}</div>`;
    const pane=`<aside class="receipt-detail" data-receipt-pane aria-label="${this.text('receiptSelected')}">
      <header class="work-header receipt-detail-heading"><button type="button" class="receipt-back" data-receipt-close aria-label="${this.text('receipts')}" title="${this.text('receipts')}">${icon('back')}</button><div><strong>${this.text('receiptFile')}</strong><span><bdi>AG — 2048</bdi></span></div><span class="header-more">${icon('more')}</span></header>
      <div class="receipt-detail-content"><div class="receipt-artwork"><div class="detail-customer"><span class="verify-box receipt-checkbox ${verified?'checked':''}" data-target="verify" title="${this.text('verifyPayment')}">${verified?icon('check'):''}</span>${this.avatar('mia')}<div><strong class="receipt-customer-link" data-target="receipt-customer">${this.text('customerName')}</strong><span>${this.text('receiptCaption')}</span></div><span class="source-icon">${icon('arrow')}</span></div>${this.paper()}<div class="review-state ${verified?'verified':''}">${icon(verified?'check':'clock')}<span>${verified?this.text('verifiedBy',{name:this.copy.teamMember}):this.text('needsReview')}</span></div><div class="detail-source">${icon('attachment')}${this.text('source')} · WhatsApp</div></div></div>
    </aside>`;
    const listHeader=this.header(this.text('receipts'),this.text('receiptCount',{count:pending}),`<span class="tool-avatar">${icon('receipt')}</span>`);
    return `<div class="receipts-workspace receipt-layout ${detail?'detail-open':''}"><section class="receipt-list-pane">${listHeader}<div class="receipts-body"><div class="receipt-main">${queue}</div></div></section>${pane}</div>`;
  }
  ops() {
    const t=this.storyTime,draft=t>=63&&t<67,picked=t>=STOCK_COMPOSE.pick;
    const quote=`<div class="reply-quote"><strong>Agimon</strong><span>${this.text('arrivalMessage')}</span></div>`;
    let bubbles=OPS_HISTORY.map(({speaker,key,minute},index)=>this.bubble(this.text(key),'incoming',escape(speaker),minute,index-OPS_HISTORY.length,null,this.groupAvatar(speaker))).join('');
    if(t>=57)bubbles+=this.bubble(this.text('arrivalMessage'),'automated',`${icon('auto')}Agimon`,'00',57,null,this.groupAvatar('agimon'));
    if(t>=67)bubbles+=this.bubble(`${quote}<span data-nurse-comment>${this.text('usedItem')}</span>`,'human',this.text('teamMember'),'30',67,82,this.groupAvatar('sofia'));
    if(t>=69)bubbles+=this.bubble(this.text('stockRecorded'),'automated',`${icon('auto')}Agimon`,'30',69,null,this.groupAvatar('agimon'));
    const suggestions=draft&&!picked&&t>=STOCK_COMPOSE.query?`<div class="stock-suggestions" aria-label="${this.text('inventory')}">${(t<STOCK_COMPOSE.filter?['tip','gloves','gauze']:['tip']).map(key=>`<button type="button" tabindex="-1" class="stock-suggestion ${key==='tip'&&t>=STOCK_COMPOSE.filter?'is-focused':''}" ${key==='tip'?'data-target="stock-picker"':''}>${this.text('slashChoice',{item:this.copy[key]})}</button>`).join('')}</div>`:'';
    const editing=t>=STOCK_COMPOSE.edit&&t<STOCK_COMPOSE.editEnd,selecting=t>=STOCK_COMPOSE.edit&&t<STOCK_COMPOSE.clear;
    const quantity=t>=STOCK_COMPOSE.clear&&t<STOCK_COMPOSE.quantity?'':new Intl.NumberFormat(this.language.locale).format(t>=STOCK_COMPOSE.quantity?STOCK_DEMO.used:1);
    const stock=`<div class="stock-compose-line ${picked?'':'stock-query-line'}"><span class="stock-prefix-text"></span>${picked?`<span class="stock-movement-token ${editing?'is-editing':''} ${selecting?'is-selected':''}" dir="ltr"><input class="stock-quantity-input" data-target="stock-quantity" inputmode="numeric" aria-label="${this.text('stockQuantity')}" value="${quantity}" readonly tabindex="-1"></span>${escape(this.stockConnector)}<span class="stock-compose-item">${this.text('usageItem')}</span><span class="stock-suffix-text"></span>`:'<span class="stock-query-text" dir="auto"></span>'}<i class="draft-caret" aria-hidden="true"></i></div>`;
    const composer=draft?`<div class="prepared">${quote}${stock}</div>`:`<span class="composer-placeholder">${icon('plus')}${this.text('message')}</span>`;
    return this.header(this.text('ops'),this.text('internalGroup'),this.avatar('team'))+`<div class="chat-body ops-chat"><div class="day-separator">${escape(this.values.shortDay)}</div><div class="message-list">${bubbles}</div></div>${suggestions}<div class="composer-row"><div class="composer ${draft?'has-draft':''}">${composer}</div><span class="send-circle ${draft&&t>=STOCK_COMPOSE.ready?'is-ready':''}" data-target="send">${icon('send')}</span></div>`;
  }
  inventory() {
    const updated=this.storyTime>=69,detail=this.inventoryDetail??(this.storyTime>=77);
    return this.header(this.text('inventory'),this.text('inventoryDescription'),`<span class="tool-avatar">${icon('box')}</span>`)+renderInventoryBody({
      text:(key,values)=>this.text(key,values),number:n=>new Intl.NumberFormat(this.language.locale).format(n),icon,
      updated,detail,shortDay:escape(this.values.shortDay),avatar:name=>this.avatar(name),
    });
  }
  summaryChat() {
    const t=this.storyTime, draft=t<90;
    const number=n=>new Intl.NumberFormat(this.language.locale).format(n);
    // Illustrative weekly totals for this fictional studio, not live analytics.
    const amount=new Intl.NumberFormat(this.language.locale,{style:'currency',currency:'MXN',currencyDisplay:'code',maximumFractionDigits:0}).format(24500);
    const reference=(record,body)=>`<button type="button" class="summary-reference" data-summary-record="${record}" aria-label="${this.text('summaryRecords',{record:this.copy[record]})}">${body}</button>`;
    let bubbles=t>=90?this.bubble(this.text('summaryPrompt'),'human','','31',90):'';
    if(t>=91.5)bubbles+=this.bubble(`<div class="weekly-summary"><p>${this.text('summaryIntro')}</p><p>${reference('calendar',this.text('summaryAppointments',{count:number(32)}))}<br>${this.text('summaryPopular')}</p><p><strong>${this.text('summaryPayments',{amount})}</strong><br>${reference('receipts',this.text('summaryPending',{count:number(2)}))}</p><p><strong>${this.text('summaryUsage',{count:number(STOCK_DEMO.weeklyUsed)})}</strong> ${reference('inventory',this.text('summaryRemaining',{count:number(STOCK_DEMO.remaining)}))}</p><p class="summary-next">${this.text('summaryNext')}</p><p class="summary-dashboard"><button type="button" class="summary-reference summary-dashboard-link" data-dashboard-open>${this.text('summaryDashboardOffer')}</button></p></div>`,'assistant','','31',91.5);
    const composer=draft?`<div class="prepared"><p class="draft-copy"><span class="summary-draft-text"></span><i class="draft-caret" aria-hidden="true"></i></p></div>`:`<span class="composer-placeholder">${icon('plus')}${this.text('message')}</span>`;
    return this.header('Agimon',this.text('summarySubtitle'),'')+`<div class="chat-body summary-chat"><div class="day-separator">${escape(this.values.shortDay)}</div><div class="message-list">${bubbles}</div></div><div class="composer-row"><div class="composer ${draft?'has-draft':''}">${composer}</div><span class="send-circle" data-target="send">${icon('send')}</span></div>`;
  }
  dashboard() {
    return renderDashboard({
      text:(key,values)=>this.text(key,values),
      number:n=>new Intl.NumberFormat(this.language.locale).format(n),
      amount:escape(new Intl.NumberFormat(this.language.locale,{style:'currency',currency:'MXN',currencyDisplay:'code',maximumFractionDigits:0}).format(24500)),
    });
  }
  summaryRecordView() {
    const markup=this.summaryRecord==='calendar'?this.calendar(true):this.summaryRecord==='receipts'?this.receipts():this.inventory();
    return markup.replace(/<span class="phone-inbox-back"[^>]*>[\s\S]*?<\/span>/,`<button type="button" class="summary-return" data-summary-return aria-label="${this.text('summarySubtitle')}">${icon('back')}</button>`);
  }
  render(force=false) {
    const state=this.stateKey();
    if(force||state!==this.lastState){
      this.currentScene=this.scene();
      const work=this.$('[data-desktop-work]');
      work.innerHTML=this.currentScene==='dashboard'?this.dashboard():this.currentScene==='summary-record'?this.summaryRecordView():this.currentScene==='summary'?this.summaryChat():['offer','booked','arrival'].includes(this.currentScene)?this.calendar():this.currentScene==='receipts'?this.receipts():this.currentScene==='inventory'?this.inventory():this.currentScene.startsWith('ops')?this.ops():this.chat();
      work.dataset.scene=this.currentScene;
      this.$('[data-phone-inbox]').innerHTML=this.sidebar();
      this.$('[data-phone-chat]').innerHTML=this.storyTime>=86?this.summaryChat():this.storyTime>=59?this.ops():this.chat();
      this.$('[data-phone-work]').innerHTML=this.phoneWork();
      this.$('[data-phone-work]').dataset.tool=this.phoneWorkKind();
      this.$('.time-jump').hidden=this.currentScene!=='time-jump';
      this.$('.app-stage').setAttribute('aria-hidden',String(this.storyTime<91.5));
      this.$('.film').dataset.scene=this.currentScene;
      this.$('.film').dataset.receipt=String(this.storyTime>=29.1&&this.storyTime<39.8);
      this.$('.film').dataset.verified=String(this.storyTime>=39.8);
      const selectedTool=this.summaryRecord==='calendar'?'calendar':this.summaryRecord==='receipts'?'receipt':['offer','booked','arrival'].includes(this.currentScene)?'calendar':this.currentScene==='receipts'?'receipt':'';
      this.root.querySelectorAll('[data-dock]').forEach(el=>{
        const panel=el.closest('.phone-panel')?.dataset.panel;
        const active=panel==='work'?(this.phoneWorkKind()==='calendar'?'calendar':this.phoneWorkKind()==='receipts'?'receipt':''):panel?'':selectedTool;
        el.classList.toggle('active',el.dataset.dock===active);
      });
      this.root.querySelectorAll('[data-person]').forEach(row=>row.classList.toggle('selected',row.dataset.person===(['summary','dashboard'].includes(this.currentScene)?'agimon':this.summaryRecord==='inventory'?'box':this.currentScene.startsWith('ops')?'team':this.currentScene==='inventory'?'box':!selectedTool?'mia':'')));
      this.root.querySelectorAll('[data-person=team] .conversation-copy>strong').forEach(el=>el.textContent=this.copy.ops);
      this.root.querySelectorAll('[data-person=team] .conversation-copy>span').forEach(el=>el.textContent=this.storyTime>=57?this.rawText(this.storyTime>=69?'stockRecorded':this.storyTime>=67?'usedItem':'arrivalMessage'):`Emma: ${this.rawText('opsTeamReady')}`);
      this.root.querySelectorAll('[data-person=team]').forEach(row=>{
        const count=this.opsUnreadCount();let badge=row.querySelector('.unread-badge');
        if(!count){badge?.remove();return;}
        if(!badge){badge=document.createElement('span');badge.className='unread-badge';row.querySelector('.conversation-meta').append(badge);}
        badge.textContent=new Intl.NumberFormat(this.language.locale).format(count);
      });
      if(this.storyTime>=90)this.root.querySelectorAll('[data-person=agimon] .conversation-copy>span').forEach(el=>el.textContent=this.rawText(this.storyTime>=91.5?'summaryIntro':'summaryPrompt'));
      const preview=this.$('.typing')?this.copy.typing:this.storyTime>=44.4?this.copy.paymentThanks.replace(/\{(\w+)\}/g,(_,k)=>this.values[k]):this.storyTime>=29.1?this.copy.paymentSent:this.storyTime>=18.5?this.copy.booking.replace(/\{(\w+)\}/g,(_,k)=>this.values[k]):this.storyTime>=BOOKING_CHOICE_AT?this.copy.choice.replace('{time}',this.values.time):this.copy.request;
      this.root.querySelectorAll('[data-person=mia] .conversation-copy>span').forEach(el=>el.textContent=preview);
      this.root.querySelectorAll('[data-person] .conversation-time').forEach(stamp=>{
        const date=this.inboxActivity(stamp.closest('[data-person]').dataset.person);
        stamp.textContent=this.inboxTimeFormat.format(date);stamp.dateTime=date.toISOString();
      });
      this.lastState=state;
      // Scene/language changes replace hosts; observe their actual CSS sizes so
      // optical proportions also refresh while the movie is paused.
      this.avatarResizeObserver?.disconnect();
      this.avatarResizeObserver?.observe(this);
      this.root.querySelectorAll('.approved-avatar').forEach(host=>this.avatarResizeObserver?.observe(host));
    }
    this.updatePlaybackState();this.updatePhoneFocus();this.updateAvatar();this.updateMotion();this.updatePointer();
    this.$('.film').style.opacity='1';
    this.$('.app-stage').style.opacity=String(movieStageOpacity(this.t,this.motion.matches));
    this.dataset.movieTime=this.t.toFixed(2);this.dataset.movieScene=this.currentScene;
  }
  updateMotion() {
    if(!this.root||!this.$)return;
    const t=this.storyTime, reduced=this.motion.matches, work=this.$('[data-desktop-work]');
    if(!work)return;
    const stageStart=this.currentScene==='dashboard'?96:t>=86?86:t>=82?82:t>=73?73:t>=59?59:t>=52?52:this.currentScene==='offer'?3.5:this.currentScene==='draft'?9.2
      :this.currentScene==='booked'?23:this.currentScene==='receipts'?33
      :t>=42.8?42.8:t>=28?28:t>=12?12:0;
    const stageProgress=reduced||this.dashboardOpen===true?1:easeOut(progress(t,stageStart,.32));
    work.style.opacity=String(.78+.22*stageProgress);
    work.style.transform=`translateY(${(1-stageProgress)*5}px)`;

    for(const line of this.root.querySelectorAll('.stock-compose-line')){
      const fill=reduced?1:progress(t,STOCK_COMPOSE.prefix,STOCK_COMPOSE.query-STOCK_COMPOSE.prefix-.1);
      line.querySelector('.stock-prefix-text').textContent=this.stockPrefixSegments.slice(0,Math.floor(this.stockPrefixSegments.length*fill)).join('');
      const query=line.querySelector('.stock-query-text'),suffix=line.querySelector('.stock-suffix-text');
      if(query){
        const queryFill=reduced?1:progress(t,STOCK_COMPOSE.query,STOCK_COMPOSE.pick-STOCK_COMPOSE.query);
        const count=t<STOCK_COMPOSE.query?0:Math.min(this.stockQuerySegments.length,1+Math.floor((this.stockQuerySegments.length-1)*queryFill));
        query.textContent=this.stockQuerySegments.slice(0,count).join('');
      }
      if(suffix){
        const suffixFill=reduced?1:progress(t,STOCK_COMPOSE.suffix,STOCK_COMPOSE.ready-STOCK_COMPOSE.suffix);
        suffix.textContent=this.stockSuffixSegments.slice(0,Math.floor(this.stockSuffixSegments.length*suffixFill)).join('');
      }
      const editingQuantity=t>=STOCK_COMPOSE.pick&&t<STOCK_COMPOSE.suffix;
      line.querySelector('.draft-caret').style.opacity=reduced||editingQuantity?'0':String(Math.floor(t*3)%2);
    }
    for(const draft of this.root.querySelectorAll('.summary-draft-text')){
      const fill=reduced?1:progress(t,86.4,2.8);
      draft.textContent=this.summaryDraftSegments.slice(0,Math.floor(this.summaryDraftSegments.length*fill)).join('');
      draft.nextElementSibling.style.opacity=reduced?'0':String(Math.floor(t*3)%2);
      draft.closest('.composer-row').querySelector('.send-circle').classList.toggle('is-ready',fill===1);
    }
    for(const node of this.root.querySelectorAll('[data-source-highlight]')){
      const at=Number(node.dataset.sourceHighlight),elapsed=t-at;
      const amount=elapsed>=0&&elapsed<2.1?Math.sin(Math.min(1,elapsed/.2)*Math.PI/2)*(1-progress(elapsed,.8,1.3)):0;
      node.style.setProperty('--source-highlight',String(reduced?0:amount*.3));
    }
    for(const row of this.root.querySelectorAll('.ops-chat .bubble-row[data-arrived-at="57"]')){
      const distance=Math.min(64,row.closest('.chat-body').clientWidth*.16);
      const pull=easeOut(progress(t,61.7,.65));
      const release=1-easeOut(progress(t,62.65,.35));
      const swipe=reduced?0:pull*release;
      const offset=(this.language.dir==='rtl'?-1:1)*swipe*distance;
      const bubble=row.querySelector('.bubble');
      const cue=row.querySelector('.reply-affordance');
      // Anchor behind the unshifted bubble, leaving the avatar column clear.
      const origin=this.language.dir==='rtl'
        ?row.clientWidth-bubble.offsetLeft-bubble.offsetWidth
        :bubble.offsetLeft;
      cue.style.insetInlineStart=`${origin+4}px`;
      bubble.style.translate=`${offset}px 0`;
      bubble.dataset.dragOffset=String(offset);
      bubble.dataset.dragDistance=String((this.language.dir==='rtl'?-1:1)*distance);
      cue.style.opacity=String(progress(swipe,0,.65));

    }
    const jump=this.$('.time-jump');
    if(!jump.hidden){
      const t=this.t; // The date card finishes before storyboard actions resume.
      const reveal=reduced?1:Math.min(progress(t,49,.35),1-progress(t,51.6,.4));jump.style.opacity=String(reveal);
      const sand=reduced?.5:progress(t,49.25,2.1),remaining=Math.sqrt(1-sand);
      const y=20-10*remaining,x=8*remaining;
      jump.querySelector('.sand-top').setAttribute('d',`M${20-x} ${y}H${20+x}L20 20Z`);
      jump.querySelector('.sand-bottom').setAttribute('d',`M12 30H28L20 ${30-9*sand}Z`);
      const stream=jump.querySelector('.sand-stream');
      stream.style.opacity=String(!reduced&&sand>0&&sand<1?.75:0);
      stream.style.strokeDashoffset=String(-((t-49)*14)%6);
    }
    for(const send of this.root.querySelectorAll('.send-circle')){
      const press=reduced?0:Math.sin(progress(t,t>=86?89.84:t>=59?66.84:11.84,.32)*Math.PI);
      send.style.transform=`scale(${1-press*.09})`;
    }

    // Only newly arriving messages rise and expand. Older bubbles hold still
    // when typing starts or the calendar/receipt view is revisited.
    const rows=[...this.root.querySelectorAll('.bubble-row')].map(row=>({
      row, height:row.querySelector('.bubble').offsetHeight,
      amount:reduced?1:progress(t,Number(row.dataset.arrivedAt),.48),
    }));
    for(const {row,height,amount} of rows){
      const eased=easeOut(amount);
      row.style.height=amount===1?'auto':`${height*eased}px`;
      row.style.opacity=String(progress(amount,0,.72));
      row.style.transform=`translateY(${(1-eased)*(row.classList.contains('human')?18:10)}px)`;
      const bubble=row.querySelector('.bubble');
      const rtl=this.language.dir==='rtl';
      bubble.style.transformOrigin=row.classList.contains('incoming')?`top ${rtl?'right':'left'}`:`bottom ${rtl?'left':'right'}`;
      bubble.style.transform=`scale(${.97+.03*eased})`;
      const receipt=row.querySelector('.receipt-attachment');
      if(receipt){
        const reveal=reduced?1:easeOut(progress(t,Number(row.dataset.arrivedAt)+.12,.35));
        receipt.style.opacity=String(reveal);receipt.style.transform=`translateY(${(1-reveal)*4}px)`;
      }
      const check=row.querySelector('.delivery-check');
      if(check)check.style.opacity=String(reduced?1:progress(t,Number(row.dataset.arrivedAt)+.25,.25));
    }
    for(const typing of this.root.querySelectorAll('.typing')){
      const elapsed=t-Number(typing.dataset.typingAt);
      typing.style.opacity=String(reduced?1:progress(elapsed,0,.18));
      typing.querySelectorAll('i').forEach((dot,i)=>{
        const pulse=reduced?0:Math.max(0,Math.sin((elapsed/.85-i*.17)*Math.PI*2));
        dot.style.transform=`translateY(${-pulse*3}px)`;
        dot.style.opacity=String(.4+.6*pulse);
      });
    }
    for(const event of this.root.querySelectorAll('.booked-event')){
      // The visible phone calendar updates with Mia’s reply, before it is opened.
      const revealAt=event.closest('[data-phone-work]')?BOOKING_CHOICE_AT+.12:23.12;
      const reveal=reduced?1:easeOut(progress(t,revealAt,.5));
      event.style.opacity=String(.35+.65*reveal);
      event.style.transform=`translateY(${(1-reveal)*6}px)`;
    }
    this.positionAppointmentDetails();
    for(const verified of this.root.querySelectorAll('.receipt-checkbox.checked')){
      const settle=reduced?1:progress(t,39.8,.3);
      verified.style.transform=`scale(${1+Math.sin(settle*Math.PI)*.12})`;
    }
    this.root.querySelectorAll('.workspace .detail-open [data-receipt-pane]').forEach(pane=>{
      const reveal=reduced||this.receiptDetail===true?1:easeOut(progress(t,35,.4));
      pane.style.opacity=String(reveal);pane.style.transform=`translateX(${(this.language.dir==='rtl'?-1:1)*(1-reveal)*18}px)`;
    });
    this.root.querySelectorAll('.inventory-detail-pane').forEach(pane=>{
      const reveal=reduced||this.inventoryDetail===true?1:easeOut(progress(t,77,.4));
      pane.style.opacity=String(reveal);pane.style.transform=`translateX(${(this.language.dir==='rtl'?-1:1)*(1-reveal)*18}px)`;
    });
    this.root.querySelectorAll('.chat-body').forEach(chat=>{
      const target=t>=42.8&&t<44.4?chat.querySelector('.bubble-row[data-source-highlight="42.8"]'):t>=82&&t<84.1?chat.querySelector('.bubble-row[data-source-highlight="82"]'):null;
      chat.scrollTop=chat.scrollHeight;
      if(target){const a=target.getBoundingClientRect(),b=chat.getBoundingClientRect();chat.scrollTop+=a.top-b.top-(b.height-a.height)/2;}
    });
  }
  positionAppointmentDetails() {
    for(const card of this.root.querySelectorAll('.appointment-detail')){
      const body=card.closest('.calendar-body'),event=body.querySelector('[data-target=event]');
      if(!event||!body.clientWidth||!body.clientHeight)continue;
      const bounds=body.getBoundingClientRect(),anchor=event.getBoundingClientRect();
      const position=appointmentPosition({
        event:{left:anchor.left-bounds.left,right:anchor.right-bounds.left,top:anchor.top-bounds.top,bottom:anchor.bottom-bounds.top},
        card:{width:card.offsetWidth,height:card.offsetHeight},bounds:{width:body.clientWidth,height:body.clientHeight},rtl:this.language.dir==='rtl',
      });
      card.style.left=`${position.x}px`;card.style.top=`${position.y}px`;
      card.dataset.placement=position.side;
    }
  }
  updatePlaybackState() {
    if(!this.$)return;
    const button=this.$('[data-control=motion]');
    const label=this.playing?this.copy.pauseAnimation:this.copy.playAnimation;
    if(button.getAttribute('aria-label')!==label){
      button.innerHTML=icon(this.playing?'pause':'play');
      button.setAttribute('aria-label',label);button.title=label;
    }
    button.setAttribute('aria-pressed',String(this.playing));
    this.dataset.moviePlaying=String(this.playing);
  }
  updateAvatar() {
    if(!this.root)return;
    this.root.querySelectorAll('.approved-avatar').forEach((host,index)=>{
      const size=Math.round(host.getBoundingClientRect().width)||32;
      const format=host.dataset.avatarFormat||'circle';
      const pinned=Boolean(host.closest('.agimon-circle-avatar,.group-agimon-avatar'));
      const time=pinned||this.motion.matches?0:this.storyTime;
      const frame=`${format}:${size}:${Math.floor(time*24)}`;
      if(frame===host.dataset.avatarFrame)return;
      // Use the same approved face proportions at every inbox size.
      // Tiny-icon enlargement crowds the eyes in the mobile circle crop.
      const preset=pinned ? {...avatarPreset,motion:false,opticalEnabled:false} : avatarPreset;
      host.innerHTML=renderSVG(preset,{format,size,time,id:`booking-avatar-${index}`,animated:!pinned&&!this.motion.matches}).replace('aria-label="Agimon tomato"','aria-label="Agimon"');
      host.dataset.avatarFrame=frame;
    });
  }
  updatePointer() {
    let target='';const t=this.storyTime;
    if(this.viewMode==='mobile'&&t>=1.25&&t<1.9)target='[data-person=mia]';
    if(t>=(this.viewMode==='mobile'?3:2.2)&&t<3.5)target='[data-dock=calendar]';
    if(t>=4.1&&t<6)target='[data-target=slot-one]';
    if(t>=6&&t<7.6)target='[data-target=slot-two]';
    if(t>=7.6&&t<9.2)target='[data-target=forward]';
    if(t>=10.9&&t<12)target='[data-target=send]';
    if(t>=22&&t<23)target='[data-dock=calendar]';
    if(t>=26.8&&t<28)target='[data-target=calendar-back]';
    if(t>=31.2&&t<33)target='[data-dock=receipt]';
    if(t>=33.5&&t<35)target='[data-target=receipt]';
    if(t>=38.2&&t<40.4)target='[data-target=verify]';
    if(t>=40.8&&t<42.8)target='[data-target=receipt-customer]';
    if(t>=50.8&&t<52)target='[data-dock=calendar]';
    if(t>=52.5&&t<54)target='[data-target=event]';
    if(t>=55.4&&t<57.3)target='[data-target=arrived]';
    if(this.viewMode==='mobile'&&t>=57.15&&t<57.8)target='[data-target=inbox-back]';
    if(t>=58&&t<59)target='[data-person=team]';
    if(t>=61.1&&t<63)target='.bubble-row[data-arrived-at="57"] .bubble';
    if(t>=STOCK_COMPOSE.pick-.4&&t<STOCK_COMPOSE.pick)target='[data-target=stock-picker]';
    if(t>=STOCK_COMPOSE.pick+.05&&t<STOCK_COMPOSE.quantity)target='[data-target=stock-quantity]';
    if(t>=STOCK_COMPOSE.ready&&t<67)target='[data-target=send]';
    if(this.viewMode==='mobile'&&t>=70.5&&t<71.2)target='[data-target=inbox-back]';
    if(t>=71.5&&t<73)target='[data-person=box]';
    if(t>=75.5&&t<77.4)target='[data-target=stock-row] td:first-child';
    if(t>=80&&t<82)target='[data-target=stock-source]';
    if(this.viewMode==='mobile'&&t>=84.3&&t<85)target='[data-target=inbox-back]';
    if(t>=85.15&&t<86)target='[data-person=agimon]';
    if(t>=89.3&&t<90)target='[data-target=send]';
    if(t>=94.8&&t<96)target='[data-dashboard-open]';
    const context=this.viewMode==='mobile'?this.$(`.phone-panel[data-panel=${this.activePhonePanel}]`):this.$('.workspace');
    const clip=(this.viewMode==='mobile'?this.$('.phone-track'):this.$('.app-stage')).getBoundingClientRect();
    const node=target&&[...context.querySelectorAll(target)].find(el=>{const box=el.getBoundingClientRect();return box.width>0&&box.left+box.width*.65>=clip.left&&box.left+box.width*.65<=clip.right;}),pointer=this.$('.movie-pointer');
    if(!node||this.motion.matches||!this.playing||!this.inView||document.hidden||(this.t>=49&&this.t<52.8)){pointer.classList.remove('visible');return;}
    const bounds=node.getBoundingClientRect();const stage=this.$('.app-stage').getBoundingClientRect();
    if(!bounds.width){pointer.classList.remove('visible');return;}
    pointer.classList.add('visible');
    pointer.classList.toggle('dragging',t>=61.6&&t<62.65);
    const dragRelease=t>=62.65&&t<63?Number(node.dataset.dragDistance||0)-Number(node.dataset.dragOffset||0):0;
    pointer.classList.toggle('clicking',[1.9,5.3,6.9,9.2,12,23,28,33,35,39.8,42.8,52,54,57,57.8,59,63,STOCK_COMPOSE.pick,STOCK_COMPOSE.edit,67,71.2,73,77,82,85,86,90,96].some(at=>t>=at-.13&&t<at+.25));
    pointer.style.left=`${bounds.left-stage.left+bounds.width*.65+dragRelease}px`;
    pointer.style.top=`${bounds.top-stage.top+bounds.height*.57}px`;
  }
  seek(t) {
    this.summaryRecord=null;this.dashboardOpen=null;this.inventoryDetail=null;this.receiptDetail=null;
    this.t=Math.max(0,Math.min(MOVIE_DURATION,t));
    this.openingReadRemaining=this.t<MOBILE_READING_HOLD_AT?MOBILE_READING_HOLD:0;
    this.lastFrame=0;this.render(true);this.syncPlayback();
  }
  syncPlayback() {
    cancelAnimationFrame(this.raf);this.raf=0;this.lastFrame=0;
    this.updatePhoneFocus();
    if(!this.playing||!this.inView||document.hidden){this.updatePlaybackState();this.updatePointer();return;}
    const tick=now=>{
      if(this.lastFrame){
        const clock=advanceMovieClock(this.t,Math.min(.15,(now-this.lastFrame)/1000),this.viewMode,this.openingReadRemaining);
        this.t=clock.time;this.openingReadRemaining=clock.holdRemaining;
      }
      this.lastFrame=now;this.render();
      if(this.t>=MOVIE_DURATION){this.summaryRecord=null;this.dashboardOpen=null;this.inventoryDetail=null;this.receiptDetail=null;this.t=0;this.openingReadRemaining=MOBILE_READING_HOLD;this.loops++;this.dataset.movieLoops=String(this.loops);this.lastState='';this.lastAvatarFrame=-1;this.render(true);}
      this.raf=requestAnimationFrame(tick);
    };
    this.raf=requestAnimationFrame(tick);
  }
}
if(!customElements.get('agimon-booking-movie'))customElements.define('agimon-booking-movie',AgimonBookingMovie);
