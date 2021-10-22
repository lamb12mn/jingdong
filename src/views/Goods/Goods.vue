
<template>
  <div class="Goods">
    <div class="nav" style="position: sticky">
      <div class="iconfont" @click="handelBackClick">&#xeb15;</div>
      <div class="search">
        <van-search
          class="searchInput"
          shape="round"
          background="#FFF"
          v-model="value"
          show-action
          label="JD"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
    <div class="main">
      <!-- <p style="font-size:10px">{{productList}}</p> -->
      <!-- <p style="font-size:10px">{{cartList[0]["综合排序"][0].count}}</p> -->
      <van-card
        :num="total"
        price="2.00配送费"
        :desc="items[shopId].info"
        :title="items[shopId].text"
        :thumb="items[shopId].img"
      >
        <template #tags>
          <van-tag plain type="danger">{{ items[shopId].tags[0] }}</van-tag>
          <van-tag plain type="danger">{{ items[shopId].tags[1] }}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" type="primary">关注</van-button>
          <van-button size="mini" type="success" @click="(()=>{collected = !collected})">收藏</van-button>
        </template>
      </van-card>
      <van-tree-select
        v-model:main-active-index="activeIndex"
        height="100%"
        :items="items[shopId].products"
        class="tree"
      >
        <template #content>
          <div
            class="content"
            v-for="item in items[shopId].products"
            :key="item.id"
          >
            <div v-if="activeIndex == item.id">
              <van-card
              class="goods"
                v-for="(it, index) in item.list"
                :key="index"
                :num=" it.count|| 0"
                :price="it.price"
                origin-price="10.00"
                :desc="it.text"
                :title="items[shopId].tag"
                :thumb="it.img"
              >
                <template #tags>
                  <van-tag plain type="danger">已售{{it.sale}}</van-tag>
                  <van-tag color="#7232dd" plain>剩余{{it.exit}}</van-tag>
                </template>
                <template #footer>
                  <van-button v-if="it.count!==0" size="mini" @click="() => { changeCartItemInfo(shopId,activeIndex, it.id, it, -1)}">-</van-button>
                  <van-button size="mini">{{cartList?.[shopId]?.[activeIndex]?.[it.id]?.count|| 0}}</van-button>
                  <van-button v-if="it.exit!==0" size="mini" @click="() => { changeCartItemInfo(shopId,activeIndex,it.id, it, 1) }">+</van-button>
                </template>
              </van-card>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
  <div class="shopCart">
    <van-submit-bar :price="price * 100" button-text="提交订单" @submit="onSubmit(shopId,cartList)">
  <van-action-bar-icon icon="chat-o" text="客服" dot />
  <van-action-bar-icon icon="cart-o" text="购物车" :badge="total" @click="showPopup" />
  <van-action-bar-icon icon="star" :text="collected ?'已收藏' :'未收藏'" @click="(()=>{collected = !collected})" :color="collected ? '#ff5000' :'#666'" />
  <template #tip>
    你的收货地址不支持同城送, <span @click="onClickLink">修改地址</span>
  </template>
    </van-submit-bar>
    <van-popup
    v-model:show="show"
    position="bottom"
    round
  :style="{ height: '70%' }"
  closeable
  close-icon="close"
  ><div class="popupHeader">
    <div class="p-H-left" @click="() => setCartItemsChecked(shopId)"><span
            class="p-H-left-icon iconfont"
            v-html="allChecked ? '&#xe610;': '&#xe755;'"
          >
          </span>全选</div>
    <div class="p-H-right" @click="() => cleanCartProducts(shopId)">清空购物车</div>
  </div>
  <div  v-for="item in productList"
  :key="item.id" style="display:flex;width:100%">
  <div class="iconfont p-H-left-check"
    style="width:5% !important"
    v-html="item.check ? '&#xe610;' : '&#xe755;'"
    @click="()=>{changeCartItemChecked(shopId,item.id)}"
  >
  </div>
    <van-card
    style="width:95% !important"
  :price="item.price"
  :desc="item.text"
  :title="item.text.slice(0,10)"
  :thumb="item.img"
  v-if="item.count!==0"
