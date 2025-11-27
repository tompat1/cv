import './styles.css';

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

export const initYear = () => {
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
};

const personas = [
  {
    label: 'Product Leads',
    title: 'Ship the right bets sooner.',
    tagline:
      'I de-risk roadmap priorities with research-backed prototypes and crisp stakeholder narratives.',
    cta: { href: '#contact', copy: 'Book a UX audit' },
    projects: [
      {
        name: 'Growth journey overhaul',
        outcome: 'Reduced drop-off by 22% with clearer onboarding paths.',
      },
      {
        name: 'Insight cockpit revamp',
        outcome: 'Cut time-to-signal from days to hours for PMs.',
      },
      {
        name: 'Design system rollout',
        outcome: 'Unlocked parallel delivery across three squads.',
      },
    ],
    tools: ['Discovery sprints', 'JTBD interviews', 'Clickable prototypes'],
    testimonial: {
      quote:
        "Thomas makes ambiguous problem spaces feel solvable and keeps the team laser-focused on outcomes.",
      author: 'Mara Solis',
      role: 'Director of Product, FlowPay',
    },
  },
  {
    label: 'Brand & Marketing',
    title: 'Make the story unforgettable.',
    tagline: 'I shape premium web experiences that convert, without losing brand soul.',
    cta: { href: '#contact', copy: 'Plan a brand refresh' },
    projects: [
      {
        name: 'Narrative-led homepage',
        outcome: 'Lifted demo requests 35% with focused messaging and motion.',
      },
      {
        name: 'Campaign landing system',
        outcome: 'Enabled marketing to launch pages in under a day.',
      },
    ],
    tools: ['Story matrices', 'Figma to React audits', 'Component libraries'],
    testimonial: {
      quote: 'He translated our positioning into a site that finally feels like us—and performs.',
      author: 'Leah Grön',
      role: 'VP Brand, Circulate',
    },
  },
  {
    label: 'Engineering',
    title: 'Design that ships clean.',
    tagline: 'I bridge design intent to production with accessible, performant UI code.',
    cta: { href: '#contact', copy: 'Review site performance' },
    projects: [
      {
        name: 'Accessibility uplift',
        outcome: 'Brought core flows to WCAG AA and cut support tickets 18%.',
      },
      {
        name: 'Design-to-code parity',
        outcome: 'Mapped tokens to components, reducing QA churn for releases.',
      },
      {
        name: 'Performance hardening',
        outcome: 'Improved LCP by 0.6s across marketing pages.',
      },
    ],
    tools: ['Semantic HTML', 'Tokenized theming', 'Storybook QA'],
    testimonial: {
      quote:
        'His prototypes drop straight into our codebase and come with the accessibility details baked in.',
      author: 'Victor Strand',
      role: 'Lead Engineer, Northwind',
    },
  },
];

const createProjectsList = (projects) => {
  const listItems = projects
    .map(
      (project) =>
        `<li><strong>${project.name}.</strong> ${project.outcome}</li>`
    )
    .join('');
  return `<h4>Recent projects</h4><ul>${listItems}</ul>`;
};

const createToolsList = (tools) => {
  const listItems = tools.map((tool) => `<li>${tool}</li>`).join('');
  return `<h4>Tools I bring</h4><ul>${listItems}</ul>`;
};

export const renderPersonas = () => {
  const main = document.querySelector('main');
  if (!main) return;

  const section = document.createElement('section');
  section.className = 'section';
  section.setAttribute('aria-labelledby', 'persona-heading');

  section.innerHTML = `
    <div class="container section__header">
      <div>
        <p class="eyebrow">Tailored partnerships</p>
        <h2 id="persona-heading">Choose the path that fits your team.</h2>
      </div>
      <p class="muted">Clear outcomes, the right rituals, and a collaboration style tuned to your goals.</p>
    </div>
    <div class="container grid grid--3 persona-grid" role="list">
      ${personas
        .map(
          (persona) => `
            <article class="card persona-card" role="listitem">
              <header>
                <p class="eyebrow">For ${persona.label}</p>
                <h3>${persona.title}</h3>
                <p class="muted">${persona.tagline}</p>
              </header>
              <div>
                ${createProjectsList(persona.projects)}
                ${createToolsList(persona.tools)}
              </div>
              <figure>
                <blockquote>“${persona.testimonial.quote}”</blockquote>
                <figcaption><strong>${persona.testimonial.author}</strong>, ${persona.testimonial.role}</figcaption>
              </figure>
              <div class="persona-card__actions">
                <a class="btn btn--primary" href="${persona.cta.href}">${persona.cta.copy}</a>
              </div>
            </article>
          `
        )
        .join('')}
    </div>
  `;

  const servicesSection = document.getElementById('services');
  if (servicesSection && servicesSection.parentElement) {
    servicesSection.parentElement.insertBefore(section, servicesSection.nextElementSibling);
  } else {
    main.appendChild(section);
  }
};

export const initApp = () => {
  initTheme();
  initBackToTop();
  initNavToggle();
  initHeroObserver();
  initYear();
  initThemeToggle();
  renderPersonas();
};

document.addEventListener('DOMContentLoaded', initApp);


