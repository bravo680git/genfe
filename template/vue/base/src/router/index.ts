import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/layout/Layout.vue';
import HomePage from '../pages/HomePage.vue';
import { path } from './path';
import { h } from 'vue';
import { routerMiddleware } from './middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: path.home,
      name: 'home',
      component: () => h(Layout, {}, () => h(HomePage)),
    },
    {
      path: path.login,
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/LoginPage.vue'),
    },
  ],
});

router.beforeEach(routerMiddleware);

export default router;
