<template>
  <div>
    <!--顶部导航栏-->
    <navigation-bar class="nav-bar">
      <template v-slot:nav-center>
        购物街
      </template>
    </navigation-bar>

    <!--广告位-->
    <swiper class="swiper-home" :cswiper_info_list="swiper_info_list">
    </swiper>


    <!--推荐位置-->
    <recommend :recommends="recommend_list"></recommend>

    <!--当季流行-->
    <future-view></future-view>


    <!--tab切换-->
    <tab-control class="tab-control" :title_list="['流行','美妆','无敌']"></tab-control>
    <future-view></future-view>
    <future-view></future-view>
    <future-view></future-view>
    <future-view></future-view>
  </div>
</template>


<script>
// req
import {getHomeMultiData, getHomeGoods} from '@/network/homesreq'


// cpn
import Swiper from "@/components/common/swiper";
import NavigationBar from "@/components/common/NavigationBar";
import Recommend from "@/components/common/RecommendView";
import FutureView from "@/components/common/FutureView";
import TabControl from "@/components/common/TabControl";

export default {
  name: "Home",
  components: {
    NavigationBar,
    Swiper,
    Recommend,
    FutureView,
    TabControl
  },
  data() {
    return {
      // response_text
      swiper_info_list: [],
      recommend_list: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  created() {
    this.getMultiData()


    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  methods: {
    getMultiData() {
      getHomeMultiData().then(res => {
        console.log(res)
        this.swiper_info_list = res.data.data.banner.list
        this.recommend_list = res.data.data.recommend.list
      })
    },
    getGoodsData(type) {
      console.log(type)
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // 使用 。。。 追加列表
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    },
  }
}
</script>

<style scoped>
.nav-bar {
  position: sticky;
  width: 100%;
  top: 0;
  background-color: var(--color-tint);
}

.tab-control {
  background-color: whitesmoke;
  position: sticky;
  top: 44px;
  height: 40px;
  padding: 10px;
  box-shadow: 0 5px 5px #888888;
}
</style>
