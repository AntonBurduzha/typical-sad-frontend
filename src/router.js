import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Signup from '@/components/signup/Signup';
import Table from '@/components/home/Table';
import Test from '@/components/home/Test';

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
