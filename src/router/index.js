import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue' //直接导入

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/home'  //路由定向跳转
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')   //按需导入
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart/Cart.vue')   //按需导入
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail/Detail.vue')   //按需导入
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order/Order.vue')   //按需导入
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
