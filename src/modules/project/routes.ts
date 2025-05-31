import type { RouteRecordRaw } from 'vue-router'
import Project from './views/Project.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import notFound from '@/helpers/views/notFound.vue'

export const projectRoutes: RouteRecordRaw[] = [
    {
        path: '/project',
        name: 'project',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: Project,
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]
