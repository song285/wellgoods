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
			<view class="exchange-content">
				<view class="exchange-tips">提示</view>
				<view class="exchange-use">您还未登录，请先登录</view>
				<view class="exchange-footer">
					<view class="cancel" @tap="close">取消</view>
					<view class="determine" @tap="determine">确定</view>
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
				code:''
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
			determine(){
				var pages = getCurrentPages(); // 当前页面
				var beforePage = pages[pages.length - 1].route; // 前一个页面
				uni.navigateTo({
					url:"../login/login?path=" + beforePage + "&goodsId=" + this.goodsId
				})
				this.$store.commit("closeBindingPhone")
			},
			// exchange() {
			// 	this.isExchange = false
			// },
			// wxGetUserInfo() { //微信登录授权
			// 	uni.login({
			// 		success: (res) => {
			// 			this.code = res.code
			// 			uni.getUserInfo({
			// 				provider: 'weixin',
			// 				success: (info) => {
			// 					this.$store.commit("closeBindingPhone")
			// 					this.isExchange = true
			// 					this.info = info.userInfo
			// 					this.$message("微信登录授权成功")
			// 				},
			// 				fail: () => {
			// 					this.$store.commit("closeBindingPhone")
			// 					this.$message("微信登录授权失败")
			// 				}
			// 			})
			// 		},
			// 		fail: () => {
			// 			this.$message("手机号授权失败")
			// 		}
			// 	})
			// },
			// decryptPhoneNumber(e) { //手机号授权
			// 	let _this = this
			// 	if (e.detail.errMsg == 'getPhoneNumber:ok') {
			// 		this.$reqHttp({
			// 			url: '/getWxUserPhoneNumber',
			// 			data: {
			// 				code: this.code,
			// 				encryptedData: e.detail.encryptedData,
			// 				iv: e.detail.iv,
			// 			},
			// 			success: (data) => {
			// 				if (!data.data.success) {
			// 					this.$message("手机号授权失败")
			// 					return
			// 				}
			// 				if (data.data.result.autoLogin) {
			// 					let userData = JSON.parse(data.data.result.userData)
			// 					this.$store.commit("login", userData)
			// 					this.$message("手机号授权成功")
			// 					common.queryVersion(this)//登录完成后在调用一次获取敏感字
			// 					return
			// 				}
			// 				_this.$reqHttp({
			// 					url: '/register',
			// 					data: {
			// 						phoneNumber: data.data.result.phoneNumber,
			// 						openid: data.data.result.openid,
			// 						headImg: _this.info.avatarUrl,
			// 						nickname: _this.info.nickName,
			// 						inviteCode: _this.$store.state.invitationCode
			// 					},
			// 					success: (respens) => {
			// 						let userData = JSON.parse(respens.data.message)
			// 						this.$store.commit("login", userData)
			// 						this.$message("手机号授权成功")
			// 						common.queryVersion(this)//登录完成后在调用一次获取敏感字
			// 					}
			// 				})
			// 			}
			// 		})

			// 	} else {
			// 		this.$message("手机号授权失败")
			// 	}
			// 	this.isExchange = false
			// },
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
