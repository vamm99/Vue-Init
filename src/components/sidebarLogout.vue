<!-- SidebarLogout.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const logout = () => {
  console.log('Logging out...')
  router.push('/login')
}
</script>

<template>
  <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
    <button @click="logout" class="flex-shrink-0 w-full group block">
      <div class="flex items-center">
        <div>
          <ArrowLeftOnRectangleIcon class="h-6 w-6 text-indigo-300" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-white cursor-pointer">Cerrar Sesión</p>
        </div>
      </div>
    </button>
  </div>
</template>
