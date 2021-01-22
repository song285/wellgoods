<template>
	<view>
		<view class="mian">
			<view class="top" :style="[{'padding-top':StatusBar + 'px'}]">
				<image @click="goBack" src="http://47.111.232.251:8106/path?name=1605065637175.png" mode=""></image>
				<view>分享商品</view>
				<view></view>
			</view>
			<view class="mian-img" v-if="isCodeImg">
				<image class="mian-img" :src="codeImg" mode="widthFix" show-menu-by-longpress></image>
			</view>
			<view class="tips" v-if="isCodeImg" @click="preservation">点击下载图片发送给好友</view>
		</view>
	</view>
</template>

<script>
	import index from "../../common/api/index/index.js"
	import download from "../../common/download.js"
	export default {
		data() {
			return {
				StatusBar: '', //状态栏高度
				goodsId: '', //商品id
				codeImg: '', //二维码
			}
		},
		methods: {
			goBack() { //后退
				uni.navigateBack({})
			},
			preservation() {//保存图片
				download.downloadImg(this.codeImg)
			}
		},
		computed: {
			isCodeImg() {
				if (this.codeImg != '') {
					uni.hideLoading()
					return true
				}
			}
		},
		onLoad(opstion) {
			let _this = this
			this.goodsId = opstion.goodsId
			uni.getSystemInfo({ //获取状态栏高度
				success: function(res) {
					_this.StatusBar = res.statusBarHeight
				}
			});
			index.shareGoods(this)
			if (this.codeImg == '') {
				uni.showLoading({
					title: '加载中'
				});
			}
		}
	}
</script>

<style scoped>
	.mian {
		min-height: 100vh;
		width: 100vw;
		/* background-image: url("http://47.111.232.251:8106/path?name=1605066003869.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 100% 100%; */
		padding-bottom: 20rpx;
		background: linear-gradient(180deg, #FF3A38 0%, #FD5E03 100%);
	}

	.mian-img image {
		margin: 0 50rpx;
		width: 650rpx;
		border-radius: 16px;
	}

	.tips {
		margin: 20rpx auto 0;
		text-align: center;
		padding: 24rpx 0;
		font-size: 24rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 33rpx;
		width: 550rpx;
		border: 1rpx dashed #EB1C24;
		box-shadow: 0px 1rpx 14rpx 0px rgba(0, 0, 0, 0.06);
		border-radius: 10rpx;
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
		padding: 0 23rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-bottom: 24rpx;
	}

	.top image {
		width: 23rpx;
		height: 35rpx;
		display: block;
	}

	/* .content{
		width: 550rpx;
		padding:50rpx;
		margin: 0 50rpx;
		background: rgba(255, 255, 255, 0.97);
		border-radius: 16rpx;
	}
	.user-info{
		display: flex;
		align-items: center;
		margin-bottom: 47rpx;
	}
	.user-info image{
		width: 80rpx;
		height: 80rpx;
		display: block;
		margin-right: 24rpx;
	}
	.user-name{
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 33rpx;
	}
	.user-name .name{
		margin-bottom: 8rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 45rpx;
	}
	.commodity-map{
		width: 550rpx;
		height: 500rpx;
		display: block;
	}
	.describe{
		margin: 24rpx 0 16rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
	}
	.price{
		display: flex;
		align-items: center;
		height: 50rpx;
		margin: 0rpx 16rpx;
	}
	.present-price{
		font-size: 36rpx;
		font-weight: 500;
		color: #EB1C24;
	}
	.present-price text{
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
	}
	.original-price{
		font-size: 22rpx;
		color: #999999;
		margin-left: 16rpx;
		text-decoration: line-through
	}
	.line{
		width: 550rpx;
		height: 1rpx;
		background: #D8D8D8;
		margin: 26rpx 0 32rpx;
	}
	.ewm{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.ewm image{
		width: 136rpx;
		height: 136rpx;
		background: #F8F8F8;
		display: block;
	}
	.ewm-left{
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 33rpx;
	}
	.ewm-left .follow{
		margin-top: 16rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40rpx;
	} */
</style>
