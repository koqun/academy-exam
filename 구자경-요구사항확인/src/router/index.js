import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: function () {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
    children: [
      {
        path: ":page",
        component: function () {
          return import("../components/PageComp.vue");
        },
      },
    ],
  },
  {
    path: "/user/:user",
    name: "user",
    component: function () {
      return import("../views/UserView.vue");
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
