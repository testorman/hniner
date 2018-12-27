import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import Spinner from 'vue-spinkit'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueScrollTo,{easing: "linear"})
Vue.component('Spinners', Spinner)
