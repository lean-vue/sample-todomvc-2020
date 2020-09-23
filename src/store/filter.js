
export default {
    namespaced: true,
    state: {
        visibility: ''
    },
    getters: {
        visibility: state => state.visibility
    },
    mutations: {
        setVisibility(state, visibility) {
            state.visibility = visibility;
        }
    }
}
