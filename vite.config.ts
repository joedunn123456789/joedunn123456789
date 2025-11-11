import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/joedunn123456789/', //match repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate React and related libraries
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          // Separate PDF generation libraries
          if (id.includes('node_modules/jspdf') ||
              id.includes('node_modules/html2canvas')) {
            return 'pdf-vendor';
          }
        }
      }
    },
    // Increase chunk size warning limit to 1000kb (from default 500kb)
    chunkSizeWarningLimit: 1000,
  }
})
