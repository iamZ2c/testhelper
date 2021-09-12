<template>
  <div class="tab-item" @click="on_clk">
    <slot v-if="!isActive" name="bar-icon"></slot>
    <slot v-else name="bar-icon-active"></slot>
    <div :style="text_color_style">
      <slot name="bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive(){
      // 那个路由被激活了,$route就是那个路由
      return this.$route.path.indexOf(this.path) !== -1;
    },
    text_color_style() {
      return this.isActive ? {color: this.text_color} : {}
    }
  },
  props:{
    path:String,
    text_color:{
      type: String,
      default: "red"
    }
  },
  methods:{
    on_clk(){
      this.$router.replace(this.path)
    },
  }
}
</script>

<style scoped>
</style>
