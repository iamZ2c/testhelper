import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'

Vue.use(Router)



const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home
  }
]

export default new Router({
  //配置组件和路由之间的映射关系
  routes
})
