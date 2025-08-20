<template>
    <div class="about">
        <div class="about-header">
            <div class="avatar">
                <div class="avatar-placeholder">👨‍💻</div>
            </div>
            <h1>关于我</h1>
            <p class="intro">热爱技术，专注于前端开发和用户体验设计</p>
        </div>

        <div class="about-content">
            <section class="card">
                <h2>个人简介</h2>
                <p>
                    大家好！我是一名热爱技术的前端开发工程师，专注于现代Web开发技术。
                    我喜欢探索新的技术栈，解决复杂的问题，并将想法转化为优秀的用户体验。
                </p>
                <p>
                    在这个博客中，我会分享我的技术学习心得、项目经验，以及对技术趋势的思考。
                    希望能够通过这个平台与更多志同道合的朋友交流学习。
                </p>
            </section>

            <section class="card">
                <h2>技术技能</h2>
                <div class="skills">
                    <div class="skill-category">
                        <h3>前端技术</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Vue.js</span>
                            <span class="skill-tag">React</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">TypeScript</span>
                            <span class="skill-tag">HTML5</span>
                            <span class="skill-tag">CSS3</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>开发工具</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Vite</span>
                            <span class="skill-tag">Webpack</span>
                            <span class="skill-tag">Git</span>
                            <span class="skill-tag">VS Code</span>
                            <span class="skill-tag">npm/yarn</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>后端技术</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Node.js</span>
                            <span class="skill-tag">Express</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">MySQL</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card">
                <h2>兴趣爱好</h2>
                <div class="interests">
                    <div class="interest-item">
                        <h3>🎵 音乐</h3>
                        <p>喜欢各种类型的音乐，编程时总是戴着耳机</p>
                    </div>
                    <div class="interest-item">
                        <h3>📚 阅读</h3>
                        <p>热爱阅读技术书籍和科幻小说</p>
                    </div>
                    <div class="interest-item">
                        <h3>🎮 游戏</h3>
                        <p>偶尔玩玩独立游戏来放松心情</p>
                    </div>
                    <div class="interest-item">
                        <h3>🏃‍♂️ 运动</h3>
                        <p>坚持跑步和健身，保持身体健康</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style scoped>
    .about-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .avatar {
        margin-bottom: 1rem;
    }

    .avatar-placeholder {
        width: 120px;
        height: 120px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        margin: 0 auto;
        box-shadow: var(--shadow-lg);
    }

    .intro {
        font-size: 1.2rem;
        color: var(--text-light);
        max-width: 600px;
        margin: 0 auto;
    }

    .about-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .skills {
        display: grid;
        gap: 2rem;
    }

    .skill-category h3 {
        margin-bottom: 1rem;
        color: var(--primary-color);
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .skill-tag {
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
    }

    .interests {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .interest-item {
        text-align: center;
        padding: 1rem;
    }

    .interest-item h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .interest-item p {
        color: var(--text-light);
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        .avatar-placeholder {
            width: 80px;
            height: 80px;
            font-size: 2rem;
        }

        .interests {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }
</style>
