<template>
	<view>
		<view class="main">
			<view class="header">
				<view class="left-text">微信头像</view>
				<image :src="userData.headImg" mode=""></image>
			</view>
			<view class="item">
				<view class="left-text">微信昵称</view>
				<view class="right-text">{{userData.nickname}}</view>
			</view>
			<view class="item">
				<view class="left-text">注册手机号</view>
				<view class="right-text">{{userData.phoneNumber}}</view>
			</view>
			<view class="item">
				<view class="left-text">关联淘宝号</view>
				<view class="right-text">{{userData.userTaobaoId==null ? '未绑定' : userData.userTaobaoId}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData:{}
			}
		},
		onLoad(opstion) {
			this.userData = JSON.parse(opstion.userData)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.main{
		padding: 0 32rpx 0 24rpx;
		height: 100vh;
		background: #fff;
	}
.header{
	height: 160rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.header image{
	width: 100rpx;
	height: 100rpx;
	display: block;
	border-radius: 50%;
}
.item{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.left-text{
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #333333;
	line-height: 40rpx;
}
.right-text{
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 40rpx;
}
</style>
