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

if (typeof window !== 'undefined') {
  const storage = (() => {
    const items = new Map();
    return {
      get length() {
        return items.size;
      },
      clear() {
        items.clear();
      },
      getItem(key) {
        const normalizedKey = String(key);
        return items.has(normalizedKey) ? items.get(normalizedKey) : null;
      },
      key(index) {
        return Array.from(items.keys())[index] ?? null;
      },
      removeItem(key) {
        items.delete(String(key));
      },
      setItem(key, value) {
        items.set(String(key), String(value));
      }
    };
  })();

  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: storage
  });

  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: storage
  });
}
