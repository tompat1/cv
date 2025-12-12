import { describe, it, expect, beforeEach } from 'vitest';

const renderNav = () => {
  document.body.innerHTML = `
    <header class="site-header">
      <nav class="nav container">
        <a class="logo" href="#">
          <span>TR</span>
          <div>
            <strong>Thomas Rynell</strong>
            <small>Product Designer & Frontend Dev</small>
          </div>
        </a>
        <button class="nav__toggle" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav__links">
          <li><a href="#work" data-nav-link="work">Work</a></li>
          <li><a href="#services" data-nav-link="services">Services</a></li>
          <li><a href="#experience" data-nav-link="experience">Experience</a></li>
          <li><a href="#contact" data-nav-link="contact">Contact</a></li>
        </ul>
        <div class="nav__actions">
          <label class="language-picker" for="languagePicker">
            <span class="sr-only">Change language</span>
            <select id="languagePicker" aria-label="Change language">
              <option value="en">EN</option>
              <option value="sv">SV</option>
            </select>
          </label>
          <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
            <svg></svg>
            <svg></svg>
          </button>
          <a class="btn btn--primary nav__cta" href="#contact">Let's work</a>
        </div>
      </nav>
    </header>
  `;
};

describe('navigation', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders nav links with expected labels', () => {
    renderNav();
    const labels = Array.from(document.querySelectorAll('.nav__links li a')).map((node) =>
      node.textContent.trim()
    );

    expect(labels).toEqual(['Work', 'Services', 'Experience', 'Contact']);
  });

  it('includes an accessible theme toggle control', () => {
    renderNav();
    const toggle = document.getElementById('themeToggle');

    expect(toggle).not.toBeNull();
    expect(toggle.getAttribute('aria-label')).toBe('Toggle theme');
    expect(toggle.getAttribute('aria-pressed')).toBe('false');
  });

  it('includes a language picker', () => {
    renderNav();
    const picker = document.getElementById('languagePicker');

    expect(picker).not.toBeNull();
    expect(picker.getAttribute('aria-label')).toBe('Change language');
    expect(Array.from(picker.options).map((option) => option.value)).toEqual(['en', 'sv']);
  });
});

