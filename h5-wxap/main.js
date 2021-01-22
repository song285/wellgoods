import Vue from 'vue'
import App from './App'
import footer from './pages/components/footer.vue' //公共底部组件
import binding from './pages/components/binding.vue' //绑定手机号
import request from './common/api/request.js' //请求JS
import store from './store'//vuex
import message from './common/common.js'//弹窗
Vue.config.productionTip = false
Vue.component('Footer', footer)
Vue.component('Binding', binding)
App.mpType = 'app'

Vue.prototype.$reqHttp = request.http //挂载全局http请求方法
Vue.prototype.$reqHttp2 = request.http2 //挂载全局http请求方法
Vue.prototype.$store = store //把vuex定义成全局组件
Vue.prototype.$message = message.message
Vue.prototype.$uploadIMGurl = 'http://service.haichennux.net/image/upload'

Vue.prototype.wxapiUrl = 'http://wx.haichennux.net/wx' 

Vue.prototype.phoneRule = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0-3,5-8]|18[0-9]|19[1389])\d{8}$/; //手机号码校验

const debug = false //false : 测试服务器  true : 正式服务器
if(!debug){
	// Vue.prototype.apiUrl = 'http://testService.haichennux.net/wxapp' // 测试接口域名
	Vue.prototype.apiUrl = 'http://wx.haichennux.net/wxapp' 
}else{
	Vue.prototype.apiUrl = 'http://wx.haichennux.net/wxapp' // 正式接口域名
}

const app = new Vue({
    ...App,
	store
})
app.$mount()
