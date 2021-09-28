

const Home = () => import("../views/home/Home")
const Cart = () => import("../views/cart/Cart")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
const Detail = () => import("../views/detail/Detail")


import {createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/cate',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    // 路由传递值的方式有两种,下面的方式是动态传递,还有一种方式是querry,需要在push的时候传递对象
    path: '/detail/:iid',
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router

