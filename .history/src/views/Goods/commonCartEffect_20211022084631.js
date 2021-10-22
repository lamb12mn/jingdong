import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const arr = []
  const changeCartItemInfo = (shopId, tabId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, tabId, productId, productInfo, num
    })
    for(const i in arr){
      if(arr[i+1])
    }
    arr.push(productInfo)
  }
  return { changeCartItemInfo, arr }
}
