<template>
<div>
  {{goodIid}}
</div>
</template>

<script>
export default {
  name: "Detail",
  data(){
    return {
      goodIid:null
    }
  },
  created() {
    this.getGoodsIid()
  },
  methods: {
    getGoodsIid() {
      this.goodIid = this.$route.params.iid
    }
  }
}
</script>

<style scoped>

</style>
