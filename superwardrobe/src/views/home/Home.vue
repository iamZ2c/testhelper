<template>
  <div id="home">

    <!--顶部导航栏-->
    <navigation-bar class="nav-bar">
      <template v-slot:nav-center>
        购物街
      </template>
    </navigation-bar>

    <tab-control id="ttab-control" :title_list="['流行','新款','热销']"
                 v-show="topTabBarDisplay"
                 @getChangeIndex="changeGoodList($event,index)"></tab-control>

    <!--可滚动区域-->
    <com-scroll class="content" ref="homeScroll"
                @scroll="getScrollPosition"
                @pullUpLoad="loadMore"
                :probe-type="3"
                :pull-up-load="true">

      <!--广告位-->
      <swiper class="swiper-home" :cswiper_info_list="swiper_info_list">
      </swiper>
      <!--推荐位置-->
      <recommend :recommends="recommend_list" style="background-color: white"></recommend>

      <!--未来流行-->
      <future-view></future-view>

      <!--tab切换-->
      <tab-control class="tab-control" :title_list="['流行','新款','热销']"
                   @getChangeIndex="changeGoodList($event,index)"></tab-control>
      <goods-list :goods-list="currentGoodsList"></goods-list>

    </com-scroll>


    <back-top @click="backTopClick" v-show="backTopButtonDisplay"></back-top>

  </div>
</template>


<script>
// req
import {getHomeMultiData, getHomeGoods} from '@/network/homesreq'


// cpn
import Swiper from "@/components/common/Swiper/Swiper";
import NavigationBar from "@/components/common/NavigationBar";
import Recommend from "@/components/common/RecommendView";
import FutureView from "@/components/common/FutureView";
import TabControl from "@/components/common/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import ComScroll from "@/components/common/BetterScroll/ComScroll";
import BackTop from "@/components/content/BackTop/BackTop";


// bus
import bus from "@/utils/index.ts";

export default {
  name: "Home",
  components: {
    NavigationBar,
    Swiper,
    Recommend,
    FutureView,
    TabControl,
    GoodsList,
    ComScroll,
    BackTop

  },
  data() {
    return {
      // response_text
      scroll: null,
      swiper_info_list: [],
      recommend_list: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentGoodsList: [],
      backTopButtonDisplay: false,
      currentType: 'pop',
      topTabBarDisplay: false,
      currentScrollY: 0,
    }
  },
  created() {
    this.getMultiData()


    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
    this.currentGoodsList = this.currentGoodsList = this.goods['pop'].list
  },

  mounted() {
    // mounted 只执行一次
    const refresh = this.debounce(this.$refs.homeScroll.refresh, 10);

    bus.on('ImgLoading', () => {
      refresh()
    })
  },
  // vue3.0 keepalive的写法不一样注意
  activated() {
    this.$refs.homeScroll.backToTop(0, this.currentScrollY, 0)
  },
  deactivated() {
    this.currentScrollY = this.$refs.homeScroll.scroll.y
  },
  methods: {

    // 防抖函数
    debounce(func, delay) {
      let timer = null
      return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.call()
        }, delay)
      }

    },

    loadMore() {
      this.getGoodsData(this.currentType)
    },

    getMultiData() {
      getHomeMultiData().then(res => {

        this.swiper_info_list = res.data.data.banner.list
        this.recommend_list = res.data.data.recommend.list
      })
    },

    // 获取列表数据
    getGoodsData(type) {

      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // 使用 。。。 追加列表
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        // 告诉scroll已经下拉加载完成了
        this.$refs.homeScroll.finishLoad()
      })
    },
    // 切换商品列表，并且切换goodlist type
    changeGoodList(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          this.currentGoodsList = this.goods['pop'].list
          break;
        case 1:
          this.currentType = 'new'
          this.currentGoodsList = this.goods['new'].list
          break;
        case 2:
          this.currentGoodsList = 'sell'
          this.currentGoodsList = this.goods['sell'].list
          break
      }
    },
    // 监听返回最上层方法，vue3.0取消了 .native 可以直接使用
    backTopClick() {
      console.log("back to top")
      this.$refs.homeScroll.backToTop(0, 0, 1000)
    },

    // 监听滑动，并且展示BackTop按钮
    getScrollPosition(position) {
      this.backTopButtonDisplay = position.y < -1000;

      this.topTabBarDisplay = position.y < -571;
    }
  },

}
</script>

<style scoped>

#home {
  height: 100vh;
}

.nav-bar {
  position: relative;
  z-index: 9999;
  width: 100%;
  top: 0;
  background-color: var(--color-tint);
}

#ttab-control {
  background-color: whitesmoke;
  position: relative;
  z-index: 9;
  height: 40px;
  bottom: 49px;
  margin-top: -46px;
  padding: 10px;
  box-shadow: 0 3px 3px #888888;
}

.tab-control {
  background-color: whitesmoke;
  position: sticky;
  top: 44px;
  bottom: 49px;
  height: 40px;
  padding: 10px;
  box-shadow: 0 3px 3px #888888;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}

</style>

