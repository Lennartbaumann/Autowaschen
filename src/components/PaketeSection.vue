<template> 
  <section class="py-16 bg-background text-text text-center">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <h2 class="text-4xl font-extrabold mb-10 text-primary">
        Flexible & Individuelle Fahrzeugpflege
      </h2>
      <p class="text-lg font-medium text-platinum mb-8">
        Unsere Sparpakete sind flexibel anpassbar und auf dein Fahrzeug abgestimmt – wähle die perfekte Pflegeoption!
      </p>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(packageItem, index) in packages"
          :key="index"
          class="bg-white rounded-xl p-5 lg:p-6 shadow-md transition-all transform hover:shadow-xl hover:scale-105 duration-300 flex flex-col justify-between"
        >
          <img :src="packageItem.image" :alt="packageItem.title" class="service-image" loading="lazy">
          <div class="flex flex-col flex-grow text-left px-3 py-3">
            <h3 class="text-xl font-semibold text-secondary mb-3">{{ packageItem.title }}</h3>
            <p class="text-base text-gray-700 leading-relaxed flex-grow">{{ packageItem.description }}</p>
            <p class="text-lg font-bold text-primary bg-gray-100 rounded-md py-2 px-3 inline-block mt-4">ab {{ packageItem.price }} €</p>
          </div>
          <router-link 
            to="/termin" 
            class="mt-6 inline-block px-5 py-2.5 bg-primary text-black font-semibold rounded-md shadow-sm hover:bg-opacity-80 transition-all text-base"
            aria-label="Jetzt Termin für {{ packageItem.title }} anfragen"
          >
            Jetzt anfragen
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import basisPaket from '@/assets/images/basis-paket.jpg';
import premiumPaket from '@/assets/images/premium-paket.jpg';
import exklusivPaket from '@/assets/images/exklusiv-paket.jpg';

export default defineComponent({
  name: "ServicePackages",
  data() {
    return {
      packages: [
        {
          title: "Express-Paket",
          image: basisPaket,
          description: "Schnelle und gründliche Außenreinigung für dein Fahrzeug.",
          price: "85"
        },
        {
          title: "Komplett-Paket",
          image: premiumPaket,
          description: "Detaillierte Innen- und Außenreinigung inklusive Politur.",
          price: "200"
        },
        {
          title: "Exklusiv-Paket",
          image: exklusivPaket,
          description: "Premium-Reinigung mit Politur und hochwertiger Langzeitversiegelung.",
          price: "250"
        }
      ]
    };
  }
});
</script>

<style scoped>
.bg-background {
  background-color: #252830;
}

.bg-primary {
  background-color: #d4af37;
}

.hover\:bg-opacity-80:hover {
  background-color: rgba(212, 175, 55, 0.8);
}

.text-secondary {
  color: #252830;
}

.text-platinum {
  color: #ffffff;
}

.service-image {
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto 1rem;
}

@media (max-width: 768px) {
  .text-4xl {
    font-size: 1.75rem;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  .service-image {
    max-width: 250px;
    height: 180px;
  }
  .p-5 {
    padding: 1rem;
  }
}
</style>
