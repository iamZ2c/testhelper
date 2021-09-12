<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" text_color="red">
        <template v-slot:bar-icon>
          <img src="../../../assets/img/footer01.png" alt="">
        </template>
        <template v-slot:bar-icon-active>
          <img src="../../../assets/img/footer001.png" alt="">
        </template>
        <template v-slot:bar-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:bar-icon>
          <img src="../../../assets/img/footer02.png" alt="">
        </template>
        <template v-slot:bar-icon-active>
          <img src="../../../assets/img/footer002.png" alt="">
        </template>
        <template v-slot:bar-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:bar-icon>
          <img src="../../../assets/img/footer03.png" alt="">
        </template>
        <template v-slot:bar-icon-active>
          <img src="../../../assets/img/footer003.png" alt="">
        </template>
        <template v-slot:bar-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:bar-icon>
          <img src="../../../assets/img/footer04.png" alt="">
        </template>
        <template v-slot:bar-icon-active>
          <img src="../../../assets/img/footer004.png" alt="">
        </template>
        <template v-slot:bar-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "@/components/common/MainTabbar/TabBarItem";

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
