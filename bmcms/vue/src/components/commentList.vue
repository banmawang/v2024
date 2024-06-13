<script setup lang="ts">
const { sid } = defineProps<{ sid: number | undefined }>()
const { collections, findAll, model, add, del } = useComment(sid as number)
await findAll()
const { exec, time } = useIntervalRequest(20, (data) => {
  return add(data)
})
</script>

<template>
  <main class="">
    <section>
      <div v-for="comment of collections" :key="comment.id">
        <CommentItem :comment="comment" @del="del" @add="add" />
        <div class="mb-3 overflow-hidden ml-10 my-2 bg-gray-50">
          <CommentItem v-for="reply of comment.replys" :key="reply.id" :comment="reply" @del="del" @add="add" />
        </div>
      </div>
    </section>
    <!-- 回复框 -->
    <section class="py-3">
      <BmMarkdownEditor v-model="model.content" />
      <el-button type="primary" size="default" @click="exec(model)" class="mt-3">发表评论</el-button>
    </section>
  </main>
</template>

<style lang="scss"></style>
