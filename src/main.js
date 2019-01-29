import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'


Vue.use(Vuetify);
Vue.use(Router);

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
