import { JSDOM } from 'jsdom';

const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <div id="translation-manager">
        <div data-link-list></div>
        <div data-link-count></div>
      </div>
    </body>
  </html>
`);

global.document = dom.window.document;
global.window = dom.window;

const list = document.querySelector('[data-link-list]');
const count = document.querySelector('[data-link-count]');

const entries = Array.from({ length: 10000 }).map((_, i) => ({
  key: `key${i}`,
  value: `http://example.com/${i}`,
}));
const pending = { key500: 'http://example.com/pending' };

// Simulate the unoptimized renderLinkList
function renderLinkListUnoptimized() {
  list.innerHTML = '';
  entries.forEach((entry) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'translation-item';

    const keyEl = document.createElement('div');
    keyEl.className = 'translation-item__key';
    keyEl.textContent = entry.key;

    const input = document.createElement('input');
    input.dataset.linkKey = entry.key;
    input.type = 'url';
    input.value = pending[entry.key] ?? entry.value;
    input.placeholder = 'Enter link or file path';

    if (pending[entry.key]) {
      wrapper.classList.add('translation-item--dirty');
    }

    wrapper.append(keyEl, input);
    list.appendChild(wrapper);
  });
}

// Simulate the optimized renderLinkList
function renderLinkListOptimized() {
  list.innerHTML = '';
  const fragment = document.createDocumentFragment();
  entries.forEach((entry) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'translation-item';

    const keyEl = document.createElement('div');
    keyEl.className = 'translation-item__key';
    keyEl.textContent = entry.key;

    const input = document.createElement('input');
    input.dataset.linkKey = entry.key;
    input.type = 'url';
    input.value = pending[entry.key] ?? entry.value;
    input.placeholder = 'Enter link or file path';

    if (pending[entry.key]) {
      wrapper.classList.add('translation-item--dirty');
    }

    wrapper.append(keyEl, input);
    fragment.appendChild(wrapper);
  });
  list.appendChild(fragment);
}

const ITERATIONS = 10;

function measure(name, fn) {
  let total = 0;
  for (let i = 0; i < ITERATIONS; i++) {
    const start = performance.now();
    fn();
    const end = performance.now();
    total += (end - start);
  }
  const avg = total / ITERATIONS;
  console.log(`${name}: ${avg.toFixed(2)}ms`);
  return avg;
}

const unoptimizedTime = measure('Unoptimized', renderLinkListUnoptimized);
const optimizedTime = measure('Optimized', renderLinkListOptimized);

const improvement = unoptimizedTime - optimizedTime;
const percentage = (improvement / unoptimizedTime) * 100;

console.log(`Improvement: ${improvement.toFixed(2)}ms (${percentage.toFixed(2)}%)`);
