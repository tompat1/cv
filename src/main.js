import './styles.css';

const THEME_KEY = 'tr-theme';
const personas = [
  {
    title: 'Product Designer',
    slug: 'product-designer',
    accentColor: '#7785e3',
    heroCopy: {
      eyebrow: 'Currently open for new projects (Jan 2026)',
      heading: 'Building human-centered products with',
      highlight: 'clarity, craft, and care.',
      lead:
        "I help SaaS teams translate complex challenges into elegant journeys. Over the last 8+ years, I've shipped product experiences used by millions at tech startups, fintech scale-ups, and design-led agencies.",
      stats: [
        { value: '10+', label: 'Products launched end-to-end' },
        { value: '60%', label: 'Avg. uplift in key KPIs shipped' },
        { value: '8 yrs', label: 'Hybrid product & design experience' },
      ],
      focus: [
        'Product strategy & discovery',
        'Design systems & prototyping',
        'Accessible frontend engineering',
      ],
      actions: [
        { label: 'See selected work', href: '#work', variant: 'primary' },
        { label: 'Book intro call', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'Fintech',
        year: '2024',
        title: 'FlowPay Intelligence',
        description:
          'Led discovery to redesign the payments insights suite, improving merchant retention by 18% through clearer forecasting experiences.',
        tags: ['Product workshops', 'Design system foundations', 'React prototype build'],
        linkLabel: 'Read case study ->',
        href: '#',
      },
      {
        badge: 'Climate SaaS',
        year: '2023',
        title: 'Circulate Analytics',
        description:
          'Shipped a scenario planning tool that allowed sustainability leads to model impact in minutes, cutting reporting time by 40%.',
        tags: ['Journey mapping', 'High fidelity UI', 'Frontend handoff'],
        linkLabel: 'Read case study ->',
        href: '#',
      },
      {
        badge: 'Health Tech',
        year: '2022',
        title: 'Northwind Care',
        description:
          'Designed the clinician hub experience and built the responsive UI kit powering twelve cross-platform apps.',
        tags: ['Experience vision', 'Design ops', 'Component engineering'],
        linkLabel: 'Read case study ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Product Discovery',
        description:
          'Align business outcomes with user needs through co-creation workshops, field research, and strategy roadmaps.',
        bullets: ['Problem framing', 'Jobs-to-be-done studies', 'Opportunity solution trees'],
      },
      {
        title: 'Design Systems',
        description:
          'Scale a cohesive visual language with token-driven components, documentation, and governance practices.',
        bullets: ['Multi-brand systems', 'Accessibility audits', 'Figma <> code parity'],
      },
      {
        title: 'Product Execution',
        description:
          'Pair with engineering to deliver polished experiences - rapid prototyping, implementation support, and QA.',
        bullets: ['Interactive prototypes', 'Design QA', 'Frontend engineering'],
      },
    ],
    testimonial: {
      quote:
        "Thomas has a rare ability to move seamlessly from fuzzy problem spaces to shippable solutions. He's our go-to for 0->1 product bets.",
      name: 'Eva Magnusson',
      title: 'VP Product @ FlowPay',
    },
    cta: {
      eyebrow: 'Next step',
      heading: "Let's shape the next release.",
      body:
        'Send a note to hello@thomasrynell.com or book a quick chemistry call to explore your next release.',
      button: { label: 'Start a project', href: 'mailto:hello@thomasrynell.com' },
    },
  },
  {
    title: 'Design Systems Partner',
    slug: 'design-systems',
    accentColor: '#f97316',
    heroCopy: {
      eyebrow: 'Available for system modernization',
      heading: 'Scaling multi-brand experiences with',
      highlight: 'design ops rigor.',
      lead:
        'I audit, architect, and operationalize design systems that keep teams fast and consistent. From tokens to governance, I align designers and engineers under one language.',
      stats: [
        { value: '5', label: 'Systems rolled out across platforms' },
        { value: '30%', label: 'Faster design-to-dev handoffs' },
        { value: '12 squads', label: 'Supported with playbooks' },
      ],
      focus: ['System audits & KPIs', 'Token-driven libraries', 'Documentation & enablement'],
      actions: [
        { label: 'Review my playbook', href: '#services', variant: 'primary' },
        { label: 'Schedule a teardown', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'B2B SaaS',
        year: '2024',
        title: 'NovaOS Design Language',
        description:
          'Unified three legacy UI kits into a single token-driven system, cutting UI defects by 22% and accelerating new feature launches.',
        tags: ['Token architecture', 'Design ops', 'Component governance'],
        linkLabel: 'See rollout notes ->',
        href: '#',
      },
      {
        badge: 'E-commerce',
        year: '2023',
        title: 'Atlas Marketplace System',
        description:
          'Delivered a multi-brand component library with themeable primitives, enabling 8 regional storefronts to ship aligned UX in 6 weeks.',
        tags: ['Multi-brand theming', 'Accessibility reviews', 'Storybook delivery'],
        linkLabel: 'View component spec ->',
        href: '#',
      },
      {
        badge: 'FinOps',
        year: '2022',
        title: 'LedgerOne UI Kit',
        description:
          'Created a resilient design system for complex data tables and workflows, improving designer onboarding satisfaction to 94%.',
        tags: ['Design tokens', 'Workflow patterns', 'Design QA'],
        linkLabel: 'Read migration plan ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Audits & KPIs',
        description:
          'Assess current systems, map gaps, and define success metrics tied to product velocity and quality.',
        bullets: ['Inventory & gap analysis', 'Scorecards & metrics', 'Executive readouts'],
      },
      {
        title: 'Architecture',
        description:
          'Set up tokens, foundations, and semantic naming that scale to theming and multiple brands.',
        bullets: ['Token maps', 'Accessibility baselines', 'CI/CD for design assets'],
      },
      {
        title: 'Enablement',
        description:
          'Document, coach, and steward governance so designers and engineers ship consistent UI with confidence.',
        bullets: ['Playbooks & docs', 'Pairing sessions', 'Component stewardship'],
      },
    ],
    testimonial: {
      quote:
        'Thomas made our system real for engineers. The token strategy and governance rituals he set up keep our teams aligned release after release.',
      name: 'Hugo Ferreira',
      title: 'CTO @ Circulate',
    },
    cta: {
      eyebrow: 'Systems support',
      heading: 'Need a system steward?',
      body:
        'Let’s run an audit or pair on your next release so we can keep designers and engineers shipping without friction.',
      button: { label: 'Book a systems consult', href: '#contact' },
    },
  },
  {
    title: 'UX Engineer',
    slug: 'ux-engineer',
    accentColor: '#22c55e',
    heroCopy: {
      eyebrow: 'Prototype partner for product teams',
      heading: 'Shipping polished interactions with',
      highlight: 'production-ready code.',
      lead:
        'I translate Figma into performant frontends, validating ideas quickly with real data and production-minded components.',
      stats: [
        { value: '12', label: 'Design-to-code libraries delivered' },
        { value: '4.9/5', label: 'PM partner satisfaction' },
        { value: '2x', label: 'Faster validation cycles' },
      ],
      focus: ['Rapid prototyping', 'Design-engineering parity', 'Inclusive UI patterns'],
      actions: [
        { label: 'View build samples', href: '#work', variant: 'primary' },
        { label: 'Pair on a spike', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'AI SaaS',
        year: '2024',
        title: 'SprintKit Workbench',
        description:
          'Built interactive prototypes backed by mock APIs to validate AI-assisted workflows, reducing engineering lift by 50% pre-MVP.',
        tags: ['React prototypes', 'API stubbing', 'Usability testing'],
        linkLabel: 'See prototype notes ->',
        href: '#',
      },
      {
        badge: 'Mobility',
        year: '2023',
        title: 'RouteWise Dispatch',
        description:
          'Engineered complex map and scheduling interfaces with accessibility baked in, unlocking enterprise contracts.',
        tags: ['Accessible UI', 'Maps & data viz', 'Design QA'],
        linkLabel: 'View engineering doc ->',
        href: '#',
      },
      {
        badge: 'DevTools',
        year: '2022',
        title: 'Pulse Component Library',
        description:
          'Partnered with platform teams to create typed React components and Storybook docs that ship exactly like the Figma files.',
        tags: ['Typed components', 'Storybook docs', 'CI checks'],
        linkLabel: 'Read build log ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Prototype & Validate',
        description:
          'Stand up experiments with real interactions and data to derisk bets before sprinting.',
        bullets: ['Interactive flows', 'Microcopy in code', 'Remote usability tests'],
      },
      {
        title: 'Engineer UI Kits',
        description:
          'Bridge design systems to code with typed, accessible components and documentation.',
        bullets: ['Design token wiring', 'A11y-first components', 'Storybook workflows'],
      },
      {
        title: 'Ship with Teams',
        description:
          'Pair with engineering to integrate builds, QA visual polish, and keep parity with design.',
        bullets: ['PR reviews', 'QA checklists', 'Launch support'],
      },
    ],
    testimonial: {
      quote:
        'His prototypes feel like the final product. Engineering loves inheriting his work because it is already production-minded.',
      name: 'Mara Lindholm',
      title: 'VP Engineering @ SprintKit',
    },
    cta: {
      eyebrow: 'Hands-on help',
      heading: 'Need a build partner for your next sprint?',
      body:
        'Bring me into your two-week spike and we will leave with validated flows, code-ready components, and a confident handoff.',
      button: { label: 'Book a pairing slot', href: '#contact' },
    },
  },
];
let activePersona = personas[0];
const getRoot = () => document.documentElement;
const getThemeToggle = () => document.getElementById('themeToggle');

const setAccentColor = (accentColor) => {
  getRoot().style.setProperty('--persona-accent', accentColor);
};

const renderHero = (persona) => {
  const heroEyebrow = document.querySelector('[data-hero-eyebrow]');
  const heroHeading = document.querySelector('[data-hero-heading]');
  const heroHighlight = document.querySelector('[data-hero-highlight]');
  const heroLead = document.querySelector('[data-hero-lead]');
  const heroActions = document.querySelector('[data-hero-actions]');
  const heroStats = document.querySelector('[data-hero-stats]');
  const heroPortrait = document.querySelector('[data-hero-portrait]');
  const focusList = document.querySelector('[data-focus-list]');

  if (
    !heroEyebrow ||
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
  setAccentColor(persona.accentColor);
  renderHero(persona);
  renderProjects(persona.projects);
  renderSkills(persona.skills);
  renderTestimonial(persona.testimonial);
  renderCta(persona.cta);
};

const renderPersonaTabs = (container) => {
  container.innerHTML = '';
  personas.forEach((persona) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'persona-tab';
    button.dataset.personaOption = persona.slug;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', persona.slug === activePersona.slug ? 'true' : 'false');
    button.textContent = persona.title;
    container.appendChild(button);
  });
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
    renderPersonaTabs(switcher);
  };

  switcher.addEventListener('click', (event) => {
    const target = event.target.closest('[data-persona-option]');
    if (!target) return;
    setPersona(target.dataset.personaOption);
  });

  renderPersonaTabs(switcher);
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


