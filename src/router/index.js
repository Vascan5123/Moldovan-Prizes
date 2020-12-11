import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signin from '../views/signin.vue'
import admin from '../views/admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: 'history'
})

export default router
