import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cssVars: null,
  },
  mutations: {
    setCssVars(state, vars) {
      state.cssVars = vars;
    },
  },
  getters: {
    isDesktop(state) {
      return !!window.matchMedia(state.cssVars?.getPropertyValue('--desktop-only')).matches;
    },
    isTablet(state) {
      return !!window.matchMedia(state.cssVars?.getPropertyValue('--tablet')).matches;
    },
    isMobile(state) {
      return !!window.matchMedia(state.cssVars?.getPropertyValue('--mobile')).matches;
    },
    isMobileSmall(state) {
      return !!window.matchMedia(state.cssVars?.getPropertyValue('--mobile-small')).matches;
    },
  },
});
