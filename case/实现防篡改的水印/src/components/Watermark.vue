<template>
  <div class="watermark-container" ref="parent">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useWatermarkBg from "../utils/useWatermarkBg";

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "watermark",
  },
  fontSize: {
    type: Number,
    default: 40,
  },
  gap: {
    type: Number,
    default: 20,
  },
});

const bg = useWatermarkBg(props);
const parent = ref(null);
let div: HTMLElement;

// 重置水印
const resetWatermark = () => {
  if (!parent.value) {
    return;
  }
  if (div) {
    div.remove();
  }
  const { base64, size } = bg.value;
  div = document.createElement("div");
  div.style.position = "absolute";
  div.style.backgroundImage = `url(${base64})`;
  div.style.backgroundSize = `${size}px ${size}px`;
  div.style.backgroundRepeat = "repeat";
  div.style.zIndex = "9999";
  div.style.pointerEvents = "none";
  div.style.inset = "0";
  (parent.value as HTMLElement).appendChild(div);
};

const ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    // 处理删除
    for (const node of entry.removedNodes) {
      if (node === div) {
        resetWatermark();
      }
    }
    // 处理修改
    if (entry.target === div) {
      resetWatermark();
    }
  }
}) as any;

onMounted(() => {
  resetWatermark();
  ob.observe(parent.value, {
    childList: true,
    subtree: true,
    attributes: true,
  });
});
</script>

<style scoped>
.watermark-container {
  position: relative;
}
</style>
