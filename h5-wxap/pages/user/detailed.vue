<template>
	<view>
		<view class="main">
			<view class="top">
				<view>当前可用免单卡</view>
				<view class="a-few">{{cardNumber}} 张</view>
			</view>
			<view class="item" v-for=" item in list">
				<view class="left">
					<view>{{item.name == null ? '' : item.name}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view>{{item.operate}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import singleCardFree from "../../common/api/user/singleCardFree.js"
	export default {
		data() {
			return {
				cardNumber:'',
				list:[]
			}
		},
		onLoad(opstion) {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '免单卡'
			})
			this.cardNumber = opstion.card
			singleCardFree.queryFreeBillCardList(this)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.main{
		padding-top: 24rpx;
		background: #fff;
	}
	.top{
		width: 712rpx;
		padding-left: 38rpx;
		padding-top: 40rpx;
		height: 131rpx;
		background-image: url('http://47.111.232.251:8106/path?name=1605083127896.png');
		background-position: 0 0;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FDD7B5;
		line-height: 37rpx;
	}
	.top .a-few{
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FDD7B5;
		line-height: 50rpx;
	}
	.item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 123rpx;
		border-bottom: 1rpx solid #E8E8E8;
		margin: 0 24rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 45rpx;
	}
	.item .left{
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 42rpx;
	}
	.item .left .time{
		
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 33rpx;
	}
</style>
