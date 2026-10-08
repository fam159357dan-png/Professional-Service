(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const toggle = $('.menu-btn'), mnav = $('#mobile-nav');
  const setMenu = (open) => { mnav.hidden = !open; toggle.setAttribute('aria-expanded', open); toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню'); };
  toggle.addEventListener('click', () => setMenu(mnav.hidden));
  $$('a', mnav).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: 0.1 });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add('visible'));
})();
