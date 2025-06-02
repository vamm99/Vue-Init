<!-- LoginPage.vue -->
<script setup lang="ts">
import LoginForm from '../components/login/loginForm.vue'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesión</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          O
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            regístrate para una cuenta
          </a>
        </p>
      </div>
      <LoginForm />
    </div>
  </div>
</template>
