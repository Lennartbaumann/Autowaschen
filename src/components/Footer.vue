<template>
  <!-- Footer -->
  <footer class="bg-secondary text-text mt-12 border-t-2 border-primary py-8 relative">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center md:text-left">
        <p class="text-lg font-bold">Luc’s Autowaschhaus</p>
        <p class="text-sm">Perfekte Autopflege mit Leidenschaft</p>
      </div>
      <div class="flex flex-col space-y-2 text-center md:text-left">
        <router-link to="/datenschutz" class="text-sm hover:text-primary transition duration-300">
          Datenschutz
        </router-link>
        <router-link to="/impressum" class="text-sm hover:text-primary transition duration-300">
          Impressum
        </router-link>
        <router-link to="/agb" class="text-sm hover:text-primary transition duration-300">
          AGB
        </router-link>
      </div>
      <div class="flex justify-center md:justify-end space-x-6">
        <a href="#" class="hover:text-primary transition duration-300">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="hover:text-primary transition duration-300">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="hover:text-primary transition duration-300">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
    <div class="text-center text-xs py-4 border-t border-gray-600 mt-4">
      &copy; {{ new Date().getFullYear() }} Luc’s Autowaschhaus. Alle Rechte vorbehalten.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
i {
  font-size: 1.5rem;
}
footer {
  position: relative;
}
</style>
