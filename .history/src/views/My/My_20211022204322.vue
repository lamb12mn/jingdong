<template>
  <div class="my">
    <header>
      <div class="iconfont" @click="handelBackClick">&#xeb15;</div>
      <div class="title">我的京东</div>
      <div class="iconfont">&#xe9b9;</div>
    </header>
    <main>
      <div class="head">
        <div class="userInfo">
          <div class="avatar">
            <img
              src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
              alt=""
            />
          </div>
          <div class="info">
            <div class="info-name">
              <div class="i-n-left">jd_6873cba4be990</div>
              <div class="i-n-right iconfont">&#xe65f;</div>
            </div>
            <div class="info-badge">
              <van-tag round color="#D61742" text-color="#fff" class="i-b-t"
                >京享值</van-tag
              >
              <van-tag round color="#D61742" text-color="#fff" class="i-b-t"
                >小白信用71.4</van-tag
              >
            </div>
          </div>
        </div>
        <div class="history">
          <div class="historyItem">
            <p>10</p>
            <p>商品收藏</p>
          </div>
          <div class="historyItem">
            <p>76</p>
            <p>店铺收藏</p>
          </div>
          <div class="historyItem">
            <p>3</p>
            <p>我的足迹</p>
          </div>
        </div>
        <div class="plus">
          <!-- <img class="plus-inner" src="" alt=""> -->
          <div class="plus-inner">
            <div class="plus-con">
              <div class="plus-title">每月5张运费券</div>
            <div class="plus-subtitle">立即查看</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-box">
          <div class="c-b-Item">
            <p class="iconfont">&#xe601;</p>
            <p>待付款</p>
          </div>
          <div class="c-b-Item">
            <p class="iconfont">&#xe640;</p>
            <p>待收货</p>
          </div>
          <div class="c-b-Item">
            <p class="iconfont">&#xe624;</p>
            <p>退换/售后</p>
          </div>
          <router-link class="c-b-Item" to="/order">
            <p class="iconfont" style="color: #ed6875">&#xe600;</p>
            <p>全部订单</p>
          </router-link>
        </div>
        <div class="content-box">
          <router-link class="c-b-Item" to="/coupons">
            <p class="text">2</p>
            <p>优惠券</p>
          </router-link>
          <div class="c-b-Item">
            <p class="text">开通有礼</p>
            <p>白条</p>
          </div>
          <div class="c-b-Item">
            <p class="text">150</p>
            <p>京豆</p>
          </div>
          <div class="c-b-Item">
            <p class="text">0</p>
            <p>红包</p>
          </div>
          <div class="c-b-Item">
            <p class="iconfont" style="color: #ed6875">&#xe668;</p>
            <p>我的资产</p>
          </div>
        </div>
        <div class="tools">
          <div class="toolsTitle">工具与服务</div>
          <div class="toolsItem">
            <p>
              <img
                src="https://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp"
                alt=""
              />
            </p>
            <p>客户服务</p>
          </div>
          <div class="toolsItem">
            <p>
              <img
                src="https://img12.360buyimg.com/img/s70x70_jfs/t1/143427/38/5400/4413/5f350384Edba4458b/bfcb210d2110a7d8.png.webp"
                alt=""
              />
            </p>
            <p>我的预约</p>
          </div>
          <div class="toolsItem">
            <p>
              <img
                src="https://img12.360buyimg.com/img/s70x70_jfs/t1/138657/15/5351/5178/5f3504ceE3707cfd0/bc8ff48c8edcc5b1.png.webp"
                alt=""
              />
            </p>
            <p>我的问答</p>
          </div>
          <div class="toolsItem">
            <p>
              <img
                src="https://img12.360buyimg.com/img/s70x70_jfs/t1/112188/32/14787/4956/5f3509edE376c2ddb/d716c6822cafa2b6.png.webp"
                alt=""
              />
            </p>
            <p>闲置换钱</p>
          </div>
          <div class="toolsItem">
            <p>
              <img
                src="https://img12.360buyimg.com/img/s70x70_jfs/t1/126073/34/9502/6741/5f350800Ee00c0d35/43485badf62439e9.png.webp"
                alt=""
              />
            </p>
            <p>高价回收</p>
          </div>
        </div>
        <div class="recommends">
          <div class="recommendsTitle"><p>为你推荐</p></div>
          <div class="recommendsContent">
            <!-- {{items}} -->
            <van-card
              v-for="item in items"
              :key="item.id"
              class="goods"
              :tag="item.tag"
              :desc="item.info"
              :title="item.text"
              :thumb="item.img"
              v-lazy="item.img"
            >
              <template #tags>
                <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
                <van-tag plain type="danger">{{ item.tags[1] }}</van-tag>
              </template>
              <template #footer>
                <van-button
                  style="padding: 0 10px"
                  size="mini"
                  color="linear-gradient(to right, #ff6034, #ee0a24)"
                  round
                  >详情</van-button>
              </template>
            </van-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../config/request'
import { useRouter } from 'vue-router'
// 获取推荐数据
const useRecommendEffect = () => {
  const data = reactive({ items: {} })
  const getItemData = async () => {
    // const route = useRoute()
    const result = await get('/shop')
    // console.log(result)
    if (result.code === 0 && result.data) {
      data.items = result.data
      // console.log(result.data)
    }
  }
  const handelBackClick = () => {
    const router = useRouter()
    router.back()
  }
  const { items } = toRefs(data)
  return { items, getItemData, handelBackClick }
}
export default {
  name: 'My',
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'flex'
    const { items, getItemData, handelBackClick } = useRecommendEffect()
    getItemData()
    return { items, getItemData, handelBackClick }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/My.css";
.plus{
  width: 100%;
  height: 100px;
  margin: 10px auto 0;
  box-sizing: border-box;
  color: #ffe678;
  font-size: 12px;
  // padding: 0 25px;
  // background: black;
  .plus-inner{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: calc(100% - 60px);
    height: 100%;
    background: url('https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png') no-repeat 0 0;
    box-sizing: border-box;
    margin: 0 30px;
    background-size: cover;
    z-index: inherit;
    .plus-con{
      display: flex;
      flex: 1 0 auto;
      font-size: 20px;
      .plus-title{
        position: relative;
        padding-left: 120px;
        margin-top: 10px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 60%;
        &::before{
          position: absolute;
          content: "";
          width: 90px;
          height: 20px;
          left: 0;
          top: 3px;
          background: url(https://img12.360buyimg.com/img/s113x21_jfs/t1/132167/33/1122/2973/5ed5c74bE41e02c41/5ae83d09fff874cb.png) no-repeat 100%;
          background-size:100% 100%;
          margin-left: 20px;
        }
      }
      .plus-subtitle{
        background: #FCDE64;
        padding: 10px 20px;
        color: #26335F;
        border-radius: 20px;
      }
    }
  }
}
</style>
