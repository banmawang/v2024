<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
import FooterVue from '@renderer/components/footer.vue'
import packageJson from '../../../../package.json'

const handleInput = (value: number, name: string) => {
  if (value.toString().startsWith('-')) {
    config.clock.timing[name] = 0
  }
}
</script>

<template>
  <main class="p-3 text-white bg-white bg-opacity-30 rounded-lg select-none drag">
    <div class="bg-[#34495e] rounded-lg w-full p-2 overflow-y-auto nodrag">
      <div class="card font-serif">
        <h2>时钟颜色</h2>
        <div class="body">
          <div class="block">
            背景颜色
            <!-- <el-color-picker v-model="config.clock.bgColor" /> -->
            <input v-model="config.clock.bgColor" type="color" />
          </div>
          <div class="block ml-20">
            文字颜色
            <!-- <el-color-picker v-model="config.clock.color" /> -->
            <input v-model="config.clock.color" type="color" />
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="font-serif">倒计时</h2>
        <div class="card flex gap-2">
          <div class="gap-2">
            <span class="font-serif">时：</span>
            <el-input
              v-model="config.clock.timing.hour"
              :min="0"
              :step="1"
              type="number"
              size="small"
              @input="handleInput(config.clock.timing.hour, 'hour')"
            />
          </div>
          <div class="items-center gap-2">
            <span class="font-serif">分：</span>
            <el-input
              v-model="config.clock.timing.minute"
              :min="0"
              :step="1"
              type="number"
              size="small"
              @input="handleInput(config.clock.timing.minute, 'minute')"
            />
          </div>
          <div class="items-center gap-2">
            <span class="font-serif">秒：</span>
            <el-input
              v-model="config.clock.timing.second"
              :min="0"
              :step="1"
              type="number"
              size="small"
              @input="handleInput(config.clock.timing.second, 'second')"
            />
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="font-serif">底部信息</h2>
        <div class="body">
          <div class="block">
            背景颜色
            <!-- <el-color-picker v-model="config.footer.bgColor" /> -->
            <input v-model="config.footer.bgColor" type="color" />
          </div>
          <div class="block ml-20">
            文字颜色
            <!-- <el-color-picker v-model="config.footer.color" /> -->
            <input v-model="config.footer.color" type="color" />
          </div>
        </div>
        <div class="body font-serif">
          <div class="block w-full">
            文字内容
            <el-input v-model="config.footer.content" size="small" maxlength="10" />
          </div>
        </div>
        <div class="body">
          <div class="block w-full">
            自动隐藏
            <el-radio-group v-model="config.footer.isShow" size="small">
              <el-radio-button :value="true">显示</el-radio-button>
              <el-radio-button :value="false">隐藏</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="body text-center text-md flex flex-col gap-1 mt-5">
        <div class="text-orange-300 font-serif font-bold">斑马兽作品</div>
        <div class="text-sm">
          <span>微信：</span>
          <span>banmashou2021</span>
        </div>
        <div class="opacity-70 text-sm">版本号：{{ packageJson.version }}</div>
      </div>
    </div>
  </main>
  <FooterVue />
</template>

<style lang="scss">
h2 {
  @apply text-sm opacity-80 font-bold  mb-5 text-center pb-3;
}
.card {
  @apply w-full p-2 rounded-lg mb-2 bg-[#2c3e50];
  .body {
    @apply flex gap-2 p-1 rounded-md;
    .block {
      @apply flex flex-col text-xs gap-2;
      -webkit-app-region: no-drag;
    }
  }
}

.el-popper {
  -webkit-app-region: no-drag;
}
</style>
