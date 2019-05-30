import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import edit from './edit'
import finish from './finish'
import item from './item'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isFinishPage: true
    },
    mutations: {
        updateBtn(state, flag) {
            state.isFinishPage = flag;
        }
    },
    actions: {

    },
    modules: {
        home,
        edit,
        finish,
        item
    }
});