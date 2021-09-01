<template>
  <div>Home <br>
    <button @click="deplus">-</button>
    <button @click="plus">+</button>
    {{$store.getters.filterAge(10)}}
    {{$store.state.counter}}<br>
    <button @click="addCount(10000)">+n</button>
    <button @click="addStu">addStu</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    plus() {
      this.$store.commit('increment')
    },
    deplus() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit({
        type:'addCount',
        count:count
      })
    },
    addStu() {
      this.$store.commit('addStu')
    }
  }
}
</script>

<style scoped>

</style>
