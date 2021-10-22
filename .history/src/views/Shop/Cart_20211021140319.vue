<template>
  <div class="cart">
    <header>
      <div class="iconfont">&#xeb15;</div>
      <div class="title">我的购物车</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
    <main>
      <div class="opearor">
        <div class="opearor-location iconfont">&#xe8ae;萍乡市安源区</div>
        <div class="opearor-edit">编辑商品</div>
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
            <van-checkbox v-for="value in 8" :key="value" name="value">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              >
                <template #tags>
                  <van-tag plain type="danger">标签</van-tag>
                  <van-tag plain type="danger">标签</van-tag>
                </template>
                <template #footer>
                  <van-button size="mini">按钮</van-button>
                  <van-button size="mini">按钮</van-button>
                </template>
              </van-card>
            </van-checkbox>
          </van-checkbox-group>
        </div>
        <div class="submit">
          <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
          >
            <van-checkbox v-model="checked">全选</van-checkbox>
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
  return {
    onSubmit,
    onClickLink
  }
}
export default {
  name: 'Cart',
  setup () {
    const { checked, checkAll, toggleAll, checkboxGroup } = useChooseEffect()
    const { onSubmit, onClickLink } = useSubmitEffect()
    return {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
      onSubmit,
      onClickLink
    }
  }
}
</script>
<style>
@import "../../style/Cart.css";
</style>
