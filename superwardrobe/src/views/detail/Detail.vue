<template>
  <div>
    <detail-navbar></detail-navbar>
    <swiper-for-detail :cswiper_info_list="topImages"></swiper-for-detail>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavbar from "./detailcpn/DetailNavbar";
import DetailBaseInfo from "@/views/detail/detailcpn/DetailBaseInfo";
import {getDetail, Goods, Shop} from "@/network/detailreq";

import SwiperForDetail from "../../components/common/Swiper/SwiperForDetail";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    SwiperForDetail,
    DetailBaseInfo
  },
  data() {
    return {
      goodIid: null,
      topImages: [],
      goods:{},
      shop:{},
    }
  },
  created() {
    this.getGoodsIid()
    getDetail(this.goodIid).then(req => {
      console.log(req)
      // 传入详情的banner
      this.topImages = req.data.result.itemInfo.topImages
      console.log(req.data.result.itemInfo.topImages)
      // 获取商品信息
      this.goods = new Goods(
        req.data.result.itemInfo,
        req.data.result.columns,
        req.data.result.shopInfo.services
      )
      // 获取店铺信息
      this.shop = new Shop(req.data.result.shopInfo)
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
    }
  }
}
</script>

<style scoped>

</style>
