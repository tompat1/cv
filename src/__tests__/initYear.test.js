import { describe, it, expect, beforeEach } from 'vitest';
import { initYear } from '../main.js';

describe('initYear', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('sets the text content of #currentYear to the current year', () => {
    document.body.innerHTML = '<span id="currentYear"></span>';

    initYear();

    const currentYearEl = document.getElementById('currentYear');
    const expectedYear = new Date().getFullYear().toString();

    expect(currentYearEl.textContent).toBe(expectedYear);
  });

  it('does nothing if #currentYear does not exist', () => {
    // Calling it when the DOM is empty should not throw an error
    expect(() => initYear()).not.toThrow();
  });
});
