import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // base path untuk GitHub Pages project site: https://Asmaraloka-create.github.io/porto/
  base: '/porto/',
  plugins: [react()],
})
