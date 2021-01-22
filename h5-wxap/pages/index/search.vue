<template>
	<view>
		<view class="main" :style="{ 'background-color' : productLength > 0 ? '#f5f5f5' :'#fff' }">
			<!-- 搜索 -->
			<view class="top">
				<view class="search">
					<input type="text" v-model="searchText" placeholder="搜索宝贝名称，如口红" @confirm="search"/>
					<image class="search-del" @click="delSearch" v-if="searchText.length > 0" src="http://47.111.232.251:8106/path?name=1606281847566.png" mode=""></image>
					<view @click="search">搜索</view>
					<image class="search-icon" src="http://47.111.232.251:8106/path?name=1605064836142.png" mode=""></image>
				</view>
				<!-- 导航 -->
				<view class="nav" v-if="productLength > 1">
					<view :class="state == 1 ? 'on' : '' " @tap="choice(1)">综合</view>
					<view :class="state == 2 ? 'on' : '' " @tap="choice(2)">
						<view class="">销量</view>
						<view class="sort">
							<!-- 上 -->
							<image v-if="salesOrder == 0 || salesOrder == 2" src="https://staticresource.haichennux.net/path?name=1608198242082.png" mode=""></image>
							<!-- 红色上 -->
							<image v-if="salesOrder == 1 && state == 2" src="https://staticresource.haichennux.net/path?name=1608198220053.png" mode=""></image>
							<!-- 下 -->
							<image v-if="salesOrder == 0 || salesOrder == 1" src="https://staticresource.haichennux.net/path?name=1608198275537.png" mode=""></image>
							<!-- 红色下 -->
							<image v-if="salesOrder == 2 && state == 2" src="https://staticresource.haichennux.net/path?name=1608198255976.png" mode=""></image>
						</view>
					</view>
					<view :class="state == 3 ? 'on' : '' " @tap="choice(3)">
						<view class="">价格</view>
						<view class="sort">
							<!-- 上 -->
							<image v-if="priceOrder == 0 || priceOrder == 2" src="https://staticresource.haichennux.net/path?name=1608198242082.png" mode=""></image>
							<!-- 红色上 -->
							<image v-if="priceOrder == 1 && state == 3" src="https://staticresource.haichennux.net/path?name=1608198220053.png" mode=""></image>
							<!-- 下 -->
							<image v-if="priceOrder == 0 || priceOrder == 1" src="https://staticresource.haichennux.net/path?name=1608198275537.png" mode=""></image>
							<!-- 红色下 -->
							<image v-if="priceOrder == 2 && state == 3" src="https://staticresource.haichennux.net/path?name=1608198255976.png" mode=""></image>
						</view>
					</view>
					<view :class="state == 4 ? 'on' : '' " @tap="choice(4)">
						<view class="">返利</view>
						<view class="sort">
							<!-- 上 -->
							<image v-if="rebateOrder == 0 || rebateOrder == 2" src="https://staticresource.haichennux.net/path?name=1608198242082.png" mode=""></image>
							<!-- 红色上 -->
							<image v-if="rebateOrder == 1 && state == 4" src="https://staticresource.haichennux.net/path?name=1608198220053.png" mode=""></image>
							<!-- 下 -->
							<image v-if="rebateOrder == 0 || rebateOrder == 1" src="https://staticresource.haichennux.net/path?name=1608198275537.png" mode=""></image>
							<!-- 红色下 -->
							<image v-if="rebateOrder == 2 && state == 4" src="https://staticresource.haichennux.net/path?name=1608198255976.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 历史搜索 -->
			<view class="search-history" v-if="productLength<1">
				<view>历史搜索</view>
				<image src="http://47.111.232.251:8106/path?name=1605065974783.png" mode="" @click="delHistory"></image>
			</view>
			<view class="history" v-if="productLength<1">
				<view class="history-item eli" v-for="item,index in historyList" :key="index" @click="fillInput(item)">{{item}}</view>
			</view>
			<!-- 商品 -->
			<view class="commodity">
				<!-- <view class="item" v-for="item in productList" :key="item" @tap="goDetails(item)">
					<image class="commodity-map" :src="item.mainPic" mode=""></image>
					<view class="title eli2">
						<image src="http://47.111.232.251:8106/path?name=1605065043348.png" mode=""></image>
						{{item.title}}
					</view>
					<view class="card">
						<view class="single-card-free" v-if="item.isZero==1">
							<view>免单卡</view>
							<view class="card-num">{{item.costFreeCardNumber}}</view>
						</view>
						<view class="rebate">返{{item.discountPrice}}</view>
					</view>
					<view class="price">
						<view class="present-price"><text>¥</text>{{item.actualPrice}}</view>
						<view class="original-price">￥{{item.taobaoPrice}}</view>
					</view>
				</view> -->
				<!-- 商品 -->
				<scroll-view scroll-y="true" class="scroll-class">
					<view class="goods-box" v-for="item,index in productList" :key="index"  @tap="goDetails(item)">
						<view class="goods-left">
							<image :src="item.mainPic" mode=""></image>
						</view>
						<view class="goods-right">
							<view class="goods-title eli2">
								<image src="https://staticresource.haichennux.net/path?name=1608270482574.png" mode=""></image>
								<text>{{item.title}}</text>
							</view>
							<view class="card-box">
								<view class="free-card"  v-if="item.costFreeCardNumber > 0">
									<text class="free-left">免单卡</text>
									<text class="card-num">{{item.costFreeCardNumber}}</text>
								</view>
								<view class="rebate">返{{item.discountPrice}}</view>
							</view>
							<view class="goods-price">
								<text class="price-type">￥</text>
								<text class="new-price">{{item.actualPrice}}</text>
								<text class="old-price">￥{{item.taobaoPrice}}</text>
							</view>
						</view>
						<view class="bg-color"></view>
					</view>
				</scroll-view>
			</view>
			<!-- 暂无搜索记录 -->
			<view class="no-record" v-if="historyList==''">
				<image src="http://47.111.232.251:8106/path?name=1605005614938.png" mode=""></image>
				<view>暂无搜索记录</view>
			</view>
			<!-- 返回顶部 -->
			<view class="back_top" @click="returnTop" v-if='ifFixedType'>
				<image src="https://staticresource.haichennux.net/path?name=1608197854165.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import index from "../../common/api/index/index.js"
	export default {
		data() {
			return {
				historyList:[],
				pages:{
					pageNumber:1,
					pageSize:10,
				},
				productList:[],//商品数据
				productLength:0,//商品数据
				searchText:'',
				typeId:'',
				state:1,
				ifFixedType:false,
				
				salesOrder:0,//销量排序，
				salesOrderSort:'',//默认升序
				
				priceOrder:0,//价格排序
				priceOrderSort:'',//默认升序
				
				rebateOrder:0,//返利排序
				rebateOrderSort:'',//默认升序
				
				count:0,
				count1:0,
				count2:0
			}
		},
		onPageScroll(obj){
			if(obj.scrollTop > 260){//判断类型是否固定头部
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
			choice(num){
				this.state = num
				switch(num){
					case 1:
						[this.salesOrder,this.priceOrder,this.rebateOrder] = [0,0,0];
						[this.salesOrderSort,this.priceOrderSort,this.rebateOrderSort] = ['','',''];
						this.search();
						break;
					case 2:
						this.count++
						if(this.count % 2 == 1) {
							this.salesOrder = 1;
							this.salesOrderSort = 'asc'
						} 
						if(this.count % 2 == 0) {
							this.salesOrder = 2;
							this.salesOrderSort = 'desc'
						}
						[this.priceOrder,this.rebateOrder] = [0,0];
						[this.priceOrderSort,this.rebateOrderSort] = ['',''];
						this.search();
						break
					case 3:
						this.count1++
						if(this.count1 % 2 == 1) {
							this.priceOrder = 1;
							this.priceOrderSort = 'asc'
						}
						if(this.count1 % 2 == 0) {
							this.priceOrder = 2;
							this.priceOrderSort = 'desc'
						}
						[this.salesOrder,this.rebateOrder] = [0,0];
						[this.salesOrderSort,this.rebateOrderSort] = ['',''];
						this.search();
						break
					case 4:
						this.count2++
						if(this.count2 % 2 == 1) {
							this.rebateOrder = 1;
							this.rebateOrderSort = 'asc'
						}
						if(this.count2 % 2 == 0) {
							this.rebateOrder = 2;
							this.rebateOrderSort = 'desc'
						}
						[this.salesOrder,this.priceOrder] = [0,0];
						[this.salesOrderSort,this.priceOrderSort] = ['',''];
						this.search();
						break
				}
			},
			back(){
				uni.navigateBack({})
			},
			fillInput(item){
				this.searchText = item
				this.search()
			},
			delSearch(){
				setTimeout(()=>{
					this.searchText = ''
					this.productList = []
					this.productLength = 0
				},50)
			},
			search(){
				this.productList = []
				this.pages.pageNumber = 1
				this.pages.pageSize = 10
				index.search(this)
				if(this.historyList.includes(this.searchText)){
					return
				}
				this.historyList.unshift(this.searchText)
				uni.setStorageSync('historyList',this.historyList)
			},
			goDetails(item){//跳详情
				let pages = getCurrentPages()
				let url = pages[pages.length - 1].route
				uni.setStorageSync('listItem', item);
				uni.navigateTo({
					url:"./details?return=2&path=" + url
				})
			},
			delHistory(){
				let _this = this
				uni.showModal({
					content:"确定删除全部索搜历史？",
					confirmColor:'#EB1C24',
					cancelColor:"#999999",
					success: function (res) {
						if (res.confirm) {
							uni.removeStorage({
								key: 'historyList'
							})
							_this.historyList = []
						} else if (res.cancel) {
							return false
						}
					}
				})
				
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '搜索'
			})
			if(uni.getStorageSync('historyList')){
				this.historyList = uni.getStorageSync('historyList')
			}
		},
		onReachBottom(){
			this.pages.pageNumber = this.pages.pageNumber + 1
			index.search(this)
		}
	}
