import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/my_blog/', // 添加这行，匹配你的仓库名
    server: {
        port: 3000,
        open: true
    }
})
