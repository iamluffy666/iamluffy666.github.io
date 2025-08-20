<template>
    <div class="contact">
        <div class="contact-header">
            <h1>联系我</h1>
            <p>欢迎与我交流！如果您有任何问题或建议，请随时联系我。</p>
        </div>

        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-methods">
                    <div class="contact-method card">
                        <div class="contact-icon">📧</div>
                        <h3>邮箱</h3>
                        <p>your-email@example.com</p>
                        <a href="mailto:your-email@example.com" class="btn btn-primary">发送邮件</a>
                    </div>

                    <div class="contact-method card">
                        <div class="contact-icon">💼</div>
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/yourprofile</p>
                        <a href="#" target="_blank" class="btn btn-primary">访问主页</a>
                    </div>

                    <div class="contact-method card">
                        <div class="contact-icon">🐙</div>
                        <h3>GitHub</h3>
                        <p>github.com/yourusername</p>
                        <a href="#" target="_blank" class="btn btn-primary">查看代码</a>
                    </div>

                    <div class="contact-method card">
                        <div class="contact-icon">🐦</div>
                        <h3>微博</h3>
                        <p>@你的微博名</p>
                        <a href="#" target="_blank" class="btn btn-primary">关注我</a>
                    </div>
                </div>
            </div>

            <div class="contact-form-section">
                <div class="card">
                    <h2>发送消息</h2>
                    <form @submit.prevent="submitForm" class="contact-form">
                        <div class="form-group">
                            <label for="name">姓名 *</label>
                            <input type="text" id="name" v-model="form.name" required class="form-input"
                                placeholder="请输入您的姓名">
                        </div>

                        <div class="form-group">
                            <label for="email">邮箱 *</label>
                            <input type="email" id="email" v-model="form.email" required class="form-input"
                                placeholder="请输入您的邮箱">
                        </div>

                        <div class="form-group">
                            <label for="subject">主题</label>
                            <input type="text" id="subject" v-model="form.subject" class="form-input"
                                placeholder="请输入消息主题">
                        </div>

                        <div class="form-group">
                            <label for="message">消息 *</label>
                            <textarea id="message" v-model="form.message" required class="form-textarea" rows="6"
                                placeholder="请输入您的消息内容"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                            {{ isSubmitting ? '发送中...' : '发送消息' }}
                        </button>
                    </form>

                    <div v-if="submitMessage" class="submit-message" :class="submitStatus">
                        {{ submitMessage }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                isSubmitting: false,
                submitMessage: '',
                submitStatus: ''
            }
        },
        methods: {
            async submitForm() {
                this.isSubmitting = true
                this.submitMessage = ''

                try {
                    // 模拟表单提交
                    await new Promise(resolve => setTimeout(resolve, 1500))

                    // 在实际应用中，这里应该发送表单数据到后端服务器
                    console.log('表单数据:', this.form)

                    this.submitMessage = '消息发送成功！我会尽快回复您。'
                    this.submitStatus = 'success'

                    // 清空表单
                    this.form = {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                } catch (error) {
                    this.submitMessage = '发送失败，请稍后再试。'
                    this.submitStatus = 'error'
                } finally {
                    this.isSubmitting = false

                    // 3秒后清除消息
                    setTimeout(() => {
                        this.submitMessage = ''
                        this.submitStatus = ''
                    }, 3000)
                }
            }
        }
    }
</script>

<style scoped>
    .contact-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .contact-header h1 {
        margin-bottom: 1rem;
    }

    .contact-header p {
        font-size: 1.1rem;
        color: var(--text-light);
        max-width: 600px;
        margin: 0 auto;
    }

    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .contact-methods {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .contact-method {
        text-align: center;
        padding: 2rem 1.5rem;
    }

    .contact-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .contact-method h3 {
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .contact-method p {
        color: var(--text-light);
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-group label {
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--text-color);
    }

    .form-input,
    .form-textarea {
        padding: 0.75rem;
        border: 2px solid var(--border-color);
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s ease;
    }

    .form-input:focus,
    .form-textarea:focus {
        outline: none;
        border-color: var(--primary-color);
    }

    .form-textarea {
        resize: vertical;
        min-height: 120px;
        font-family: inherit;
    }

    .submit-message {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: 500;
    }

    .submit-message.success {
        background-color: #d1fae5;
        color: #065f46;
        border: 1px solid #a7f3d0;
    }

    .submit-message.error {
        background-color: #fee2e2;
        color: #991b1b;
        border: 1px solid #fca5a5;
    }

    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .contact-methods {
            grid-template-columns: 1fr;
        }

        .contact-method {
            padding: 1.5rem;
        }
    }
</style>
