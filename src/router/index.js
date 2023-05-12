import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },{
    path: '/PageOne',
    name: 'PageOne',
    component: () => import('../views/PageOne.vue')
  },{
    path: '/PageTwo',
    name: 'PageTwo',
    component: () => import('../views/PageTwo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
