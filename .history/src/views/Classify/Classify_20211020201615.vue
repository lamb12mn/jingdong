<template>
  <div class="classify">
        <div class="nav" style="position:sticky;">
      <div class="iconfont"  @click="handelBackClick">&#xeb15;</div>
      <div class="search">
        <van-search
          class="searchInput"
          v-model="value"
          background="#fff"
          show-action
          label="JD"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          shape="round"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
    <div class="main">
      <van-tree-select
        v-model:main-active-index="activeIndex"
        height="100%"
        :items="items"
        class="tree"
      >
        <template #content>
          <div class="content" v-for="(item,index) in items" :key="index">
            <div v-if="activeIndex ==index">
             <div v-for="it in item.children" :key="it.id">
                <h1>{{it.text}}</h1>
            <div class="contentDiv">
              <div class="content-item" v-for="(list,index) in it.list" :key="index">
                <img :src="list.img" alt="" />
                <p>{{list.text}}</p>
              </div>
            </div>
             </div>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { get } from '../../config/request'
import { useRoute, useRouter } from 'vue-router'
// 切换标签，渲染数据，动态切换
const useClassifyEffect = () => {
  const data = reactive({ items: {} })
  const getItemData = async () => {
    const route = useRoute()
    const result = await get(`/classify/${route.query.id}`)
    // console.log(result)
    if (result.code === 0 && result.data) {
      data.items = result.data
    }
  }
  const { items } = toRefs(data)
  return { items, getItemData }
}
// 点击回退逻辑
const useBackEffect = () => {
  const router = useRouter()
  const handelBackClick = () => {
    router.back()
  }
  return handelBackClick
}
export default {
  name: 'Classify',
  setup () {
    const value = ref('')
    const route = useRoute()
    // console.log(router)
    let activeIndex
    route.query.id ? activeIndex = ref(`${route.query.id}`) : activeIndex = ref(0)
    // const activeIndex = ref(`${route.query.id}`)
    const { items, getItemData } = useClassifyEffect()
    const handelBackClick = useBackEffect()
    getItemData()
    return {
      value,
      activeIndex,
      items,
      handelBackClick
    }
  }
}
</script>
<style scoped lang="scss">
.classify {
  background: #fff;
  .nav {
    display: flex;
    width: 100%;
    height: 70px;
    background: #fff;
    line-height: 70px;
    border-bottom: 2px solid #e5e5e5;
    .iconfont {
      display: inline-block;
      width: 70px;
      font-size: 50px;
      text-align: center;
    }
    .search {
      flex: 1;
      height: 70px;
      .searchInput {
        height: 70px;
        background: #e5e5e5;
      }
    }
  }
  .main {
    position: fixed;
    width: 100%;
    height: 100%;
    .tree {
      margin-top: 10px;
      .van-sidebar{
        position: fixed;
        overflow: scroll;
        top: 70px;
        bottom: 00px;
      }
      .content{
        position: fixed;
        font-size: 16px;
        .contentDiv{
          display: flex;
        flex-wrap: wrap;
        flex-direction: row;
          width: 100%;
          height: 100%;
          .content-item{
            width: 150px;
            height: 200px;
            img{
              margin: 0 15px;
              width: 120px;
              height: 120px;
            }
            p{
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
