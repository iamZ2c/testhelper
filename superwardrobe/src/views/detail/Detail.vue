<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
    <com-scroll ref="detailsc" class="content">
      <swiper-for-detail :cswiper_info_list="topImages"></swiper-for-detail>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-image-info :detailInfo="detailImageInfo"></detail-image-info>
      <detail-item-params :productInfo="itemParams"></detail-item-params>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <detail-recommend-list style="margin-top: 20px" :goodsList="recommendList"></detail-recommend-list>

    </com-scroll>
  </div>
</template>

<script>
import DetailNavbar from "./detailcpn/DetailNavbar";
import DetailBaseInfo from "@/views/detail/detailcpn/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/detailcpn/DetailShopInfo";
import DetailImageInfo from "@/views/detail/detailcpn/DetailImageInfo";
import DetailItemParams from "@/views/detail/detailcpn/DetailItemParams";
import DetailCommentInfo from "@/views/detail/detailcpn/DetailCommentInfo";
import DetailRecommendList from "@/views/detail/detailcpn/DetailRecommendList";
import {getDetail,getRecommend, Goods, Shop} from "@/network/detailreq";
import ComScroll from "../../components/common/BetterScroll/ComScroll";



import SwiperForDetail from "../../components/common/Swiper/SwiperForDetail";
import bus from "@/utils/index.ts";

export default {
  name: "Detail",
  components: {
    DetailCommentInfo,
    DetailNavbar,
    SwiperForDetail,
    DetailBaseInfo,
    DetailShopInfo,
    ComScroll,
    DetailImageInfo,
    DetailItemParams,
    DetailRecommendList
  },
  data() {
    return {
      goodIid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImageInfo: {},
      itemParams: {},
      commentInfo: {},
      recommendList:[],
    }
  },

  created() {
    getRecommend().then(req => {
      this.recommendList = req.data.data.list
    })

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
      // 获取商品参数
      this.itemParams = req.data.result.itemParams
      //取出评论信息
      if (req.data.result.rate !== null) {
        this.commentInfo = req.data.result.rate
      }
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
