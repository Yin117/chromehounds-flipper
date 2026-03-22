import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/chromehounds-flipper/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      // This maps "@src" to your actual src directory
      '@src': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
