# SEO Optimization Design

## 目标

让 OpenTYUT 网站被搜索引擎正确收录、搜索结果有区分度、社交分享有预览卡片。

## 改动范围

### 1. config.ts 全局配置

- 新增 `head` 数组：全局 OG 标签（`og:type`, `og:site_name`, `og:image`）、Twitter Card（`summary_large_image`）
- 新增 `transformHead`：逐页自动生成 `og:title` / `og:description` / `twitter:title` / `twitter:description`，从页面 frontmatter 或 VitePress pageData 中取值
- 开启内置 `sitemap`，hostname 为 `https://opentyut.github.io`

### 2. public/robots.txt

- Allow `/`，指向 sitemap URL

### 3. 页面 frontmatter 补全

对已有内容页面（约 10 个）补充 `title` 和 `description`：

| 页面 | 说明 |
|------|------|
| `index.md` | 首页，加 JSON-LD WebSite 结构化数据 |
| `guide/index.md` | 学习指南概览 |
| `guide/semester-1.md` | 大一上学期 |
| `survival/index.md` | 太理生存手册入口 |
| `survival/xu/xu.md` | 序言 |
| `survival/li-zhi/welcome.md` | 欢迎来到太原理工大学 |
| `survival/li-zhi/failed-mindset.md` | 失败的思维方式概览 |
| `survival/li-zhi/passive-mindset.md` | 被动思维 |
| `survival/li-zhi/gaokao-only.md` | 高考唯一论 |
| `survival/chuangxin/校外实习创新版.md` | 校外实习创新版 |
| `survival/chuangxin/课程点名创新篇.md` | 课程点名创新篇 |
| `admission/index.md` | 升学指南 |

### 4. 贡献指南

- `CONTRIBUTING.md`：说明新页面需添加的 frontmatter 字段及示例
- `_template.md`：新页面模板

## 不涉及

- 不改动侧边栏、路由、样式
- 不对占位页面（🚧 施工中）加 frontmatter
