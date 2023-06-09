import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import getPageTitle from "../utils/getPageTitle";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect:'/main',
    meta: {
      title: '主页'
    },
    component: () => import('../views/home/main.vue'),
    children:[
      {
        path:'main',
        name:'数智公交监管平台',
        meta:{
          title:'数智公交监管平台'
        },
        component:()=>import('../views/home/main.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '/404',
    meta: {
      title: '错误'
    },
    component: () => import('../views/basic/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem('token')
  
  console.log(token);
  console.log(to);

  if (!token && to.name !== '/login') {
    // router.push('./login')
  }
  document.title = getPageTitle(to.meta.title);
  next();
});
export default router
