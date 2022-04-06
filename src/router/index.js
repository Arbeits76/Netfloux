import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
