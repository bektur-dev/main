const reveals = document.querySelectorAll('.reveal');
const statsGrid = document.querySelector('.stats-grid');
const statNumbers = document.querySelectorAll('.stat-number');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.18 });

reveals.forEach((section) => revealObserver.observe(section));

function animateStats() {
  statNumbers.forEach((el) => {
    const target = Number(el.dataset.target || 0);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = String(target);
      }
    }

    el.textContent = '0';
    requestAnimationFrame(tick);
  });
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateStats();
    } else {
      statNumbers.forEach((el) => {
        el.textContent = '0';
      });
    }
  });
}, { threshold: 0.35 });

if (statsGrid) {
  statsObserver.observe(statsGrid);
}