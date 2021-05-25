import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/_styles.sass'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

Vue.component('Creditos', () =>
  import(
    '../node_modules/ecored-base-pkg/src/components/plantilla/CreditosComp.vue'
  ),
)
Vue.component('Footer', () =>
  import('../node_modules/ecored-base-pkg/src/components/plantilla/Footer.vue'),
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
