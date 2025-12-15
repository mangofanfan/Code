//==============================================================================
// Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。
// 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。
//==============================================================================

import {defineConfig} from 'vitepress'

// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox"

// 代码组图标
import {groupIconMdPlugin, groupIconVitePlugin, localIconLoader} from 'vitepress-plugin-group-icons'

// 页面历史
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// 行内链接预览
import {
  InlineLinkPreviewElementTransform
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

// 代码块类型提示
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";

// 导入导航
import {common, c, cpp, java, python, web_front} from "./sidebar.js"

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    lang: "zh-CN",
    title: "Code Space",
    description: "多语言代码空间",
    head: [
      // 添加图标
      ['link', {rel: 'icon', href: '/favicon.ico'}],
      // 思源宋体
      ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-source-han-serif-sc-vf@1.0.9/font.min.css'}],
      // 霞鹜文楷 * 6
      ['link', {rel: 'stylesheet', href: 'https://moe-cdn.mangofanfan.cn/fonts/fonts/LXGWWenKai-Light/LXGWWenKai-Light/result.css'}],
      ['link', {rel: 'stylesheet', href: 'https://moe-cdn.mangofanfan.cn/fonts/fonts/LXGWWenKai-Medium/LXGWWenKai-Medium/result.css'}],
      ['link', {rel: 'stylesheet', href: 'https://moe-cdn.mangofanfan.cn/fonts/fonts/LXGWWenKai-Regular/LXGWWenKai-Regular/result.css'}],
      ['link', {rel: 'stylesheet', href: 'https://moe-cdn.mangofanfan.cn/fonts/fonts/LXGWWenKaiMono-Light/LXGWWenKaiMono-Light/result.css'}],
      ['link', {rel: 'stylesheet', href: 'https://moe-cdn.mangofanfan.cn/fonts/fonts/LXGWWenKaiMono-Medium/LXGWWenKaiMono-Medium/result.css'}],
      ['link', {rel: 'stylesheet', href: 'https://moe-cdn.mangofanfan.cn/fonts/fonts/LXGWWenKaiMono-Regular/LXGWWenKaiMono-Regular/result.css'}],
      // 得意黑
      // ['link', {rel: 'stylesheet', href: 'https://chinese-fonts-cdn.deno.dev/packages/dyh/dist/SmileySans-Oblique/result.css'}],
      // MiSans
      ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Medium.min.css'}],
      ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Bold.min.css'}],
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        {text: '食用', link: '/common/start'},
        {
          text: '语言', items: [
            {text: 'C', link: '/c/features'},
            {text: 'C++', link: '/cpp/features'},
            {text: 'Java', link: '/java/features'},
            {text: 'Python', link: '/python/features'},
            {text: 'Web 开发', link: '/web-front/features'},
          ]
        },
      ],

      sidebar: {
        "/": common,
        "/c/": c,
        "/cpp/": cpp,
        "/java/": java,
        "/python/": python,
        "/web-front/": web_front,
      },

      outline: {
        level: [2, 4], // 显示2-4级标题
        label: '在本页中: ' // 文字显示
      },

      returnToTopLabel: "返回顶部",

      socialLinks: [
        {icon: 'github', link: 'https://github.com/mangofanfan/Code'}
      ],

      search: {
        provider: 'algolia',
        options: {
          appId: '64M9HSA94L',
          apiKey: '16e484639f0be9ad4f7f5e95dee714bb',
          indexName: 'crawler_code-space'
        }
      },

      footer: {
        message: 'License: GPL-v3. 文本协议 CC-BY',
        copyright: '<a href="https://code.mangofanfan.cn/sitemap.xml">站点地图</a> - 备案 <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2024110906号</a>',
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

    sitemap: {
      hostname: "https://code.mangofanfan.cn"
    },

    markdown: {
      codeTransformers: [
        transformerTwoslash()
      ],
      config: (md) => {
        // Use lightbox plugin
        md.use(lightbox, {});
        md.use(groupIconMdPlugin); //代码组图标
        md.use(InlineLinkPreviewElementTransform);
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
          '@nolebase/vitepress-plugin-inline-link-preview/client',
        ],
      },
      ssr: {
        noExternal: [
          // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
          '@nolebase/vitepress-plugin-enhanced-readabilities',
          '@nolebase/ui',
          '@nolebase/vitepress-plugin-inline-link-preview',
        ],
      },

      plugins: [
        groupIconVitePlugin(
          {
            customIcon: {
              python: localIconLoader(import.meta.url, '../public/svg/python-icon.svg'),
              c: localIconLoader(import.meta.url, '../public/svg/c-icon.svg'),
              h: localIconLoader(import.meta.url, '../public/svg/c-icon.svg'),
              cpp: localIconLoader(import.meta.url, '../public/svg/c++-icon.svg'),
              cs: localIconLoader(import.meta.url, '../public/svg/c#-icon.svg'),
              java: localIconLoader(import.meta.url, '../public/svg/java-icon.svg'),
              js: 'logos:javascript', //js图标
              md: 'logos:markdown', //markdown图标
              css: 'logos:css-3', //css图标
            },
          }
        ),
        GitChangelog({
          repoURL: () => 'https://github.com/mangofanfan/Code',
          mapAuthors: [
            {
              name: "MangoFanFan_",
              username: "mangofanfan",
              mapByEmailAliases: ["mangofanfanw@icloud.com"],
              mapByNameAliases: ["MangoFanFan", "MangoFanFan_", "MangoFanFanw"]
            }
          ]
        }),
        GitChangelogMarkdownSection(),
      ],
    },
  }
)
