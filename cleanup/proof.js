/** Native scrolling only. Returns a cleanup function for React useEffect. */
export function initProof(root = document) {
  const list = root.querySelector('.agimon-proof__cards');
  if (!list) return () => {};

  const cards = [...list.querySelectorAll('.agimon-proof__card')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let disposed = false;

  function measure() {
    frame = 0;
    if (disposed || !cards.length) return;

    const height = Math.max(...cards.map(card => card.getBoundingClientRect().height));
    const viewport = document.documentElement.clientHeight;
    const firstTop = Math.max(88, (viewport - height) / 2);
    const lastBottom = firstTop + (cards.length - 1) * 25 + height;
    const canStack = !reducedMotion.matches && lastBottom <= viewport - 16;

    list.dataset.stack = String(canStack);
    cards.forEach((card, index) => {
      card.style.setProperty('--proof-stack-top', `${firstTop + index * 25}px`);
      card.style.zIndex = String(index + 1);
    });
  }

  function schedule() {
    if (!disposed && !frame) frame = requestAnimationFrame(measure);
  }

  const observer = new ResizeObserver(schedule);
  cards.forEach(card => observer.observe(card));
  window.addEventListener('resize', schedule, { passive: true });
  reducedMotion.addEventListener('change', schedule);
  document.fonts?.ready.then(schedule);
  measure();

  return () => {
    disposed = true;
    if (frame) cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener('resize', schedule);
    reducedMotion.removeEventListener('change', schedule);
    delete list.dataset.stack;
    cards.forEach(card => {
      card.style.removeProperty('--proof-stack-top');
      card.style.removeProperty('z-index');
    });
  };
}
