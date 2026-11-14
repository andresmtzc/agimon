import { isPhoneMovie, mountPhoneMovieView } from './movie-phone-view.js';
// Agimon product movie: persistent sand and a readable mobile opening.
import { MOVIE_DURATION, MOBILE_REQUEST_AT, MOBILE_READING_HOLD_AT, MOBILE_READING_HOLD, movieStageOpacity, advanceMovieClock } from './movie-timing.js';
import { mountViewSwitchMotion } from './movie-view-motion.js';
import { getActiveLanguage } from './language-selector.js';
import { movieCopy } from './booking-movie-copy.mjs';
import { movieIcons } from './booking-movie-icons.mjs';
import { renderSVG } from './renderer.js';

// The same source of truth as the approved header/logo lab, including optical sizes.
const presetResponse = await fetch(new URL('./assets/selected-logo-preset.json', import.meta.url));
if (!presetResponse.ok) throw new Error('Approved avatar preset unavailable');
const avatarPreset = await presetResponse.json();

export { MOVIE_DURATION } from './movie-timing.js';
export const MOVIE_CHAPTERS = [0, 3.5, 12, 18, 23, 28, 33, 42.8];
const PHONE_FOCUS = [[0,'chat'],[3.5,'calendar'],[9.2,'chat'],[23,'calendar'],[28,'chat'],[33,'receipts'],[42.8,'chat']];
const progress = (time,start,duration) => Math.max(0,Math.min(1,(time-start)/duration));
const easeOut = value => 1-Math.pow(1-value,3);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paths = {
  play:'m9 5 11 7-11 7Z', pause:'M8 5v14M16 5v14', replay:'M3 10a9 9 0 1 1 2 9M3 4v6h6',
  calendar:'M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM3 10h18M7 3v4M17 3v4M7 14h2M13 14h2M7 17h2',
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
  connectedCallback() {
    if (this.root) return;
    this.root = this.shadowRoot || this.attachShadow({mode:'open'});
    this.viewMode=isPhoneMovie(this)?'mobile':this.viewMode||'desktop';
    this.manualPhone=false;this.activePhonePanel='chat';
    this.openingReadRemaining = MOBILE_READING_HOLD;
    this.t = 0; this.playing = false; this.started = false; this.inView = false; this.raf = 0; this.loops = 0;
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
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
    this.setAttribute('view',this.viewMode);
    this.setAttribute('lang',loc); this.setAttribute('dir',this.language.dir);
    this.avatarStylesheet?.removeEventListener('load',this.onAvatarStylesheetLoad);
    this.root.innerHTML = `<link rel="stylesheet" href="/booking-movie.css"><div class="movie-presentation">
      <div class="view-switch" role="tablist" aria-label="${this.text('viewOptions')}">${['desktop','mobile'].map(view=>`<button type="button" role="tab" id="view-${view}" data-view="${view}" aria-controls="movie-screen" aria-selected="${view===this.viewMode}" tabindex="${view===this.viewMode?0:-1}">${this.text(view==='desktop'?'viewDesktop':'viewMobile')}</button>`).join('')}</div>
      <div class="mobile-intro"><h3>${this.text('mobileHeadline')}</h3><p>${this.text('mobileBody')}</p></div>
      <div class="film" id="movie-screen" role="tabpanel" aria-label="${escape(this.copy.loopDescription)}">
      <div class="app-stage" aria-hidden="true"><div class="workspace"><aside class="inbox">${this.sidebar()}</aside><div class="work-area" data-desktop-work></div><div class="mobile-dock">${this.dock()}</div></div>${this.phoneViews()}<div class="movie-pointer" aria-hidden="true"><svg viewBox="0 0 24 28"><path d="M3 2v21l6-5 4 8 4-2-4-8h8Z" fill="#162f29" stroke="white" stroke-width="1.8" stroke-linejoin="round"/></svg><span>${escape(this.copy.teamMember)}</span></div></div>
      <div class="phone-nav">${[['chat','panelChat'],['calendar','calendar'],['receipts','receipts']].map(([panel,key])=>`<button type="button" data-panel="${panel}" aria-label="${this.text('choosePanel',{panel:this.copy[key]})}">${this.text(key)}</button>`).join('')}</div>
      <div class="movie-controls"><button class="movie-control" data-control="motion" type="button"></button><button class="movie-control" data-control="restart" type="button" aria-label="${this.text('replay')}" title="${this.text('replay')}">${icon('replay')}</button></div></div></div>`;
    this.$ = selector => this.root.querySelector(selector);
    this.installViews();
    this.cleanupViewSwitchMotion = mountViewSwitchMotion(this);
    this.avatarStylesheet = this.$('link[rel=stylesheet]');
    this.avatarStylesheet.addEventListener('load',this.onAvatarStylesheetLoad,{once:true});
    this.$('[data-control=motion]').addEventListener('click',()=>{
      this.started=true; this.playing=!this.playing; if(this.playing)this.manualPhone=false; this.syncPlayback();
    });
    this.$('[data-control=restart]').addEventListener('click',()=>{
      this.started=true; this.playing=true; this.manualPhone=false; this.lastState=''; this.seek(0);
    });
    // Small transport buttons sit outside the product UI. Tapping the picture
    // also pauses/resumes, without introducing a timeline or seeking controls.
    this.$('.app-stage').addEventListener('click',()=>{
      if(this.viewMode==='mobile')return;
      this.started=true; this.playing=!this.playing; if(this.playing)this.manualPhone=false; this.syncPlayback();
    });
    this.lastAvatarFrame = -1;
    this.lastState='';this.render(true);this.observePlaybackStage();this.syncPlayback();
    if(wasFocused)this.$(`[data-control=${wasFocused}]`)?.focus({preventScroll:true});
  }
  phoneViews() {
    return `<div class="phone-track">
      <div class="phone-panel" data-panel="chat"><div class="phone-caption" data-chat-caption>${this.text('inbox')}</div><div class="phone-screen" data-phone-chat-screen></div></div>
      <div class="phone-panel" data-panel="calendar"><div class="phone-caption">${this.text('calendar')}</div><div class="phone-screen"><div class="work-area" data-phone-calendar></div><div class="mobile-dock">${this.dock()}</div></div></div>
      <div class="phone-panel" data-panel="receipts"><div class="phone-caption">${this.text('receipts')}</div><div class="phone-screen"><div class="work-area" data-phone-receipts></div><div class="mobile-dock">${this.dock()}</div></div></div>
    </div>`;
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
      for(const [at,panel] of PHONE_FOCUS)if(this.t>=at)this.activePhonePanel=panel;
    }
    this.markPhone();this.positionPhone(false);
  }
  markPhone() {
    if(!this.root||!this.$)return;
    const track=this.$('.phone-track');
    const dim=this.viewMode==='mobile'&&!this.motion.matches&&track?.clientWidth>0&&track.scrollWidth<=track.clientWidth+1;
    const opacity={chat:dim ? .78 : 1,calendar:dim ? .78 : 1,receipts:dim ? .78 : 1};
    opacity[this.activePhonePanel]=1;
    if(dim&&!this.manualPhone){
      // Brighten the destination shortly before the click. Keep pointer and
      // filmstrip navigation on the source until the actual action completes.
      const next=PHONE_FOCUS.findIndex(([at],index)=>index>0&&this.t>=at-.4&&this.t<at);
      if(next>0){
        const amount=progress(this.t,PHONE_FOCUS[next][0]-.4,.4);
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
  sidebar() {
    const c=this.copy;
    const rows=[['mia',c.customerName,c.request,'whatsapp'],['team',c.studio,c.studioPreview,''],['luna','Luna Piel',c.lunaPreview,'instagram'],['box',c.inventory,c.inventoryPreview,''],['daniel','Daniel Kim',c.danielPreview,'whatsapp'],['sparkle',c.website,c.websitePreview,'codex'],['mail','hello@studio.example',c.emailPreview,'email']];
    // The personal Agimon conversation stays first, using the original pinned
    // glyph and the floating character rather than the circular message avatar.
    const pinned=`<div class="conversation-row pinned-conversation" data-person="agimon"><span class="avatar agimon-blob-avatar"><span class="approved-avatar" data-avatar-format="floating"></span></span><span class="conversation-copy"><strong>Agimon</strong><span>${this.text('agimonPreview')}</span></span><span class="conversation-pin" aria-hidden="true"><svg class="icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path transform="rotate(35 8 8)" d="M5 2h6v1H10v4l2 2v1H8.6v3.8L8 15l-.6-1.2V10H4V9l2-2V3H5z"></path></svg></span></div>`;
    return `<div class="inbox-header">${icon('menu')}<strong>${this.text('inbox')}</strong><span class="member-avatar">S</span></div><div class="inbox-search">${icon('search')}<span>${this.text('search')}</span><span class=search-sort title="${this.text('searchSort')}">${icon('sort')}</span></div><div class="conversations">${pinned}${rows.map(([id,title,preview,channel])=>`<div class="conversation-row ${id==='mia'?'selected':''}" data-person="${id}">${this.avatar(id,channel)}<span class="conversation-copy"><strong>${escape(title)}</strong><span>${escape(preview)}</span></span>${({team:3,luna:1,box:4})[id]?`<span class=unread-badge>${({team:3,luna:1,box:4})[id]}</span>`:''}</div>`).join('')}</div>${this.dock()}`;
  }
  dock() {
    return `<div class="dock">${[['calendar','calendar'],['auto','autoMessages'],['receipt','receipts'],['todo','todo']].map(([i,key])=>`<div class="dock-item" data-dock="${i}">${icon(i)}<span>${this.text(key)}</span>${i==='receipt'?'<i class="dock-count">1</i>':''}</div>`).join('')}</div>`;
  }
  scene() {
    const t=this.t;
    if(t<3.5)return 'chat';
    if(t<9.2)return 'offer';
    if(t<12)return 'draft';
    if(t<23)return 'chat';
    if(t<28)return 'booked';
    if(t<33)return 'chat';
    if(t<42.8)return 'receipts';
    return 'chat';
  }
  stateKey() { return `${this.scene()}:${[1,1.9,MOBILE_REQUEST_AT,5.3,6.9,9.2,12,13.8,15.3,18.5,23,29.1,33,35,39.8,42.8,44.4].filter(at=>this.t>=at).length}`; }
  header(title,sub,avatar) {
    return `<header class="work-header">${avatar}<div><strong>${title}</strong><span>${sub}</span></div><span class="header-more">${icon('more')}</span></header>`;
  }
  bubble(body,kind='incoming',label='',minute='01',arrivedAt=1) {
    return `<div class="bubble-row ${kind}" data-arrived-at="${arrivedAt}"><div class="bubble">${label?`<div class="bubble-label">${label}</div>`:''}${body}<span class="message-time" dir="ltr">10:${minute}${kind==='human'||kind==='automated'?`<span class=delivery-check>${icon('check')}</span>`:''}</span></div></div>`;
  }
  paper(compact=false) {
    return `<div class="receipt-paper ${compact?'compact':''}"><div class="paper-top">${icon('receipt')}<span>${this.text('receiptDocument')}</span></div><strong class="paper-amount" dir="auto">${escape(this.values.amount)}</strong><div class="paper-rule"></div><dl><div><dt>${this.text('customer')}</dt><dd>${this.text('customerName')}</dd></div><div><dt>${this.text('paymentFor')}</dt><dd>${this.text('receiptCaption')}</dd></div><div><dt>${this.text('appointment')}</dt><dd>${escape(this.values.shortDay)} · <bdi>${escape(this.values.time)}</bdi></dd></div></dl><div class="paper-bottom"><span class="barcode"></span><span>AG — 2048</span></div></div>`;
  }
  chat() {
    const t=this.t, draft=this.scene()==='draft';
    const requestAt=this.viewMode==='mobile'?MOBILE_REQUEST_AT:1;
    let bubbles=t>=requestAt?this.bubble(this.text('request'),'incoming','','01',requestAt):'';
    if(t>=12)bubbles+=this.bubble(this.text('offer'),'human',this.text('teamMember'),'01',12);
    if(t>=15.3)bubbles+=this.bubble(this.text('choice'),'incoming','','02',15.3);
    if(t>=18.5)bubbles+=this.bubble(`<strong>${this.text('booking')}</strong><p>${this.text('depositRequest')}</p>`,'automated',`${icon('auto')}${this.text('autoMessages')}<span>· ${this.text('automated')}</span>`,'03',18.5);
    if(t>=29.1)bubbles+=this.bubble(`<p>${this.text('paymentSent')}</p><div class="receipt-attachment">${icon('receipt')}<div><strong>${this.text('receiptFile')}</strong><span>${escape(this.values.amount)} · PDF</span></div>${icon('attachment')}</div>`,'incoming','','04',29.1);
    if(t>=44.4)bubbles+=this.bubble(this.text('paymentThanks'),'automated',`${icon('auto')}${this.text('autoMessages')}<span>· ${this.text('automated')}</span>`,'05',44.4);
    const typingAt=t<requestAt?(this.viewMode==='mobile'?1.9:0):t>=13.8&&t<15.3?13.8:t>=28&&t<29.1?28:null;
    if(typingAt!==null)bubbles+=`<div class="typing" data-typing-at="${typingAt}"><span class="typing-dots"><i></i><i></i><i></i></span><span>${this.text('typing')}</span></div>`;
    // Calendar selection supplies the complete draft immediately.
    const composer=draft?`<div class="prepared"><span>${icon('arrow')}${this.text('prepared')}</span><p class="draft-copy"><span class="draft-text">${this.text('offer')}</span></p></div><div class="composer-bottom"><span>${this.text('humanAction')} · ${this.text('teamMember')}</span></div>`:`<span class="composer-placeholder">${icon('plus')}${this.text('message')}</span>`;
    return this.header(this.text('customerName'),`<img class="inline-channel" src="/assets/channels/whatsapp.svg" alt="">WhatsApp`,this.avatar('mia'))+`<div class="chat-body"><div class="day-separator">${this.text('today')}</div><div class="message-list">${bubbles}</div></div><div class="composer-row"><div class="composer ${draft?'has-draft':''}">${composer}</div><span class="send-circle ${draft?'is-ready':''}" data-target="send" title="${this.text('send')}">${icon('send')}</span></div>`;
  }

  calendar(booked=this.scene()==='booked') {
    const first=this.t>=5.3, second=this.t>=6.9;
    const cols=this.copy.weekDays.map((name,i)=>`<div class="weekday ${i===4?'active':''}"><span>${escape(name)}</span><strong>${16+i}</strong></div>`).join('');
    return this.header(this.text('calendar'),this.text('room'),`<span class="tool-avatar">${icon('calendar')}</span>`)+`<div class="calendar-body"><div class="calendar-title"><strong>${escape(this.values.shortDay)}</strong><span class="calendar-arrows">${icon('back')}${icon('chevron')}</span></div><div class="week-strip">${cols}</div><div class="room-strip">${[1,2,3].map(n=>`<span>${this.text('room')} ${n}</span>`).join('')}</div><div class="calendar-grid"><div class="hour-labels">${[12,13,14,15,16].map((h,i)=>`<span style="top:${i*25}%">${h}:00</span>`).join('')}</div><div class="grid-columns"><div></div><div></div><div></div></div><div class="other-event"><span>Daniel Kim</span><small>${this.text('otherService')}</small></div><div class="other-event second"><span>Luna Piel</span><small>${this.text('otherService')}</small></div>
      ${booked?`<div class="booked-event" data-target="event" data-duration="30"><strong>${this.text('customerName')}${icon('check')}</strong><span>${this.text('treatment')} · ${this.text('duration')}</span><small><bdi>${escape(this.values.time)}–${escape(this.values.end)}</bdi></small></div>`:`<div class="slot slot-one ${first?'chosen':''}" data-target="slot-one" data-duration="30"><span>${this.text('slotDuration',{start:this.values.firstTime,end:this.values.firstEnd})}</span>${first?icon('check'):icon('plus')}</div><div class="slot slot-two ${second?'chosen':''}" data-target="slot-two" data-duration="30"><span>${this.text('slotDuration',{start:this.values.time,end:this.values.end})}</span>${second?icon('check'):icon('plus')}</div>`}</div></div><div class="calendar-bottom">${booked?`<span>${icon('check')}${this.text('eventNote')} · ${this.text(this.t>=39.8?'depositVerified':'depositPending')}</span>`:`<div><strong>${this.text('treatment')}</strong><span>${second?this.text('selectedTimes'):this.text('chooseTimes')}</span></div><span class="forward-action ${second?'enabled':''}" data-target="forward">${this.text('forward')}${icon('arrow')}</span>`}</div>`;
  }
  receipts() {
    const detail=this.t>=35, verified=this.t>=39.8, hasMia=this.t>=29.1;
    const pending=hasMia&&!verified?3:2;
    const miaRow=`<div class="receipt-row active ${verified?'is-verified':''}" data-target="receipt"><span class="verify-box ${verified?'checked':''}">${verified?icon('check'):''}</span>${this.avatar('mia')}<div><strong>${this.text('customerName')}</strong><span>${this.text('treatment')}</span><small>${escape(this.values.shortDay)}</small></div><b>${escape(this.values.amount)}</b></div>`;
    return this.header(this.text('receipts'),this.text('receiptCount',{count:pending}),`<span class="tool-avatar">${icon('receipt')}</span>`)+`<div class="receipts-body"><div class="receipt-section-title"><h3>${this.text('pending')}</h3><span>${pending}</span></div><div class="receipt-layout ${detail?'detail-open':''}"><div class="receipt-queue">${hasMia&&!verified?miaRow:''}${['luna','daniel'].map((person,i)=>`<div class="receipt-row subdued"><span class="verify-box"></span>${this.avatar(person)}<div><strong>${i?'Daniel Kim':'Luna Piel'}</strong><span>${this.text('previousReceipt')}</span></div><b>${new Intl.NumberFormat(this.language.locale,{style:'currency',currency:'MXN',currencyDisplay:'code',maximumFractionDigits:0}).format(i?300:400)}</b></div>`).join('')}<div class="history-row">${icon('chevron')}${this.text('verifiedHistory')}</div>${verified?miaRow:''}</div><div class="receipt-detail"><div class="detail-customer"><span class="verify-box receipt-checkbox ${verified?'checked':''}" data-target="verify" title="${this.text('verifyPayment')}">${verified?icon('check'):''}</span>${this.avatar('mia')}<div><strong class="receipt-customer-link" data-target="receipt-customer">${this.text('customerName')}</strong><span>${this.text('receiptCaption')}</span></div><span class="source-icon">${icon('arrow')}</span></div>${this.paper()}<div class="review-state ${verified?'verified':''}">${icon(verified?'check':'clock')}<span>${verified?this.text('verifiedBy',{name:this.copy.teamMember}):this.text('needsReview')}</span></div><div class="detail-source">${icon('attachment')}${this.text('source')} · WhatsApp</div></div></div></div>`;
  }
  render(force=false) {
    const state=this.stateKey();
    if(force||state!==this.lastState){
      this.currentScene=this.scene();
      const work=this.$('[data-desktop-work]');
      work.innerHTML=['offer','booked'].includes(this.currentScene)?this.calendar():this.currentScene==='receipts'?this.receipts():this.chat();
      work.dataset.scene=this.currentScene;
      this.$('[data-phone-chat-screen]').innerHTML=this.t<1.9
        ? `<aside class="inbox">${this.sidebar()}</aside>`
        : `<div class="work-area" data-phone-chat>${this.chat()}</div><div class="mobile-dock">${this.dock()}</div>`;
      this.$('[data-chat-caption]').textContent=this.t<1.9?this.copy.inbox:this.copy.conversation;
      this.$('[data-phone-calendar]').innerHTML=this.calendar(this.t>=23);
      this.$('[data-phone-receipts]').innerHTML=this.receipts();
      this.$('.film').dataset.scene=this.currentScene;
      this.$('.film').dataset.receipt=String(this.t>=29.1&&this.t<39.8);
      this.$('.film').dataset.verified=String(this.t>=39.8);
      const selectedTool=['offer','booked'].includes(this.currentScene)?'calendar':this.currentScene==='receipts'?'receipt':'';
      this.root.querySelectorAll('[data-dock]').forEach(el=>{
        const panel=el.closest('.phone-panel')?.dataset.panel;
        const active=panel==='calendar'?'calendar':panel==='receipts'?'receipt':panel==='chat'?'':selectedTool;
        el.classList.toggle('active',el.dataset.dock===active);
      });
      this.root.querySelectorAll('[data-person=mia]').forEach(row=>row.classList.toggle('selected',!selectedTool));
      const preview=this.$('.typing')?this.copy.typing:this.t>=44.4?this.copy.paymentThanks.replace(/\{(\w+)\}/g,(_,k)=>this.values[k]):this.t>=29.1?this.copy.paymentSent:this.t>=18.5?this.copy.booking.replace(/\{(\w+)\}/g,(_,k)=>this.values[k]):this.t>=15.3?this.copy.choice.replace('{time}',this.values.time):this.copy.request;
      this.root.querySelectorAll('[data-person=mia] .conversation-copy>span').forEach(el=>el.textContent=preview);
      this.lastState=state;
      // Scene/language changes replace hosts; observe their actual CSS sizes so
      // optical proportions also refresh while the movie is paused.
      this.avatarResizeObserver?.disconnect();
      this.avatarResizeObserver?.observe(this);
      this.root.querySelectorAll('.approved-avatar').forEach(host=>this.avatarResizeObserver?.observe(host));
    }
    this.updatePlaybackState();this.updatePhoneFocus();this.updatePointer();this.updateAvatar();this.updateMotion();
    this.$('.film').style.opacity='1';
    this.$('.app-stage').style.opacity=String(movieStageOpacity(this.t,this.motion.matches));
    this.dataset.movieTime=this.t.toFixed(2);this.dataset.movieScene=this.currentScene;
  }
  updateMotion() {
    if(!this.root||!this.$)return;
    const t=this.t, reduced=this.motion.matches, work=this.$('[data-desktop-work]');
    if(!work)return;
    const stageStart=this.currentScene==='offer'?3.5:this.currentScene==='draft'?9.2
      :this.currentScene==='booked'?23:this.currentScene==='receipts'?33
      :t>=42.8?42.8:t>=28?28:t>=12?12:0;
    const stageProgress=reduced?1:easeOut(progress(t,stageStart,.32));
    work.style.opacity=String(.78+.22*stageProgress);
    work.style.transform=`translateY(${(1-stageProgress)*5}px)`;

    for(const send of this.root.querySelectorAll('.send-circle')){
      const press=reduced?0:Math.sin(progress(t,11.84,.32)*Math.PI);
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
      const reveal=reduced?1:easeOut(progress(t,23.12,.5));
      event.style.opacity=String(.35+.65*reveal);
      event.style.transform=`translateY(${(1-reveal)*6}px)`;
    }
    for(const verified of this.root.querySelectorAll('.receipt-checkbox.checked')){
      const settle=reduced?1:progress(t,39.8,.3);
      verified.style.transform=`scale(${1+Math.sin(settle*Math.PI)*.12})`;
    }
    this.root.querySelectorAll('.chat-body').forEach(chat=>{chat.scrollTop=chat.scrollHeight;});
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
      const pinned=Boolean(host.closest('.agimon-blob-avatar'));
      const time=pinned||this.motion.matches?0:this.t;
      const frame=`${format}:${size}:${Math.floor(time*24)}`;
      if(frame===host.dataset.avatarFrame)return;
      // This inbox-sized character always uses the approved tiny face cut.
      // Its CSS box is ~40px, above the lab's automatic 32px cutoff.
      const preset=pinned
        ? {...avatarPreset,motion:false,opticalEnabled:true,opticalThreshold:Math.max(size,avatarPreset.opticalThreshold)}
        : avatarPreset;
      host.innerHTML=renderSVG(preset,{format,size,time,id:`booking-avatar-${index}`,animated:!pinned&&!this.motion.matches}).replace('aria-label="Agimon tomato"','aria-label="Agimon"');
      host.dataset.avatarFrame=frame;
    });
  }
  updatePointer() {
    let target='';const t=this.t;
    if(this.viewMode==='mobile'&&t>=1.25&&t<1.9)target='[data-person=mia]';
    if(t>=(this.viewMode==='mobile'?3:2.2)&&t<3.5)target='[data-dock=calendar]';
    if(t>=4.1&&t<6)target='[data-target=slot-one]';
    if(t>=6&&t<7.6)target='[data-target=slot-two]';
    if(t>=7.6&&t<9.2)target='[data-target=forward]';
    if(t>=10.9&&t<12)target='[data-target=send]';
    if(t>=22&&t<23)target='[data-dock=calendar]';
    if(t>=31.2&&t<33)target='[data-dock=receipt]';
    if(t>=33.5&&t<35)target='[data-target=receipt]';
    if(t>=38.2&&t<40.4)target='[data-target=verify]';
    if(t>=40.8&&t<42.8)target='[data-target=receipt-customer]';
    const context=this.viewMode==='mobile'?this.$(`.phone-panel[data-panel=${this.activePhonePanel}]`):this.$('.workspace');
    const clip=(this.viewMode==='mobile'?this.$('.phone-track'):this.$('.app-stage')).getBoundingClientRect();
    const node=target&&[...context.querySelectorAll(target)].find(el=>{const box=el.getBoundingClientRect();return box.width>0&&box.left>=clip.left-1&&box.right<=clip.right+1;}),pointer=this.$('.movie-pointer');
    if(!node||this.motion.matches||!this.playing||!this.inView||document.hidden){pointer.classList.remove('visible');return;}
    const bounds=node.getBoundingClientRect();const stage=this.$('.app-stage').getBoundingClientRect();
    if(!bounds.width){pointer.classList.remove('visible');return;}
    pointer.classList.add('visible');
    pointer.classList.toggle('clicking',[1.9,5.3,6.9,9.2,12,23,33,35,39.8,42.8].some(at=>t>=at-.13&&t<at+.25));
    pointer.style.left=`${bounds.left-stage.left+bounds.width*.65}px`;
    pointer.style.top=`${bounds.top-stage.top+bounds.height*.57}px`;
  }
  seek(t) {
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
      if(this.t>=MOVIE_DURATION){this.t=0;this.openingReadRemaining=MOBILE_READING_HOLD;this.loops++;this.dataset.movieLoops=String(this.loops);this.lastState='';this.lastAvatarFrame=-1;this.render(true);}
      this.raf=requestAnimationFrame(tick);
    };
    this.raf=requestAnimationFrame(tick);
  }
}
if(!customElements.get('agimon-booking-movie'))customElements.define('agimon-booking-movie',AgimonBookingMovie);
