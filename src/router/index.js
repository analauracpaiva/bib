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
      path: '/generos',
      name: 'genre',
      component: () => import('../views/GenreView.vue')
    },
    {
      path: '/livros',
      name: 'books',
      component: () => import('../views/BookView.vue')
    }
  ]
})

export default router
