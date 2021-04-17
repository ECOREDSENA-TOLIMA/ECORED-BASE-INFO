import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/_styles.sass'
import '@/mixins/globalMixins'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
