<template>
    <div class="coupons">
        <Nav message="我的优惠券" @click="handelBackClick"></Nav>
        <main>
          <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
<van-popup
  v-model:show="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
        </main>
    </div>
</template>

<script>
import Nav, { useBackEffect } from '../../components/Nav.vue'
import { ref } from 'vue'
export default {
  name: 'Coupons',
  components: {
    Nav
  },
  setup () {
    const { message, handelBackClick } = useBackEffect()
    const coupon = {
      available: 1,
      condition: '无使用门槛\n最多优惠12元',
      reason: '',
      value: 150,
      name: '优惠券名称',
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: '1.5',
      unitDesc: '元'
    }

    const coupons = ref([coupon])
    const showList = ref(false)
    const chosenCoupon = ref(-1)

    const onChange = (index) => {
      showList.value = false
      chosenCoupon.value = index
    }
    const onExchange = (code) => {
      coupons.value.push(coupon)
    }
    return {
      message,
      handelBackClick,
      coupons,
      showList,
      onChange,
      onExchange,
      chosenCoupon,
      disabledCoupons: [coupon]
    }
  }
}
</script>
<style lang="scss" scoped>
main{
  width: 100%;
  height: 100%;
}
</style>
