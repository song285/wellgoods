<template>
	<view>
		<view class="mian">
			<view class="top">
				<view class="top-left">
					<view>我的免单卡</view>
					<view class="a-few">{{data.freeBillCardNumber}} 张</view>
				</view>
				<view class="top-see" @click="goDetailed(data.freeBillCardNumber)">查看明细</view>
			</view>
			<view class="how">如何获取免单卡</view>
			<view class="item">
				<view class="item-left">
					<image src="http://47.111.232.251:8106/path?name=1605064640044.png" mode=""></image>
					<view class="item-text">
						<view class="item-title">赠送好友</view>
						<view>好友领取成功，即可获得1张卡</view>
					</view>
				</view>
				<view class="item-right" @click="give">去赠送</view>
			</view>
			<view class="item">
				<view class="item-left">
					<image src="http://47.111.232.251:8106/path?name=1605064671219.png" mode=""></image>
					<view class="item-text">
						<view class="item-title">新人礼包</view>
						<view>新用户注册，即可获得1张卡</view>
					</view>
				</view>
				<view class="item-right-grey">已领取</view>
			</view>
			<view class="item">
				<view class="item-left">
					<image src="http://47.111.232.251:8106/path?name=1605064707735.png" mode=""></image>
					<view class="item-text">
						<view class="item-title">首次提现</view>
						<view>完成首单购买，提现后得1张卡</view>
					</view>
				</view>
				<view class="item-right" @click="receive">{{data.status == 0 ? "未领取" : data.status == 1 ? "已领取" : "未提现" }}</view>
			</view>
			<view class="exchange" @click="goIndex">去免费兑换商品</view>
		</view>
	</view>
</template>

<script>
	import singleCardFree from "../../common/api/user/singleCardFree.js"
	export default {
		data() {
			return {
				data:{
					freeBillCardNumber:0
				}
			}
		},
		onShow() {
			singleCardFree.queryFreeBillFirstPage(this)
		},
		methods: {
			give(){
				uni.navigateTo({
					url:"./receiveCard"
				})
			},
			goIndex(){
				this.$store.commit("choiceFooter", 1)
				uni.navigateTo({
					url:"../index/index"
				})
			},
			goDetailed(cardNumber){
				uni.navigateTo({
					url:"./detailed?card=" + cardNumber
				})
			},
			receive(){
				if(this.data.status==0){
					singleCardFree.getFirstGetCashFreeBill(this)
				}
			}
		}
	}
</script>

<style scoped>
	.mian {
		height: calc(100vh - 24rpx);
		background: #fff;
		padding-top: 24rpx;
	}

	.top {
		margin: 0 24rpx 24rpx;
		padding: 40rpx;
		background: #333333;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.top-left {
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FDD7B5;
		line-height: 37rpx;
	}

	.top-left .a-few {
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FDD7B5;
		line-height: 50rpx;
		margin-top: 4rpx;
	}

	.top-see {
		width: 144rpx;
		height: 57rpx;
		background: rgba(253, 215, 181, 0.99);
		border-radius: 29rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 57rpx;
		text-align: center;
	}

	.how {
		line-height: 88rpx;
		margin: 0 24rpx 16rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25rpx 26rpx 24rpx 24rpx;
	}

	.item-left {
		display: flex;
		align-items: center;
	}

	.item-left image {
		width: 80rpx;
		height: 80rpx;
		display: block;
		margin-right: 16rpx;
	}

	.item-text {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 30rpx;
	}

	.item-text .item-title {
		margin-bottom: 8rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 45rpx;
	}

	.item-right {
		width: 144rpx;
		line-height: 56rpx;
		border: rgba(235, 28, 36, .99);
		border-radius: 28rpx;
		border: 1rpx solid #EB1C24;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #EC1F27;
		text-align: center;
	}
	.item-right-grey{
		width: 144rpx;
		line-height: 56rpx;
		border-radius: 28rpx;
		border: 1rpx solid rgba(153, 153, 153, 1);
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		text-align: center;
	}
	.exchange{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750rpx;
		height: 98rpx;
		background: #EB1C24;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 98rpx;
	}
</style>
