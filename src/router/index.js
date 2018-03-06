import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import Main from '@/pages/Main'
import Home from '@/pages/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'hello',
          component: Hello,
        },
      ],
    },
  ],
});
