<template>
<div class="jingxi">
 <header>
   <img src="https://img20.360buyimg.com/img/s750x380_jfs/t1/212594/16/1174/71023/616fd5bdE13697514/73789da51e32bdbc.png" alt="">
 </header>
 <main>
   <div class="banner">
     <img src="https://img11.360buyimg.com/img/s710x180_jfs/t1/198412/18/7768/56876/613af96bEc83a5d1e/65f2e14c023cdc91.jpg" alt="">
   </div>
   <div class="content">
     <van-tabs v-model:active="active" class="titleTab">
  <van-tab v-for="value in 8" :title="'标签 ' + value">
    内容 {{ value }}
  </van-tab>
</van-tabs>
   </div>
 </main>
</div>
</template>

<script>
export default {
  name: 'Jingxi',
  setup () {
  }
}
</script>
<style lang="scss">
@import '../../style/Jingxi.css'
</style>
