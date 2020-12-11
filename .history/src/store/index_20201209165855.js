import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        abc: 123
            // this.$store.state.abc // 取
    },
    mutations: {
        set_abc(state, v) { //存
            state.abc = v
        }
    },
    actions: {},
    modules: {}
})