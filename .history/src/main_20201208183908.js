import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from 'better-scroll'
// import Vant from 'vant';
// import 'vant/lib/index.css';
// import { Lazyload } from 'vant';
import api from './http/api'




// Vue.use(Vant);
Vue.prototype.$api = api
Vue.use(Lazyload);

const bs = new BScroll('.wrapper', {
    pullUpLoad: true,
    scrollbar: true,
    pullDownRefresh: true
        // and so on
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')