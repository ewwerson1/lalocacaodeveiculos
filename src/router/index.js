import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InvestidorView from '../views/InvestidorView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
     {
      path: '/portal-investidor',
      name: 'portal-investidor',
      component: InvestidorView,
    },
  ],
})

export default router
