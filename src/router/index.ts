import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { authRoutes } from '@/modules/auth/routes'
import { dashboardRoutes } from '@/modules/dashboard/routes'
import { projectRoutes } from '@/modules/project/routes'
import notFound from '@/helpers/views/notFound.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LoginView
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...projectRoutes,
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
