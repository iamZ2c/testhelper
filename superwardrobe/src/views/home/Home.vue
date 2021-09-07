<template>
  <div>
    <!--顶部导航栏-->
    <navigation-bar class="nav-bar">
      <template v-slot:nav-center>
        购物街
      </template>
    </navigation-bar>

    <!--广告位-->
    <swiper :cswiper_info_list="swiper_info_list">
    </swiper>
    <!--推荐位置-->
    <recommend :recommends="recommend_list"></recommend>

  </div>
</template>


<script>
import Swiper from "@/components/common/swiper";
import NavigationBar from "@/components/common/NavigationBar";
import {getHomeMultiData} from '@/network/homesreq'
import Recommend from "@/components/common/RecommendView";

export default {
  name: "Home",
  components: {
    NavigationBar,
    Swiper,
    Recommend
  },
  data() {
    return {
      // response_text
      swiper_info_list: [],
      recommend_list: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res)
      this.swiper_info_list = res.data.data.banner.list
      this.recommend_list = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  margin-bottom: 2px;
}
</style>
