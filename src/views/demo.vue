<template>
    <div class="coupons">
        <Nav message="我的优惠券" @click="handelBackClick"></Nav>
    </div>
</template>

<script>
import Nav, { useBackEffect } from '../../components/Nav.vue'
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
