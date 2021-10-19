<template>
<!-- Object.keys 获取对象所有得key，有值得时候才去渲染，不然渲染过快娶不到值 -->
  <div v-if="Object.keys(goods).length !== 0">
    <div>
      <div class="info-title">{{ goods.title }}</div>
      <div class="info-price">
        <span class="n-price">{{ goods.price }}</span>
        <span class="o-price">{{ goods.oldPrice }}</span>
        <span v-if="goods.discountDesc !== null" class="discount">{{ goods.discountDesc }}</span>
      </div>
      <div class="info-other">
        <span>{{ goods.columns[0] }}</span>
        <span>{{ goods.columns[1] }}</span>
        <span style="margin-right: 0">{{ goods.services[goods.services.length - 1].name }}</span>
      </div>
    </div>
    <div class="info-services">
    <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
      <img :src="goods.services[index-1].icon" alt="">
      <span>{{ goods.services[index - 1].name }}</span>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: [
    'goods'
  ],
  created() {
    // console.log(this.goods.discountDesc)
    this.discountDesc = this.goods.discountDesc
    console.log(this.discountDesc)
  },
}
</script>

<style scoped>
.info-title {
  font-size: 20px;
  margin-top: 260px;
  margin-left: 3%;
  margin-right: 3%;
}

.info-price {
  margin-left: 3%;
  margin-top: 1%;
  height: 28px;
  display: inline-block;
}

.n-price {
  color: #ff5777;
  font-size: 25px;
}

.o-price {
  color: darkgray;
  text-decoration: line-through;
}

.discount {
  line-height: 18px;
  text-align: center;
  background-color: #ff5777;
  color: white;
  font-size: 7px;
  display: inline-block;
  width: 55px;
  height: 18px;
  border-radius: 25px;
  position: absolute;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding: 0 10px;
  color: darkgrey;
}

.info-services {
  color: darkgray;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px gainsboro solid;
}

.info-services {
  margin-top: 10px;
  font-size: 14px;
  line-height: 25px;
  height: 50px;
}

.info-service-item > img {
  height: 12px;
  width: 12px;
}

</style>
