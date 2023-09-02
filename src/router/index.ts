import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/terminal',
      name: 'terminal',      
      component: () => import('../views/TerminalView.vue')
    },
    {
      path: '/projects',
      name: 'projects',     
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',      
      component: () => import('../views/QuizView.vue')
    }
  ]
})

export default router
