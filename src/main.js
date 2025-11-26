import './styles.css';

const docEl = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const THEME_KEY = 'tr-theme';

const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const currentYearEl = document.getElementById('currentYear');

const setTheme = (nextTheme) => {
  docEl.setAttribute('data-theme', nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
};

const initTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) {
    setTheme(stored);
  } else if (prefersDark.matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

const toggleTheme = () => {
  const cur = docEl.getAttribute('data-theme');
  setTheme(cur === 'dark' ? 'light' : 'dark');
};

const initBackToTop = () => {
  if (!backToTop) return;
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const initNavToggle = () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('nav__links--open');
    }
  });
};

const initHeroObserver = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hero.classList.add('hero--visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(hero);
};

const initYear = () => {
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBackToTop();
  initNavToggle();
  initHeroObserver();
  initYear();

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

