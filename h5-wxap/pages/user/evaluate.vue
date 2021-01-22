<template>
	<view>
		<view class="main">
			<!-- 导航 -->
			<view class="top">
				<view :class="state == 1 ? 'on' : '' " @tap="choice(1)">待评价</view>
				<view :class="state == 2 ? 'on' : '' " @tap="choice(2)">待审核</view>
				<view :class="state == 3 ? 'on' : '' " @tap="choice(3)">已完成</view>
				<view :class="state == 4 ? 'on' : '' " @tap="choice(4)">已取消</view>
			</view>
			<scroll-view scroll-y="true" class="scroll-class">
				<!-- 待评价内容 -->
				<view class="item" v-for="item,index in evaData.records" :key="index" v-if="evaData.records.length > 0">
					<view class="title">
						<view>订单编号：{{ item.orderNo }}</view>
						<view class="yellow-text" v-if="item.deadlineForEvaluate">{{ item.deadlineForEvaluate }}</view>
					</view>
					<view class="content">
						<image :src="item.mainPic" mode=""></image>
						<view>
							<view class="describe eli2">{{ item.title }}</view>
							<view class="number">
								<view class="price">
									<view class="present-price"><text>¥</text>{{ item.spreadAmt }}</view>
									<view class="original-price" v-if="item.dealAmt">￥{{ item.dealAmt }}</view>
								</view>
								<view>x{{ item.number }}</view>
							</view>
						</view>
					</view>
					<view class="feedback">
						<view class="estimate">返现：<text>¥{{ item.rebateAmt }}</text></view>
						<view class="btn">
							<view v-if="state == 2" class="grey-border" @click="showCapimg(item)">查看截图</view>
							<view v-if="state == 1" class="red-border" @click="navigateToEva(item)">评价领1张免单卡</view>
							<view v-if="state == 3 && item.whetherReceive == 0" class="red-border" @click="getCard(item)">领取免单卡</view>
							<view v-if="state == 2" class="grey-border" @click="oncancelEva(item)">撤回评价</view>
						</view>
					</view>
					<!-- 取消原因 -->
					<view class="reason" v-if="item.businessRejectReason && [4,5].includes(item.evaluateStatus)">
						<text class="reason-title">取消原因：</text>
						<text class="reason-cont">{{ item.businessRejectReason }}</text>
					</view>
				</view>		
				<!-- 空列表 -->
				<view class="no-order" v-if="evaData.records.length == 0">
					<image src="http://47.111.232.251:8106/path?name=1605005567295.png" mode=""></image>
					<view>没有相关内容</view>
				</view>
			</scroll-view>
			<!-- 查看截图弹窗 -->
			<view class="capimg" v-if="capimg" @click="closeCap">
				<image :src="capimg" mode="aspectFit"></image>
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
				evaData:{},
				capimg:'',//查看截图
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '邀请评价'
			})
		},
		onShow() {
			user.queryEvaOrders(this)
		},
		methods:{
			choice(num) {
				this.state = num
				switch(num){
					case 1:user.queryEvaOrders(this);break;
					case 2:user.queryOrderEvaluate(this,num -1);break;
					case 3:user.queryOrderEvaluate(this,num -1);break;
					case 4:user.queryOrderEvaluate(this,num -1);break;
				}
			},
			// 评价
			navigateToEva(item){
				uni.navigateTo({
					url:'./submitEva?item=' + JSON.stringify(item)
				})
			},
			// 查看截图
			showCapimg(item){
				user.getcapimg(this,item)
			},
			// 关闭查看截图
			closeCap(){
				this.capimg = ''
			},
			// 撤回评价
			oncancelEva(item){
				user.cancelEva(this,item)
			},
			// 领取免单卡
			getCard(item) {
				user.getfreeCard(this,item)
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
<style lang="scss" scoped>
	.main {
		padding-top: 88rpx;
	}
	.scroll-class {
		max-height: calc(100vh - 44px);
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
		font-weight: 600;
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
		font-weight: 600;
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
	
	.feedback {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.estimate {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
	}
	
	.estimate text {
		font-size: 26rpx;
		color: #EB1C24;
		font-weight: 600;
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
	
	.reason {
		border-top: 1rpx solid #E8E8E8;
		padding-top: 24rpx;
		margin-top: 32rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		.reason-title {
			color: #EB1C24;
		}
		.reason-cont {
			color: #666666;
		}
	}
	
	.capimg {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		image {
			height: 600rpx;
			width: 750rpx;
		}
	}
</style>
