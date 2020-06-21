import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/froenda',
    name: 'Project-Froenda',
    component: () => import( /* webpackChunkName: "projects/froenda" */ '../views/projects/ProjectFroenda.vue')
  },
  {
    path: '/projects/volteg',
    name: 'Project-Volteg',
    component: () => import( /* webpackChunkName: "projects/volteg" */ '../views/projects/ProjectVolteg.vue')
  },
  {
    path: '/projects/my_passion',
    name: 'Project-MyPassion',
    component: () => import( /* webpackChunkName: "projects/my_passion" */ '../views/projects/ProjectMyPassion.vue')
  },
  {
    path: '/projects/jrb_calculators',
    name: 'Project-JRBcalculators',
    component: () => import( /* webpackChunkName: "projects/jrb_calculators" */ '../views/projects/ProjectJRBcalculators.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router