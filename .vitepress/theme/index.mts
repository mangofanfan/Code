//==============================================================================
// Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。
// 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。
//==============================================================================

import {inBrowser, Theme} from "vitepress";
import 'virtual:group-icons.css' //代码组样式
import './style/index.css'

import "jetbrains-mono"  // JetBrains Mono

import 'element-plus/dist/index.css'  // Element Plus

// 页面历史
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

// 行内链接预览
import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

// 代码块类型提示
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@shikijs/vitepress-twoslash/style.css'

// 自定义组件
import WhatsClass from "./components/WhatsClass.vue"
import FontsComboWidget from "./components/FontsComboWidget.vue";

import Layout from "./Layout.vue";
import {App} from "@vue/runtime-core";

// noinspection JSUnusedGlobalSymbols
export default{
    Layout,
    enhanceApp({ app }: {app: App}) {// 仅在浏览器环境下加载 Element Plus
        if (inBrowser) {
            // 动态导入 Element Plus，防止构建时报错
            import('element-plus').then((module) => {
                app.use(module.default)
            })
        }
        app.use(NolebaseGitChangelogPlugin);
        app.use(NolebaseInlineLinkPreviewPlugin);
        app.use(TwoslashFloatingVue);
        app.component('WhatsClass', WhatsClass);
        app.component('FontsComboWidget', FontsComboWidget);
    },
} satisfies Theme;
