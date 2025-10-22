import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifestFilename: 'manifest.json',
      includeManifestIcons: false,
    }),
  ],
  base: '/mobdev-lab14-rupich/',
})