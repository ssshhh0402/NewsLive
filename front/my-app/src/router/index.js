import Vue from 'vue'
import store from "../store";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubHome from "../views/SubHome.vue";
import News from '../views/News.vue'
import Mypage from '../views/Mypage.vue'
import SnsNews from '../views/SnsNews.vue'
import Advertisement from '../views/Advertisement.vue'
import Catalogy from '../views/Catalogy.vue'
import NewsEach from '../components/common/NewsEach.vue'
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
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/newseach/:id",
      name: "newseach",
      props: true,
      component: NewsEach,
    },
    {
      path: "/catalogy",
      name: "Catalogy",
      component: Catalogy,
    },
    {
      path: "/subhome",
      name: "SubHome",
      component: SubHome,
    },
    {
      path: "/SnsNews",
      name: "SnsNews",
      component: SnsNews,
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
          component: () => import("../components/manage/MypageInfo.vue"),
        },
      ],
      redirect: () => {
        return "../mypage/mypage_info";
      },
    },
    {
      path: "/logout",
      name: "logout",
      beforeEnter(to, from, next) {
        store.dispatch("getKakaoLogout");
        alert("로그아웃 되었습니다.");
        next("/");
      },
    },
    {
      path: "/news",
      name: "news",
      component: News,
      children: [
        {
          path: "newscreate",
          name: "newscreate",
          component: () => import("../components/news/NewsCreate.vue"),
        },
        {
          path: "newsdetail/:id",
          name: "newsdetail",
          props: true,
          component: () => import("../components/news/NewsDetail.vue"),
        },
        {
          path: "loading/:id",
          name: "loading",
          props:true,
          component:()=>import("../components/common/LoadingPage.vue"),
        }
      ],
      redirect: () => {
        return "/news/newscreate";
      },
    },
    {
      path: "/advertisement",
      name: "advertisement",
      component: Advertisement,
      children: [
        {
          path: "adcreate",
          name: "adcreate",
          component: () => import("../components/advertisement/AdCreate.vue"),
        },
      ],
      redirect: () => {
        return "/advertisement/adcreate";
      },
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
