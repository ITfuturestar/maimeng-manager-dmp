// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import Vuelidate from 'vuelidate'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);
Vue.use(Vuelidate);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
