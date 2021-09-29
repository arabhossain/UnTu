export default {
  namespace: true,
  state: () => ({
    loading: false,
  }),
  getters: {
    isLoading: state => state.loading,
  },
  actions: {
    startLoading({commit}) {
      if (process.browser) {
        window.$nuxt.$root.$loading.start();
      }
      commit('LOADING', true)
    },
    finishLoading({commit}) {
      if (process.browser) {
        window.$nuxt.$root.$loading.finish();
      }
      commit('LOADING', false)
    },
  },
  mutations: {
    LOADING(state, isLoading) {
      state.loading = isLoading
    },
  }
}
