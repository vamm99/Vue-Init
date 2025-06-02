import type { RouteRecordRaw } from 'vue-router'
import Project from './views/Project.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import notFound from '@/helpers/views/notFound.vue'

export const projectRoutes: RouteRecordRaw[] = [
  {
    path: '/projects',
    name: 'projects',
    component: AdminLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: 'projects-home',
        component: Project,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
  },
]
