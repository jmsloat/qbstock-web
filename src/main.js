import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// router components
import Standings from './components/Standings'
import Players from './components/Players'
import Team from './components/Team'

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
    path: '/players',
    component: Players
  }
];

const router = new VueRouter({routes});

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
