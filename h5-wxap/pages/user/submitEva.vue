<template>
	<view>
		<!-- 商品 -->
		<view class="goods-box">
			<view class="goods-inner">
				<view class="goods-img">
					<image :src="evaData.mainPic" mode=""></image>
				</view>
				<view class="goods-cont">
					<view class="goods-title eli2">{{ evaData.title }}</view>
					<view class="goods-state">{{ evaData.rebateStatus == 0 ? '未返利' : '已返利' }}</view>
				</view>
				<view class="goods-card">
					<view class="free-card">免单卡X{{ evaData.freeCardNumber }}</view>
					<view class="reward">评价奖励</view>
				</view>
			</view>
			<view class="order-num">订单编号：{{ evaData.orderNo }}</view>
		</view>
		<view class="bg-color"></view>
		<!-- 评价 -->
		<view class="evaluate-box">
			<view class="evaTitle">
				提交评价要求
			</view>
			<view class="font-eva">
				<text class="name">1、评价文字</text>
				<text class="evanum">{{ evaData.textRequire }}</text> 
				<view class="evasug" v-if="evaData.textAdvice">建议：{{ evaData.textAdvice }}</view>
			</view>
			<view class="img-eva" v-if="evaData.picRequire == '晒图'">
				<text class="name">2、晒图要求</text>
				<text class="evanum">{{ evaData.needPicNumber }}以上商品图</text>
				<view class="evasug" v-if="evaData.picAdvice">建议：{{ evaData.picAdvice }}</view>
			</view>
			<view class="video-eva" v-if="evaData.videoRequire == '视频'">
				<text class="name">3、视频要求</text>
				<text class="evanum">5秒以上视频</text>
				<view class="evasug" v-if="evaData.videoAdvice">建议：{{ evaData.videoAdvice }}</view>
			</view>
		</view>
		<view class="bg-color"></view>
		<!-- 上传文件 -->
		<view class="upload-img">
			<view class="upload-box" @click="uploadSrc">
				<view class="upload">
					<image class="add" v-if="!uploadData" src="https://staticresource.haichennux.net/path?name=1608198558710.png" mode=""></image>
					<image class="selected" v-if="uploadData" :src="uploadData" mode=""></image>
					<view class="close" v-if="isUpload" @click.stop="closePic">
						<image src="https://staticresource.haichennux.net/path?name=1608198582007.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 提交按钮 -->
		<view class="submit-btn" @click="submitEva">提交</view>
		
		<!-- 弹窗 -->
		<view class="eva-pupop" v-if="showPupop">
			<view class="pupop">
				<image class="bgimg" src="https://staticresource.haichennux.net/path?name=1608524278921.png" mode=""></image>
				<view class="btomimg">
					<image src="https://staticresource.haichennux.net/path?name=1608522536338.png" mode="aspectFit"></image>
					<view class="pupop-tips">来晚了一步，评价奖励已经被抢完了</view>
					<view class="pupop-btn" @click="showPupop = false">知道了</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import user from "../../common/api/user/user.js"
	export default {
		data() {
			return {
				isUpload:false,
				showPupop:false,
				order:'',
				evaData:'',
				uploadData:''
			};
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title:this.$store.state.navigationBarTitle || '提交评价'
			})
			this.order = JSON.parse(e.item)
			user.getEvaluateForFreeCard(this)
		},
		methods:{
			//上传图片
			uploadSrc(){
				let _this = this
				uni.chooseImage({
					count: 1, //可选择数量，默认9
					sizeType: ['compressed'], //只能上传压缩图
					sourceType: ['album', 'camera'], //从相册选择或从使用相机
					success: (chooseImageRes) => {
						if(chooseImageRes.tempFiles[0].size > 5*1024*1024) {
							_this.$message('图片不能大于5MB')
							return
						}
						let filePath = chooseImageRes.tempFilePaths[0];
						
						console.log(filePath)
						
						uni.uploadFile({
							url: _this.$uploadIMGurl,
							filePath: filePath,
							name: 'file',
							header:{
								'content-type':'multipart/form-data'
							},
							success: (res) => {
								var data = JSON.parse(JSON.parse(res.data).message)
								_this.uploadData = data.content
								_this.isUpload = true
							}
						});
					}
				});
			},
			// 删除图片
			closePic(){
				this.isUpload = false
				this.uploadData = ''
			},
			// 提交评价
			submitEva(){
				if(!this.uploadData){
					this.$message("请上传图片")
					return
				}
				
				user.submitEva(this)
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
</style>
<style lang="scss">
	.goods-box {
		padding: 24rpx;
		background-color: #FFFFFF;
		.goods-inner {
			display: flex;
			justify-content: space-between;
			.goods-img image {
				width: 160rpx;
				height: 160rpx;
			}
			.goods-cont {
				margin-left: 16rpx;
				margin-right: 60rpx;
				.goods-title {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 500;
					color: #222222;
				}
				.goods-state {
					font-size: 24rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 600;
					color: #999999;
					margin-top: 16rpx;
				}
			}
			.goods-card {
				width: 610rpx;
				color: #EB1C24;
				text-align: right;
				.free-card {
					font-size: 32rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 600;
				}
				.reward {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 500;
				}
			}
		}
		.order-num {
			padding-top: 16rpx;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
		}
	}
	.bg-color {
		height: 16rpx;
		background-color: #F5F5F5;
	}
	.evaluate-box {
		padding: 30rpx 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-size: 28rpx;
		background-color: #FFFFFF;
		.evaTitle {
			font-size: 30rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 600;
			color: #333333;
			margin-bottom: 44rpx;
		}
		.font-eva {
			color: #333333;
		}
		.img-eva {
			margin: 40rpx 0;
		}
		.font-eva,.img-eva,.video-eva {
			font-weight: 600;
			.name {
				margin-right: 32rpx;
			}
			.evanum {
				color: #EB1C24;
				font-size: 22rpx;
				font-weight: 500;
				border: 1rpx solid #eb1c24;
				padding: 3rpx 10rpx;
			}
			.evasug {
				color: #666666;
				font-size: 26rpx;
				font-weight: 500;
				margin-top: 24rpx;
			}
		}
		
	}
	.upload-box {
		background-color: #FFFFFF;
		padding: 24rpx;
		.upload {
			width: 160rpx;
			height: 160rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			border: 1px solid #E8E8E8;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.add {
				width: 44rpx;
				height: 44rpx;
			}
			.close {
				position: absolute;
				right: -20rpx;
				top: -20rpx;
				image {
					width: 44rpx;
					height: 44rpx;
				}
			}
			.selected {
				width: 160rpx;
				height: 160rpx;
				border-radius: 8rpx;
			}
		}
		
	}
	.submit-btn {
		width: 100%;
		height: 98rpx;
		background: #EB1C24;
		position: fixed;
		bottom: 0;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 98rpx;
		text-align: center;
	}
	.eva-pupop {
		background: rgba($color: #000000, $alpha: .5);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.pupop {
			width: 560rpx;
			height: 665rpx;
			position: relative;
			.bgimg {
				width: 560rpx;
				height: 665rpx;
			}
			.btomimg {
				width: 560rpx;
				height: 303rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 2;
				image {
					width: 560rpx;
					height: 303rpx;
				}
				.pupop-tips {
					left: 40rpx;
					top: 111rpx;
					color: #666666;
					font-size: 30rpx;
					font-weight: 500;
					text-align: center;
					position: absolute;
					font-family: PingFangSC-Medium, PingFang SC;
				}
				.pupop-btn {
					top: 191rpx;
					left: 130rpx;
					width: 300rpx;
					height: 70rpx;
					color: #FFFFFF;
					margin: 0 auto;
					font-size: 32rpx;
					position: absolute;
					text-align: center;
					line-height: 70rpx;
					font-weight: normal;
					border-radius: 50rpx;
					font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
					background-image: linear-gradient(to right,#FF8500,#EB1C24);
				}
			}
		}
	}
	.upload-img {
		display: flex;
		justify-content: flex-start;
	}
</style>
