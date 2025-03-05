<template>
    <section class="py-28 bg-background text-text">
      <div class="container mx-auto px-6 max-w-screen-xl">
        <div class="flex flex-col md:flex-row items-center gap-20">
          
          <!-- Beschreibung von Luc Pullem -->
          <div class="w-full md:w-2/3 text-left flex flex-col justify-center">
            <h2 class="text-5xl font-extrabold text-primary mb-6 leading-tight">Luc Pullem: Perfektion in jeder Linie</h2>
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Luc Pullem</strong> ist weit mehr als ein Name – er ist eine Institution. Seine unvergleichliche Hingabe zur Fahrzeugveredelung setzt 
              neue Maßstäbe in einer Branche, die Exzellenz verlangt.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              Mit jahrelanger Erfahrung und kompromisslosem Qualitätsanspruch hebt Luc Fahrzeuge auf ein völlig neues Niveau. Jedes Detail, jede Oberfläche, 
              jedes Finish ist das Ergebnis höchster Präzision und Leidenschaft.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Ob Luxuslimousine, Sportwagen oder Klassiker – unter seinen Händen wird jedes Fahrzeug nicht nur restauriert, sondern perfektioniert. 
              Perfektion ist für Luc Pullem kein Ziel, sondern der Standard.
            </p>
          </div>

          <!-- Portrait-Bild (jetzt rechts) -->
          <div class="w-full md:w-1/3 flex justify-center">
            <div class="overflow-hidden rounded-3xl shadow-2xl border-4 border-primary transform hover:scale-105 transition duration-500">
              <img :src="lucPullemImage" alt="Luc Pullem" class="w-full h-auto object-cover rounded-xl">
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      lucPullemImage: new URL('@/assets/images/luc-pullem.jpg', import.meta.url).href
    };
  }
};
</script>
