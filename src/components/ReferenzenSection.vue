<template>
  <section class="py-32 bg-background text-text">
    <div class="container mx-auto px-8 max-w-screen-xl text-center">
      <h2 class="text-7xl font-extrabold text-primary mb-12">Unsere Kundenreferenzen</h2>
      
      <!-- Bildgalerie für Desktop: Alle Bilder in einer Reihe -->
      <div class="hidden md:flex space-x-8 overflow-hidden">
        <div v-for="(image, index) in images" :key="index" class="rounded-xl overflow-hidden shadow-lg">
          <img :src="image" :alt="`Kundenfahrzeug ${index + 1}`" class="w-96 h-80 object-cover hover:scale-105 transition-transform duration-300">
        </div>
      </div>
      
      <!-- Bildgalerie für Mobile: Horizontal Scroll -->
      <div class="md:hidden overflow-x-auto flex space-x-8 scrollbar-hide py-4">
        <div v-for="(image, index) in images" :key="index" class="rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <img :src="image" :alt="`Kundenfahrzeug ${index + 1}`" class="w-96 h-80 object-cover hover:scale-105 transition-transform duration-300">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CustomerReferencesGallery",
  data() {
    return {
      images: [
        new URL('@/assets/images/referenz1.jpg', import.meta.url).href,
        new URL('@/assets/images/referenz2.jpg', import.meta.url).href,
        new URL('@/assets/images/referenz3.jpg', import.meta.url).href,
        new URL('@/assets/images/referenz4.jpg', import.meta.url).href,
        new URL('@/assets/images/referenz5.jpg', import.meta.url).href,
        new URL('@/assets/images/referenz6.jpg', import.meta.url).href
      ]
    };
  },
  created() {
    this.images = this.images.map(image => {
      try {
        return new URL(image, import.meta.url).href;
      } catch (error) {
        console.error("Fehler beim Laden des Bildes:", image, error);
        return "https://via.placeholder.com/300x300?text=Bild+nicht+gefunden";
      }
    });
  }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
