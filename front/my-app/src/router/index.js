import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Mypage from '../views/Mypage.vue'
Vue.use(VueRouter)
  // const rejectAuthUser = (to, from, next) => {
  //   let token = localStorage.getItem("access_token")
  //   if (token != null) {
  //     next()
  //   }
  //   else {
  //     next("/")
  //   }
  // }
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: "mypage",
    path: "/mypage",
    // beforeEnter: rejectAuthUser,
    component: Mypage,
    children: [
      {
        name: "mypage_info",
        path: "mypage_info",
        component: () =>
          import("../components/manage/MypageInfo.vue")
      },
    ],
    redirect: () => {
      return "/mypage/mypage_info";
    }
  },
  {
    path: "/news",
    name: "news",
    component: News,
    children: [
      {
        path: "newscreate",
        name: 'newscreate',
        component: () => import("../components/news/NewsCreate.vue")
      }
    ],
    redirect: () => {
      return "/news/newscreate";
    }
  }
  ,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
