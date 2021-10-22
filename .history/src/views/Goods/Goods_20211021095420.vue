<template>
<div class="goods">
      <div class="nav" style="position: sticky">
      <div class="iconfont" @click="handelBackClick">&#xeb15;</div>
      <div class="search">
        <van-search
          class="searchInput"
          shape="round"
          background="#FFF"
          v-model="value"
          show-action
          label="JD"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
    <div class="main">
      <van-card
        :num="total"
        price="2.00配送费"
        :desc="items[shopId].info"
        :title="items[shopId].text"
        :thumb="items[shopId].img"
      >
        <template #tags>
          <van-tag plain type="danger">{{ items[shopId].tags[0] }}</van-tag>
          <van-tag plain type="danger">{{ items[shopId].tags[1] }}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" type="primary">关注</van-button>
          <van-button size="mini" type="success">收藏</van-button>
        </template>
      </van-card>
      <van-tree-select
        v-model:main-active-index="activeIndex"
        height="100%"
        :items="items[shopId].products"
        class="tree"
      >
        <template #content>
          <div
            class="content"
            v-for="item in items[shopId].products"
            :key="item.id"
          >
            <div v-if="activeIndex == item.id">
              <van-card
              class="goods"
                v-for="(it, index) in item.list"
                :key="index"
                :num="cartList?.[shopId]?.[it.id]?.count || 0"
                :price="it.price"
                origin-price="10.00"
                :desc="it.text"
                :title="items[shopId].tag"
                :thumb="it.img"
              >
                <template #tags>
                  <van-tag plain type="danger">已售{{it.sale}}</van-tag>
                  <van-tag color="#7232dd" plain>剩余{{it.exit}}</van-tag>
                </template>s
                <template #footer>
                  <van-button v-if="cartList?.[shopId]?.[it.id]?.count!=0" size="mini" @click="() => { changeCartItemInfo(shopId, it.id, it, -1) }">-</van-button>
                  <van-button size="mini">{{cartList?.[shopId]?.[it.id]?.count || 0}}</van-button>
                  <van-button v-if="it.exit!=0" size="mini" @click="() => { changeCartItemInfo(shopId, it.id, it, 1) }">+</van-button>
                </template>
              </van-card>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
</div>
</template>

<script>
export default {
  name: 'Goods',
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.goods {
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
      margin-top: 5px;
      display: flex;
      .van-sidebar {
        width: 100px;
        position: fixed;
        overflow: scroll;
        top: 70px;
        bottom: 0;
      }
      .van-tree-select__content {
        position: fixed;
        flex:1;
        font-size: 16px;
      }
    }
  }
}
</style>
