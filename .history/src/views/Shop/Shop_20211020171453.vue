<template>
    <div id="serch">
      <div class="left-callback" @click="backClick">
        <span>《</span>
      </div>
      <div class="right">
        <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      </div>
    </div>
    <div class="shop">
      <van-card
      :tag="items[shopId].tag"
      :price="items[shopId].price"
      :desc="items[shopId].info"
      :title="items[shopId].name"
      :thumb="items[shopId].img"
      >
      <template #tags>
            <van-tag plain type="danger">{{ items[shopId].tags[0] }}</van-tag>
            <van-tag plain type="danger">{{ items[shopId].tags[1] }}</van-tag>
      </template>
      </van-card>

    </div>
    <van-tree-select
        class="body-center"
        v-model:main-active-index="activeIndex"
        height="100%"
        :items="item[shopId].products"
      >
       <template #content>
          <div
            class="content"
            v-for="ite in item[shopId].products"
            :key="ite.id"
          >
            <div v-if="activeIndex == ite.id">
              <van-card
              class="goods"
                v-for="(it, index) in ite.list"
                :key="index"
                :num=" it.count|| 0"
                :price="it.price"
                origin-price="10.00"
                :desc="it.text"
                :title="item[shopId].tag"
                :thumb="it.img"
              >
                <template #tags>
                  <van-tag plain type="danger">已售{{it.sale}}</van-tag>
                  <van-tag color="#7232dd" plain>剩余{{it.exit}}</van-tag>
                </template>
                <template #footer>
                  <van-button v-if="it.count!==0" size="mini" @click="() => { changeCartItemInfo(shopId,activeIndex, it.id, it, -1) }">-</van-button>
                  <van-button size="mini">{{it.count || 0}}</van-button>
                  <van-button v-if="it.exit!==0" size="mini" @click="() => { changeCartItemInfo(shopId,activeIndex,it.id, it, 1) }">+</van-button>
                </template>
              </van-card>
            </div>
          </div>
          <div>
              <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
              <van-checkbox v-model="checked">全选</van-checkbox>
              <template #tip>
                你的收货地址不支持同城送, <span @click="onClickLink">修改地址</span>
              </template>
              </van-submit-bar>
          </div>
        </template>
  </van-tree-select>
</template>
<style scoped lang="scss">
#serch{
  display: flex;
  .left-callback{
    flex: 1;
    font-size: 40px;
    background-color: white;
    text-align: center;
    line-height: 100px;

  }
  .right{
    flex: 20;
  }
}
.body-center{
  width: 100%;
  height: 1000px;
}

</style>
<script>
import { get } from '../../config/request'
import { reactive, toRefs, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Toast } from 'vant'
const useClassifyEffect = () => {
  const data = reactive({ items: {} })
  const getItemData = async () => {
    // const route = useRoute()
    const result = await get('/index/getList')
    // console.log(result)
    data.items = result.data.shopList
    // console.log(data.items)
  }
  const { items } = toRefs(data)
  return { items, getItemData }
}
// 商品详情
const shoproduct = () => {
  const dat = reactive({ item: {} })
  const productData = async () => {
    // const route = useRoute()
    const result = await get('/shop/much')
    // console.log(result.data)
    dat.item = result.data
    // console.log(data.item)
  }
  const { item } = toRefs(dat)
  console.log(dat.item)

  return { item, productData }
}
//  回退
const callback = () => {
  const router = useRouter()
  const backClick = () => {
    router.back()
  }
  return backClick
}
export default {
  setup () {
    // 搜索框取消
    const value = ref('')
    const onSearch = (val) => Toast(val)
    const onCancel = () => Toast('取消')
    const route = useRoute()
    const backClick = callback()
    // 商品详情
    const shopId = route.query.id
    // const value = ref('')
    // console.log(router)
    let activeIndex
    route.query.id ? activeIndex = ref(`${route.query.id}`) : activeIndex = ref(0)
    const { items, getItemData } = useClassifyEffect()
    const { item, productData } = shoproduct()
    getItemData()
    productData()

    return {
      value,
      activeIndex,
      items,
      item,
      shopId,
      onSearch,
      onCancel,
      backClick
    }
  }
}
// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route.query.id)

</script>
