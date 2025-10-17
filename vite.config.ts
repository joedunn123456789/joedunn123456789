import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/joedunn123456789/', //match repo name
  plugins: [react()],
})
