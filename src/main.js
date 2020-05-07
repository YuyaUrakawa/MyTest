import Vue from 'vue'
import App from './App'
import router from './router.js'
//import store from './store.js'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
