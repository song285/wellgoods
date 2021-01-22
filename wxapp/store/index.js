import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		userData:uni.getStorageSync('userData') || {id:''},//用户信息
		userToken:uni.getStorageSync('userToken') || '',//token
		bindingPhone:false,//绑定手机弹窗
		footerClass:1,//底部导航
		isSensitive:0,//判断是否要敏感字
		invitationCode:'',//邀请好友的邀请码
		// bottomHeight:'',//ios底部高度
		isOne:1,//首页跳登录就加载一次
	},

	mutations: {
		login(state, userData) { //登录存储token
			state.userData = userData;
			state.userToken = userData.token;
			uni.setStorageSync('userData',userData)
			uni.setStorageSync('userToken',userData.token)
		},
		showBindingPhone(state){//绑定手机弹窗
			state.bindingPhone = true
		},
		closeBindingPhone(state){//关闭绑定手机弹窗
			state.bindingPhone = false
		},
		choiceFooter(state,num){//切换底部导航
			state.footerClass = num
		},
		Sensitive(state,is){//判断是否显示敏感的字
			state.isSensitive = is
		},
		invitation(state,num){//邀请码
			state.invitationCode = num
		},
		// getBottomHeight(state,num){//适配底部
		// 	state.bottomHeight = num
		// },
		addIsOne(state,num){//首页跳登录就加载一次
			state.isOne = num
		}
	},
	actions: {}
})
export default store
