<script setup lang="ts">
const { model, add } = useSoft()
</script>

<template>
  <el-card shadow="never" :body-style="{ padding: '20px' }">
    <template #header> 添加软件 </template>
    <el-form :model="model" label-width="80px" :inline="false" size="default">
      <el-form-item label="软件标题">
        <el-input v-model="model.title"></el-input>
        <BmError name="title" />
      </el-form-item>
      <el-form-item label="软件简介">
        <el-input v-model="model.description"></el-input>
        <BmError name="description" />
      </el-form-item>
      <el-form-item label="预览图">
        <div class="flex flex-col">
          <BmUploadSingleImage v-model="model.preview" />
          <BmError name="preview" />
        </div>
      </el-form-item>
      <el-form-item label="使用说明">
        <BmMarkdownEditor v-model="model.content" />
        <BmError name="content" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">立即创建</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss"></style>
