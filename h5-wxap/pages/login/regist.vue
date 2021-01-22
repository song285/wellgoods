<template>
	<view class="main">
		<view class="login-box">
			<view class="login-title">您好,<br />欢迎来到{{ title }}</view>
			<view class="login-phone">
				<input type="text" v-model="userPhone" maxlength="11" placeholder="请输入手机号" placeholder-class="place-class"/>
				<image @click="userPhone = ''" src="https://staticresource.haichennux.net/path?name=1608198582007.png" mode=""></image>
			</view>
			<view class="login-code">
				<input type="text" v-model="userCode" maxlength="6" placeholder="请输入验证码" placeholder-class="place-class"/>
				<label class="phone-code"
					:class="{'phone-coding':isCoding}" 
					@click="getPhoneCode">
					{{ isCoding ? codingText + '秒后重发' : '获取验证码' }}
				</label>
			</view>
			<view class="login-btn" @click="onRegister" :class="{'btn-active':userPhone.length && userCode}">
				注册
			</view>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				showLogin:false,
				isCoding:false, //是否正在获取验证码
				codingText:60,
				userPhone:'',
				userCode:'',
				
				timer:null
			};
		},
		computed:{
			title(){
				return this.$store.state.navigationBarTitle || 'XXXX'
			}
		},
		methods:{
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
				common.phoneRegister(this,1)
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF
	}
</style>

<style lang="scss" scoped>
	.login-box {
		padding: 80rpx 60rpx;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		// position: absolute;
		// top: 50%;
		// left:50%;
		// transform: translate(-50%,-50%);
		// padding: 60rpx 40rpx;
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
			margin-bottom: 100rpx;
			font-weight: bold;
		}
		.login-phone,.login-code {
			padding: 12rpx;
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
				bottom: 10rpx;
				right: 0;
			}
		}
		.login-code {
			margin-top: 40rpx;
			position: relative;
			.phone-code {
				position: absolute;
				right: 0;
				top: 0;
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
			height: 88rpx;
			background-color: #F3777C;
			opacity: .99;
			border-radius: 35px;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
			font-size: 32rpx;
			margin-top: 100rpx;
		}
		
		.btn-active {
			background-color: #EB1C24;
		}
	}
	
	.place-class {
		color: #C1C1C1;
	}
</style>