>
  <template #tags>
    <van-tag plain type="danger">已售{{item.sale}}</van-tag>
    <van-tag plain type="danger">库存{{item.exit}}</van-tag>
  </template>
  <template #footer>
     <van-button v-if="item.count!==0" size="mini" @click="() => { changeCartItemInfo(shopId,activeIndex,item.id, item, -1)}">-</van-button>
    <van-button size="mini">{{item.count}}</van-button>
     <van-button v-if="item.exit!==0" size="mini" @click="() => { changeCartItemInfo(shopId,activeIndex,item.id, item, 1) }">+</van-button>
  </template>
</van-card>
    </div></van-popup>
  </div>
</template>
<script>
import { reactive, toRefs, ref, computed } from 'vue'
import { get } from '../../config/request'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from './commonCartEffect'
// 切换标签，渲染数据，动态切换
const useClassifyEffect = () => {
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
// 点击回退逻辑
const useBackEffect = () => {
  const router = useRouter()
  const handelBackClick = () => {
    router.back()
  }
  return handelBackClick
}
// 购物车相关逻辑
const useCartEffect = (shopId, tabId) => {
  const { changeCartItemInfo, arr } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        for (const j in product) {
          count += product[j].count
        }
      }
    }
    return count
  })
  // 计算购物车总价
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        for (const j in product) { count += (product[j].count * product[j].price) }
      }
    }
    return count.toFixed(2)
  })
  // 计算购物车展示的内容
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    const arr = []
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        for (const j in product) {
          arr.push(product[j])
        }
      }
    }
    return arr
  })
  // 计算全选还是没全选
  const allChecked = computed(() => {
    const productList = cartList[shopId]
    let result = true
    for (const i in productList) {
      const product = productList[i]
      for (const j in product) {
        if (product[j].count > 0 && !product[j].check) {
          result = false
        }
      }
    }
    // console.log(result);
    return result
  })
  // 选择购物车中的内容
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }
  // 清空购物车
  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }
  // 全选功能
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }
  return { total, allChecked, cartList, price, productList, arr, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItemsChecked }
}
export default {
  name: 'Shop',
  data () {
    return {
      checked: true,
      collected: false
    }
  },
  setup () {
    const router = useRouter()
    const onSubmit = (shopId, ll) => {
      const cartGoods = JSON.stringify(arr)
      // localStorage.removeItem('goodsList')
      localStorage.setItem('goodsList', cartGoods)
      router.push({
        path: '/cart',
        query: {
          id: shopId
        }
      })
    }
    // 弹出弹出层
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    const onClickLink = () => alert('修改地址')
    const value = ref('')
    const route = useRoute()
    const activeIndex = ref(0)
    const shopId = route.query.id
    const { items, getItemData } = useClassifyEffect()
    const handelBackClick = useBackEffect()
    const { total, cartList, arr, price, productList, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItemsChecked } = useCartEffect(shopId, activeIndex)
    getItemData()
    return {
      value,
      shopId,
      activeIndex,
      items,
      cartList,
      handelBackClick,
      onSubmit,
      onClickLink,
      productList,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      total,
      price,
      changeCartItemInfo,
      show,
      showPopup,
      arr
    }
  }
}
</script>
<style scoped lang="scss">
.Goods {
  background: #fff;
  .nav {
    display: flex;
    width: 100%;
    height: 70px;
    background: #fff;
    line-height: 70px;
    border-bottom: 2px solid #e5e5e5;
    .iconfont {
      display: inline-block;
      width: 70px;
      font-size: 50px;
      text-align: center;
    }
    .search {
      flex: 1;
      height: 70px;
      .searchInput {
        height: 70px;
        background: #e5e5e5;
      }
    }
  }
  .main {
    position: fixed;
    width: 100%;
    height: 100%;
    .tree {
      margin-top: 5px;
      display: flex;
      .van-sidebar {
        width: 100px;
        position: fixed;
        overflow: scroll;
        top: 70px;
        bottom: 0;
      }
      .van-tree-select__content {
        position: fixed;
        flex:1;
        font-size: 16px;
      }
    }
  }
}
.popupHeader{
  display: flex;
  width: 100%;
  // background: red;
  height: 120px;
  font-size: 30px;
  line-height: 120px;
  .p-H-left{
    flex: 2;
    margin-left: 20px;
    .p-H-left-icon{
    display: inline-block;
      color: #0091FF;
      font-size: 30px;
      margin-right: 10px;
    }
  }
  .p-H-right{
    flex: 1;
  }
}
</style>
