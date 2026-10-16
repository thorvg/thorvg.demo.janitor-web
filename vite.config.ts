import { defineConfig } from 'vite';

// The multi-threaded ThorVG build relies on SharedArrayBuffer
// Cross-Origin-Embedder-Policy required
const crossOriginIsolation = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
};

export default defineConfig({
  optimizeDeps: { exclude: ['@thorvg/webcanvas'] },
  server: { headers: crossOriginIsolation },
  preview: { headers: crossOriginIsolation },
});
