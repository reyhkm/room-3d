import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public', // Specify 'public' as the root directory
  build: {
    outDir: '../dist', // Output build files to a 'dist' folder outside 'public'
    emptyOutDir: true, // Empty the output directory on build
  },
});
