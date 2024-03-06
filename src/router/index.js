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
    },
    {
      path: '/brands',
      name: 'Brands',
      meta: {layout: 'Default'},
      component: () => import('../pages/Brands.vue')
    },
    {
      path: '/products',
      name: 'Products',
      meta: {layout: 'Default'},
      component: () => import('../pages/Products.vue')
    },
  ]
})

export default router
