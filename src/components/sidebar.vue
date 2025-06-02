<!-- Sidebar.vue -->
<script setup lang="ts">
import SidebarHeader from './sidebarHeader.vue'
import SidebarNavigation from './sidebarNavigation.vue'
import SidebarLogout from './sidebarLogout.vue'
</script>

<template>
  <div class="h-full flex-1 flex flex-col min-h-0 bg-indigo-700">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <SidebarHeader />
      <SidebarNavigation />
    </div>
    <SidebarLogout />
  </div>
</template>
