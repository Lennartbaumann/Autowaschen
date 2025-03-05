<template>
  <section class="hero relative w-full h-screen flex justify-center items-center text-text overflow-hidden">
    <!-- Bilder als <img> für bessere SEO & Performance -->
    <div v-for="(image, index) in images" 
         :key="index"
         class="absolute inset-0 w-full h-full transition-all duration-[10000ms] ease-in-out"
         :style="{
           opacity: currentIndex === index ? 1 : 0,
           transform: currentIndex === index ? 'scale(1.08)' : 'scale(1.2)',
           transition: 'opacity 4s ease-in-out, transform 12s ease-in-out'
         }">
      <img :src="image" :alt="`Hero image ${index + 1}`" class="w-full h-full object-cover" loading="lazy"/>
    </div>

    <!-- Overlay für besseren Kontrast -->
    <div class="absolute inset-0 bg-black/40 md:bg-black/50"></div>

    <!-- Inhalt für Mobile & Desktop -->
    <div class="relative z-10 text-center px-6 w-full">
      <div class="hidden md:flex flex-col items-center text-center max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-7xl font-bold text-primary leading-tight">
          Perfekte Autopflege – Mehr als nur Sauberkeit
        </h1>
        <p class="text-lg md:text-2xl mt-6 text-platinum">
          Unsere professionelle Autopflege bringt dein Fahrzeug auf Hochglanz – von der Außenreinigung bis zur Tiefenpflege des Innenraums.
        </p>
      </div>

      <div class="md:hidden text-center max-w-md mx-auto">
        <h1 class="text-3xl font-bold text-primary">
          Premium-Autopflege für dein Fahrzeug
        </h1>
        <p class="text-base mt-4 text-platinum">
          Hochwertige Reinigung und Pflege – innen & außen.
        </p>
      </div>

      <div class="mt-6">
        <router-link 
          to="/kontakt"
          class="inline-block bg-primary text-black font-bold py-3 px-6 md:px-8 md:py-4 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 text-lg md:text-xl"
        >
          Jetzt Kontakt aufnehmen
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  new URL('@/assets/images/image1.jpg', import.meta.url).href,
  new URL('@/assets/images/image2.jpg', import.meta.url).href,
  new URL('@/assets/images/image3.jpg', import.meta.url).href,
  new URL('@/assets/images/image4.jpg', import.meta.url).href,
  new URL('@/assets/images/image5.jpg', import.meta.url).href
];

const currentIndex = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 12000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
