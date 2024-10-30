import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '@/views/ViewHome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: ViewHome,
    },
    {
      path: '/list',
      name: 'Liste des produits',
      component: () => import('../views/ViewProductList.vue'),
    },
  ],
});

export default router;
