import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import PageNews from '@/pages/PageNews.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/:slug',
    component: PageNews 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
