<script setup lang="ts">
const { sid } = defineProps<{ sid: number }>()
const { collections, findAll, model, add } = useComment(sid)
await findAll()
</script>

<template>
  <main class="" v-if="collections.length">
    <CommentItem v-for="comment of collections" :key="comment.id" :comment="comment" />
    <section class="py-3">
      <BmMarkdownEditor v-model="model.content" />
      <el-button type="primary" size="default" @click="add" class="mt-3">发表评论</el-button>
    </section>
  </main>
</template>

<style lang="scss"></style>
