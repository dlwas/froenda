import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// i18n
import i18n from './i18n'
// VueScrollTo
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

// eslint-disable-next-line no-unused-vars
import db from './db'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')