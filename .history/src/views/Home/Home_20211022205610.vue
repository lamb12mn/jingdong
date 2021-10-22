<template>
  <div class="home">
    <div class="bg"></div>
    <div class="wrapper">
      <div class="position">
        <div class="iconfont position__icon">&#xe631;</div>
        <div class="search">
          <span>JD</span>
          <span>|</span>
          <span class="iconfont ser">&#xe86e;</span>
          <input type="search" placeholder="西门子开关" />
        </div>
        <div class="iconfont position_notice">&#xe710;</div>
      </div>
      <div class="banner">
        <van-swipe
          class="my-swipe"
          style="z-index: 4"
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item
            ><img
              class="banner__img"
              src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/112213/2/1145/279846/5e948dd0E3dfb5cce/5879998ed188523f.jpg!cr_1125x449_0_166!q70.jpg.dpg"
          /></van-swipe-item>
          <van-swipe-item
            ><img
              class="banner__img"
              src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/197859/2/10987/275037/6156bcf3E98d0ad21/e661265cdac1d7b6.jpg!cr_1125x449_0_166!q70.jpg.dpg"
          /></van-swipe-item>
          <van-swipe-item
            ><img
              class="banner__img"
              src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/112213/2/1145/279846/5e948dd0E3dfb5cce/5879998ed188523f.jpg!cr_1125x449_0_166!q70.jpg.dpg"
          /></van-swipe-item>
          <van-swipe-item
            ><img
              class="banner__img"
              src="https://imgcps.jd.com/ling4/10037581677565/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c11d16482acdd181dbc1fc9/5675c206/cr_1125x449_0_166/s/q70.jpg"
          /></van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <van-swipe
          class="my-swipe"
          :autoplay="false"
          indicator-color="transparent"
        >
          <van-swipe-item>
            <div class="icons">
              <div class="icons__item" v-for="item in iconList1" :key="item.id" @click="handelClassifyClick(item.id)">
                <img class="icons__item__img" :src="item.img" v-lazy="item.img"/>
                <p class="icons__item__desc">{{ item.name }}</p>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="icons">
              <div class="icons__item" v-for="item in iconList" :key="item.id" @click="handelClassifyClick(item.id)">
                <img class="icons__item__img" :src="item.img" v-lazy="item.img"/>
                <p class="icons__item__desc">{{ item.name }}</p>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="home-miaosha">
        <div class="miaoshaHead">
          <h1>京东秒杀</h1>
          <span>{{hour}}点场</span>
        <van-count-down :time="time" class="timeDate">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
          </div>
        <van-swipe
          class="my-swipe"
          :autoplay="false"
          indicator-color="transparent"
        >
          <van-swipe-item>
            <div class="miaosha-item">
              <div
                class="miaosha-child"
                v-for="item in miaoshaList"
                :key="item.id"
                v-lazy="item.img"
              >
                <img :src="item.img" alt="" />
                <div class="price">￥{{ item.price }}</div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="miaosha-item">
              <div
                class="miaosha-child"
                v-for="item in miaoshaList"
                :key="item.id"
              >
                <img :src="item.img" alt="" />
                <div class="price">￥{{ item.price }}</div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="good">
          <van-card
           v-for="item in shopList"
          :key="item.id"
          class="good-item"
          :tag="item.tag"
          :desc="item.info"
          :title="item.name"
          :thumb="item.img"
          v-lazy="item.img"
          @click="toShopInfoClick(item.id)"
        >
          <template #tags>
            <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
            <van-tag plain type="danger">{{ item.tags[1] }}</van-tag>
          </template>
          <template #footer>
            <!-- <van-button size="mini">按钮</van-button> -->
            <van-button size="mini">{{ item.footer }}</van-button>
          </template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../style/Home.css'
</style>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const axios = require('axios')
// navIcon点击跳转到分类页面
const docker = document.getElementsByClassName('docker')
docker[0].style.display = 'none'
const useClassifyEffect = () => {
  const router = useRouter()
  const handelClassifyClick = (id) => {
    router.push({
      path: '/classify',
      query: {
        id: id
      }
    })
  }
  return handelClassifyClick
}
// 点击卡片信息跳转到商品详情页面
const useShopInfoEffect = () => {
  const router = useRouter()
  const toShopInfoClick = function (id) {
    router.push({
      path: '/goods',
      query: {
        id: id
      }
    })
  }
  return toShopInfoClick
}
export default {
  name: 'Home',
  data () {
    return {
      iconList: null,
      iconList1: null,
      miaoshaList: null,
      shopList: null,
      hour: (new Date()).getHours()
    }
  },
  setup () {
    const handelClassifyClick = useClassifyEffect()
    const toShopInfoClick = useShopInfoEffect()
    const time = ref(1 * 60 * 60 * 1000)
    return { time, handelClassifyClick, toShopInfoClick }
  },
  created () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'flex'
    axios
      .get(
        'https://www.fastmock.site/mock/c821e8744e5af34b03e0dc88de469b1a/api/index/getList'
      )
      .then((response) => {
        this.iconList1 = response.data.data.iconList.slice(0, 10)
        this.iconList = response.data.data.iconList.slice(10, 16)
        this.miaoshaList = response.data.data.miaoshaList
        this.shopList = response.data.data.shopList
        // console.log(response.data.data.iconList)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
