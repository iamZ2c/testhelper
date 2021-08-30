import Vue from 'vue'
import App from './App'
import App1 from './App1'
import router from './router/index.js'
import v_router from './router/index1.js'

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app1',
  router: v_router,
  render: h => h(App1),
})


