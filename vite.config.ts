import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { compression } from 'vite-plugin-compression2'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/wannapo-game/',
  plugins: [
    Icons({ compiler: 'vue3' }),
    vue(),
    vueDevTools(),
    // VitePWA({ registerType: 'autoUpdate' }),
    compression({ algorithm: 'deflate' }),
    compression({ algorithm: 'gzip' }),
    compression({
      algorithm: 'brotliCompress',
      deleteOriginalAssets: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
