import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PortfolioView.vue'),
    },
    {
      path: '/academic',
      name: 'academic',
      component: () => import('../views/academicView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' }),
    },
    {
      path: '/others',
      name: 'others',
      component: () => import('../views/OthersView.vue'),
    },
  ],
})

export default router
