<template>
  <div class="min-h-screen bg-gray-100">

    <!-- NAVBAR MODERNA -->
    <nav class="bg-white shadow p-4 flex justify-between items-center">
      
      <!-- Logo / Titolo -->
      <div class="text-xl font-bold text-blue-600">VueApp 🚀</div>

      <!-- Link Desktop -->
      <ul class="hidden md:flex gap-6">
        <li>
          <router-link 
            to="/" 
            class="relative group text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Home
            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/about" 
            class="relative group text-gray-700 hover:text-blue-500 transition duration-300"
          >
            About
            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contatti" 
            class="relative group text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Contatti
            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button @click="menuOpen = !menuOpen">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

    </nav>

    <!-- Mobile Menu -->
<transition name="fade-slide">
  <ul v-if="menuOpen" class="md:hidden bg-white shadow-lg p-4 flex flex-col gap-4">
    <li><router-link to="/" @click="menuOpen=false" class="text-gray-700 hover:text-blue-500 hover:scale-105 transition-transform duration-200">Home</router-link></li>
    <li><router-link to="/about" @click="menuOpen=false" class="text-gray-700 hover:text-blue-500 hover:scale-105 transition-transform duration-200">About</router-link></li>
    <li><router-link to="/contatti" @click="menuOpen=false" class="text-gray-700 hover:text-blue-500 hover:scale-105 transition-transform duration-200">Contatti</router-link></li>
  </ul>
</transition>

    <!-- CONTENUTO PAGINA -->
    <div class="p-6">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>

<style>
/* Animazione fade per menu mobile */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.animated-gradient {
  background: linear-gradient(-45deg, #3b82f6, #9333ea, #f472b6, #10b981);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% {background-position:0% 50%;}
  50% {background-position:100% 50%;}
  100% {background-position:0% 50%;}
}
  .transition-colors {
  transition-property: background-color, color;
  transition-duration: 500ms;
}
  /* Animazione entrata/uscita pagina */
.page-enter-active, .page-leave-active {
  transition: all 0.5s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
  .page-enter-active {
  animation: gradientShift 1s ease forwards;
}

@keyframes gradientShift {
  0% { background-position:0% 50%; }
  50% { background-position:100% 50%; }
  100% { background-position:0% 50%; }
}
  /* Animazione menu mobile */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>