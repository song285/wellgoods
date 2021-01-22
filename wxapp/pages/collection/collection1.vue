<template>
	<view>
		<view class="main">
			<uni-swipe-action v-if="list.length>0">
				<uni-swipe-action-item v-for="(item,index) in list" :key='index'>
					<view class="item" v-if="item.effective">
						<view class="commodity">
							<image class="commodity-map" :src="item.mainPic" mode=""></image>
							<view class="describe">
								<view class="title eli">{{item.title}}</view>
								<view class="card" v-if="item.freeBillNumber != null">
									<view class="single-card-free">
										<view>免单卡</view>
										<view class="card-num">{{item.freeBillNumber}}</view>
									</view>
								</view>
								<view class="price"><text>¥</text>{{item.price}}</view>
							</view>
						</view>
						<view class="btn">
							<view class="share" @click="share(item.goodsId)">分享好友</view>
							<view class="buy-now" @click="goDetail(item.goodsId)">立即抢购</view>
						</view>
					</view>
					<view class="item" v-if="!item.effective" :class="item.effective == false ? 'invalid' : '' ">
						<view class="commodity">
							<image class="commodity-map" :src="item.mainPic" mode=""></image>
							<view class="describe">
								<view class="title eli">{{item.title}}</view>
								<view class="invalid-tips">已失效</view>
								<view class="invalid-price"><text>¥</text>{{item.price}}</view>
							</view>
						</view>
						<view class="btn">
							<view class="share">分享好友</view>
							<view class="buy-now">立即抢购</view>
						</view>
					</view>
					<template v-slot:right>
						<view class="del" @click="del(item.goodsId,index)">删除</view>
					</template>
				</uni-swipe-action-item>
			</uni-swipe-action>
			<view v-if="list.length<1" class="no-data">
				<image src="http://47.111.232.251:8106/path?name=1605005328572.png" mode=""></image>
				<view>空空如也</view>
			</view>
			<!-- 底部 -->
			<Footer></Footer>
		</view>
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
				this.goodsId = goodsId
				collection.deleteFavorite(this)
				this.list.splice(index, 1)
			}
		}
	}
</script>

<style scoped>
	.main {
		padding-bottom: 108rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}

	.item {
		width: 702rpx;
		padding: 24rpx;
		background: #fff;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-top: 16rpx;
	}

	.commodity {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.commodity-map {
		flex-shrink: 0;
		display: block;
		width: 160rpx;
		height: 160rpx;
		margin-right: 16rpx;
	}

	.describe {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 160rpx;
	}
	.describe .price{
		color: rgba(235, 28, 36, 1);
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}
	.price text{
		font-size: 22rpx;
	}
	.title {
		font-size: 28rpx;
		color: #222222;
		width: 530rpx;
	}

	.card {
		display: flex;
		align-items: center;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}

	.single-card-free {
		display: flex;
		align-items: center;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 18rpx;
	}

	.single-card-free view {
		padding: 0 8rpx;
		background: #333333;
		border-radius: 4rpx 0px 0px 4rpx;
		color: #FDD7B5;
	}

	.single-card-free .card-num {
		padding: 0 16rpx;
		color: #333333;
		border-radius: 0rpx 4px 4px 0rpx;
		background: #FDD7B5;
	}

	.btn {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
	}

	.btn view {
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

	.del {
		background: #EC1F27;
		width: 90rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		height: 100%;
		margin-top: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* 失效 */
	.invalid .describe .title {
		color: #ccc;
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
		border: 1rpx solid #ccc;
		color: #ccc;
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
</style>
