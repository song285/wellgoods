<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad(opstion) {
			this.url = uni.getStorageSync('webViewUrl');
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
