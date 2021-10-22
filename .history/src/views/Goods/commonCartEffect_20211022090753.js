import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const arr = []
  const changeCartItemInfo = (shopId, tabId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, tabId, productId, productInfo, num
    })
    for (let i = 0; i < arr.length; i++) {
      if (!arr.includes(arr[i])) {
        arr.push(arr[i])
      } else {
        arr[i].count++
      }
    }
    arr.push(productInfo)
  }
  return { changeCartItemInfo, arr }
}
