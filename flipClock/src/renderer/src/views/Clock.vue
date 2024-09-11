<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted, provide, watch } from 'vue'
import '@renderer/assets/flipClock.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
import FooterVue from '@renderer/components/footer.vue'

const { config } = useConfigStore()
const instance = new FlipClock({ el: '#bm', ...config.clock })

watch(
  () => config.clock.type,
  () => {
    instance
      .destroy()
      .config({ el: '#bm', ...config.clock })
      .render()
  }
)

onMounted(() => {
  instance.render()
})

// 刷新倒计时
const refresh = () => {
  if (config.clock.type == 'clock') return
  instance
    .destroy()
    .config({ el: '#bm', ...config.clock })
    .render()
}

provide('refresh', refresh)
</script>

<template>
  <main>
    <div
      id="bm"
      class="drag"
      :style="{ '--bgColor': config.clock.bgColor, '--color': config.clock.color }"
      @dblclick="refresh"
    ></div>
    <FooterVue />
  </main>
</template>

<style lang="scss"></style>
