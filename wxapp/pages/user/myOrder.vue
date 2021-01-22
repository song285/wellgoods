<template>
	<view>
		<view class="return" :style="[{height:StatusBar + 44 + 'px'}]">
			<image @click="goBack" :style="[{marginTop:StatusBar + 8 + 'px'}]" src="http://47.111.232.251:8106/path?name=1605065637175.png"
			 mode=""></image>
			 <view class="custom">
			 	<text>我的订单</text>
			 </view>
		</view>
		<view class="main" :style="[{marginTop:StatusBar + 44 + 'px'}]">
			<!-- 导航 -->
			<view class="top" :style="[{top:StatusBar + 44 + 'px'}]">
				<view :class="state == 1 ? 'on' : '' " @tap="choice(1)">全部</view>
				<view :class="state == 2 ? 'on' : '' " @tap="choice(2)">待完成</view>
				<view :class="state == 3 ? 'on' : '' " @tap="choice(3)">待收货</view>
				<view :class="state == 4 ? 'on' : '' " @tap="choice(4)">已完成</view>
				<view :class="state == 5 ? 'on' : '' " @tap="choice(5)">已退款</view>
			</view>
			<!-- 内容 -->
			<view v-if="list.length>0" class="item" v-for="(item,index) in list" :key="index">
				<view class="title">
					<view>订单编号：{{item.orderNo != null ? item.orderNo : ''}}</view>
					<view :class="item.statusStr == '未完成' ? 'red-text' : item.statusStr == '待收货' ? 'yellow-text' :'grey-text' ">{{item.statusStr}}</view>
				</view>
				<view class="content">
					<image :src="item.mainPic" mode=""></image>
					<view>
						<view class="describe eli2">{{item.title}}</view>
						<view class="number">
							<view class="price">
								<view class="present-price"><text>¥</text>{{item.spreadAmt}}</view>
								<view class="original-price">￥{{item.dealAmt}}</view>
							</view>
							<view>x{{item.number}}</view>
						</view>
					</view>
				</view>
				<view :class="item.state == '已退款' ? 'cash-back-right'  : 'cash-back' ">
					<view class="estimate">预计返现：<text>¥{{item.rebateAmt}}</text></view>
					<view class="btn">
						<view class="grey-border" v-if="item.statusStr == '未完成' " @click="cancel(item.orderClaimId)">取消订单</view>
						<view class="red-border" v-if="item.statusStr == '未完成' " @click="continueSubmit(item.orderId)">继续提交</view>
						<view class="yellow-border" v-if="item.statusStr == '待收货' " @click="share(item.goodsId)">分享好友</view>
						<view class="red-border" v-if="item.statusStr == '已完成' && item.rebateStatus==0 " @click="showPopup(item.orderId)">领取返利</view>
						<view class="grey-border" v-if="item.statusStr == '已完成'  && item.rebateStatus==1 " @click="goBill">查看返利</view>
					</view>
				</view>
			</view>

			<!-- 空列表 -->
			<view class="no-order" v-if="list.length<1">
				<image src="http://47.111.232.251:8106/path?name=1605005567295.png" mode=""></image>
				<view>没有相关订单呦</view>
			</view>
			<!-- 加载失败 -->
			<!-- <view class="no-order">
				<image src="http://47.111.232.251:8106/path?name=1605005427317.png" mode=""></image>
				<view>加载失败</view>
			</view> -->
			<!-- 领取返现弹窗 -->
			<view class="popup" v-if="isPopup">
				<view class="popup-content">
					<image class="close-img" @click="close" src="http://47.111.232.251:8106/path?name=1605065690229.png" mode=""></image>
					<image class="withdrawal-logo" src="http://47.111.232.251:8106/path?name=1605065766310.png" mode=""></image>
					<view>返现领取成功！</view>
					<view class="withdrawal" @click="goBalance">微信提现</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import user from "../../common/api/user/user.js"
	export default {
		data() {
			return {
				state: 1,
				isPopup: false,
				myOrder: {},
				list: [],
				orderId: '',
				StatusBar: '', //状态栏高度
			}
		},
		methods: {
			goBack() { //后退
				this.$store.commit("choiceFooter", 3)
				uni.reLaunch({
					url: './index'
				})
			},
			choice(num) {
				this.state = num
				this.list = []
				if (num == 1 && this.myOrder.ALL != null) {
					this.list = this.myOrder.ALL
				}
				if (num == 2 && this.myOrder.UN_FINISH != null) {
					this.list = this.myOrder.UN_FINISH
				}
				if (num == 3 && this.myOrder.TO_GET_GOODS != null) {
					this.list = this.myOrder.TO_GET_GOODS
				}
				if (num == 4 && this.myOrder.FINISH != null) {
					this.list = this.myOrder.FINISH
				}
				if (num == 5 && this.myOrder.REFUND != null) {
					this.list = this.myOrder.REFUND
				}
			},
			showPopup(orderId) {
				this.orderId = orderId
				user.receiveRebate(this)
			},
			close() {
				this.isPopup = false
			},
			continueSubmit(orderId) {
				this.orderId = orderId
				user.continueOrder(this)
			},
			goBill() {
				uni.navigateTo({
					url: "./bill"
				})
			},
			goBalance() {
				uni.navigateTo({
					url: "./balance"
				})
			},
			cancel(orderClaimId) {
				user.manualCancelOrder(this, orderClaimId)
			},
			share(goodsId) {
				uni.navigateTo({
					url: "../index/shareProducts?goodsId=" + goodsId
				})
			}
		},
		onLoad(opstions) {
			this.state = opstions.state
			let _this = this
			uni.getSystemInfo({ //获取状态栏高度
				success: function(res) {
					_this.StatusBar = res.statusBarHeight
				}
			});
		},
		onShow() {
			user.queryOrder(this)
		}
	}
