import { createRouter, createWebHistory } from 'vue-router';
import DocsBug from '@/pages/DocsBug.vue';

export const routes = [
  {
    path: '/',
    component: DocsBug,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});


