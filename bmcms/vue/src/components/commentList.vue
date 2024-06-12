<script setup lang="ts">
const { sid } = defineProps<{ sid: number }>()
const { collections, findAll, model, add } = useComment(sid)
await findAll()
</script>

<template>
  <main class="">
    <section
      class="mb-3 border p-3 rounded-sm bg-white shadow-sm opacity-90"
      v-for="comment of collections"
      :key="comment.id">
      {{ comment.content }}

      <div class="bg-gray-50 p-3 border mt-3" v-for="reply of comment.replys" :key="reply.id">
        {{ reply.content }}
      </div>
    </section>

    <section class="py-3">
      <BmMarkdownEditor v-model="model.content" />
      <el-button type="primary" size="default" @click="add" class="mt-3">发表评论</el-button>
    </section>
  </main>
</template>

<style lang="scss"></style>
