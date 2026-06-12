import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { intlayerPlugin } from "vite-intlayer";
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), intlayerPlugin()],
  base: '/portfolio/', // important for GitHub Pages
  test: {
    globals: true,
    setupFiles: 'src/setupTests.js',
    environment: 'jsdom',
    pool: 'forks',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    alias: {
      '/github-logo.png': path.resolve(__dirname, 'public/github-logo.png')
    },
    deps: {
      optimizer: {
        web: {
          exclude: ['intlayer', 'react-intlayer']
        }
      }
    },
    define: {
      'process.env.NODE_ENV': '"test"'
    }
  }
});
// This configuration sets up Vite with React support and specifies the base path for deployment on GitHub Pages.
// The base path is set to '/portfolio/' which is necessary for the application to work correctly when hosted on GitHub Pages.


