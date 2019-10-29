import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import getFirstItem from '../tools/getFirstItem';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'detail',
      name: 'HomeRight',
      component: () => import('@/components/HomeRight'),
    }],
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
