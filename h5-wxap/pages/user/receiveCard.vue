<template>
	<view>
		<view class="main">
			<image class="bg-img" src="http://47.111.232.251:8106/path?name=1605064522482.png" mode=""></image>
			<view class="receive">
				<view class="unclaimed">
					<view class="a-few">待领取 <text>{{data.toReceive }}</text> 张</view>
					<image @click="refresh" src="http://47.111.232.251:8106/path?name=1605064603302.png" mode=""></image>
				</view>
				<view class="invitation">
					<view style="position: relative;" v-for="(item,index) in List" >
						<image :src="item.img" mode=""></image>
						<view class="text-img" v-if="item.status==1">已领取</view>
						<view class="text-img" v-else>未领取</view>
					</view>
					<image v-if="list.length<=5" v-for="item in 5-list.length" src="http://47.111.232.251:8106/path?name=1605064964726.png" mode=""></image>
					<image @click="goDetail" src="http://47.111.232.251:8106/path?name=1605064571646.png" mode=""></image>
				</view>
				<view class="rule">
					<view>规则</view>
					<view>1.好友识别您分享的海报注册，才算有效。</view>
					<view>2.好友完成注册，您将获得 1 张免单卡</view>
					<view>3.获得的免单卡可兑换免单商品。</view>
				</view>
			</view>
			<view class="footer">
				<view class="share-btn" @click="share">分享给好友</view>
				<view class="receive-btn" @click="receive">领取免单卡</view>
			</view>
		</view>
	</view>
</template>

<script>
	import singleCardFree from "../../common/api/user/singleCardFree.js"
	export default {
		data() {
			return {
				data:{},
				list:[]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '分享领免单卡'
			})
			singleCardFree.queryShareData(this)
		},
		computed:{
			List:function(){
				return this.list.filter((item,index)=>index<5)
			}
		},
		methods: {
			goDetail(){
				uni.navigateTo({
					url:"./invitationDetail"
				})
			},
			receive(){
				if(this.data.toReceive>0){
					singleCardFree.receiveFreeCardByInvite(this)
				}else{
					this.$message("没有可领取的免单卡")
				}
			},
			share(){
				uni.navigateTo({
					url:"./InvitationPoster"
				})
			},
			refresh(){
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				setTimeout(()=>{
					singleCardFree.queryShareData(this)
				},1000)
			}
		}
	}
</script>

<style scoped>
	.main {
		height:calc(100vh - 108rpx);
		background: #1B1A20;
		padding-bottom: 108rpx;
	}

	.bg-img {
		width: 750rpx;
		height: 748rpx;
		display: block;
	}

	.receive {
		margin: -158rpx 24rpx 0;
		padding: 0 32rpx 32rpx;
		background: #000000;
		box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.06);
		border-radius: 16rpx;
		border: 1rpx solid #6F5F51;
	}

	.unclaimed {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88rpx;
	}

	.a-few {
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #E9C29F;
		line-height: 45rpx;
	}

	.a-few text {
		color: #EB1C24;
		margin: 0 8rpx;
	}

	.unclaimed image {
		width: 44rpx;
		height: 44rpx;
		display: block;
	}

	.invitation {
		display: flex;
		align-items: center;
		margin: 40rpx 0;
	}
	.text-img{
		position: absolute;
		top: 0;
		left: 0;
		width: 80rpx;
		line-height: 80rpx;
		color: #fff;
		background: rgba(0,0,0,.6);
		font-size: 22rpx;
		text-align: center;
	}
	.invitation image {
		width: 80rpx;
		height: 80rpx;
		display: block;
		margin-right: 32rpx;
		border-radius: 50%;
		background: #333333;
	}

	.invitation image:last-child {
		margin-right: 0;
	}

	.rule view {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #E7E7E7;
		line-height: 33rpx;
		margin-bottom: 6rpx;
	}

	.rule view:first-child {
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #E7E7E7;
		line-height: 40rpx;
		margin-bottom: 16rpx;
	}

	.footer {
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.footer view {
		width: 50%;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		line-height: 45px;
		text-align: center;
		line-height: 98rpx;
	}

	.footer .share-btn {
		color: #333333;
		background: #FDD7B5;
		box-shadow: 0px -1rpx 0px 0px #E8E8E8;
	}

	.footer .receive-btn {
		color: #FDD7B5;
		background: #333333;
	}
</style>
