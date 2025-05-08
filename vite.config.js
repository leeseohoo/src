import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
server: {
  proxy: {
    '/api': {
      target: 'http://svc-back:8000', // 클러스터 내부 주소
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}

