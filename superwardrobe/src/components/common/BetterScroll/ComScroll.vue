<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "ComScroll",
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 1
      },
    },
  },
  methods: {
    backToTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType
    })

    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
  },
}
</script>

<style scoped>

</style>
