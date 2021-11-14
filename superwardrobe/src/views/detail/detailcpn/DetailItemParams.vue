<template>
  <div v-if="Object.keys(productInfo).length !== 0">
    <div  class="product-info" v-for="(productInfoItem,index) in productInfo.info.set" :key="index">
      <div class="product-info-item">
        <span>
          {{ productInfoItem.key }}
        </span>
        <span id="product-info-item-value">
          {{ productInfoItem.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props: ["productInfo"],

}
</script>

<style scoped>
.product-info {
  margin-left: 6%;
  height: 35px;
  margin-right: 6%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  border-bottom: gainsboro solid 1px;
}
.product-info-item {
  width: 90%;
  font-size: 13px;
  line-height: 35px;
  font-weight: 400;

  display: inline-block;
  height: 35px;
}
#product-info-item-value {
  width: 20px;
  margin-left: 50px;

  color: var(--color-high-text);
}
</style>
