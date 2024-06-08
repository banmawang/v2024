<script setup lang="ts">
const { captcha_value, captcha_key } = defineProps<{
  captcha_value: string
  captcha_key: string
}>()
const emit = defineEmits(['update:captcha_key', 'update:captcha'])
const { getCaptcha, captcha } = useCaptcha()

watch(captcha, () => {
  emit('update:captcha_key', captcha.value?.key)
})

await getCaptcha()
</script>

<template>
  <main>
    <section class="flex gap-1">
      <BmFormInput @input="$emit('update:captcha', $event.target.value)" placeholder="验证码" />
      <div v-html="captcha?.svg" @click="getCaptcha" class="border rounded-md"></div>
      <!-- <el-image :src="captchaValue?.img" class="rounded-md w-[180px] border cursor-pointer" @click="getCaptcha" /> -->
    </section>

    <BmError name="captcha" />
  </main>
</template>

<style lang="scss"></style>
