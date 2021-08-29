<template>
  <div>
    我是profile主页
    <span>{{$route.query.name}}</span>
    <span>{{$route.query.height}}</span>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("profile create");
  },
  destroyed() {
    console.log("profile destory");
  }
}
</script>

<style scoped>

</style>
