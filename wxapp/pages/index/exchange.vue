<template>
	<view>
		<view class="mian">
			<view class="nav">
				<view class="nav-item" :class="step >=1 ? 'select' : '' ">
					<view class="step">1</view>
					<view>搜索商品</view>
				</view>
				<view class="nav-left-border" :class="step >=2 ? 'select-border' : '' "></view>
				<view class="nav-item" :class="step >=2 ? 'select' : '' ">
					<view class="step">2</view>
					<view>回答问题</view>
				</view>
				<view class="nav-right-border" :class="step >=3 ? 'select-border' : '' "></view>
				<view class="nav-item" :class="step >=3 ? 'select' : '' ">
					<view class="step">3</view>
					<view>复制订单号</view>
				</view>
			</view>

			<!-- 步骤1 -->
			<view v-if="step==1">
				<view class="method">
					<view>请{{isSensitive == 1? '前往淘宝APP' : ''}}搜索下方关键词，并找到与下方图片一致的商品。</view>
					<view class="how-to-search" @click="goHowSearch">如何搜索？</view>
				</view>
				<view class="condition">
					<view class="condition-item" v-if="isSensitive == 1">
						<view class="condition-type">购物平台</view>
						<view class="platform">
							<image class="platform-logo" src="http://47.111.232.251:8106/path?name=1605064995920.png" mode=""></image>
							<text>淘宝APP</text>
						</view>
					</view>
					<view class="condition-item">
						<view class="condition-type">搜索关键词</view>
						<view class="platform">
							<text>{{stepOneData.keyword }} </text>
							<image @click="copy(stepOneData.keyword)" class="key-word-img" src="http://47.111.232.251:8106/path?name=1605005925518.png"></image>
						</view>
					</view>
					<view class="condition-item">
						<view class="condition-type">筛选条件</view>
						<view class="">
							<view class="platform">
								<view class="screen" v-for="(item,index) in condition " :key="index">{{item}}</view>
							</view>
							<view class="platform" v-if="stepOneData.order">
								<view class="screen">搜索排序：{{stepOneData.order}}</view>
							</view>
						</view>
					</view>
					<view class="condition-item">
						<view class="condition-type">商品图</view>
						<view class="platform">
							<image class="commodity-map" :src="stepOneData.mainPic" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 步骤2 -->
			<view v-if="step==2">
				<view v-if="answer == 1">
					<view class="method">
						<view>请进入商品详情页浏览器商品后，回答下方问题，验证所找到的商品是否正确。</view>
						<view class="how-to-search" v-if="questionTwo==1" @click="titlePopup">商品标题在哪里？</text></view>
						<view class="how-to-search" v-if="questionTwo==2" @click="titlePopup">店铺名在哪里？</text></view>
					</view>
					<view class="single-choice">
						<view class="choice-title">{{questionTwo == 1 ? '1' : '2' }}<text>/2 </text>{{questionTwo == 1 ? '商品标题前2' : '店铺名的第一' }}个字是什么？</view>
						<view class="choice-item" @tap="oneChoice(index,item.flagNo)" v-for="(item,index) in choiceQuestion.titleQuestions" :key="index">
							<view>{{item.flagNo}}. {{item.question}}</view>
							<image v-if="one == index" src="http://47.111.232.251:8106/path?name=1605064356199.png" mode=""></image>
							<image v-if="one != index" src="http://47.111.232.251:8106/path?name=1605064308305.png" mode=""></image>
						</view>
					</view>
				</view>
				<view v-if="isVerification && answer == 2">
					<view class="verification-method">
						<view>从淘宝APP点击【分享】至微信，回到此页面，输入淘口令，点击验证淘口令</view>
						<view class="verification-method-img">
							<image src="http://47.111.232.251:8106/path?name=1605064406717.png" mode=""></image>
							<image src="http://47.111.232.251:8106/path?name=1605064433724.png" mode=""></image>
						</view>
					</view>
					<view class="search-password">
						<view>淘口令</view>
						<textarea type="text" v-model="taobaoWord" placeholder="请粘贴淘口令，点击验证淘口令"/>
					</view>
				</view>
			</view>
			<!-- 步骤3 -->
			<view v-if="step==3">
				<view class="method">
					<view>返回淘宝APP进行付款后，复制订单编号，回到此页面，点击提交订单</view>
					<view class="how-to-search">提示：<text>返现金额不高于商家设定的商品最低sku价，多支付部分您需要自行承担</text></view>
				</view>
				<view class="copy-order">
					<view class="copy-order-item">
						<view class="copy-order-type">付款金额</view>
						<view class="copy-order-price">¥{{stepThreeData.costAmt || stepThreeData.firstPayAmt}}</view>
					</view>
					<view class="copy-order-item">
						<view class="copy-order-type">收货后返现</view>
						<view class="copy-order-price">¥{{stepThreeData.rebateAmt}}</view>
					</view>
					<image class="copy-order-img" src="http://47.111.232.251:8106/path?name=1605064473520.png" mode=""></image>
				</view>
			</view>
			
			<popup-layer ref="popupRef" :direction="'top'">
				<view class="popup">
					<view @click="refresh">{{stepOneData.keywordResult ==1 ? '找不到商品' : '还是找不到'}}</view>
					<view @click="manualCancelOrder">不想买了</view>
					<view @click="close">取消</view>
				</view>
			</popup-layer>
			<view class="feedback-popup" v-if="feedbackPopup">
				<view class="feedback-content">
					<view class="feedback-title">提示</view>
					<view class="feedback-text">已反馈给商家，让商家更换搜索词</view>
					<view class="feedback-btn" @click="close">知道了</view>
				</view>
			</view>
			<!-- 店铺名 商品标题 弹窗 -->
			<view class="title-popup" v-if="isTitlePopup">
				<image v-if="questionTwo == 1" src="http://47.111.232.251:8106/path?name=1605261384503.png" mode=""></image>
				<image v-if="questionTwo == 2" src="http://47.111.232.251:8106/path?name=1605775254543.png" mode=""></image>
				<view @click="close">知道了</view>
			</view>
			<!-- 取消订单弹窗 -->
			<view class="exchange" v-if="isCancelOrder">
				<view class="exchange-content">
					<view class="exchange-tips">提示</view>
					<view class="exchange-use">确定取消购买？确认后订单将被取消，好好珍惜抢到的购买机会哦！</view>
					<view class="exchange-footer">
						<view class="cancel" @tap="close">取消</view>
						<view class="determine" @tap="okCance">确定</view>
					</view>
				</view>
			</view>
			<!-- 答错两次弹窗 -->
			<view class="exchange" v-if="answer == 0">
				<view class="exchange-content">
					<view class="exchange-tips">提示</view>
					<view class="exchange-use">很遗憾，又回答错误！请返回上一步，核实搜索商品是否正确。如无误，请点击“验证淘口令”进行验证</view>
					<view class="exchange-footer">
						<view class="cancel" @tap="goStepOne">上一步</view>
						<view class="determine" @tap="goVerification">验证淘口令</view>
					</view>
				</view>
			</view>
			<!-- 底部按钮 -->
			<view class="footer ios-safe-area ">
				<view class="footer-left" v-if="step==1" @click="cancelOrder">取消订单</view>
				<view class="footer-right" v-if="step==1" @click="goStepTwo">找到了</view>
				<view class="footer-left" v-if="step==2 && !isVerification" @click="goBack">上一步</view>
				<view class="footer-right" v-if="step==2 && questionTwo == 1 && !isVerification" @click="goQuestionTwo">下一题</view>
				<view class="footer-right" v-if="step==2 && questionTwo == 2 && !isVerification" @click="goStepThree">提交答案</view>
				<view class="footer-left" v-if="isVerification && answer == 2" @click="goStepOne">返回</view>
				<view class="footer-right" v-if="isVerification && answer == 2" @click="verification">验证淘口令</view>
				<view class="footer-submit" v-if="step==3" @click="goConfirmOrder">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import exchange from "../../common/api/index/exchange.js"
	import popupLayer from '../../components/popup-layer/popup-layer.vue';
	export default {
		components: {
			popupLayer
		},
		data() {
			return {
				isTitlePopup:false,//第二部提示弹窗
				step: 1, //步骤
				questionTwo: 1, //第二步 步骤
				one: -1, //默认不选
				answer:1,//1答题  0验证淘口令
				goodsId: '', //商品id
				stepOneData: {
					keyword:'',
					order:''
				}, //第一步内容
				condition: [], //筛选条件
				feedbackPopup: false, //反馈给商家弹窗
				isCancelOrder: false, //取消订单弹窗
				choiceQuestion:{},//第二步
				twoStepAnswer:'',//第二步赋值的答案
				numberOfErrors:0,//错误次数
				s: 3, //秒
				isVerification:false,//验证淘口令页
				stepThreeData:{},//第三步数据
				taobaoWord:'',//淘口令
				isAnswer:'',//步骤答题对错
				isSensitive :0,//敏感词判断
			}
		},
		onShow() {
			this.isSensitive = this.$store.state.isSensitive
		},
		onLoad(opstion) {
			if(opstion.goodsId){
				// 详情页的数据
				this.goodsId = opstion.goodsId
				exchange.createOrder(this)
			}else{
				// 订单详情带过来的数据
				let continueData = JSON.parse(opstion.continueData)
				// 步骤  1-关键字查找，2-标题，3-店铺名,4-验证通过提示，10-淘口令
				this.stepOneData = continueData//都给第一个数据对象赋值是为了赋stepOneData.orderClaimId
				if(continueData.step==2){
					this.step = 2
					this.questionTwo = 1
					this.choiceQuestion = continueData
				}
				if(continueData.step==3){
					this.step = 2
					this.questionTwo = 2
					this.choiceQuestion = continueData
				}
				if(continueData.step == 4){
					this.step = 3
					this.stepThreeData = continueData
				}
				if(continueData.step == 10){
					this.step = 2
					this.answer = 2
					this.isVerification = true
				}
			}
		},
		computed:{
		},
		methods: {
			goHowSearch(){//如何搜索？ 
				uni.navigateTo({
					url:"./howSearch"
				})
			},
			titlePopup(){
				this.isTitlePopup = true
			},
			goStepOne(){//变第一步
				this.step = 1
				this.numberOfErrors = 0
				this.one = -1//默认不选
				this.answer = 1 //隐藏错误提示弹窗
				this.isVerification = false //淘口令变false
				this.questionTwo = 1 //答题步骤变1
				this.twoStepAnswer = ''//第二步赋值的答案
			},
			goStepTwo() { //变第二步
				exchange.answerTitle(this)
				this.step = 2
			},
			goBack() {
				if (this.questionTwo == 2) { //变第二步第一题
					this.questionTwo = 1
				} else { //变第一步
					this.step = 1
					exchange.answerTitle(this)
				}
			},
			goQuestionTwo() { //变第二步第二题
				if(this.twoStepAnswer == ''){
					this.$message('请先选择')
					return
				}
				if(this.choiceQuestion.answer == this.twoStepAnswer){
					this.$message('答对了，下一题')
					this.questionTwo = 2
					this.one = -1
					this.isAnswer = 1
				}else{
					this.$message('答错了哦')
					this.one = -1
					this.twoStepAnswer = ''
					this.isAnswer = 0
					
				}
					exchange.answerTitleResult(this)
			},
			goStepThree() { //变第三步
				if(this.twoStepAnswer == ''){
					this.$message('请先选择')
					return
				}
				if(this.choiceQuestion.answer == this.twoStepAnswer){
					this.$message('答对了')
					this.step = 3
					this.isAnswer = 1
					exchange.answerShopTitleResult(this)
				}else{
					this.$message('答错了哦')
					this.one = -1
					this.twoStepAnswer = ''
					this.isAnswer = 0
					exchange.answerShopTitleResult(this)
				}
			},
			goVerification(){//验证淘口令
				this.isVerification = true
				this.answer = 2
			},
			verification(){
				if(this.taobaoWord==''){
					_this.$message("淘口令不能为空")
				}
				exchange.taobaoCheckGoods(this)
			},
			oneChoice(num,flagNo) { 
				this.one = num//选择题
				this.twoStepAnswer = flagNo//赋值第二步题答案
			},
			timeCount() {//倒计时
				--this.s;
				if (this.s < 0) {
					this.s=0;
				}
			},
			goConfirmOrder() { //去订单详情页
				uni.navigateTo({
					url: "./confirm-order?orderClaimId=" + this.stepOneData.orderClaimId
				})
			},
			copy(content) { //复制
				let _this = this
				uni.setClipboardData({
					data: content,
					success: function(res) {
						uni.getClipboardData({
							success: function(res) {
								_this.$message("已复制到剪贴板")
							}
						});
					}
				});
			},
			cancelOrder() { //取消订单弹窗
				this.$refs.popupRef.show()
			},
			close() { //关闭弹窗
				this.$refs.popupRef.close()
				this.feedbackPopup = false
				this.isCancelOrder = false
				this.isTitlePopup = false
			},
			refresh() { //刷新关键词
				this.$refs.popupRef.close()
				if (this.stepOneData.keywordResult == 0) { //等于0，没有关键字了，弹出反馈弹窗
					this.feedbackPopup = true
					return
				}
				exchange.refreshKeyword(this)
			},
			manualCancelOrder() { //取消订单弹窗
				this.$refs.popupRef.close()
				this.isCancelOrder = true
			},
			okCance() { //确认取消
				exchange.manualCancelOrder(this)
			},
			isOnechoiceQuestion(flagNo){
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

	/* 顶部 */
	.nav {
		display: flex;
		align-items: center;
		padding: 0 65rpx;
		justify-content: space-between;
		height: 129rpx;
		background: #fff;
		position: relative;
		margin-bottom: 16rpx;
	}

	.nav-item {
		font-size: 24rpx;
		color: #999999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.step {
		width: 32rpx;
		height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		border-radius: 50%;
		background: #F8F8F8;
		margin-bottom: 15rpx;
		font-size: 20rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.nav-left-border {
		width: 254rpx;
		height: 2rpx;
		background: #f8f8f8;
		position: absolute;
		left: 120rpx;
		top: 40rpx;
	}

	.nav-right-border {
		width: 254rpx;
		height: 2rpx;
		background: #f8f8f8;
		position: absolute;
		right: 115rpx;
		top: 40rpx;
	}

	.nav .select {
		color: #FF8500;
	}

	.select .step {
		background: #FF8500;
		color: #FFFFFF;
	}

	.nav .select-border {
		background: #EB1C24;
	}

	/* 步骤1 步骤2 步骤3 公共样式 */
	.method {
		margin: 0 24rpx 16rpx;
		padding: 32rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.how-to-search {
		margin-top: 24rpx;
		font-size: 24rpx;
		color: #EB1C24;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
	}

	.how-to-search text {
		color: #999999;
	}

	/* 步骤1 */
	.condition {
		padding: 0 24rpx;
		margin: 0 24rpx;
		background: #fff;
		border-radius: 16rpx;
	}

	.condition-item {
		display: flex;
		align-items: flex-start;
		padding: 26rpx 0;
	}

	.condition-item:last-child {
		padding: 0 0 26rpx 0;
	}

	.condition-type {
		width: 180rpx;
		flex-shrink: 0;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 44rpx;
	}

	.platform {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.platform .platform-logo {
		height: 28rpx;
		width: 28rpx;
		display: block;
		margin-right: 16rpx;
	}

	.platform .key-word-img {
		height: 44rpx;
		width: 44rpx;
		display: block;
		margin-left: 18rpx;
	}

	.platform .screen {
		padding: 0 24rpx;
		line-height: 48rpx;
		background: #FFF8F0;
		border-radius: 24rpx;
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FF8500;
		margin: 0 24rpx 24rpx 0;
	}

	.platform .commodity-map {
		width: 240rpx;
		height: 240rpx;
		display: block;
	}

	/* 步骤2 */
	.single-choice {
		background: #fff;
		border-radius: 16rpx;
		padding: 0 32rpx;
		margin: 0 24rpx;
	}

	.single-choice view {
		height: 88rpx;
		line-height: 88rpx;
	}

	.choice-title {
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: bold;
		color: #333333;
		line-height: 40rpx;
	}

	.choice-title text {
		color: #999999;
	}

	.choice-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.choice-item image {
		height: 44rpx;
		width: 44rpx;
		display: block;
	}
	.verification-method{
		margin: 0 24rpx;
		width: 638rpx;
		padding: 32rpx 32rpx 0;
		height: 583rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 42rpx;
	}
	.verification-method-img{
		display: flex;
		justify-content: space-between;
		padding: 40rpx 88rpx;
	}
	.verification-method-img image{
		width: 201rpx;
		height: 387rpx;
		display: block;
	}
	.search-password{
		display: flex;
		margin: 15rpx 24rpx;
		width: 638rpx;
		padding: 32rpx 32rpx 0;
		height: 226rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		align-items: flex-start;
	}
	.search-password view{
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 37rpx;
		flex-shrink: 0;
		margin-right: 25rpx;
	}
	.search-password textarea{
		padding:0 25rpx;
		width: 100%;
		height: 100%;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #C1C1C1;
		line-height: 37rpx;
	}
	/* 步骤3 */
	.copy-order {
		margin: 0 24rpx;
		padding: 0 24rpx 40rpx;
		background: #fff;
		border-radius: 16rpx;
	}

	.copy-order-item {
		display: flex;
		align-items: center;
		height: 88rpx;
	}

	.copy-order-type {
		flex-shrink: 0;
		width: 180rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.copy-order-price {
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.copy-order-img {
		width: 420rpx;
		height: 365rpx;
		display: block;
		margin-top: 24rpx;
	}

	/* 底部 */
	.footer {
		display: flex;
		align-items: center;
		line-height: 98rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footer view {
		width: 50%;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}

	.footer .footer-left {
		background: #FFFFFF;
		color: #EB1C24;
	}

	.footer .footer-right {
		background: #EB1C24;
		color: #FFFFFF;
	}

	.footer .footer-submit {
		width: 100%;
		background: #EB1C24;
		color: #FFFFFF;
	}

	/* 弹窗 */
	.popup view {
		width: 750rpx;
		height: 100rpx;
		box-shadow: 0px 1rpx 0px 0px #E8E8E8;
		text-align: center;
		line-height: 100rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.popup view:last-child {
		color: #666666;
	}

	/* 弹窗2 */
	.feedback-popup {
		position: fixed;
		background: rgba(0, 0, 0, .6);
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
	}

	.feedback-content {
		padding: 60rpx 32rpx 41rpx;
		width: 496rpx;
		background: #fff;
		border-radius: 16rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.feedback-title {
		line-height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-bottom: 24rpx;
	}

	.feedback-text {
		font-size: 26rpx;
		color: #888888;
		line-height: 37rpx;
		margin-bottom: 16rpx;
	}

	.feedback-btn {
		width: 300rpx;
		line-height: 70rpx;
		text-align: center;
		font-size: 32rpx;
		color: #FFFFFF;
		background: rgba(235, 28, 36, 1);
		border-radius: 35rpx;
		margin-top: 40rpx;
	}
	/* <!-- 店铺名 商品标题 弹窗 --> */
.title-popup{
	position: fixed;
	background: rgba(0, 0, 0, .6);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 20;
}
.title-popup image{
	width: 560rpx;
	height: 780rpx;
	display: block;
	margin-bottom: 40rpx;
}
.title-popup view{
	width: 300rpx;
	border-radius: 35rpx;
	height: 70rpx;
	background: #fff;
	text-align: center;
	font-size: 32rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #EC1B23;
	line-height: 70rpx;
}
	/* 取消购买弹窗 */
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
		z-index: 20;
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
		margin: 18rpx 24rpx 30rpx;
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
