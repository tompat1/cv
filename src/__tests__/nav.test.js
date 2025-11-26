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
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav__actions">
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
});

