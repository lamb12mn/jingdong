<template>
    <div class="my">
        My
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
  name: 'My',
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'flex'
  }
}
</script>
