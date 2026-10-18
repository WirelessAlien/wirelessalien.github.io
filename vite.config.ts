import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const stripStaticFallbackPlugin = () => ({
  name: 'strip-static-fallback',
  transformIndexHtml(html: string) {
    return html.replace(/<!-- STATIC-FALLBACK-START -->[\s\S]*?<!-- STATIC-FALLBACK-END -->/g, '');
  },
});

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), stripStaticFallbackPlugin()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
