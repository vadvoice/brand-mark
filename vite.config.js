import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.relative(__dirname, 'index.js'),
      name: 'brand-mark',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          reactDom: 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), UnoCSS()],
});
