<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay
} from "swiper/core";
import 'swiper/swiper-bundle.css'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])
const { Swiper, SwiperSlide ,directive} = getAwesomeSwiper(SwiperClass);


export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }, //这个如果是全局引入，就可以不用写
  data() {
    return {
      banners: [
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg",
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg"
      ],
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        mousewheel: true
        // ...
      }
    };
  },
}
</script>

<style scoped>

</style>
