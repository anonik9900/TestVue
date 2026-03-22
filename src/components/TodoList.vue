<template>
<transition-group name="list" tag="ul" class="mt-6 space-y-3">
  <li 
    v-for="(item, index) in lista" 
    :key="item + index"
    class="p-3 rounded-xl flex justify-between items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
    :class="dark ? 'bg-gray-700 text-white' : 'bg-white shadow'"
    :style="{ transitionDelay: index * 50 + 'ms' }"
  >
    <span>{{ item }}</span>
    <button @click="$emit('rimuovi', index)" class="text-red-400 hover:scale-110 transition-transform">✖</button>
  </li>
</transition-group>
</template>

<script>
export default {
  props: ['lista', 'dark']
}
</script>

<style>
/* Animazioni lista */
.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.list-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>