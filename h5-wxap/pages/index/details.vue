<template>
	<view class="main">
		<scroll-view scroll-y="true" class="scroll-class">
			<!-- 轮播 -->
			<view class="top">
				<image :style="[{top:StatusBar + 'px'}]" class="return" src="http://47.111.232.251:8106/path?name=1605005843600.png"
				 mode="" @tap="goBack"></image>
				<swiper class="swiper" :circular="true" interval="2000" duration="500" @change="intervalChange($event)" autoplay="true">
					<swiper-item v-for="(item,index) in swiperList" :key="item">
						<image class="swiper-img" :src="item" mode=""></image>
					</swiper-item>
				</swiper>
				<view class="swiper-index" v-if="swiperList.length>0">{{swiperIndex+1}}/{{swiperList.length}}</view>
			</view>
			<!-- 标题内容 -->
			<view class="describe">
				<view class="title">
					<view class="title-name eli2">{{item.title}}</view>
					<view class="share" @click="goShare">
						<image src="http://47.111.232.251:8106/path?name=1605063631744.png" mode=""></image>
						<view>分享</view>
					</view>
				</view>
				<view class="card" v-if="item.isZero == 1">
					<view class="single-card-free">
						<view>免单卡</view>
						<view class="card-num">{{item.costFreeCardNumber}}张</view>
					</view>
				</view>
			</view>
			<!-- 利润 -->
			<view class="profit" v-if="isSensitive == 1">
				<view class="profit-item">
					<text class="profit-name-left">垫付</text>
					<view class="profit-name-right eli">¥{{item.taobaoPrice}}在淘宝APP以原价购买商品</view>
				</view>
				<view class="profit-item">
					<text class="profit-name-left">返利</text>
					<view class="profit-name-right eli">¥{{item.discountPrice}}收货后即可获得{{item.isZero == 1 ? '全额' : ''}}返现</view>
				</view>
				<view class="profit-item">
					<text class="profit-name-left">垫付0风险</text>
					<view class="profit-name-right view-details eli" @tap="showRisk">查看详情
						<image src="http://47.111.232.251:8106/path?name=1605005670058.png" mode=""></image>
					</view>
				</view>
			</view>
			<!-- 商品详情 -->
			<view class="commodity-details">
				<view>商品详情</view>
			</view>
			<view class="details">
				<image v-for="(img,index) in detailImg" :key="index" :src="img.url" mode="widthFix"></image>
			</view>
		</scroll-view>

		<!-- 底部 -->
		<view class="footer ios-safe-area ">
			<view class="footer-left">
				<view class="kefu" @tap="showService">
					<image src="http://47.111.232.251:8106/path?name=1605063672075.png" mode=""></image>
					<view>客服</view>
				</view>
				<view class="collection" @tap="collection">
					<image v-if="!isCollection" src="http://47.111.232.251:8106/path?name=1605063539729.png" mode=""></image>
					<image v-if="isCollection" src="http://47.111.232.251:8106/path?name=1605063593644.png" mode=""></image>
					<view>{{isCollection? '已' : ''}}收藏</view>
				</view>
			</view>
			<view class="exchange-btn" @tap="exchange(item.costFreeCardNumber)">立即兑换</view>
		</view>

		<!-- 风险详情弹窗 -->
		<view class="risk" v-if="isRisk">
			<view class="risk-content">
				<image src="http://47.111.232.251:8106/path?name=1605065796990.png" mode=""></image>
				<view class="risk-title">垫付金额保障</view>
				<view>当前商品在淘宝网成交，用户享受一切淘宝购物权益</view>
				<view>在未确认收货前，淘宝不会将资金转给商家，因此不必担心垫付金额后，无法收到货物及返现。</view>
				<view class="risk-btn" @tap="close">知道了</view>
			</view>
		</view>
		<!-- 客服弹窗 -->
		<view class="service" v-if="isService">
			<view class="service-content">
				<image class="service-bg" src="http://47.111.232.251:8106/path?name=1605065836325.png"></image>
				<view class="service-details">
					<view>扫一扫，联系客服</view>
					<view class="service-border"></view>
					<image :src="codeImg" mode=""  show-menu-by-longpress></image>
				</view>
				<image class="close-service" @tap="close" src="http://47.111.232.251:8106/path?name=1605065690229.png" mode=""></image>
			</view>
		</view>
		<!-- 兑换弹窗 -->
		<view class="exchange" v-if="isExchange">
			<!-- 兑换 -->
			<view class="exchange-content" v-if="freeBillCards >= item.costFreeCardNumber">
				<view class="exchange-tips">提示</view>
				<view class="exchange-use">需要消费<text>{{item.costFreeCardNumber}}</text>张免单卡，是否确认兑换？</view>
				<view class="exchange-footer">
					<view class="cancel" @tap="close">取消</view>
					<view class="determine" @tap="okExchange">确定</view>
				</view>
			</view>
			<!-- 免单卡不足 -->
			<view class="exchange-content" v-if="freeBillCards < item.costFreeCardNumber">
				<view class="exchange-tips">提示</view>
				<view class="exchange-use">抱歉，您的免单卡不足！</view>
				<view class="exchange-footer">
					<view class="cancel" @tap="close">确定</view>
					<view class="determine" @tap="getMore">获得更多</view>
				</view>
			</view>
		</view>
		<!-- 绑定手机号弹窗  -->
		<Binding></Binding>
	</view>
