import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import api from './http/api'
import { backClick } from './comment/index'
import { Dialog } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
// 全局注册
Vue.use(Dialog);


Vue.use(Vant);
Vue.prototype.$api = api
Vue.prototype.backClick = backClick


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')