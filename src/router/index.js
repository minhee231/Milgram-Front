import { createRouter, createWebHistory } from 'vue-router'
// import totalDashboard from '@/views/TotalDashboard.vue'
import TotalDashboard from '@/components/TotalViewsChart.vue'

const routes = [
  { path: '/', name: 'home', component: TotalDashboard },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
