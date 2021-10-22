<template>
   <header>
      <div class="iconfont" @click="handelBackClick">&#xeb15;</div>
      <div class="title">{{message}}</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
</template>

<script>
import { useRouter } from 'vue-router'
export const useBackEffect = () => {
  const handelBackClick = () => {
    const router = useRouter()
    router.back()
  }
  return { handelBackClick }
}
export default {
  props: {
    message: {
      type: String
    },
    handelBackClick: Function
  }
}
</script>

<style lang="css" scoped>
header {
    width: 100%;
    height: .93333rem;
    display: flex;
    font-size: .4rem;
    background: #fff;
    border-bottom: .01333rem solid #e5e5e5
}

header .iconfont {
    width: .93333rem;
    height: .93333rem;
    line-height: .93333rem;
    text-align: center;
    font-size: .48rem
}

header .title {
    height: .93333rem;
    flex: 1;
    text-align: center;
    line-height: .93333rem
}
</style>
