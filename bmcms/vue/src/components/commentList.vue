<script setup lang="ts">
const { sid } = defineProps<{ sid: number }>()
const { collections, findAll } = useComment(sid)
await findAll()
</script>

<template>
  <main class="">
    <section
      class="border p-3 rounded-sm bg-white shadow-sm mb-3 opacity-90"
      v-for="comment of collections"
      :key="comment.id">
      {{ comment.content }}
    </section>
  </main>
</template>

<style lang="scss"></style>
