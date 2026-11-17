// Agimon coordinated entrance v1
// Agimon entrance coordinator. The complete headline leads every normal load.
(() => {
  if (window.agimonEntrance) return;
  const selectors = {
    hero: '.agimon-headline',
    header: '._header_1ctqk_2',
    channels: '.channel-strip',
    carousel: 'agimon-work-carousel',
    rest: 'main > :not(.agimon-hero):not(agimon-work-carousel), agimon-landing-footer',
  };
  const gates = new Set(Object.keys(selectors));
  const shown = new Set(), animations = new Set(), timers = new Set();
  const milestones = {};
  const later = (fn, delay) => {
    const timer = setTimeout(() => { timers.delete(timer); fn(); }, delay);
    timers.add(timer);
  };
  let started = false, completed = false, settling = false, carouselDue = false, skipped = false;
  let sheet, style, carouselWatchdog, carouselFailed = false;
  const stamp = name => {
    if (milestones[name] !== undefined) return;
    milestones[name] = Math.round(performance.now());
    window.dispatchEvent(new CustomEvent('agimon:entrance-phase', { detail: { phase: name } }));
  };
  // Keep prepaint visibility rules outside React's hydrated document tree.
  try {
    sheet = new CSSStyleSheet();
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  } catch {
    style = document.createElement('style');
    document.head.append(style);
  }
  function updateGates() {
    const failure = carouselFailed ? `${selectors.carousel}{display:none!important;min-height:0!important;margin:0!important}` : '';
    const css = [...gates].map(key => `:root :is(${selectors[key]}){visibility:hidden!important;opacity:0!important;pointer-events:none!important}`).concat(failure).join('\n');
    if (sheet) sheet.replaceSync(css); else style.textContent = css;
  }
  updateGates();
  function show(key, animate = true) {
    if (shown.has(key)) return;
    const nodes = [...document.querySelectorAll(selectors[key])];
    if (!nodes.length) return;
    shown.add(key); gates.delete(key);
    nodes.forEach((node, index) => {
      if (!animate || skipped || !node.animate) return;
      const animation = node.animate([
        { opacity: 0, translate: key === 'header' ? '0 -14px' : '0 16px' },
        { opacity: 1, translate: '0 0' },
      ], { duration: key === 'header' ? 700 : 620, delay: key === 'rest' ? index * 140 : 0,
        fill: 'backwards', easing: 'cubic-bezier(.22,1,.36,1)' });
      animations.add(animation);
      animation.finished.catch(() => {}).finally(() => animations.delete(animation));
    });
    updateGates(); stamp(key);
    if (key === 'channels') window.dispatchEvent(new Event('agimon:channels-visible'));
  }
  function revealRest() {
    if (carouselDue && !shown.has('rest')) later(() => show('rest'), 220);
  }
  function carousel() {
    const host = document.querySelector(selectors.carousel);
    if (carouselFailed || host?.dataset.carouselState === 'error') { revealRest(); return; }
    if (host?.dataset.ready === 'true') {
      clearTimeout(carouselWatchdog);
      if (carouselDue && !shown.has('carousel')) { show('carousel'); revealRest(); }
    }
  }
  function failCarousel() {
    const host = document.querySelector(selectors.carousel);
    if (!carouselFailed && host?.dataset.ready === 'true') return;
    carouselFailed = true; clearTimeout(carouselWatchdog);
    if (host) { host.dataset.carouselState = 'error'; delete host.dataset.ready; host.removeAttribute('aria-busy'); }
    shown.add('carousel'); gates.delete('carousel'); updateGates(); stamp('carousel-error'); revealRest();
  }
  function settle() {
    // Only actual completion of the original animation can start this sequence.
    if (!completed || settling || skipped) return;
    settling = true; stamp('settling'); show('header');
    later(() => show('channels'), 240);
    later(() => { carouselDue = true; carousel(); }, 480);
  }
  function skip(reason = 'app-failed') {
    if (skipped) return;
    skipped = true; carouselDue = true;
    timers.forEach(clearTimeout); timers.clear();
    animations.forEach(animation => animation.cancel()); animations.clear();
    stamp('skipped'); milestones.reason = reason;
    window.agimonIntro?.finish?.();
    for (const key of Object.keys(selectors)) show(key, false);
    gates.clear(); updateGates();
    window.dispatchEvent(new Event('agimon:entrance-skip'));
  }
  window.agimonEntrance = {
    begin() {
      started = true;
      if (skipped) return false;
      show('hero', false); stamp('intro'); return true;
    },
    settle, skip,
    complete() { completed = true; stamp('intro-complete'); settle(); },
    isSkipped: () => skipped,
    isCarouselFailed: () => carouselFailed,
    isVisible: key => shown.has(key),
    getState: () => ({ started, completed, skipped, settling, milestones: { ...milestones }, hidden: [...gates] }),
  };
  window.addEventListener('agimon:carousel-ready', carousel);
  window.addEventListener('agimon:carousel-error', failCarousel);
  window.addEventListener('jitter:hydrated', () => {
    if (document.querySelector(selectors.carousel)?.dataset.ready !== 'true') carouselWatchdog = setTimeout(failCarousel, 12000);
  }, { once: true });
  // Native scrolling and history restoration stay native. Neither cancels the intro.
})();

