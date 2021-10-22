<template>
<div class="jingxi">
  jingxi
</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { get } from '../../config/request'
import { useRoute } from 'vue-router'
// 切换标签，渲染数据，动态切换
const useClassifyEffect = () => {
  const data = reactive({ items: {} })
  const getItemData = async () => {
    const route = useRoute()
    const result = await get(`/jingxi/${route.query.id}`)
    if (result.code === 0 && result.data) {
      data.items = result.data
    }
  }
  const { items } = toRefs(data)
  return { items, getItemData }
}
export default {
  name: 'Jingxi',
  setup () {
    const value = ref('')
    const route = useRoute()
    // console.log(router)
    let activeIndex
    route.query.id ? activeIndex = ref(`${route.query.id}`) : activeIndex = ref(0)
    // const activeIndex = ref(`${route.query.id}`)
    const { items, getItemData } = useClassifyEffect()
    getItemData()
    const active = ref(0)

    return {
      value,
      activeIndex,
      items,
      active
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0%;
  padding: 0%;
}
#body{
  #top{
    width: 100%;
    .topimg{
      width: 100%;
    }
  }
  #mid{
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    img{
      width: 97%;
      height: 100%;
      border-radius: 20px;
    }
    .midleft{
     flex: 1;
    }
    .midright{
      flex: 1;
    }
  }
  #bot{
    width: 100%;
    .botindex{
      width: 100%;
    }
  }
}
</style>
