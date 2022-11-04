import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import PageNews from '@/pages/PageNews.vue'
import TestPage from "@/pages/TestPage";
const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/:slug',
    component: PageNews 
  },
  {
    path: "/test",
    component: TestPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
