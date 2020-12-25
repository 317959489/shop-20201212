import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'
Vue.use(VueRouter)

const routes = [

    {
        path: '',
        component: Layout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home,

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
    {
        path: '/city',
        name: 'city',
        component: () =>
            import ('../views/city/city.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login/Login.vue')
    },
    {
        path: '/goodsdetails',
        name: 'Goodsdetails',
        component: () =>
            import ('../views/goodsdetails/Goodsdetails.vue')
    },
    {
        path: '/settlement',
        name: 'Settlement',
        component: () =>
            import ('../views/settlement/Settlement.vue')
    },
    {
        path: '/shopAddress',
        name: 'ShopAddress',
        component: () =>
            import ('../views/shopAddress/ShopAddress.vue')
    },
    {
        path: '/editAddress',
        name: 'EditAddress',
        component: () =>
            import ('../views/editAddress/EditAddress.vue')
    },
    {
        path: '/modifyAddress',
        name: 'ModifyAddress',
        component: () =>
            import ('../views/modifyAddress/ModifyAddress.vue')
    },
    {
        path: '/personal',
        name: 'Pensonal',
        component: () =>
            import ('../views/personal/Personal.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ('../views/order/Order.vue')
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () =>
            import ('../views/collection/Collection.vue')
    },
    {
        path: '/viewaddress',
        name: 'viewAddress',
        component: () =>
            import ('../views/viewaddress/viewAddress.vue')
    },
    {
        path: '/browse',
        name: 'Browse',
        component: () =>
            import ('../views/browse/Browse.vue')
    },
    {
        path: '/comments',
        name: 'Comments',
        component: () =>
            import ('../views/comments/Comments.vuew')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router