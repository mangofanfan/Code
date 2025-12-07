import DefaultTheme from "vitepress/theme";
import { h } from 'vue';
import 'virtual:group-icons.css' //代码组样式
import './style/index.css'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css' // Element Plus

import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Light/result.css"  // 霞鹜文楷 * 6
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Medium/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Regular/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-LightItalic/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-MediumItalic/result.css"
import "@chinese-fonts/lxgwwenkaibright/dist/LXGWBright-Italic/result.css"
import "@chinese-fonts/lywkpmydb/dist/LXGWWenKaiScreen/result.css"  // 霞鹜文楷+屏幕阅读 * 2
import "@chinese-fonts/lywkpmydb/dist/LXGWWenKaiMonoScreen/result.css"
import "@chinese-fonts/dyh/dist/SmileySans-Oblique/result.css"  // 得意黑

import "jetbrains-mono"

import "misans/lib/Normal/MiSans-Bold.min.css"
import "misans/lib/Normal/MiSans-Normal.min.css"

// 阅读增强
import {
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

// 页面历史
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

// 自定义组件
import WhatsClass from "./components/WhatsClass.vue"
import GiscusComment from "./components/GiscusComment.vue";
import FontsComboWidget from "./components/FontsComboWidget.vue";

import { initFontFamily } from "./font"
import Layout from "./Layout.vue";

export const Theme: ThemeConfig = {
    extends: DefaultTheme,
    Layout: () => {
        return h(Layout, null, {
            // 为较宽的屏幕的导航栏添加阅读增强菜单
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
            'doc-after': () => h(GiscusComment),
        })
    },
    enhanceApp({ app }) {
        app.use(ElementPlus);
        app.use(NolebaseGitChangelogPlugin);
        app.component('WhatsClass', WhatsClass);
        app.component('FontsComboWidget', FontsComboWidget);
    },
};

export default Theme;
