<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
    <com-scroll ref="detailsc" class="content">
      <swiper-for-detail :cswiper_info_list="topImages"></swiper-for-detail>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-image-info :detailInfo="detailImageInfo"></detail-image-info>
    </com-scroll>
  </div>
</template>

<script>
import DetailNavbar from "./detailcpn/DetailNavbar";
import DetailBaseInfo from "@/views/detail/detailcpn/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/detailcpn/DetailShopInfo";
import DetailImageInfo from "@/views/detail/detailcpn/DetailImageInfo";
import {getDetail, Goods, Shop} from "@/network/detailreq";
import ComScroll from "../../components/common/BetterScroll/ComScroll";

import SwiperForDetail from "../../components/common/Swiper/SwiperForDetail";
import bus from "@/utils/index.ts";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    SwiperForDetail,
    DetailBaseInfo,
    DetailShopInfo,
    ComScroll,
    DetailImageInfo,
  },
  data() {
    return {
      goodIid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImageInfo: {}
    }
  },

  created() {
    this.getGoodsIid()
    getDetail(this.goodIid).then(req => {
      // 传入详情的banner
      this.topImages = req.data.result.itemInfo.topImages
      // console.log(req.data.result.itemInfo.topImages)
      // 获取商品信息
      this.goods = new Goods(
        req.data.result.itemInfo,
        req.data.result.columns,
        req.data.result.shopInfo.services
      )
      // 获取店铺信息
      this.shop = new Shop(req.data.result.shopInfo)
      // 取出详情信息
      this.detailImageInfo = req.data.result.detailInfo
      console.log(this.detailImageInfo)
    })

  },
  activated() {
  },
  deactivated() {
    this.goodIid = null
  },
  methods: {
    getGoodsIid() {
      this.goodIid = this.$route.params.iid
    },

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
  },

  mounted() {
    // mounted 只执行一次
    const refresh = this.debounce(this.$refs.detailsc.refresh, 10);

    bus.on('DetailImgLoading', () => {
      refresh()
    })
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: calc(100vh);
}

.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
