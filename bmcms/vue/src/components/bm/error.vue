<script setup lang="ts">
import errorStore from '@/store/useErrorStore.js'
const { name } = defineProps<{ name: string }>()
const store = errorStore()
</script>

<template>
  <div class="bm-error" v-show="store.getError(name)">
    <icon-info theme="outline" />
    {{ store.getError(name) }}
  </div>
</template>

<style lang="scss" scoped></style>
