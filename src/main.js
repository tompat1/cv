import './styles.css';

const personas = [
  {
    slug: 'product-designer',
    title: 'Product Designer',
    focus: 'Discovery, flows, and storytelling',
    summary:
      'Lead workshops, synthesize research, and map journeys to align teams around a clear product direction.',
    icon: '/assets/personas/product-designer.svg',
    iconAlt: 'Icon of a pencil and ruler forming a product design badge',
  },
  {
    slug: 'frontend-partner',
    title: 'Frontend Partner',
    focus: 'Prototypes and production-ready UI',
    summary:
      'Pair with engineering to validate quickly, refine interaction details, and ship polished experiences.',
    icon: '/assets/personas/frontend-partner.svg',
    iconAlt: 'Icon of front-end brackets on a device frame',
  },
  {
    slug: 'design-systems',
    title: 'Design Systems',
    focus: 'Tokens, components, and governance',
    summary:
      'Scale a cohesive language across squads with durable design tokens, coded components, and documentation.',
    icon: '/assets/personas/design-systems.svg',
    iconAlt: 'Icon of paired components inside a UI frame',
  },
];

const THEME_KEY = 'tr-theme';
const getRoot = () => document.documentElement;
const getThemeToggle = () => document.getElementById('themeToggle');

export const setTheme = (nextTheme) => {
  const root = getRoot();
  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);

  const toggle = getThemeToggle();
  if (toggle) {
    toggle.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
  }
};

export const getPreferredTheme = () => {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const initTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) {
    setTheme(stored);
  } else {
    setTheme(getPreferredTheme());
  }
};

export const toggleTheme = () => {
  const current = getRoot().getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
};

export const initThemeToggle = () => {
  const toggle = getThemeToggle();
  if (!toggle) return;
  toggle.addEventListener('click', toggleTheme);
};

export const initBackToTop = () => {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export const initNavToggle = () => {
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

export const initHeroObserver = () => {
  const hero = document.querySelector('.hero');
  if (!hero || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

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

const renderPersonaSwitcher = () => {
  const switcher = document.getElementById('personaSwitcher');
  if (!switcher || personas.length === 0) return;

  const list = switcher.querySelector('.persona-switcher__list');
  const summary = switcher.querySelector('.persona-switcher__summary');
  if (!list || !summary) return;

  const setActivePersona = (slug) => {
    const activePersona = personas.find((persona) => persona.slug === slug) || personas[0];
    list.querySelectorAll('.persona-card').forEach((card) => {
      const isActive = card.dataset.slug === activePersona.slug;
      card.classList.toggle('persona-card--active', isActive);
      card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    summary.innerHTML = `
      <h3>${activePersona.title}</h3>
      <p class="muted">${activePersona.summary}</p>
    `;
  };

  personas.forEach((persona) => {
    const button = document.createElement('button');
    button.className = 'persona-card';
    button.type = 'button';
    button.dataset.slug = persona.slug;
    button.setAttribute('aria-pressed', 'false');

    const iconWrapper = document.createElement('span');
    iconWrapper.className = 'persona-card__icon';

    const icon = new Image();
    icon.src = persona.icon;
    icon.alt = persona.iconAlt;
    iconWrapper.appendChild(icon);

    const textWrapper = document.createElement('span');
    textWrapper.className = 'persona-card__body';

    const title = document.createElement('span');
    title.className = 'persona-card__title';
    title.textContent = persona.title;

    const focus = document.createElement('span');
    focus.className = 'persona-card__focus';
    focus.textContent = persona.focus;

    textWrapper.append(title, focus);
    button.append(iconWrapper, textWrapper);

    button.addEventListener('click', () => setActivePersona(persona.slug));

    list.appendChild(button);
  });

  setActivePersona(personas[0].slug);
};

export const initYear = () => {
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
};

export const initApp = () => {
  initTheme();
  initBackToTop();
  initNavToggle();
  initHeroObserver();
  initYear();
  renderPersonaSwitcher();
  initThemeToggle();
};

document.addEventListener('DOMContentLoaded', initApp);


