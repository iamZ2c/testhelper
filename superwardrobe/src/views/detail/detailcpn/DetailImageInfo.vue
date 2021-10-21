<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    {{detailInfo.desc}}
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
</style>
