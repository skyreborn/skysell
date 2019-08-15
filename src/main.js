// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './common/stylus/icon.styl'

Vue.config.productionTip = false

Vue.use(router)

// 引入资源请求插件
import VueResource from 'vue-resource'
// 使用VueResource插件
Vue.use(VueResource)

//导入时间处理插件
import moment from "moment"

//定义全局过滤器
Vue.filter('formatDate', function(time, pattern = "YYYY-MM-DD HH:mm"){
	return moment(time).format(pattern)
})

// 全局配置数据请求根路径
Vue.http.options.root = 'http://localhost:8080'
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
