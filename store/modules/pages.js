const state = () => ({

    pages: []
});

const getters = {
    getPages: (state) => state.pages,
}

const mutations = {
    setPages: (state, payload) => {
        state.pages = payload;
    },
}

const actions = {
    nuxtServerInit(vuexContext, context) {

        return context.app.$axios.get('/wp-json/wp/v2/pages').then(res => {
            vuexContext.commit('setPages', res.data);
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}