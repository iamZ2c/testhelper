import Vue from 'vue'
import App from './App'
import App1 from './App1'
import router from './router/index.js'
import v_router from './router/index1.js'
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app1',
  store: store,
  router: v_router,
  render: h => h(App1),
})


