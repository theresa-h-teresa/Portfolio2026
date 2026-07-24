import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this as a project site at /Portfolio2026/, but local
  // dev should stay at the root so `npm run dev` works as expected.
  base: command === 'build' ? '/Portfolio2026/' : '/',
  plugins: [react(), tailwindcss()],
}))
