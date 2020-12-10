const state = () => ({
   posts: []
});

const getters = {
   getPosts: (state) => state.posts,
}

const mutations = {
   setPosts: (state, payload) => {
      state.posts = payload;
   },
}

const actions = {
   nuxtServerInit(vuexContext, context) {
      return context.app.$axios.get('/wp-json/wp/v2/posts').then(res => {
         vuexContext.commit('setPosts', res.data);
      })
   },
}

export default {
   state,
   getters,
   actions,
   mutations,
}