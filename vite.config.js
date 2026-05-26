import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/my-lecture-slides/",
  plugins: [react()],
})