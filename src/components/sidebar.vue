<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/vue/24/outline'

const router = useRouter()

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  { name: 'Proyectos', icon: DocumentDuplicateIcon, path: '/projects' },
  // { name: 'Semillero', icon: UserGroupIcon, path: '/seedbeds' },
  // { name: 'Eventos', icon: CalendarIcon, path: '/events' },
  // { name: 'Usuarios', icon: HomeIcon, path: '/users' },
]

const logout = () => {
  // Implement logout logic here
  console.log('Logging out...')
  router.push('/login')
}
</script>

<template>
  <div class="h-full flex-1 flex flex-col min-h-0 bg-indigo-700">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <img class="h-8 w-full" src="../assets/logo.svg" alt="Workflow" />
      </div>
      <nav class="mt-5 flex-1 px-2 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          :class="[
            $route.path === item.path
              ? 'bg-indigo-800 text-white'
              : 'text-indigo-100 hover:bg-indigo-600',
          ]"
        >
          <component
            :is="item.icon"
            class="mr-3 flex-shrink-0 h-6 w-6"
            :class="[$route.path === item.path ? 'text-white' : 'text-indigo-300']"
          />
          {{ item.name }}
        </router-link>
      </nav>
    </div>
    <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
      <button @click="logout" class="flex-shrink-0 w-full group block">
        <div class="flex items-center">
          <div>
            <ArrowLeftOnRectangleIcon class="h-6 w-6 text-indigo-300" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-white">Cerrar Sesión</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
