<!-- SidebarNavigation.vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  HomeIcon,
  DocumentDuplicateIcon,
  // UserGroupIcon,
  // CalendarIcon,
} from '@heroicons/vue/24/outline'

const route = useRoute()

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  { name: 'Proyectos', icon: DocumentDuplicateIcon, path: '/projects' },
]
</script>

<template>
  <nav class="mt-5 flex-1 px-2 space-y-1">
    <router-link
      v-for="item in navigation"
      :key="item.name"
      :to="item.path"
      class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      :class="[
        route.path === item.path
          ? 'bg-indigo-800 text-white'
          : 'text-indigo-100 hover:bg-indigo-600',
      ]"
    >
      <component
        :is="item.icon"
        class="mr-3 flex-shrink-0 h-6 w-6"
        :class="[route.path === item.path ? 'text-white' : 'text-indigo-300']"
      />
      {{ item.name }}
    </router-link>
  </nav>
</template>
