import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['gsap', '@gsap/react'],
          smooth: ['@studio-freight/lenis']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@studio-freight/lenis']
  }
})
