import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: function () {
      return import("../components/StartPage.vue")
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: function () {
      return import("../components/LoginPage.vue")
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: function () {
      return import("../components/RegisterPage.vue")
    }
  },
  {
    path: '/Main',
    name: 'Main',
    component: function () {
      return import("../components/MainPage.vue")
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
