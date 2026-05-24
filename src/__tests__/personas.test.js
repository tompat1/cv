import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initLanguage, initPersonas } from '../main.js';

const renderDOM = () => {
  document.body.innerHTML = `
    <select id="languagePicker"></select>
    <div data-persona-switcher></div>
    <div data-hero-eyebrow></div>
    <img data-hero-persona-icon />
    <span data-hero-persona-title></span>
    <span data-hero-heading></span>
    <span data-hero-highlight></span>
    <p data-hero-lead></p>
    <div data-hero-actions></div>
    <dl data-hero-stats></dl>
    <img data-hero-portrait />
    <ul data-focus-list></ul>
    <div data-project></div>
    <div data-skill></div>
    <div data-testimonial></div>
    <a data-cta-link></a>
    <h2 data-cta-heading></h2>
    <p data-cta-body></p>
  `;
};

describe('initPersonas', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            label: 'English',
            personas: [
              {
                slug: 'designer',
                title: 'Designer',
                icon: '/designer.png',
                heroCopy: {
                  eyebrow: 'Design Eyebrow',
                  heading: 'Design Heading',
                  highlight: 'Design Highlight',
                  lead: 'Design Lead',
                  actions: [],
                  stats: [],
                  portrait: '/designer.jpg',
                  focus: []
                },
                projects: [],
                skills: [],
                testimonial: [],
                cta: {
                  heading: 'CTA',
                  body: 'CTA Body',
                  linkText: 'Click',
                  linkUrl: '#'
                }
              },
              {
                slug: 'developer',
                title: 'Developer',
                icon: '/developer.png',
                heroCopy: {
                  eyebrow: 'Dev Eyebrow',
                  heading: 'Dev Heading',
                  highlight: 'Dev Highlight',
                  lead: 'Dev Lead',
                  actions: [],
                  stats: [],
                  portrait: '/developer.jpg',
                  focus: []
                },
                projects: [],
                skills: [],
                testimonial: [],
                cta: {
                  heading: 'CTA',
                  body: 'CTA Body',
                  linkText: 'Click',
                  linkUrl: '#'
                }
              }
            ],
            copy: {},
            links: {}
          })
      })
    );
  });

  it('initializes personas and switches between them', async () => {
    renderDOM();
    await initLanguage();
    initPersonas();

    const switcher = document.querySelector('[data-persona-switcher]');
    expect(switcher).not.toBeNull();

    const tabs = switcher.querySelectorAll('[data-persona-option]');
    expect(tabs.length).toBe(2);
    expect(tabs[0].dataset.personaOption).toBe('designer');
    expect(tabs[1].dataset.personaOption).toBe('developer');

    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');

    tabs[1].click();

    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('does nothing if switcher is not in DOM', async () => {
    await initLanguage();
    initPersonas();
  });
});
