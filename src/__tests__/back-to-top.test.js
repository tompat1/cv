import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initBackToTop } from '../main.js';

const renderBackToTop = () => {
  document.body.innerHTML = `
    <button id="backToTop">Back to Top</button>
  `;
};

describe('back to top', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('safely returns if #backToTop element is not found', () => {
    // Calling without rendering the button
    expect(() => initBackToTop()).not.toThrow();
  });

  it('scrolls to top when clicked', () => {
    renderBackToTop();

    // Mock window.scrollTo
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    initBackToTop();

    const backToTop = document.getElementById('backToTop');
    backToTop.click();

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
