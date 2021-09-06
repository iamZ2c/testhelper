<template>
  <div>
    <navigation-bar class="nav-bar">
      <template v-slot:nav-left>
        这是左边
      </template>
      <template v-slot:nav-center>
        这是中间
      </template>
      <template v-slot:nav-right>
        这是中间
      </template>
    </navigation-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import swiper from "@/components/common/Swiper2";
import NavigationBar from "@/components/common/NavigationBar";
import {getHomeMultiData} from '@/network/homesreq'

export default {
  name: "Home",
  components: {
    NavigationBar,
    swiper,
  },
  created() {
    getHomeMultiData().then(res =>{
      console.log(res);
    })
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
  }
</style>
