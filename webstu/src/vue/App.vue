<template>
  <div class="title">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "wo s message"
    }
  },
}
</script>

<style scoped>
.title {
  color: palevioletred;
}
</style>