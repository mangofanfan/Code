<!--=========================================================================-->
<!-- Code Space 是位于 GitHub 上的开源项目，发起者为 MangoFanFan。 -->
<!-- 项目部署在 code.mangofanfan.cn，遵循 CC BY / GPL 3.0 协议。 -->
<!--=========================================================================-->

<script setup lang="ts">

</script>

<template>
  <div class="tip custom-block">
    <p class="custom-block-title">贡献/支持 Code Space</p>
    请查看<a href="/common/contribute">贡献</a>页面，帮助 Code Space 完善内容以提供更好的文档服务。<br>
    或者，也可以浅浅支持芒果一下~
    <el-button-group>
      <el-popover
          placement="bottom"
          title="微信 =w"
          trigger="hover"
      >
        <template #reference>
          <el-button type="success" plain>微信</el-button>
        </template>
        <el-image
            src="https://mangofanfan.cn/wp-content/uploads/2025/12/wx.png"
        />
      </el-popover>
      <el-popover
          placement="bottom"
          title="支付宝 =)"
          trigger="hover"
      >
        <template #reference>
          <el-button type="primary" plain>支付宝</el-button>
        </template>
        <el-image
            src="https://mangofanfan.cn/wp-content/uploads/2025/12/zfb.png"
        />
      </el-popover>
      <el-popover
          placement="bottom"
          title="Ko-Fi :P"
          trigger="hover"
      >
        <template #reference>
          <el-button type="danger" plain>Ko-Fi</el-button>
        </template>
        <el-link href="https://ko-fi.com/mangofanfan" target="_blank">点击前往 >>></el-link>
      </el-popover>
    </el-button-group>
  </div>
</template>

<style scoped lang="scss">
  div.tip {
    margin: 20px 0;
  }
</style>
