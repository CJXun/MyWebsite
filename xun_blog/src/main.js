import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import i18n from './vuei18n/i18n.js'

Vue.config.productionTip = false

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
	preLoad: 1, //提前加载高度（数字1代表1屏的高度）默认值1.3
	error:require('././assets/loadError.jpg'), //但加载图片失败的时候
	loading: require('././assets/loading.gif'), //图片加载状态下显示的图片
	attempt: 1 //加载错误后最大尝试次数 默认值3
})
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
