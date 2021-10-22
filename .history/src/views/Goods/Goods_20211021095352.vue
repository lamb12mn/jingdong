<template>
<div class="goods">
  Goods
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
