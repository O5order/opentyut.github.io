# Git & GitHub 入门

## 为什么学 Git

- 代码版本管理，不再有 `最终版_v3_真的最终版.c` 的困扰
- 团队协作的基础工具
- GitHub 是你未来的技术简历

## 快速上手

### 安装 Git

[git-scm.com](https://git-scm.com/) 下载安装。

安装后打开终端，配置用户名和邮箱：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 基础命令

| 命令 | 说明 |
|------|------|
| `git init` | 初始化仓库 |
| `git add .` | 暂存所有更改 |
| `git commit -m "说明"` | 提交更改 |
| `git push` | 推送到远程 |
| `git pull` | 拉取远程更新 |
| `git clone <url>` | 克隆仓库 |

### 学习资源

- [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [Learn Git Branching](https://learngitbranching.js.org/) — 交互式学习
