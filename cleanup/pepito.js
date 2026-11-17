import { landingMotion } from '../landing-motion.js';
import { createMarketingMascot, MARKETING_TOMATO } from '../marketing-mascot.mjs';

class AgimonPepito extends HTMLElement {
  constructor() {
    super();
    this.elapsed = 0;
    this.frame = 0;
    this.lastTime = 0;
    this.inView = false;
    this.reduced = landingMotion;
    this.sync = () => {
      cancelAnimationFrame(this.frame);
      this.frame = 0;
      this.lastTime = 0;
      if (this.reduced.matches) {
        this.elapsed = 0;
        this.mascot?.render(0);
      }
      if (this.canAnimate()) this.frame = requestAnimationFrame(this.tick);
    };
    this.tick = now => {
      this.frame = 0;
      if (!this.canAnimate()) {
        this.sync();
        return;
      }
      if (this.lastTime) this.elapsed += Math.min(.08, (now - this.lastTime) / 1000);
      this.lastTime = now;
      this.mascot.render(this.elapsed);
      this.frame = requestAnimationFrame(this.tick);
    };
  }

  connectedCallback() {
    this.details = this.closest('details');
    this.details?.addEventListener('toggle', this.sync);
    document.addEventListener('visibilitychange', this.sync);
    this.reduced.addEventListener('change', this.sync);
    this.observer = new IntersectionObserver(entries => {
      this.inView = entries[0].isIntersecting;
      this.sync();
    });
    this.observer.observe(this);
    if (!this.initializing) this.initializing = this.setup().catch(error => console.error('Pepito could not initialize', error));
    this.sync();
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.lastTime = 0;
    this.inView = false;
    this.observer?.disconnect();
    this.details?.removeEventListener('toggle', this.sync);
    document.removeEventListener('visibilitychange', this.sync);
    this.reduced.removeEventListener('change', this.sync);
  }

  canAnimate() {
    return this.mascot && this.isConnected && this.details?.open && this.inView && !document.hidden && !this.reduced.matches;
  }

  async setup() {
    const response = await fetch(new URL('../assets/selected-logo-preset.json', import.meta.url));
    if (!response.ok) throw new Error('Approved mascot preset unavailable');
    this.mascot = createMarketingMascot(this, await response.json(), MARKETING_TOMATO);
    this.mascot.svg.setAttribute('aria-hidden', 'true');
    this.dataset.ready = 'true';
    this.sync();
  }
}

if (!customElements.get('agimon-pepito')) customElements.define('agimon-pepito', AgimonPepito);
