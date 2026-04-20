/* ============================================================
   POSTROE.ORG — interaction & motion
   ============================================================ */

// ---------- Theme toggle ----------
(function themeToggle() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let mode = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', mode);

  const icons = {
    light: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    dark: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  };

  function render() {
    if (!toggle) return;
    toggle.innerHTML = mode === 'dark' ? icons.light : icons.dark;
    toggle.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  render();
  if (toggle) {
    toggle.addEventListener('click', () => {
      mode = mode === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', mode);
      render();
    });
  }
})();

// ---------- Reveal on scroll ----------
(function revealOnScroll() {
  const els = document.querySelectorAll('.reveal, .reveal-stagger, .rule');
  if (!('IntersectionObserver' in window)) {
    els.forEach((e) => e.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // trigger nested counters / bars
          entry.target.querySelectorAll('[data-count]').forEach(startCounter);
          entry.target.querySelectorAll('.bar-fill').forEach((b) => {
            b.style.width = b.dataset.width;
          });
          entry.target.querySelectorAll('.travel-fill').forEach((b) => {
            b.style.width = b.dataset.width;
          });
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '-40px 0px' }
  );
  els.forEach((el) => io.observe(el));
})();

// ---------- Counter ease-out ----------
function startCounter(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const end = parseFloat(el.dataset.count);
  const duration = parseInt(el.dataset.duration || '1800', 10);
  const format = el.dataset.format || 'plain';
  const start = performance.now();

  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const v = end * eased;
    el.textContent = formatNum(v, format, end);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function formatNum(v, fmt, end) {
  if (fmt === 'compactM') {
    return (v / 1_000_000).toFixed(v >= end ? 1 : 1) + 'M';
  }
  if (fmt === 'number') {
    return Math.round(v).toLocaleString();
  }
  if (fmt === 'decimal') {
    return v.toFixed(1);
  }
  return Math.round(v).toLocaleString();
}

// ---------- Days since Dobbs ----------
(function daysCounter() {
  const el = document.querySelector('[data-days-since]');
  if (!el) return;
  const start = new Date(el.dataset.daysSince);
  const now = new Date();
  const days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  el.dataset.count = days;
  el.dataset.format = 'number';
  // start immediately since it's in the hero and already visible
  startCounter(el);
})();

// ---------- State detail panel (driven by map.js) ----------
window.updateStateDetail = function updateStateDetail(code) {
  const data = window.POSTROE_STATES[code];
  if (!data) return;
  const nameEl = document.querySelector('[data-state-name]');
  const statusEl = document.querySelector('[data-state-status]');
  const lawEl = document.querySelector('[data-state-law]');
  const gestEl = document.querySelector('[data-state-gest]');
  const travEl = document.querySelector('[data-state-trav]');

  if (!nameEl) return;

  const labels = {
    banned: 'Total ban',
    limited: 'Early-pregnancy ban',
    gestational: 'Gestational limit',
    protected: 'Protected'
  };

  // animate out / in
  [nameEl, statusEl, lawEl].forEach((el) => {
    el.style.transition = 'opacity .2s, transform .2s';
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
  });
  setTimeout(() => {
    nameEl.textContent = data.name;
    statusEl.textContent = labels[data.status];
    statusEl.className = 'state-detail__status status-' + data.status;
    lawEl.textContent = data.law;
    if (gestEl) gestEl.textContent = data.gest;
    if (travEl) travEl.textContent = data.traveled ? data.traveled.toLocaleString() : '—';
    [nameEl, statusEl, lawEl].forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, 180);
};

// ---------- Stories carousel ----------
(function storiesCarousel() {
  const quote = document.querySelector('[data-story-quote]');
  const meta = document.querySelector('[data-story-meta]');
  const dots = document.querySelectorAll('[data-story-dot]');
  if (!quote || !window.POSTROE_DATA || !window.POSTROE_DATA.stories) return;

  const items = window.POSTROE_DATA.stories;
  let i = 0;

  function render(idx) {
    const item = items[idx];
    quote.style.opacity = '0';
    quote.style.transform = 'translateY(10px)';
    meta.style.opacity = '0';
    setTimeout(() => {
      quote.textContent = '\u201C' + item.quote + '\u201D';
      meta.textContent = item.meta;
      quote.style.transition = 'opacity .5s, transform .5s';
      meta.style.transition = 'opacity .5s';
      quote.style.opacity = '1';
      quote.style.transform = 'none';
      meta.style.opacity = '1';
    }, 220);
    dots.forEach((d, di) => d.classList.toggle('is-active', di === idx));
  }
  render(0);

  dots.forEach((dot, di) => {
    dot.addEventListener('click', () => {
      i = di;
      render(i);
    });
  });

  let interval = setInterval(() => {
    i = (i + 1) % items.length;
    render(i);
  }, 7000);

  const stories = document.querySelector('.stories');
  if (stories) {
    stories.addEventListener('mouseenter', () => clearInterval(interval));
    stories.addEventListener('mouseleave', () => {
      interval = setInterval(() => {
        i = (i + 1) % items.length;
        render(i);
      }, 7000);
    });
  }
})();

// ---------- Works page filter ----------
(function worksFilter() {
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-cat]');
  if (!chips.length || !cards.length) return;

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.filter;
      chips.forEach((c) => c.classList.toggle('is-active', c === chip));
      cards.forEach((card) => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.transition = 'opacity .35s, transform .35s';
        if (show) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 350);
        }
      });
    });
  });
})();
