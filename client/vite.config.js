import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    // Принуждава Vite да игнорира module/jsnext:main и да търси директно main (CJS)
    mainFields: [],                                   
  },
})
