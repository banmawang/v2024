<script setup lang="ts"></script>

<template>
  <div class="h-screen !w-screen bg-gray-700 flex flex-col justify-center items-center !-mt-0">
    <img src="/images/bmcms.png" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <BmFormButton class="danger ml-2" @click="$router.push({ name: RouteEnum.ADMIN })"> 访问后台 </BmFormButton>
      <BmFormButton class="primary ml-2" @click="$router.push({ name: RouteEnum.LOGIN })"> 用户登录 </BmFormButton>
      <BmFormButton class="success ml-2" @click="$router.push({ name: RouteEnum.MEMBER })"> 修改资料 </BmFormButton>
    </div>
    <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">
      斑马兽 邮箱: banmawang2021@163.com，欢迎来共同学习技术
    </div>
  </div>
</template>
