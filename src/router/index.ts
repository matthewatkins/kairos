import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/figma',
      name: 'figma',
      component: () => import('../views/FigmaView.vue'),
    },
  ],
});

export default router;
