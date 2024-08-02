import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { UserConfigExport } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: "",
  server: {
    proxy: {
      '/api': {
        target: 'https://live.devnimble.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: false,
  }
} as UserConfigExport);
