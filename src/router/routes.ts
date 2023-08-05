import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/effects',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EffectsPage.vue') }],
  },
  {
    path: '/droyce',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DroycePage.vue') }],
  },
  {
    path: '/items',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ItemsPage.vue') }],
  },
  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
