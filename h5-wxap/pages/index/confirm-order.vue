<template>
	<view>
		<view class="main">
			<view class="top">
				<view class="top-left">
					<view class="wait-for">等待付款</view>
					<view>请在剩余时间内付款</view>
				</view>
				<view class="top-right">
					<view>{{h > 9 ? h : '0' + h}}</view>:
					<view>{{m > 9 ? m : '0' + m}}</view>:
					<view>{{s > 9 ? s : '0' +s}}</view>
				</view>
			</view>
			<view class="commodity">
				<view class="title">{{orderData.shopName}}</view>
				<view class="content">
					<image class="commodity-img" :src="orderData.mainPic" mode=""></image>
					<view class="content-left">
						<view class="describe eli">{{orderData.title}}</view>
						<view class="number">
							<view class="price">
								<view class="present-price">¥<text>{{Math.ceil((orderData.firstPayAmt - orderData.rebateAmt)*100)/100 }}
									</text></view>
								<view>￥{{orderData.firstPayAmt}}</view>
							</view>
							<view>x1</view>
						</view>
					</view>
				</view>
			</view>
			<view class="method">
				<view class="item">
					<view class="item-title">先付款</view>
					<view>¥{{orderData.firstPayAmt }} </view>
				</view>
				<view class="item">
					<view class="item-title">收货后返利</view>
					<view>¥{{orderData.rebateAmt}}</view>
				</view>
				<view class="item">
					<view class="item-title">返利方式</view>
					<view>微信提现</view>
				</view>
				<view class="item" v-if="orderData.costFreeBillCard != null">
					<view class="item-title">消耗免单卡</view>
					<view>{{orderData.costFreeBillCard}}张</view>
				</view>
			</view>
			<view class="method">
				<view class="item">
					<view class="item-title">订单编号</view>
					<input type="number" placeholder="请输入订单编号进行提交" v-model="orderNo" />
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="footer ios-safe-area ">
			<view class="footer-left" @click="showPopup">取消订单</view>
			<view class="footer-right" @tap="success">提交订单</view>
		</view>

		<!-- 取消提交订单弹窗 -->
		<view class="exchange" v-if="isPopup">
			<view class="exchange-content">
				<view class="exchange-tips">提示</view>
				<view class="exchange-use">确定取消购买？确认后订单将被取消，好好珍惜抢到的购买机会哦？</view>
				<view class="exchange-footer">
					<view class="cancel" @tap="close">取消</view>
					<view class="determine" @click="cancel">确定</view>
				</view>
			</view>
		</view>
		<!-- 订单实际支付金额弹窗 -->
		<view class="exchange" v-if="paymentPopup">
			<view class="exchange-content">
				<view class="exchange-tips">提示</view>
				<view class="exchange-use">订单实际支付金额低于平台商品价格（<text>{{paymentData.originalPriceAmt}}</text>元），返利将自动同步未<text>{{paymentData.actualRebateAmt}}</text>元，是否确认提交</view>
				<view class="exchange-footer">
					<view class="cancel" @tap="close">取消</view>
					<view class="determine" @click="payment">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import exchange from "../../common/api/index/exchange.js"
	export default {
		data() {
			return {
				isPopup: false,
				h: 0,
				m: 0, //分
				s: 0, //秒
				countdown: '10:00', //倒计时
				timer: null, //重复执行
				stepOneData: {}, //订单id对象
				orderClaimId: '', //订单id
				orderData: {}, //数据
				orderNo: '', //订单号
				paymentPopup:false,
				paymentData:{}
			}
		},
		onLoad(opstion) {
			if (opstion.orderData) {
				this.stepOneData = JSON.parse(opstion.orderData)//为了赋值 tepOneData.orderClaimId，请求接口不会undefined
				this.orderData = JSON.parse(opstion.orderData)
				this.orderClaimId = this.orderData.orderClaimId
			} else {
				this.stepOneData.orderClaimId = opstion.orderClaimId
				this.orderClaimId = opstion.orderClaimId
				exchange.goCheckOrder(this)
			}
			this.timeCount() //进入页面直接调用
			this.timer = setInterval(() => { //一秒后才继续调用倒计时
				this.timeCount()
			}, 1000)
			
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '确认订单'
			})
		},
		onUnload() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
		},
		methods: {
			timeCount() { //倒计时
				let time = new Date(this.orderData.endTime) - new Date();
				this.h = Math.floor(time / (3600 * 1000))||0;
				let leave1 = time % (3600 * 1000);
				this.m = Math.floor(leave1 / (60 * 1000))||0;
				let leave2 = leave1 % (60 * 1000);
				this.s = Math.floor(leave2 / 1000)||0;
			},
			showPopup() { //展示弹窗
				this.isPopup = true
			},
			close() { //关闭弹窗
				this.isPopup = false
				this.paymentPopup = false
			},
			success() { //提交成功
				exchange.checkOrder(this)
			},
			cancel() {
				exchange.manualCancelOrder(this)
			},
			payment(){
				exchange.modifyOrderRebateAmt(this)
			}
		}
	}
