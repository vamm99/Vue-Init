import type { RouteRecordRaw } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import notFound from '@/helpers/views/notFound.vue'

export const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: Dashboard,
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]