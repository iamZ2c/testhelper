<template>
<div>
  <detail-navbar></detail-navbar>
</div>
</template>

<script>
import DetailNavbar from "./detailcpn/DetailNavbar";

export default {
  name: "Detail",
  components:{
    DetailNavbar
  },
  data(){
    return {
      goodIid:null
    }
  },
  created() {
    this.getGoodsIid()
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
