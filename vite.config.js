import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload([
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Quantico:wght@400;700&display=swap'
  ])]
})
