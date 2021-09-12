<template>
  <div class="goods-list">
    <img class="goods-item-img" :src="goodObj.show.img" alt="">
    <div class="goods-info">
      <p>{{ goodObj.title }}</p>
      <span>¥:{{goodObj.price}}</span>
      <span>收藏：{{ goodObj.cfav }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    goodObj: {
      type: Object,
      default() {
        return {}
      }
    }
  },
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
