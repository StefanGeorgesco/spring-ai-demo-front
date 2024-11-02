import { createRouter, createWebHistory } from 'vue-router';
import ViewAnalystChat from '@/views/ViewAnalystChat.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: ViewAnalystChat,
    },
    {
      path: '/recommendations',
      name: 'Recommandations',
      component: () => import('../views/ViewRecommendationChat.vue'),
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
