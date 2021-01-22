<template>
	<view>
		<view class="main">
			<view v-if="list" class="item" v-for="item in list">
				<view class="left">
					<view class="title">{{item.title}}</view>
					<view class="number">订单号：{{item.orderNo }}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view :class="item.amt >0 ? 'add-money' : 'reduce-money'">{{item.amt}}</view>
			</view>
			<view v-if="list==''" class="no-data">
				<image src="http://47.111.232.251:8106/path?name=1605005328572.png" mode=""></image>
				<view>空空如也</view>
			</view>
			<!-- <view v-if="list==''" class="no-data">
				<image src="http://47.111.232.251:8106/path?name=1605005494933.png" mode=""></image>
				<view>网络不给力，刷新看看吧</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import user from "../../common/api/user/user.js"
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '账单'
			})
			user.queryOrderDetail(this)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.main{
	background: #fff;
	height:calc(100vh - 1rpx);
	border-top: 1rpx solid #E8E8E8;
	padding: 0 24rpx;
}
.item{
	display: flex;
	justify-content: space-between;
	padding: 24rpx 0 26rpx;
	border-bottom: 1rpx solid #E8E8E8;
}
.title{
	font-size: 30rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #333333;
	line-height: 42rpx;
}
.number{
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 33rpx;
	margin: 8rpx 0;
}
.time{
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 33rpx;
}
.add-money{
	margin-top: 28rpx;
	font-size: 32rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #333333;
	line-height: 45px;
}
.reduce-money{
	margin-top: 28rpx;
	font-size: 32rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #EB1C24;
	line-height: 45px;
}
/* 无数据 */
.no-data{
	margin-top: 200rpx;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
font-size: 26rpx;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #666666;
line-height: 37rpx;
}
.no-data image{
	width: 280rpx;
	height: 280rpx;
	display: block;
	margin-bottom: 40rpx;
}
</style>
