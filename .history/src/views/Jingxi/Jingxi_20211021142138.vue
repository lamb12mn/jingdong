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
     <!-- {{items}} -->
     <van-tabs v-model:active="active" class="titleTab">
  <van-tab v-for="item in items" :title="item.text" :key="item.id">
    <div v-for="product in item.products" :key="product.id">
      <p style="font-size:16px;font-weight:bold">{{product.text}}</p>
      <van-card
      v-for="list in product.list"
      :key="list.id"
      :num="list.exit"
      :price="list.price"
      :desc="list.text"
      :title="item.tag"
      :thumb="list.img"
>
  <template #tags>
    <van-tag plain type="danger">已售{{list.sale}}</van-tag>
    <van-tag color="#7232dd" plain>库存{{list.exit}}</van-tag>
  </template>
  <template #footer>
    <van-button size="mini" color="#7232dd">收藏</van-button>
    <van-button size="mini" color="linear-gradient(to right, #ff6034, #ee0a24)">加入购物车</van-button>
  </template>
</van-card>
    </div>
  </van-tab>
</van-tabs>
   </div>
 </main>
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../config/request'
// 获取标签栏数据
const useTabEffect = () => {
  const data = reactive({ items: {} })
  const getItemData = async () => {
    // const route = useRoute()
    const result = await get('/shop')
    // console.log(result)
    if (result.code === 0 && result.data) {
      data.items = result.data
      // console.log(result.data)
    }
  }
  const { items } = toRefs(data)
  return { items, getItemData }
}
export default {
  name: 'Jingxi',
  setup () {
    const { items, getItemData } = useTabEffect()
    getItemData()
    // console.log(items)
    return { items, getItemData }
  }
}
</script>
<style lang="scss">
@import '../../style/Jingxi.css'
</style>
