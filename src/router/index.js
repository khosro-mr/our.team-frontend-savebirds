import { createRouter, createWebHistory } from 'vue-router'
import OurTeamView from '../views/OurTeamView.vue'

const routes = [
  {
    path: '/',
    name: 'our-team',
    component: OurTeamView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 