## 项目介绍

banmashou-vue 帮助大家加快前端项目的开发，本项目提供了前端开发的很多基础功能。使用 vite、typescript、vue3、element-plus、pinia、vue-router、axios、tailwindcss 等技术开发。

> 希望大家为本项目加个 Star，这样我们会更有动力，谢谢你。

**项目特点**

- 组件自动加载
- 提供丰富的组件
- 支持 typescript
- 使用 vue3+pinia 等新技术
- 项目结构清晰，方便快速开发
- 全局表单验证
- tailwindcss 与 element-plus 样式控制
- 多个后台管理界面
- 移动端自适应用
- 基于 token 身份验证

**在线文档**

请查看[在线手册](https://doc.banmashou.com)学习使用，同时 [斑马兽](https://www.banmashou.com/) 也提供了丰富的视频教程。

### 作者

开发者 [斑马兽](https://www.banmashou.com)

### 版本库

我会将项目提交到 [github](https://github.com/banmashou/vue) 与 [gitee](https://gitee.com/banmashou/vue) 两个版本库。

## 安装项目

现在我们来安装前端脚手架项目，我介绍三种安装方式

安装后修改.env 文件内容: **VITE_MOCK_ENABLE=true**，这样可以使用 mock 数据查看效果，如果你有后台数据记得设置为**false**。

### GIT

通过 [github](https://github.com/banmawang/vue) 或 [gitee](https://gitee.com/banmashou/vue) 下载源码进行安装

```
$ git clone https://gitee.com/banmashou/vue banmashou-vue
$ cd banmashou-vue
$ npm install
$ npm run dev
```

### CLI

斑马兽编写了 `banmashou-vue` 命令，帮助你进行项目安装。

**全局安装**

首先全局安装 `banmashou-vue` 命令

```
npm install -g banmashou-vue
#或
pnpm add -g banmashou-vue
```

然后执行 `banmashou-vue` 命令，按提示进行操作

```
➜  code banmashou-vue
  _                                     _
 | |__   __ _ _ __  _ __ ___   __ _ ___| |__   ___  _   _   ___ ___  _ __ ___
 | '_ \ / _` | '_ \| '_ ` _ \ / _` / __| '_ \ / _ \| | | | / __/ _ \| '_ ` _ \
 | |_) | (_| | | | | | | | | | (_| \__ \ | | | (_) | |_| || (_| (_) | | | | | |
 |_.__/ \__,_|_| |_|_| |_| |_|\__,_|___/_| |_|\___/ \__,_(_)___\___/|_| |_| |_|

欢迎使用斑马兽前端脚手架
? 请输入目录名 bm
✔ 项目创建成功，请依次执行以下命令
cd bm
npm install
npm run dev
```

**项目安装**

如果只想在项目中使用 banmashou-vue，使用 npx 是简单的

首先在项目中安装 banmashou-vue

```
pnpm add banmashou-vue
#或
npm install banmashou-vue
```

然后执行命令安装项目

```
npx banmashou-vue
```

## 更新项目

从 [github](https://github.com/banmawang/vue) 或 [gitee](https://gitee.com/banmashou/vue) 下载项目，然后替换除 **src** 目录以外的文件。
