<template>
  <div>
    <router-view></router-view>
    <router-link to="/home/new">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <span>我是home</span>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/message'
    }
  },
  created() {
    console.log("create");
  },
  destroyed() {
    console.log("destroy");
  },
  beforeRouteLeave(to ,from ,next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  },
  activated() {
    this.$router.replace(this.path)
  }
}
</script>

<style scoped>

</style>
