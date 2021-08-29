import Vue from 'vue'
import App from './App'
import App1 from './App1'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app1',
  router,
  render: h => h(App1),
})


