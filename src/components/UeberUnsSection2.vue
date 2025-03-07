<template>
    <section class="py-28 bg-background text-text">
      <div class="container mx-auto px-6 max-w-screen-xl">
        <div class="flex flex-col md:flex-row items-center gap-20">
          
          <!-- Beschreibung von Luc Pullem -->
          <div class="w-full md:w-2/3 text-left flex flex-col justify-center">
            <h2 class="text-5xl font-extrabold text-primary mb-6 leading-tight">Luc Pullem: Perfektion trifft Innovation</h2>
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Luc Pullem</strong> steht für automobile Perfektion und höchste Handwerkskunst – besonders in der Region Siegburg und dem Rhein-Sieg-Kreis. 
              Hier vereinen sich Präzision, Leidenschaft und modernste Techniken zu einem unvergleichlichen Ergebnis.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              Dank langjähriger Erfahrung und einem einzigartigen Gespür für Details werden Fahrzeuge nicht nur restauriert, sondern auf ein völlig neues Niveau gehoben. 
              Von maßgeschneiderten Lackierungen bis zur ultimativen Veredelung – jedes Projekt ist ein Statement für Perfektion.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Exklusive Sportwagen, luxuriöse Limousinen oder wertvolle Oldtimer – Luc Pullem erschafft Unikate, die nicht nur optisch begeistern, sondern 
              auch in Sachen Wertigkeit und Individualität neue Maßstäbe setzen.
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
