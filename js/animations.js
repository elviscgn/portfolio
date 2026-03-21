/* PARALLAX */
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg');
  if (bg) bg.style.transform = `translate(-50%, calc(-52% + ${window.scrollY * 0.3}px))`;
}, { passive: true });

/* SCROLL REVEAL */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* SKILL BARS */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const bar = e.target;
    const w = bar.dataset.w;
    setTimeout(() => {
      bar.style.width = w + '%';
      bar.classList.add('on');
    }, 80);
    barObs.unobserve(bar);
  });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.sk-bar').forEach(b => barObs.observe(b));

/* IMPI PROGRESS BAR
   — update this number whenever you make progress, 0-100 */
const IMPI_PROGRESS = 5;

const impiBar = document.getElementById('impi-bar');
const impiLabel = document.querySelector('.prog-label span:last-child');
if (impiBar) {
  if (impiLabel) impiLabel.textContent = '~' + IMPI_PROGRESS + '%';
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { impiBar.style.width = IMPI_PROGRESS + '%'; }, 300);
      }
    });
  }, { threshold: 0 }).observe(impiBar);
}
