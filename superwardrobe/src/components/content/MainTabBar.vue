<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" text_color="red">
        <template v-slot:bar-icon>
          <img src="../../assets/img/footer01.png" alt="">
        </template>
        <template v-slot:bar-icon-active>
          <img src="../../assets/img/footer001.png" alt="">
        </template>
        <template v-slot:bar-text>
          <div>首页</div>
        </template>

      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="bar-icon" src="../../assets/img/footer02.png" alt="">
        <img slot="bar-icon-active" src="../../assets/img/footer002.png" alt="">
        <div slot="bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="bar-icon" src="../../assets/img/footer03.png" alt="">
        <img slot="bar-icon-active" src="../../assets/img/footer003.png" alt="">
        <div slot="bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="bar-icon" src="../../assets/img/footer04.png" alt="">
        <img slot="bar-icon-active" src="../../assets/img/footer004.png" alt="">
        <div slot="bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "../common/TabBar";
import TabBarItem from "@/components/common/TabBarItem";

export default {
  name: "MainTabBar",
  components: {

    TabBar,
    TabBarItem,
  },
}
</script>

<style scoped>

</style>
