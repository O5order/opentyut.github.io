import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenTYUT',
  description: '开放式太原理工大学计算机学习资源站',
  lang: 'zh-CN',
  base: '/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习指南', link: '/guide/' },
      { text: '外部资源', link: '/resources' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '学习指南',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '大一上学期', link: '/guide/semester-1' },
            { text: '大一下学期', link: '/guide/semester-2' },
            { text: '大二上学期', link: '/guide/semester-3' },
            { text: '大二下学期', link: '/guide/semester-4' },
          ]
        },
        {
          text: '常用工具',
          items: [
            { text: '开发环境配置', link: '/guide/dev-setup' },
            { text: 'Git & GitHub', link: '/guide/git' },
            { text: '推荐书单', link: '/guide/books' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opentyut/opentyut' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Made with ❤️ by TYUT alumni',
      copyright: 'Copyright © 2026 OpenTYUT'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: {
      text: '最后更新'
    }
  },

  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
