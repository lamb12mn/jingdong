import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const arr = []
  Array.prototype.uniq = function () {
    let arr=[];
    for (let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])){
          arr.push(this[i])
        }else{
          this[i].count++;
        }
    }
    return arr;
}
  const changeCartItemInfo = (shopId, tabId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, tabId, productId, productInfo, num
    })
    uniq(arr)
    arr.push(productInfo)
  }
  return { changeCartItemInfo, arr }
}
