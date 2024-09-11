import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/route'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
