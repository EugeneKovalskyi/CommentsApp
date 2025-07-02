import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  root: 'src',

  build: {
    outDir: '../dist'
  },
  
  plugins: [
    react(), 
    tailwindcss()
  ],

  resolve: {
    alias: {
      '#components': path.resolve(__dirname, './src/components'),
      '#constants': path.resolve(__dirname, './src/constants'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#utils': path.resolve(__dirname, './src/utils'),
      '#styles': path.resolve(__dirname, './src/styles'),
      '#public': path.resolve(__dirname, './public'),
    }
  }
})
