<script setup lang="ts">
const { collections, getAll } = useSoft()
await getAll()
</script>

<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }">
    <template #header>
      <div class="flex justify-between items-center">
        软件管理
        <el-button type="primary" size="default" @click="$router.push({ name: 'soft.create' })">上架软件</el-button>
      </div>
    </template>
    <main v-if="collections" class="grid grid-cols-5 gap-2">
      <SoftItem v-for="soft of collections.data" class="border rounded-md" :soft="soft" :show-button="true" />
    </main>
  </el-card>
</template>

<style lang="scss"></style>
