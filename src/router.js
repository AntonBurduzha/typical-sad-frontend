import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signup from '@/components/Signup';
import Table from '@/components/Table';
import Test from '@/components/Test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Table
        },
        {
          path: '/test',
          component: Test
        }
      ]
    }
  ]
});
