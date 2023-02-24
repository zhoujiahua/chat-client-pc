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
        meta: {
            title: 'OpenTMD Home',
            keepAlive: true,
        },
        children: [
            {
                path: "/home/chat",
                name: "HomeChat",
                meta: {
                    title: 'OpenTMD Chat',
                    keepAlive: true,
                },
                component: () => import("@/views/home/chat/index.vue")
            }
        ]
    },
    {
        path: "/about",
        name: "about",
        meta: {
            title: 'OpenTMD About',
            keepAlive: true,
        },
        component: AboutView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


const _isMobile = () => {
    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title || "OPENTMD.COM"
    if (_isMobile()) {
        window.location.replace('http://ai.12305.net');
    } else {
        next();
    }
})

export default router;
