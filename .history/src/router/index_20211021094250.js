import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue'),
    children: [
      {
        name: 'Shop',
        path: 'shop',
        component: () => import('../views/Shop/Shop.vue')
      }
    ]
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
  }
  // {
  //   path: '/shop',
  //   name: 'Shop',
  //   component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop/Shop.vue')
  // },
  // {
  //   path: '/shop?:id',
  //   name: 'Shop',
  //   component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop/Shop.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
