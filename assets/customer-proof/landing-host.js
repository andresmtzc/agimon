import { landingMotion } from '../../landing-motion.js';
import { mountProofLanguage } from './proof.js';
import { markup } from './embed-markup.js';
import alejandra from './scenes/alejandra.js';
import rockstone from './scenes/rockstone.js';
import truly from './scenes/truly.js';

const scenes = [alejandra, rockstone, truly];
const duration = 8000;
let fontsReady;

function prepareFonts() {
  if (!fontsReady) fontsReady = Promise.allSettled([
    ['Lausanne', 'lausanne-600.woff2', '400 600'],
    ['Lausanne', 'lausanne-800.woff2', '700 900'],
    ['Inter', 'inter-regular.woff2', '400'],
  ].map(async ([family, file, weight]) => {
    const existing = [...document.fonts].find(font =>
      font.family.replaceAll('"', '').replaceAll("'", '') === family
      && font.weight === weight && font.status === 'loaded');
    if (existing) return;
    const font = new FontFace(family, `url(${new URL(`./assets/${file}`, import.meta.url)})`, { weight });
    document.fonts.add(await font.load());
  }));
  return fontsReady;
}

function assetUrls(root) {
  for (const [selector, attribute] of [['img[src]', 'src'], ['image[href]', 'href']]) {
    for (const element of root.querySelectorAll(selector)) {
      const value = element.getAttribute(attribute);
      if (value && !/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(value)) {
        element.setAttribute(attribute, new URL(value, import.meta.url).href);
      }
    }
  }
}

class AgimonCustomerProof extends HTMLElement {
  connectedCallback() {
    if (this.mounted) return;
    this.mounted = true;
    const revision = this.revision = (this.revision || 0) + 1;
    const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
    root.replaceChildren();
    const stylesReady = ['style.css', 'embed.css'].map(file => {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = new URL(`./${file}`, import.meta.url).href;
      const loaded = new Promise(resolve => {
        // Retain readable HTML even if a font or stylesheet cannot be fetched.
        stylesheet.onload = resolve;
        stylesheet.onerror = resolve;
      });
      root.append(stylesheet);
      return loaded;
    });
    const template = document.createElement('template');
    template.innerHTML = markup;
    root.append(template.content.cloneNode(true));
    const section = root.querySelector('#customer-proof-section');
    section.lang = 'en';
    section.dir = 'ltr';
    this.cards = [...root.querySelectorAll('.proof-card')];
    this.states = scenes.map(scene => {
      const art = root.querySelector(`[data-scene="${scene.id}"]`);
      art.innerHTML = scene.markup;
      return { scene, root: art, visible: false, animations: [] };
    });
    assetUrls(root);
    this.language = mountProofLanguage(this);
    this.reduced = landingMotion;
    this.paused = this.paused || false;
    this.motionButton = root.querySelector('#proof-motion-toggle');
    this.motionButton.type = 'button';
    this.onMotion = () => { this.paused = !this.paused; this.syncMotion(); };
    this.onReduced = () => { this.createAnimations(); this.syncMotion(); };
    this.onVisibility = () => this.syncMotion();
    this.onResize = () => this.measureStack();
    this.motionButton.addEventListener('click', this.onMotion);
    this.reduced.addEventListener('change', this.onReduced);
    document.addEventListener('visibilitychange', this.onVisibility);
    window.addEventListener('resize', this.onResize, { passive: true });
    this.api = {
      seek: seconds => {
        this.paused = true;
        const time = Math.max(0, Number(seconds) || 0) * 1000;
        this.states.forEach(state => state.animations.forEach(animation => {
          animation.pause(); animation.currentTime = time;
        }));
        this.syncMotion();
      },
      pause: () => { this.paused = true; this.syncMotion(); },
      play: () => { this.paused = false; this.syncMotion(); },
      getState: () => ({
        paused: this.paused,
        reducedMotion: this.reduced.matches,
        sticky: this.classList.contains('is-sticky'),
        scenes: this.states.map(state => ({
          id: state.scene.id, visible: state.visible, animations: state.animations.length,
        })),
      }),
    };

    void Promise.all([prepareFonts(), ...stylesReady]).then(() => {
      if (!this.mounted || revision !== this.revision) return;
      this.createAnimations();
      this.visibilityObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
          const state = this.states.find(item => item.root === entry.target);
          if (state) state.visible = entry.isIntersecting;
        }
        this.syncMotion();
      }, { threshold: .1 });
      this.states.forEach(state => this.visibilityObserver.observe(state.root));
      this.lastHeight = -1;
      this.layoutObserver = new ResizeObserver(() => {
        this.measureStack();
        const height = section.getBoundingClientRect().height;
        if (Math.abs(height - this.lastHeight) < 1) return;
        this.lastHeight = height;
        cancelAnimationFrame(this.layoutFrame);
        this.layoutFrame = requestAnimationFrame(() => {
          if (this.mounted) window.dispatchEvent(new Event('resize'));
        });
      });
      this.layoutObserver.observe(section);
      this.measureStack();
      this.syncMotion();
      this.dataset.ready = 'true';
    });
  }

  createAnimations() {
    for (const state of this.states) {
      state.animations.forEach(animation => animation.cancel());
      state.animations = [];
      if (this.reduced.matches || typeof Element.prototype.animate !== 'function') continue;
      state.animations = (state.scene.motion || []).flatMap(motion =>
        [...state.root.querySelectorAll(motion.selector)].map(element => {
          const animation = element.animate(motion.keyframes, {
            duration, iterations: Infinity, fill: 'both', easing: 'linear', ...motion.options,
          });
          animation.pause();
          return animation;
        }));
    }
  }

  syncMotion() {
    if (!this.mounted) return;
    for (const state of this.states) {
      const running = state.visible && !this.paused && !this.reduced.matches && !document.hidden;
      for (const animation of state.animations) {
        if (running && animation.playState !== 'running') animation.play();
        else if (!running && animation.playState === 'running') animation.pause();
      }
    }
    const frozen = this.paused || this.reduced.matches;
    this.motionButton.classList.toggle('is-paused', frozen);
    this.motionButton.setAttribute('aria-pressed', String(frozen));
    this.motionButton.setAttribute('aria-label', frozen ? 'Play customer story animations' : 'Pause customer story animations');
    this.motionButton.title = frozen ? 'Play animation' : 'Pause animation';
    this.motionButton.disabled = this.reduced.matches;
    this.language?.refreshControls();
  }

  measureStack() {
    if (!this.mounted || !this.cards.length) return;
    const height = Math.max(...this.cards.map(card => card.offsetHeight));
    this.classList.toggle('is-sticky', height > 0 && innerHeight >= height + 150);
    this.style.setProperty('--sticky-base', `${Math.max(0, (innerHeight - height) / 2 - 25)}px`);
  }

  disconnectedCallback() {
    this.language?.destroy();
    this.language = null;
    this.mounted = false;
    this.revision = (this.revision || 0) + 1;
    delete this.dataset.ready;
    this.classList.remove('is-sticky');
    this.states?.forEach(state => state.animations.forEach(animation => animation.cancel()));
    this.visibilityObserver?.disconnect();
    this.layoutObserver?.disconnect();
    cancelAnimationFrame(this.layoutFrame);
    this.motionButton?.removeEventListener('click', this.onMotion);
    this.reduced?.removeEventListener('change', this.onReduced);
    document.removeEventListener('visibilitychange', this.onVisibility);
    window.removeEventListener('resize', this.onResize);
  }
}

if (!customElements.get('agimon-customer-proof')) {
  customElements.define('agimon-customer-proof', AgimonCustomerProof);
}
