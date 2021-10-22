import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const arr = []
  const changeCartItemInfo = (shopId, tabId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, tabId, productId, productInfo, num
    })
    if (!arr.includes(productInfo)) {
      arr.push(productInfo)
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i])) {
          arr[i].count++
        }
      }
    }
  }
  return { changeCartItemInfo, arr }
}
