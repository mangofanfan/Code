//==============================================================================
// Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。
// 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。
//==============================================================================

import {getCookie} from "typescript-cookie";

let root = document.documentElement

export function initFontFamily() {
  const fontFamily = getCookie('fontFamily')
  if (fontFamily) {
    root.style.setProperty('--vp-font-family-base', fontFamily)
    console.log("已经设置页面字体为：", fontFamily)
  }
  const monoFontFamily = getCookie('monoFontFamily')
  if (monoFontFamily) {
    root.style.setProperty('--vp-font-family-mono', monoFontFamily)
    console.log("已经设置代码字体为：", monoFontFamily)
  }
}
