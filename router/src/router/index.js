import Vue from 'vue'
import Router from 'vue-router'

const HomeMessage = () => import("../components/HomeMessage")
const HomeNews = () => import("../components/HomeNews")
const Home = () => import('../components/Home')
const User = () => import("../components/User")
const About = () => import("../components/About")
const Profile = () => import("../components/Profile")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'new',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ],
  },
  {
    path: '/User/:UserId',
    component: User
  }
]

export default new Router({
  //配置组件和路由之间的映射关系
  routes,
  mode: 'history',
  // 可以修改选中状态 vue自动生成的 class 属性的名称
  linkActiveClass: 'active',
})
