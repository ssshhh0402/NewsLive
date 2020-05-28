import Vue from 'vue'
import store from "../store";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Mypage from '../views/Mypage.vue'
import NewsList from '../views/NewsList.vue'

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
    path: '/newsList',
    name: 'newsList',
    component: NewsList
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
    path: "/logout",
    name: "logout",
    beforeEnter(to, from, next) {
      store.commit("logout");
      alert("로그아웃 되었습니다.");
      next("/");
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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
