import Vue from 'vue'
import Router from 'vue-router'

const HomeMessage = () => import("../components/stucpn/HomeMessage")
const HomeNews = () => import("../components/stucpn/HomeNews")
const Home = () => import('../components/stucpn/Home')
const User = () => import("../components/stucpn/User")
const About = () => import("../components/stucpn/About")
const Profile = () => import("../components/stucpn/Profile")
// 通过此方法安装插件必须的 实际上执行了 Router.install
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home',

  },
  {
    path: '/profile',
    component: Profile,
    //局部守卫
    // beforeEnter:(to, form, next)=>{},
    meta: {
      title: '档案'
    },
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
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
    meta: {
      title: '首页'
    },
  },
  {
    path: '/User/:UserId',
    component: User,
    meta:{
      title:'用户'
    },
  }
]

const router = new Router({
  //配置组件和路由之间的映射关系
  routes,
  mode: 'history',
  // 可以修改选中状态 vue自动生成的 class 属性的名称
  linkActiveClass: 'active',

})
// 导航拦截（监听导航方法）方法是路由跳转的时候会执行的方法to和from都是路由对象，可在在这里写方法操作元素获取路径等
// router.beforeEach((to, from, next)=>{
//   console.log(to);
//   console.log(from);
//   document.title = to.matched[0].meta.title
//   next()
// })

router.afterEach((to, from)=>{
  document.title = to.matched[0].meta.title
})

export default router
