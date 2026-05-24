import DOMPurify from 'dompurify';
import './styles.css';

const THEME_KEY = 'tr-theme';
const LANGUAGE_KEY = 'tr-language';
const DEFAULT_LOCALES = ['en', 'sv'];

const cloneDeep = (value) => structuredClone(value);

const withBase = (path = '') => {
  const normalized = path.replace(/^\/+/, '');
  if (!normalized) return normalized;
  if (/^(https?:)?\/\//i.test(normalized)) return normalized;
  return `${import.meta.env.BASE_URL}${normalized}`;
};

const stripBase = (path = '') => {
  if (!path) return path;
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  if (normalizedBase === '/') return path.replace(/^\/+/, '');
  return path.startsWith(normalizedBase) ? path.slice(normalizedBase.length) : path;
};

let locales = {};
let links = {};
let copy = {};
let personasByLocale = {};

const loadLocaleFile = async (code) => {
  const response = await fetch(withBase(`locales/${code}.json`));
  if (!response.ok) throw new Error(`Failed to load locale file for ${code}`);
  return response.json();
};

const applyLocalePayload = (code, payload = {}) => {
  const { label, personas = [], copy: localeCopy = {}, links: localeLinks = {} } = payload;
  const resolvedPersonas = personas.map((persona) => {
    const resolvedPersona = { ...persona };
    if (persona.icon) {
      resolvedPersona.icon = withBase(persona.icon);
    }
    if (persona.heroCopy?.portrait) {
      resolvedPersona.heroCopy = {
        ...persona.heroCopy,
        portrait: withBase(persona.heroCopy.portrait),
      };
    }
    return resolvedPersona;
  });

  copy[code] = cloneDeep(localeCopy);
  personasByLocale[code] = cloneDeep(resolvedPersonas);
  links[code] = cloneDeep(localeLinks || links.en || {});
  locales = {
    ...locales,
    [code]: {
      label: label || code.toUpperCase(),
      personas: personasByLocale[code],
      copy: copy[code],
    },
  };
};

const loadInitialLocales = async (codes = DEFAULT_LOCALES) => {
  const results = await Promise.allSettled(codes.map((code) => loadLocaleFile(code)));
  results.forEach((result, index) => {
    const code = codes[index];
    if (result.status === 'fulfilled') {
      applyLocalePayload(code, result.value);
    }
  });

  if (!Object.keys(locales).length) {
    applyLocalePayload(DEFAULT_LOCALES[0], { label: 'English', personas: [], copy: {}, links: {} });
  }
};

const getInitialLanguage = () => {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(LANGUAGE_KEY) : null;
  if (stored && locales[stored]) return stored;
  const docLang = typeof document !== 'undefined' ? document.documentElement.lang : null;
  if (docLang && locales[docLang]) return docLang;
  return DEFAULT_LOCALES.find((code) => locales[code]) || Object.keys(locales)[0] || 'en';
};

let activeLanguage = DEFAULT_LOCALES[0];
let translationManagerLocale = activeLanguage;
const getLocale = () => locales[activeLanguage] || {};
const getPersonas = () => personasByLocale[activeLanguage] || [];
let activePersona = getPersonas()[0];

const flattenTranslations = (value, path = []) => {
  if (value === null || value === undefined) return [];
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return [{ key: path.join('.'), value: String(value) }];
  }

  if (Array.isArray(value)) {
    return value.flatMap((entry, index) => flattenTranslations(entry, [...path, index]));
  }

  if (typeof value === 'object') {
    return Object.entries(value).flatMap(([childKey, childValue]) =>
      flattenTranslations(childValue, [...path, childKey])
    );
  }

  return [];
};

const flattenLinks = (value, path = []) => {
  if (!value) return [];
  if (typeof value === 'string') {
    return [{ key: path.join('.'), value }];
  }

  if (Array.isArray(value)) {
    return value.flatMap((entry, index) => flattenLinks(entry, [...path, index]));
  }

  if (typeof value === 'object') {
    return Object.entries(value).flatMap(([childKey, childValue]) =>
      flattenLinks(childValue, [...path, childKey])
    );
  }

  return [];
};

