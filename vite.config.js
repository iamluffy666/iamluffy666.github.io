import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/', // 使用正斜杠
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    },
    server: {
        port: 3000,
        open: true
    }
})
