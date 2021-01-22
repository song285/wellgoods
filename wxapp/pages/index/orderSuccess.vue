<template>
	<view>
		<view class="main">
			<view class="content">
				<image src="http://47.111.232.251:8106/path?name=1605065664018.png" mode=""></image>
				<view class="success">订单提交成功</view>
				<view class="tips">收到商品后，记得回来领取返利哦！</view>
				<view class="btn">
					<view class="return-index" @tap="goIndex">返回首页</view>
					<view @click="viewOrder">查看订单</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goIndex() {
				uni.redirectTo({
					url: "./index"
				})
			},
			viewOrder(){
				uni.redirectTo({
					url:"../user/myOrder?state=1"
				})
			}
		}
	}
</script>

<style scoped>
	.main {
		height: 100vh;
		background: #fff;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content image {
		width: 154rpx;
		height: 154rpx;
		display: block;
		margin-top: 150rpx;
		margin-bottom: 32rpx;
	}

	.success {
		line-height: 45rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.tips {
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 37rpx;
		margin: 16rpx 0 120rpx;
	}

	.btn {
		display: flex;
		align-items: center;
	}

	.btn view {
		padding: 0 24rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #EC1F27;
		line-height: 56rpx;
		border-radius: 28rpx;
		border: 1rpx solid rgba(235, 28, 36, .99);
		margin-left: 12px;
	}

	.btn .return-index {
		margin-left: 0rpx;
		color: #666666;
		border: 1rpx solid rgba(153, 153, 153, .99);
	}
</style>
