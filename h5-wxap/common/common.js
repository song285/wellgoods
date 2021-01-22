// 提示
function message(content){
	uni.showToast({
		icon:'none',
	    title: content,
	    duration: 3000
	});
}
//进入小程序判断token是否存在，存在自动登录,
//自动查询用户数据，对用户来说应该是静默的
function autoLogin(_this){
	_this.$reqHttp({
		url: '/autoLogin',
		data: {},
		success: (res) => {
			if(!res.data.success){
				_this.$store.commit("login",'')
				uni.setStorageSync('userData','')
				uni.setStorageSync('userToken','')
			}
		}
	})
}
// 进入页面判断是否要返利等一些敏感字
function queryVersion(_this){
	_this.$reqHttp({
		url: '/queryVersion',
		data: {
			version:'2.0.9'
		},
		success: (res) => {
			_this.$store.commit("Sensitive",res.data.result)
		}
	})
}

// H5登录
function author4H5(_this){
	_this.$reqHttp2({
		url:"/auth4H5",
		data:{
			openid: _this.$store.state.userBaseinfo.openid || ''
		},
		success:(res) => {
			// if(!res.data.result.autoLogin){
			// 	uni.showModal({
			// 		title:'提示',
			// 		content: '当前检测到您还未注册，注册后即可操作',
			// 		confirmText: "去注册",
			// 		cancelText: '取消',
			// 		confirmColor:'#EB1C24',
			// 		cancelColor:'#999999',
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				// _this.$store.commit("showBindingPhone")
			// 				uni.navigateTo({
			// 					url:"../login/regist"
			// 				})
			// 			}
			// 		}
			// 	})
			// 	_this.$store.commit("addIsOne",2)
			// } else {
			// 	let userData = JSON.parse(res.data.result.userData)
			// 	_this.$store.commit("login", userData)
			// 	this.queryVersion(_this) //登录完成后在调用一次获取敏感字
				
			// 	if(_this.$store.state.userBaseinfo.goodsId) {
			// 		uni.navigateTo({
			// 			url:'../index/details?goodsId=' + _this.$store.state.userBaseinfo.goodsId
			// 		})
			// 	}
			// }
			if(res.data.success){
				let userData = JSON.parse(res.data.result.userData) || {token:''}
				console.log(userData)
				_this.$store.commit("autoLogin", res.data.result.autoLogin || false)
				_this.$store.commit("login", userData)
				this.queryVersion(_this) //登录完成后在调用一次获取敏感字
			}
			if(_this.urlObj.goodsId && _this.$store.state.invitedBack) {
				console.log(_this.productList)
				uni.redirectTo({
					url:'/pages/index/details?data=' + JSON.stringify(_this.urlObj)
				})
			}
			this.queryVersion(_this)
		}
	})
}


// 手机号码注册
function phoneRegister(_this,url){
	_this.$reqHttp2({
		url:"/registerByPhoneNumber4H5",
		headerState:1,
		data:{
			userRegisterVo:{
				phoneNumber:_this.userPhone,
				openid: _this.$store.state.userBaseinfo.openid,
				inviteCode: _this.$store.state.userBaseinfo.inviteCode
			},
			registerSmsVo:{
				phoneNumber:_this.userPhone,
				smsCode:_this.userCode,
			}
		},
		success:(res) => {
			if(res.data.code !== 200) {
				_this.$message(res.data.message)
				return
			}
			if(res.data.code == 200) {
				_this.$store.commit("login", res.data.result)
				this.queryVersion(_this) //登录完成后在调用一次获取敏感字
				if(url == 1) {
					uni.reLaunch({
						url:'/pages/index/index',
						success() {
							this.author4H5(_this)//更新登录信息
						}
					})
				}else if(url == 2) {
					_this.close()
					this.author4H5(_this)//更新登录信息
				}
				_this.$message("注册成功")
			}
		}
	})
}

// 获取手机验证码
function getSMScode(_this){
	_this.$reqHttp2({
		url:"/getSmsCode",
		data:{
			phoneNumber:_this.userPhone,
		},
		success:(res) => {
			if(res.data.code == 500) {
				_this.$message(res.data.message)
				return
			}
			if(res.data.code == 200) {
				_this.$message("获取验证码成功")
			}
		}
	})
}

function queryInit(_this){
	_this.$reqHttp2({
		url:"/queryInit",
		data:{
			substationId:_this.$store.state.userBaseinfo.substationId || ''
		},
		success:(res) => {
			// if(!res.data.success) {
			// 	_this.$message(res.data.message)
			// 	return
			// }
			if(res.data.code == 200 && res.data.success) {
				_this.$store.state.navigationBarTitle = res.data.message
			}
		}
	})
}

export default{
	message,
	autoLogin,
	queryVersion,
	author4H5,
	phoneRegister,
	getSMScode,
	queryInit
}