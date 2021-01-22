<template>
	<view>
		<view class="mian">
			<scroll-view scroll-y="true" class="scroll-class">
				<!-- 用户 -->
				<view class="top">
					<view class="user-info" @click="goUserInfo" v-if="isToken">
						<image :src="userData.headImg" mode=""></image>
						<view>{{userData.nickname}}</view>
					</view>
					<view class="user-info" v-if="!isToken">
						<image src='http://47.111.232.251:8106/path?name=1606199339619.png' mode=""></image>
						<!-- <view @click="goLogin">登录/注册</view> -->
						<!-- <image class="login-img" src='http://47.111.232.251:8106/path?name=1606199943568.png' mode=""></image> -->
					</view>
					<view class="save-money" @click="goSingleCardFree">
						<view>已为你省了{{userData.totalSaveAmt || 0}}元</view>
						<view class="surplus-card">
							<view>剩免单卡：{{userData.freeBillCards || 0}}张</view>
							<image src="http://47.111.232.251:8106/path?name=1605005670058.png" mode=""></image>
						</view>
					</view>
				</view>
				<!-- 我的交易 -->
				<view class="my-deal fillet">
					<view class="title" @click="goMyOrder(1)">
						<view>我的订单</view>
						<view class="view-all">查看全部<image src="http://47.111.232.251:8106/path?name=1605005763746.png" mode=""></image>
						</view>
					</view>
					<view class="state">
						<view class="item" @click="goMyOrder(2)">
							<image src="http://47.111.232.251:8106/path?name=1605065422867.png" mode=""></image>
							<view>待完成</view>
							<view class="number" v-if="myOrder.UN_FINISH.length > 0">
								{{myOrder.UN_FINISH.length > 99 ? '99+' : myOrder.UN_FINISH.length}}
							</view>
						</view>
						<view class="item" @click="goMyOrder(3)">
							<image src="http://47.111.232.251:8106/path?name=1605065593824.png" mode=""></image>
							<view>待收货</view>
							<view class="number" v-if="myOrder.TO_GET_GOODS.length > 0">
								{{myOrder.TO_GET_GOODS > 99 ? '99+' : myOrder.TO_GET_GOODS.length}}
							</view>
						</view>
						<view class="item" @click="goMyOrder(4)">
							<image src="http://47.111.232.251:8106/path?name=1605065515940.png" mode=""></image>
							<view>已完成</view>
						</view>
						<view class="item" @click="goMyOrder(5)">
							<image src="http://47.111.232.251:8106/path?name=1605065566316.png" mode=""></image>
							<view>已退款</view>
						</view>
						<view class="item" @click="navigateToEva">
							<image src="https://staticresource.haichennux.net/path?name=1608198651301.png" mode=""></image>
							<view>邀请评价</view>
							<view class="number" v-if="userData.evaluateNumber > 0">
								{{userData.evaluateNumber > 99 ? '99+' : userData.evaluateNumber}}
							</view>
						</view>
					</view>
				</view>
				<!-- 我的成就 -->
				<view class="my-deal-content fillet">
					<view class="title">
						<view>我的成就</view>
					</view>
					<view class="achievement">
						<view class="save" @click="goBill">
							<image src="http://47.111.232.251:8106/path?name=1605065377534.png" mode=""></image>
							<view class="achievement-money">
								<view class="achievement-money-num">{{userData.totalSaveAmt || 0 }}</view>
								<view>累计节省(元)</view>
							</view>
						</view>
						<view class="save" @click="goCard">
							<image src="http://47.111.232.251:8106/path?name=1605065377534.png" mode=""></image>
							<view class="achievement-money">
								<view class="achievement-money-num">{{userData.freeBillCards || 0}}张</view>
								<view>获得免单卡</view>
							</view>
						</view>
					</view>
					<view class="cumulative" @click="goMyOrder(4)">
						<view>
							<view class="cumulative-num">{{userData.totalBuyNumber || 0 }}件</view>
							<view>累计获得一件商品</view>
						</view>
						<image src="http://47.111.232.251:8106/path?name=1605065345270.png" mode=""></image>
					</view>
				</view>
				<!-- 推荐工具 -->
				<view class="fillet">
					<view class="title">
						<view>推荐工具</view>
					</view>
					<view class="tool" @click="goBill">
						<view class="tool-left">
							<image src="http://47.111.232.251:8106/path?name=1605065116424.png" mode=""></image>
							<view>待返金额</view>
						</view>
						<view class="tool-right">
							<view v-if="userData.toReceiveAmt">¥{{userData.toReceiveAmt}}</view>
							<image src="http://47.111.232.251:8106/path?name=1605005670058.png"></image>
						</view>
					</view>
					<view class="tool" @click="goBalance">
						<view class="tool-left">
							<image src="http://47.111.232.251:8106/path?name=1605065190777.png" mode=""></image>
							<view>余额提现</view>
						</view>
						<view class="tool-right">
							<view v-if="userData.balance">¥{{userData.balance}}</view>
							<image src="http://47.111.232.251:8106/path?name=1605005670058.png"></image>
						</view>
					</view>
					<view class="tool" @click="goPoster">
						<view class="tool-left">
							<image src="http://47.111.232.251:8106/path?name=1605065082336.png" mode=""></image>
							<view>邀请好友</view>
							<view class="single-card-free">免单卡+1</view>
						</view>
						<view class="tool-right">
							<image src="http://47.111.232.251:8106/path?name=1605005670058.png"></image>
						</view>
					</view>
					<view class="tool" @click="showService">
						<view class="tool-left">
							<image src="http://47.111.232.251:8106/path?name=1605063672075.png" mode=""></image>
							<view>联系客服</view>
						</view>
						<view class="tool-right">
							<image src="http://47.111.232.251:8106/path?name=1605005670058.png"></image>
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- 客服弹窗 -->
			<view class="service" v-if="isService">
				<view class="service-content">
					<image class="service-bg" src="http://47.111.232.251:8106/path?name=1605065836325.png" mode=""></image>
					<view class="service-details">
						<view>扫一扫，联系客服</view>
						<view class="service-border"></view>
						<image :src="codeImg" mode=""></image>
					</view>
					<image class="close-service" @tap="close" src="http://47.111.232.251:8106/path?name=1605065690229.png" mode=""></image>
				</view>
			</view>
			<!-- 底部 -->
			<Footer></Footer>
		</view>
	</view>
