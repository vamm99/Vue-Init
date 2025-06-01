import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { authRoutes } from '@/modules/auth/routes'
import { dashboardRoutes } from '@/modules/dashboard/routes'
import { projectRoutes } from '@/modules/project/routes'
import notFound from '@/helpers/views/notFound.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'
import { authGuard } from './authGuard'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LoginView,
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...projectRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: notFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(authGuard)

export default router
