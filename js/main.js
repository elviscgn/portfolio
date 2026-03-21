// Navigation active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) {
            current = s.id;
        }
    });

    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--black)' : '';
    });
}, { passive: true });

// GitHub avatar loader
const loadGithubAvatar = async () => {
    const img = document.querySelector('.identity-photo img');
    if (!img) return;

    try {
        const response = await fetch('https://api.github.com/users/elviscgn');
        const data = await response.json();
        if (data.avatar_url) {
            img.src = data.avatar_url;
        }
    } catch (error) {
        console.error('Failed to load GitHub avatar:', error);
        img.parentElement.style.background = '#0a0a0a';
        img.style.display = 'none';
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadGithubAvatar);