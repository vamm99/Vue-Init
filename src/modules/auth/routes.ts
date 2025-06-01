import type { RouteRecordRaw } from 'vue-router'
import LoginView from './views/LoginView.vue'
import notFound from '@/helpers/views/notFound.vue'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false },
    component: LoginView,
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
  },
]
