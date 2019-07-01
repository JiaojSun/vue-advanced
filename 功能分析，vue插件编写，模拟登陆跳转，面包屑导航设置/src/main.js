// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'

Vue.config.productionTip = false

import Utile from './lib/utils'

Vue.use(Utile)

// Vue.prototype.$custom = "这是自定义的属性"
/*
let obj = {
  install: function(Vue, options){
    Vue.prototype.$abc = '自定义'
    console.log(Vue)
    console.log(options)
  }
}

Vue.use(obj, {a:1})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
