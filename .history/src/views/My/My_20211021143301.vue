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
            <div class="info-name">jd_6873cba4be990</div>
            <div class="info-badge"></div>
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
