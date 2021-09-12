<template>
    <div class="goods-list">
      <good-item v-for="(goodObj, index) in goodsList" :key="index" :good-obj="goodObj"></good-item>
    </div>

</template>

<script>
import GoodItem from "@/components/content/goods/GoodItem";
export default {
  name: "GoodsList",
  components: {
    GoodItem
  },
  props:{
    goodsList:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-right: 2px;
  padding-left: 2px;
}
</style>
