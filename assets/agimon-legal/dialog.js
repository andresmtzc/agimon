const mounted = new WeakMap();
let policies;
let nextId = 0;

const definitions = {
  privacy: {
    title: 'Privacy policy',
    url: 'https://chat.agimon.io/privacy/',
    action: 'Contact us',
    email: 'mailto:andres@agimon.io',
    icon: '<path d="M12 3 4.5 6v5.8c0 4.4 3.1 7.7 7.5 9.2 4.4-1.5 7.5-4.8 7.5-9.2V6L12 3Z"/><path d="m8.5 12 2.3 2.3 4.8-4.8"/>',
  },
  deletion: {
    title: 'Data deletion',
    url: 'https://chat.agimon.io/data-deletion/',
    action: 'Request deletion',
    email: 'mailto:andres@agimon.io?subject=Agimon%20data%20deletion%20request',
    icon: '<path d="M5 6.5h14M9 6.5V4h6v2.5M7 6.5l.8 13h8.4l.8-13M10 10v6M14 10v6"/>',
  },
};

function loadPolicies() {
  policies ||= fetch(new URL('./content.json', import.meta.url)).then(response => {
    if (!response.ok) throw new Error('Policy content unavailable');
    return response.json();
  }).catch(error => { policies = null; throw error; });
  return policies;
}

