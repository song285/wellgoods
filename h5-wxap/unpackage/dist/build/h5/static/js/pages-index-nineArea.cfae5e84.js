(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-nineArea"],{"06c5":function(e,t,a){"use strict";a("a630"),a("fb6a"),a("d3b7"),a("25f0"),a("3ca3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var i=o(a("6b75"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e){if("string"===typeof e)return(0,i.default)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,i.default)(e,t):void 0}}},2909:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var i=n(a("6005")),o=n(a("db90")),s=n(a("06c5")),r=n(a("3427"));function n(e){return e&&e.__esModule?e:{default:e}}function d(e){return(0,i.default)(e)||(0,o.default)(e)||(0,s.default)(e)||(0,r.default)()}},3427:function(e,t,a){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},4336:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0,duration:"1000",circular:"true"}},e._l(e.swiperList,(function(e){return a("v-uni-swiper-item",{key:e.imgSrc},[a("v-uni-image",{staticClass:"swiper-img",attrs:{src:e.imgSrc,mode:""}})],1)})),1),e._l(e.goodsList,(function(t){return a("v-uni-view",{key:t.id,staticClass:"goods-box",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goDetails(t)}}},[a("v-uni-view",{staticClass:"goods-left"},[a("v-uni-image",{attrs:{src:t.mainPic,mode:""}})],1),a("v-uni-view",{staticClass:"goods-right"},[a("v-uni-view",{staticClass:"goods-title eli2"},[a("v-uni-image",{attrs:{src:"https://staticresource.haichennux.net/path?name=1608270482574.png",mode:""}}),a("v-uni-text",[e._v(e._s(t.title))])],1),a("v-uni-view",{staticClass:"card-box"},[t.costFreeCardNumber?a("v-uni-view",{staticClass:"free-card"},[a("v-uni-text",{staticClass:"free-left"},[e._v("免单卡")]),a("v-uni-text",{staticClass:"card-num"},[e._v(e._s(t.costFreeCardNumber))])],1):e._e(),t.discountPrice?a("v-uni-view",{staticClass:"rebate"},[e._v("返"+e._s(t.discountPrice))]):e._e()],1),a("v-uni-view",{staticClass:"goods-price"},[a("v-uni-text",{staticClass:"price-type"},[e._v("￥")]),a("v-uni-text",{staticClass:"new-price"},[e._v(e._s(t.actualPrice))]),a("v-uni-text",{staticClass:"old-price"},[e._v("￥"+e._s(t.taobaoPrice))])],1)],1)],1)})),e.ifFixedType?a("v-uni-view",{staticClass:"back_top",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.returnTop.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://staticresource.haichennux.net/path?name=1608197854165.png",mode:""}})],1):e._e()],2)},s=[]},6005:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var i=o(a("6b75"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e))return(0,i.default)(e)}},"6b75":function(e,t,a){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},"757d":function(e,t,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("2909"));function s(e,t){e.$reqHttp({url:"/getH5Banner",data:{type:t,substationId:e.$store.state.userBaseinfo.substationId||""},success:function(t){e.swiperList=t.data.result}})}function r(e){e.$reqHttp({url:"/getGoodsType",data:{},success:function(t){e.articles=t.data.result}})}function n(e){e.$reqHttp({url:"/queryMyIndex",data:{userId:e.$store.state.userData.id||""},success:function(t){t.data.success&&(e.freeBillCards=t.data.result.freeBillCards)}})}function d(e){e.$reqHttp({url:"/queryIndexGoods",data:{pageNumber:e.pages.pageNumber,pageSize:e.pages.pageSize,sort:"",order:"",title:e.searchText,typeId:e.typeId,userId:e.$store.state.userData.id||"",salesOrder:e.salesOrderSort||"",priceOrder:e.priceOrderSort||"",rebateOrder:e.rebateOrderSort||""},success:function(t){t.data.success&&(e.productList=[].concat((0,o.default)(e.productList),(0,o.default)(t.data.result.records)),e.productLength=e.productList.length)}})}function u(e){e.$reqHttp({url:"/queryIndexGoods",data:{goodsId:e.goodsId,userId:e.$store.state.userData.id||""},success:function(t){t.data.success&&(e.item=t.data.result.records[0],e.swiperList=JSON.parse(t.data.result.records[0].allMainPic)||[],e.detailImg=JSON.parse(t.data.result.records[0].goodsDetail)||[],e.isCollection=JSON.parse(t.data.result.records[0].isFavorite))}})}function c(e,t){e.$reqHttp({url:"/addGoodsScanNumber",data:{id:t},method:"GET",success:function(e){}})}function l(e){e.$reqHttp({url:"/addFavorite",data:{goodsId:e.goodsId,userId:e.$store.state.userData.id||""},success:function(e){}})}function f(e){e.$reqHttp({url:"/deleteFavorite",data:{goodsId:e.goodsId,userId:e.$store.state.userData.id||""},success:function(e){}})}function g(e){e.$reqHttp({url:"/queryFavorite",data:{userId:e.$store.state.userData.id||""},success:function(t){t.data.success&&(e.list=t.data.result)}})}function b(e){e.$reqHttp({url:"/getH5Banner",data:{type:3,substationId:e.$store.state.userBaseinfo.substationId},success:function(t){t.data.success&&(e.codeImg=t.data.result)}})}function p(e){e.$reqHttp({url:"/shareGoods",data:{userId:e.$store.state.userData.id,goodsId:e.goodsId,substationId:e.$store.state.userBaseinfo.substationId},success:function(t){t.data.success&&(e.codeImg=t.data.result)}})}function h(e){e.$reqHttp({url:"/getFirstThreeZoneGoods",success:function(t){t.data.success&&(e.zoneList=t.data.result)}})}function v(e,t){e.$reqHttp({url:"/getZoneGoodsByZoneCode",data:{zoneType:t,pageVo:"",pageNumber:e.pages.pageNumber,pageSize:e.pages.pageSize,sort:"",order:""},success:function(t){t.data.success&&(e.goodsList=e.goodsList.concat(t.data.result.records))}})}function m(e,t){e.$reqHttp({url:"/checkExchange",data:{userId:e.$store.state.userData.id||"",goodsId:e.goodsId},success:function(a){a.data.success?null!=t?e.isExchange=!0:uni.navigateTo({url:"./exchange?goodsId="+e.goodsId}):e.$message(a.data.message)}})}var y={swiper:s,goodsType:r,queryMyIndex:n,search:d,swiperDetail:u,addGoodsScanNumber:c,addFavorite:l,deleteFavorite:f,queryFavorite:g,queryCustomerQrCode:b,shareGoods:p,topThreeGoods:h,getZoneAllGoods:v,checkExchange:m};t.default=y},"7f6a":function(e,t,a){"use strict";a.r(t);var i=a("aa32"),o=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},"91ea":function(e,t,a){"use strict";a.r(t);var i=a("4336"),o=a("7f6a");for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("bcb0");var r,n=a("f0c5"),d=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"6ee5b7b8",null,!1,i["a"],r);t["default"]=d.exports},aa32:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("757d")),s={data:function(){return{ifFixedType:!1,pages:{pageNumber:1,pageSize:10},goodsList:[],swiperList:[]}},onReachBottom:function(){this.pages.pageNumber=this.pages.pageNumber+1,o.default.getZoneAllGoods(this,"lessNinePointNine ")},onLoad:function(){uni.setNavigationBarTitle({title:this.$store.state.navigationBarTitle||"9.9元专区"}),o.default.getZoneAllGoods(this,"lessNinePointNine "),o.default.swiper(this,2)},onPageScroll:function(e){e.scrollTop>267?this.ifFixedType=!0:this.ifFixedType=!1},methods:{returnTop:function(){uni.pageScrollTo&&uni.pageScrollTo({scrollTop:0})},goDetails:function(e){uni.setStorageSync("listItem",e),uni.navigateTo({url:"./details"})}}};t.default=s},bcb0:function(e,t,a){"use strict";var i=a("e40d"),o=a.n(i);o.a},dae2:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.swiper[data-v-6ee5b7b8]{height:%?260?%}.swiper .swiper-img[data-v-6ee5b7b8]{width:%?750?%;height:%?260?%;display:block}.top-back[data-v-6ee5b7b8]{width:%?750?%;height:%?260?%}.top-back uni-image[data-v-6ee5b7b8]{width:%?750?%;height:%?260?%}.goods-box[data-v-6ee5b7b8]{width:%?654?%;height:%?220?%;padding:%?24?%;background:#fff;border-radius:%?16?%;margin:0 auto;margin-top:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-box .goods-left[data-v-6ee5b7b8]{max-width:%?220?%;max-height:%?220?%;min-width:%?220?%;min-height:%?220?%;background:#f4f4f4;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods-box .goods-left uni-image[data-v-6ee5b7b8]{width:%?220?%;height:%?220?%;border-radius:%?8?%}.goods-box .goods-right[data-v-6ee5b7b8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?16?%}.goods-box .goods-right .goods-title[data-v-6ee5b7b8]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.goods-box .goods-right .goods-title uni-image[data-v-6ee5b7b8]{width:%?28?%;height:%?28?%;margin-right:%?8?%;vertical-align:middle}.goods-box .goods-right .card-box[data-v-6ee5b7b8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.goods-box .goods-right .card-box .free-card[data-v-6ee5b7b8]{width:%?110?%;height:%?32?%;line-height:%?28?%;background:#fdd7b5;border-radius:%?4?%;font-size:%?18?%;font-weight:500;font-family:PingFangSC-Medium,PingFang SC;margin-right:%?16?%}.goods-box .goods-right .card-box .free-card .free-left[data-v-6ee5b7b8]{display:inline-block;width:%?70?%;height:%?32?%;background:#333;color:#fdd7b5;text-align:center;border-radius:%?4?% 0 0 %?4?%}.goods-box .goods-right .card-box .free-card .card-num[data-v-6ee5b7b8]{width:%?40?%;display:inline-block;color:#333;text-align:center}.goods-box .goods-right .card-box .rebate[data-v-6ee5b7b8]{padding:0 %?13?%;height:%?32?%;line-height:%?32?%;background:#fef2f2;border-radius:%?4?%;font-size:%?18?%;font-weight:500;color:#eb1c24}.goods-box .goods-right .goods-price[data-v-6ee5b7b8]{font-weight:600;color:#eb1c24;font-family:PingFangSC-Medium,PingFang SC}.goods-box .goods-right .goods-price .price-type[data-v-6ee5b7b8]{font-size:%?22?%}.goods-box .goods-right .goods-price .new-price[data-v-6ee5b7b8]{font-size:%?36?%;margin-right:%?16?%}.goods-box .goods-right .goods-price .old-price[data-v-6ee5b7b8]{font-size:%?22?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;color:#999;text-decoration:line-through}.back_top[data-v-6ee5b7b8]{position:fixed;right:%?24?%;bottom:%?64?%;z-index:99}.back_top uni-image[data-v-6ee5b7b8]{width:%?80?%;height:%?80?%}',""]),e.exports=t},db90:function(e,t,a){"use strict";function i(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},e40d:function(e,t,a){var i=a("dae2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("3b245559",i,!0,{sourceMap:!1,shadowMode:!1})}}]);