const applyValueAtPath = (target, path, nextValue) => {
  let cursor = target;
  path.forEach((segment, index) => {
    const isLast = index === path.length - 1;
    const numericKey = Number.isInteger(Number(segment));
    const key = numericKey ? Number(segment) : segment;

    if (isLast) {
      cursor[key] = nextValue;
      return;
    }

    if (!cursor[key] || typeof cursor[key] !== 'object') {
      cursor[key] = numericKey ? [] : {};
    }

    cursor = cursor[key];
  });
};

const getValueAtPath = (target, path) => {
  if (!target || !path || !path.length) return undefined;

  return path.reduce((cursor, segment) => {
    if (cursor === null || cursor === undefined) return undefined;
    const numericKey = Number.isInteger(Number(segment));
    const key = numericKey ? Number(segment) : segment;
    return cursor[key];
  }, target);
};

const getRoot = () => document.documentElement;
const getThemeToggle = () => document.getElementById('themeToggle');
const getLanguagePicker = () => document.getElementById('languagePicker');
const getPersonaSwitcher = () => document.querySelector('[data-persona-switcher]');
const getTranslationManager = () => document.querySelector('[data-translation-manager]');
const linkDrafts = {};

const getPendingLinkEdits = (localeKey) => {
  if (!linkDrafts[localeKey]) {
    linkDrafts[localeKey] = {};
  }
  return linkDrafts[localeKey];
};

const clearPendingLinkEdits = (localeKey) => {
  linkDrafts[localeKey] = {};
};

const hasPendingLinkEdits = (localeKey) =>
  Boolean(localeKey && Object.keys(getPendingLinkEdits(localeKey)).length);

const isLocalizationRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.endsWith('/localization');
};

const renderLanguagePickerOptions = () => {
  const picker = getLanguagePicker();
  if (!picker) return;

  const current = picker.value;
  picker.innerHTML = '';

  Object.entries(locales).forEach(([key, locale]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key.toUpperCase();
    option.setAttribute('data-label', locale.label);
    picker.appendChild(option);
  });

  if (locales[current]) {
    picker.value = current;
  }
};

const renderTranslationLocaleOptions = () => {
  const manager = getTranslationManager();
  if (!manager) return;
  const picker = manager.querySelector('[data-translation-locale]');
  if (!picker) return;

  const current = picker.value || translationManagerLocale;
  picker.innerHTML = '';

  Object.keys(locales).forEach((code) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = code;
    picker.appendChild(option);
  });

  if (locales[current]) {
    picker.value = current;
    translationManagerLocale = current;
  } else if (picker.value) {
    translationManagerLocale = picker.value;
  }
};

const buildTranslationsForLocale = (localeKey) => {
  const localeCopy = copy[localeKey];
  if (!localeCopy) return [];
  return flattenTranslations(localeCopy);
};

const renderTranslationList = (localeKey) => {
  const manager = getTranslationManager();
  if (!manager) return;
  const list = manager.querySelector('[data-translation-list]');
  const count = manager.querySelector('[data-translation-count]');
  if (!list) return;

  const entries = buildTranslationsForLocale(localeKey);
  list.innerHTML = '';

  const fragment = document.createDocumentFragment();

  entries.forEach((entry) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'translation-item';

    const keyEl = document.createElement('div');
    keyEl.className = 'translation-item__key';
    keyEl.textContent = entry.key;

    const textarea = document.createElement('textarea');
    textarea.dataset.translationKey = entry.key;
    textarea.value = entry.value;

    wrapper.append(keyEl, textarea);
    fragment.appendChild(wrapper);
  });

  list.appendChild(fragment);

  if (count) {
    count.textContent = `${entries.length} keys`;
  }
};

const getLinksForLocale = (localeKey = activeLanguage) => links[localeKey] || links.en || links.sv || {};