</template>

<script>
	import index from "../../common/api/index/index.js"
	export default {
		data() {
			return {
				userData: {},
				item: {
					title: '',
					taobaoPrice: '',
					discountPrice: '',
					costFreeCardNumber:null,
				},
				swiperList: [], //轮播
				goodsId: '', //商品id
				swiperIndex: '', //轮播索引
				StatusBar: '', //状态栏高度
				isCollection: false, //是否收藏
				isRisk: false, //风险详情弹窗
				isService: false, //客服弹窗
				isExchange: false, //兑换弹窗
				detailImg: [], //商品详情
				codeImg: '', //客服二维码
				isSensitive: 0,
				freeBillCards: '', //免单卡数量
				isSearch:false,
				isByShare:false,
				prepath:""
			}
		},
		methods: {
			goBack() { //后退
				// if(this.isSearch){
				// 	uni.navigateBack({})
				// }else{
				// 	// uni.redirectTo({
				// 	// 	url: "./index"
				// 	// })
				// }
				this.$store.state.invitedBack = false
				// if(this.isByShare){
				// 	uni.redirectTo({
				// 		url: "./index"
				// 	})
				// 	return
				// }
				// uni.navigateBack({})
				if(this.isSearch){
					uni.navigateBack({
						url:this.prepath
					})
					return
				}
				if(this.type){
					uni.reLaunch({
						url: "./index"
					})
					return
				}
				uni.navigateBack({})
			},
			intervalChange(event) { //轮播索引
				this.swiperIndex = event.detail.current
			},
			goShare() { //分享
				if (this.$store.state.autoLogin == '' || this.$store.state.autoLogin == undefined) {
					this.$store.commit("showBindingPhone")
					return
				}
				uni.navigateTo({
					url: "./shareProducts?goodsId=" + this.goodsId
				})
			},
			collection() { //是否收藏
				if (this.$store.state.autoLogin == '' || this.$store.state.autoLogin == undefined) {
					this.$store.commit("showBindingPhone")
					return
				}
				this.isCollection = !this.isCollection
				if (this.isCollection) {
					index.addFavorite(this)
				} else {
					index.deleteFavorite(this)
				}
			},
			showRisk() { //显示风险详弹窗
				this.isRisk = true
			},
			showService() { //客服弹窗
				if (this.$store.state.autoLogin == '' || this.$store.state.autoLogin == undefined) { //判断是否登录
					this.$store.commit("showBindingPhone")
					return
				}
				this.isService = true
				index.queryCustomerQrCode(this)
			},
			exchange(CardNumber) { //兑换
				if (this.$store.state.autoLogin == '' || this.$store.state.autoLogin == undefined) { //判断是否登录
					this.$store.commit("showBindingPhone")
					return
				}
				
				index.checkExchange(this,CardNumber)
				
			},
			okExchange() { //跳转兑换页

				uni.navigateTo({
					url: "./exchange?goodsId=" + this.goodsId
				})
			},
			getMore() { //获取更多免单卡
				uni.navigateTo({
					url: "../user/singleCardFree"
				})
			},
			close() { //关闭弹窗
				this.isRisk = false
				this.isService = false
				this.isExchange = false
			}
		},
		onShow() {
			this.isExchange = false
			this.isSensitive = this.$store.state.isSensitive
			this.userData = this.$store.state.userData
			if (this.$store.state.userToken) {
				index.queryMyIndex(this)
			}
		},
		onLoad(opstions) {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '详情'
			})
			let _this = this
			uni.getSystemInfo({ //获取状态栏高度
				success: function(res) {
					_this.StatusBar = res.statusBarHeight
				}
			});
			
			// 通过分享进入
			if(Object.keys(opstions).includes('data')){
				let param = JSON.parse(opstions.data);
				let array = [];
				if (param.goodsId) {
					this.isByShare = true
					this.$store.commit("invitation", param.inviteCode)
					this.goodsId = param.goodsId
					index.swiperDetail(this)
					index.addGoodsScanNumber(this, this.goodsId)
					uni.setStorageSync('goodsId', this.goodsId);
					// uni.removeStorageSync('listItem')
				}
				return
			}
			//==2从收藏和搜索页面进来的
			if(opstions.return == 2){
				this.isSearch = true
			}
			//==2从搜索页面进来的
			if(opstions.path){
				this.prepath = opstions.path
			}
			if(opstions.type == 1){
				this.type = true
			}
			// 通过id获取
			console.log(opstions)
			if (opstions.type == 1) {
				this.goodsId = opstions.goodsId
				index.swiperDetail(this)
				index.addGoodsScanNumber(this, this.goodsId)
				uni.setStorageSync('goodsId', this.goodsId);
				return
			}
			let listItem = uni.getStorageSync('listItem');
			if (listItem) {
				this.item = listItem
				this.goodsId = listItem.id
				this.isCollection = listItem.isFavorite
				this.detailImg = JSON.parse(listItem.goodsDetail)
				this.swiperList = JSON.parse(listItem.allMainPic)
				index.addGoodsScanNumber(this, this.goodsId)
				uni.setStorageSync('goodsId', this.goodsId);
				console.log(this.goodsId,"id")
				return
			}
		},
		onUnload(){
			uni.removeStorageSync('listItem');
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
		max-height: calc(100vh - 50px);
	}
	.main {
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		padding-bottom: 108rpx;
	}

	.top {
		position: relative;
	}

	.top,
	.swiper,
	.swiper-img {
		width: 750rpx;
		height: 650rpx;
	}

	.return {
		top: var(--status-bar-height);
		position: fixed;
		left: 0rpx;
		bottom: 549rpx;
		width: 20rpx;
		height: 36rpx;
		z-index: 10;
		padding: 28rpx;
	}

	.swiper-index {
		position: absolute;
		bottom: 24rpx;
		right: 24rpx;
		padding: 0 24rpx;
		line-height: 44rpx;
		background: rgba(0, 0, 0, .29);
		border-radius: 22rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}

	.describe {
		background: #fff;
		padding: 23rpx 32rpx 40rpx 24rpx;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title view {
		flex-shrink: 0;
	}

	.title-name {
		width: 610rpx;
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
		font-family: PingFangSC-Medium, PingFang SC;
	}

	.share {
		font-size: 24rpx;
		color: #666666;
	}

	.share image {
		width: 44rpx;
		height: 44rpx;
		display: block;
		margin-bottom: 8rpx;
	}

	.card {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}

	.single-card-free {
		display: flex;
		align-items: center;
		height: 48rpx;
		line-height: 48rpx;
		font-weight: 500;
		font-size: 24rpx;
	}

	.single-card-free view {
		padding: 0 16rpx;
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

	.rebate {
		padding: 0 13rpx;
		height: 48rpx;
		background: #FEF2F2;
		border-radius: 4rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #EB1C24;
		margin-left: 16rpx;
	}

	.profit {
		padding: 24rpx;
		background: #fff;
		margin-top: 16rpx;
	}

	.profit-item {
		display: flex;
		align-items: center;
		margin-top: 16rpx;
	}

	.profit-item:first-child {
		margin-top: 0;
	}

	.profit-name-left {
		padding: 0 16rpx;
		line-height: 36rpx;
		background: #FEF2F2;
		border-radius: 4rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #EB1C24;
		margin-right: 16rpx;
	}

	.profit-name-right {
		font-size: 24rpx;
		color: #666666;
		line-height: 36rpx;
	}

	.view-details {
		display: flex;
		align-items: center;
		color: #999999;
	}

	.view-details image {
		width: 30rpx;
		height: 30rpx;
		display: block;
		margin-left: 8rpx;
	}

	.commodity-details {
		margin-top: 16rpx;
		height: 88rpx;
		background: #FFFFFF;
		padding: 0 32rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 88rpx;
	}

	.details image {
		width: 100%;
		display: block;
	}

	/* 底部 */
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px -1rpx 0px 0px #E8E8E8;
		display: flex;
		align-items: center;
		height: 98rpx;
		adding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.footer-left {
		display: flex;
	}

	.footer-left view {
		flex-shrink: 0;
		height: 100%;
		width: 146rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		line-height: 33rpx;
		font-size: 24rpx;
		color: #666666;
	}

	.footer-left view image {
		height: 44rpx;
		width: 44rpx;
		display: block;
		margin-bottom: 1rpx;
	}

	.exchange-btn {
		width: 458rpx;
		height: 100%;
		flex-shrink: 0;
		background: #EB1C24;
		line-height: 98rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}

	/* 风险详情弹窗 */
	.risk {
		position: fixed;
		background: rgba(0, 0, 0, .6);
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.risk-content {
		padding: 60rpx 32rpx 41rpx;
		width: 496rpx;
		background: #fff;
		border-radius: 16rpx;
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.risk-content image {
		width: 180rpx;
		height: 180rpx;
		display: block;
		margin-bottom: 32rpx;
	}

	.risk-content view {
		font-size: 26rpx;
		color: #888888;
		line-height: 37rpx;
		margin-bottom: 16rpx;
	}

	.risk-content .risk-title {
		line-height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-bottom: 24rpx;
	}

	.risk-content .risk-btn {
		width: 300rpx;
		line-height: 70rpx;
		text-align: center;
		font-size: 32rpx;
		color: #FFFFFF;
		background: rgba(235, 28, 36, 1);
		border-radius: 35rpx;
		margin-top: 40rpx;
	}

	/* 客服弹窗 */
	.service {
		position: fixed;
		background: rgba(0, 0, 0, .6);
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.service-content {
		position: relative;
	}

	.service-content .service-bg {
		width: 560rpx;
		height: 631rpx;
	}

	.close-service {
		position: absolute;
		display: block;
		right: 24rpx;
		top: 24rpx;
		width: 44rpx;
		height: 44rpx;
		z-index: 10;
	}

	.service-details {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		width: 100%;
		padding-top: 68rpx;
	}

	.service-border {
		width: 480rpx;
		height: 1rpx;
		background: #E8E8E8;
		margin: 40rpx 0 32rpx;
	}

	.service-details image {
		width: 400rpx;
		height: 400rpx;
		display: block;
	}

	/* 兑换弹窗 */
	.exchange {
		position: fixed;
		background: rgba(0, 0, 0, .6);
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.exchange-content {
		background: #fff;
		border-radius: 16rpx;
		width: 560rpx;
		text-align: center;
		padding-top: 50rpx;
	}

	.exchange-tips {
		font-size: 36rpx;
		color: #333333;
		text-align: center;
	}

	.exchange-use {
		font-size: 30rpx;
		color: #666666;
		margin: 18rpx 0 30rpx;
	}

	.exchange-use text {
		color: #EB1C24;
	}

	.exchange-footer {
		display: flex;
	}

	.exchange-footer view {
		width: 50%;
		line-height: 100rpx;
		font-size: 36rpx;
		border-top: 1rpx solid #e5e5e5;
	}

	.exchange-footer .cancel {
		border-right: 1rpx solid #e5e5e5;
		color: #999999;
	}

	.exchange-footer .determine {
		color: #EB1C24;
	}
</style>
