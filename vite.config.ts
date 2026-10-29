import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the production bundle works from any host path —
// GitHub Pages project subpaths, a custom domain root, or a local preview.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
