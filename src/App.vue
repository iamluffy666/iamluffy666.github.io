<template>
    <div id="app">
        <Header />
        <main class="main-content">
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f8f9fa;
    }

    #app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .main-content {
        flex: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        width: 100%;
    }

    @media (max-width: 768px) {
        .main-content {
            padding: 1rem;
        }
    }
</style>
