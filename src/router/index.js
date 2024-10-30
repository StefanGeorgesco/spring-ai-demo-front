import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '@/views/ViewHome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: ViewHome,
    },
    {
      path: '/products',
      name: 'Produits',
      component: () => import('../views/ViewProductList.vue'),
    },
    {
      path: '/sales-history',
      name: 'Historique des ventes',
      component: () => import('../views/ViewSalesHistoryList.vue'),
    },
    {
      path: '/inventory-history',
      name: 'Historique du stock',
      component: () => import('../views/ViewInventoryHistoryList.vue'),
    },
  ],
});

export default router;
