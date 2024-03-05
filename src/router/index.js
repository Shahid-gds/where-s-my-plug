import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'Default'},
      component: Home
    },
    {
      path: '/deliveries',
      name: 'Deliveries',
      meta: {layout: 'Default'},
      component: () => import('../pages/Deliveries.vue')
    }
  ]
})

export default router
