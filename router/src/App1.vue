<template>
  <div id="app1">
    <tab-bar>
      <bar-item>
        <img slot="bar-icon" src="./assets/img/footer01.png" alt="">
        <div slot="bar-text">首页</div>
      </bar-item>
      <bar-item>
        <img slot="bar-icon" src="./assets/img/footer02.png" alt="">
        <div slot="bar-text">分类</div>
      </bar-item>
      <bar-item>
        <img slot="bar-icon" src="./assets/img/footer03.png" alt="">
        <div slot="bar-text">购物车</div>
      </bar-item>
      <bar-item>
        <img slot="bar-icon" src="./assets/img/footer04.png" alt="">
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
  }
}
</script>
<style>

</style>
