import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ '../views/home')
        },
        {
            path: '/Home1',
            name: 'Home1',
            component: () => import(/* webpackChunkName: "about" */ '../components/Home1/index')
        },
        {
            path: '/Home2',
            name: 'Home2',
            component: () => import(/* webpackChunkName: "about" */ '../components/Home2/index')
        }
    ]
})


export default router
