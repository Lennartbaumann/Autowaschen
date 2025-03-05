<template>
  <section class="py-28 bg-secondary text-text">
    <div class="container mx-auto px-6 max-w-screen-xl">
      <h1 class="text-6xl font-extrabold text-primary mb-12 text-center">Kontakt</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <!-- Kontaktinformationen -->
        <div class="bg-white p-10 rounded-3xl shadow-2xl border-4 border-primary flex flex-col justify-between items-center text-center w-full transform hover:scale-105 transition duration-500">
          <h2 class="text-5xl font-extrabold text-primary mb-6 leading-tight">Kontaktiere uns direkt</h2>
          <p class="text-lg text-gray-700 mb-6 max-w-lg">
            Unser Team ist nicht immer vor Ort. Bitte vereinbare vorher einen Termin.
          </p>
          <div class="w-full max-w-md flex-grow flex flex-col justify-center">
            <h3 class="text-2xl font-semibold text-secondary mb-4">Telefon</h3>
            <a href="tel:+491234567890" class="text-2xl font-bold text-primary hover:underline">+49 123 456 7890</a>
            <p class="mt-2 text-base text-gray-600">Mo - Fr, 09:00 - 18:00 Uhr</p>
            <div class="mt-6">
              <h3 class="text-2xl font-semibold text-secondary mb-4">E-Mail</h3>
              <a href="mailto:kontakt@example.com" class="text-lg text-primary hover:underline">kontakt@example.com</a>
            </div>
          </div>
        </div>
        
        <!-- Kontaktformular -->
        <div class="bg-white p-10 rounded-3xl shadow-2xl border-4 border-primary flex flex-col justify-between transform hover:scale-105 transition duration-500">
          <h2 class="text-5xl font-extrabold text-primary mb-6 leading-tight text-center">Schreib uns</h2>
          <p class="text-lg text-gray-800 leading-relaxed mb-6 text-center">
            Wir freuen uns auf deine Anfrage! Fülle einfach das Formular aus und wir melden uns so schnell wie möglich.
          </p>
          <form @submit.prevent="submitForm" class="flex-grow flex flex-col justify-center">
            <div class="grid grid-cols-1 gap-4">
              <input type="text" v-model="formData.name" placeholder="Dein Name" class="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-primary">
              <input type="email" v-model="formData.email" placeholder="Deine E-Mail" class="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-primary">
              <textarea v-model="formData.message" rows="5" placeholder="Deine Nachricht" class="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <button type="submit" class="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition duration-300 mt-4 text-lg">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
      
      <!-- Standortkarte -->
      <div class="mt-20 text-center">
        <h2 class="text-5xl font-extrabold text-primary mb-6">Unser Standort</h2>
        <p class="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
          Besuche uns in unserem Büro in Siegburg. Bitte beachte, dass unser Personal nicht immer vor Ort ist – vereinbare daher vorab einen Termin.
        </p>
        <div class="bg-white p-8 rounded-3xl shadow-2xl border-4 border-primary w-full max-w-4xl mx-auto">
          <iframe 
            class="w-full h-96 rounded-xl" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=7.2096,50.7993,7.2196,50.8093&layer=mapnik&marker=50.8043,7.2146" 
            allowfullscreen>
          </iframe>
          <p class="mt-4 text-lg text-gray-800 font-semibold">Alberstraße 1, 53721 Siegburg</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.formData);
      alert("Danke für deine Nachricht! Wir melden uns so schnell wie möglich.");
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    }
  }
};
</script>

<style scoped>
.bg-secondary {
  background-color: #252830;
}
.text-primary {
  color: #D4AF37;
}
.text-secondary {
  color: #1A1A1A;
}
.text-text {
  color: #333333;
}
</style>