<template>
    <div class="post" v-if="post">
        <article class="post-article">
            <!-- 文章头部 -->
            <header class="post-header">
                <div class="post-meta">
                    <span class="post-date">{{ post.date }}</span>
                    <span class="post-category">{{ post.category }}</span>
                </div>
                <h1 class="post-title">{{ post.title }}</h1>
                <div class="post-tags">
                    <span v-for="tag in post.tags" :key="tag" class="tag">
                        {{ tag }}
                    </span>
                </div>
            </header>

            <!-- 文章内容 -->
            <div class="post-content">
                <div v-html="post.content"></div>
            </div>

            <!-- 返回按钮 -->
            <div class="post-actions">
                <router-link to="/" class="btn btn-primary">← 返回首页</router-link>
            </div>
        </article>
    </div>
    <div v-else class="post-not-found">
        <h1>文章未找到</h1>
        <p>抱歉，您访问的文章不存在。</p>
        <router-link to="/" class="btn btn-primary">返回首页</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        props: ['id'],
        data() {
            return {
                post: null,
                posts: {
                    1: {
                        id: 1,
                        title: 'Vue.js 3 开发实践指南',
                        date: '2024-01-15',
                        category: '前端开发',
                        tags: ['Vue.js', 'JavaScript', '前端'],
                        content: `
            <h2>Vue.js 3 简介</h2>
            <p>Vue.js 3 是 Vue.js 框架的最新版本，带来了许多激动人心的新特性和改进。本文将深入探讨 Vue.js 3 的核心特性和最佳实践。</p>
            
            <h3>主要新特性</h3>
            <ul>
              <li><strong>Composition API</strong>：提供了更灵活的组件逻辑组织方式</li>
              <li><strong>多个根节点</strong>：组件模板不再需要单一根节点</li>
              <li><strong>Teleport</strong>：可以将组件内容渲染到 DOM 的任意位置</li>
              <li><strong>Suspense</strong>：更好的异步组件处理</li>
            </ul>

            <h3>Composition API 示例</h3>
            <pre><code>import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubled = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    }

    onMounted(() => {
      console.log('组件已挂载')
    })

    return {
      count,
      doubled,
      increment
    }
  }
}</code></pre>

            <h3>为什么选择 Vue.js 3？</h3>
            <p>Vue.js 3 不仅在性能上有显著提升，还提供了更好的 TypeScript 支持和更灵活的开发体验。无论是小型项目还是大型应用，Vue.js 3 都能提供优秀的开发体验。</p>

            <h3>总结</h3>
            <p>Vue.js 3 是一个强大而优雅的前端框架，值得每个前端开发者学习和使用。希望这篇文章能帮助您更好地理解和使用 Vue.js 3。</p>
          `
                    },
                    2: {
                        id: 2,
                        title: '构建现代化的个人博客',
                        date: '2024-01-10',
                        category: '项目实践',
                        tags: ['博客', 'Web开发', 'Vite'],
                        content: `
            <h2>为什么要搭建个人博客？</h2>
            <p>在数字化时代，拥有一个个人博客是展示自己技能和想法的绝佳方式。它不仅能帮助你整理思路，还能与其他开发者分享经验。</p>
            
            <h3>技术选型</h3>
            <p>对于现代化的个人博客，我选择了以下技术栈：</p>
            <ul>
              <li><strong>Vue.js 3</strong>：现代的前端框架</li>
              <li><strong>Vite</strong>：快速的构建工具</li>
              <li><strong>Vue Router</strong>：客户端路由</li>
              <li><strong>CSS Grid & Flexbox</strong>：现代布局技术</li>
            </ul>

            <h3>项目结构</h3>
            <pre><code>my-blog/
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Post.vue
│   │   └── Contact.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── package.json
├── vite.config.js
└── index.html</code></pre>

            <h3>核心功能</h3>
            <p>这个博客包含了以下核心功能：</p>
            <ul>
              <li>响应式设计，适配各种设备</li>
              <li>文章列表和详情页面</li>
              <li>优雅的导航和布局</li>
              <li>现代化的 UI 设计</li>
            </ul>

            <h3>部署建议</h3>
            <p>完成开发后，您可以将博客部署到以下平台：</p>
            <ul>
              <li><strong>Netlify</strong>：简单易用，自动部署</li>
              <li><strong>Vercel</strong>：优秀的性能和 CDN</li>
              <li><strong>GitHub Pages</strong>：免费的静态网站托管</li>
            </ul>

            <p>希望这个项目能为您的博客之旅提供一个良好的起点！</p>
          `
                    },
                    3: {
                        id: 3,
                        title: 'CSS Grid 布局完全指南',
                        date: '2024-01-05',
                        category: '前端开发',
                        tags: ['CSS', '布局', '响应式'],
                        content: `
            <h2>CSS Grid 简介</h2>
            <p>CSS Grid 是一个强大的二维布局系统，它允许开发者创建复杂的网页布局。相比传统的 float 和 flexbox，Grid 提供了更直观和强大的布局能力。</p>

            <h3>基础概念</h3>
            <p>在开始使用 CSS Grid 之前，我们需要了解几个核心概念：</p>
            <ul>
              <li><strong>网格容器</strong>：设置了 display: grid 的元素</li>
              <li><strong>网格项目</strong>：网格容器的直接子元素</li>
              <li><strong>网格线</strong>：构成网格结构的分界线</li>
              <li><strong>网格轨道</strong>：两条网格线之间的空间</li>
            </ul>

            <h3>创建基础网格</h3>
            <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 200px;
  gap: 20px;
}

.grid-item {
  background: #3b82f6;
  color: white;
  padding: 20px;
  text-align: center;
}</code></pre>

            <h3>响应式网格布局</h3>
            <p>CSS Grid 的一个强大特性是能够轻松创建响应式布局：</p>
            <pre><code>.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}</code></pre>

            <h3>实际应用案例</h3>
            <p>在这个博客项目中，我们使用 CSS Grid 来布局文章列表：</p>
            <pre><code>.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}</code></pre>

            <h3>Grid vs Flexbox</h3>
            <p>虽然 Grid 和 Flexbox 都是现代布局技术，但它们有不同的使用场景：</p>
            <ul>
              <li><strong>Flexbox</strong>：适合一维布局，如导航栏、按钮组</li>
              <li><strong>Grid</strong>：适合二维布局，如页面整体结构、卡片网格</li>
            </ul>

            <h3>总结</h3>
            <p>CSS Grid 是现代网页开发中不可或缺的工具。掌握 Grid 布局，能够让您创建出更灵活、更美观的网页设计。</p>
          `
                    }
                }
            }
        },
        mounted() {
            this.loadPost()
        },
        watch: {
            id() {
                this.loadPost()
            }
        },
        methods: {
            loadPost() {
                this.post = this.posts[this.id] || null
            }
        }
    }
