import Vue from 'vue'
import App from './components/ex.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
