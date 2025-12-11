import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'assets',
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    css: true
  }
});

