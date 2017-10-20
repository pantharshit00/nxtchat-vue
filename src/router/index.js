import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/router/views/Home';
import Login from '@/router/views/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
  mode: 'history',
});
