(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=n(i("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(t){if("string"===typeof t)return(0,a.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,a.default)(t,e):void 0}}},"13c4":function(t,e,i){var a=i("6376");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("399e7eb5",a,!0,{sourceMap:!1,shadowMode:!1})},2521:function(t,e,i){"use strict";var a=i("4ea4");i("c975"),i("ac1f"),i("5319"),i("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("757d")),r=a(i("cc9a")),s={data:function(){return{introduce:[{name:"淘宝购物"},{name:"售后无忧"},{name:"卖贵就赔"},{name:"返利秒到"}],swiperList:[],pages:{pageNumber:1,pageSize:10},articles:[],choiceIndex:-1,ifFixedType:!1,productList:[],zoneList:{zeroStatus:0,ninePointNineStatus:0},searchText:"",typeId:"",isSensitive:0,topNum:0,urlObj:"",userinfo:{}}},onLoad:function(t){uni.setNavigationBarTitle({title:this.$store.state.navigationBarTitle||"首页"});var e="";this.getQueryObject(e),r.default.author4H5(this),this.$store.commit("invitation",this.$store.state.userBaseinfo.inviteCode),n.default.goodsType(this),this.choice(this.choiceIndex,this.typeId),n.default.topThreeGoods(this)},onReachBottom:function(){this.pages.pageNumber=this.pages.pageNumber+1,n.default.search(this)},onPageScroll:function(t){t.scrollTop>450?this.ifFixedType=!0:this.ifFixedType=!1},onShow:function(){this.productList=[],this.choice(this.choiceIndex,this.typeId),n.default.swiper(this,1),this.isSensitive=this.$store.state.isSensitive},methods:{getQueryObject:function(t){t=t||window.location.href;var e=t.substring(t.indexOf("?")+1),i={},a=/([^?&=]*)=([^?&=#%]*)/g;e.replace(a,(function(t,e,a){var n=decodeURIComponent(e),r=decodeURIComponent(a);return r=String(r),i[n]=r,t})),this.urlObj=i,this.$store.commit("loginH5",i)},getPhoneCode:function(){var t=this;this.isCoding||(this.codingText=60,this.timer=setInterval((function(){t.isCoding=!0,t.codingText<=0&&(clearInterval(t.timer),t.isCoding=!1),t.codingText--}),1e3))},returnTop:function(){uni.pageScrollTo&&uni.pageScrollTo({scrollTop:0})},navigateToarea:function(t){1===t&&uni.navigateTo({url:"./zeroArea"}),2===t&&uni.navigateTo({url:"./nineArea"})},choice:function(t,e){this.productList=[],this.pages.pageNumber=1,this.pages.pageSize=10,this.choiceIndex=t,this.typeId=e,n.default.search(this)},search:function(){uni.navigateTo({url:"./search"})},goSwiperDetails:function(t){var e=JSON.parse(t.linkInfo);if(0!=t.openLink&&1==t.openLink){if(3==e.type)return uni.setStorageSync("webViewUrl",e.url),void uni.navigateTo({url:"./webView"});uni.navigateTo({url:"./details?type=1&goodsId="+e.goodsId})}},goDetails:function(t){uni.setStorageSync("listItem",t),uni.navigateTo({url:"./details"})}}};e.default=s},2909:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=o(i("6005")),n=o(i("db90")),r=o(i("06c5")),s=o(i("3427"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,a.default)(t)||(0,n.default)(t)||(0,r.default)(t)||(0,s.default)()}},3427:function(t,e,i){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"48e6":function(t,e,i){var a=i("c85d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2711b34c",a,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=n(i("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,a.default)(t)}},6376:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".scroll-class[data-v-4b327a6b]{max-height:calc(100vh - 44px - 28px - 48px)}.main[data-v-4b327a6b]{padding-bottom:%?108?%;\n\t/* padding-top: 88rpx; */font-family:PingFangSC-Regular,PingFang SC;font-weight:400}.back_top[data-v-4b327a6b]{position:fixed;right:%?24?%;bottom:%?120?%;z-index:999}.back_top uni-image[data-v-4b327a6b]{width:%?68?%;height:%?68?%}.top[data-v-4b327a6b]{position:fixed;width:%?750?%;height:%?88?%;top:0;left:0;z-index:10}.search[data-v-4b327a6b]{height:%?88?%;background:#eb1c24;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.search uni-view[data-v-4b327a6b]{width:%?624?%;height:%?68?%;line-height:%?68?%;padding-left:%?76?%;background:#fff;border-radius:%?36?%;border:none;font-size:%?28?%;color:#c1c1c1}.search uni-image[data-v-4b327a6b]{height:%?44?%;width:%?44?%;display:block;position:absolute;top:%?22?%;left:%?40?%}.content[data-v-4b327a6b]{padding-top:%?90?%}.introduce[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?56?%;padding:0 %?24?%;background:#fff}.have[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;color:#999}.have uni-image[data-v-4b327a6b]{height:%?26?%;width:%?26?%;display:block;margin-right:%?9?%}.swiper[data-v-4b327a6b]{padding:%?16?% %?24?%;border-radius:%?16?%;height:%?260?%;background:-webkit-linear-gradient(top,#fff,hsla(0,0%,100%,0));background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0))}.swiper uni-swiper-item[data-v-4b327a6b]{border-radius:%?16?%}.swiper .swiper-img[data-v-4b327a6b]{width:%?702?%;height:%?260?%;border-radius:%?16?%;display:block}.articles-type[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?88?%;overflow:auto;min-width:%?702?%;padding:0 %?24?%;z-index:99}.articles-type[data-v-4b327a6b]::-webkit-scrollbar{height:0!important}.fixed-type[data-v-4b327a6b]{background:#fff;padding-left:%?24?%;position:fixed;top:%?88?%;left:0}.articles-type uni-view[data-v-4b327a6b]{-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?40?%;font-size:%?28?%;color:#666}.articles-type uni-view.on[data-v-4b327a6b]{font-size:%?32?%;font-weight:700;color:#eb1c24}.commodity[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?24?%}.item[data-v-4b327a6b]{-webkit-flex-shrink:0;flex-shrink:0;width:%?343?%;background:#fff;border-radius:%?8?%;padding-bottom:%?23?%;margin-right:%?16?%;margin-top:%?16?%}.item[data-v-4b327a6b]:nth-child(2n){margin-right:0}.commodity-map[data-v-4b327a6b]{width:%?343?%;height:%?343?%;display:block;margin-bottom:%?16?%;border-radius:%?8?%}.title[data-v-4b327a6b]{font-size:%?28?%;color:#333;line-height:%?40?%;margin:0 %?16?%}.title uni-image[data-v-4b327a6b]{width:%?28?%;height:%?28?%;margin-right:%?10?%}.card[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?16?% %?16?%;font-family:PingFangSC-Medium,PingFang SC}.single-card-free[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?32?%;line-height:%?32?%;font-weight:500;margin-right:%?16?%;font-size:%?24?%}.single-card-free uni-view[data-v-4b327a6b]{padding:0 %?8?%;background:#333;border-radius:%?4?% 0 0 %?4?%;color:#fdd7b5}.single-card-free .card-num[data-v-4b327a6b]{padding:0 %?16?%;color:#333;border-radius:%?0?% %?4?% %?4?% %?0?%;background:#fdd7b5}.rebate[data-v-4b327a6b]{padding:0 %?13?%;line-height:%?32?%;background:#fef2f2;border-radius:%?4?%;font-size:%?24?%;font-weight:500;color:#eb1c24;border-radius:%?4?%}.price[data-v-4b327a6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?50?%;margin:%?0?% %?16?%}.present-price[data-v-4b327a6b]{font-size:%?36?%;font-weight:500;color:#eb1c24}.present-price uni-text[data-v-4b327a6b]{font-size:%?22?%;font-family:PingFangSC-Regular,PingFang SC}.original-price[data-v-4b327a6b]{font-size:%?22?%;color:#999;margin-left:%?16?%;text-decoration:line-through}",""]),t.exports=e},6917:function(t,e,i){"use strict";var a=i("c02b"),n=i.n(a);n.a},"6b75":function(t,e,i){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"757d":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2909"));function r(t,e){t.$reqHttp({url:"/getH5Banner",data:{type:e,substationId:t.$store.state.userBaseinfo.substationId||""},success:function(e){t.swiperList=e.data.result}})}function s(t){t.$reqHttp({url:"/getGoodsType",data:{},success:function(e){t.articles=e.data.result}})}function o(t){t.$reqHttp({url:"/queryMyIndex",data:{userId:t.$store.state.userData.id||""},success:function(e){e.data.success&&(t.freeBillCards=e.data.result.freeBillCards)}})}function c(t){t.$reqHttp({url:"/queryIndexGoods",data:{pageNumber:t.pages.pageNumber,pageSize:t.pages.pageSize,sort:"",order:"",title:t.searchText,typeId:t.typeId,userId:t.$store.state.userData.id||"",salesOrder:t.salesOrderSort||"",priceOrder:t.priceOrderSort||"",rebateOrder:t.rebateOrderSort||""},success:function(e){e.data.success&&(t.productList=[].concat((0,n.default)(t.productList),(0,n.default)(e.data.result.records)),t.productLength=t.productList.length)}})}function d(t){t.$reqHttp({url:"/queryIndexGoods",data:{goodsId:t.goodsId,userId:t.$store.state.userData.id||""},success:function(e){e.data.success&&(t.item=e.data.result.records[0],t.swiperList=JSON.parse(e.data.result.records[0].allMainPic)||[],t.detailImg=JSON.parse(e.data.result.records[0].goodsDetail)||[],t.isCollection=JSON.parse(e.data.result.records[0].isFavorite))}})}function u(t,e){t.$reqHttp({url:"/addGoodsScanNumber",data:{id:e},method:"GET",success:function(t){}})}function l(t){t.$reqHttp({url:"/addFavorite",data:{goodsId:t.goodsId,userId:t.$store.state.userData.id||""},success:function(t){}})}function b(t){t.$reqHttp({url:"/deleteFavorite",data:{goodsId:t.goodsId,userId:t.$store.state.userData.id||""},success:function(t){}})}function f(t){t.$reqHttp({url:"/queryFavorite",data:{userId:t.$store.state.userData.id||""},success:function(e){e.data.success&&(t.list=e.data.result)}})}function g(t){t.$reqHttp({url:"/getH5Banner",data:{type:3,substationId:t.$store.state.userBaseinfo.substationId},success:function(e){e.data.success&&(t.codeImg=e.data.result)}})}function p(t){t.$reqHttp({url:"/shareGoods",data:{userId:t.$store.state.userData.id,goodsId:t.goodsId,substationId:t.$store.state.userBaseinfo.substationId},success:function(e){e.data.success&&(t.codeImg=e.data.result)}})}function v(t){t.$reqHttp({url:"/getFirstThreeZoneGoods",success:function(e){e.data.success&&(t.zoneList=e.data.result)}})}function h(t,e){t.$reqHttp({url:"/getZoneGoodsByZoneCode",data:{zoneType:e,pageVo:"",pageNumber:t.pages.pageNumber,pageSize:t.pages.pageSize,sort:"",order:""},success:function(e){e.data.success&&(t.goodsList=t.goodsList.concat(e.data.result.records))}})}function m(t,e){t.$reqHttp({url:"/checkExchange",data:{userId:t.$store.state.userData.id||"",goodsId:t.goodsId},success:function(i){i.data.success?null!=e?t.isExchange=!0:uni.navigateTo({url:"./exchange?goodsId="+t.goodsId}):t.$message(i.data.message)}})}var w={swiper:r,goodsType:s,queryMyIndex:o,search:c,swiperDetail:d,addGoodsScanNumber:u,addFavorite:l,deleteFavorite:b,queryFavorite:f,queryCustomerQrCode:g,shareGoods:p,topThreeGoods:v,getZoneAllGoods:h,checkExchange:m};e.default=w},8618:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索宝贝名称，如口红")]),i("v-uni-image",{attrs:{src:"http://47.111.232.251:8106/path?name=1605064836142.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"introduce"},t._l(t.introduce,(function(e){return i("v-uni-view",{key:e.name,staticClass:"have"},[i("v-uni-image",{attrs:{src:"http://47.111.232.251:8106/path?name=1605064912710.png",mode:""}}),i("v-uni-view",[t._v(t._s(e.name))])],1)})),1),i("v-uni-scroll-view",{staticClass:"scroll-class",attrs:{"scroll-y":"true"}},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-color":"rgba(0, 0, 0, 0.2)","indicator-active-color":"#EB1C24","indicator-dots":"true",autoplay:"false",duration:"1000",circular:"true"}},t._l(t.swiperList,(function(e){return i("v-uni-swiper-item",{key:e.imgSrc},[i("v-uni-image",{staticClass:"swiper-img",attrs:{src:e.imgSrc,mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSwiperDetails(e)}}})],1)})),1),0==t.zoneList.zeroStatus?i("v-uni-view",{staticClass:"zero-area",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToarea(1)}}},[i("v-uni-view",{staticClass:"zero-left"},[i("v-uni-view",{staticClass:"left-box"},[i("v-uni-view",{staticClass:"left-top"},[i("v-uni-image",{attrs:{src:"https://staticresource.haichennux.net/path?name=1608198639825.png",mode:""}}),i("v-uni-view",[t._v("天天爆款直降")])],1),i("v-uni-view",{staticClass:"left-bottom"},[t._v("去逛逛"),i("v-uni-view",{staticClass:"btn"},[t._v("GO")])],1)],1)],1),i("v-uni-view",{staticClass:"zero-right"},t._l(t.zoneList.zeroGoodsList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"right-item"},[i("v-uni-view",{staticClass:"item-top"},[i("v-uni-image",{attrs:{src:e.mainPic,mode:""}})],1),i("v-uni-view",{staticClass:"item-bottom"},[i("v-uni-text",{staticClass:"price-type"},[t._v("￥")]),i("v-uni-text",{staticClass:"new-price"},[t._v(t._s(e.actualPrice))]),i("v-uni-text",{staticClass:"old-price"},[t._v(t._s(e.taobaoPrice))])],1)],1)})),1)],1):t._e(),0==t.zoneList.ninePointNineStatus?i("v-uni-view",{staticClass:"zero-area nine-area",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToarea(2)}}},[i("v-uni-view",{staticClass:"zero-left"},[i("v-uni-view",{staticClass:"left-box"},[i("v-uni-view",{staticClass:"left-top"},[i("v-uni-image",{attrs:{src:"https://staticresource.haichennux.net/path?name=1608198603492.png",mode:""}}),i("v-uni-view",[t._v("聚划算度99%")])],1),i("v-uni-view",{staticClass:"left-bottom"},[t._v("去逛逛"),i("v-uni-view",{staticClass:"btn"},[t._v("GO")])],1)],1)],1),i("v-uni-view",{staticClass:"zero-right"},t._l(t.zoneList.ninePointNineGoodsList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"right-item"},[i("v-uni-view",{staticClass:"item-top"},[i("v-uni-image",{attrs:{src:e.mainPic,mode:""}})],1),i("v-uni-view",{staticClass:"item-bottom"},[i("v-uni-text",{staticClass:"price-type"},[t._v("￥")]),i("v-uni-text",{staticClass:"new-price"},[t._v(t._s(e.actualPrice))]),i("v-uni-text",{staticClass:"old-price"},[t._v(t._s(e.taobaoPrice))])],1)],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"articles-type",class:t.ifFixedType?"fixed-type":""},[i("v-uni-view",{class:-1==t.choiceIndex?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choice(-1,"")}}},[t._v("今日热门")]),t._l(t.articles,(function(e,a){return i("v-uni-view",{key:e.typeId,class:t.choiceIndex==a?"on":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choice(a,e.typeId)}}},[t._v(t._s(e.name))])}))],2),i("v-uni-view",{staticClass:"commodity"},t._l(t.productList,(function(e){return i("v-uni-view",{key:e.mainPic,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[i("v-uni-image",{staticClass:"commodity-map",attrs:{src:e.mainPic,mode:""}}),i("v-uni-view",{staticClass:"title eli2"},[i("v-uni-image",{attrs:{src:"http://47.111.232.251:8106/path?name=1605065043348.png",mode:""}}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"card"},[1==e.isZero?i("v-uni-view",{staticClass:"single-card-free"},[i("v-uni-view",[t._v("免单卡")]),i("v-uni-view",{staticClass:"card-num"},[t._v(t._s(e.costFreeCardNumber))])],1):t._e(),i("v-uni-view",{staticClass:"rebate"},[t._v("返"+t._s(e.discountPrice))])],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"present-price"},[i("v-uni-text",[t._v("¥")]),t._v(t._s(e.actualPrice))],1),i("v-uni-view",{staticClass:"original-price"},[t._v("￥"+t._s(e.taobaoPrice))])],1)],1)})),1)],1)],1),i("Footer"),t.ifFixedType?i("v-uni-view",{staticClass:"back_top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returnTop.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"https://staticresource.haichennux.net/path?name=1608197854165.png",mode:""}})],1):t._e()],1)],1)},r=[]},"92e3":function(t,e,i){"use strict";var a=i("48e6"),n=i.n(a);n.a},9877:function(t,e,i){"use strict";i.r(e);var a=i("2521"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},ac14:function(t,e,i){"use strict";i.r(e);var a=i("8618"),n=i("9877");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("6917"),i("c199"),i("92e3");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"4b327a6b",null,!1,a["a"],s);e["default"]=c.exports},c02b:function(t,e,i){var a=i("e491");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("58924434",a,!0,{sourceMap:!1,shadowMode:!1})},c199:function(t,e,i){"use strict";var a=i("13c4"),n=i.n(a);n.a},c85d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content .zero-area[data-v-4b327a6b]{width:%?655?%;height:%?238?%;padding:%?24?%;background:#fff;border-radius:%?16?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .zero-area .left-box[data-v-4b327a6b]{width:%?152?%;height:%?232?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.content .zero-area .left-box .left-top[data-v-4b327a6b]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:%?28?%}.content .zero-area .left-box .left-top uni-image[data-v-4b327a6b]{width:%?120?%;height:%?26?%}.content .zero-area .left-box .left-bottom[data-v-4b327a6b]{width:%?120?%;height:%?40?%;background:#ff8500;border-radius:%?24?%;font-size:%?22?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff;line-height:%?40?%;position:relative;padding:0 %?10?%}.content .zero-area .left-box .left-bottom .btn[data-v-4b327a6b]{width:%?48?%;height:%?28?%;background:#fff;border-radius:%?19?%;font-size:%?20?%;font-weight:500;color:#ff8500;line-height:%?28?%;text-align:center;position:absolute;right:%?6?%;top:%?6?%}.content .zero-area .zero-right[data-v-4b327a6b]{width:%?488?%;height:%?212?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .zero-area .zero-right .right-item[data-v-4b327a6b]{width:%?152?%;height:%?212?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.content .zero-area .zero-right .right-item .item-top uni-image[data-v-4b327a6b]{width:%?112?%;height:%?112?%}.content .zero-area .zero-right .right-item .item-bottom[data-v-4b327a6b]{font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#eb1c24}.content .zero-area .zero-right .right-item .item-bottom .price-type[data-v-4b327a6b]{font-size:%?22?%}.content .zero-area .zero-right .right-item .item-bottom .new-price[data-v-4b327a6b]{font-size:%?36?%;margin-right:%?10?%}.content .zero-area .zero-right .right-item .item-bottom .old-price[data-v-4b327a6b]{font-size:%?22?%;font-weight:400;color:#999;text-decoration:line-through}.content .nine-area[data-v-4b327a6b]{margin-top:%?16?%}',""]),t.exports=e},db90:function(t,e,i){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},e491:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-4b327a6b]{overflow:hidden;width:100%;height:100%}",""]),t.exports=e}}]);