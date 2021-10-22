<template>
    <div class="my">
        <header>
      <div class="iconfont"  @click="handelBackClick">&#xeb15;</div>
      <div class="title">我的京东</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
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
