<template>
    <div class="coupons">
        <Nav :message="我的优惠券"></Nav>
    </div>
</template>

<script>
import Nav from '../../components/Nav.vue'
export default {
  name: 'Coupons',
  components: {
    Nav
  },
  setup () {
      const { message, handelBackClick } = useToastEffect()
  }
}
</script>
<style>
</style>
