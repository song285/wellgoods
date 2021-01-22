<template>
	<view class="main">
		<view class="collection-box" v-show="list.length>0" v-for="(item,index) in list" :key='index'  @click="goDetail(item.goodsId)">
			<view class="col-left" :class="item.effective == false ? 'invalid' : '' ">
				<image :src="item.mainPic" mode=""></image>
			</view>
			<view class="goods-box" v-if="item.effective">
				<view class="goods-title eli2">
					<image src="https://staticresource.haichennux.net/path?name=1608270482574.png" mode=""></image>
					<text>{{item.title}}</text>
				</view>
				<view class="free-card"  v-if="item.freeBillNumber != null">
					<text class="free-left">免单卡</text>
					<text class="card-num">{{item.freeBillNumber}}</text>
				</view>
				<view class="goods-price">
					<text class="price-type">￥</text>
					<text class="new-price">{{item.price}}</text>
				</view>
				<view class="btn">
					<view class="share" @click.stop="share(item.goodsId)">分享好友</view>
					<view class="buy-now" @click.stop="goDetail(item.goodsId)">立即抢购</view>
				</view>
			</view>
			<view class="goods-box" v-if="!item.effective" :class="item.effective == false ? 'invalid' : '' ">
				<view class="goods-title eli2">
					<image src="https://staticresource.haichennux.net/path?name=1608270482574.png" mode=""></image>
					<text class="title">{{item.title}}</text>
				</view>
				<view class="invalid-tips">已失效</view>
				<view class="invalid-price">
					<text class="price-type">￥</text>
					<text class="new-price">{{item.price}}</text>
				</view>
				<view class="btn">
					<view class="share">分享好友</view>
					<view class="buy-now">立即抢购</view>
				</view>
			</view>
			<!-- 删除 -->
			<view class="delitem"  @click.stop="del(item.goodsId,index)">
				<image src="http://47.111.232.251:8106/path?name=1605065974783.png" mode=""></image>
			</view>
		</view>
		<view v-if="list.length<1" class="no-data">
			<image src="http://47.111.232.251:8106/path?name=1605005328572.png" mode=""></image>
			<view>空空如也</view>
		</view>
		<!-- 底部 -->
		<Footer></Footer>
	</view>
</template>

<script>
	import collection from '../../common/api/index/index.js'
	export default {
		data() {
			return {
				list: [],
				goodsId: ''
			}
		},
		onLoad() {
			collection.queryFavorite(this)
			// #ifdef MP-WEIXIN
				uni.hideHomeButton() //隐藏左上角小房子
			// #endif
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '我的收藏'
			})
		},
		methods: {
			goDetail(goodsId) {
				uni.navigateTo({
					url: "../index/details?type=1&goodsId=" + goodsId + "&return=2" 
				})
			},
			share(goodsId) {
				uni.navigateTo({
					url: "../index/shareProducts?goodsId=" + goodsId
				})
			},
			del(goodsId, index) {
				
				let _this = this
				uni.showModal({
					content:"确定删除收藏吗？",
					confirmColor:'#EB1C24',
					cancelColor:"#999999",
					success: function (res) {
						if (res.confirm) {
							_this.goodsId = goodsId
							collection.deleteFavorite(_this)
							_this.list.splice(index, 1)
						} else if (res.cancel) {
							return false
						}
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color:#FFFFFF
	}
</style>

<style lang="scss" scoped>
	.main {
		padding-bottom: 120rpx;
	}
	.collection-box:first-child {
		margin-top: 10rpx;
	}
	.collection-box {
		padding: 24rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		position: relative;
		.col-left {
			width: 220rpx;
			height: 220rpx;
			background: #F4F4F4;
			border-radius: 8rpx;
			margin-right: 16rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				width: 220rpx;
				height: 220rpx;
				border-radius: 8rpx;
			}
		}
		.btn {
			position: absolute;
			bottom: 24rpx;
			right: 24rpx;
			display: flex;
			align-items: center;
			margin-top: 24rpx;
			view {
				line-height: 57rpx;
				opacity: 0.99;
				padding: 0 24rpx;
				border-radius: 29rpx;
				font-size: 24rpx;
			}
			.share {
				border: 1rpx solid #FF8500;
				color: #FF8500;
			}
			
			.buy-now {
				border: 1rpx solid #EB1C24;
				color: #EC1F27;
				margin-left: 24rpx;
			}
		}
		.goods-box {
			margin-right: 32rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			.goods-title {
				image {
					width: 28rpx;
					height: 28rpx;
					margin-right: 8rpx;
					vertical-align: middle;
				}
				text {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
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
				// margin-top: 16rpx;
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
					color: #333333;
					text-align: center;
					padding-left: 10rpx;
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
		.delitem {
			width: 44rpx;
			height: 44rpx;
			image {
				width: 44rpx;
				height: 44rpx;
			}
		}
	}
	/* 无数据 */
	.no-data {
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
	
	.no-data image {
		width: 280rpx;
		height: 280rpx;
		display: block;
		margin-bottom: 40rpx;
	}
	
	/* 失效 */
	.invalid .title {
		color: #ccc !important;
	}
	
	.invalid image {
		filter: grayscale(100%);
	}
	
	.invalid .invalid-tips {
		background: #ccc;
		color: #fff;
		line-height: 33rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		width: 90rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	
	.invalid .single-card-free {}
	
	.invalid .single-card-free view {
		background: #ccc;
		color: #fff;
	}
	
	.invalid .invalid-price {
		color: #ccc;
	}
	
	.invalid .btn view {
		border: 1rpx solid #ccc !important;
		color: #ccc !important;
	}
</style>
