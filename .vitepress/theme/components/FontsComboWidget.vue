<!--===========================================================================
  = Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。                            =
  = 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。                          =
  ===========================================================================-->

<script setup lang="ts">
import { onMounted } from "vue";

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
    setCookie('fontFamily', fontFamily, { expires: 365 })
  }
}

async function switchMonoFontFamily(fontFamily: string) {
  if (root) {
    root.style.setProperty('--vp-font-family-mono', fontFamily)
    const { setCookie } = await import("typescript-cookie");
    setCookie('monoFontFamily', fontFamily, { expires: 365 })
  }
}

</script>

<template>
  <br>
  <VPBadge text="选择文本字体，不影响代码字体" type="tip" />
  <VPBadge text="以 cookie 存储在浏览器中" type="info" />
  <br>
  <el-button type="primary"
             style="font-family: 'Source Han Serif SC VF',serif"
             @click="() => switchFontFamily('Source Han Serif SC VF')"
  >思源宋体</el-button>
  <el-button type="primary" plain
             style="font-family: LXGW WenKai Screen,serif"
             @click="() => switchFontFamily('LXGW WenKai')"
  >霞鹜文楷</el-button>
  <el-button type="primary"
             style="font-family: LXGW WenKai Mono Screen,serif"
             @click="() => switchFontFamily('LXGW WenKai Mono')"
  >霞鹜文楷（Mono）</el-button>
  <el-button type="primary" plain
             style="font-family: 'OPPO Sans',serif"
             @click="() => switchFontFamily('OPPO Sans')"
  >OPPO Sans</el-button>
  <el-button type="primary"
             style="font-family: 'MiSans',serif"
             @click="() => switchFontFamily('MiSans')"
  >MiSans</el-button>
  <el-button type="primary" plain
             style="font-family: 'Inter',serif"
             @click="() => switchFontFamily('Inter')"
  >VitePress Inter</el-button>
  <br>
  <div class="escape-demo">
    <p><strong>联合国之宗旨为：</strong></p>
    <p>一、维持国际和平及安全；并为此目的：采取有效集体办法，以防止且消除对于和平之威胁，制止侵略行为或其他和平之破坏；并以和平方法且依正义及国际法之原则，调整或解决足以破坏和平之国际争端或情势。</p>
    <p>二、发展国际间以尊重人民平等权利及自决原则为根据之友好关系，并采取其他适当办法，以增强普遍和平。</p>
    <p>三、促成国际合作，以解决国际间属于经济、社会、文化及人类福利性质之国际问题，且不分种族、性别、语言或宗教，增进并激励对于全体人类之人权及基本自由之尊重。</p>
    <p>四、构成一协调各国行动之中心，以达成上述共同目的。</p>
  </div>
  <hr>
  <VPBadge text="选择代码字体，不影响文本字体" type="tip" />
  <VPBadge text="以 cookie 存储在浏览器中" type="info" />
  <VPBadge text="Mono 等宽" type="info" /><br>
  <el-button type="primary"
             style="font-family: 'JetBrains Mono',serif"
             @click="() => switchMonoFontFamily('JetBrains Mono')"
  >JetBrains Mono
  </el-button>
  <el-button type="primary" plain
             style="font-family: 'LXGW WenKai Mono Screen',serif"
             @click="() => switchMonoFontFamily('LXGW WenKai Mono')"
  >霞鹜文楷（Mono）
  </el-button>
  <el-button type="primary"
             style="font-family: 'Consolas',serif"
             @click="() => switchMonoFontFamily('Consolas')"
  >VitePress Consolas
  </el-button>
  <br>
  <div class="escape-demo" style="font-family: var(--vp-font-family-mono),ui-monospace">
    <p><strong>PAGE NOT FOUND</strong></p>
    <p>But if you don't change your direction, and if you keep looking, you may end up where you are heading.</p>
  </div>
</template>

<style scoped lang="scss">
  .el-button {
    margin: 5px;
  }

  .escape-demo {
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    margin: 10px 0;
    padding: 15px 20px;
    font-size: 1.2rem;
    p {
      line-height: 1.6em;
    }
  }
</style>
