import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { intlayerPlugin } from "vite-intlayer";

export default defineConfig({
  plugins: [react(), intlayerPlugin()],
  base: '/portfolio/', // important for GitHub Pages
  test: {
    globals: true,
    setupFiles: 'src/setupTests.js',
    environment: 'jsdom',
    pool: 'forks',
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


