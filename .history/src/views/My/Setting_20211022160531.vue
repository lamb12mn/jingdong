<template>
    <div class="setting">
        setting
    </div>
</template>

<script>
// // 点击回退逻辑
// const useBackEffect = () => {
//   const router = useRouter()
//   const handelBackClick = () => {
//     router.back()
//   }
//   return handelBackClick
// }
export default {
  name: 'Setting',
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'none'
  }
}
</script>
<style>
@import '../../style/Setting.css';
</style>
