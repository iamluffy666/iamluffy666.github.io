import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// 导入页面组件
import Home from './views/Home.vue'
import About from './views/About.vue'
import Post from './views/Post.vue'
import Contact from './views/Contact.vue'

// 路由配置
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/post/:id', component: Post, props: true },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
