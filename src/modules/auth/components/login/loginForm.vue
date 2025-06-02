<!-- LoginForm.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputField from './inputField.vue'
import LoginFooter from './loginFooter.vue'

const router = useRouter()
const email = ref('')
const password = ref('')

function handleLogin() {
  console.log('Iniciando sesión con:', { email: email.value, password: password.value })
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
    <div class="rounded-md shadow-sm -space-y-px">
      <InputField
        id="email-address"
        v-model="email"
        type="email"
        placeholder="Correo electrónico"
        autocomplete="email"
        :top-rounded="true"
      />
      <InputField
        id="password"
        v-model="password"
        type="password"
        placeholder="Contraseña"
        autocomplete="current-password"
        :bottom-rounded="true"
      />
    </div>
    <LoginFooter />
  </form>
</template>
