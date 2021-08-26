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
  name: "Home"
}
</script>

<style scoped>

</style>
