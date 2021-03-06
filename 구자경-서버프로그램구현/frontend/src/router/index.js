import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoView from '../views/MemoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'memo',
    component: MemoView
  },
  {
    path: '/write',
    name: 'write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WriteView.vue')
    }
  },
  {
    path: '/page/:id',
    name: 'page',
    component: function() {
      return import("../views/PageView.vue");
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
