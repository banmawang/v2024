<script setup lang="ts">
import dayjs from 'dayjs'
const { authorize } = useAuth()
const { user } = useUserStore()
const { comment } = defineProps<{ comment: CommentModel }>()
const { model } = useComment(comment.softId)
model.value.commentId = comment.commentId || comment.id
model.value.repliedUserName = comment.user.nickname
const emit = defineEmits<{
  del: [id: number]
  add: [comment: CommentModel]
}>()

const publishComment = () => {
  emit('add', model.value as CommentModel)
  model.value.content = ''
  showTextarea.value = false
}

const showTextarea = ref(false)
</script>

<template>
  <section class="mb-3 border rounded-md bg-white opacity-90">
    <div class="flex justify-between items-baseline p-3 border-b">
      <div class="flex gap-2">
        <a href="" class="flex items-center overflow-hidden group rounded-md flex-shrink-0 w-9 h-9">
          <div
            class="el-image cursor-pointer flex-shrink-0 group-hover:scale-125 object-cover overflow-hidden duration-500 w-9 h-9">
            <img :src="comment.user.avatar" />
          </div>
        </a>
        <div class="flex flex-col text-sm">
          <div class="flex font-bold text-gray-700">
            <span class="hover:text-red-500 duration-300 cursor-pointer">{{ comment.user.nickname }}</span>
            <div class="flex items-center" v-if="comment.repliedUserName">
              <icon-right theme="outline" size="14" />
              <span class="hover:text-red-500 duration-300 cursor-pointer">{{ comment.repliedUserName }}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              <icon-time theme="outline" size="12" />
              {{ dayjs(comment.createdAt).fromNow() }}
            </div>
            <div
              class="flex items-center cursor-pointer hover:text-red-500 duration-300 gap-1"
              @click="showTextarea = !showTextarea">
              <icon-share-two theme="outline" size="12" /> 回复 #{{ comment.id }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex cursor-pointer" v-if="user?.id == comment.userId || user?.id == 1">
        <icon-delete theme="outline" size="12" fill="#333" @click="$emit('del', comment.id)" />
      </div>
    </div>
    <div class="p-3">
      {{ comment.content }}
    </div>
    <div class="p-3" v-if="showTextarea">
      <el-input v-model="model.content" type="textarea" size="default" clearable></el-input>
      <el-button type="primary" size="small" @click="publishComment">发表</el-button>
    </div>
  </section>
</template>

<style lang="scss"></style>
