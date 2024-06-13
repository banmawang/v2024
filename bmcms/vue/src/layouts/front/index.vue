<script lang="ts" setup>
import footerVue from './footer.vue'
</script>
<template>
  <main>
    <Navbar />
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" class="w-full 2xl:w-page mx-auto px-3 lg:mt-2" />
      </template>
    </RouterView>
    <footerVue />
  </main>
</template>
