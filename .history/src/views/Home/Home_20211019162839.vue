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
                <img class="icons__item__img" :src="item.img" />
                <p class="icons__item__desc">{{ item.name }}</p>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="icons">
              <div class="icons__item" v-for="item in iconList" :key="item.id" @click="handelClassifyClick(item.id)">
                <img class="icons__item__img" :src="item.img" />
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
              >
                <img :src="item.img" alt="" />
                <div class="price">￥{{ item.price }}</div>
              </div>
            </div>
          </van-swipe-item>
          <!-- <van-swipe-item>
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
          </van-swipe-item> -->
        </van-swipe>
      </div>
      <div class="good" >
        <van-card
          v-for="item in shopList"
          :key="item.id"
          class="good-item"
          :tag="item.tag"
          :price="item.price"
          :desc="item.info"
          :title="item.name"
          :thumb="item.img"
          @click="toShopInfoClick(item.id)"
        >
          <template #tags>
            <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
            <van-tag plain type="danger">{{ item.tags[1] }}</van-tag>
          </template>
          <!-- <template #footer> -->
            <!-- <van-button size="mini">按钮</van-button> -->
            <!-- <van-button size="mini">{{ item.footer }}</van-button> -->
          <!-- </template> -->
        </van-card>
      </div>

    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  .bg {
    width: 100%;
    height: 300px;
    margin-top: -50px;
    height: 350px;
    background: #c82519;
    z-index: -2;
    -moz-border-radius: 100% / 400px;
    -webkit-border-radius: 100% / 400px;
    border-radius: 100% /50px;
  }
  .wrapper {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 50px;
    right: 0;
    padding: 0 18px;
    height: 100%;
    .position {
      display: flex;
      width: calc(100% - 140px);
      justify-content: center;
      margin: 20px 0;
      .position__icon {
        position: relative;
        margin-right: 30px;
      }
      .position_notice {
        position: absolute;
        right: 30px;
      }
      .iconfont {
        display: inline;
        text-align: center;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 50px;
      }
      .search {
        flex: 1;
        background: #f5f5f5;
        color: #b7b7b7;
        border-radius: 16px;
        font-size: 35px;
        span:first-child {
          margin: 0 5px;
          height: 50px;
          line-height: 50px;
          color: #c82519;
        }
        span:nth-child(3) {
          font-size: 35px;
          margin: 0 10px;
        }
        input {
          display: inline-block;
          width: calc(100% - 120px);
          border: none;
          background: #f5f5f5;
          font-size: 28px;
          line-height: 50px;
          &:focus {
            border: none;
            outline: none;
          }
        }
      }
      color: #fff;
    }

    .banner {
      width: 100%;
      height: auto;
      border-radius: 10px;
      &__img {
        margin-top: 10px;
        width: 100%;
        border-radius: 10px;
      }
    }
    .good {
      width: 100%;
      height: auto;
      margin-top: 20px;
      padding-bottom: 50px;
      &-item {
        position: relative;
        border-radius: 20px;
      }
    }
  }

  .nav {
    margin-top: 30px;
    width: 100%;
    height: 300px;
    border-radius: 50px;
    .icons {
      display: flex;
      flex-wrap: wrap;
      &__item {
        width: 20%;
        &__img {
          display: block;
          width: 60%;
          height: 75%;
          margin: 0 auto;
        }
        &__desc {
          font-size: 20px;
          margin: 6px 0 16px 0;
          text-align: center;
          color: #666;
        }
      }
    }
  }
  .home-miaosha {
    margin-top: 30px;
    width: 100%;
    // height: 200px;
    .miaoshaHead {
      background: #fff;
      width: 100%;
      height: 60px;
      font-size: 10px;
      h1{
        display: inline-block;
        padding-left:20px;
      }
      span{
        color: crimson;
        margin-left: 20px;
        font-size: 25px;
      }
      .timeDate{
        margin-left: 20px;
        display: inline-block;
      }
      .colon {
        display: inline-block;
        margin: 0 4px;
        color: #ee0a24;
      }
      .block {
        display: inline-block;
        width: 22px;
        color: #fff;
        padding: 0 5px;
        font-size: 12px;
        text-align: center;
        background-color: #ee0a24;
      }
    }
    .miaosha-item {
      display: flex;
      width: 100%;
      height: 200px;
      background: #fff;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      .miaosha-child {
        width: 19%;
        padding: 0 10px;
        height: 100%;
        img {
          width: 100%;
          margin-top: 10px;
          height: 140px;
        }
        .price {
          color: red;
          font-size: 25px;
          font-weight: bold;
          line-height: 20px;
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '../Home/Footer.vue'
const axios = require('axios')
// navIcon点击跳转到分类页面
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
const useShopInfoEffect = () => {
  const router = useRouter()
  const toShopInfoClick = function (id) {
    router.push({
      path: '/shop',
      query: {
        id: id
      }
    })
  }
  return toShopInfoClick
}
export default {
  name: 'Home',
  components: { Footer },
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
