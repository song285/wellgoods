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

// 防止连点
let timer = null;
let issubmit = true
function throttle(func){
	if(!issubmit) return
	issubmit = false;
	timer = setTimeout(()=>{
		if(typeof func == 'function'){
			func()
			issubmit = true;
		}
	},1000)
}
export default{
	message,
	autoLogin,
	queryVersion,
	throttle
}