</template>

<script>
	import user from "../../common/api/user/user.js"
	import index from "../../common/api/index/index.js"
	export default {
		data() {
			return {
				userData: {
					totalSaveAmt: '',
					freeBillCards: '',
					totalBuyNumber: "",
					toReceiveAmt: '',
					balance: ''
				}, //用户信息
				myOrder: {
					ALL:[],
					UN_FINISH:[],
					TO_GET_GOODS:[],
				}, //获取订单长度
				isService: false, //客服弹窗
				codeImg: '', //客服二维码
				isToken: ''
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '个人中心'
			})
			// #ifdef MP-WEIXIN
				uni.hideHomeButton() //隐藏左上角小房子
			// #endif
			this.isToken = this.$store.state.userToken
		},
		onShow() {
			user.queryOrder(this)
			user.queryMyIndex(this)
		},
		onPageScroll(obj) {
			if (obj.scrollTop > 40) { //设置标题
				uni.setNavigationBarTitle({
					title: '个人中心'
				})
			} else {
				uni.setNavigationBarTitle({
					title: ''
				})
			}
		},
		methods: {
			// goLogin() {
			// 	var pages = getCurrentPages(); // 当前页面
			// 	var beforePage = pages[pages.length - 1].route; // 前一个页面
			// 	uni.navigateTo({
			// 		url: "../login/login?path=" + beforePage
			// 	})
			// },
			navigateToEva(){
				uni.navigateTo({
					url: './evaluate'
				})
			},
			goMyOrder(state) {
				uni.navigateTo({ //订单详情
					url: "./myOrder?state=" + state
				})
			},
			goBill() { //账单
				uni.navigateTo({
					url: "./bill"
				})
			},
			goBalance() { //余额
				uni.navigateTo({
					url: "./balance"
				})
			},
			goSingleCardFree() { //免单卡
				uni.navigateTo({
					url: "./singleCardFree"
				})
			},
			goPoster() {
				uni.navigateTo({
					url: "./InvitationPoster"
				})
			},
			showService() { //客服弹窗
				if (!this.$store.state.userToken) {
					this.$message("请先登录")
					return
				}
				this.isService = true
				index.queryCustomerQrCode(this,3)
			},
			close() { //关闭弹窗
				this.isService = false
			},
			goUserInfo() {
				uni.navigateTo({
					url: "./userInfo?userData=" + JSON.stringify(this.userData)
				})
			},
			goCard() {
				uni.navigateTo({
					url: './singleCardFree'
				})
			}
		}
	}
