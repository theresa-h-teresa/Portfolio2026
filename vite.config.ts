import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served at the root via the teresafang.net custom domain.
  base: '/',
  plugins: [react(), tailwindcss()],
})
