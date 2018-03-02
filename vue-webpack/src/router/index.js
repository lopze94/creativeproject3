import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Profile from '@/components/Profile'
import Menu from '@/components/Menu'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/menu',
        name: 'Menu',
        component: Menu
      }
  ]
})
