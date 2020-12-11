import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/Layout.vue'
Vue.use(VueRouter)

const routes = [

    {
        path: '',
        component: Layout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/classification',
                name: 'Classification',
                component: () =>
                    import ('../views/classification/Classification.vue')
            },
            {
                path: '/shoppingcart',
                name: 'Shoppingcart',
                component: () =>
                    import ('../views/shoppingcart/Shoppingcart.vue')
            },
            {
                path: '/mine',
                name: 'Mine',
                component: () =>
                    import ('../views/mine/Mine.vue')
            },
        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router