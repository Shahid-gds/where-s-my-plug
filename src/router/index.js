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
      path: '/sign-in',
      name: 'Sign-In',
      component: () => import('../pages/Sign-In.vue')
    },
    {
      path: '/sign-up',
      name: 'Sign-Up',
      component: () => import('../pages/Sign-Up.vue')
    },
    {
      path: '/dispensaries',
      name: 'Dispensaries',
      meta: {layout: 'dispensariesDefault'},
      component: () => import('../pages/Dispensaries.vue')
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
    {
      path: '/deals',
      name: 'Deals',
      meta: {layout: 'Default'},
      component: () => import('../pages/Deals.vue')
    },
    {
      path: '/learn',
      name: 'Learn',
      meta: {layout: 'Default'},
      component: () => import('../pages/Learn.vue')
    },
    {
      path: '/strains',
      name: 'Strains',
      meta: {layout: 'Default'},
      component: () => import('../pages/Strains.vue')
    },
  ]
})

export default router
