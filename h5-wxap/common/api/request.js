import {
	app
} from '../../main.js'

function http(opt) {
	var _this = this
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || {};
	opt.method = opt.method || 'POST';
	opt.headerState = opt.headerState || 0;
	opt.headerobj = opt.headerobj || {}
	opt.header = headerDate(_this);
	// let token = _this.$store.state.userToken;
	// try {
	// 	token = _this.$store.state.userToken;
	// } catch (e) {}
	// opt.header.token = token;

	function headerDate(_this) {
		var userId;
		// if (_this.$store.state.hasLogin) {
		// 	userId = _this.$store.state.userId
		// } else {
		// 	userId = 0;
		// }
		switch (opt.headerState) {
			case 0: //有用到
				return {
					"content-type": 'application/x-www-form-urlencoded',
					// "sign": 'application/x-www-form-urlencoded',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					token: _this.$store.state.userToken,
					sc: opt.headerobj.sc
					// userId: userId
				}
			case 1: //有用到
				return {
					"content-type": 'application/json',
					// "sign": 'application/x-www-form-urlencoded',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					token: _this.$store.state.userToken,
					// userId: userId
				}
			case 2:
				return {
					"content-type": 'application/x-www-form-urlencoded',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					// token: _this.$store.state.userToken,
					// userId: userId
				}
			case 3:
				return {
					"content-type": 'multipart/form-data',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					// token: _this.$store.state.userToken,
					// userId: userId
				}
		}
	}
	opt.success = opt.success || function() {};
	opt.fail = opt.fail || function() {};
	opt.complete = opt.complete || function() {};
	uni.request({
		url: this.apiUrl + opt.url,
		data: opt.data,
		method: opt.method,
		header: opt.header,
		dataType:'json',
		success: function(res) {
			opt.success(res);
		},
		fail: function(res) {
			opt.fail(res)
		},
		complete:function(res){
			opt.complete(res)
			// uni.hideLoading()
		}
	})
}

function http2(opt) {
	var _this = this
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || {};
	opt.method = opt.method || 'POST';
	opt.headerState = opt.headerState || 0;
	opt.headerobj = opt.headerobj || {}
	opt.header = headerDate(_this);
	let token = '';
	try {
		token = uni.getStorageSync('userToken');
	} catch (e) {}
	opt.header.token = token;

	function headerDate(_this) {
		var userId;
		// if (_this.$store.state.hasLogin) {
		// 	userId = _this.$store.state.userId
		// } else {
		// 	userId = 0;
		// }
		switch (opt.headerState) {
			case 0: //有用到
				return {
					"content-type": 'application/x-www-form-urlencoded',
					// "sign": 'application/x-www-form-urlencoded',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					token: _this.$store.state.userToken,
					sc: opt.headerobj.sc
					// userId: userId
				}
			case 1: //有用到
				return {
					"content-type": 'application/json',
					// "sign": 'application/x-www-form-urlencoded',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					token: _this.$store.state.userToken,
					// userId: userId
				}
			case 2:
				return {
					"content-type": 'application/x-www-form-urlencoded',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					// token: _this.$store.state.userToken,
					// userId: userId
				}
			case 3:
				return {
					"content-type": 'multipart/form-data',
					// shopId: _this.shopId,
					// companyId: _this.companyId,
					// clientId: '30b8f83789064072b0bc8be32dd528cb',
					// clientType: 'PLAT_CONSUMERS',
					// token: _this.$store.state.userToken,
					// userId: userId
				}
		}
	}
	opt.success = opt.success || function() {};
	opt.fail = opt.fail || function() {};
	opt.complete = opt.complete || function() {};
	uni.request({
		url: this.wxapiUrl + opt.url,
		data: opt.data,
		method: opt.method,
		header: opt.header,
		dataType:'json',
		success: function(res) {
			opt.success(res);
		},
		fail: function(res) {
			opt.fail(res)
		},
		complete:function(res){
			opt.complete(res)
			// uni.hideLoading()
		}
	})
}

export default {
	http,
	http2
}
