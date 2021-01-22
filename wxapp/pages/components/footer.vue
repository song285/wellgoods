<template name="footer">
	<view class="footer-view ios-safe-area ">
		<view class="footer-bar">
			<view class="index" :class="addClass ==1 ? 'on' :''" @tap="choice(1)">首页</view>
			<view class="knowledge-base" :class="addClass ==2 ? 'on' :''" @tap="choice(2)">收藏</view>
			<view class="my" :class="addClass ==3 ? 'on' :''" @tap="choice(3)">我的</view>
		</view>
		<!-- 绑定手机号弹窗  -->
		<Binding></Binding>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addClass: this.$store.state.footerClass,
			}
		},
		mounted() {
		},
		methods: {
			choice(num) {
				if (num == 2) { //没登陆弹出授权
					if (this.$store.state.userToken == '' || this.$store.state.userToken == undefined) {
						this.$store.commit("showBindingPhone")
						return
					}
				}
				this.$store.commit("choiceFooter", num)
				if (num == 1) {
					uni.redirectTo({
						url: '/pages/index/index'
					})
				}
				if (num == 2) {
					uni.redirectTo({
						url: '/pages/collection/collection'
					})
				}
				if (num == 3) {
					uni.redirectTo({
						url: '/pages/user/index'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.footer-view {
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		box-shadow: 0px -1px 0px 0px #E8E8E8;
	}

	.footer-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 98rpx;
		width: 100vw;
		background: #FFFFFF;
	}

	.footer-bar>view {
		padding-top: 59rpx;
		height: 39rpx;
		width: 33.3%;
		text-align: center;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #656565;
		background-repeat: no-repeat;
	}

	.footer-bar .index {
		background-image: url('http://47.111.232.251:8106/path?name=1605005065318.png');
		background-position: 98rpx 9rpx;
		background-size: 54rpx 54rpx;
	}

	.footer-bar .index.on {
		background-image: url('http://47.111.232.251:8106/path?name=1605005006507.png');
		color: #EB1C24;
	}

	.footer-bar .knowledge-base {
		background-image: url('http://47.111.232.251:8106/path?name=1605066034426.png');
		background-position: 99rpx 9rpx;
		background-size: 54rpx 54rpx;
	}

	.footer-bar .knowledge-base.on {
		background-image: url('http://47.111.232.251:8106/path?name=1605066071256.png');
		color: #EB1C24;
	}


	.footer-bar .my {
		background-image: url("http://47.111.232.251:8106/path?name=1605066145589.png");
		background-position: 99rpx 9rpx;
		background-size: 54rpx 54rpx;
	}

	.footer-bar .my.on {
		background-image: url("http://47.111.232.251:8106/path?name=1605066379753.png");
		color: #EB1C24;
	}
</style>
