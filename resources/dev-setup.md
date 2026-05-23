# 开发环境配置

## Windows 用户

### 推荐方案：WSL2

Windows 做开发的最佳实践是使用 WSL2（Windows Subsystem for Linux）。

1. 打开 PowerShell（管理员），运行：
   ```powershell
   wsl --install
   ```
2. 重启电脑
3. 设置 Ubuntu 用户名和密码

### 必备软件清单

| 软件 | 用途 | 下载 |
|------|------|------|
| VS Code | 主力编辑器 | [code.visualstudio.com](https://code.visualstudio.com/) |
| Git | 版本控制 | [git-scm.com](https://git-scm.com/) |
| Node.js | JavaScript 运行时 | [nodejs.org](https://nodejs.org/) |
| Python | 脚本和数据处理 | [python.org](https://www.python.org/) |
| Terminal | 终端模拟器 | Windows Terminal (Microsoft Store) |

### VS Code 推荐插件

- Chinese (Simplified) Language Pack
- Prettier - Code formatter
- ESLint
- GitLens
- WSL (如果使用 WSL)
