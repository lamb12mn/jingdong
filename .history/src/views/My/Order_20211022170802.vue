<template>
    <div class="order">
        <Nav message="我的所有订单" @click="handelBackClick"></Nav>
    </div>
</template>

<script>
import Nav, { useBackEffect } from '../../components/Nav.vue'
export default {
  name: 'Order',
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
