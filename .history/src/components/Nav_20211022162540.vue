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
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })
  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)
  return { show, toastMessage, showToast }
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
