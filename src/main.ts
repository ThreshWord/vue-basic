import { createApp } from 'vue'
import router from "./router";
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style.css'
import { adapt } from './utils/adpt.ts'
console.log(import.meta.env.NODE_ENV);
console.log(import.meta.env.MODE);
console.log(import.meta.env.VITE_APP_BASE_API);
// app.config.globalProperties.$message = ElNotification
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
adapt(app)
