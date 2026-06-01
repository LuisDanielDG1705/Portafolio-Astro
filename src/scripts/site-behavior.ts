if (typeof window !== 'undefined') {
  window.addEventListener('load', () => document.body.classList.remove('is-preload'));
  window.addEventListener('orientationchange', () => window.scrollTo(0, 0));
  window.ontouchmove = () => false;
}
