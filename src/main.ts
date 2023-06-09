import { createApp } from 'vue'
import router from "./router";
import ElementPlus from 'element-plus'
import App from './App.vue'
import './types/types.d.ts'
import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
import 'element-plus/dist/index.css'
import './style.css'
import { MAP_KEY } from "./utils/MapKey";


initAMapApiLoader({
  key: MAP_KEY,
  securityJsCode: 'securityJsCode', // 新版key需要配合安全密钥使用
  //Loca:{
  //  version: '2.0.0'
  //} // 如果需要使用loca组件库，需要加载Loca
})
const app = createApp(App)
app.use(router)
app.use(VueAMap)
app.use(ElementPlus)
app.mount('#app')
