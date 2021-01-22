<template>
	<view class="">
		<!-- 绑定手机号弹窗 -->
		<!-- <view class="binding" v-if="loadingShow">
			<view class="binding-popup">
				<image class="binding-img" src="http://47.111.232.251:8106/path?name=1605065740421.png" mode=""></image>
				<view>您还未绑定手机号，请先绑定</view>
				<view class="binding-btn">
					<view class="cancel-binding" @click="close">取消</view>
					<button type="primary" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">立即绑定</button>
				</view>
			</view>
		</view>
		<view class="exchange" v-if="isExchange">
			<view class="exchange-content">
				<view class="exchange-tips">授权提示</view>
				<view class="exchange-use">为了您的账户安全，需要授权手机号码才能完成登录</view>
				<view class="exchange-footer">
					<view class="cancel" @tap="exchange">取消</view>
					<button class="determine" type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">确定</button>
				</view>
			</view>
		</view> -->
		<view class="exchange" v-if="loadingShow">
			<!-- 登录框 -->
			<view class="login-box-overlay">
				<view class="login-box">
					<view class="login-title">注册零点好物</view>
					<view class="login-phone">
						<input type="text" v-model="userPhone" placeholder="请输入手机号" placeholder-class="place-class"/>
						<image @click="userPhone = ''" src="https://staticresource.haichennux.net/path?name=1608198582007.png" mode=""></image>
					</view>
					<view class="login-code">
						<input type="text" v-model="userCode" placeholder="请输入验证码" placeholder-class="place-class"/>
						<label class="phone-code"
							:class="{'phone-coding':isCoding}" 
							@click="getPhoneCode">
							{{ isCoding ? codingText + '秒后重发' : '获取验证码' }}
						</label>
					</view>
					<view class="login-btn" @click="onRegister" :class="{'btn-active':userPhone}">
						注册
					</view>
					<image @click="close" class="closeicon" src="https://staticresource.haichennux.net/path?name=1610453927320.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				isExchange: false,
				info: {},
				code:'',
				
				showLogin:false,
				isCoding:false, //是否正在获取验证码
				codingText:60,
				userPhone:'',
				userCode:'',
				
				timer:null,
			}
		},
		computed: {
			loadingShow() {
				return this.$store.state.bindingPhone;
			},
		},
		mounted() {
			this.goodsId  = uni.getStorageSync('goodsId')
		},
		methods: {
			close() {
				this.$store.commit("closeBindingPhone")
			},
			// determine(){
			// 	var pages = getCurrentPages(); // 当前页面
			// 	var beforePage = pages[pages.length - 1].route; // 前一个页面
			// 	uni.navigateTo({
			// 		url:"../login/login?path=" + beforePage + "&goodsId=" + this.goodsId
			// 	})
			// 	this.$store.commit("closeBindingPhone")
			// },
			// 获取验证码
			getPhoneCode(){
				if(!this.userPhone){
					this.$message("请填写手机号")
					return
				}
				
				let isPhone = this.phoneRule.test(this.userPhone)
				
				if(!isPhone) {
					this.$message("请填写正确的手机号")
					return
				}
				
				if(this.isCoding) {
					return
				}
				
				this.codingText = 60
				this.timer = setInterval(() => {
					this.isCoding = true
					if(this.codingText <= 0) {
						clearInterval(this.timer)
						this.isCoding = false
					}
					this.codingText--
				},1000)
				common.getSMScode(this)
			},
			
			// 注册
			onRegister(){
				if(!this.userPhone || !this.userCode) {
					return
				}
				if(!this.userPhone){
					this.$message("请填写手机号")
					return
				}
				if(!this.userCode){
					this.$message("请填写验证码")
					return
				}
				common.phoneRegister(this,2)
			}
		}
	}
</script>

<style scoped>
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
		margin: 18rpx 24rpx 30rpx;
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
		width: 50%;
		line-height: 100rpx;
		font-size: 36rpx;
		border-top: 1rpx solid #e5e5e5;
		border-left: none;
		border-right: none;
		border-bottom: none;
		background: #fff;
	}

	/* b绑定弹窗 */
	.binding {
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

	.binding-popup {
		padding: 80rpx 40rpx 40rpx;
		background: #FFFFFF;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 45rpx;
	}

	.binding-img {
		width: 350rpx;
		height: 208rpx;
		display: block;
		margin-bottom: 60rpx;
	}

	.binding-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 65rpx;
	}

	.binding-btn view {
		line-height: 70rpx;
		width: 228rpx;
		border-radius: 35rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		background: #EC1F27;
	}

	.binding-btn button {
		line-height: 70rpx;
		width: 228rpx;
		border-radius: 35rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		background: #EC1F27;
	}

	.binding-btn .cancel-binding {
		background: #F7F7F7;
		margin-right: 24rpx;
		color: #666666;
	}
</style>

<style scoped lang="scss">
	.login-box-overlay {
		position:fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: .6);
		overflow: hidden;
		z-index: 999999;
		.login-box {
			width: 520rpx;
			height: 442rpx;
			border-radius: 16rpx;
			background-color: #FFFFFF;
			position: absolute;
			top: 50%;
			left:50%;
			transform: translate(-50%,-50%);
			padding: 60rpx 40rpx;
			.closeicon {
				width: 60rpx;
				height: 60rpx;
				position: relative;
				bottom: -120rpx;
				left: 44%;
			}
			.login-title {
				font-size: 42rpx;
				color: #333333;
				letter-spacing: 0;
				margin-bottom: 60rpx;
				font-weight: bold;
			}
			.login-phone,.login-code {
				padding-bottom: 16rpx;
				border-bottom: .5px solid #E8E8E8;
				input {
					font-size: 32rpx;
				}
			}
			.login-phone {
				position: relative;
				image {
					width: 44rpx;
					height: 44rpx;
					position: absolute;
					top: 0;
					right: 0;
				}
			}
			.login-code {
				margin-top: 40rpx;
				position: relative;
				.phone-code {
					position: absolute;
					right: 0;
					top: -6rpx;
					padding: 9rpx 24rpx;
					border: .5px solid #EB1C24;
					border-radius: 28rpx;
					font-size: 26rpx;
					color: #EB1C24;
					letter-spacing: 0;
					text-align: center;
				}
				
				.phone-coding {
					border-color: #E8E8E8 !important;
					color: #C1C1C1 !important;
				}
			}
			.login-btn {
				width: 100%;
				height: 70rpx;
				background-color: #F3777C;
				opacity: .99;
				border-radius: 35px;
				color: #FFFFFF;
				text-align: center;
				line-height: 70rpx;
				font-size: 32rpx;
				margin-top: 100rpx;
			}
			
			.btn-active {
				background-color: #EB1C24;
			}
		}
	}
	
	.place-class {
		color: #C1C1C1;
	}
</style>