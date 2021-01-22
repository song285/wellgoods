// 免单卡
function queryFreeBillFirstPage(_this) {
	_this.$reqHttp({
		url: '/queryFreeBillFirstPage',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.data = res.data.result
		}
	})
} 
// 首次提现领取卡
function getFirstGetCashFreeBill(_this) {
	_this.$reqHttp({
		url: '/getFirstGetCashFreeBill',
		data: {
			userId: _this.$store.state.userData.id,
			freeBillId: _this.data.freeBillCardRecordId
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.data = res.data.result
		}
	})
} 
// 分享领免单卡
function queryShareData(_this) {
	_this.$reqHttp({
		url: '/queryShareData',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.data = res.data.result
			_this.list = res.data.result.headImgs
			
		},
		complete: (res) => {
			uni.hideLoading();
		}
	})
} 
// 领取领免单卡
function receiveFreeCardByInvite(_this) {
	_this.$reqHttp({
		url: '/receiveFreeCardByInvite',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				_this.$message("领取失败")
				return
			}
			queryShareData(_this)
			_this.$message("领取成功")
		}
	})
} 
// 我的邀请
function queryMyInvite(_this) {
	_this.$reqHttp({
		url: '/queryMyInvite',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.list = res.data.result
		}
	})
} 
// 免单卡明细
function queryFreeBillCardList(_this) {
	_this.$reqHttp({
		url: '/queryFreeBillCardList',
		data: {
			userId: _this.$store.state.userData.id,
		},
		success: (res) => {
			if(!res.data.success){
				return
			}
			_this.list = res.data.result
		}
	})
} 
export default{
	queryFreeBillFirstPage,
	getFirstGetCashFreeBill,
	queryShareData,
	queryMyInvite,
	receiveFreeCardByInvite,
	queryFreeBillCardList
}