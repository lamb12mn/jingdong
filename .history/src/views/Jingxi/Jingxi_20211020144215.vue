<template>
<div id="body">
  <div id="top">
  <img class="topimg" src="https://img14.360buyimg.com/img/s750x380_jfs/t1/194846/36/9413/71066/60cf392bEb7b0f35c/6dbb0e014d6ece33.png" alt="">
</div>
<div id="mid">
  <div class="midleft">
    <img src="https://img30.360buyimg.com/img/jfs/t1/206124/21/11819/127228/616cd6d4E0b37e9c0/c2123b5fabda732c.png" alt="">
  </div>
  <div class="midright">
    <img src="https://img30.360buyimg.com/img/jfs/t1/197799/24/10739/78629/615554afE9b2e3399/fa9f1dee3a475b77.jpg" alt="">
  </div>
</div>
<!-- {{items}} -->
<div id="bot">

  <div class="botindex">
    <!-- <div> -->
        <van-tabs v-model:active="active">
        <van-tab :title="item.type"  v-for="item in items" :key="item.id">
          <div v-for="it in item.goods" :key="it.id" class="botgoods-kinds">
                  <van-card
                      :num="it.num"
                      :tag="it.type"
                      :price="it.price"
                      :desc="it.desc"
                      :title="it.title"
                      :thumb="it.thumb"
                      :origin-price="it.origin-price"
                    />
              </div>

        </van-tab>
        </van-tabs>
  </div>
</div>
<Footer/>
</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { get } from '../../config/request'
import { useRoute } from 'vue-router'
import Footer from '../Home/Footer.vue'
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
  components: { Footer },
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
