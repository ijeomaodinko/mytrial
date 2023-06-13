import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: "import React from 'react'",
  },
  optimizeDeps: {
    include: ['@swc/core'],
  },
  optimizeDeps: {
    exclude: ['@swc/wasm'],
  },
})
