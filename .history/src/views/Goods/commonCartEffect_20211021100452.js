import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, tabId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, tabId, productId, productInfo, num
    })
  }
  return { changeCartItemInfo }
}
