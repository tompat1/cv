import './styles.css';

const THEME_KEY = 'tr-theme';
const personas = [
  {
    title: 'Digital Design & UX',
    slug: 'digital-design-ux',
    palette: {
      accent: '#e15b9e',
      accentStrong: '#d14888',
      accentSoft: 'rgba(225, 91, 158, 0.16)',
      accentSurface: 'rgba(225, 91, 158, 0.12)',
      accentBorder: 'rgba(225, 91, 158, 0.4)',
    },
    icon: '/assets/product-designer.svg',
    iconAlt: 'Geometric icon for a digital product designer',
    heroCopy: {
      eyebrow: 'Consultant & designer for web and digital products',
      heading: 'Designing intuitive experiences for',
      highlight: 'modern products & services.',
      lead:
        'I bring 30+ years across IT, digital design, and product to move ideas from discovery through validated prototypes into developer-ready design systems.',
      stats: [
        { value: '30+ yrs', label: 'Consulting across IT & design' },
        { value: '12 yrs', label: 'Digital product & UX focus' },
        { value: '200+', label: 'Flows prototyped & tested' },
      ],
      focus: [
        'I design intuitive product flows, validate with users, and deliver Figma systems ready for dev handoff.',
        'Hands-on research loops, from interviews to moderated tests, keep usability grounded in real feedback.',
        'Design systems, UI kits, and accessibility baked into every component for smoother builds.',
      ],
      actions: [
        { label: 'See recent assignments', href: '#work', variant: 'primary' },
        { label: 'Get in touch', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'News / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Product discovery, UX, and redesign for a digital news platform with TypeScript, RESTful APIs, and graph visualizations.',
        tags: ['User flows & prototypes', 'Design systems', 'React / Next.js'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Research-led UX direction for environmental reporting tools, interactive maps, and complex forms.',
        tags: ['Accessibility', 'Data-driven UX', 'Stakeholder workshops'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
      {
        badge: 'Banking',
        year: '2014',
        title: 'Bankgirocentralen',
        description:
          'Flow design and responsive UI for online bank applications and dashboards across multiple business lines.',
        tags: ['Responsive UX', 'Design leadership', 'Agile delivery'],
        linkLabel: 'Engagement highlights ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Product discovery',
        description:
          'Shape journeys with research, interviews, and co-creation that clarify user intent and business value.',
        bullets: ['Problem framing & workshops', 'User interviews & synthesis', 'Personas, jobs-to-be-done, service maps'],
      },
      {
        title: 'UX & product design',
        description:
          'Prototype flows, validate them with users, and refine the details until they are ready for build.',
        bullets: ['Flows, wires, and high-fidelity UI', 'Usability tests & iteration', 'Microcopy & interaction design'],
      },
      {
        title: 'Design systems',
        description:
          'Deliver accessible, reusable components with Figma libraries and implementation notes for dev teams.',
        bullets: ['Foundations & tokens', 'UI kits with states', 'Handoff specs & documentation'],
      },
    ],
    testimonial: {
      quote:
        'Combining the demands of digital design, front-end, and product thinking—paired with my sensibilities as a graphic designer.',
      name: 'Personal motto',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready to ship a validated experience?',
      body:
        'Bring me in for discovery, UX leadership, or design system delivery. We will test, refine, and hand off a build-ready solution.',
      button: { label: 'Start a UX project', href: '#contact' },
    },
  },
  {
    title: 'Branding & Content',
    slug: 'branding-content',
    palette: {
      accent: '#7157ff',
      accentStrong: '#5a3df3',
      accentSoft: 'rgba(113, 87, 255, 0.16)',
      accentSurface: 'rgba(113, 87, 255, 0.12)',
      accentBorder: 'rgba(113, 87, 255, 0.4)',
    },
    icon: '/assets/design-systems.svg',
    iconAlt: 'Geometric icon for brand and content strategy',
    heroCopy: {
      eyebrow: 'Brand and content leader for product teams',
      heading: 'Building cohesive stories through',
      highlight: 'identity, messaging, and content.',
      lead:
        'I create brand systems, messaging frameworks, and content plans that keep every touchpoint consistent while supporting product goals.',
      stats: [
        { value: '25+', label: 'Brands refreshed or launched' },
        { value: '6', label: 'Languages coordinated for content ops' },
        { value: '12 yrs', label: 'Storytelling for digital products' },
      ],
      focus: [
        'I craft cohesive visual identities, messaging frameworks, and content that keeps your voice consistent.',
        'Style guides, design tokens, and brand toolkits that scale from decks to product UI.',
        'Editorial calendars, long- and short-form copy, and governance to keep teams aligned.',
      ],
      actions: [
        { label: 'See recent assignments', href: '#work', variant: 'primary' },
        { label: 'Get in touch', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'Finance',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'Brand and content direction for multilingual platforms, dashboards, and campaigns across 23 languages.',
        tags: ['Messaging frameworks', 'Design direction', 'Localization ops'],
        linkLabel: 'See project notes ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Identity refresh and content strategy for environmental reporting tools and public-facing communications.',
        tags: ['Brand systems', 'Editorial voice', 'Accessibility'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
      {
        badge: 'News / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Narrative and UI content for subscription funnels, dashboards, and data-heavy visualizations.',
        tags: ['Narrative design', 'Content design', 'Conversion copy'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Identity systems',
        description:
          'Define the visual language, from logos to UI styling, with scalable guidelines that teams can ship with.',
        bullets: ['Visual identity refresh', 'Design tokens & UI styling', 'Brand toolkits & templates'],
      },
      {
        title: 'Messaging frameworks',
        description:
          'Clarify positioning, value props, and proof points so every channel speaks in one voice.',
        bullets: ['Positioning & story pillars', 'Product messaging hierarchy', 'Tone & voice playbooks'],
      },
      {
        title: 'Content & ops',
        description:
          'Plan and deliver content that stays on-brand—from landing pages to lifecycle campaigns.',
        bullets: ['Editorial calendars', 'Localization & governance', 'Content design for product UI'],
      },
    ],
    testimonial: {
      quote:
        'A cohesive brand voice across product, marketing, and support makes every experience feel intentional.',
      name: 'Guiding principle',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready for a consistent brand voice?',
      body:
        'Let us craft the identity, messaging, and content frameworks that keep your product recognizable everywhere.',
      button: { label: 'Plan a brand sprint', href: '#contact' },
    },
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    palette: {
      accent: '#20b0b5',
      accentStrong: '#1a8f93',
      accentSoft: 'rgba(32, 176, 181, 0.16)',
      accentSurface: 'rgba(32, 176, 181, 0.12)',
      accentBorder: 'rgba(32, 176, 181, 0.42)',
    },
    icon: '/assets/ux-engineer.svg',
    iconAlt: 'Geometric icon for a web developer',
    heroCopy: {
      eyebrow: 'Front-end engineer & UX technologist',
      heading: 'Building performant, maintainable sites with',
      highlight: 'modern tooling and best practices.',
      lead:
        'From design handoff to deployment, I ship reliable front-end systems with clean architecture, accessibility, and analytics baked in.',
      stats: [
        { value: '50+', label: 'Sites & apps launched' },
        { value: '8', label: 'Design systems engineered' },
        { value: '99.9%', label: 'Uptime on recent launches' },
      ],
      focus: [
        'I build performant, maintainable sites with modern tooling, from design handoff to deployment.',
        'Front-end architecture in React/Next.js with component libraries mapped to design systems.',
        'CI/CD, performance budgets, and analytics instrumentation to keep releases predictable.',
      ],
      actions: [
        { label: 'See recent assignments', href: '#work', variant: 'primary' },
        { label: 'Get in touch', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'News / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Front-end development for a high-traffic news platform with TypeScript, RESTful APIs, and graph visualizations.',
        tags: ['React & Next.js', 'API integrations', 'Performance tuning'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
      {
        badge: 'Finance',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'Front-end delivery for multilingual platforms, dashboards, and campaign pages across 23 languages.',
        tags: ['Front-end build', 'Localization', 'Design-system mapping'],
        linkLabel: 'See project notes ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Accessibility-focused front-end for environmental reporting tools, interactive maps, and complex forms.',
        tags: ['Accessibility', 'Data-rich UI', 'Mapping & visualization'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Front-end architecture',
        description:
          'Set up scalable foundations with modern frameworks, linting, testing, and component libraries.',
        bullets: ['React, Next.js, Vite', 'TypeScript & testing', 'Design system implementation'],
      },
      {
        title: 'UI implementation',
        description:
          'Translate Figma into responsive, accessible interfaces that perform across devices.',
        bullets: ['Semantic HTML & ARIA', 'Performance budgets', 'Animations & micro-interactions'],
      },
      {
        title: 'Delivery & ops',
        description:
          'Own the release chain with CI/CD, hosting, monitoring, and analytics wired from day one.',
        bullets: ['CI/CD & hosting', 'Error monitoring', 'Analytics & A/B testing'],
      },
    ],
    testimonial: {
      quote:
        'Robust delivery pairs clean front-end engineering with thoughtful UX details that make releases feel polished.',
      name: 'Delivery mantra',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready to launch with confidence?',
      body:
        'Let us build and ship the front-end—from design handoff to production—complete with QA, analytics, and monitoring.',
      button: { label: 'Kick off a build', href: '#contact' },
    },
  },
];
let activePersona = personas[0];
const getRoot = () => document.documentElement;
const getThemeToggle = () => document.getElementById('themeToggle');

const setPersonaContext = (persona) => {
  const root = getRoot();
  root.setAttribute('data-persona', persona.slug);

  if (persona.palette) {
    root.style.setProperty('--accent', persona.palette.accent);
    root.style.setProperty('--accent-strong', persona.palette.accentStrong);
    root.style.setProperty('--accent-soft', persona.palette.accentSoft);
    root.style.setProperty('--accent-surface', persona.palette.accentSurface);
    root.style.setProperty('--accent-border', persona.palette.accentBorder);
  }
};

const getPersonaPanels = () =>
  document.querySelectorAll('.hero, [data-projects], [data-skills], [data-testimonial], .persona-cta');

const animatePersonaPanels = () => {
  const panels = getPersonaPanels();
  if (!panels.length) return;

  panels.forEach((panel) => {
    const shouldSkipHero = panel.classList.contains('hero') && !panel.classList.contains('hero--visible');
    if (shouldSkipHero) return;
    panel.classList.add('persona-panel');
    panel.classList.remove('persona-panel--active');
  });

  requestAnimationFrame(() => {
    panels.forEach((panel) => {
      const shouldSkipHero = panel.classList.contains('hero') && !panel.classList.contains('hero--visible');
      if (shouldSkipHero) return;
      // eslint-disable-next-line no-unused-expressions
      panel.offsetWidth;
      panel.classList.add('persona-panel--active');
    });
  });
};

const renderHero = (persona) => {
  const heroEyebrow = document.querySelector('[data-hero-eyebrow]');
  const heroPersonaTitle = document.querySelector('[data-hero-persona-title]');
  const heroPersonaIcon = document.querySelector('[data-hero-persona-icon]');
  const heroHeading = document.querySelector('[data-hero-heading]');
  const heroHighlight = document.querySelector('[data-hero-highlight]');
  const heroLead = document.querySelector('[data-hero-lead]');
  const heroActions = document.querySelector('[data-hero-actions]');
  const heroStats = document.querySelector('[data-hero-stats]');
  const heroPortrait = document.querySelector('[data-hero-portrait]');
  const focusList = document.querySelector('[data-focus-list]');

  if (
    !heroEyebrow ||
    !heroPersonaTitle ||
    !heroPersonaIcon ||
    !heroHeading ||
    !heroHighlight ||
    !heroLead ||
    !heroActions ||
    !heroStats ||
    !heroPortrait ||
    !focusList
  )
    return;

  const { heroCopy } = persona;
  heroEyebrow.textContent = heroCopy.eyebrow;
  heroPersonaTitle.textContent = persona.title;
  heroPersonaIcon.setAttribute('src', persona.icon);
  heroPersonaIcon.setAttribute('alt', persona.iconAlt);
  heroHeading.textContent = `${heroCopy.heading} `;
  heroHighlight.textContent = heroCopy.highlight;
  heroLead.textContent = heroCopy.lead;
  heroPortrait.setAttribute('src', heroCopy.portrait);

  heroActions.innerHTML = '';
  heroCopy.actions.forEach((action) => {
    const link = document.createElement('a');
    link.className = `btn ${action.variant === 'ghost' ? 'btn--ghost' : 'btn--primary'}`;
    link.href = action.href;
    link.textContent = action.label;
    heroActions.appendChild(link);
  });

  heroStats.innerHTML = '';
  heroCopy.stats.forEach((stat) => {
    const statItem = document.createElement('div');
    const dt = document.createElement('dt');
    dt.textContent = stat.value;
    const dd = document.createElement('dd');
    dd.textContent = stat.label;
    statItem.append(dt, dd);
    heroStats.appendChild(statItem);
  });

  focusList.innerHTML = '';
  heroCopy.focus.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    focusList.appendChild(li);
  });
};

const renderProjects = (projects) => {
  const projectsContainer = document.querySelector('[data-projects]');
  if (!projectsContainer) return;
  projectsContainer.innerHTML = '';

  projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'card project-card';

    const meta = document.createElement('div');
    meta.className = 'card__meta';
    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = project.badge;
    const time = document.createElement('time');
    time.dateTime = project.year;
    time.textContent = project.year;
    meta.append(pill, time);

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const tags = document.createElement('ul');
    project.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      tags.appendChild(li);
    });

    const link = document.createElement('a');
    link.href = project.href;
    link.className = 'card__link';
    link.textContent = project.linkLabel;

    article.append(meta, title, description, tags, link);
    projectsContainer.appendChild(article);
  });
};

const renderSkills = (skills) => {
  const skillsContainer = document.querySelector('[data-skills]');
  if (!skillsContainer) return;
  skillsContainer.innerHTML = '';

  skills.forEach((skill) => {
    const article = document.createElement('article');
    article.className = 'card service-card';

    const title = document.createElement('h3');
    title.textContent = skill.title;

    const description = document.createElement('p');
    description.textContent = skill.description;

    const bullets = document.createElement('ul');
    skill.bullets.forEach((bullet) => {
      const li = document.createElement('li');
      li.textContent = bullet;
      bullets.appendChild(li);
    });

    article.append(title, description, bullets);
    skillsContainer.appendChild(article);
  });
};

const renderTestimonial = (testimonial) => {
  const testimonialContainer = document.querySelector('[data-testimonial]');
  if (!testimonialContainer) return;
  testimonialContainer.innerHTML = '';

  const figure = document.createElement('figure');
  figure.className = 'card quote';

  const quote = document.createElement('blockquote');
  quote.textContent = testimonial.quote;

  const figcaption = document.createElement('figcaption');
  const strong = document.createElement('strong');
  strong.textContent = testimonial.name;
  figcaption.append(strong, document.createTextNode(`, ${testimonial.title}`));

  figure.append(quote, figcaption);
  testimonialContainer.appendChild(figure);
};

const renderCta = (cta) => {
  const ctaHeading = document.querySelector('[data-cta-heading]');
  const ctaBody = document.querySelector('[data-cta-body]');
  const ctaLink = document.querySelector('[data-cta-link]');
  const ctaEyebrow = document.querySelector('[data-cta-eyebrow]');

  if (!ctaHeading || !ctaBody || !ctaLink || !ctaEyebrow) return;

  ctaEyebrow.textContent = cta.eyebrow;
  ctaHeading.textContent = cta.heading;
  ctaBody.textContent = cta.body;
  ctaLink.textContent = cta.button.label;
  ctaLink.href = cta.button.href;
};

const renderPersonaContent = (persona) => {
  setPersonaContext(persona);
  renderHero(persona);
  renderProjects(persona.projects);
  renderSkills(persona.skills);
  renderTestimonial(persona.testimonial);
  renderCta(persona.cta);
  animatePersonaPanels();
};

const renderPersonaTabs = (container) => {
  container.innerHTML = '';
  personas.forEach((persona) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'persona-tab';
    button.dataset.personaOption = persona.slug;
    button.setAttribute('role', 'tab');
    const icon = document.createElement('img');
    icon.src = persona.icon;
    icon.alt = persona.iconAlt;
    icon.className = 'persona-tab__icon';

    const label = document.createElement('span');
    label.className = 'persona-tab__label';
    label.textContent = persona.title;

    button.append(icon, label);
    container.appendChild(button);
  });
};

const setSelectedPersonaTab = (container, slug) => {
  container
    .querySelectorAll('[data-persona-option]')
    .forEach((tab) => tab.setAttribute('aria-selected', tab.dataset.personaOption === slug ? 'true' : 'false'));
};

const getPersonaBySlug = (slug) => personas.find((persona) => persona.slug === slug);

export const initPersonas = () => {
  const switcher = document.querySelector('[data-persona-switcher]');
  if (!switcher) return;

  const setPersona = (slug) => {
    const candidate = getPersonaBySlug(slug);
    if (!candidate || candidate.slug === activePersona.slug) return;
    activePersona = candidate;
    renderPersonaContent(candidate);
    setSelectedPersonaTab(switcher, candidate.slug);
  };

  switcher.addEventListener('click', (event) => {
    const target = event.target.closest('[data-persona-option]');
    if (!target) return;
    setPersona(target.dataset.personaOption);
  });

  renderPersonaTabs(switcher);
  setSelectedPersonaTab(switcher, activePersona.slug);
  renderPersonaContent(activePersona);
};

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

export const initApp = () => {
  initTheme();
  initPersonas();
  initBackToTop();
  initNavToggle();
  initHeroObserver();
  initYear();
  initThemeToggle();
};

document.addEventListener('DOMContentLoaded', initApp);


