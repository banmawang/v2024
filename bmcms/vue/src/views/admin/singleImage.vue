<script setup lang="ts">
import { ref } from 'vue'
const file = ref('')
</script>

<template>
  <BmUploadSingleImage v-model="file" />
</template>
