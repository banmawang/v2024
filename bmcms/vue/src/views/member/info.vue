<script setup lang="ts">
const tab = ref('info')
const { update } = useUser()
const { user } = useUserStore()
</script>

<template>
  <main v-if="user">
    <el-tabs v-model="tab" type="card" tab-position="top" @tab-click="">
      <el-tab-pane label="基本资料" name="info">
        <el-form label-width="80px" class="border p-5 rounded-lg">
          <el-form-item label="帐号">
            <el-input placeholder="起个有个性的昵称吧" v-model="user.name" disabled></el-input>
            <BmError name="name" />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input placeholder="起个有个性的昵称吧" v-model="user.nickname"></el-input>
            <BmError name="name" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="update(user)">确定修改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="设置头像" name="avatar">
        <el-form label-width="80px" :inline="false" size="large" class="border p-5 rounded-lg">
          <BmUploadSingleImage v-model="user.avatar" @finish="update(user)" />
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>
