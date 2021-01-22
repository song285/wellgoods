
function queryMyIndex(_this) {
	_this.$reqHttp({
		url: '/queryMyIndex',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			_this.userData = res.data.result
		}
	})
} 
//查询订单接口
function queryOrder(_this) {
	_this.$reqHttp({
		url: '/queryOrder',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			_this.myOrder.ALL = res.data.result.ALL || []
			_this.myOrder.UN_FINISH = res.data.result.UN_FINISH || []
			_this.myOrder.TO_GET_GOODS = res.data.result.TO_GET_GOODS || []
			_this.myOrder2 = res.data.result || []
			if(_this.state==1){
				_this.list = res.data.result.ALL || []
			}
			if(_this.state==2){
				_this.list = res.data.result.UN_FINISH || []
			}
			if(_this.state==3){
				_this.list = res.data.result.TO_GET_GOODS || []
			}
			if(_this.state==4){
				_this.list = res.data.result.FINISH || []
			}
			if(_this.state==5){
				_this.list = res.data.result.REFUND || []
			}
		}
	})
} 
//继续提交订单
function continueOrder(_this) {
	_this.$reqHttp({
		url: '/continueOrder',
		data: {
			orderId: _this.orderId,
		},
		success: (res) => {
			let step = res.data.result.step
			if(step == 5){
				uni.navigateTo({
					url:"/pages/index/confirm-order?orderData=" + JSON.stringify(res.data.result)
				})
			}
			if(step==1 || step==2 || step==3 || step==4 || step == 10){
				uni.navigateTo({
					url:"/pages/index/exchange?continueData=" + JSON.stringify(res.data.result)
				})
			}
		}
	})
} 
//领取返利
function receiveRebate(_this) {
	_this.$reqHttp({
		url: '/receiveRebate',
		data: {
			orderId: _this.orderId,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.isPopup = true
		}
	})
} 
//领取返利
function queryOrderDetail(_this) {
	_this.$reqHttp({
		url: '/queryOrderDetail',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.list = res.data.result
		}
	})
} 
//不想买了
function manualCancelOrder(_this,orderClaimId) {
	_this.$reqHttp({
		url: '/manualCancelOrder',
		data: {
			orderClaimId: orderClaimId,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			_this.$message("取消成功")
			queryOrder(_this)
		}
	})
} 
//提现
function cashOut(_this) {
	_this.$reqHttp({
		url: '/cashOut',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			queryGetCashDetail(_this)
			queryMyIndex(_this)
			_this.$message("提现成功")
			_this.balance = 0
		}
	})
} 
//提现订单明细
function queryGetCashDetail(_this) {
	_this.$reqHttp({
		url: '/queryGetCashDetail',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.list = res.data.result
		}
	})
} 
//邀请海报
function shareWxApp(_this) {
	_this.$reqHttp({
		url: '/shareWxApp',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				uni.hideLoading()
				return
			}
			_this.list = res.data.result
		}
	})
} 

// 邀请评价待评价
function queryEvaOrders(_this) {
	_this.$reqHttp({
		url: '/queryInvitationEvaluatePage',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			_this.evaData = res.data.result
		}
	})
}

// 获取待审核，已完成，已取消的订单评价信息
function queryOrderEvaluate(_this,state){
	_this.$reqHttp({
		url: '/queryOrderEvaluatePageByStatus',
		data: {
			userId: _this.$store.state.userData.id,
			status:state,
			pageVo:{
				order: "",
				pageNumber: 1,
				pageSize: 10,
				sort: ""
			}
		},
		success: (res) => {
			_this.evaData = res.data.result
		}
	})
}

// 评价领取免单卡页面信息
function getEvaluateForFreeCard(_this){
	_this.$reqHttp({
		url: '/getEvaluateForFreeCard',
		data: {
			orderId: _this.order.orderId,
		},
		success: (res) => {
			_this.evaData = res.data.result
		}
	})
}

// 提交评价
function submitEva(_this){
	_this.$reqHttp({
		url: '/uploadEvaluationScreenshot',
		data: {
			goodsId:_this.evaData.goodsId,
			orderId:_this.evaData.orderId,
			evaluatePoolId:_this.evaData.evaluatePoolId,
			pic:_this.uploadData
		},
		success: (res) => {
			if(res.data.success){
				_this.$message("提交成功")
				if(res.data.code == 201){
					_this.showPupop = true
					return
				}
				setTimeout(()=>{
					uni.navigateBack({})
				},1000)
			}else {
				_this.$message("提交失败")
			}
		}
	})
}

// 邀请订单评价查看截图
function getcapimg(_this,item){
	_this.$reqHttp({
		url: '/getPicByOrderEvaluateId',
		data: {
			orderEvaluateId:item.orderEvaluateId
		},
		success: (res) => {
			if(res.data.success){
				_this.capimg = res.data.result.pic
			}
		}
	})
}

// 用户撤回订单评价

function cancelEva(_this,item){
	_this.$reqHttp({
		url: '/userToCancelOrderEvaluate',
		data: {
			orderEvaluateId:item.orderEvaluateId
		},
		success: (res) => {
			if(res.data.success){
				_this.$message("撤回成功")
				queryOrderEvaluate(_this,1)
			}
		}
	})
}

// 用户领取免单卡
function getfreeCard(_this,item){
	_this.$reqHttp({
		url: '/getFreeOfChargeCard',
		data: {
			orderId:item.orderId,
			orderEvaluateId:item.orderEvaluateId
		},
		success: (res) => {
			if(res.data.success){
				_this.$message("领取成功")
				queryOrderEvaluate(_this,2)
			}else {
				_this.$message("领取失败")
			}
		}
	})
}

export default{
	queryMyIndex,
	queryOrder,
	continueOrder,
	receiveRebate,
	queryOrderDetail,
	manualCancelOrder,
	queryGetCashDetail,
	cashOut,
	shareWxApp,
	queryEvaOrders,
	queryOrderEvaluate,
	getEvaluateForFreeCard,
	submitEva,
	getcapimg,
	cancelEva,
	getfreeCard
}