const getLinkValueForLocale = (keyPath, localeKey = activeLanguage) => {
  const pathSegments = keyPath.split('.').filter(Boolean);
  const value = getValueAtPath(getLinksForLocale(localeKey), pathSegments);
  return typeof value === 'string' ? value : '';
};

const setPendingLinkValue = (localeKey, keyPath, value) => {
  const pending = getPendingLinkEdits(localeKey);
  const baseValue = getLinkValueForLocale(keyPath, localeKey);
  const normalizedValue = value.trim();

  if (normalizedValue === baseValue) {
    delete pending[keyPath];
    return false;
  }

  pending[keyPath] = normalizedValue;
  return true;
};

const updateLinkSaveButtonState = (manager, localeKey) => {
  const saveButton = manager.querySelector('[data-save-links]');
  if (!saveButton) return;
  const hasPending = hasPendingLinkEdits(localeKey);
  saveButton.disabled = !hasPending;
  saveButton.setAttribute('aria-disabled', hasPending ? 'false' : 'true');
};

const renderLinkList = (localeKey) => {
  const manager = getTranslationManager();
  if (!manager) return;
  const list = manager.querySelector('[data-link-list]');
  const count = manager.querySelector('[data-link-count]');
  if (!list) return;

  const entries = flattenLinks(getLinksForLocale(localeKey));
  const pending = getPendingLinkEdits(localeKey);
  list.innerHTML = '';

  const fragment = document.createDocumentFragment();

  entries.forEach((entry) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'translation-item';

    const keyEl = document.createElement('div');
    keyEl.className = 'translation-item__key';
    keyEl.textContent = entry.key;

    const input = document.createElement('input');
    input.dataset.linkKey = entry.key;
    input.type = 'url';
    input.value = pending[entry.key] ?? entry.value;
    input.placeholder = 'Enter link or file path';

    if (pending[entry.key]) {
      wrapper.classList.add('translation-item--dirty');
    }

    wrapper.append(keyEl, input);
    fragment.appendChild(wrapper);
  });

  list.appendChild(fragment);

  if (count) {
    count.textContent = `${entries.length} links`;
  }

  updateLinkSaveButtonState(manager, localeKey);
};

const applyLinks = (localeKey = activeLanguage) => {
  const localeLinks = getLinksForLocale(localeKey);

  const navCta = document.querySelector('[data-link-key="navCta"]');
  if (navCta && localeLinks.navCta) navCta.setAttribute('href', localeLinks.navCta);

  const workCta = document.querySelector('[data-link-key="workCta"]');
  if (workCta && localeLinks.workCta) workCta.setAttribute('href', localeLinks.workCta);

  const experienceCta = document.querySelector('[data-link-key="experienceCta"]');
  if (experienceCta && localeLinks.experienceCta) experienceCta.setAttribute('href', localeLinks.experienceCta);

  const footerCta = document.querySelector('[data-link-key="footerCta"]');
  if (footerCta && localeLinks.footerCta) footerCta.setAttribute('href', localeLinks.footerCta);

  const footerEmail = document.querySelector('[data-link-key="contactEmail"]');
  if (footerEmail && localeLinks.contactEmail) {
    footerEmail.setAttribute('href', localeLinks.contactEmail);
    footerEmail.textContent = localeLinks.contactEmail.replace('mailto:', '');
  }

  const footerLinks = document.querySelectorAll('[data-footer-link]');
  footerLinks.forEach((link) => {
    const key = link.dataset.footerLink;
    const nextHref = key && localeLinks.socials ? localeLinks.socials[key] : null;
    if (nextHref) {
      link.setAttribute('href', nextHref);
      link.setAttribute('rel', 'noreferrer');
      link.setAttribute('target', '_blank');
    }
  });
};

const addTranslationValue = (localeKey, keyPath, value) => {
  if (!copy[localeKey]) return;
  const segments = keyPath.split('.').filter(Boolean);
  if (!segments.length) return;
  applyValueAtPath(copy[localeKey], segments, value);
};

