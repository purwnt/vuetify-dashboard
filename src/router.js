import Vue from 'vue'
import Router from 'vue-router'

import DashView from './layouts/Dash.vue'
import LoginView from './layouts/Login.vue'
import NotFoundView from './layouts/NotFound.vue'

// Views
import DashboardView from './views/Dashboard.vue'
import AccountView from './views/Account.vue'
import ProfileView from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: DashView,
      children: [
        {
          path: 'dashboard',
          alias: '',
          component: DashboardView,
          name: 'Dashboard',
          meta: { description: 'Overview of environment' }
        },
        {
          path: 'account',
          component: AccountView,
          name: 'Account',
          meta: { description: 'Simple and advance table in CoPilot' }
        },
        {
          path: 'profile',
          component: ProfileView,
          name: 'Profile',
          meta: { description: 'Simple and advance table in CoPilot' }
        }
      ]
    },
    {
      // Page not found handler - 404
      path: '*',
      component: NotFoundView
    }
  ]
})
