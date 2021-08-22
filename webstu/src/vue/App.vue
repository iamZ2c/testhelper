<template>
  <div>
    <span class="span">我是span</span>
    <button @click="cil()">按钮</button>{{message}}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "hello webpack"
    }
  },
  methods: {
    cil() {
      this.message = 'hello web'
    },
  }
}
</script>

<style scoped>
  .span {
    font-size: 30px;
  }
</style>