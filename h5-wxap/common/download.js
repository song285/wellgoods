function downloadImg(url){
	uni.showLoading({
		title:'正在保存',
		mask:true
	})
	uni.downloadFile({
		url: url,
		success: (res) => {
			if (res.statusCode === 200) {
				uni.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: function() {
						uni.showToast({
							title: "保存成功",
							icon: "none"
						});
					},
					fail: function() {//拒绝打开相册后的回调
						uni.showModal({
							content: '检测到您没打开获取信息功能权限，是否去设置打开？',
							confirmText: "确认",
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {
											console.log(res);
											uni.showToast({
												title: "请重新点击分享保存图片～",
												icon: "none"
											});
										}
									})
								} else {
									uni.showToast({
										title: "保存失败，请打开权限功能重试",
										icon: "none"
									});
								}
							}
						})
					}
				});
			}
			uni.hideLoading()
		},
	});
}
export default{
	downloadImg
}