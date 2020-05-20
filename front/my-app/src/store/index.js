import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSigned: false
  },
  mutations: {
    setIsSigned(state, isSigned) {
      state.isSigned = isSigned;
    }
  },
  actions: {
  },
  modules: {
  }
})
