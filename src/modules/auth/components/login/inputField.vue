<!-- InputField.vue -->
<script setup lang="ts">
defineProps<{
  id: string
  modelValue: string
  type: string
  placeholder: string
  autocomplete?: string
  topRounded?: boolean
  bottomRounded?: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input
      :id="id"
      :type="type"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      required
      class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      :class="{
        'rounded-t-md': topRounded,
        'rounded-b-md': bottomRounded,
      }"
    />
  </div>
</template>
