import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

Vue.use(Vuetify);
Vue.use(Router);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
