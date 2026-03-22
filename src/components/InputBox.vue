<template>
  <div>
    <input 
  v-model="testo"
  placeholder="Scrivi qualcosa..."
  :class="dark
    ? 'w-full p-3 rounded-xl border mb-4 bg-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:scale-105 transition-transform duration-200'
    : 'w-full p-3 rounded-xl border mb-4 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-200'"
/>

<button 
  @click="invia"
  class="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
>
  Aggiungi
</button>
  </div>
</template>

<script>
export default {
  props: ['dark'],
  data() {
    return {
      testo: ""
    }
  },
  methods: {
    invia() {
      if (this.testo.trim()) {
        this.$emit('aggiungi', this.testo)
        this.testo = ""
      }
    }
  }
}
</script>