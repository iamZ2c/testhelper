<template>
  <div id="topBanner" style="padding-top: 0;" class="slide">
    <div v-for="(cswiper_info, index) in cswiper_info_list" v-show="index===mark" :key="index" style="height: 150px">
      <a :href="cswiper_info.link">
        <img :src=cswiper_info style="width:100%;height:400px;">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperForDetail",
  props:['cswiper_info_list'],
  data() {
    return {
      mark: 0,
    }
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === this.cswiper_info_list.length) { //当遍历到最后一张图片置零
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
    // console.log(this.cswiper_info_list)
    this.play()
  }
}


</script>

<style scoped>



</style>
