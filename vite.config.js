import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({ pwa_manifest: {
      icons: [
        {
          src: "./images/download-48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "any maskable"
        },
      ]
    }, registerType: 'autoUpdate' }),
    react()
  ]
})