(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-evaluate"],{"0e56":function(e,t,a){var i=a("ec9b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("706d7e87",i,!0,{sourceMap:!1,shadowMode:!1})},3921:function(e,t,a){"use strict";a.r(t);var i=a("3cf8"),n=a("9de4");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("b584"),a("b9e3");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"daa0ba42",null,!1,i["a"],r);t["default"]=c.exports},"3cf8":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{class:1==e.state?"on":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choice(1)}}},[e._v("待评价")]),a("v-uni-view",{class:2==e.state?"on":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choice(2)}}},[e._v("待审核")]),a("v-uni-view",{class:3==e.state?"on":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choice(3)}}},[e._v("已完成")]),a("v-uni-view",{class:4==e.state?"on":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choice(4)}}},[e._v("已取消")])],1),a("v-uni-scroll-view",{staticClass:"scroll-class",attrs:{"scroll-y":"true"}},[e._l(e.evaData.records,(function(t,i){return e.evaData.records.length>0?a("v-uni-view",{key:i,staticClass:"item"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",[e._v("订单编号："+e._s(t.orderNo))]),t.deadlineForEvaluate?a("v-uni-view",{staticClass:"yellow-text"},[e._v(e._s(t.deadlineForEvaluate))]):e._e()],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{attrs:{src:t.mainPic,mode:""}}),a("v-uni-view",[a("v-uni-view",{staticClass:"describe eli2"},[e._v(e._s(t.title))]),a("v-uni-view",{staticClass:"number"},[a("v-uni-view",{staticClass:"price"},[a("v-uni-view",{staticClass:"present-price"},[a("v-uni-text",[e._v("¥")]),e._v(e._s(t.spreadAmt))],1),t.dealAmt?a("v-uni-view",{staticClass:"original-price"},[e._v("￥"+e._s(t.dealAmt))]):e._e()],1),a("v-uni-view",[e._v("x"+e._s(t.number))])],1)],1)],1),a("v-uni-view",{staticClass:"feedback"},[a("v-uni-view",{staticClass:"estimate"},[e._v("返现："),a("v-uni-text",[e._v("¥"+e._s(t.rebateAmt))])],1),a("v-uni-view",{staticClass:"btn"},[2==e.state?a("v-uni-view",{staticClass:"grey-border",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showCapimg(t)}}},[e._v("查看截图")]):e._e(),1==e.state?a("v-uni-view",{staticClass:"red-border",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navigateToEva(t)}}},[e._v("评价领1张免单卡")]):e._e(),3==e.state&&0==t.whetherReceive?a("v-uni-view",{staticClass:"red-border",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.getCard(t)}}},[e._v("领取免单卡")]):e._e(),2==e.state?a("v-uni-view",{staticClass:"grey-border",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.oncancelEva(t)}}},[e._v("撤回评价")]):e._e()],1)],1),t.businessRejectReason&&[4,5].includes(t.evaluateStatus)?a("v-uni-view",{staticClass:"reason"},[a("v-uni-text",{staticClass:"reason-title"},[e._v("取消原因：")]),a("v-uni-text",{staticClass:"reason-cont"},[e._v(e._s(t.businessRejectReason))])],1):e._e()],1):e._e()})),0==e.evaData.records.length?a("v-uni-view",{staticClass:"no-order"},[a("v-uni-image",{attrs:{src:"http://47.111.232.251:8106/path?name=1605005567295.png",mode:""}}),a("v-uni-view",[e._v("没有相关内容")])],1):e._e()],2),e.capimg?a("v-uni-view",{staticClass:"capimg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeCap.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e.capimg,mode:"aspectFit"}})],1):e._e()],1)],1)},s=[]},"440f":function(e,t,a){"use strict";function i(e){e.$reqHttp({url:"/queryMyIndex",data:{userId:e.$store.state.userData.id},success:function(t){e.userData=t.data.result}})}function n(e){e.$reqHttp({url:"/queryOrder",data:{userId:e.$store.state.userData.id},success:function(t){e.myOrder.ALL=t.data.result.ALL||[],e.myOrder.UN_FINISH=t.data.result.UN_FINISH||[],e.myOrder.TO_GET_GOODS=t.data.result.TO_GET_GOODS||[],e.myOrder2=t.data.result||[],1==e.state&&(e.list=t.data.result.ALL||[]),2==e.state&&(e.list=t.data.result.UN_FINISH||[]),3==e.state&&(e.list=t.data.result.TO_GET_GOODS||[]),4==e.state&&(e.list=t.data.result.FINISH||[]),5==e.state&&(e.list=t.data.result.REFUND||[])}})}function s(e){e.$reqHttp({url:"/continueOrder",data:{orderId:e.orderId},success:function(e){var t=e.data.result.step;5==t&&uni.navigateTo({url:"/pages/index/confirm-order?orderData="+JSON.stringify(e.data.result)}),1!=t&&2!=t&&3!=t&&4!=t&&10!=t||uni.navigateTo({url:"/pages/index/exchange?continueData="+JSON.stringify(e.data.result)})}})}function r(e){e.$reqHttp({url:"/receiveRebate",data:{orderId:e.orderId},success:function(t){t.data.success&&(e.isPopup=!0)}})}function o(e){e.$reqHttp({url:"/queryOrderDetail",data:{userId:e.$store.state.userData.id},success:function(t){t.data.success&&(e.list=t.data.result)}})}function c(e,t){e.$reqHttp({url:"/manualCancelOrder",data:{orderClaimId:t},success:function(t){t.data.success?(e.$message("取消成功"),n(e)):e.$message(t.data.message)}})}function d(e){e.$reqHttp({url:"/cashOut",data:{userId:e.$store.state.userData.id},success:function(t){t.data.success?(l(e),i(e),e.$message("提现成功"),e.balance=0):e.$message(t.data.message)}})}function l(e){e.$reqHttp({url:"/queryGetCashDetail",data:{userId:e.$store.state.userData.id},success:function(t){t.data.success&&(e.list=t.data.result)}})}function u(e){e.$reqHttp({url:"/shareWxApp",data:{userId:e.$store.state.userData.id},success:function(t){if(!t.data.success)return e.$message(t.data.message),void uni.hideLoading();e.list=t.data.result}})}function f(e){e.$reqHttp({url:"/queryInvitationEvaluatePage",data:{userId:e.$store.state.userData.id},success:function(t){e.evaData=t.data.result}})}function v(e,t){e.$reqHttp({url:"/queryOrderEvaluatePageByStatus",data:{userId:e.$store.state.userData.id,status:t,pageVo:{order:"",pageNumber:1,pageSize:10,sort:""}},success:function(t){e.evaData=t.data.result}})}function b(e){e.$reqHttp({url:"/getEvaluateForFreeCard",data:{orderId:e.order.orderId},success:function(t){e.evaData=t.data.result}})}function g(e){e.$reqHttp({url:"/uploadEvaluationScreenshot",data:{goodsId:e.evaData.goodsId,orderId:e.evaData.orderId,evaluatePoolId:e.evaData.evaluatePoolId,pic:e.uploadData},success:function(t){if(t.data.success){if(e.$message("提交成功"),201==t.data.code)return void(e.showPupop=!0);setTimeout((function(){uni.navigateBack({})}),1e3)}else e.$message("提交失败")}})}function p(e,t){e.$reqHttp({url:"/getPicByOrderEvaluateId",data:{orderEvaluateId:t.orderEvaluateId},success:function(t){t.data.success&&(e.capimg=t.data.result.pic)}})}function w(e,t){e.$reqHttp({url:"/userToCancelOrderEvaluate",data:{orderEvaluateId:t.orderEvaluateId},success:function(t){t.data.success&&(e.$message("撤回成功"),v(e,1))}})}function m(e,t){e.$reqHttp({url:"/getFreeOfChargeCard",data:{orderId:t.orderId,orderEvaluateId:t.orderEvaluateId},success:function(t){t.data.success?(e.$message("领取成功"),v(e,2)):e.$message("领取失败")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var h={queryMyIndex:i,queryOrder:n,continueOrder:s,receiveRebate:r,queryOrderDetail:o,manualCancelOrder:c,queryGetCashDetail:l,cashOut:d,shareWxApp:u,queryEvaOrders:f,queryOrderEvaluate:v,getEvaluateForFreeCard:b,submitEva:g,getcapimg:p,cancelEva:w,getfreeCard:m};t.default=h},4996:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("440f")),s={data:function(){return{state:1,evaData:{},capimg:""}},onLoad:function(){uni.setNavigationBarTitle({title:this.$store.state.navigationBarTitle||"邀请评价"})},onShow:function(){n.default.queryEvaOrders(this)},methods:{choice:function(e){switch(this.state=e,e){case 1:n.default.queryEvaOrders(this);break;case 2:n.default.queryOrderEvaluate(this,e-1);break;case 3:n.default.queryOrderEvaluate(this,e-1);break;case 4:n.default.queryOrderEvaluate(this,e-1);break}},navigateToEva:function(e){uni.navigateTo({url:"./submitEva?item="+JSON.stringify(e)})},showCapimg:function(e){n.default.getcapimg(this,e)},closeCap:function(){this.capimg=""},oncancelEva:function(e){n.default.cancelEva(this,e)},getCard:function(e){n.default.getfreeCard(this,e)}}};t.default=s},9428:function(e,t,a){var i=a("d664");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("456a976a",i,!0,{sourceMap:!1,shadowMode:!1})},"9de4":function(e,t,a){"use strict";a.r(t);var i=a("4996"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},b584:function(e,t,a){"use strict";var i=a("0e56"),n=a.n(i);n.a},b9e3:function(e,t,a){"use strict";var i=a("9428"),n=a.n(i);n.a},d664:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.main[data-v-daa0ba42]{padding-top:%?88?%}.scroll-class[data-v-daa0ba42]{max-height:calc(100vh - 44px)}\r\n/* 头部 */.top[data-v-daa0ba42]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?88?%;background:#fff;position:fixed;top:0;left:0}.top uni-view[data-v-daa0ba42]{width:20%;text-align:center;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.top uni-view.on[data-v-daa0ba42]{font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:600;color:#eb1c24}\r\n/* 内容 */.item[data-v-daa0ba42]{margin:%?24?% %?24?% %?24?%;padding:0 %?24?% %?32?%;background:#fff;border-radius:%?16?%}.title[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;height:%?79?%;border-bottom:%?1?% solid #e8e8e8}.grey-text[data-v-daa0ba42]{font-size:%?26?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#999}.title .red-text[data-v-daa0ba42]{color:#eb1c24}.title .yellow-text[data-v-daa0ba42]{color:#ff8500}.content[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?24?% 0 %?32?%}.content uni-image[data-v-daa0ba42]{width:%?160?%;height:%?160?%;display:block;margin-right:%?16?%;-webkit-flex-shrink:0;flex-shrink:0}.describe[data-v-daa0ba42]{width:%?478?%;font-size:%?26?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:700;color:#333;line-height:%?37?%;margin-bottom:%?24?%}.number[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;line-height:%?40?%}.price[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.present-price[data-v-daa0ba42]{font-size:%?36?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:600;color:#eb1c24;line-height:30px}.present-price uni-text[data-v-daa0ba42]{font-size:%?22?%}.original-price[data-v-daa0ba42]{margin-left:%?16?%;font-size:%?22?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;line-height:%?30?%;text-decoration:line-through}.cash-back[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cash-back-right[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.feedback[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.estimate[data-v-daa0ba42]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#666}.estimate uni-text[data-v-daa0ba42]{font-size:%?26?%;color:#eb1c24;font-weight:600}.btn[data-v-daa0ba42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn uni-view[data-v-daa0ba42]{padding:0 %?24?%;line-height:%?56?%;font-size:%?24?%;border-radius:%?28?%;margin-left:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400}.grey-border[data-v-daa0ba42]{border:1px solid hsla(0,0%,75.7%,.99);color:#666}.red-border[data-v-daa0ba42]{border:%?1?% solid rgba(235,28,36,.99);color:#eb1c24}.yellow-border[data-v-daa0ba42]{color:#ff8500;border:1px solid rgba(255,133,0,.99)}\r\n/* 没有相关订单呦 */.no-order[data-v-daa0ba42]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#666;line-height:%?37?%;margin-top:%?288?%}.no-order uni-image[data-v-daa0ba42]{width:%?280?%;height:%?280?%;display:block;margin-bottom:%?40?%}.reason[data-v-daa0ba42]{border-top:%?1?% solid #e8e8e8;padding-top:%?24?%;margin-top:%?32?%;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400}.reason .reason-title[data-v-daa0ba42]{color:#eb1c24}.reason .reason-cont[data-v-daa0ba42]{color:#666}.capimg[data-v-daa0ba42]{position:fixed;top:0;left:0;bottom:0;background-color:#000;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.capimg uni-image[data-v-daa0ba42]{height:%?600?%;width:%?750?%}',""]),e.exports=t},ec9b:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-daa0ba42]{overflow:hidden;width:100%;height:100%}",""]),e.exports=t}}]);