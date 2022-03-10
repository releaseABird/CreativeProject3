import Vue from 'vue'
import App from './App.vue'
import router from './router'



//Vue.config.productionTip = false
import mock from './mock-data.js'
import HelloWorld from './components/HelloWorld'
import HomeView from './components/HomeView'


let data = {
  products: mock,
  cart: [
  ]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
