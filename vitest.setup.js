if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  window.matchMedia = () => ({
    matches: false,
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    }
  });
}

if (typeof window !== 'undefined' && typeof window.scrollTo !== 'function') {
  window.scrollTo = () => {};
}

