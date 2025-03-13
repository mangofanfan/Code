import { defineConfig } from 'vitepress'

// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox"

// 代码组图标
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

// 页面历史
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// 导入导航
import {common, c, cpp, python, css, scss, javascript, typescript} from "./sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Code Space",
  description: "多语言代码空间",
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'C', link: '/c/features' },
      { text: 'C++', link: '/cpp/features' },
      { text: 'Python', link: '/python/features' },
      { text: 'CSS', link: '/css/features' },
      { text: 'SCSS', link: '/scss/features' },
      { text: 'JS', link: '/javascript/features' },
      { text: 'TS', link: '/typescript/features' },
    ],

    sidebar: {
      "/": common,
      "/c/": c,
      "/cpp/": cpp,
      "/python/": python,
      "/css/": css,
      "/scss/": scss,
      "/javascript/": javascript,
      "/typescript/": typescript,
    },

    outline: {
      level: [2,4], // 显示2-4级标题
      label: '在本页中: ' // 文字显示
    },

    returnToTopLabel: "返回顶部",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mangofanfan/Code' }
    ],
/*
    search: {
      provider: 'algolia',
      options: {
        appId: 'KN3ULRBK25',
        apiKey: '5e5f1a3e75dfaaeb3ab126aae0990f12',
        indexName: 'fantools-mangofanfan'
      }
    },*/

    footer: {
      message: 'License: GPL-v3. 文本协议 CC-BY',
      copyright: '芒果帆帆 - 帆域网络 - 备案 <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2024110906号</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    editLink: {
      pattern: 'https://github.com/mangofanfan/Code/edit/master/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
  },

  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
      md.use(groupIconMdPlugin) //代码组图标
    },
    lineNumbers: true,
  },

  vite: {
    // 阅读增强
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },

    plugins: [
      groupIconVitePlugin(
          {
            customIcon: {
              python: localIconLoader(import.meta.url, '../public/svg/python-icon.svg'), //本地ts图标导入
              js: 'logos:javascript', //js图标
              md: 'logos:markdown', //markdown图标
              css: 'logos:css-3', //css图标
            },
          }
      ),
      GitChangelog({
          // 填写在此处填写您的仓库链接
          repoURL: () => 'https://github.com/mangofanfan/Code',
          mapAuthors: [
            {
              name: "MangoFanFan_",
              username: "mangofanfan",
              mapByEmailAliases: "mangofanfanw@icloud.com",
              mapByNameAliases: ["MangoFanFan", "MangoFanFan_"]
            }
          ]
      }),
      GitChangelogMarkdownSection(),
    ],
  },
})
