<template>
  <div>
    <navigation-bar>
      <template v-slot:nav-left>
        <img class="img" src="../../../assets/img/icon-back.png" alt="" @click="backTo">
      </template>
      <template v-slot:nav-center>
        <div class="title">
          <div class="item"
               :class="{ftc: index===currentIndex}"
               v-for="(title, index) in navTitle"
               :key="index"
               @click="tabClick(index)">
            {{ title }}
          </div>
        </div>
      </template>
    </navigation-bar>
  </div>
</template>

<script>
import NavigationBar from "../../../components/common/NavigationBar";

export default {
  name: "DetailNavbar",
  data() {
    return {
      currentIndex: 0,
      navTitle: ["商品", "参数", "评论", "推荐"],
    }
  },
  components: {
    NavigationBar
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    },
    backTo() {
      this.$router.push('/home')
    }
  },
}
</script>

<style scoped>
.title {
  margin: auto auto;
  width: 55%;
  color: #666666;
  display: flex;
  font-size: 15px;
}

.item {
  float: left;
  margin-left: 15px;
}

.ftc {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}

.img {
  margin-top: 12px;
  margin-left: 10px;
  width: 20px;
  height: 20px
}
</style>
