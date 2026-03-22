<template>
  <div 
    class="min-h-screen flex items-center justify-center p-6 transition-colors duration-500"
    :class="dark ? 'bg-gray-900' : 'animated-gradient'"
  >
    <div 
      class="w-full max-w-md p-8 rounded-2xl shadow-2xl transition-all duration-500"
      :class="dark ? 'bg-gray-800 text-white' : 'bg-white/90 text-black'"
    >

      <!-- Header, InputBox, TodoList -->
      <Header :dark="dark" @toggle-dark="toggleDark" />
      <InputBox :dark="dark" @aggiungi="aggiungi" />
      <TodoList :lista="lista" :dark="dark" @rimuovi="rimuovi" />

    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import InputBox from '../components/InputBox.vue'
import TodoList from '../components/TodoList.vue'

export default {
  components: { Header, InputBox, TodoList },

  data() {
    return {
      lista: [],
      dark: false
    }
  },

  methods: {
    aggiungi(testo) {
      this.lista.push(testo)
    },
    rimuovi(i) {
      this.lista.splice(i, 1)
    },
    toggleDark() {
      this.dark = !this.dark
    }
  },

  mounted() {
    const dati = localStorage.getItem("lista")
    const tema = localStorage.getItem("dark")

    if (dati) this.lista = JSON.parse(dati)
    if (tema) this.dark = JSON.parse(tema)
  },

  watch: {
    lista: {
      handler(val) {
        localStorage.setItem("lista", JSON.stringify(val))
      },
      deep: true
    },
    dark(val) {
      localStorage.setItem("dark", JSON.stringify(val))
    }
  }
}
</script>