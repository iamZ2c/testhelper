<template>
  <div class="goods-list">
    <div class="title">猜你想看</div>
    <detail-recommend-item v-for="(goodObj, index) in goodsList" :key="index"
                           :good-obj="goodObj"></detail-recommend-item>
  </div>
</template>

<script>
import DetailRecommendItem from "@/views/detail/detailcpn/DetailRecommendItem";

export default {
  name: "DetailRecommendList",
  components: {
    DetailRecommendItem,

  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log(this.goodsList)
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;margin-bottom: 20px;
  font-size: 18px;
  color: var(--color-high-text);
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-right: 2px;
  padding-left: 2px;
}
</style>
