const reveals = document.querySelectorAll('.reveal');
const stats = document.querySelectorAll('.stat-number');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach(el => revealObserver.observe(el));

const animateValue = (element, target) => {
  let current = 0;
  const duration = 1500;
  const stepTime = Math.max(18, duration / target);

  const timer = setInterval(() => {
    current += 1;
    element.textContent = current;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, stepTime);
};

const statObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const target = Number(entry.target.dataset.target || 0);
      animateValue(entry.target, target);
      statObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);

stats.forEach(stat => statObserver.observe(stat));
