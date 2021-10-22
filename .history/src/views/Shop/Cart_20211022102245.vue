<template>
  <div class="cart">
    <header>
      <div class="iconfont"  @click="handelBackClick">&#xeb15;</div>
      <div class="title">我的购物车</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
    <main>
      <div class="opearor">
        <div class="opearor-location iconfont">&#xe8ae;萍乡市安源区</div>
        <div class="opearor-edit" @click="(()=>{itemShow =!itemShow})">编辑商品</div>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="c-t-left">
            <van-button size="mini" type="primary" @click="checkAll"
              >全选</van-button
            >
            <van-button size="mini" type="primary" @click="toggleAll"
              >反选</van-button
            >
          </div>
          <div class="c-t-right">
            <van-tag color="#ffe1e1" text-color="#ad0000">优惠券</van-tag>
          </div>
        </div>
        <div class="content-cards">
          <van-checkbox-group v-model="checked" ref="checkboxGroup">
            <div  v-for="(item,index) in cartGoods" :key="item.id" :name="index">
 <van-checkbox></van-checkbox>
  <van-card
                :num="item.count"
                :price="item.price"
                :desc="item.text.slice(0,25)"
                :title="item.text.slice(0,5) + item.id"
                :thumb="item.img"
              >
                <template #tags>
                  <van-tag plain type="danger">已售{{item.sale}}</van-tag>
                  <van-tag plain type="danger">库存{{item.exit}}</van-tag>
                </template>
                <template #footer>
                  <van-button v-if="itemShow" size="mini" @click="clearCount(index)">删除</van-button>
                  <!-- <van-button size="mini">{{item.count}}</van-button>
                  <van-button size="mini">+</van-button> -->
                </template>
              </van-card>
            </div>
          </van-checkbox-group>
        </div>
        <div class="submit">
          <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
          >
            <van-checkbox v-model="checked"><span style="padding-left:20px">全选</span></van-checkbox>
            <template #tip>
              你的收货地址不支持同城送,
              <span @click="onClickLink">修改地址</span>
            </template>
          </van-submit-bar>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Toast } from 'vant'
import { useRouter, useRoute } from 'vue-router'
// 全选反选
const useChooseEffect = () => {
  const checked = ref([])
  const checkboxGroup = ref(null)

  const checkAll = () => {
    checkboxGroup.value.toggleAll(true)
  }
  const toggleAll = () => {
    checkboxGroup.value.toggleAll()
  }
  return {
    checked,
    checkAll,
    toggleAll,
    checkboxGroup
  }
}
// 提交订单栏
const useSubmitEffect = () => {
  const onSubmit = () => Toast('点击按钮')
  const onClickLink = () => Toast('修改地址')
  const router = useRouter()
  // 点击回退逻辑
  const handelBackClick = () => {
    router.back()
  }
  const clearCount = (id) => {
    const itemId = id
    const goodsList = localStorage.getItem('goodsList')
    goodsList.splice(id, 1)
    localStorage.setItem('goodsList')
    // console.log(goodsList)
    // console.log(id)
  }
  return {
    onSubmit,
    onClickLink,
    handelBackClick,
    clearCount
  }
}
export default {
  name: 'Cart',
  data () {
    return {
      itemShow: false
    }
  },
  setup () {
    const route = useRoute()
    const shopId = route.query.id
    // console.log(shopId)
    const cartGoods = JSON.parse(localStorage.getItem('goodsList'))
    const { checked, checkAll, toggleAll, checkboxGroup } = useChooseEffect()
    const { onSubmit, onClickLink, handelBackClick, clearCount } = useSubmitEffect()
    return {
      handelBackClick,
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
      onSubmit,
      onClickLink,
      cartGoods,
      shopId,
      clearCount
    }
  }
}
</script>
<style>
@import "../../style/Cart.css";
.van-checkbox__label{
  width: 95% !important;
}
.van-checkbox__icon{
  width: 5% !important;
}
</style>
