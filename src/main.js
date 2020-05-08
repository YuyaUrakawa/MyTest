// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'Message-vuejs-demo'
var messageStorage = {
  fetch: function() {
    var messageList = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || '[]'
    )
    messageList.forEach(function(message, index) {
      message.id = index
    })
    messageStorage.uid = messageList.length
    return messageList
  },
  save: function(messageList) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messageList))
  }
}

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
