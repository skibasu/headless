const state = () => ({

    isOpen: false,
    isMenuReseted: true,
    mainNav: [],
    footerNav: [],
    copyrights: '',
    socialMedia: [],
    logoImg: ''

});

const getters = {
    getOptions: (state) => state,
}

const mutations = {
    setOptions: (state, payload) => {
        state.mainNav = payload.acf.page_nav;
        state.footerNav = payload.acf.footer_nav
        state.copyrights = payload.acf.copyrights;
        state.socialMedia = payload.acf.socialmedia;
        state.logoImg = payload.acf.header_logo
    },

}

const actions = {
    nuxtServerInit(vuexContext, context) {

        return context.app.$axios.get('/wp-json/acf/v2/options').then(res => {
            vuexContext.commit('setOptions', res.data);
        })
    },
}


export default {
    state,
    getters,
    mutations,
    actions
}