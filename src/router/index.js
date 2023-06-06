import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/v_model',
    name: 'v_model',
    component: () => import('../views/v_model.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
