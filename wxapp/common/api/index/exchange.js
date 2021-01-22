// 答题
// 步骤1
function createOrder(_this) {
	_this.$reqHttp({
		url: '/createOrder',
		data: {
			userId: _this.$store.state.userData.id || '',
			goodsId:_this.goodsId
		},
		success: (res) => {
			_this.stepOneData = res.data.result
			_this.condition = JSON.parse(res.data.result.condition)//筛选条件
		}
	})
} 
//刷新关键词
function refreshKeyword(_this) {
	_this.$reqHttp({
		url: '/refreshKeyword',
		data: {
			orderClaimId: _this.stepOneData.orderClaimId,
		},
		success: (res) => {
			_this.condition = JSON.parse(res.data.result.condition)//筛选条件
			_this.stepOneData.keyword = res.data.result.keyword
			_this.stepOneData.order = res.data.result.order
			_this.stepOneData.keywordResult = res.data.result.keywordResult
		}
	})
} 
//不想买了
function manualCancelOrder(_this) {
	uni.showLoading({
		title:'取消中',
		mask:true,
		duration:2000
	})
	_this.$reqHttp({
		url: '/manualCancelOrder',
		data: {
			orderClaimId: _this.stepOneData.orderClaimId,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				_this.$message("取消失败")
				return
			}
			uni.reLaunch({
				url:"/pages/index/index",
				success() {
					_this.$message("购买失败")
				}
			})
		},
		complate:function(){
			uni.hideLoading()
		}
	})
} 

//第二步第一题
function answerTitle(_this) {
	_this.$reqHttp({
		url: '/answerTitle',
		data: {
			orderClaimId: _this.stepOneData.orderClaimId,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			if(res.data.result.goToTaobaoCheck){
				_this.answer = 2
				_this.isVerification = true
			}else{
				_this.choiceQuestion = res.data.result
			}
		}
	})
} 
//第二步第二题
function answerTitleResult(_this) {
	_this.$reqHttp({
		url: '/answerTitleResult',
		data: {
			result:_this.isAnswer,
			orderClaimId: _this.stepOneData.orderClaimId,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			if(res.data.result.goToTaobaoCheck){
				if(_this.$store.state.isSensitive !=1){//不去验证淘口令直接返回详情页
					manualCancelOrder(_this)//取消订单
					setTimeout(function(){
						uni.navigateBack({})
					},2000)
					return
				}else{
					_this.answer = 0
				}
			}else{
				_this.choiceQuestion = res.data.result
			}
		}
	})
} 
//淘口令
function taobaoCheckGoods(_this) {
	_this.$reqHttp({
		url: '/taobaoCheckGoods',
		data: {
			orderClaimId: _this.stepOneData.orderClaimId,
			taobaoWord:_this.taobaoWord
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			_this.$message("验证成功")
			_this.isAnswer=1
			answerShopTitleResult(_this)
			_this.isVerification = false
			_this.step = 3
		}
	})
} 
//第三步
function answerShopTitleResult(_this) {
	_this.$reqHttp({
		url: '/answerShopTitleResult',
		data: {
			result:_this.isAnswer,
			orderClaimId: _this.stepOneData.orderClaimId,
		},
		success: (res) => {
			if(_this.isAnswer==0){
				if(res.data.result.goToTaobaoCheck){//弹出去验证淘口令的弹窗
					if(_this.$store.state.isSensitive !=1){//不去验证淘口令直接返回详情页
						manualCancelOrder(_this)//取消订单
						setTimeout(function(){
							uni.navigateBack({})
						},2000)
						return
					}else{
						_this.answer = 0
					}
					return
				}
				_this.choiceQuestion = res.data.result
			}else{
				_this.stepThreeData = res.data.result
			}
			
		}
	})
} 
// 验证订单
function goCheckOrder(_this) {
	_this.$reqHttp({
		url: '/goCheckOrder',
		data: {
			orderClaimId: _this.orderClaimId,
		},
		success: (res) => {
			_this.orderData = res.data.result
		}
	})
} 
// 确认验证订单
function checkOrder(_this) {
	if(_this.orderNo == ''){
		_this.$message("订单编号不能为空")
		return
	}
	_this.$reqHttp({
		url: '/checkOrder',
		data: {
			orderClaimId: _this.orderClaimId,
			orderNo:_this.orderNo
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			if(res.data.code == 701){
				_this.paymentPopup = true
				_this.paymentData = JSON.parse(res.data.message)
				return
			}
			uni.navigateTo({
				url: "./orderSuccess"
			})
		}
	})
} 
// 验证订单
function modifyOrderRebateAmt(_this) {
	_this.$reqHttp({
		url: '/modifyOrderRebateAmt',
		data: {
			orderId:_this.paymentData.orderId,
			actualRebateAmt: _this.paymentData.actualRebateAmt,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			checkOrder(_this)
		}
	})
} 
export default {
	createOrder,
	refreshKeyword,
	manualCancelOrder,
	answerTitle,
	answerTitleResult,
	answerShopTitleResult,
	goCheckOrder,
	modifyOrderRebateAmt,
	checkOrder,
	taobaoCheckGoods
}
