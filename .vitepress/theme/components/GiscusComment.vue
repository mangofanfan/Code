<template>
  <div style="margin-top: 24px">
    <Giscus
        id="comments"
        repo="mangofanfan/Code"
        host="code.mangofanfan.cn"
        repoid="R_kgDOOH1lvA"
        category="General"
        categoryid="DIC_kwDOOH1lvM4CoH-9"
        mapping=""
        strict=1
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        crossorigin="anonymous"
        loading="lazy"
        lang="zh-CN"
        :theme="isDark ? 'dark' : 'light'"
        :key="route.path"
    ></Giscus>
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>