/** Mount once per footer shadow root. Opening never submits a request. */
export function mountLegalDialogs(root) {
  mounted.get(root)?.destroy();
  const doc = root.ownerDocument;
  const view = doc.defaultView;
  const events = new AbortController();
  const id = `agimon-legal-title-${++nextId}`;
  const style = doc.createElement('link');
  style.rel = 'stylesheet';
  style.href = new URL('./dialog.css', import.meta.url).href;
  const dialog = doc.createElement('dialog');
  dialog.className = 'legal-dialog';
  dialog.lang = 'en';
  dialog.dir = 'ltr';
  dialog.setAttribute('aria-labelledby', id);
  dialog.innerHTML = `
    <header class="legal-dialog__header">
      <div class="legal-dialog__heading">
        <span class="legal-dialog__eyebrow"><svg class="legal-dialog__symbol" viewBox="0 0 24 24" aria-hidden="true"></svg>Agimon</span>
        <h2 class="legal-dialog__title" id="${id}"></h2>
        <p class="legal-dialog__date" hidden></p>
      </div>
      <button class="legal-dialog__dismiss" type="button" aria-label="Close dialog" autofocus><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
    </header>
    <div class="legal-dialog__body" tabindex="0"></div>
    <footer class="legal-dialog__actions">
      <a class="legal-dialog__email" href="mailto:andres@agimon.io">andres@agimon.io</a>
      <a class="legal-dialog__primary"><span></span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5"/></svg></a>
    </footer>`;
  root.append(style, dialog);
  const body = dialog.querySelector('.legal-dialog__body');
  const title = dialog.querySelector('.legal-dialog__title');
  const date = dialog.querySelector('.legal-dialog__date');
  const symbol = dialog.querySelector('.legal-dialog__symbol');
  const primary = dialog.querySelector('.legal-dialog__primary');
  const dismiss = dialog.querySelector('.legal-dialog__dismiss');
  let disposed = false;
  let revision = 0;
  let trigger;
  let scrollStyle;
  let startedOnBackdrop = false;

  function lockScroll() {
    if (scrollStyle) return;
    const target = doc.documentElement.style;
    scrollStyle = ['overflow', 'scrollbar-gutter', 'overscroll-behavior'].map(name => ({
      name, value: target.getPropertyValue(name), priority: target.getPropertyPriority(name),
    }));
    target.setProperty('scrollbar-gutter', 'stable');
    target.setProperty('overflow', 'hidden');
    target.setProperty('overscroll-behavior', 'none');
  }

  function unlockScroll() {
    if (!scrollStyle) return;
    for (const { name, value, priority } of scrollStyle) {
      if (value) doc.documentElement.style.setProperty(name, value, priority);
      else doc.documentElement.style.removeProperty(name);
    }
    scrollStyle = null;
  }

  function restoreFocus() {
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  async function open(type, source) {
    if (disposed || !definitions[type]) return;
    const info = definitions[type];
    const request = ++revision;
    if (!dialog.open) trigger = source || root.activeElement || doc.activeElement;
    title.textContent = info.title;
    date.hidden = true;
    date.textContent = '';
    symbol.innerHTML = info.icon;
    primary.href = info.email;
    primary.querySelector('span').textContent = info.action;
    dialog.dataset.policy = type;
    dialog.dataset.ready = 'loading';
    const loading = doc.createElement('p');
    loading.className = 'legal-dialog__status';
    loading.setAttribute('role', 'status');
    loading.textContent = 'Loading policy…';
    body.replaceChildren(loading);
    body.setAttribute('aria-busy', 'true');
    if (!dialog.open) {
      try {
        dialog.showModal();
        lockScroll();
      } catch (error) {
        unlockScroll();
        throw error;
      }
    }
    dismiss.focus({ preventScroll: true });
    body.scrollTop = 0;
    try {
      const copy = (await loadPolicies())[type];
      if (disposed || request !== revision || !dialog.open) return;
      if (!copy || typeof copy.html !== 'string') throw new Error('Policy content missing');
      // This file contains only our checked-in policy articles. Move their title
      // and effective date into the dialog header, preserving the policy text.
      const template = doc.createElement('template');
      template.innerHTML = copy.html;
      template.content.querySelector('h1')?.remove();
      template.content.querySelector('.muted')?.remove();
      for (const heading of template.content.querySelectorAll('h2')) {
        const replacement = doc.createElement('h3');
        replacement.replaceChildren(...heading.childNodes);
        heading.replaceWith(replacement);
      }
      if (type === 'privacy') {
        // Keep the complete policy available without turning the modal into a
        // full-height document. Native disclosures work with mouse and keyboard.
        for (const heading of [...template.content.querySelectorAll('h3')]) {
          const section = doc.createElement('details');
          section.className = 'legal-section';
          const summary = doc.createElement('summary');
          const label = doc.createElement('span');
          label.replaceChildren(...heading.childNodes);
          summary.append(label);
          const content = doc.createElement('div');
          content.className = 'legal-section__content';
          heading.before(section);
          while (heading.nextSibling && heading.nextSibling.nodeName !== 'H3') {
            content.append(heading.nextSibling);
          }
          section.append(summary, content);
          heading.remove();
        }
      } else {
        template.content.querySelector('ol')?.classList.add('deletion-steps');
        for (const link of template.content.querySelectorAll('a[href^="mailto:"]')) link.href = info.email;
      }
      title.textContent = copy.title;
      date.textContent = copy.effective;
      date.hidden = !copy.effective;
      body.replaceChildren(template.content.cloneNode(true));
      body.scrollTop = 0;
      dialog.dataset.ready = 'true';
    } catch {
      if (disposed || request !== revision || !dialog.open) return;
      const message = doc.createElement('p');
      message.className = 'legal-dialog__status';
      message.textContent = 'The policy couldn’t load here. You can read it on the policy page.';
      const link = doc.createElement('a');
      link.href = info.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `Open ${info.title.toLowerCase()} ↗`;
      const paragraph = doc.createElement('p');
      paragraph.append(link);
      body.replaceChildren(message, paragraph);
      dialog.dataset.ready = 'error';
    } finally {
      if (request === revision) body.removeAttribute('aria-busy');
    }
  }

  function outside(event) {
    const bounds = dialog.getBoundingClientRect();
    return event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom);
  }
  dialog.addEventListener('pointerdown', event => { startedOnBackdrop = outside(event); }, { signal: events.signal });
  dialog.addEventListener('click', event => {
    if (startedOnBackdrop && outside(event)) close();
    startedOnBackdrop = false;
  }, { signal: events.signal });
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    revision++;
    body.removeAttribute('aria-busy');
    unlockScroll();
    restoreFocus();
  }, { signal: events.signal });
  dismiss.addEventListener('click', close, { signal: events.signal });
  body.addEventListener('click', event => {
    const link = event.target instanceof view.Element ? event.target.closest('a[href]') : null;
    if (!link || link.target === '_blank' || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.getAttribute('href'), 'https://chat.agimon.io');
    if (url.origin !== 'https://chat.agimon.io') return;
    const type = url.pathname === '/privacy/' ? 'privacy' : url.pathname === '/data-deletion/' ? 'deletion' : null;
    if (type) { event.preventDefault(); void open(type); }
  }, { signal: events.signal });

  const api = {
    open,
    destroy() {
      if (disposed) return;
      disposed = true;
      revision++;
      events.abort();
      if (dialog.open) dialog.close();
      unlockScroll();
      restoreFocus();
      dialog.remove();
      style.remove();
      mounted.delete(root);
    },
  };
  mounted.set(root, api);
  return api;
}
