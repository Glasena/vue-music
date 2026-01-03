import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import ManageView from '@/views/ManageView.vue';
import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from "@/stores/user"

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView
  },
  {
    name: 'about',
    path: "/about",
    component: AboutView
  },
  {
    name: 'manage',
    path: "/manage",
    //alias: '/manage-music',
    component: ManageView,
    beforeEnter: (to, from, next) => {
      console.log('Manage Guard')
      next();
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage-music',
    redirect: { name: 'manage'},
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  console.log('Global Guard')

  if(!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if(store.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
  
});

export default router
