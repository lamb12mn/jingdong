<template>
  <div class="docker">
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
    <router-link class="docker-item" to="/my">
      <div class="iconfont">&#xe60b;</div>
      <div class="docker-title">未登录</div>
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
.docker {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: #fff;
  align-items: center;
  text-decoration: none;
}
.docker-item {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #666;
  .iconfont{
    font-size: 25px;
  }
}
.docker-title{
  font-size: 10px;
}
</style>
