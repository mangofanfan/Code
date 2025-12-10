//==============================================================================
// Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。
// 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。
//==============================================================================

import {inBrowser, Theme} from "vitepress";
import 'virtual:group-icons.css' //代码组样式
import './style/index.css'

import "@chinese-fonts/syst/dist/SourceHanSerifCN/result.css"  // 思源宋体
import "cn-fontsource-source-han-sans-sc-vf/font.css"  // 思源黑体
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Light/result.css"  // 霞鹜文楷 * 6
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Medium/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Regular/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-LightItalic/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-MediumItalic/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Italic/result.css"
import "@chinese-fonts/lywkpmydb/dist/LXGWWenKaiScreen/result.css"  // 霞鹜文楷+屏幕阅读 * 2
import "@chinese-fonts/lywkpmydb/dist/LXGWWenKaiMonoScreen/result.css"
import "@chinese-fonts/dyh/dist/SmileySans-Oblique/result.css"  // 得意黑
import "jetbrains-mono"  // JetBrains Mono
import "misans/lib/Normal/MiSans-Bold.min.css"  // MiSans * 2
import "misans/lib/Normal/MiSans-Normal.min.css"

import 'element-plus/dist/index.css'  // Element Plus

// 页面历史
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

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
        app.component('WhatsClass', WhatsClass);
        app.component('FontsComboWidget', FontsComboWidget);
    },
} satisfies Theme;
