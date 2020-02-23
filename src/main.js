import Vue from 'vue'
import App from './App.vue'
import VueGtm from 'vue-gtm';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/global.css"
import "@/lib.js"

Vue.config.productionTip = false

// Vue.use(VueGtm, {
//   id: 'GTM-PLH79B',
//   enabled: true,
//   debug: true,
//   loadScript: true,
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
