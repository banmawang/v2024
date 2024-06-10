<script setup lang="ts">
import bmImg from '@/assets/bmcms.png'
const { getAll, collections } = useSoft()
await getAll(1, 100)
</script>

<template>
  <main class="">
    <section class="flex items-center justify-center flex-col">
      <img :src="bmImg" alt="斑马兽" class="rounded-full object-cover w-48 h-48 shadow-inner" />
      <h1 class="text-5xl xl:text-8xl font-extrabold mt-6 text-transparent bg-clip-text">斑马兽作品</h1>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-6">
      <SoftItem v-for="soft of collections?.data" :soft="soft" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  @apply bg-gradient-to-r from-yellow-600 to-red-600;
  background-size: 500%;
  animation: TitleAnimate 5s ease infinite;
}
@keyframes TitleAnimate {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}
</style>
