import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, tabId, productId, productInfo, num) => {
    const arr = []
    store.commit('changeCartItemInfo', {
      shopId, tabId, productId, productInfo, num
    })
    arr.push(productInfo)
    return arr
  }
  return { changeCartItemInfo, arr }
}
