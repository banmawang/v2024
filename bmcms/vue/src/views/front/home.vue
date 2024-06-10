<script setup lang="ts">
import bmImg from '@/assets/bmcms.png'
const { getAll, collections } = useSoft()
await getAll()
</script>

<template>
  <main class="">
    <section class="flex items-center justify-center flex-col">
      <img :src="bmImg" alt="斑马兽" class="rounded-full h-32 w-32 md:w-60 md:h-60 object-cover" />
      <h1 class="text-5xl md:text-8xl font-extrabold text-orange-600 mt-3">斑马兽作品</h1>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-6">
      <SoftItem v-for="soft of collections?.data" :soft="soft" />
    </section>
  </main>
</template>
