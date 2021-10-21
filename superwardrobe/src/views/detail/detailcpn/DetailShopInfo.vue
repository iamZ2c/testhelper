<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop-info">
    <div class="shop-info-top">
      <div class="shop-title-logo">
        <img :src="shop.shopLogo" alt="">
      </div>
      <div class="shop-title-name">{{ shop.name }}</div>
    </div>

    <div class="shop-info-bom">
      <div class="shop-info-des-left" style="width:calc(50% - 5px); border-right: gainsboro solid 1px">
        <div>{{ sell }}万<br>总销量</div>
        <div style="margin-left: 10px; flex: 1">{{ shop.cGoods }}<br>全部宝贝</div>
      </div>
      <div class="shop-info-des-right">
        <div class="shop-info-des-right-item" v-for="(score,index) in shop.score" :key="index" style="width: 100%;">
          <span>{{ score.name }}</span>
          <span style="margin-left: 15px" :class="{'is-better':score.isBetter}">{{ score.score.toFixed(2) }}</span>
          <span :class="score.isBetter ?'is-better2':'is-better3'">{{ score.isBetter ? '高' : '低' }}</span>
        </div>
      </div>
    </div>
    <div class="shop-info-button">进店逛逛</div>

  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: [
    'shop'
  ],
  data() {
    return {
      sell: null,
      isBetter: true
    }
  },
  created() {
    // console.log(this.shop)
    this.sell = this.shop.cSells / 10000
    this.sell = this.sell.toFixed(1)

  },
}
</script>

<style scoped>
.shop-info {
  box-shadow: 0 5px gainsboro;
  padding-bottom: 25px;
}
.shop-info-top {
  display: flex;
}

.shop-title-logo {
  margin-top: 10px;
  margin-left: 10px;
  width: 40px;
}

.shop-title-logo > img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px gainsboro solid;
}

.shop-title-name {
  margin-top: 25px;
  margin-left: 20px;
}

.shop-info-des-left {
  font-size: 13px;
  padding-left: 23px;
  display: flex;
  margin-top: 5px;
  margin-left: 5px;
  text-align: center;
  line-height: 30px;
}

.shop-info-bom {
  display: flex;
}

.shop-info-des-right {

  font-size: 13px;

  line-height: 25px;
  margin-left: 40px;
}

.is-better {
  color: red;
}

.is-better2 {
  background-color: red;
  margin-left: 20px;
  color: white
}

.is-better3 {
  background-color: green;
  margin-left: 20px;
  color: white
}

.shop-info-button {
  margin-left: calc(50vw - 60px);
  font-size: 13px;
  height: 25px;
  width: 120px;
  margin-top: 15px;
  font-weight: 18;
  background-color: seashell;
  border-radius: 8px 8px;
  box-shadow: 0 0 white;
  border-color: white;
  text-align: center;
  line-height: 25px;
}
</style>
