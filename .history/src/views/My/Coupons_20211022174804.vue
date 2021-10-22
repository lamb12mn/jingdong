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
    return { message, handelBackClick }
  }
}
</script>
<style>
</style>
