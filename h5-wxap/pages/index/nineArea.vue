<template>
	<view>
		<!-- 顶部banner -->
		<!-- <view class="top-back">
			<image src="https://staticresource.haichennux.net/path?name=1608198672757.png" mode=""></image>
		</view> -->
		<!-- 轮播 -->
		<swiper class="swiper"
			autoplay
			duration="1000" circular="true">
			<swiper-item v-for="item in swiperList" :key="item.imgSrc">
				<image class="swiper-img" :src="item.imgSrc" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 商品 -->
		<view class="goods-box" v-for="item in goodsList" :key="item.id"  @tap="goDetails(item)">
			<view class="goods-left">
				<image :src="item.mainPic" mode=""></image>
			</view>
			<view class="goods-right">
				<view class="goods-title eli2">
					<image src="https://staticresource.haichennux.net/path?name=1608270482574.png" mode=""></image>
					<text>{{ item.title }}</text>
				</view>
				<view class="card-box">
					<view class="free-card" v-if="item.costFreeCardNumber">
						<text class="free-left">免单卡</text>
						<text class="card-num">{{ item.costFreeCardNumber }}</text>
					</view>
					<view class="rebate" v-if="item.discountPrice ">返{{ item.discountPrice }}</view>
				</view>
				<view class="goods-price">
					<text class="price-type">￥</text>
					<text class="new-price">{{ item.actualPrice }}</text>
					<text class="old-price">￥{{ item.taobaoPrice }}</text>
				</view>
			</view>
		</view>
		<!-- 返回顶部 -->
		<view class="back_top" @click="returnTop" v-if='ifFixedType'>
			<image src="https://staticresource.haichennux.net/path?name=1608197854165.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import index from "../../common/api/index/index.js"
	export default {
		data() {
			return {
				ifFixedType:false,
				pages:{
					pageNumber:1,
					pageSize:10,
				},
				goodsList:[],
				swiperList:[]
			}
		},
		onReachBottom(){//触底加载
			this.pages.pageNumber = this.pages.pageNumber + 1
			index.getZoneAllGoods(this,'lessNinePointNine ')
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '9.9元专区'
			})
			index.getZoneAllGoods(this,'lessNinePointNine ')
			index.swiper(this,2)
		},
		onPageScroll(obj){
			if(obj.scrollTop > 267){//判断类型是否固定头部
				this.ifFixedType = true
			}else{
				this.ifFixedType = false
			}
		},
		methods: {
			// 返回顶部
			returnTop(){
				if (uni.pageScrollTo) {
					uni.pageScrollTo({
						scrollTop: 0
					})
				}
			},
			goDetails(item){//跳详情
				uni.setStorageSync('listItem', item);
				uni.navigateTo({
					url:"./details"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiper{
		// padding:16rpx 24rpx;
		// border-radius: 16rpx;
		height: 260rpx;
		// background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
	}
	.swiper swiper-item{
		// border-radius: 16rpx;
	}
	.swiper .swiper-img {
		width: 750rpx;
		height: 260rpx;
		// border-radius: 16rpx;
		display: block;
	}
	.top-back {
		width: 750rpx;
		height: 260rpx;
		image {
			width: 750rpx;
			height: 260rpx;
		}
	}
	.goods-box {
		width: 654rpx;
		height: 220rpx;
		padding: 24rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		margin: 0 auto;
		margin-top: 16rpx;
		display: flex;
		justify-content: space-between;
		.goods-left {
			max-width: 220rpx;
			max-height: 220rpx;
			min-width: 220rpx;
			min-height: 220rpx;
			background: #F4F4F4;
			border-radius: 8rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 220rpx;
				height: 220rpx;
				border-radius: 8rpx;
			}
		}
		.goods-right {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			margin-left: 16rpx;
			.goods-title {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				image {
					width: 28rpx;
					height: 28rpx;
					margin-right: 8rpx;
					vertical-align: middle;
				}
			}
			.card-box {
				display: flex;
				justify-content: flex-start;
				.free-card {
					width: 110rpx;
					height: 32rpx;
					line-height: 28rpx;
					background: #FDD7B5;
					border-radius: 4rpx;
					font-size: 18rpx;
					font-weight: 500;
					font-family: PingFangSC-Medium, PingFang SC;
					margin-right: 16rpx;
					.free-left {
						display: inline-block;
						width: 70rpx;
						height: 32rpx;
						background: #333333;
						color: #FDD7B5;
						text-align: center;
						border-radius: 4rpx 0px 0px 4rpx;
					}
					.card-num {
						width: 40rpx;
						display: inline-block;
						color: #333333;
						text-align: center;
					}
				}
				.rebate{
					padding: 0 13rpx;
					height: 32rpx;
					line-height: 32rpx;
					background: #FEF2F2;
					border-radius: 4rpx;
					font-size: 18rpx;
					font-weight: 500;
					color: #EB1C24;
				}
			}
			.goods-price {
				font-weight: 600;
				color: #EB1C24;
				font-family: PingFangSC-Medium, PingFang SC;
				.price-type {
					font-size: 22rpx;
				}
				.new-price {
					font-size: 36rpx;
					margin-right: 16rpx;
				}
				.old-price {
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 500;
					color: #999999;
					text-decoration: line-through;
				}
			}
		}
	}
	.back_top{
		position: fixed;
		right: 24rpx;
		bottom: 64rpx;
		z-index: 99;
		image {
			width: 80rpx;
			height: 80rpx;
		}
	}
</style>
