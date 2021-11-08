<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div style="width: 8px;height: 8px; background-color: black; display: inline-block; margin-left: 10px"></div>
    <div style="width: calc(100% - 20px); height: 1px; background-color: black; display: inline-block; position: absolute;margin-top: 7px"></div>
    <div style="margin: 10px 10px">{{detailInfo.desc}}</div>
    <div style="width: calc(100% - 20px); height: 1px; background-color: black; display: inline-block;"></div>
    <div style="width: 8px;height: 8px; background-color: black; display: inline-block; margin-right: 10px"></div>

    <div class="detail-img" v-for="(url, index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="url" alt="" @load="detailLoadImg">
    </div>

  </div>
</template>

<script>
import bus from "@/utils/index.ts";
export default {
  name: "DetailImageInfo",
  props:[
    'detailInfo'
  ],
  created() {
    console.log(this.detailInfo)
  },
  methods:{
    detailLoadImg(){
      this.$emit('detailLoadImg')
      bus.emit('DetailImgLoading')
    },
  }
}
</script>

<style scoped>
.detail-img > img{
  width: calc(100vw);
}
.detail-img{
  margin-top: 10px;
}
</style>
