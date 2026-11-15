// Available width determines whether the desktop presentation has enough room.
export const PHONE_MOVIE_QUERY = '(max-width:700px)';

export function isPhoneMovie(host, media = matchMedia(PHONE_MOVIE_QUERY)) {
  if (host.hasAttribute('data-desktop-preview')) return false;
  const width = host.getBoundingClientRect().width;
  return media.matches || (width > 0 && width <= 700);
}

export function mountPhoneMovieView(host) {
  const media = matchMedia(PHONE_MOVIE_QUERY);
  const update = () => {
    const phoneOnly = isPhoneMovie(host, media);
    host.toggleAttribute('data-phone-only', phoneOnly);
    if (phoneOnly && host.viewMode !== 'mobile') host.switchView('mobile');
    // Leaving a narrow viewport reveals the tabs without replacing the scene
    // the visitor is watching. Their next tab choice remains explicit.
  };
  media.addEventListener('change', update);
  const resizeObserver = new ResizeObserver(update);
  resizeObserver.observe(host);
  update();
  return () => {
    media.removeEventListener('change', update);
    resizeObserver.disconnect();
  };
}