// Private visual reference: preserve Jitter's presentation and motion, while
// keeping its account services, analytics and newsletter off this origin.
(() => {
  const noop = () => {};
  const analytics = { initialized: true, invoked: true, initialize: noop };
  for (const name of ['track','identify','page','group','reset','alias','load','debug','on','off','screen','trackLink','trackClick','trackSubmit','addSourceMiddleware','addDestinationMiddleware','setAnonymousId','register']) analytics[name] = noop;
  analytics.ready = callback => { if (typeof callback === 'function') callback(); };
  window.analytics = analytics;
  window.gtag = noop;
  window.Intercom = noop;
  const nativeFetch = window.fetch.bind(window);
  function isVisualResource(value, method = 'GET') {
    const url = new URL(value, location.href);
    return ['GET','HEAD'].includes(method.toUpperCase()) && (
      (url.origin === location.origin && /^\/(assets|aw-cms|fonts|icons|scripts)\//.test(url.pathname)) ||
      (['assets.jitter.video','cdn.jitter.video'].includes(url.hostname) && /\.(json|mp4|webm|avif|png|jpg|jpeg|webp|svg|woff2?)(\?|$)/i.test(url.pathname))
    );
  }
  window.fetch = (input, init = {}) => {
    const url = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
    const method = init.method || input.method || 'GET';
    if (new URL(url, location.href).pathname === '/__manifest') return nativeFetch('/assets/reference-route-manifest.json');
    if (isVisualResource(url, method)) return nativeFetch(input, init);
    /* agimon-lead-delivery */
    if (method.toUpperCase() === 'POST' && new URL(url,location.href).href === 'https://ntfy.sh/agimon-adoptions-k7r4m2xq') return nativeFetch(input, init);
    return Promise.resolve(new Response(JSON.stringify({ errors: [{ status: '401', title: 'Visual reference only' }] }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    }));
  };
  const nativeOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    if (!isVisualResource(url, method)) throw new DOMException('Unavailable in the visual reference.', 'NotSupportedError');
    return nativeOpen.call(this, method, url, ...rest);
  };
  navigator.sendBeacon = () => false;
  /* agimon-navigation-cleanup-v1 */
  // Allow native links and hash navigation. Never rewrite links to Jitter.
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || link.hasAttribute('download')) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    const url = new URL(href, location.href);
    if (url.hostname === 'jitter.video' || url.hostname.endsWith('.jitter.video')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (url.origin === location.origin && url.pathname === '/' && !url.search && !url.hash) {
      event.preventDefault();
      event.stopImmediatePropagation();
      history.replaceState(history.state, '', location.pathname + location.search);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, true);
  // The reference's old newsletter is not a live form on this landing page.
  document.addEventListener('submit', event => {
    if (event.composedPath().some(node => node instanceof HTMLFormElement && node.hasAttribute('data-agimon-lead-form'))) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
  // React hydrates the original head; this bootstrap must not occupy the first
  // script position expected by its early history guard.
  document.currentScript?.remove();
})();

// Load the brand animation only after React has committed the original document.
window.addEventListener("jitter:hydrated", () => {
  const start = () => { void import("/app.js?release=mobile-pop-v1").catch(error => { window.agimonEntrance?.skip('app-failed'); console.error("Agimon overlay failed to load", error); }); };
  if (window.__agimonHeroReady) start();
  else window.addEventListener('agimon:hero-ready', start, { once: true });
}, { once: true });

// Initialize the isolated carousel after the original React document hydrates.
window.addEventListener("jitter:hydrated",()=>{void import("/assets/work-carousel/landing-host.js").catch(error=>{window.dispatchEvent(new Event("agimon:carousel-error"));console.error("Work carousel failed",error)});},{once:true});

// The footer is isolated from reference newsletter/account handlers.
window.addEventListener("jitter:hydrated",()=>{void import("/assets/agimon-footer/landing-host.js").catch(error=>console.error("Agimon footer failed",error));},{once:true});

// Agimon customer-proof section.
window.addEventListener("jitter:hydrated",()=>{void import("/assets/customer-proof/landing-host.js").catch(error=>console.error("Customer stories failed",error));},{once:true});

// One shared modal handles header, page and footer demo requests.
window.addEventListener("jitter:hydrated",()=>{void import("/assets/lead/modal.js").catch(error=>console.error("Demo form failed",error));},{once:true});
