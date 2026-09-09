(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'theme';

  // JS is running — let CSS know so the no-JS reveal fallback stands down
  // and the roadmap items can start hidden, ready to animate in.
  root.classList.remove('no-js');

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let theme = getInitialTheme();
  applyTheme(theme);

  toggleBtn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  });

  // ---------- Roadmap scroll reveal ----------
  // Each timeline entry starts off-screen at a corner (left/right, alternating)
  // and glides into place as it scrolls into view.
  const revealItems = document.querySelectorAll('.timeline-item.reveal');

  if (revealItems.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      revealItems.forEach(function (item) {
        observer.observe(item);
      });
    } else {
      // No IntersectionObserver support: just show everything.
      revealItems.forEach(function (item) {
        item.classList.add('in-view');
      });
    }
  }
})();
