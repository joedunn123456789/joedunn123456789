import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/joevisualstoryteller/', //match repo name
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
          // Separate PDF generation libraries (including @react-pdf/renderer)
          if (id.includes('node_modules/jspdf') ||
              id.includes('node_modules/html2canvas') ||
              id.includes('node_modules/@react-pdf') ||
              id.includes('node_modules/pdfkit')) {
            return 'pdf-vendor';
          }
          // Separate large data files
          if (id.includes('src/data/resumeData')) {
            return 'resume-data';
          }
          // Separate chart/visualization libraries
          if (id.includes('node_modules/recharts') ||
              id.includes('node_modules/d3')) {
            return 'charts-vendor';
          }
        }
      }
    },
    // Increase chunk size warning limit to 2500kb to account for lazy-loaded PDF libraries
    chunkSizeWarningLimit: 2500,
  }
})
