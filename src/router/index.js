import { createRouter, createWebHistory } from 'vue-router';
import ViewRecommendationChat from '@/views/ViewRecommendationChat.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/recommendations',
      name: 'Recommandations',
      component: ViewRecommendationChat,
    },
    {
      path: '/analyst',
      name: 'Analyste',
      component: () => import('@/views/ViewAnalystChat.vue'),
    },
    {
      path: '/products',
      name: 'Produits',
      component: () => import('@/views/ViewProductList.vue'),
    },
    {
      path: '/sales-history',
      name: 'Historique des ventes',
      component: () => import('@/views/ViewSalesHistoryList.vue'),
    },
    {
      path: '/inventory-history',
      name: 'Historique du stock',
      component: () => import('@/views/ViewInventoryHistoryList.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/recommendations' },
  ],
});

export default router;
