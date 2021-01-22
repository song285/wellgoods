<template>
	<view>
		<view class="main">
			<!-- 搜索 -->
			<view class="top">
				<view class="search">
					<!-- <input type="text" placeholder="搜索宝贝名称，如口红" @focus="search"/> -->
					<view @click="search">搜索宝贝名称，如口红</view>
					<image src="http://47.111.232.251:8106/path?name=1605064836142.png" mode=""></image>
				</view>
			</view>
			<scroll-view scroll-y="true">
				<view class="content">
					<!-- 保障 -->
					<view class="introduce" v-if="isSensitive == 1">
						<view class="have" v-for="item in introduce" :key="item.name">
							<image src="http://47.111.232.251:8106/path?name=1605064912710.png" mode=""></image>
							<view>{{item.name}}</view>
						</view>
					</view>
					<!-- 轮播 -->
					<swiper class="swiper" indicator-color="rgba(0, 0, 0, 0.2)" 
						indicator-active-color="#EB1C24" 
						indicator-dots="true" autoplay="false" duration="1000" circular="true">
						<swiper-item v-for="item in swiperList" :key="item.imgSrc">
							<image class="swiper-img" :src="item.imgSrc" mode="" @click="goSwiperDetails(item)"></image>
						</swiper-item>
					</swiper>
					<!-- 0元专区 -->
					<view class="zero-area" v-if="zoneList.zeroStatus == 0" @click="navigateToarea(1)">
						<view class="zero-left">
							<view class="left-box">
								<view class="left-top">
									<image src="https://staticresource.haichennux.net/path?name=1608198639825.png" mode=""></image>
									<view>天天爆款直降</view>
								</view>
								<view class="left-bottom">
									去逛逛
									<view class="btn">GO</view>
								</view>
							</view>
						</view>
						<view class="zero-right">
							<view class="right-item" v-for="item in zoneList.zeroGoodsList" :key="item.id">
								<view class="item-top">
									<image :src="item.mainPic" mode=""></image>
								</view>
								<view class="item-bottom">
									<text class="price-type">￥</text>
									<text class="new-price">{{ item.actualPrice }}</text>
									<text class="old-price">{{ item.taobaoPrice }}</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 9.9元专区 -->
					<view class="zero-area nine-area" v-if="zoneList.ninePointNineStatus == 0" @click="navigateToarea(2)">
						<view class="zero-left">
							<view class="left-box">
								<view class="left-top">
									<image src="https://staticresource.haichennux.net/path?name=1608198603492.png" mode=""></image>
									<view>聚划算度99%</view>
								</view>
								<view class="left-bottom">
									去逛逛
									<view class="btn">GO</view>
								</view>
							</view>
						</view>
						<view class="zero-right">
							<view class="right-item" v-for="item in zoneList.ninePointNineGoodsList" :key="item.id">
								<view class="item-top">
									<image :src="item.mainPic" mode=""></image>
								</view>
								<view class="item-bottom">
									<text class="price-type">￥</text>
									<text class="new-price">{{ item.actualPrice }}</text>
									<text class="old-price">{{ item.taobaoPrice }}</text>
								</view>
							</view>
						</view>
					</view>
					<!-- <swiper :display-multiple-items="articles.length"> -->
						<!--<swiper-item style="min-width: 80px;"
							v-for="(item,index) in articles" 
							:key="index"
							> -->
							<!-- 分类 -->
							<view class="articles-type" :class="ifFixedType ? 'fixed-type' :''">
								<!-- <view :class="choiceIndex==-1 ? 'on' :'' " @tap="choice(-1,'')">今日热门</view> -->
								<view v-for="(item,index) in articles" 
									:key="index" 
									:class="choiceIndex == index ? 'on' :'' " 
									@tap="choice(index,item.typeId)">
									{{item.name}}
								</view>
							</view>
							<!-- 商品 -->
							<view class="commodity">
								<view class="item" v-for="item,index in productList" :key="index" @tap="goDetails(item)">
									<image class="commodity-map" :src="item.mainPic" mode=""></image>
									<view class="title eli2">
										<image v-if="isSensitive == 1" src="http://47.111.232.251:8106/path?name=1605065043348.png" mode=""></image>
										{{item.title}}
									</view>
									<view class="card">
										<view class="single-card-free" v-if="item.isZero==1">
											<view>免单卡</view>
											<view class="card-num">{{item.costFreeCardNumber}}</view>
										</view>
										<view class="rebate" v-if="isSensitive == 1">返{{item.discountPrice}}</view>
									</view>
									<view class="price">
										<view class="present-price"><text>¥</text>{{item.actualPrice}}</view>
										<view class="original-price" v-if="isSensitive == 1">￥{{item.taobaoPrice}}</view>
									</view>
								</view>
							</view>
						<!-- </swiper-item>
					</swiper> -->
				</view>
			</scroll-view>
			<!-- 底部 -->
			<Footer></Footer>
			
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
				// height:this.$store.state.bottomHeight,//ios底部高度
				introduce:[//保障
					{name:'淘宝购物'},{name:'售后无忧'},{name:'卖贵就赔'},{name:'返利秒到'},
				],
				swiperList:[],//轮播
				pages:{
					pageNumber:1,
					pageSize:10,
				},
				articles:[],//分类
				choiceIndex:0,//分类选中颜色
				ifFixedType:false,//判断类型是否固定头部
				productList:[],//商品数据
				zoneList:null,//专区商品
				searchText:'',
				typeId:'',
				isSensitive:0,
				topNum:0,
			}
		},
		onLoad(opstion) {
			if(!this.$store.state.userToken && this.$store.state.isOne==1){
				uni.navigateTo({
					url:"../login/login"
				})
				this.$store.commit("addIsOne",2)
			}
			uni.hideHomeButton() //隐藏左上角小房子
			this.$store.commit("invitation",opstion.scene)
			index.goodsType(this)
			this.choice(this.choiceIndex,this.typeId)
			index.topThreeGoods(this)
		},
		onReachBottom(){//触底加载
			this.pages.pageNumber = this.pages.pageNumber + 1
			index.search(this)
		},
		onPageScroll(obj){
			this.topNum = obj.scrollTop
			if(obj.scrollTop > 450){//判断类型是否固定头部
				this.ifFixedType = true
			}else{
				this.ifFixedType = false
			}
		},
		onShow() {
			// this.productList = []
			// this.choice(this.choiceIndex,this.typeId)
			index.swiper(this,1)
			this.isSensitive = this.$store.state.isSensitive
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
			// 跳转去0元专区
			navigateToarea(type){
				if(type === 1 ) {
					uni.navigateTo({
						url: './zeroArea'
					})
				}
				
				if(type === 2 ) {
					uni.navigateTo({
						url: './nineArea'
					})
				}
			},
			choice(num,typeId) {//切换类型
				this.productList = []
				this.pages.pageNumber = 1
				this.pages.pageSize = 10
				this.choiceIndex = num
				this.typeId = typeId || ''
				index.search(this)
			},
			search(){//跳搜索页
				uni.navigateTo({
					url:"./search"
				})
			},
			goSwiperDetails(item){
				//轮播  openLink==1条详情    linkInfo.type==3跳指定页面
				let linkInfo = JSON.parse(item.linkInfo)
				if(item.openLink ==0){
					return
				}
				if(item.openLink ==1){
					if(linkInfo.type ==3){
						uni.setStorageSync('webViewUrl', linkInfo.url);
						uni.navigateTo({
							url:"./webView"
						})
						return
					}
					uni.navigateTo({
						url:"./details?type=1&goodsId=" + linkInfo.goodsId
					})
				}
			},
			goDetails(item){//跳详情
				// uni.setStorageSync('listItem', item);
				uni.navigateTo({
					url:"./details?goodsId=" + item.id
				})
			}
		}
	}
