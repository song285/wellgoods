<template>
	<view>
		<view style="padding-top: 140rpx;">
			<swiper class="uni-swiper" :interval="3000" :duration="1000" :previous-margin="previousMargin"
			 :next-margin="nextMargin" @change="posterChange">
				<swiper-item class="swiper-item" v-for="(item,i) in list">
					<view class="swiper-item">
						<image v-if="isCodeImg" :class="index == i ? 'swiper-img-index' :'behind-index' " :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="share-text">
			<view @click="preservation" class="preservation">保存图片分享给好友</view>
			<view class="get-card">好友通过二维码注册后，您和好友各得一张免单卡</view>
		</view>
	</view>
</template>

<script>
	import user from "../../common/api/user/user.js"
	import download from "../../common/download.js"
	export default {
		data() {
			return {
				index: 0, //轮播索引
				previousMargin: "150rpx", //轮播图向左距离
				nextMargin: "40rpx", //轮播图向左距离
				list:[],
			}
		},
		computed:{
			isCodeImg(){
				if(this.list.length>0){
					uni.hideLoading()
					return true
				}
			}
		},
		onLoad() {
			if(this.list.length<1){
				uni.showLoading({
				    title: '加载中',
					mask:true
				});
			}
			user.shareWxApp(this)
		},
		methods: {
			posterChange(event) {//获取索引
				this.index = event.detail.current
			},
			preservation() {//保存图片
				download.downloadImg(this.list[this.index])
			}
		}
	}
</script>

<style scoped>
	.uni-swiper {
		height: 800rpx;
	}

	.swiper-item {
		position: relative;
	}

	/* .swiper-img {
		width: 450rpx;
		height: 711rpx;
		display: block;
	}
 */
	.uni-swiper .swiper-img-index {
		height: 800rpx;
		width: 450rpx;
		display: block;
		transition: all .3s ease-in 0s;
		border-radius: 16rpx;
	}

	.behind-index {
		margin-top: 45rpx;
		transition: all .3s ease-in 0s;
		width: 450rpx;
		height: 710rpx;
		display: block;
		border-radius: 16rpx;
	}

	.share {
		position: absolute;
		bottom: 25rpx;
		left: 25rpx;
		width: 400rpx;
	}

	.save-money {
		font-size: 22rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 40rpx;
		margin-bottom: 8rpx;
	}

	.save-money text {
		color: #00FDFF;
	}

	.save-money-white {
		font-size: 22rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40rpx;
		margin-bottom: 8rpx;
	}

	.save-money-white text {
		color: #EB1C24;
	}

	.receive {
		font-size: 20rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 30rpx;
		margin-bottom: 35rpx;
	}

	.receive-white {
		font-size: 20rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 30rpx;
		margin-bottom: 35rpx;
	}

	.user {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.user-info {
		display: flex;
		align-items: center;
	}

	.user-info image {
		width: 50rpx;
		height: 50rpx;
		flex-shrink: 0;
		border-radius: 50%;
		margin-right: 8rpx;
	}

	.user-name {
		font-size: 22rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #F8F8F8;
		line-height: 22rpx;
	}

	.user-name-white {
		font-size: 22rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #412013;
		line-height: 22rpx;
	}

	.invitation-white {
		margin-top: 8rpx;
		font-size: 16rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #3D302E;
		line-height: 28rpx;
	}

	.invitation {
		margin-top: 8rpx;
		font-size: 16rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #F8F8F8;
		line-height: 28rpx;
	}

	.ewm {
		display: flex;
		align-items: center;
	}

	.ewm image {
		width: 75rpx;
		height: 75rpx;
		display: block;
		margin-right: 8rpx;
		flex-shrink: 0;
	}

	.ewm view {
		width: 74rpx;
		font-size: 18rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #F8F8F8;
		line-height: 28rpx;
	}

	.ewm-white view {
		width: 74rpx;
		font-size: 18rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #3E2E12;
		line-height: 28rpx;
	}
	.share-text{
		margin: 70rpx auto 0;
		width: 650rpx;
		padding: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.share-text .get-card{
		margin-top: 18rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 33rpx;
		flex-shrink: 0;
	}
	.preservation{
		width: 480rpx;
		height: 88rpx;
		background: #EB1C24;
		border-radius: 44rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
		flex-shrink: 0;
	}
</style>
