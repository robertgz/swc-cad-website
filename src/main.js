import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/global.css"
import "@/lib.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