const setLinkValue = (localeKey, keyPath, value) => {
  if (!links[localeKey]) {
    links[localeKey] = cloneDeep(links[activeLanguage] || links.en || links.sv || {});
  }
  const segments = keyPath.split('.').filter(Boolean);
  if (!segments.length) return;
  applyValueAtPath(links[localeKey], segments, value);
};

const addLocale = (code, label) => {
  if (!code) return;
  const normalized = code.trim();
  if (locales[normalized]) return;
  const baseLocale = locales[activeLanguage] ? activeLanguage : DEFAULT_LOCALES[0];
  copy[normalized] = cloneDeep(copy[baseLocale] || {});
  links[normalized] = cloneDeep(links[baseLocale] || {});
  personasByLocale[normalized] = cloneDeep(personasByLocale[baseLocale] || []);
  locales = {
    ...locales,
    [normalized]: {
      label: label || normalized.toUpperCase(),
      personas: personasByLocale[normalized],
      copy: copy[normalized],
    },
  };
  renderLanguagePickerOptions();
  renderTranslationLocaleOptions();
};

const buildLocalePayload = (localeKey) => {
  if (!locales[localeKey]) return null;
  return {
    code: localeKey,
    label: locales[localeKey].label,
    personas: (personasByLocale[localeKey] || []).map((persona) => ({
      ...persona,
      icon: stripBase(persona.icon),
      heroCopy: persona.heroCopy?.portrait
        ? { ...persona.heroCopy, portrait: stripBase(persona.heroCopy.portrait) }
        : persona.heroCopy,
    })),
    copy: copy[localeKey] || {},
    links: links[localeKey] || {},
  };
};

const downloadJson = (filename, data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const linkEl = document.createElement('a');
  linkEl.href = URL.createObjectURL(blob);
  linkEl.download = filename;
  document.body.appendChild(linkEl);
  linkEl.click();
  URL.revokeObjectURL(linkEl.href);
  linkEl.remove();
};

const exportLocale = (localeKey) => {
  const payload = buildLocalePayload(localeKey);
  if (!payload) return;
  downloadJson(`locale-${localeKey}.json`, payload);
};

