import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", true);
    },
    logout(context) {
      context.commit("setAuth", false);
    },
  },
  getters: {
    userAuthanticated(state) {
      return state.isLoggedIn;
    },
  },
  modules: {},
});