</script>

<style scoped>
	.return {
		display: flex;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	.return image {
		height: 37rpx;
		width: 22rpx;
		display: block;
		padding: 24rpx 20rpx;
		position: absolute;
		bottom: 0;
		z-index: 9;
	}
	
	.return .custom{
		position: relative;
		height: 100%;
		width: 100%;
		text-align: center;
	}
	
	.return .custom text {
		position: absolute;
		bottom: 20rpx;
		left: 0;
		right: 0;
		font-size: 1rem;
	}

	.main {
		padding-top: 88rpx;
	}

	/* 头部 */
	.top {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}

	.top view {
		width: 20%;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.top view.on {
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #EB1C24;
	}

	/* 内容 */
	.item {
		margin: 24rpx 24rpx 24rpx;
		padding: 0 24rpx 32rpx;
		background: #fff;
		border-radius: 16rpx;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		height: 79rpx;
		border-bottom: 1rpx solid #e8e8e8;
	}

	.grey-text {
		font-size: 26rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.title .red-text {
		color: #EB1C24;
	}

	.title .yellow-text {
		color: #FF8500;
	}

	.content {
		display: flex;
		margin: 24rpx 0 32rpx;
	}

	.content image {
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin-right: 16rpx;
		flex-shrink: 0;
	}

	.describe {
		width: 478rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: bold;
		color: #333333;
		line-height: 37rpx;
		margin-bottom: 24rpx;
	}

	.number {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 40rpx;
	}

	.price {
		display: flex;
		align-items: center;
	}

	.present-price {
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #EB1C24;
		line-height: 30px;
	}

	.present-price text {
		font-size: 22rpx;
	}

	.original-price {
		margin-left: 16rpx;
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 30rpx;
		text-decoration: line-through;
	}

	.cash-back {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cash-back-right {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.estimate {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
	}

	.estimate text {
		color: rgba(235, 28, 36, 1);
	}

	.btn {
		display: flex;
		align-items: center;
	}

	.btn view {
		padding: 0 24rpx;
		line-height: 56rpx;
		font-size: 24rpx;
		border-radius: 28rpx;
		margin-left: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}

	.grey-border {
		border: 1px solid rgba(193, 193, 193, .99);
		color: #666666;
	}

	.red-border {
		border: 1rpx solid rgba(235, 28, 36, .99);
		color: #EB1C24;
	}

	.yellow-border {
		color: rgba(255, 133, 0, 1);
		border: 1px solid rgba(255, 133, 0, .99);
	}

	/* 没有相关订单呦 */
	.no-order {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 37rpx;
		margin-top: 288rpx;
	}

	.no-order image {
		width: 280rpx;
		height: 280rpx;
		display: block;
		margin-bottom: 40rpx;
	}

	/* 弹窗 */
	.popup {
		position: fixed;
		background: rgba(0, 0, 0, .6);
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.popup-content {
		width: 560rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 50rpx;
		position: relative;
		padding: 66rpx 0 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.popup-content .close-img {
		width: 44rpx;
		height: 44rpx;
		display: block;
		position: absolute;
		top: 24rpx;
		right: 24rpx;
	}

	.popup-content .withdrawal-logo {
		width: 160rpx;
		height: 168rpx;
		display: block;
		margin: 0 0 38rpx;
	}

	.popup-content .withdrawal {
		margin-top: 50rpx;
		width: 300rpx;
		border-radius: 35rpx;
		line-height: 70rpx;
		background: rgba(235, 28, 36, 1);
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
</style>
