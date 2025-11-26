import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initTheme, initThemeToggle } from '../main.js';

const renderToggle = () => {
  document.body.innerHTML = `
    <button
      id="themeToggle"
      class="theme-toggle"
      aria-label="Toggle theme"
      aria-pressed="false"
    ></button>
  `;
};

describe('theme toggle', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.documentElement.removeAttribute('data-theme');
    localStorage.clear();
    renderToggle();
  });

  it('switches between light and dark modes when clicked', () => {
    const matchMediaSpy = vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return false;
      }
    });

    initTheme();
    initThemeToggle();

    const toggle = document.getElementById('themeToggle');

    toggle.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(toggle.getAttribute('aria-pressed')).toBe('true');
    expect(localStorage.getItem('tr-theme')).toBe('dark');

    toggle.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(toggle.getAttribute('aria-pressed')).toBe('false');
    expect(localStorage.getItem('tr-theme')).toBe('light');

    matchMediaSpy.mockRestore();
  });

  it('respects stored preference on init', () => {
    localStorage.setItem('tr-theme', 'dark');
    initTheme();

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.getElementById('themeToggle').getAttribute('aria-pressed')).toBe('true');
  });
});

