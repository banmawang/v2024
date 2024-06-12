<script setup lang="ts">
import dayjs from 'dayjs'
const { comment } = defineProps<{ comment: CommentModel }>()
const showTextarea = ref(false)
const { authorize } = useAuth()
const emit = defineEmits<{
  del: [id: number]
}>()
</script>

<template>
  <section class="mb-3 border rounded-md bg-white opacity-90">
    <div class="flex justify-between items-baseline p-2 border-b">
      <div class="flex gap-2">
        <img :src="comment.user.avatar" class="w-8 h-8 rounded-full" />
        <div class="flex flex-col text-xs">
          {{ comment.user.nickname }}
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <icon-time theme="outline" size="12" fill="#333" />
              {{ dayjs(comment.createdAt).fromNow() }}
            </div>
            <div
              class="flex hover:text-red-500 duration-300 items-center cursor-pointer select-none"
              @click="showTextarea = !showTextarea">
              <icon-share-two theme="outline" size="12" />回复
            </div>
          </div>
        </div>
      </div>
      <div class="flex cursor-pointer" v-if="authorize(comment.id)">
        <icon-delete theme="outline" size="12" fill="#333" @click="$emit('del', comment.id)" />
      </div>
    </div>
    <div class="p-3">
      {{ comment.content }}
    </div>
    <div class="p-3" v-if="showTextarea">
      <el-input type="textarea" rows="5" size="default" clearable @change=""></el-input>
    </div>
  </section>
</template>

<style lang="scss"></style>
