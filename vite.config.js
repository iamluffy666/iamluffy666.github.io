import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '', // 修改为空字符串，支持根路径访问
    server: {
        port: 3000,
        open: true
    }
})