</script>


<style>
	page{
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
<style scoped>
	.scroll-class {
		max-height: calc(100vh - 50px);
	}
	/* 16圆角 白背景 */
	.fillet {
		border-radius: 16rpx;
		background: #fff;
		margin: 24rpx 24rpx 0;
	}

	.mian {
		padding-bottom: 108rpx;
	}

	.top {
		padding: 40rpx 24rpx 173rpx;
		background-color: rgba(235, 28, 36, 1);
	}

	.user-info {
		margin-left: 20rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}

	.user-info image {
		width: 100rpx;
		height: 100rpx;
		margin-right: 16rpx;
		border-radius: 50%;
	}

	.user-info .login-img {
		height: 22rpx;
		width: 12rpx;
		display: block;
		margin-left: 10rpx;
	}

	.save-money {
		margin-top: 40rpx;
		padding: 0 24rpx 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 16rpx;
		height: 88rpx;
		background: rgba(255, 255, 255, .3);
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	.surplus-card {
		display: flex;
		align-items: center;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}

	.surplus-card image {
		width: 12rpx;
		height: 22rpx;
		display: block;
		margin-left: 17rpx;
	}

	/* 我的交易 */
	.my-deal {
		margin-top: -144rpx;
	}

	.title {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 24rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.view-all {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.view-all image {
		width: 12rpx;
		height: 22rpx;
		display: block;
		margin-left: 8rpx;
	}

	.state {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
	}

	.state .item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 25%;
		height: 173rpx;
		position: relative;
	}

	.state .item image {
		height: 44rpx;
		width: 44rpx;
		display: block;
		margin-bottom: 16rpx;
	}

	.state .item .number {
		position: absolute;
		padding: 0 10rpx;
		line-height: 28rpx;
		top: 32rpx;
		left: 94rpx;
		background: #FF494F;
		border-radius: 14rpx;
		font-size: 18rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	/* 我的成就 */
	.my-deal-content {
		padding-bottom: 31rpx;
	}

	.achievement {
		padding: 33rpx 24rpx 16rpx 24rpx;
		display: flex;
	}

	.save {
		display: flex;
		align-items: center;
		padding: 12rpx 16rpx;
		width: 287rpx;
		border-radius: 16rpx;
		border: 1rpx solid #E8E8E8;
		margin-right: 16rpx;
	}

	.save:nth-child(2n) {
		margin-right: 0;
	}

	.save image {
		flex-shrink: 0;
		width: 100rpx;
		height: 100rpx;
		display: block;
		margin-right: 24rpx;
	}

	.achievement-money {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.achievement-money .achievement-money-num {
		margin-bottom: 8rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.cumulative {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 33rpx;
		padding: 7rpx 22rpx 2rpx 32rpx;
		border-radius: 16rpx;
		border: 1rpx solid #E8E8E8;
		margin: 0 24rpx;
	}

	.cumulative-num {
		margin-bottom: 8rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40rpx;
	}

	.cumulative image {
		width: 244rpx;
		height: 113rpx;
		display: block;
	}

	/* 推荐工具 */
	.tool {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		padding: 0 24rpx;
	}

	.tool-left {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
	}

	.tool-left image {
		width: 44rpx;
		height: 44rpx;
		display: block;
		margin-right: 16rpx;
	}

	.tool-right {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40rpx;
	}

	.tool-right image {
		width: 44rpx;
		height: 44rpx;
		display: block;
		margin-left: 8rpx;
	}

	.single-card-free {
		padding: 0 16rpx;
		line-height: 36rpx;
		background: #333333;
		border-radius: 4rpx;
		font-size: 18rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FDD7B5;
		margin-left: 16rpx;
	}

	/* 客服弹窗 */
	.service {
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

	.service-content {
		position: relative;
	}

	.service-content .service-bg {
		width: 560rpx;
		height: 631rpx;
	}

	.close-service {
		position: absolute;
		display: block;
		right: 24rpx;
		top: 24rpx;
		width: 44rpx;
		height: 44rpx;
		z-index: 10;
	}

	.service-details {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		width: 100%;
		padding-top: 68rpx;
	}

	.service-border {
		width: 480rpx;
		height: 1rpx;
		background: #E8E8E8;
		margin: 40rpx 0 32rpx;
	}

	.service-details image {
		width: 400rpx;
		height: 400rpx;
		display: block;
	}
</style>
