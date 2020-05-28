import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios";
// import { API_BASE_URL } from "../config";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSigned: false,
    isManager: false,
  },
  mutations: {
    setIsSigned(state, isSigned) {
      state.isSigned = isSigned;
    },
    setIsManaged(state, isManager){
      state.isManager = isManager;          
    },
    logout(state) {
      state.isManager = false;
      state.isSigned = false;
      localStorage.clear()
    }

  },
  actions: {
    getMemberInfo({ commit }) {
      let token = localStorage.getItem("access_token1");
      console.log("token(getMember)=" + token);
      if (!token) {
        return;   
      }
      else{
        commit("setIsSigned", true);
      }
    },
  },
  modules: {},
});
