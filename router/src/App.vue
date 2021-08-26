<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" >home</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>about</router-link>-->
    <button @click="homeClk">home</button>
    <button @click="aboutClk">abuot</button>
    <router-link :to="'/user/'+userId" tag="button" replace>user</router-link>
<!--    <router-link :to="{path:'/profile', query:{name:'lisi',height:'188'}}" tag="button">profile</router-link>-->
    <button @click="profileClk">profile</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: '24'
    }
  },
  methods: {
    homeClk() {
      this.$router.push('/home')
    },
    aboutClk() {
      this.$router.push('/about')
    },
    profileClk() {
      this.$router.push({
        path: '/profile',
        query:{
          name:"zhangsan1",
          height:"120cm",
        },
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: #f00;
}
</style>
