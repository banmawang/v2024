<script setup lang="ts">
// 用户头像菜单
import BmFullScreen from './fullScreen.vue'
import dayjs from 'dayjs'
import config from '@/config'

const { logout } = useAuth()
const storeUser = useUserStore()
</script>

<template>
  <main class="flex items-center">
    <section v-if="!!storeUser.user" class="flex items-center">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link flex items-center">
          <a class="flex items-center overflow-hidden group flex-shrink-0 w-7 h-7 rounded-sm">
            <div
              class="el-image cursor-pointer flex-shrink-0 group-hover:scale-125 object-cover overflow-hidden duration-500 w-7 h-7 rounded-sm">
              <ElImage :src="storeUser.user.avatar" fit="cover" class="" />
            </div>
          </a>
          <div class="flex flex-col text-xs ml-2 text-gray-600 font-light">
            {{ storeUser.user?.nickname }}
            <span> {{ dayjs(storeUser.user?.createdAt).fromNow() }}注册 </span>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(menu, index) of config.user.avatarMenu" :key="index">
              <router-link :to="{ name: menu.routeName }"> {{ menu.title }} </router-link>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
    <section v-else class="flex items-stretch gap-2">
      <router-link
        :to="{ name: RouteEnum.LOGIN }"
        class="px-3 py-1 flex text-sm items-center border shadow-sm rounded-md bg-slate-100 hover:bg-indigo-500 hover:!text-white duration-300">
        登录
      </router-link>
      <router-link
        :to="{ name: RouteEnum.REGISTER }"
        class="px-3 py-1 flex text-sm items-center border shadow-sm rounded-md bg-slate-100 hover:bg-indigo-500 hover:!text-white duration-300">
        注册
      </router-link>
    </section>
  </main>
</template>
