<script setup lang="ts">
import memberNavbar from './memberNavbar.vue'
import UserBlock from './userBlock.vue'
import config from '@/config'
const active = ref('')
</script>
<template>
  <main class="flex flex-col flex-1 justify-start">
    <!-- <memberNavbar /> -->
    <Navbar />
    <section class="2xl:w-page 2xl:mx-auto mt-5 flex flex-col md:flex-row md:items-start gap-5 p-2">
      <div class="md:w-[160px] md:block">
        <UserBlock class="hidden md:block" />
        <div class="menu">
          <router-link
            v-for="(menu, index) of config.member.menu"
            :key="index"
            :to="{ name: menu.routeName }"
            :class="{ active: $route.name == menu.routeName }"
            @click="active = menu.routeName">
            {{ menu.title }}
          </router-link>
        </div>
      </div>
      <RouterView #default="{ Component, route }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense>
              <component :is="Component" :key="route.fullPath" class="bg-white p-5 rounded-lg flex-1" />
            </Suspense>
          </KeepAlive>
        </template>
      </RouterView>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.menu {
  @apply flex md:flex-col overflow-hidden rounded-md lg:mt-3;
  a {
    @apply bg-white flex py-3 text-sm px-5 border-b opacity-90 text-gray-700 duration-300;
    &.active {
      @apply bg-gray-200;
    }
  }
}
</style>
