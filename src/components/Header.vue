<template>  
  <nav class="bg-secondary text-text shadow-lg w-full border-b-2 border-primary">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-3xl font-extrabold tracking-wide hover:text-primary transition duration-300">
          Luc’s Autowaschhaus
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="px-4 py-2 text-lg rounded-lg hover:text-primary transition duration-300">
          Startseite
        </router-link>
        <router-link to="/ueber-uns" class="px-4 py-2 text-lg rounded-lg hover:text-primary transition duration-300">
          Über uns
        </router-link>
        <router-link to="/leistungen" class="px-4 py-2 text-lg rounded-lg hover:text-primary transition duration-300">
          Leistungen
        </router-link>
        <router-link to="/kontakt" class="px-6 py-2 text-lg rounded-lg bg-primary text-black font-bold shadow-md hover:bg-[#b38e1c] transition duration-300">
          Kontakt
        </router-link>
      </div>

      <!-- Mobile Navigation Toggle -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="menuOpen" class="md:hidden bg-secondary px-6 py-4">
      <router-link to="/" @click="toggleMenu" class="block w-full py-3 px-4 text-text hover:text-primary transition duration-300">
        Startseite
      </router-link>
      <router-link to="/ueber-uns" @click="toggleMenu" class="block w-full py-3 px-4 text-text hover:text-primary transition duration-300">
        Über uns
      </router-link>
      <router-link to="/leistungen" @click="toggleMenu" class="block w-full py-3 px-4 text-text hover:text-primary transition duration-300">
        Leistungen
      </router-link>
      <router-link to="/kontakt" @click="toggleMenu" class="block w-full py-3 px-4 rounded-lg bg-primary text-black font-bold shadow-md hover:bg-[#b38e1c] transition duration-300">
        Kontakt
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
nav {
  transition: background-color 0.3s ease;
}
button {
  transition: all 0.3s ease;
  font-weight: 600;
}
button:hover {
  transform: scale(1.05);
}
button:active {
  transform: scale(1.1);
}
</style>