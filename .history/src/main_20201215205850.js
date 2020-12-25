import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import api from './http/api'
import { backclick } from './comment/index'




Vue.use(Vant);
Vue.prototype.$api = api
Vue.prototype.backclick = backclick


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')