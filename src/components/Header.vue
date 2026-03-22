<template>
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">App moderna 🚀</h1>

    <button @click="$emit('toggle-dark')" class="text-xl">
      {{ dark ? '☀️' : '🌙' }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['dark']
}
</script>