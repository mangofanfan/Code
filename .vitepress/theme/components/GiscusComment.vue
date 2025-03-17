<template>
  <div style="margin-top: 24px">
    <Giscus
        id="comments"
        repo="mangofanfan/Code"
        repoid="R_kgDOOH1lvA"
        category="General"
        categoryid="DIC_kwDOOH1lvM4CoH--"
        mapping="pathname"
        term="欸嘿😊QAQ"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        loading="lazy"
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