document.addEventListener('DOMContentLoaded', () => {
  const selector = [
    '.service-card', '.project-card', '.test-card', '.ebook-card', '.blog-card',
    '.stat-card', '.mv-card', '.valor-card', '.equipo-card', '.servicio-item',
    '.ben-card', '.kf-item', '.kplan-card', '.participar-card', '.recurso-card',
    '.py-block .py-grid > *', '.about-text', '.about-logo-block', '.section-header',
  ].join(', ');

  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  els.forEach((el) => el.classList.add('reveal'));

  if (reduced) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => io.observe(el));
});
