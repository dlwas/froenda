import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// i18n
import i18n from './i18n'
// VueScrollTo
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
// db
import projects from '@/assets/db/dataProjects.json'
import root from '@/assets/db/dataRoot.json'
Vue.prototype.$db = {
  root,
  projects
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')