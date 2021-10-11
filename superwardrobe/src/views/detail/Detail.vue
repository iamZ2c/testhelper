<template>
  <div>
    <detail-navbar></detail-navbar>
    <swiper-for-detail :cswiper_info_list="topImages"></swiper-for-detail>
  </div>
</template>

<script>
import DetailNavbar from "./detailcpn/DetailNavbar";
import {getDetail} from "../../network/detailreq";

import SwiperForDetail from "../../components/common/Swiper/SwiperForDetail";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    SwiperForDetail
  },
  data() {
    return {
      goodIid: null,
      topImages: null,
    }
  },
  created() {
    this.getGoodsIid()
  },
  activated() {
    this.getGoodsIid()
    getDetail(this.goodIid).then(req => {
      console.log(req)
     this.topImages = req.data.result.itemInfo.topImages
      console.log(req.data.result.itemInfo.topImages)
    })
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
