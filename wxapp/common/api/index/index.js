// 首页轮播
function swiper(_this,type) {
	_this.$reqHttp({
		url: '/getBanner',
		data: {
			type:type
		},
		success: (res) => {
			_this.swiperList = res.data.result
		}
	})
} 

// 商品类别
function goodsType(_this) {
	_this.$reqHttp({
		url: '/getGoodsType',
		data: {},
		success: (res) => {
			if(res.data.success){
				_this.articles = res.data.result
				_this.articles.unshift({
					typeId:'',
					name:'今日热门'
				})
			}
		}
	})
}
// 免单卡数量
function queryMyIndex(_this) {
	_this.$reqHttp({
		url: '/queryMyIndex',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			_this.freeBillCards = res.data.result.freeBillCards
		}
	})
} 
//搜索 分类搜索列表   列表自带详情数据  按类型获取 opstions.type==2
function search(_this) {
	_this.$reqHttp({
		url: '/queryIndexGoods',
		data: {
			pageNumber: _this.pages.pageNumber,
			pageSize: _this.pages.pageSize,
			sort: '',
			order: '',
			title: _this.searchText,
			typeId: _this.typeId,
			userId: _this.$store.state.userData.id || '',
			salesOrder:_this.salesOrderSort || '',
			priceOrder:_this.priceOrderSort || '',
			rebateOrder:_this.rebateOrderSort || ''
		},
		success: (res) => {
			_this.productList = [..._this.productList, ...res.data.result.records]
			_this.productLength = _this.productList.length
		}
	})
}

// 列表详情数据  ||  传商品id获取详情  按商品id获取 opstions.type==1
function swiperDetail(_this) {
	_this.$reqHttp({
		url: '/queryIndexGoods',
		data: {
			goodsId: _this.goodsId,
			userId: _this.$store.state.userData.id || ''
		},
		success: (res) => {
			_this.item = res.data.result.records[0]
			_this.swiperList = JSON.parse(res.data.result.records[0].allMainPic)
			_this.detailImg = JSON.parse(res.data.result.records[0].goodsDetail)
			_this.isCollection = JSON.parse(res.data.result.records[0].isFavorite)
		}
	})
}

// 增加商品浏览数
function addGoodsScanNumber(_this, id) {
	_this.$reqHttp({
		url: '/addGoodsScanNumber',
		data: {
			id: id
		},
		method: "GET",
		success: (res) => {}
	})
}

// 收藏
function addFavorite(_this) {
	_this.$reqHttp({
		url: '/addFavorite',
		data: {
			goodsId: _this.goodsId,
			userId: _this.$store.state.userData.id || ''
		},
		success: (res) => {}
	})
}
// 取消收藏
function deleteFavorite(_this) {
	_this.$reqHttp({
		url: '/deleteFavorite',
		data: {
			goodsId: _this.goodsId,
			userId: _this.$store.state.userData.id || ''
		},
		success: (res) => {}
	})
}

//收藏列表
function queryFavorite(_this) {
	_this.$reqHttp({
		url: '/queryFavorite',
		data: {
			userId: _this.$store.state.userData.id || ''
		},
		success: (res) => {
			_this.list = res.data.result
		}
	})
}

//获取客服二维码
function queryCustomerQrCode(_this) {
	_this.$reqHttp({
		url: '/queryCustomerQrCode',
		data: {},
		success: (res) => {
			_this.codeImg = res.data.result
		}
	})
}
// 分享
function shareGoods(_this) {
	_this.$reqHttp({
		url: '/shareGoods',
		data: {
			userId: _this.$store.state.userData.id,
			goodsId: _this.goodsId,
		},
		success: (res) => {
			_this.codeImg = res.data.result
		}
	})
}

// 获取专区前三的商品
function topThreeGoods(_this) {
	_this.$reqHttp({
		url: '/getFirstThreeZoneGoods',
		success: (res) => {
			_this.zoneList = res.data.result
		}
	})
}

//获取专区所有商品
function getZoneAllGoods(_this,type) {
	_this.$reqHttp({
		url: '/getZoneGoodsByZoneCode',
		data:{
			zoneType:type,
			pageVo:'',
			pageNumber:_this.pages.pageNumber,
			pageSize:_this.pages.pageSize,
			sort:'',
			order:''
		},
		success: (res) => {
			_this.goodsList = _this.goodsList.concat(res.data.result.records);
		}
	}) 
}

// 验证是否可以兑换
function checkExchange(_this,CardNumber){
	_this.$reqHttp({
		url: '/checkExchange',
		data:{
			userId: _this.$store.state.userData.id || '',
			goodsId:_this.goodsId
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message(res.data.message)
				return
			}
			if (CardNumber == null) { //判断需不需要免单卡
				uni.navigateTo({
					url: "./exchange?goodsId=" + _this.goodsId
				})
				return
			}
			_this.isExchange = true
		}
	})
}

export default {
	swiper,
	goodsType,
	queryMyIndex,
	search,
	swiperDetail,
	addGoodsScanNumber,
	addFavorite,
	deleteFavorite,
	queryFavorite,
	queryCustomerQrCode,
	shareGoods,
	topThreeGoods,
	getZoneAllGoods,
	checkExchange
}
