<script setup lang="ts">
// import * as yup from 'yup'
// import { ErrorMessage, Field, Form } from 'vee-validate'

const { sid } = defineProps<{ sid: number | undefined }>()
const { collections, findAll, model, add, del } = useComment(sid)
await findAll()
const { exec, time } = useIntervalRequest(20, (data) => {
  return add(data)
})

// const schema = yup.object({
//   content: yup.string().required('内容不能为空').min(0, '内容不能为空'),
// })
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
      <!-- <Form
        :validation-schema="schema"
        #default="{ handleSubmit }"
        :validate-on-mount="false"
        :key="collections.length">
        <Field name="content" class="border" v-model="model.content" :validate-on-input="true"> -->
      <BmMarkdownEditor v-model="model.content" />
      <!-- </Field> -->
      <!-- <ErrorMessage name="content" class="bm-error" as="div" /> -->
      <el-button type="primary" size="default" @click="exec(model)" class="mt-3">发表评论</el-button>
      <!-- </Form> -->
    </section>
  </main>
</template>

<style lang="scss"></style>
