import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// router components
import Standings from './components/Standings'
import Players from './components/Players'
import Team from './components/Team'
import login from './components/login/login'

import {api} from './api.js'

Vue.use(VueRouter);

const routes = [
  {
    path: '#',
    component: App
  },
  {
    name: 'team',
    path: '/team/:teamid',
    component: Team
  },
  {
    name: 'standings',
    path: '/standings',
    component: Standings
  },
  {
    name: 'login',
    path: '/login',
    component: login
  },
  {
    path: '/players',
    component: Players
  }
];

const router = new VueRouter({routes});

const app = new Vue({
  el: '#app',
  router,
  api,
  template: '<App/>',
  components: {App}
});
