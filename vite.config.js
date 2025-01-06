import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ThatsSaHesa', // 與 GitHub Pages 子路徑一致
  plugins: [react()],
})
