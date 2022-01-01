import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            'showSidebar': true
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.showSidebar = !state.showSidebar
        }
    }
})

export default store;
