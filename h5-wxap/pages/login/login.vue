<template>
	<view>
		<view class="main">
			<view v-if="wx">
				<view class="weixin">
					<image src="http://47.111.232.251:8106/path?name=1605944519910.png" mode=""></image>
					<view class="souquan">该程序将获取以下授权</view>
					<view class="huoqu">获取您的公开信息（昵称、头像等）</view>
					<button class="allow" type="primary" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">允许</button>
					<view class="refuse" @click="goIndex">拒绝</view>
				</view>
			</view>
			<view v-if="!wx">
				<view class="phone">
					<view class="title">欢迎来到零点好物</view>
					<button class="allow" type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">微信用户一键登录</button>
					<view class="refuse">为了您更好的体验小程序，请先登录</view>
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
				wx: true,
				path: '',
				goodsId: '',
				code: '',
			}
		},
		onLoad(opstion) {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '登录'
			})
			uni.checkSession({//判断用户session_key是否失效
				success: function(res) {//没有失效
				},
				fail: function(res) {//失效，失效调用login
					uni.setStorageSync('code','');
					this.wx = true
				}
			})
			if (this.$store.state.footerClass != 2) {//底部导航
				this.$store.commit("choiceFooter", this.$store.state.footerClass)
			}
			this.path = opstion.path//获取上页路径
			this.goodsId = opstion.goodsId//详情页id
			this.code = uni.getStorageSync('code');//获取code
			if (this.code) {//code存在走获取授权
				this.wx = false
			}
		},
		methods: {
			goIndex() {
				if (this.path == undefined) {
					uni.reLaunch({
						url: "../index/index"
					})
				}
				uni.reLaunch({
					url: "/" + this.path + "?goodsId=" + this.goodsId + '&type=' + 1
				})
			},
			wxGetUserInfo() { //微信登录授权
				uni.login({
					success: (res) => {
						this.code = res.code
						uni.setStorageSync('code', res.code);
						uni.getUserInfo({
							provider: 'weixin',
							success: (info) => {
								this.info = info.userInfo
								this.wx = false
								this.$message("微信登录授权成功")
							},
							fail: () => {
								this.$store.commit("closeBindingPhone")
								this.$message("微信登录授权失败")
							}
						})
					},
					fail: () => {
						this.$message("手机号授权失败")
					}
				})
			},
			decryptPhoneNumber(e) { //手机号授权
				let _this = this
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					this.$reqHttp({
						url: '/getWxUserPhoneNumber',
						data: {
							code: this.code,
							encryptedData: e.detail.encryptedData,
							iv: e.detail.iv,
						},
						success: (data) => {
							if (!data.data.success) {
								uni.setStorageSync('code','');
								uni.showLoading({
								    title: '加载中',
									mask:true
								});
								setTimeout(()=>{
									this.wx = true
									uni.hideLoading()
								},2000)
								return
							}
							if (data.data.result.autoLogin) {
								let userData = JSON.parse(data.data.result.userData)
								this.$store.commit("login", userData)
								this.$message("手机号授权成功")
								if (this.path == undefined) {
									uni.reLaunch({
										url: "../index/index"
									})
								} else {
									uni.reLaunch({
										url: "/" + this.path + "?goodsId=" + this.goodsId + '&type=' + 1
									})
								}
								common.queryVersion(this) //登录完成后在调用一次获取敏感字
								return
							}
							_this.$reqHttp({
								url: '/register',
								data: {
									phoneNumber: data.data.result.phoneNumber,
									openid: data.data.result.openid,
									headImg: _this.info.avatarUrl,
									nickname: _this.info.nickName,
									inviteCode: _this.$store.state.invitationCode
								},
								success: (respens) => {
									let userData = JSON.parse(respens.data.message)
									this.$store.commit("login", userData)
									this.$message("手机号授权成功")
									if (this.path == undefined) {
										uni.reLaunch({
											url: "../index/index"
										})
									} else {
										uni.reLaunch({
											url: "/" + this.path + "?goodsId=" + this.goodsId + '&type=' + 1
										})
									}
									common.queryVersion(this) //登录完成后在调用一次获取敏感字
								}
							})
						}
					})

				} else {
					uni.setStorageSync('code','');
					uni.showLoading({
					    title: '加载中',
						mask:true
					});
					setTimeout(()=>{
						this.wx = true
						uni.hideLoading()
					},2000)
					return
				}
				this.isExchange = false
			},
		}
	}
</script>

<style scoped>
	.main {
		min-height: 100vh;
		background: #fff;
	}

	.weixin {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 120rpx;
	}

	.weixin image {
		width: 150rpx;
		height: 150rpx;
		background: #EB1C24;
		border-radius: 20rpx;
	}

	.souquan {
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
		margin: 16rpx 0 60rpx;
	}

	.huoqu {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 33rpx;
		margin-bottom: 120rpx;
	}

	.allow {
		width: 480rpx;
		height: 88rpx;
		background: #EB1C24;
		border-radius: 49rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 88rpx;
		text-align: center;
	}

	.refuse {
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #999999;
		line-height: 45rpx;
		margin-top: 40rpx;
	}

	.phone {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 200rpx;
	}

	.title {
		font-size: 42rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 59rpx;
		margin-bottom: 280rpx;
	}
</style>
