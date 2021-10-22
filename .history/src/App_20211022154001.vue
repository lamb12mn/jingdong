<template>
  <div class="docker" v-model="active">
    <router-link class="docker-item docker-item-active" to="/">
      <div class="iconfont">&#xe751;</div>
      <div class="docker-title">首页</div>
    </router-link>
    <router-link class="docker-item" to="/classify">
      <div class="iconfont">&#xe62f;</div>
      <div class="docker-title">分类</div>
    </router-link>
    <router-link class="docker-item" to="/jingxi">
      <div class="iconfont">&#xe617;</div>
      <div class="docker-title">京喜</div>
    </router-link>
    <router-link class="docker-item" to="/cart">
      <div class="iconfont">&#xe63f;</div>
      <div class="docker-title">购物车</div>
    </router-link>
    <router-link class="docker-item" :to="isLogin ? '/my':'/login'">
      <div class="iconfont">&#xe60b;</div>
      <div class="docker-title" v-html="isLogin ? '未登录' :'我的'"></div>
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import '../src/style/App.css'
</style>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    const active = ref(0)
    const { isLogin } = localStorage
    console.log(isLogin)
    return { isLogin, active }
  }
}
</script>
