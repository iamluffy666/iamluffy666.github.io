# 我的个人博客

一个现代化的个人博客网站，使用 Vue.js 3 和 Vite 构建，具有响应式设计和优雅的用户界面。

## ✨ 特性

- 🎨 现代化设计，响应式布局
- 📱 移动端友好
- 🚀 基于 Vue.js 3 和 Composition API
- ⚡ 使用 Vite 进行快速开发和构建
- 🧭 Vue Router 实现单页应用路由
- 💅 自定义 CSS 样式系统
- 📝 文章展示和详情页面
- 👤 个人简介和联系页面

## 🛠️ 技术栈

- **前端框架**: Vue.js 3
- **构建工具**: Vite
- **路由管理**: Vue Router 4
- **样式**: 原生 CSS (使用 CSS Grid 和 Flexbox)
- **开发语言**: JavaScript

## 📦 项目结构

```
my_blog/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 公共组件
│   │   ├── Header.vue     # 头部导航
│   │   └── Footer.vue     # 底部组件
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── About.vue      # 关于页面
│   │   ├── Post.vue       # 文章详情
│   │   └── Contact.vue    # 联系页面
│   ├── App.vue            # 根组件
│   ├── main.js            # 入口文件
│   └── style.css          # 全局样式
├── package.json           # 项目配置
├── vite.config.js         # Vite 配置
└── index.html             # HTML 模板
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动，支持热重载。

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 🎯 功能特色

### 首页
- 个人简介展示
- 最新文章列表
- 优雅的卡片式布局
- 文章标签和分类

### 文章页面
- 支持富文本内容
- 代码高亮显示
- 响应式排版
- 返回导航

### 关于页面
- 个人简介
- 技能展示
- 兴趣爱好
- 联系方式

### 联系页面
- 多种联系方式
- 消息表单
- 表单验证

## 🎨 自定义样式

项目使用 CSS 自定义属性（CSS Variables）来管理主题颜色：

```css
:root {
  --primary-color: #3b82f6;
  --primary-dark: #1e40af;
  --text-color: #374151;
  --text-light: #6b7280;
  /* ... 更多变量 */
}
```

您可以在 `src/style.css` 中修改这些变量来自定义网站外观。

## 📝 添加新文章

目前文章数据存储在 `src/views/Post.vue` 组件中。要添加新文章：

1. 在 `Post.vue` 的 `posts` 对象中添加新的文章数据
2. 在 `Home.vue` 的 `posts` 数组中添加对应的文章摘要
3. 文章内容支持 HTML 格式

未来可以考虑：
- 使用 Markdown 文件存储文章
- 集成 CMS 系统
- 添加后端 API

## 🚀 部署建议

### Netlify
1. 将代码推送到 GitHub
2. 连接 Netlify 到您的仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`dist`

### Vercel
1. 安装 Vercel CLI：`npm i -g vercel`
2. 运行 `vercel` 并按照提示操作

### GitHub Pages
1. 安装 `gh-pages`：`npm install --save-dev gh-pages`
2. 在 `package.json` 添加部署脚本：
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
3. 运行 `npm run deploy`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙋‍♂️ 作者

- 您的名字
- 邮箱：your-email@example.com
- 网站：[您的网站](https://your-website.com)

---

⭐ 如果这个项目对您有帮助，请给它一个 Star！