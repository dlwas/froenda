import Vue from 'vue'
import Vuex from 'vuex'

import i18n from './modules/i18n'
import theme from './modules/theme'
import mobile from './modules/mobile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    i18n,
    theme,
    mobile
  },
  state: {},
  mutations: {},
  actions: {},
})