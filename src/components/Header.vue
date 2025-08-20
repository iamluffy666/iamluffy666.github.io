<template>
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
                <router-link to="/" class="brand-link">
                    <h2>我的博客</h2>
                </router-link>
            </div>
            <div class="nav-menu" :class="{ 'nav-menu-open': menuOpen }">
                <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
                <router-link to="/about" class="nav-link" @click="closeMenu">关于</router-link>
                <router-link to="/contact" class="nav-link" @click="closeMenu">联系</router-link>
            </div>
            <button class="nav-toggle" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                menuOpen: false
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
            },
            closeMenu() {
                this.menuOpen = false
            }
        }
    }
</script>

<style scoped>
    .header {
        background: white;
        box-shadow: var(--shadow);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .nav {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .brand-link {
        text-decoration: none;
        color: var(--primary-color);
    }

    .brand-link h2 {
        margin: 0;
    }

    .nav-menu {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        padding: 0.5rem;
        border-radius: 0.375rem;
        transition: all 0.2s ease;
    }

    .nav-link:hover,
    .nav-link.router-link-active {
        color: var(--primary-color);
        background-color: var(--background-light);
    }

    .nav-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .nav-toggle span {
        width: 25px;
        height: 3px;
        background-color: var(--text-color);
        margin: 3px 0;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        .nav {
            padding: 1rem;
        }

        .nav-toggle {
            display: flex;
        }

        .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: var(--shadow);
            flex-direction: column;
            padding: 1rem;
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .nav-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
</style>
