import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-app/',
  plugins: [vue()],
  server: {
    hmr: {
      overlay: false // This disables the overlay for error messages
    }
  }
})
