<script setup lang="ts">
import Watermark from './components/Watermark.vue';
</script>

<template>
  <div class="container">
    <Watermark text="版权所有">
      <div class="content"></div>
    </Watermark>
    <Watermark text="禁止转载" style="background: #28c840;"></Watermark>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.container>* {
  width: 45%;
  background: #fb5e56;
  box-sizing: border-box;
  line-height: 2;
  /* height: 50vh; */
  height: 400px;
  overflow: hidden;
}

.content {
  padding: 10px;
}
</style>
