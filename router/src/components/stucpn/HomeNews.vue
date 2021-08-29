<template>
  <div>
    <ul v-for="i in news">
      <li>{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  data(){
    return {
      news:[
        "新闻1",
        "新闻2",
        "新闻3",
        "新闻4",
      ]
    }
  }
}
</script>

<style scoped>

</style>
