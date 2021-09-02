import Vue from 'vue'
import App from './App'
import App1 from './App1'
import router from './router/index.js'
import v_router from './router/index1.js'
import store from './store/index'
import {req} from './network/req'

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app1',
  store: store,
  router: v_router,
  render: h => h(App1),
})


req({
  url:'/home/multidata'
})
  .then(res=>console.log(res))
  .catch(err=>console.log(err))

