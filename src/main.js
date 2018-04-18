import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import 'assets/css/base.scss'
import 'assets/css/icon.scss'
import fastclick from 'fastclick'
import {ToastPlugin, ConfirmPlugin, LoadingPlugin} from 'vux'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(ToastPlugin, {position: 'top'})
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
