import { describe, it, expect, beforeEach } from 'vitest';
import { initNavToggle } from '../main.js';

describe('nav toggle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav>
        <button class="nav__toggle">Toggle</button>
        <div class="nav__links">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <span>Not a link</span>
        </div>
      </nav>
    `;
  });

  it('toggles nav__links--open class on click', () => {
    initNavToggle();
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    expect(links.classList.contains('nav__links--open')).toBe(false);

    toggle.click();
    expect(links.classList.contains('nav__links--open')).toBe(true);

    toggle.click();
    expect(links.classList.contains('nav__links--open')).toBe(false);
  });

  it('removes nav__links--open class when an A tag is clicked', () => {
    initNavToggle();
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');
    const link1 = links.querySelector('a');
    const span = links.querySelector('span');

    toggle.click();
    expect(links.classList.contains('nav__links--open')).toBe(true);

    // Clicking a non-A tag shouldn't close it
    span.click();
    expect(links.classList.contains('nav__links--open')).toBe(true);

    // Clicking an A tag should close it
    link1.click();
    expect(links.classList.contains('nav__links--open')).toBe(false);
  });

  it('does not throw if elements are missing', () => {
    document.body.innerHTML = ''; // Clear elements
    expect(() => initNavToggle()).not.toThrow();
  });
});