</script>

<style scoped>
	.main {
		padding-bottom: 108rpx;
		padding-top: 88rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}
	
	.back_top{
		position: fixed;
		right: 24rpx;
		bottom: 120rpx;
		z-index: 999;
	}
	
	.back_top image{
		width: 68rpx;
		height: 68rpx;
	}

	.top {
		position: fixed;
		width: 750rpx;
		height: 88rpx;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.search {
		height: 88rpx;
		background: #EB1C24;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search view {
		width: 624rpx;
		height: 68rpx;
		line-height: 68rpx;
		padding-left: 76rpx;
		background: #FFFFFF;
		border-radius: 36rpx;
		border: none;
		font-size: 28rpx;
		color: #C1C1C1;
	}

	.search image {
		height: 44rpx;
		width: 44rpx;
		display: block;
		position: absolute;
		top: 22rpx;
		left: 40rpx;
	}

	.content {
		/* padding: 0 24rpx; */
	}

	.introduce {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 56rpx;
		padding: 0 24rpx;
		background: #fff;
	}

	.have {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999999;
	}

	.have image {
		height: 26rpx;
		width: 26rpx;
		display: block;
		margin-right: 9rpx;
	}
	.swiper{
		padding:16rpx 24rpx;
		border-radius: 16rpx;
		height: 260rpx;
		background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
	}
	.swiper swiper-item{
		border-radius: 16rpx;
	}
	.swiper .swiper-img {
		width: 702rpx;
		height: 260rpx;
		border-radius: 16rpx;
		display: block;
	}
	.articles-type{
		display: flex;
		align-items: center;
		height: 88rpx;
		overflow: auto;
		min-width: 702rpx;
		padding: 0 24rpx;
	}
	.articles-type::-webkit-scrollbar {
		height: 0 !important;
	}
	.fixed-type{
		background: #fff;
		padding-left: 24rpx;
		position: fixed;
		top: 88rpx;
		left: 0;
	}
	.articles-type view{
		flex-shrink: 0;
		margin-right: 40rpx;
		font-size: 28rpx;
		color: #666666;
	}
	.articles-type view.on{
		font-size: 32rpx;
		font-weight: bold;
		color: #EB1C24;
	}
	.commodity{
		display: flex;
		flex-wrap: wrap;
		padding: 0 24rpx;
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
		border-radius:8rpx ;
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
		margin-right: 16rpx;
		font-size: 24rpx;
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
		border-radius: 0rpx 4rpx 4rpx 0rpx;
		background: #FDD7B5;
	}
	.rebate{
		padding: 0 13rpx;
		line-height: 32rpx;
		background: #FEF2F2;
		border-radius: 4rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #EB1C24;
		border-radius: 4rpx;
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

<style scoped lang="scss">
	.content .zero-area{
		width: 655rpx;
		height: 238rpx;
		padding: 24rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left-box{
			width: 152rpx;
			height: 232rpx;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-direction: column;
			.left-top{
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 28rpx;
				image{
					width: 120rpx;
					height: 26rpx;
				}
			}
			.left-bottom{
				width: 120rpx;
				height: 40rpx;
				background: #FF8500;
				border-radius: 24rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 40rpx;
				position: relative;
				padding: 0 10rpx;
				.btn{
					width: 48rpx;
					height: 28rpx;
					background: #FFFFFF;
					border-radius: 19rpx;
					font-size: 20rpx;
					font-weight: 500;
					color: #FF8500;
					line-height: 28rpx;
					text-align: center;
					position: absolute;
					right: 6rpx;
					top: 6rpx;
				}
			}
		}
		.zero-right{
			width: 488rpx;
			height: 212rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.right-item{
				width: 152rpx;
				height: 212rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: column;
				.item-top{
					image{
						width: 112rpx;
						height: 112rpx;
					}
				}
				.item-bottom{
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #EB1C24;
					.price-type{
						font-size: 22rpx;
					}
					.new-price{
						font-size: 36rpx;
						margin-right: 10rpx;
					}
					.old-price{
						font-size: 22rpx;
						font-weight: 400;
						color: #999999;
						text-decoration: line-through;
					}
				}
			}
		}
	}
	.content .nine-area{
		margin-top: 16rpx;
	}
</style>
