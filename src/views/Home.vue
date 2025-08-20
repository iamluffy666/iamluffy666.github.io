<template>
    <div class="home">
        <!-- 英雄区域 -->
        <section class="hero">
            <div class="hero-content">
                <h1>欢迎来到我的个人博客</h1>
                <p class="hero-description">在这里，我分享技术心得、生活感悟和有趣的想法</p>
                <router-link to="/about" class="btn btn-primary">了解更多</router-link>
            </div>
        </section>

        <!-- 最新文章 -->
        <section class="latest-posts">
            <h2>最新文章</h2>
            <div class="posts-grid">
                <article v-for="post in posts" :key="post.id" class="post-card card" @click="goToPost(post.id)">
                    <div class="post-meta">
                        <span class="post-date">{{ post.date }}</span>
                        <span class="post-category">{{ post.category }}</span>
                    </div>
                    <h3>{{ post.title }}</h3>
                    <p class="post-excerpt">{{ post.excerpt }}</p>
                    <div class="post-tags">
                        <span v-for="tag in post.tags" :key="tag" class="tag">
                            {{ tag }}
                        </span>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: 'Vue.js 3 开发实践指南',
                        excerpt: '深入探讨 Vue.js 3 的新特性和最佳实践，包括 Composition API 的使用方法...',
                        date: '2024-01-15',
                        category: '前端开发',
                        tags: ['Vue.js', 'JavaScript', '前端']
                    },
                    {
                        id: 2,
                        title: '构建现代化的个人博客',
                        excerpt: '从零开始搭建一个响应式的个人博客网站，使用最新的前端技术栈...',
                        date: '2024-01-10',
                        category: '项目实践',
                        tags: ['博客', 'Web开发', 'Vite']
                    },
                    {
                        id: 3,
                        title: 'CSS Grid 布局完全指南',
                        excerpt: '全面介绍 CSS Grid 布局的各种用法，从基础概念到高级应用...',
                        date: '2024-01-05',
                        category: '前端开发',
                        tags: ['CSS', '布局', '响应式']
                    }
                ]
            }
        },
        methods: {
            goToPost(id) {
                this.$router.push(`/post/${id}`)
            }
        }
    }
</script>

<style scoped>
    .hero {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        text-align: center;
        padding: 4rem 2rem;
        border-radius: 1rem;
        margin-bottom: 3rem;
    }

    .hero-content h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: white;
    }

    .hero-description {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .latest-posts h2 {
        margin-bottom: 2rem;
        text-align: center;
    }

    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .post-card {
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .post-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
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

    .post-card h3 {
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .post-excerpt {
        color: var(--text-light);
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .post-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tag {
        background: var(--background-light);
        color: var(--text-color);
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 2rem 1rem;
        }

        .hero-content h1 {
            font-size: 2rem;
        }

        .posts-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
