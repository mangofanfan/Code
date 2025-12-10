<!--=========================================================================-->
<!-- Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。 -->
<!-- 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。 -->
<!--=========================================================================-->

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, provide } from "vue";
import { useData, useRouter } from "vitepress";
import mediumZoom from "medium-zoom";

const { Layout } = DefaultTheme;
const router = useRouter();
const { isDark } = useData();

// 阅读增强
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
// @ts-ignore
import GiscusComment from "./components/GiscusComment.vue";

// Setup medium zoom with the desired options
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

// Apply medium zoom on load
onMounted(async () => {
  // 导入 初始化字体 方法
  const {initFontFamily} = await import("./font.js");
  setupMediumZoom();
  initFontFamily();
});

// Subscribe to route changes to re-apply medium zoom effect
router.onAfterRouteChange = setupMediumZoom;

// 应用主题切换动画
const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        fill: 'forwards',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
      }
  )
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
    <template #doc-after>
      <GiscusComment />
    </template>
    <template #aside-ads-before>
      <a href="https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAOcJK1olXDYCUF1cCEwWA19MRANLAjZbERscSkAJHTNYRgYKBlMdBgABFhNIVjtBB1sRXgcCU19dFxJSXzI4XF5zKQ9XLRc4ShN-BR17ZA0QJEEHElJROE4XAmwMGVsTXQ8yV19fDk0SBG8PHGslXQcyFTBdD0wUBWwNEmsXXQcBXVlZDUoeM28OHF8XVAcAV1tZAEwnBG8BKwBAMwJRUwoPWEkfUTsOH1glbTYBZFldAV8RcS5aD11nbTYBZF1tOEkWAmsBK2vL05J4URorT01hZDN9TgZUNW9BitDJGTl8A2sNCmslbTY"
         target="_blank">
        <img src="./img/ad-2.png" alt="AD">
      </a><br>
      <a href="https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAMoJK1olXDYDZBoCUBVIMzZNXhpXVhgcAQYNVxRHXXBTTkRHA1ocZAA4VxNTSnVReCd3PlBQJlkPakkWQDkEF2sQXQcBUFxdDkseM2wJGV0TWAECU1ltOEsWMyRmGmsXXQcBXVlZDUoeM28OHF8XVAcDV11ZDEknBG8BKwBAMwJRUwoPWEkfUTsOH1glbTYBZFldAV8RcS5aD11nbTYDZF1tOEkWAmsBK2vL0LZxXCshbUhBWjJKUAtDDQ59itPtGTlnA20AGUolbTYy"
         target="_blank">
        <img src="./img/ad-1.png" alt="AD">
      </a>
    </template>
  </Layout>
</template>

<style>
@import "style/var.css";

.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}

/* 应用切换主题动画 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
