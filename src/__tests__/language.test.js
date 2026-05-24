import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setLanguage, initLanguage } from '../main';

global.fetch = vi.fn(async (url) => {
  if (url.includes('en.json')) {
    return {
      ok: true,
      json: async () => ({
        label: 'English',
        personas: [{ slug: 'dev', name: 'Developer' }],
        copy: { title: 'Hello' }
      })
    };
  }
  if (url.includes('sv.json')) {
    return {
      ok: true,
      json: async () => ({
        label: 'Swedish',
        personas: [{ slug: 'dev', name: 'Utvecklare' }],
        copy: { title: 'Hej' }
      })
    };
  }
  return { ok: false };
});

describe('setLanguage', () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <select id="languagePicker">
        <option value="en">EN</option>
        <option value="sv">SV</option>
      </select>
      <div data-persona-switcher></div>
    `;
    localStorage.clear();
    document.documentElement.removeAttribute('lang');

    // We need to initialize the internal locales in main.js
    await initLanguage();
  });

  it('updates lang attribute, localStorage, and languagePicker value', () => {
    setLanguage('sv');

    expect(document.documentElement.getAttribute('lang')).toBe('sv');
    expect(localStorage.getItem('tr-language')).toBe('sv');

    const picker = document.getElementById('languagePicker');
    expect(picker.value).toBe('sv');
  });

  it('does not throw an error if languagePicker is missing', () => {
    document.body.innerHTML = `<div data-persona-switcher></div>`;

    expect(() => setLanguage('sv')).not.toThrow();

    expect(document.documentElement.getAttribute('lang')).toBe('sv');
    expect(localStorage.getItem('tr-language')).toBe('sv');
  });

  it('does nothing if an unsupported language is provided', () => {
    // Current language is 'en' from initLanguage
    document.documentElement.setAttribute('lang', 'en');
    localStorage.setItem('tr-language', 'en');

    setLanguage('fr');

    // Should still be 'en'
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(localStorage.getItem('tr-language')).toBe('en');
  });
});
