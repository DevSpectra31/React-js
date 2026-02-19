import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tawlindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tawlindcss(),
  ],
})
