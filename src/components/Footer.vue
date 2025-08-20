<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 我的个人博客. 保留所有权利.</p>
            <div class="social-links">
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">微博</a>
                <a href="#" class="social-link">邮箱</a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer {
        background: white;
        border-top: 1px solid var(--border-color);
        margin-top: auto;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-content p {
        color: var(--text-light);
        margin: 0;
    }

    .social-links {
        display: flex;
        gap: 1rem;
    }

    .social-link {
        color: var(--text-light);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .social-link:hover {
        color: var(--primary-color);
    }

    @media (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            padding: 1rem;
        }
    }
</style>
