<template>
    <div class="my">
        <header>
      <div class="iconfont"  @click="handelBackClick">&#xeb15;</div>
      <div class="title">我的京东</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
    <main>
      <div class="head">
        <div class="userInfo">
          <div class="avatar">
            <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="">
          </div>
          <div class="info">
            <div class="info-name">
              <div class="i-n-left">jd_6873cba4be990</div>
              <div class="i-n-right iconfont">&#xe65f;</div>
            </div>
            <div class="info-badge">
              <van-tag round color="#D61742" text-color="#fff" class="i-b-t">京享值</van-tag>
              <van-tag round color="#D61742" text-color="#fff" class="i-b-t">小白信用71.4</van-tag>
            </div>
          </div>
        </div>
        <div class="history">
          <div class="historyItem">
            <p>10</p>
            <p>商品收藏</p>
          </div>
          <div class="historyItem">
            <p>76</p>
            <p>店铺收藏</p>
          </div>
          <div class="historyItem">
            <p>3</p>
            <p>我的足迹</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-box">
          <div class="c-b-Item">
            <p class="iconfont">&#xe601;</p>
            <p>待付款</p>
          </div>
          <div class="c-b-Item">
            <p class="iconfont">&#xe640;</p>
            <p>待收货</p>
          </div>
          <div class="c-b-Item">
            <p class="iconfont">&#xe624;</p>
            <p>退换/售后</p>
          </div>
          <div class="c-b-Item" >
            <p class="iconfont">&#xe600;</p>
            <p>全部订单</p>
          </div>
        </div>
      </div>
    </main>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
// // 点击回退逻辑
const useBackEffect = () => {
  const router = useRouter()
  const handelBackClick = () => {
    router.back()
  }
  return handelBackClick
}
export default {
  name: 'My',
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'flex'
    const { handelBackClick } = useBackEffect()
    return handelBackClick
  }
}
</script>
<style>
@import '../../style/My.css'
</style>
