<script setup lang="ts">
const { user } = useUserStore()
const { soft, showButton } = withDefaults(
  defineProps<{
    soft: ModelSoft
    showButton?: boolean
  }>(),
  { showButton: false },
)

const { open } = useUtil()

const { del } = useSoft()
</script>

<template>
  <main class="border rounded-md flex flex-col">
    <div
      class="flex h-full flex-col cursor-pointer"
      @click="open({ name: 'soft.show', params: { id: +soft.id } }, '_blank')">
      <img :src="soft.preview" :alt="soft.title" class="aspect-video object-cover" />
      <h2 class="text-center opacity-90 text-gray-900 p-3">{{ soft.title }}</h2>
      <div class="text-sm opacity-70 px-2 line-clamp-2 flex-grow mb-3 mx-3">
        {{ soft.description }}
      </div>
    </div>

    <div class="flex justify-center py-3 border-t mt-3" v-if="showButton && user?.id == 1">
      <el-button
        type="success"
        plain
        size="small"
        @click="$router.push({ name: 'soft.update', params: { id: +soft.id } })"
        >编辑</el-button
      >
      <el-button type="danger" plain size="small" @click="del(+soft.id)" class="!ml-2">删除</el-button>
    </div>
  </main>
</template>

<style lang="scss"></style>
