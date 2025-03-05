<template>
  <section class="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
    <div class="container mx-auto px-6 max-w-screen-xl">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <!-- Text-Bereich -->
        <div class="w-full md:w-2/3 text-left flex flex-col justify-center">
          <h2 class="text-5xl font-extrabold mb-8 text-primary">Unsere Premium-Services für dein Fahrzeug</h2>
          
          <p class="text-lg leading-relaxed mb-6">
            Dein Fahrzeug verdient die beste Betreuung! Mit unseren professionellen Services sorgen wir dafür, dass es optimal gepflegt, sicher und wertstabil bleibt. Egal ob Wartung, Verkauf oder Kaufberatung – wir stehen dir zuverlässig zur Seite.
          </p>
          
          <p class="text-lg leading-relaxed mb-4">
            Unser <strong>Abhol- & Bringservice</strong> macht es dir leicht: Wir holen dein Auto ab, führen alle notwendigen Maßnahmen durch und bringen es dir anschließend wieder zurück – bequem und stressfrei.
          </p>
          
          <p class="text-lg leading-relaxed mb-4">
            Mit unserer <strong>Flüssigkeitsüberprüfung</strong> stellen wir sicher, dass dein Fahrzeug immer bestens versorgt ist. Wir prüfen Ölstand, Kühlwasser und weitere Betriebsflüssigkeiten und füllen sie bei Bedarf auf.
          </p>
          
          <p class="text-lg leading-relaxed mb-4">
            Du möchtest dein Auto verkaufen? Unsere <strong>Marktanalyse</strong> liefert dir eine präzise Bewertung, damit du den bestmöglichen Preis erzielen kannst – basierend auf aktuellen Marktdaten.
          </p>
          
          <p class="text-lg leading-relaxed mb-4">
            Unser <strong>Fahrzeugverkaufsservice</strong> übernimmt den gesamten Verkaufsprozess für dich – von der professionellen Anzeigenerstellung bis zur sicheren Abwicklung. So sparst du Zeit und Aufwand.
          </p>
          
          <p class="text-lg leading-relaxed mb-4">
            Falls du auf der Suche nach einem neuen Auto bist, unterstützt dich unsere <strong>Kaufberatung</strong>. Wir analysieren deine Wünsche und empfehlen dir passende Modelle, die optimal zu deinem Budget und deinen Anforderungen passen.
          </p>
          
          <p class="text-lg leading-relaxed">
            Neben diesen Leistungen bieten wir viele weitere Services rund um dein Auto – immer mit dem Ziel, dir maximalen Komfort und Sicherheit zu bieten. Kontaktiere uns für individuelle Lösungen!
          </p>
        </div>
        
        <!-- Bild-Bereich -->
        <div class="w-full md:w-1/3 flex justify-center">
          <div class="overflow-hidden rounded-3xl shadow-2xl border-4 border-primary transform hover:scale-105 transition duration-500">
            <img :src="servicesImage" alt="Drivvy Services" class="w-full h-auto object-cover rounded-xl">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import servicesImage from '@/assets/images/service.jpg';

export default {
  data() {
    return {
      servicesImage
    };
  }
};
</script>