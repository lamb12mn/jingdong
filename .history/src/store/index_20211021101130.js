import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
    //   //第一层商铺的ID
    //   shopID:{
    //     //第二层商品ID
    //     //第二层的内容就是商品的内容 和 购物车中的数量
    //     productId:{
    //       _id:'1',
    //       name:'波霸奶茶',
    //       imgUrl:'https://p0.meituan.net/xianfu/677a37e4d54e7c0c1cd52eb96d18cac1762716.jpg@300w',
    //       sales:15,
    //       price:3.6,
    //       oldPrice:9.6,
    //       count:0
    //     }
    //   }
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, tabId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[tabId][productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      product.exit -= num
      product.sale += num
      if (product.count < 0) {
        product.count = 0
      }
      if (product.exit < 0) {
        product.exit = 0
      }
      shopInfo[tabId][productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