const importLocaleFile = async (file, fallbackCode) => {
  if (!file) return null;

  const contents = await file.text();
  const payload = JSON.parse(contents);
  const codeFromPayload = payload.code || payload.locale || '';
  const derivedCode = codeFromPayload || fallbackCode || file.name.replace(/\.json$/i, '');
  if (!derivedCode) return null;

  applyLocalePayload(derivedCode, payload);
  translationManagerLocale = derivedCode;
  renderLanguagePickerOptions();
  renderTranslationLocaleOptions();
  renderTranslationList(derivedCode);
  renderLinkList(derivedCode);
  if (derivedCode === activeLanguage) {
    applyLanguage();
  }

  return derivedCode;
};

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
    // Read phase
    panels.forEach((panel) => {
      const shouldSkipHero = panel.classList.contains('hero') && !panel.classList.contains('hero--visible');
      if (shouldSkipHero) return;
      void panel.offsetWidth;
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

let staticCopyCache = null;

const renderStaticCopy = () => {
  const localeCopy = getLocale().copy;
  if (!localeCopy) return;

  if (!staticCopyCache || (staticCopyCache.personaLabel && !staticCopyCache.personaLabel.isConnected)) {
    staticCopyCache = {
      personaLabel: document.querySelector('[data-persona-switcher-label]'),
      navLinks: document.querySelectorAll('[data-nav-link]'),
      navCta: document.querySelector('[data-nav-cta]'),
      workEyebrow: document.querySelector('[data-work-eyebrow]'),
      workHeading: document.querySelector('[data-work-heading]'),
      workCta: document.querySelector('[data-work-cta]'),
      servicesEyebrow: document.querySelector('[data-services-eyebrow]'),
      servicesHeading: document.querySelector('[data-services-heading]'),
      servicesSummary: document.querySelector('[data-services-summary]'),
      experienceEyebrow: document.querySelector('[data-experience-eyebrow]'),
      experienceHeading: document.querySelector('[data-experience-heading]'),
      experienceCta: document.querySelector('[data-experience-cta]'),
      timelineArticles: document.querySelectorAll('[data-timeline-index]'),
      testimonialsEyebrow: document.querySelector('[data-testimonials-eyebrow]'),
      testimonialsHeading: document.querySelector('[data-testimonials-heading]'),
      footerHeading: document.querySelector('[data-footer-heading]'),
      footerBody: document.querySelector('[data-footer-body]'),
      footerCta: document.querySelector('[data-footer-cta]'),
      footerLinks: document.querySelectorAll('[data-footer-link]'),
      backToTop: document.querySelector('[data-back-to-top]')
    };

    staticCopyCache.timelineArticlesData = Array.from(staticCopyCache.timelineArticles).map(article => ({
      article,
      index: Number(article.dataset.timelineIndex),
      heading: article.querySelector('[data-timeline-heading]'),
      meta: article.querySelector('[data-timeline-meta]'),
      body: article.querySelector('[data-timeline-body]')
    }));
  }

  const cache = staticCopyCache;

  if (cache.personaLabel && localeCopy.personaSwitcher !== undefined) cache.personaLabel.textContent = localeCopy.personaSwitcher;

  if (cache.navLinks.length && localeCopy.nav?.links) {
    localeCopy.nav.links.forEach((label, index) => {
      if (cache.navLinks[index]) cache.navLinks[index].textContent = label;
    });
  }

  if (cache.navCta && localeCopy.nav?.cta !== undefined) cache.navCta.textContent = localeCopy.nav.cta;

  if (cache.workEyebrow && localeCopy.work?.eyebrow !== undefined) cache.workEyebrow.textContent = localeCopy.work.eyebrow;
  if (cache.workHeading && localeCopy.work?.heading !== undefined) cache.workHeading.textContent = localeCopy.work.heading;
  if (cache.workCta && localeCopy.work?.cta !== undefined) cache.workCta.textContent = localeCopy.work.cta;

  if (cache.servicesEyebrow && localeCopy.services?.eyebrow !== undefined) cache.servicesEyebrow.textContent = localeCopy.services.eyebrow;
  if (cache.servicesHeading && localeCopy.services?.heading !== undefined) cache.servicesHeading.textContent = localeCopy.services.heading;
  if (cache.servicesSummary && localeCopy.services?.summary !== undefined) cache.servicesSummary.textContent = localeCopy.services.summary;

  if (cache.experienceEyebrow && localeCopy.experience?.eyebrow !== undefined) cache.experienceEyebrow.textContent = localeCopy.experience.eyebrow;
  if (cache.experienceHeading && localeCopy.experience?.heading !== undefined) cache.experienceHeading.textContent = localeCopy.experience.heading;
  if (cache.experienceCta && localeCopy.experience?.cta !== undefined) cache.experienceCta.textContent = localeCopy.experience.cta;

  if (localeCopy.experience?.timeline) {
    cache.timelineArticlesData.forEach((data) => {
      const entry = localeCopy.experience.timeline[data.index];
      if (!entry) return;
      if (data.heading && entry.heading !== undefined) data.heading.textContent = entry.heading;
      if (data.meta && entry.meta !== undefined) data.meta.textContent = entry.meta;
      if (data.body && entry.body !== undefined) data.body.textContent = entry.body;
    });
  }

  if (cache.testimonialsEyebrow && localeCopy.testimonials?.eyebrow !== undefined) cache.testimonialsEyebrow.textContent = localeCopy.testimonials.eyebrow;
  if (cache.testimonialsHeading && localeCopy.testimonials?.heading !== undefined) cache.testimonialsHeading.textContent = localeCopy.testimonials.heading;

  if (cache.footerHeading && localeCopy.footer?.heading !== undefined) cache.footerHeading.textContent = localeCopy.footer.heading;
  if (cache.footerBody && localeCopy.footer?.body !== undefined) cache.footerBody.innerHTML = DOMPurify.sanitize(localeCopy.footer.body);
  if (cache.footerCta && localeCopy.footer?.cta !== undefined) cache.footerCta.textContent = localeCopy.footer.cta;

  if (localeCopy.footer?.socials) {
    cache.footerLinks.forEach((link) => {
      const key = link.dataset.footerLink;
      if (key && localeCopy.footer.socials[key] !== undefined) {
        link.textContent = localeCopy.footer.socials[key];
      }
    });
  }

  if (cache.backToTop && localeCopy.footer?.backToTop !== undefined) cache.backToTop.textContent = localeCopy.footer.backToTop;
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
  getPersonas().forEach((persona) => {
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

const getPersonaBySlug = (slug) => getPersonas().find((persona) => persona.slug === slug);

const renderPersonasForLanguage = () => {
  const switcher = getPersonaSwitcher();
  if (!switcher) return;
  if (!activePersona) {
    activePersona = getPersonas()[0];
  }
  if (!activePersona) return;
  renderPersonaTabs(switcher);
  setSelectedPersonaTab(switcher, activePersona.slug);
  renderPersonaContent(activePersona);
};

const applyLanguage = () => {
  document.documentElement.setAttribute('lang', activeLanguage);
  renderStaticCopy();
  applyLinks();
  renderPersonasForLanguage();
};

export const setLanguage = (nextLanguage) => {
  if (!locales[nextLanguage]) return;
  activeLanguage = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, nextLanguage);
  const personaMatch = activePersona ? getPersonaBySlug(activePersona.slug) : null;
  activePersona = personaMatch || getPersonas()[0];
  applyLanguage();
  const picker = getLanguagePicker();
  if (picker && picker.value !== nextLanguage) {
    picker.value = nextLanguage;
  }
};

export const initLanguage = async () => {
  await loadInitialLocales();
  activeLanguage = getInitialLanguage();
  translationManagerLocale = activeLanguage;
  renderLanguagePickerOptions();
  setLanguage(activeLanguage);
  const picker = getLanguagePicker();
  if (picker) {
    picker.value = activeLanguage;
    picker.addEventListener('change', (event) => setLanguage(event.target.value));
  }
};

export const initPersonas = () => {
  const switcher = getPersonaSwitcher();
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

export const initTranslationManager = () => {
  const manager = getTranslationManager();
  if (!manager) return;

  const onLocalizationPage = isLocalizationRoute();
  manager.hidden = !onLocalizationPage;
  if (!onLocalizationPage) return;

  const localePicker = manager.querySelector('[data-translation-locale]');
  const translationList = manager.querySelector('[data-translation-list]');
  const linkList = manager.querySelector('[data-link-list]');
  const saveLinksButton = manager.querySelector('[data-save-links]');
  const addTranslationForm = manager.querySelector('[data-add-translation-form]');
  const newLocaleForm = manager.querySelector('[data-new-locale-form]');
  const exportButton = manager.querySelector('[data-export-locale]');
  const importInput = manager.querySelector('[data-import-locale]');
  const importStatus = manager.querySelector('[data-import-status]');
  const importStatusText = manager.querySelector('[data-import-status-text]');
  let importStatusTimeout;

  const setImportStatus = (state, message) => {
    if (!importStatus || !importStatusText) return;

    if (importStatusTimeout) {
      window.clearTimeout(importStatusTimeout);
      importStatusTimeout = null;
    }

    if (!state) {
      importStatus.removeAttribute('data-state');
      importStatus.hidden = true;
      importStatusText.textContent = '';
      return;
    }

    importStatus.dataset.state = state;
    importStatus.hidden = false;
    importStatusText.textContent = message;

    if (state !== 'loading') {
      importStatusTimeout = window.setTimeout(() => {
        importStatus.removeAttribute('data-state');
        importStatus.hidden = true;
        importStatusText.textContent = '';
      }, 3600);
    }
  };

  renderLanguagePickerOptions();
  renderTranslationLocaleOptions();

  if (localePicker) {
    if (!locales[translationManagerLocale]) {
      translationManagerLocale = activeLanguage;
    }
    localePicker.value = translationManagerLocale;
    localePicker.addEventListener('change', (event) => {
      const nextLocale = event.target.value;
      if (!locales[nextLocale]) return;
      translationManagerLocale = nextLocale;
      renderTranslationList(translationManagerLocale);
      renderLinkList(translationManagerLocale);
    });
  }

  if (translationList) {
    translationList.addEventListener('input', (event) => {
      const target = event.target;
      if (!target.dataset.translationKey) return;
      addTranslationValue(translationManagerLocale, target.dataset.translationKey, target.value);
      if (translationManagerLocale === activeLanguage) {
        applyLanguage();
      }
    });
  }

  if (linkList) {
    linkList.addEventListener('input', (event) => {
      const target = event.target;
      if (!target.dataset.linkKey) return;
      const isDirty = setPendingLinkValue(translationManagerLocale, target.dataset.linkKey, target.value);
      const wrapper = target.closest('.translation-item');
      if (wrapper) {
        wrapper.classList.toggle('translation-item--dirty', isDirty);
      }
      updateLinkSaveButtonState(manager, translationManagerLocale);
    });
  }

  if (addTranslationForm) {
    addTranslationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const key = addTranslationForm.translationKey.value.trim();
      const value = addTranslationForm.translationValue.value.trim();
      if (!key || !value) return;
      addTranslationValue(translationManagerLocale, key, value);
      renderTranslationList(translationManagerLocale);
      if (translationManagerLocale === activeLanguage) {
        applyLanguage();
      }
      addTranslationForm.reset();
    });
  }

  if (newLocaleForm) {
    newLocaleForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const code = newLocaleForm.localeCode.value.trim();
      const label = newLocaleForm.localeLabel.value.trim();
      if (!code) return;
      addLocale(code, label);
      translationManagerLocale = code;
      if (localePicker) {
        localePicker.value = translationManagerLocale;
      }
      renderTranslationList(translationManagerLocale);
      renderLinkList(translationManagerLocale);
      newLocaleForm.reset();
    });
  }

  if (exportButton) {
    exportButton.addEventListener('click', () => exportLocale(translationManagerLocale));
  }

  if (importInput) {
    importInput.addEventListener('change', async (event) => {
      const [file] = event.target.files || [];
      if (!file) return;

      setImportStatus('loading', 'Uploading locale…');

      try {
        const importedCode = await importLocaleFile(file, translationManagerLocale);
        if (importedCode) {
          setImportStatus('success', `Locale "${importedCode}" imported successfully.`);
        } else {
          setImportStatus('error', 'Unable to read locale file.');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to import locale file', error);
        setImportStatus('error', 'Import failed. Please check the file format.');
      }

      if (importInput) {
        importInput.value = '';
      }
    });
  }

  if (saveLinksButton) {
    saveLinksButton.addEventListener('click', () => {
      const pending = getPendingLinkEdits(translationManagerLocale);
      Object.entries(pending).forEach(([keyPath, value]) => {
        setLinkValue(translationManagerLocale, keyPath, value);
      });

      clearPendingLinkEdits(translationManagerLocale);
      renderLinkList(translationManagerLocale);

      if (translationManagerLocale === activeLanguage) {
        applyLinks();
      }
    });
  }

  renderTranslationList(translationManagerLocale);
  renderLinkList(translationManagerLocale);
};

export const initApp = async () => {
  initTheme();
  await initLanguage();
  initPersonas();
  initBackToTop();
  initNavToggle();
  initHeroObserver();
  initYear();
  initThemeToggle();
  initTranslationManager();
};

document.addEventListener('DOMContentLoaded', initApp);


