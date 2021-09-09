<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(title,index) in title_list" :key="index" @click="changeIndex(index)">
      <span :class="{'text-style': currentIndex===index}">{{ title }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabControl",
  props: {
    title_list: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex: 1;
  text-align: center;
  font-size: 15px;
}

.text-style {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
.tab-control span {
  padding: 2px;
}
</style>
