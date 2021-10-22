import { createStore } from 'vuex'
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
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
      // cartList[0]["综合排序"][0].count
      const { shopId, tabId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let list = shopInfo[tabId]
      if (!list) { list = {} }
      let product = list[productId]
      product = productInfo
      product.count += num
      product.exit -= num
      product.sale += num
      // console.log(list)
      if (product.count < 0) {
        product.count = 0
      }
      if (product.exit < 0) {
        product.exit = 0
      }
      shopInfo[tabId] = list
      shopInfo[tabId][productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked (state, payload) {
      const { shopId, tabId, productId } = payload
      const product = state.cartList[shopId][tabId][productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId, tabId, productId } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let list = shopInfo[tabId]
      if (!list) { list = {} }
      const product = list[productId]
      shopInfo[tabId] = list
      shopInfo[tabId][productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId]
      if (productList) {
        for (const i in productList) {
          const product = productList[i]
          for (const j in product) {
            product[j].check = true
          }
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
