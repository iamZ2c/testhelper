<template>
  <div class="tab-item" @click="on_clk">
    <slot v-if="!active" name="bar-icon"></slot>
    <slot v-else name="bar-icon-active"></slot>
    <div :class="{'bar-text': active}">
      <slot name="bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarItem",
  data(){
    return {
      active: true
    }
  },
  props:{
    path:String
  },
  methods:{
    on_clk(){
      this.$router.replace(this.path)
    },
  }
}
</script>

<style scoped>
.bar-text {
  color: red;
}
</style>
