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
