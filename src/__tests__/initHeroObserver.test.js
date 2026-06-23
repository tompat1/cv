import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initHeroObserver } from '../main.js';

describe('initHeroObserver', () => {
  let originalIntersectionObserver;

  beforeEach(() => {
    document.body.innerHTML = '';
    originalIntersectionObserver = window.IntersectionObserver;
    vi.clearAllMocks();
  });

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });

  it('should not do anything if .hero element is missing', () => {
    const observeMock = vi.fn();
    window.IntersectionObserver = vi.fn(() => ({
      observe: observeMock
    }));

    initHeroObserver();

    expect(window.IntersectionObserver).not.toHaveBeenCalled();
  });

  it('should not do anything if IntersectionObserver is not supported', () => {
    document.body.innerHTML = '<div class="hero"></div>';
    delete window.IntersectionObserver;

    expect(() => initHeroObserver()).not.toThrow();
  });

  it('should observe the .hero element if present and IntersectionObserver is supported', () => {
    document.body.innerHTML = '<div class="hero"></div>';
    const hero = document.querySelector('.hero');
    const observeMock = vi.fn();

    window.IntersectionObserver = vi.fn(() => ({
      observe: observeMock
    }));

    initHeroObserver();

    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(observeMock).toHaveBeenCalledWith(hero);
  });

  it('should add "hero--visible" class when the element intersects', () => {
    document.body.innerHTML = '<div class="hero"></div>';
    const hero = document.querySelector('.hero');

    let observerCallback;
    const observeMock = vi.fn();

    window.IntersectionObserver = vi.fn((callback) => {
      observerCallback = callback;
      return { observe: observeMock };
    });

    initHeroObserver();

    // Trigger the callback with isIntersecting: true
    observerCallback([{ isIntersecting: true }]);

    expect(hero.classList.contains('hero--visible')).toBe(true);
  });

  it('should not add "hero--visible" class when the element does not intersect', () => {
    document.body.innerHTML = '<div class="hero"></div>';
    const hero = document.querySelector('.hero');

    let observerCallback;
    const observeMock = vi.fn();

    window.IntersectionObserver = vi.fn((callback) => {
      observerCallback = callback;
      return { observe: observeMock };
    });

    initHeroObserver();

    // Trigger the callback with isIntersecting: false
    observerCallback([{ isIntersecting: false }]);

    expect(hero.classList.contains('hero--visible')).toBe(false);
  });
});
