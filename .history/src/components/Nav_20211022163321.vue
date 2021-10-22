<template>
   <header>
      <div class="iconfont" @click="handelBackClick">&#xeb15;</div>
      <div class="title">{{message}}</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: {
    message: {
      type: String,
      default: '头部标题'
    },
    handelBackClick: Function
  }
}
export const useBackEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })
  const { show, toastMessage } = toRefs(toastData)
  return { show, toastMessage }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: rgba(0, 0, 0, .35);
  border-radius: 5px;
  color: #FFF;
}
</style>
