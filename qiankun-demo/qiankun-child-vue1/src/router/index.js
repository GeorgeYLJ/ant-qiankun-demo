import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue')
            },
            {
                path: '/vueHome',
                name: 'vueHome',
                component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: '/child/vue1',
    routes
})

export default router
