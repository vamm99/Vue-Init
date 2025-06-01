<script setup lang="ts">
import Sidebar from '@/components/sidebar.vue'
</script>

<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <div class="hidden md:flex md:flex-shrink-0">
      <Sidebar />
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
