import Vue from "vue"
import Vuex from "vuex"
import state from "./property/state"
import actions from "./property/actions"
import mutations from "./property/mutations"


// 使用插件都要用Vue.use
Vue.use(Vuex)


export default new Vuex.Store({
    state,
    actions,
    mutations
})