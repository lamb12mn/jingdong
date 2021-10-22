
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
      <!-- <p style="font-size:10px">{{cartList}}</p> -->
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
          <van-button size="mini" type="success">收藏</van-button>
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
                  <van-button size="mini">{{it.count || 0}}</van-button>
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
    <van-submit-bar :price="price * 100" button-text="提交订单" @submit="onSubmit">
  <van-action-bar-icon icon="chat-o" text="客服" dot />
  <van-action-bar-icon icon="cart-o" text="购物车" :badge="total" />
  <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
  <template #tip>
    你的收货地址不支持同城送, <span @click="onClickLink">修改地址</span>
  </template>
    </van-submit-bar>
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
  const { changeCartItemInfo } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })
  return { total, cartList, price, productList, changeCartItemInfo }
}

export default {
  name: 'Shop',
  data () {
    return {
      checked: true
    }
  },
  setup () {
    const onSubmit = () => alert('点击按钮')
    const onClickLink = () => alert('修改地址')
    const value = ref('')
    const route = useRoute()
    const activeIndex = ref(0)
    const shopId = route.query.id
    const { items, getItemData } = useClassifyEffect()
    const handelBackClick = useBackEffect()
    const { total, cartList, price, productList, changeCartItemInfo, changeCartItemChecked } = useCartEffect(shopId, activeIndex)
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
      total,
      price,
      changeCartItemInfo

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
</style>
