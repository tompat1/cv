import './styles.css';

const THEME_KEY = 'tr-theme';
const personas = [
  {
    title: 'Front-end, UX & Digital Designer',
    slug: 'frontend-ux-designer',
    accentColor: '#e15b9e',
    icon: '/assets/product-designer.svg',
    iconAlt: 'Geometric icon for a digital designer',
    heroCopy: {
      eyebrow: 'Consultant & designer for web and digital products',
      heading: 'Crafting experiences across',
      highlight: 'front-end, UX, and visual design.',
      lead:
        'I have been a consultant for 30+ years within IT, Graphic & Digital Design, and PM/Marketing—delivering creative, technical, and strategic solutions to diverse stakeholders.',
      stats: [
        { value: '30+ yrs', label: 'Consulting across IT & design' },
        { value: '12 yrs', label: 'Digital product & UX focus' },
        { value: '4', label: 'Key roles: Front-end / UX / Digital & Graphic Design' },
      ],
      focus: ['HTML / CSS / JS', 'Figma & Adobe XD', 'Illustrator & Photoshop'],
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
          'Front-end development and redesign for a digital news platform with TypeScript, RESTful APIs, and graph visualizations.',
        tags: ['React & Next.js', 'Figma prototypes', 'API integrations'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
      {
        badge: 'Finance',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'UX/design direction and front-end delivery for multilingual platforms, dashboards, and campaign pages in 23 languages.',
        tags: ['UX/UI design', 'Front-end build', 'Stakeholder collaboration'],
        linkLabel: 'See project notes ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'UX/design direction and front-end work for environmental reporting tools, interactive maps, and complex forms.',
        tags: ['Design systems', 'Accessibility', 'Data-driven UI'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
      {
        badge: 'Banking',
        year: '2014',
        title: 'Bankgirocentralen',
        description:
          'Front-end development, UX, and visual design for online bank applications and dashboards across multiple lines of business.',
        tags: ['Responsive UI', 'Design leadership', 'Agile delivery'],
        linkLabel: 'Engagement highlights ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Front-end Development',
        description:
          'Building responsive, accessible interfaces with modern frameworks and clean HTML, CSS, and JavaScript.',
        bullets: ['React / Next.js / MVC', 'TypeScript & API integrations', 'Performance & accessibility'],
      },
      {
        title: 'UX & Design Direction',
        description:
          'Leading discovery, prototyping, and interface design that connects user goals to business outcomes.',
        bullets: ['Wireframes & Figma prototypes', 'Design systems & UI kits', 'Usability testing & iteration'],
      },
      {
        title: 'Digital & Graphic Design',
        description:
          'Visual design across web, editorial, and marketing with a foundation in Adobe CC.',
        bullets: ['Illustrator & Photoshop', 'Brand & layout design', 'Motion & visual polish'],
      },
    ],
    testimonial: {
      quote:
        'Combining the demands and possibilities of digital design, front-end, Scrum/PM, and design—coupled with my sensibilities as a graphic designer.',
      name: 'Personal motto',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready to collaborate on your next release?',
      body:
        'Bring me in for front-end, UX, or design leadership. We will map the goals, shape the experience, and deliver a polished build together.',
      button: { label: 'Start a project conversation', href: '#contact' },
    },
  },
];
let activePersona = personas[0];
const getRoot = () => document.documentElement;
const getThemeToggle = () => document.getElementById('themeToggle');

const setPersonaContext = (persona) => {
  const root = getRoot();
  root.setAttribute('data-persona', persona.slug);
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


