<template>
  <div id="topBanner" style="padding-top: 0;" class="slide">
    <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" style="height: 150px">
      <a href="#">
        <img :src=bannerList[index] style="width:100%;height:150px;">
      </a>
    </div>
    <div class="bar">
      <span v-for="(item, index) in bannerList" :key="index" style="height: 10px;width: 10px; background-color: #ff5777"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      mark: 0,
      bannerList:["http://p3.so.qhimgs1.com/t01f3c2fbbfc190da13.jpg","http://p1.so.qhimgs1.com/t01fb8af23fa1c93441.jpg","http://p0.so.qhimgs1.com/t013e7b12d08f155a4c.jpg"]
    }
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === 3) { //当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play() {
      setInterval(this.autoPlay, 3000)
    },
    change(i) {
      this.mark = i
    }
  },
  created() {
    this.play()
  }
}


</script>

<style scoped>



</style>
