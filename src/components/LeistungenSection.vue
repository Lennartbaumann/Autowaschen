<template>
  <section class="py-20 bg-secondary text-text text-center">
    <div class="container mx-auto px-4 max-w-screen-xl">
      <h2 class="text-5xl font-extrabold mb-12 text-primary">
        Fahrzeugpflege vom Profi – Leistungen & Services im Überblick
      </h2>
      <p class="text-lg font-semibold text-white mb-8">
        Unsere Fahrzeugpflege-Dienstleistungen stehen für höchste Qualität und optimalen Schutz. Entdecke, wie wir dein Auto professionell aufbereiten!
      </p>
      
      <!-- Grid Ansicht für alle Geräte -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in additionalServices"
          :key="service.title"
          class="bg-white rounded-2xl p-6 shadow-lg transition-all transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 duration-300 flex flex-col justify-between min-h-full"
        >
          <div>
            <h3 class="text-xl font-semibold mb-3 text-secondary">{{ service.title }}</h3>
            <p class="text-base text-gray-700 leading-relaxed mb-4">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdditionalServicesSection",
  data() {
    return {
      additionalServices: [
        { title: "Außenreinigung", description: "Umfassende Reinigung der Fahrzeugaußenflächen für langanhaltenden Schutz und Glanz." },
        { title: "Innenreinigung", description: "Gründliche Säuberung des Innenraums für Hygiene und ein frisches Fahrgefühl." },
        { title: "Stoff- & Lederpflege", description: "Intensive Pflege für Sitze und Verkleidungen – ob Stoff oder Leder, für langanhaltende Qualität." },
        { title: "Außenpolitur", description: "Professionelle Lackaufbereitung zur Beseitigung von Kratzern und für höchsten Glanz." },
        { title: "Felgenreinigung", description: "Spezialreinigung für Felgen – entfernt hartnäckigen Bremsstaub und Straßenschmutz." },
        { title: "Motorwäsche", description: "Sichere und schonende Reinigung des Motorraums für ein gepflegtes Erscheinungsbild." },
        { title: "Scheibentönung", description: "Tönungsfolien für optimalen UV-Schutz, reduzierten Blendeffekt und mehr Privatsphäre." },
        { title: "Ozonbehandlung", description: "Effektive Neutralisierung unangenehmer Gerüche durch professionelle Ozonreinigung." },
        { title: "Keramikversiegelung", description: "Langzeit-Schutz für den Lack mit einer widerstandsfähigen Keramikbeschichtung." },
        { title: "Lackschutzfolie", description: "Unsichtbarer Schutz für stark beanspruchte Lackflächen gegen Kratzer und Umwelteinflüsse." },
        { title: "Kunststoffaufbereitung", description: "Pflege und Schutz für alle Kunststoffteile am Fahrzeug, innen und außen." },
        { title: "Scheinwerferaufbereitung", description: "Klarere Sicht und bessere Optik durch professionelle Aufbereitung der Scheinwerfer." }
      ]
    };
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.bg-secondary {
  background-color: #252830;
}
.text-secondary {
  color: #1a1a1a;
}
</style>