</script>

<style scoped>
	.main {
		padding-bottom: 108rpx;
	}

	.top {
		background: #EB1C24;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 40rpx 120rpx;
	}

	.top-left {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, .8);
	}

	.top-left .wait-for {
		margin-bottom: 8rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}

	.top-right {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	.top-right view {
		width: 70rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		background: #EB1C24;
		border-radius: 8rpx;
		border: 2rpx solid #D7040C;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		margin: 0 13rpx;
	}

	.top-right view:last-child {
		margin-right: 0rpx;
	}

	.commodity {
		margin: -80rpx 24rpx 16rpx;
		background: #FFFFFF;
		border-radius: 16px;
		padding: 0 24rpx 24rpx;
	}

	.commodity .title {
		line-height: 80rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-bottom: 24rpx;
	}

	.content {
		display: flex;
		align-items: center;
		height: 180rpx;
	}

	.commodity-img {
		width: 180rpx;
		height: 180rpx;
		flex-shrink: 0;
		display: block;
		margin-right: 16rpx;
	}

	.content-left {
		width: 458rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.describe {
		font-size: 26rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.number {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.price {
		display: flex;
		align-items: center;
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.present-price {
		font-size: 20rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #EB1C24;
		margin-right: 16rpx;
	}

	.present-price view:last-child {
		.text-decoration: line-through;
	}

	.present-price text {
		font-size: 32rpx;
	}

	.method {
		background: #FFFFFF;
		border-radius: 16rpx;
		margin: 16rpx 24rpx;
		padding: 0 24rpx;
	}

	.item {
		display: flex;
		align-items: center;
		height: 88rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.item-title {
		width: 180rpx;
		font-size: 26rpx;
		flex-shrink: 0;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.item input {
		border: none;
		width: 100%;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #C1C1C1;
	}

	/* 底部 */
	.footer {
		display: flex;
		align-items: center;
		line-height: 98rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footer view {
		width: 50%;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}

	.footer .footer-left {
		background: #FFFFFF;
		color: #EB1C24;
	}

	.footer .footer-right {
		background: #EB1C24;
		color: #FFFFFF;
	}

	/* 弹窗 */
	.exchange {
		position: fixed;
		background: rgba(0, 0, 0, .6);
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
	}

	.exchange-content {
		background: #fff;
		border-radius: 16rpx;
		width: 560rpx;
		text-align: center;
		padding-top: 50rpx;
	}

	.exchange-tips {
		font-size: 36rpx;
		color: #333333;
		text-align: center;
	}

	.exchange-use {
		font-size: 30rpx;
		padding: 0 32rpx;
		color: #666666;
		margin: 18rpx 0 30rpx;
	}

	.exchange-use text {
		color: #EB1C24;
	}

	.exchange-footer {
		display: flex;
	}

	.exchange-footer view {
		width: 50%;
		line-height: 100rpx;
		font-size: 36rpx;
		border-top: 1rpx solid #e5e5e5;
	}

	.exchange-footer .cancel {
		border-right: 1rpx solid #e5e5e5;
		color: #999999;
	}

	.exchange-footer .determine {
		color: #EB1C24;
	}
</style>
