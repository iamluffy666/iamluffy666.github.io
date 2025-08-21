# 部署说明

## GitHub Pages 部署步骤

### 1. 仓库设置
- 确保你的仓库名为 `my_blog`
- 在仓库设置中启用 GitHub Pages
- 选择部署源为 "GitHub Actions"

### 2. 本地构建和部署
```bash
# 安装依赖
npm install

# 构建项目（GitHub Pages专用）
npm run build:gh-pages

# 或者使用默认构建
npm run build
```

### 3. 自动部署
- 推送代码到 `main` 分支
- GitHub Actions 会自动构建和部署
- 部署完成后访问：`https://iamluffy666.github.io/my_blog/`

### 4. 手动部署
- 在 GitHub 仓库页面点击 "Actions" 标签
- 选择 "Deploy to GitHub Pages" 工作流
- 点击 "Run workflow" 手动触发部署

## 注意事项

1. **Base路径**：确保 `vite.config.js` 中的 `base` 配置与仓库名一致
2. **路由配置**：`main.js` 中的路由 history 需要包含正确的 base 路径
3. **资源路径**：所有静态资源路径都应该使用相对路径或正确的 base 路径

## 故障排除

如果遇到模块解析错误：
1. 检查 `vite.config.js` 中的 `base` 配置
2. 确认构建命令使用了正确的 base 路径
3. 检查浏览器控制台的错误信息

如果遇到 404 错误：
1. 检查所有资源路径是否正确
2. 确认 favicon.ico 文件存在
3. 验证路由配置是否正确
