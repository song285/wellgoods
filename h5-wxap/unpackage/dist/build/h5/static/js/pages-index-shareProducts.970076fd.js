(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shareProducts"],{"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(n("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(t){if("string"===typeof t)return(0,a.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.default)(t,e):void 0}}},"097c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.mian[data-v-a2fb0ba0]{min-height:100vh;width:100vw;\n\t/* background-image: url("http://47.111.232.251:8106/path?name=1605066003869.png");\n\tbackground-position: 0 0;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%; */padding-bottom:%?20?%;background:-webkit-linear-gradient(top,#ff3a38,#fd5e03);background:linear-gradient(180deg,#ff3a38,#fd5e03)}.mian-img uni-image[data-v-a2fb0ba0]{margin:0 %?50?%;width:%?650?%;border-radius:16px}.tips[data-v-a2fb0ba0]{margin:%?20?% auto 0;text-align:center;padding:%?24?% 0;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:%?33?%;width:%?550?%;border:%?1?% dashed #eb1c24;box-shadow:0 %?1?% %?14?% 0 rgba(0,0,0,.06);border-radius:%?10?%}.top[data-v-a2fb0ba0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?88?%;padding:0 %?23?%;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;margin-bottom:%?24?%}.top uni-image[data-v-a2fb0ba0]{width:%?23?%;height:%?35?%;display:block}\n\n/* .content{\n\twidth: 550rpx;\n\tpadding:50rpx;\n\tmargin: 0 50rpx;\n\tbackground: rgba(255, 255, 255, 0.97);\n\tborder-radius: 16rpx;\n}\n.user-info{\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 47rpx;\n}\n.user-info image{\n\twidth: 80rpx;\n\theight: 80rpx;\n\tdisplay: block;\n\tmargin-right: 24rpx;\n}\n.user-name{\n\tfont-size: 24rpx;\n\tfont-family: PingFangSC-Regular, PingFang SC;\n\tfont-weight: 400;\n\tcolor: #999999;\n\tline-height: 33rpx;\n}\n.user-name .name{\n\tmargin-bottom: 8rpx;\n\tfont-size: 32rpx;\n\tfont-family: PingFangSC-Medium, PingFang SC;\n\tfont-weight: 500;\n\tcolor: #333333;\n\tline-height: 45rpx;\n}\n.commodity-map{\n\twidth: 550rpx;\n\theight: 500rpx;\n\tdisplay: block;\n}\n.describe{\n\tmargin: 24rpx 0 16rpx;\n\tfont-size: 28rpx;\n\tfont-family: PingFangSC-Regular, PingFang SC;\n\tfont-weight: 400;\n\tcolor: #333333;\n\tline-height: 40rpx;\n}\n.price{\n\tdisplay: flex;\n\talign-items: center;\n\theight: 50rpx;\n\tmargin: 0rpx 16rpx;\n}\n.present-price{\n\tfont-size: 36rpx;\n\tfont-weight: 500;\n\tcolor: #EB1C24;\n}\n.present-price text{\n\tfont-size: 22rpx;\n\tfont-family: PingFangSC-Regular, PingFang SC;\n}\n.original-price{\n\tfont-size: 22rpx;\n\tcolor: #999999;\n\tmargin-left: 16rpx;\n\ttext-decoration: line-through\n}\n.line{\n\twidth: 550rpx;\n\theight: 1rpx;\n\tbackground: #D8D8D8;\n\tmargin: 26rpx 0 32rpx;\n}\n.ewm{\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n.ewm image{\n\twidth: 136rpx;\n\theight: 136rpx;\n\tbackground: #F8F8F8;\n\tdisplay: block;\n}\n.ewm-left{\n\tfont-size: 24rpx;\n\tfont-family: PingFangSC-Regular, PingFang SC;\n\tfont-weight: 400;\n\tcolor: #333333;\n\tline-height: 33rpx;\n}\n.ewm-left .follow{\n\tmargin-top: 16rpx;\n\tfont-size: 28rpx;\n\tfont-family: PingFangSC-Medium, PingFang SC;\n\tfont-weight: 500;\n\tcolor: #333333;\n\tline-height: 40rpx;\n} */',""]),t.exports=e},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var a=s(n("6005")),i=s(n("db90")),r=s(n("06c5")),o=s(n("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()}},"2ba8":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("757d")),r=a(n("d1be")),o={data:function(){return{StatusBar:"",goodsId:"",codeImg:""}},methods:{goBack:function(){uni.navigateBack({})},preservation:function(){r.default.downloadImg(this.codeImg)}},computed:{isCodeImg:function(){if(""!=this.codeImg)return uni.hideLoading(),!0}},onLoad:function(t){uni.setNavigationBarTitle({title:this.$store.state.navigationBarTitle||"分享商品"});var e=this;this.goodsId=t.goodsId,uni.getSystemInfo({success:function(t){e.StatusBar=t.statusBarHeight}}),i.default.shareGoods(this),""==this.codeImg&&uni.showLoading({title:"加载中"})}};e.default=o},3427:function(t,e,n){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"3ccc":function(t,e,n){"use strict";var a=n("8a40"),i=n.n(a);i.a},4403:function(t,e,n){"use strict";n.r(e);var a=n("2ba8"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(n("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,a.default)(t)}},6458:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"mian"},[n("v-uni-view",{staticClass:"top",style:[{"padding-top":t.StatusBar+"px"}]},[n("v-uni-image",{attrs:{src:"http://47.111.232.251:8106/path?name=1605065637175.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),n("v-uni-view",[t._v("分享商品")]),n("v-uni-view")],1),t.isCodeImg?n("v-uni-view",{staticClass:"mian-img"},[n("v-uni-image",{staticClass:"mian-img",attrs:{src:t.codeImg,mode:"widthFix","show-menu-by-longpress":!0}})],1):t._e(),t.isCodeImg?n("v-uni-view",{staticClass:"tips"},[t._v("提示：长按图片分享给好友")]):t._e()],1)],1)},r=[]},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"757d":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909"));function r(t,e){t.$reqHttp({url:"/getH5Banner",data:{type:e,substationId:t.$store.state.userBaseinfo.substationId||""},success:function(e){t.swiperList=e.data.result}})}function o(t){t.$reqHttp({url:"/getGoodsType",data:{},success:function(e){t.articles=e.data.result}})}function s(t){t.$reqHttp({url:"/queryMyIndex",data:{userId:t.$store.state.userData.id||""},success:function(e){e.data.success&&(t.freeBillCards=e.data.result.freeBillCards)}})}function u(t){t.$reqHttp({url:"/queryIndexGoods",data:{pageNumber:t.pages.pageNumber,pageSize:t.pages.pageSize,sort:"",order:"",title:t.searchText,typeId:t.typeId,userId:t.$store.state.userData.id||"",salesOrder:t.salesOrderSort||"",priceOrder:t.priceOrderSort||"",rebateOrder:t.rebateOrderSort||""},success:function(e){e.data.success&&(t.productList=[].concat((0,i.default)(t.productList),(0,i.default)(e.data.result.records)),t.productLength=t.productList.length)}})}function d(t){t.$reqHttp({url:"/queryIndexGoods",data:{goodsId:t.goodsId,userId:t.$store.state.userData.id||""},success:function(e){e.data.success&&(t.item=e.data.result.records[0],t.swiperList=JSON.parse(e.data.result.records[0].allMainPic)||[],t.detailImg=JSON.parse(e.data.result.records[0].goodsDetail)||[],t.isCollection=JSON.parse(e.data.result.records[0].isFavorite))}})}function c(t,e){t.$reqHttp({url:"/addGoodsScanNumber",data:{id:e},method:"GET",success:function(t){}})}function l(t){t.$reqHttp({url:"/addFavorite",data:{goodsId:t.goodsId,userId:t.$store.state.userData.id||""},success:function(t){}})}function f(t){t.$reqHttp({url:"/deleteFavorite",data:{goodsId:t.goodsId,userId:t.$store.state.userData.id||""},success:function(t){}})}function g(t){t.$reqHttp({url:"/queryFavorite",data:{userId:t.$store.state.userData.id||""},success:function(e){e.data.success&&(t.list=e.data.result)}})}function p(t){t.$reqHttp({url:"/getH5Banner",data:{type:3,substationId:t.$store.state.userBaseinfo.substationId},success:function(e){e.data.success&&(t.codeImg=e.data.result)}})}function m(t){t.$reqHttp({url:"/shareGoods",data:{userId:t.$store.state.userData.id,goodsId:t.goodsId,substationId:t.$store.state.userBaseinfo.substationId},success:function(e){e.data.success&&(t.codeImg=e.data.result)}})}function b(t){t.$reqHttp({url:"/getFirstThreeZoneGoods",success:function(e){e.data.success&&(t.zoneList=e.data.result)}})}function h(t,e){t.$reqHttp({url:"/getZoneGoodsByZoneCode",data:{zoneType:e,pageVo:"",pageNumber:t.pages.pageNumber,pageSize:t.pages.pageSize,sort:"",order:""},success:function(e){e.data.success&&(t.goodsList=t.goodsList.concat(e.data.result.records))}})}function v(t,e){t.$reqHttp({url:"/checkExchange",data:{userId:t.$store.state.userData.id||"",goodsId:t.goodsId},success:function(n){n.data.success?null!=e?t.isExchange=!0:uni.navigateTo({url:"./exchange?goodsId="+t.goodsId}):t.$message(n.data.message)}})}var y={swiper:r,goodsType:o,queryMyIndex:s,search:u,swiperDetail:d,addGoodsScanNumber:c,addFavorite:l,deleteFavorite:f,queryFavorite:g,queryCustomerQrCode:p,shareGoods:m,topThreeGoods:b,getZoneAllGoods:h,checkExchange:v};e.default=y},"8a40":function(t,e,n){var a=n("097c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2aee5d9f",a,!0,{sourceMap:!1,shadowMode:!1})},ba25:function(t,e,n){"use strict";n.r(e);var a=n("6458"),i=n("4403");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("3ccc");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"a2fb0ba0",null,!1,a["a"],o);e["default"]=u.exports},d1be:function(t,e,n){"use strict";function a(t){uni.showLoading({title:"正在保存",mask:!0}),uni.downloadFile({url:t,success:function(t){200===t.statusCode&&uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"none"})},fail:function(){uni.showModal({content:"检测到您没打开获取信息功能权限，是否去设置打开？",confirmText:"确认",cancelText:"取消",success:function(t){t.confirm?uni.openSetting({success:function(t){console.log(t),uni.showToast({title:"请重新点击分享保存图片～",icon:"none"})}}):uni.showToast({title:"保存失败，请打开权限功能重试",icon:"none"})}})}}),uni.hideLoading()}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={downloadImg:a};e.default=i},db90:function(t,e,n){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a}}]);