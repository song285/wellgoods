<template>
	<view>
		<view class="main">
			<view class="bav-bg"></view>
			<view class="top">
				<view class="withdrawal">
					<view class="balance">
						<view>账户余额(元)</view>
						<view class="balance-number">{{userData.balance}}</view>
					</view>
					<view class="withdrawal-btn" @click="withdrawal">提现</view>
				</view>
				<view class="from">
					<view>提现到微信</view>
					<view class="user-wx">
						<view>{{userData.nickname}}的微信</view>
						<image src="http://47.111.232.251:8106/path?name=1605066408853.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="detailed">
				<view class="title" @click="goBill">
					<view>提现明细</view>
					<view class="view-all">收支明细<image src="http://47.111.232.251:8106/path?name=1605005763746.png" mode=""></image>
					</view>
				</view>
				<view class="item" v-for="item in list">
					<view class="item-top flex-sb">
						<view class="item-text">{{item.title}}</view>
						<view>{{item.amt}}</view>
					</view>
					<view class="item-money flex-start">
						<view v-if="item.status == 0">{{item.remark}}<view>{{item.payTime}}</view></view>
						<view v-if="item.status == 1">{{item.payTime}}</view>
						<view class="state">{{item.status == 0 ? '失败' : '成功'}}</view>
					</view>
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
				balance:'',//余额
				list:[],
				userData:{
					nickname:''
				}
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '余额提现'
			})
			user.queryGetCashDetail(this)
			user.queryMyIndex(this)
		},
		methods: {
			goBill(){//账单
				uni.navigateTo({
					url:"./bill"
				})
			},
			withdrawal(){
				user.cashOut(this)
			}
		}
	}
</script>

<style scoped>
.bav-bg{
	width: 100%;
	height: 233rpx;
	background: #EB1C24;
}
.top{
	background: #fff;
	box-shadow: 0rpx 1rpx 14rpx 0rpx rgba(0, 0, 0, 0.06);
	border-radius: 16rpx;
	margin: -193rpx 24rpx 0;
}
.withdrawal{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 60rpx 24rpx 40rpx 40rpx;
}
.balance{
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #333333;
	line-height: 34rpx;
}
.balance .balance-number{
	font-size: 56rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #333333;
	line-height: 78rpx;
	margin-top: 8rpx;
}
.withdrawal-btn{
	width: 144rpx;
	line-height: 56rpx;
	text-align: center;
	background: rgba(235, 28, 36, .99);
	border-radius: 28rpx;
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #FFFFFF;
}
.from{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin:  0 24rpx 0 40rpx;
	height: 100rpx;
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #333333;
	line-height: 40rpx;
	border-top: 1rpx solid #E8E8E8;
}
.user-wx{
	display: flex;
	align-items: center;
	font-size: 26rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 37rpx;
}
.user-wx image{
	width: 44rpx;
	height: 44rpx;
	display: block;
	margin-left: 16rpx;
}
	.detailed {
		border-radius: 16rpx;
		background: #fff;
		margin: 24rpx 24rpx 0;
	}
	.item{
		margin:0 24rpx;
		border-bottom: 1rpx solid #E8E8E8;
		padding: 22rpx 0 25rpx;
	}
	.item:last-child{
		border-bottom:none;
	}
	.title {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 24rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.view-all {
		display: flex;
		align-items: center;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #676767;
	}
	
	.view-all image {
		width: 12rpx;
		height: 22rpx;
		display: block;
		margin-left: 8rpx;
	}
	.flex-sb{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.flex-start{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.item-top{
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 45rpx;
		margin-bottom: 8rpx;
	}
	.item-top .item-text{
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 42rpx;
	}
	.item-money{
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #EB1C24;
		line-height: 33rpx;
	}
	.item-money .item-time{
		color: #999999;
	}
	.state{
		width: 100rpx;
		flex-shrink: 0;
		text-align: right;
	}
</style>
