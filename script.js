/* ===== Mobile Nav Toggle ===== */
const header = document.querySelector('.site-header');
const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));
  header.classList.toggle('nav-open');
});

/* Close menu on link click (mobile) */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    header.classList.remove('nav-open');
  });
});

/* ===== IntersectionObserver Scroll Reveal ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // Optional: unobserve after revealing for performance
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ===== Dynamic Year in Footer ===== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ===== Smooth scrolling (extra control) ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
