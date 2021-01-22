<script>
	import common from "./common/common.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			common.queryVersion(this)
			common.autoLogin(this)
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
		   //  getMobileInfo() {
		   //    const mobileInfo = uni.getSystemInfoSync();
		   //    let BottomBlackLineHeight = ""; //iphoneX底部一条黑线，有些页面要避开
			  // let iphoneXArr = ["iPhone X", "iPhone 11", "iPhone 11 Pro Max","iPhone 12","iPhone 12 Pro Max",];
		   //    iphoneXArr.forEach(function(item) {
		   //      if (mobileInfo.model.search(item) !== -1) {
		   //        BottomBlackLineHeight = 30;
		   //      }
		   //    });
			  // this.$store.commit('getBottomHeight',BottomBlackLineHeight)
		   //  }
		  }
	}
</script>

<style>
	/*每个页面公共css */
	@import 'common/common.css';
	page{
		background-color: #f5f5f5;/* 全局背景颜色 */
	}
	
	.ios-safe-area {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

</style>
