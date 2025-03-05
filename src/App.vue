<template>   
  <div id="app" class="flex flex-col min-h-screen bg-background text-text">
    <!-- Header -->
    <Header :links="links" :isAuthenticated="isAuthenticated" class="shadow-md" />

    <!-- Main Content -->
    <main class="flex-1 overflow-auto pb-0 lg:pb-0">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer class="fixed bottom-0 left-0 w-full bg-background text-text z-10 shadow-md" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      links: [
        { text: "Startseite", route: "/" },
        { text: "Über uns", route: "/ueber-uns" },
        { text: "Leistungen", route: "/leistungen" },
        { text: "Kontakt", route: "/kontakt" },
      ],
      isAuthenticated: false,
    };
  },
  mounted() {
    this.verifyRoutes();
  },
  methods: {
    verifyRoutes() {
      const availableRoutes = [
        "/",
        "/ueber-uns",
        "/leistungen",
        "/kontakt",
      ];
      this.links.forEach(link => {
        if (!availableRoutes.includes(link.route)) {
          console.warn(`Route ${link.route} is not defined in the router.`);
        }
      });
    },
  },
};
</script>

<style>
:root {
  --primary-color: #d4af37; /* Gold */
  --background: #1b1b1f; /* Dunkles Anthrazit */
  --text-color: #ffffff; /* Weiß für bessere Lesbarkeit */
  --secondary-color: #252830; /* Dunkelgrau */
  --accent-color: #d4af37; /* Gold für Akzente */
  --platinum: #e0e0e0; /* Sehr helles Grau für Kontraste */
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: var(--background);
  color: var(--text-color);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-bottom: 0;
}

@media (max-width: 1024px) {
  main {
    padding-bottom: 5rem;
  }
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary-color);
  color: var(--text-color);
  z-index: 10;
  text-align: center;
  padding: 1rem 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
}
</style>

<!-- Google Site Verification -->
<meta name="google-site-verification" content="google9b3d9e50bd4bd4ac" />
