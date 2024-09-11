<script setup lang="ts">
import { AlarmClock, Refresh, Time } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
const rputer = useRouter()
const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
  rputer.push({ name: 'clock' })
}

const refresh = inject<() => void>('refresh')
</script>

<template>
  <main
    class="nodrag rounded-md flex justify-center items-center gap-1 cursor-pointer"
    :style="{ color: config.footer.color }"
  >
    <div v-if="$route.name !== 'config'" @click="toggle">
      <alarm-clock v-if="config.clock.type == 'timing'" theme="outline" size="20" />
      <Time v-else theme="outline" size="20" />
    </div>
    <div v-if="$route.name !== 'config'">
      <Refresh v-if="config.clock.type == 'timing'" theme="outline" size="20" @click="refresh" />
    </div>
    <div class="flex gap-2 text-sm">
      <router-link v-if="$route.name === 'clock'" :to="{ name: 'config' }">配置</router-link>
      <router-link v-else :to="{ name: 'clock' }">时钟</router-link>
    </div>
  </main>
</template>

<style lang="scss"></style>