</script>

<style scoped>
    .post-article {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        border-radius: 1rem;
        box-shadow: var(--shadow);
        overflow: hidden;
    }

    .post-header {
        padding: 2rem;
        border-bottom: 1px solid var(--border-color);
    }

    .post-meta {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 0.875rem;
    }

    .post-date {
        color: var(--text-light);
    }

    .post-category {
        color: var(--primary-color);
        font-weight: 500;
    }

    .post-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--text-color);
    }

    .post-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tag {
        background: var(--background-light);
        color: var(--text-color);
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
    }

    .post-content {
        padding: 2rem;
        line-height: 1.8;
    }

    .post-content :deep(h2) {
        color: var(--text-color);
        margin: 2rem 0 1rem 0;
        font-size: 1.8rem;
    }

    .post-content :deep(h3) {
        color: var(--text-color);
        margin: 1.5rem 0 1rem 0;
        font-size: 1.4rem;
    }

    .post-content :deep(p) {
        margin-bottom: 1rem;
        color: var(--text-light);
    }

    .post-content :deep(ul) {
        margin-bottom: 1rem;
        padding-left: 2rem;
        color: var(--text-light);
    }

    .post-content :deep(li) {
        margin-bottom: 0.5rem;
    }

    .post-content :deep(pre) {
        background: #1a1a1a;
        color: #e1e1e1;
        padding: 1.5rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1rem 0;
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .post-content :deep(code) {
        background: #f3f4f6;
        color: #1a1a1a;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
    }

    .post-content :deep(pre code) {
        background: transparent;
        color: inherit;
        padding: 0;
    }

    .post-actions {
        padding: 2rem;
        border-top: 1px solid var(--border-color);
    }

    .post-not-found {
        text-align: center;
        padding: 4rem 2rem;
    }

    .post-not-found h1 {
        color: var(--text-color);
        margin-bottom: 1rem;
    }

    .post-not-found p {
        color: var(--text-light);
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        .post-header {
            padding: 1.5rem;
        }

        .post-title {
            font-size: 2rem;
        }

        .post-content {
            padding: 1.5rem;
        }

        .post-actions {
            padding: 1.5rem;
        }
    }
</style>
