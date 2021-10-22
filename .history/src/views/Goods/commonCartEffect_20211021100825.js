import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, productId, tabId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, tabId, productInfo, num
    })
  }
  return { changeCartItemInfo }
}
