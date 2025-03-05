/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37', // Gold für Highlights & Buttons
        background: '#1b1b1f', // Dunkles Anthrazit für den Hintergrund
        text: '#ffffff', // Weiß für bessere Lesbarkeit
        secondary: '#252830', // Dunkelgrau für Sekundärelemente
        accent: '#d4af37', // Gold für Akzente, konsistent mit primary
        platinum: '#e0e0e0', // Sehr helles Grau für dezente Kontraste
      },
    },
  },
  plugins: [],
};
