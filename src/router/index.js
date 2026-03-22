import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contatti from '../views/Contatti.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contatti', component: Contatti }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router