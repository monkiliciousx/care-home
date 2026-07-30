今日大马 Today MY — 静态功能原型

这不是只有展示文字的 landing page，而是一个可操作的前端 App Prototype：
- 首页内容与服务入口
- 来马指南文章详情
- 租房筛选、搜索、收藏和详情
- 招聘列表与职位详情
- 商家黄页与联系入口
- 全站搜索
- 发布房源 / 招聘 / 商家入驻表单
- 我的收藏、我的发布、通知
- 使用 localStorage 保存收藏与发布资料
- 手机端 App 风格底部导航
- 桌面端完整侧边导航
- PWA manifest 与基础离线缓存

GitHub Pages 部署：
1. 将 index.html、styles.css、app.js、manifest.webmanifest、service-worker.js 上传到 repository 根目录。
2. Settings > Pages > Deploy from a branch > main > /(root)。
3. 等待 Actions / Deployments 变成绿色。

注意：这是前端功能原型，不连接真实数据库、支付、WhatsApp API 或后台审核系统。
