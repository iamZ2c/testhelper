<template>
  <div class="goods-list" @click="itemClick">
    <img class="goods-item-img" :src="goodObj.image" alt="" @load="onImgLoad">
    <div class="goods-info">
      <p>{{ goodObj.title }}</p>
      <span>¥:{{goodObj.price}}</span>
      <span>收藏：{{ goodObj.cfav }}</span>
    </div>
  </div>
</template>

<script>
import bus from "@/utils/index.ts";

export default {
  name: "DetailRecommendItem",
  props: {
    goodObj: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodObj.iid)
    },
    onImgLoad() {
      bus.emit('ImgLoading')
    }
  }
}
</script>

<style scoped>
.goods-list {
  width: 50%;
}

.goods-info {
  font-size: 12px;
  text-align: center;
  width: 100%;
  margin-bottom: 3px;
}

.goods-item-img {
  width: 100%;
  border-radius: 10px;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
</style>
