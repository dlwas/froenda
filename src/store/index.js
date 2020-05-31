import Vue from 'vue'
import Vuex from 'vuex'

import i18n from './modules/i18n'
import mobile from './modules/mobile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    i18n,
    mobile
  },
  state: {},
  mutations: {},
  actions: {},
})