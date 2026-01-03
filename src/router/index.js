import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import ManageView from '@/views/ManageView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: HomeView
  },
  {
    path: "/about",
    component: AboutView
  },
  {
    path: "/manage",
    component: ManageView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
