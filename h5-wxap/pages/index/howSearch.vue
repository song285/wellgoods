<template>
	<view>
		<view class="main">
			<view class="top" :style="[{'padding-top':StatusBar + 'px'}]">
				<image @click="goBack" src="http://47.111.232.251:8106/path?name=1605005843600.png" mode=""></image>
			</view>
			<image class="zhinan" src="http://47.111.232.251:8106/path?name=1605261350317.png" mode="widthFix"></image>
			<view class="outer-layer">
				<view class="content">
					<view class="item">
						<view class="title">
							<view class="number">01</view>
							<view>前往淘宝APP搜索指定关键字</view>
						</view>
						<image src="http://47.111.232.251:8106/path?name=1605261362239.png" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<view class="number">01</view>
							<view>前往淘宝APP搜索指定关键字</view>
						</view>
						<image src="http://47.111.232.251:8106/path?name=1605261372097.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: '', //状态栏高度
			}
		},
		methods: {
			goBack() { //后退
				uni.navigateBack({})
			},
		},
		onLoad(opstion) {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle
			})
			let _this = this
			uni.getSystemInfo({ //获取状态栏高度
				success: function(res) {
					_this.StatusBar = res.statusBarHeight
				}
			});
		}
	}
</script>

<style scoped>
	.main{
		min-height: 100vh;
		background: #F03940;
		padding-bottom: 74rpx;
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
	}
	
	.top image {
		width: 23rpx;
		height: 35rpx;
		display: block;
	}
	.zhinan{
		height: 300rpx;
		width: 750rpx;
		display: block;
	}
	.outer-layer{
		margin: 0rpx 32rpx;
		width: 666rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		padding: 10rpx;
	}
	.content{
		width: 666rpx;
		border-radius: 8rpx;
		border: 1rpx solid #FABD10;
		padding-top: 50rpx;
	}
	.item{
		padding-bottom: 60rpx;
	}
	.title{
		display: flex;
		align-items: center;
		margin: 28rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 42rpx;
		margin-bottom: 20rpx;
	}
	.title .number{
		font-size: 36rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #C4100F;
		line-height: 50rpx;
		margin-right: 23rpx;
	}
	.item image{
		width: 300rpx;
		height: 422rpx;
		background: #1F2333;
		border-radius: 25rpx 25rpx 0px 0px;
		margin-left: 88rpx;
	}
</style>
