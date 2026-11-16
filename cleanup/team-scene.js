import { teamPortraits } from './team-scene-portraits.mjs';
import { createMascot } from '../mascot.js';
import { getActiveLanguage } from '../language-selector.js';
import { teamCopy } from './team-scene-copy.mjs';

const DURATION = 25;
const STILL_FRAME = 15.4;
const JOIN_AT = 12.7;
const EXIT_AT = 22;
const EXIT_ORDER = [4, 9, 1, 7, 10, 0, 6, 3, 11, 8, 2, 5];
const FACE_IDS = [53, 12, 44, 13, 49, 14, 5, 15, 9];
const ARRIVALS = [0, .8, 4.2, 5.4, 6.6, 7.4, 8.4, 9.2, 10];
const ANSWERS = [2.2, 4.4, 14.1, 12.4, 14.8, 16.8, 15.5, 16.2, 17.4];
const AUTHORS = ['sofia', 'leo', 'agimon', 'sofia', 'agimon', 'leo', 'agimon', 'agimon', 'agimon'];
const clamp = value => Math.max(0, Math.min(1, value));
const setText = (node, value) => { if (node.textContent !== value) node.textContent = value; };
const smooth = value => { const p = clamp(value); return p * p * (3 - 2 * p); };
const progress = (time, start, duration) => smooth((time - start) / duration);
const pop = value => { const t = clamp(value) - 1; return 1 + 2.2 * t * t * t + 1.2 * t * t; };
const checkIcon = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>';
const asset = file => teamPortraits[file] || new URL(`../assets/team-scene/people/${file}`, import.meta.url).href;

