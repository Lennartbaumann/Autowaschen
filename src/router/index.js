import { createRouter, createWebHistory } from 'vue-router';
import Startseite from '@/seiten/Startseite.vue';
import UeberUns from '@/seiten/UeberUns.vue';
import Leistungen from '@/seiten/Leistungen.vue';
import Kontakt from '@/seiten/Kontakt.vue';

const routes = [
  { path: '/', component: Startseite },
  { path: '/ueber-uns', component: UeberUns },
  { path: '/leistungen', component: Leistungen },
  { path: '/kontakt', component: Kontakt },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
