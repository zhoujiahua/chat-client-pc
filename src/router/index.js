import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/home/index.vue";
import AboutView from "@/views/about/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    redirect: "/home/chat",
    children: [
      {
        path: "/home/chat",
        name: "HomeChat",
        component: () => import("@/views/home/chat/index.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
