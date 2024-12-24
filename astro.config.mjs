import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import db from '@astrojs/db'

export default defineConfig({
  integrations: [react(), tailwind(), db()],
  output: 'server',
  adapter: vercel(),
  server: { port: 3000, host: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  security: {
    checkOrigin: true
  }
})