</script>

<style>
	page{
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
<style scoped>
	.scroll-class {
		max-height: calc(100vh - 98px);
	}
	.main{
		min-height: 100vh;
		background: #fff;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}
	.top {
		width: 750rpx;
		/* height: 88rpx; */
		position: fixed;
		top: 0;
	}
	
	.search {
		height: 88rpx;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
	}
	
	.search input {
		width: 458rpx;
		height: 68rpx;
		padding-left: 76rpx;
		background: #F7F7F7;
		border-radius: 36rpx;
		border: none;
		font-size: 28rpx;
		color: #333;
		padding-right: 100rpx;
	}
	.search view{
		font-size: 26rpx;
		color: #999999;
		margin-left: 16rpx;
	}
	.search .search-del{
		height: 68rpx;
		width: 68rpx;
		display: block;
		position: absolute;
		top: 10rpx;
		right: 100rpx;
		z-index: 10;
	}
	.search .search-icon {
		height: 44rpx;
		width: 44rpx;
		display: block;
		position: absolute;
		top: 22rpx;
		left: 40rpx;
	}
	.search-history{
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 88rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #222222;
		margin: 0 32rpx 0rpx 24rpx;
		margin-top: 88rpx;
	}
	.search-history image{
		height: 44rpx;
		width: 44rpx;
		display: flex;
	}
	.history{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin: 0 12rpx;
		padding-bottom: 24rpx;
		max-height: 310rpx;
		overflow: hidden;
	}
	.history .history-item{
		max-width: 630rpx;
		flex-shrink: 0;
		margin:24rpx 12rpx 0 ;
		padding: 0 32rpx;
		line-height: 56rpx;
		background: #F7F7F7;
		border-radius: 28rpx;
		font-size: 26rpx;
		color: #666666;
		text-align: center;
	}
	.no-record{
		margin-top: 120rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 37rpx;
	}
	.no-record image{
		width: 280rpx;
		height: 280rpx;
		display: block;
		margin-bottom: 40rpx;
	}
	.commodity{
		display: flex;
		flex-wrap: wrap;
		/* padding: 0 24rpx; */
		padding-top: 176rpx;
		padding-bottom: 20rpx;
	}
	.item{
		flex-shrink: 0;
		width: 343rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		padding-bottom: 23rpx;
		margin-right: 16rpx;
		margin-top: 16rpx;
	}
	.item:nth-child(2n){
		margin-right: 0;
	}
	.commodity-map{
		width: 343rpx;
		height: 343rpx;
		display: block;
		margin-bottom: 16rpx;
	}
	.title{
		font-size: 28rpx;
		color: #333333;
		line-height: 40rpx;
		margin: 0 16rpx;
	}
	.title image{
		width: 28rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}
	.card{
		display: flex;
		align-items: center;
		margin: 16rpx 16rpx;
		font-family: PingFangSC-Medium, PingFang SC;
	}
	.single-card-free{
		display: flex;
		align-items: center;
		height: 32rpx;
		line-height: 32rpx;
		font-weight: 500;
		font-size: 18rpx;
		margin-right: 16rpx;
	}
	.single-card-free view{
		padding: 0 8rpx;
		background: #333333;
		border-radius: 4rpx 0px 0px 4rpx;
		color: #FDD7B5;
	}
	.single-card-free .card-num{
		padding: 0 16rpx;
		color: #333333;
		border-radius: 0rpx 4px 4px 0rpx;
		background: #FDD7B5;
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
</style>

<style scoped lang="scss" scoped>
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
</style>

<style scoped>
	/* 头部 */
	.nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 88rpx;
		background: #fff;
	}
	
	.nav>view {
		width: 20%;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.nav .sort{
		margin-left: 4rpx;
	}
	
	.nav .sort image{
		width: 16rpx;
		height: 8rpx;
		display: block;
	}
	
	.nav .sort image:first-child{
		margin-bottom: 4rpx;
	}
	
	.nav .sort image:nth-child(2){
		margin-top: 4rpx;
	}
	
	.nav view.on {
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 600;
		color: #EB1C24;
	}
	
	.back_top{
		position: fixed;
		right: 24rpx;
		bottom: 60rpx;
		z-index: 999;
	}
	
	.back_top image{
		width: 68rpx;
		height: 68rpx;
	}
</style>