import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WhatTheHesa/', // 與 GitHub Pages 子路徑一致
  plugins: [react()],
  optimizeDeps: {
    include: ['react-twitter-embed'], // 確保轉譯該模塊
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // 處理混合模塊
    },
  },
})
