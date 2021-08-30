<template>
  <div id="app1">

    <router-view></router-view>
    <tab-bar>
      <bar-item path="/home" text_color="red">
        <img slot="bar-icon" src="./assets/img/footer01.png" alt="">
        <img slot="bar-icon-active" src="./assets/img/footer001.png" alt="">
        <div slot="bar-text">首页</div>
      </bar-item>
      <bar-item path="/cart">
        <img slot="bar-icon" src="./assets/img/footer02.png" alt="">
        <img slot="bar-icon-active" src="./assets/img/footer002.png" alt="">
        <div slot="bar-text">分类</div>
      </bar-item>
      <bar-item path="/category">
        <img slot="bar-icon" src="./assets/img/footer03.png" alt="">
        <img slot="bar-icon-active" src="./assets/img/footer003.png" alt="">
        <div slot="bar-text">购物车</div>
      </bar-item>
      <bar-item path="/profile">
        <img slot="bar-icon" src="./assets/img/footer04.png" alt="">
        <img slot="bar-icon-active" src="./assets/img/footer004.png" alt="">
        <div slot="bar-text">我的</div>
      </bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import BarItem from "./components/tabbar/BarItem";

export default {
  name: "App1.vue",
  components: {
    TabBar,
    BarItem,
  },

}
</script>
<style>

</style>
