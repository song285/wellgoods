<template>
	<view>
		<view class="main">
			<view class="Several-people">已邀请 <text>{{list.length}}</text> 人</view>
			<view class="Invited" v-for="item in list">
				<image :src="item.img" mode=""></image>
				<view>{{item.registerDate}}注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	import singleCardFree from "../../common/api/user/singleCardFree.js"
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			singleCardFree.queryMyInvite(this)
		},
		methods: {

		}
	}
</script>

<style scoped>
	.main {
		padding: 0 24rpx;
		height: 100vh;
		background: #fff;
	}

	.Several-people {
		line-height: 88rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.Several-people text {
		color: #EB1C24;
		margin: 0 8rpx;
	}

	.Invited {
		display: flex;
		align-items: center;
		height: 88rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		margin-bottom: 32rpx;
	}

	.Invited image {
		width: 60rpx;
		height: 60rpx;
		display: block;
		margin-right: 16rpx;
		border-radius: 50%;
	}
</style>
