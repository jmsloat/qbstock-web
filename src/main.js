import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// router components
import Standings from './components/Standings'
import Players from './components/Players'
import MyTeam from './components/MyTeam'

Vue.use(VueRouter);

const routes = [
  {
    path: '#',
    component: App
  },
  {
    path: '/myteam',
    component: MyTeam
  },
  {
    path: '/standings',
    component: Standings
  },
  {
    path: '/players',
    component: Players
  }
];

const router = new VueRouter({ routes });

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})/*.$mount('#app')*/;
