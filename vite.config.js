import fs from 'fs/promises';
import path from 'path';
import { defineConfig } from 'vite';

const publicDir = 'assets';

const relocatePublicAssets = () => ({
  name: 'relocate-public-assets',
  apply: 'build',
  async writeBundle() {
    const distDir = path.resolve(__dirname, 'dist');
    const sourceDir = path.resolve(__dirname, publicDir);
    const targetDir = path.join(distDir, 'assets');

    const moveAssets = async (relativeDir = '') => {
      const sourcePath = path.join(sourceDir, relativeDir);
      const entries = await fs.readdir(sourcePath, { withFileTypes: true });

      for (const entry of entries) {
        const relativePath = path.join(relativeDir, entry.name);
        const distSource = path.join(distDir, relativePath);
        const distTarget = path.join(targetDir, relativePath);

        if (entry.isDirectory()) {
          await moveAssets(relativePath);
          await fs.rm(distSource, { recursive: true, force: true });
        } else {
          await fs.mkdir(path.dirname(distTarget), { recursive: true });
          await fs.copyFile(distSource, distTarget);
          await fs.rm(distSource);
        }
      }
    };

    await fs.mkdir(targetDir, { recursive: true });
    await moveAssets();
  }
});

export default defineConfig({
  base: './',
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    css: true
  }
});
