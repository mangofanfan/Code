<!--===========================================================================
  = Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。                            =
  = 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。                          =
  ===========================================================================-->

<script setup lang="ts">
import {onMounted} from "vue";

// 导入 VitePress 的所需东西
import { VPBadge } from "vitepress/theme";

let root: HTMLElement;
onMounted(() => {
  root = document.documentElement
})

async function switchFontFamily(fontFamily: string) {
  if (root) {
    root.style.setProperty('--vp-font-family-base', fontFamily)
    const { setCookie } = await import("typescript-cookie");
    setCookie('fontFamily', fontFamily)
  }
}

async function switchMonoFontFamily(fontFamily: string) {
  if (root) {
    root.style.setProperty('--vp-font-family-mono', fontFamily)
    const { setCookie } = await import("typescript-cookie");
    setCookie('monoFontFamily', fontFamily)
  }
}

</script>

<template>
  <br>
  <VPBadge text="选择文本字体，不影响代码字体" type="tip" />
  <VPBadge text="以 cookie 存储在浏览器中" type="info" />
  <br>
  <el-button type="primary" plain
             style="font-family: LXGW Bright,serif"
             @click="() => switchFontFamily('LXGW Bright')"
  >霞鹜文楷（LXGW Bright）</el-button>
  <el-button type="primary"
             style="font-family: LXGW WenKai Screen,serif"
             @click="() => switchFontFamily('LXGW WenKai Screen')"
  >霞鹜文楷（屏幕阅读）</el-button>
  <el-button type="primary" plain
             style="font-family: LXGW WenKai Mono Screen,serif"
             @click="() => switchFontFamily('LXGW WenKai Mono Screen')"
  >霞鹜文楷（屏幕阅读+Mono）</el-button>
  <el-button type="primary"
             style="font-family: 'OPPO Sans',serif"
             @click="() => switchFontFamily('OPPO Sans')"
  >OPPO Sans</el-button>
  <el-button type="primary" plain
             style="font-family: 'MiSans',serif"
             @click="() => switchFontFamily('MiSans')"
  >MiSans</el-button>
  <el-button type="primary"
             style="font-family: 'Inter',serif"
             @click="() => switchFontFamily('Inter')"
  >VitePress Inter</el-button>
  <hr>
  <VPBadge text="选择代码字体，不影响文本字体" type="tip" />
  <VPBadge text="以 cookie 存储在浏览器中" type="info" />
  <VPBadge text="Mono 等宽" type="info" />
  <VPBadge text="可以在本页下方代码块查看效果" type="info" /><br>
  <el-button type="primary"
             style="font-family: 'JetBrains Mono',serif"
             @click="() => switchMonoFontFamily('JetBrains Mono')"
  >JetBrains Mono
  </el-button>
  <el-button type="primary" plain
             style="font-family: 'LXGW WenKai Mono Screen',serif"
             @click="() => switchMonoFontFamily('LXGW WenKai Mono Screen')"
  >霞鹜文楷（屏幕阅读+Mono）
  </el-button>
  <el-button type="primary"
             style="font-family: 'Consolas',serif"
             @click="() => switchMonoFontFamily('Consolas')"
  >VitePress Consolas
  </el-button>
  <br><br>
</template>

<style scoped>
  .el-button {
    margin: 5px;
  }
</style>
