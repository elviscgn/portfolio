/* GITHUB AVATAR */
fetch('https://api.github.com/users/elviscgn')
  .then(r => r.json())
  .then(d => {
    if (d.avatar_url) document.getElementById('avatar').src = d.avatar_url;
  })
  .catch(() => {
    const p = document.querySelector('.id-photo');
    if (p) p.style.background = '#0a0a0a';
  });

/* NAV ACTIVE STATE */
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  secs.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navAs.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });
