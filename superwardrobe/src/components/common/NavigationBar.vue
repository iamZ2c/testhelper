<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
  }
  .nav-bar-center {
    flex: 1;
    text-align: center;
  }
  .nav-bar-left,.nav-bar-right {

  }
</style>
