<script setup lang="ts"></script>

<template>
  <main class="bg-white border-t-4 border-orange-600 py-5 shadow-sm">
    <div class="m-auto flex justify-between px-3">
      <router-link to="/" class="flex items-center gap-2 text-2xl opacity-90 text-[#F33A2F] hover:text-[#F33A2F]">
        <icon-youtobe theme="outline" size="28" />
        <span class="font-bold font-sans">bmcms.com</span>
      </router-link>
      <div class="flex gap-3 opacity-90 items-center">
        <div class="hidden md:flex gap-3">
          <a href="http://doc.banmashou.com" target="_blank">文档库</a>
        </div>
        <BmUserAvatarMenu />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
