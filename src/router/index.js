import { createRouter, createWebHashHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "Login" */ '../views/My/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/My/Register.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "My" */ '../views/My/My.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "Goods" */ '../views/Goods/Goods.vue')
  },
  {
    path: '/coupons',
    name: 'Coupons',
    component: () => import(/* webpackChunkName: "Coupons" */ '../views/My/Coupons.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Coupons" */ '../views/My/Order.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})
export default router
