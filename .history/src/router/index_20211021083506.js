import { createRouter, createWebHashHistory } from 'vue-router'
import Shop from '../views/Shop/Shop.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import(/* webpackChunkName: "Classify" */ '../views/Classify/Classify.vue')
  },
  {
    path: '/jingxi',
    name: 'Jingxi',
    component: () => import(/* webpackChunkName: "Jingxi" */ '../views/Jingxi/Jingxi.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Shop/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "My" */ '../views/My/Login.vue')
    // beforeEnter (to, from, next) {
    //   const { isLogin } = localStorage
    //   isLogin ? next({ name: 'My' }) : next({ name: 'Login' })
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/My/Register.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    components: {
      Default: Shop
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
