import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import 'assets/css/base.scss'
import 'assets/css/icon.scss'
import fastclick from 'fastclick'
import {AjaxPlugin} from 'vux'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(AjaxPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
