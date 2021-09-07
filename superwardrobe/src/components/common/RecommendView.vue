<template>
  <div class="recommend">
    <div class="recommend_item" v-for="(recommend, index) in recommends" :key="index">
      <a :href="recommend.link">
        <img class="recommend_item_img" :src="recommend.image" alt="">
      </a>
      <div class="recommend_item_text" >{{ recommend.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: ['recommends']
}
</script>

<style scoped>
.recommend {
  display: flex;
  height: 150px;
  box-shadow: 0 10px 0 whitesmoke;
}

.recommend_item {
  padding: 6px;
  height: 80%;
}

.recommend_item_img {
  width: 100%;
  height: 80%;
}
.recommend_item_text {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
</style>
