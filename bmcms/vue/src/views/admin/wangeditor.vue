<script setup lang="ts">
const content = ref('斑马兽')
</script>

<template>
  <div>
    <BmWangEditor v-model="content" :height="300" />
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3">
      <template #header> 预览 </template>
      {{ content }}
    </el-card>
  </div>
</template>