export class AgimonTeamScene extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.time = 0;
    this.visible = false;
    this.ready = false;
    this.pausedByUser = false;
    this.frame = 0;
    this.lastFrame = 0;
    this.visibleCustomers = 9;
    this.compact = false;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)');
    if (this.reduced.matches) this.time = STILL_FRAME;
    this.onLanguage = () => this.setLanguage();
    this.onVisibility = () => this.syncPlayback();
    this.onReduced = () => {
      if (this.reduced.matches) this.time = STILL_FRAME;
      this.render();
      this.syncPlayback();
    };
    this.tick = now => {
      this.frame = 0;
      if (!this.canPlay()) return;
      if (this.lastFrame) this.time = (this.time + Math.min(.1, (now - this.lastFrame) / 1000)) % DURATION;
      this.lastFrame = now;
      this.render();
      this.frame = requestAnimationFrame(this.tick);
    };
  }

  connectedCallback() {
    if (this.connected) return;
    this.connected = true;
    window.addEventListener('agimon:language', this.onLanguage);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.reduced.addEventListener('change', this.onReduced);
    this.visibilityObserver = new IntersectionObserver(entries => {
      this.visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .1;
      this.syncPlayback();
    }, { threshold: [0, .1] });
    this.visibilityObserver.observe(this);
    this.resizeObserver = new ResizeObserver(entries => {
      const next = entries[0].contentRect.width <= 600;
      if (next === this.compact) return;
      this.compact = next;
      this.visibleCustomers = next ? 8 : 9;
      this.render();
    });
    this.resizeObserver.observe(this);
    if (!this.initializing) {
      this.initializing = this.setup().catch(error => {
        this.setAttribute('data-state', 'static');
        console.error('Team scene could not initialize', error);
      });
    } else {
      this.setLanguage();
      this.syncPlayback();
    }
  }

  disconnectedCallback() {
    this.connected = false;
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.lastFrame = 0;
    this.visible = false;
    this.visibilityObserver?.disconnect();
    this.resizeObserver?.disconnect();
    window.removeEventListener('agimon:language', this.onLanguage);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.reduced.removeEventListener('change', this.onReduced);
  }

  async setup() {
    const stylesheet = new URL('./team-scene.css', import.meta.url).href;
    this.shadowRoot.innerHTML = `<link rel="stylesheet" href="${stylesheet}">
      <div class="scene">
        <div class="scene-stage" role="img" dir="ltr">
          <div class="customer-lane"><p class="lane-title" data-scene-copy="customers"></p><div class="customers">
            ${FACE_IDS.map((id, index) => `<div class="customer" data-customer="${index}">
              <div class="customer-bubble"><span class="question-message"></span></div>
              <div class="customer-portrait"><img src="${asset(`person-${id}.jpg`)}" width="44" height="44" alt="" draggable="false"><span class="answer-check">${checkIcon}</span><span class="waiting-dot"></span></div>
            </div>`).join('')}
          </div></div>
          <div class="team-lane"><p class="lane-title" data-scene-copy="people"></p><div class="actors">
            ${[['sofia',47],['leo',59],['agimon',null]].map(([name,id]) => `<div class="actor actor--${name}" data-actor="${name}">
              <div class="actor-replies">${(name==='agimon'?[0,1]:[0]).map(() => `<div class="actor-reply"><span class="reply-message"></span></div>`).join('')}<div class="reply-measure" aria-hidden="true">${AUTHORS.map((author,index) => author===name ? `<span data-answer="${index}"></span>` : '').join('')}</div></div>
              <div class="actor-portrait">${id ? `<img src="${asset(`person-${id}.jpg`)}" alt="" width="48" height="48" draggable="false">` : '<span class="mascot"></span><span class="mascot-shadow"></span>'}</div>
              <span class="actor-name" data-scene-copy="${name}"></span>
            </div>`).join('')}
          </div></div>
        </div>
      </div>`;
    this.$ = selector => this.shadowRoot.querySelector(selector);
    const sheet = this.$('link');
    const stylesReady = sheet.sheet ? Promise.resolve() : new Promise(resolve => {
      sheet.addEventListener('load', resolve, { once: true });
      sheet.addEventListener('error', resolve, { once: true });
    });
    this.customers = [...this.shadowRoot.querySelectorAll('.customer')].map(element => ({
      element, bubble: element.querySelector('.customer-bubble'), message: element.querySelector('.question-message'),
      portrait: element.querySelector('.customer-portrait'), check: element.querySelector('.answer-check'), dot: element.querySelector('.waiting-dot'),
    }));
    this.actors = [...this.shadowRoot.querySelectorAll('.actor')].map(element => ({
      element, name: element.dataset.actor, portrait: element.querySelector('.actor-portrait'),
      replies: [...element.querySelectorAll('.actor-reply')].map(reply => ({ element: reply, message: reply.querySelector('.reply-message') })),
    }));
    this.setLanguage();
    // Preserve a useful complete composition while the approved face loads.
    this.render();
    const response = await fetch(new URL('../assets/selected-logo-preset.json', import.meta.url));
    if (!response.ok) throw new Error('Approved Jade mascot preset unavailable');
    const preset = await response.json();
    await stylesReady;
    // Keep the approved face fill instead of centering a reduced face here.
    this.mascot = createMascot(this.$('.mascot'), preset.settings ?? preset);
    this.mascot.svg.setAttribute('aria-hidden', 'true');
    this.mascot.svg.removeAttribute('role');
    this.mascot.svg.removeAttribute('aria-label');
    this.ready = true;
    this.setAttribute('data-state', 'ready');
    this.render();
    this.syncPlayback();
  }

  setLanguage() {
    const language = getActiveLanguage();
    this.language = language;
    this.copy = teamCopy[language.id] || teamCopy.en;
    if (!this.$) return;
    this.setAttribute('lang', language.locale || language.id);
    this.setAttribute('dir', language.dir || 'ltr');
    this.$('.scene-stage').setAttribute('aria-label', this.copy.description);
    this.shadowRoot.querySelectorAll('[data-scene-copy]').forEach(element => {
      element.textContent = this.copy[element.dataset.sceneCopy];
      element.dir = language.dir || 'ltr';
    });
    for (const customer of this.customers) customer.bubble.dir = language.dir || 'ltr';
    for (const actor of this.actors) actor.replies.forEach(reply => { reply.element.dir = language.dir || 'ltr'; });
    this.shadowRoot.querySelectorAll('.reply-measure').forEach(element => {
      element.dir = language.dir || 'ltr';
      element.querySelectorAll('[data-answer]').forEach(answer => { answer.textContent = this.copy.answers[Number(answer.dataset.answer)]; });
    });
    const section = this.closest('#team');
    if (section) {
      section.lang = language.locale || language.id;
      section.dir = language.dir || 'ltr';
      section.querySelectorAll('[data-team-copy]').forEach(element => { element.textContent = this.copy[element.dataset.teamCopy]; });
    }
    this.render();
  }

  canPlay() {
    return this.ready && this.connected && this.visible && !document.hidden && !this.reduced.matches && !this.pausedByUser;
  }

  syncPlayback() {
    if (!this.canPlay()) {
      cancelAnimationFrame(this.frame);
      this.frame = 0;
      this.lastFrame = 0;
    } else if (!this.frame) {
      this.lastFrame = 0;
      this.frame = requestAnimationFrame(this.tick);
    }
  }

  render() {
    if (!this.$ || !this.copy) return;
    const reduced = this.reduced.matches;
    const time = reduced ? STILL_FRAME : this.time;
    const exitOrder = EXIT_ORDER.filter(index => index < this.visibleCustomers || index >= 9);
    const exitPose = index => {
      const elapsed = clamp((time - EXIT_AT - exitOrder.indexOf(index) * .045) / .16);
      return {
        opacity: 1 - progress(elapsed, .35, .65),
        scale: elapsed < .22 ? 1 + .05 * smooth(elapsed / .22) : 1.05 * (1 - smooth((elapsed - .22) / .78)),
      };
    };
    const cleared = time >= EXIT_AT + (exitOrder.length - 1) * .045 + .16;
    this.$('.scene-stage').dataset.cleared = String(cleared);
    this.customers.forEach((parts,index) => {
      const active = index < this.visibleCustomers;
      const entered = progress(time,ARRIVALS[index],.55);
      const question = progress(time,ARRIVALS[index]+.35,.3) * (1 - progress(time,ANSWERS[index]+.8,.25));
      const answered = progress(time,ANSWERS[index]+.35,.35);
      const isWaiting = active && time >= ARRIVALS[index]+.35 && time < ANSWERS[index]+.55;
      const exit = exitPose(index);
      parts.element.hidden = !active;
      parts.element.style.opacity = String(entered * exit.opacity);
      parts.element.style.transform = `scale(${exit.scale})`;
      parts.portrait.style.transform = `translateY(${reduced ? 0 : (1-entered)*8 + Math.sin(time*.9+index)*.7}px) scale(${.86+.14*entered})`;
      parts.element.dataset.answered = String(answered > .5);
      parts.element.dataset.waiting = String(isWaiting);
      parts.element.dataset.answering = String(time>=ANSWERS[index]&&time<ANSWERS[index]+1.25);
      setText(parts.message, this.copy.questions[index]);
      parts.bubble.style.opacity = String(question);
      parts.bubble.style.transform = `translateY(${(1-question)*5}px) scale(${.97+.03*question})`;
      parts.check.style.opacity = String(answered);
      parts.check.style.transform = `scale(${.6+.4*answered})`;
      parts.dot.style.opacity = String(isWaiting ? .8 : 0);
    });
    this.actors.forEach((actor,index) => {
      const starts = actor.name==='agimon' ? JOIN_AT : actor.name==='sofia' ? .7 : 3.1;
      const entered = progress(time,starts,.7);
      const scale = reduced ? 1 : .86+.14*pop((time-starts)/.7);
      const exit = exitPose(9 + index);
      actor.element.style.opacity = String(entered * exit.opacity);
      actor.element.style.transform = `scale(${exit.scale})`;
      actor.portrait.style.transform = `translateY(${(1-entered)*12 + (actor.name==='agimon'&&!reduced ? Math.sin(time*1.1)*1.6 : 0)}px) scale(${scale})`;
      const replyCount = this.compact ? 1 : actor.replies.length;
      const messages = ANSWERS.map((at,index) => ({at,index}))
        .filter(message => message.index<this.visibleCustomers && AUTHORS[message.index]===actor.name && time>=message.at && time<message.at+2.05)
        .sort((a,b) => a.at-b.at)
        .slice(-replyCount);
      actor.replies.forEach((reply,index) => {
        reply.element.hidden = index >= replyCount;
        const message = messages[index];
        if (!message) {
          reply.element.style.opacity = '0';
          reply.element.style.transform = 'translateY(5px) scale(.97)';
          setText(reply.message, '');
          return;
        }
        const amount = progress(time,message.at,.3) * (1 - progress(time,message.at+1.8,.25));
        setText(reply.message, this.copy.answers[message.index]);
        reply.element.style.opacity = String(amount);
        reply.element.style.transform = `translateY(${(1-amount)*5}px) scale(${.97+.03*amount})`;
      });
    });
    const phase = cleared ? 'rest' : time >= EXIT_AT ? 'exiting' : time < JOIN_AT ? 'busy' : time < 19 ? 'joining' : 'calm';
    this.mascot?.render(reduced ? 0 : time);
    this.dataset.phase = phase;
    this.dataset.time = time.toFixed(2);
  }

  seek(seconds) {
    this.pausedByUser = true;
    this.time = Math.max(0,Math.min(DURATION-.001,Number(seconds)||0));
    this.render();
    this.syncPlayback();
    return this.getState();
  }

  getState() {
    return {
      ready:this.ready, time:this.reduced.matches?STILL_FRAME:this.time,
      paused:this.pausedByUser||this.reduced.matches, visible:this.visible,
      reducedMotion:this.reduced.matches, customers:this.visibleCustomers, compact:this.compact,
      phase:this.dataset.phase, mascotReady:Boolean(this.mascot),
    };
  }
}

if (!customElements.get('agimon-team-scene')) customElements.define('agimon-team-scene',AgimonTeamScene);
