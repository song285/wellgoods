(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bill"],{1244:function(e,t,a){"use strict";a.r(t);var r=a("5afe"),s=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},"2f50":function(e,t,a){"use strict";a.r(t);var r=a("724e"),s=a("1244");for(var i in s)"default"!==i&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("73a6");var n,u=a("f0c5"),d=Object(u["a"])(s["default"],r["b"],r["c"],!1,null,"5cf5e6c8",null,!1,r["a"],n);t["default"]=d.exports},"440f":function(e,t,a){"use strict";function r(e){e.$reqHttp({url:"/queryMyIndex",data:{userId:e.$store.state.userData.id},success:function(t){e.userData=t.data.result}})}function s(e){e.$reqHttp({url:"/queryOrder",data:{userId:e.$store.state.userData.id},success:function(t){e.myOrder.ALL=t.data.result.ALL||[],e.myOrder.UN_FINISH=t.data.result.UN_FINISH||[],e.myOrder.TO_GET_GOODS=t.data.result.TO_GET_GOODS||[],e.myOrder2=t.data.result||[],1==e.state&&(e.list=t.data.result.ALL||[]),2==e.state&&(e.list=t.data.result.UN_FINISH||[]),3==e.state&&(e.list=t.data.result.TO_GET_GOODS||[]),4==e.state&&(e.list=t.data.result.FINISH||[]),5==e.state&&(e.list=t.data.result.REFUND||[])}})}function i(e){e.$reqHttp({url:"/continueOrder",data:{orderId:e.orderId},success:function(e){var t=e.data.result.step;5==t&&uni.navigateTo({url:"/pages/index/confirm-order?orderData="+JSON.stringify(e.data.result)}),1!=t&&2!=t&&3!=t&&4!=t&&10!=t||uni.navigateTo({url:"/pages/index/exchange?continueData="+JSON.stringify(e.data.result)})}})}function n(e){e.$reqHttp({url:"/receiveRebate",data:{orderId:e.orderId},success:function(t){t.data.success&&(e.isPopup=!0)}})}function u(e){e.$reqHttp({url:"/queryOrderDetail",data:{userId:e.$store.state.userData.id},success:function(t){t.data.success&&(e.list=t.data.result)}})}function d(e,t){e.$reqHttp({url:"/manualCancelOrder",data:{orderClaimId:t},success:function(t){t.data.success?(e.$message("取消成功"),s(e)):e.$message(t.data.message)}})}function c(e){e.$reqHttp({url:"/cashOut",data:{userId:e.$store.state.userData.id},success:function(t){t.data.success?(o(e),r(e),e.$message("提现成功"),e.balance=0):e.$message(t.data.message)}})}function o(e){e.$reqHttp({url:"/queryGetCashDetail",data:{userId:e.$store.state.userData.id},success:function(t){t.data.success&&(e.list=t.data.result)}})}function l(e){e.$reqHttp({url:"/shareWxApp",data:{userId:e.$store.state.userData.id},success:function(t){if(!t.data.success)return e.$message(t.data.message),void uni.hideLoading();e.list=t.data.result}})}function f(e){e.$reqHttp({url:"/queryInvitationEvaluatePage",data:{userId:e.$store.state.userData.id},success:function(t){e.evaData=t.data.result}})}function g(e,t){e.$reqHttp({url:"/queryOrderEvaluatePageByStatus",data:{userId:e.$store.state.userData.id,status:t,pageVo:{order:"",pageNumber:1,pageSize:10,sort:""}},success:function(t){e.evaData=t.data.result}})}function v(e){e.$reqHttp({url:"/getEvaluateForFreeCard",data:{orderId:e.order.orderId},success:function(t){e.evaData=t.data.result}})}function p(e){e.$reqHttp({url:"/uploadEvaluationScreenshot",data:{goodsId:e.evaData.goodsId,orderId:e.evaData.orderId,evaluatePoolId:e.evaData.evaluatePoolId,pic:e.uploadData},success:function(t){if(t.data.success){if(e.$message("提交成功"),201==t.data.code)return void(e.showPupop=!0);setTimeout((function(){uni.navigateBack({})}),1e3)}else e.$message("提交失败")}})}function m(e,t){e.$reqHttp({url:"/getPicByOrderEvaluateId",data:{orderEvaluateId:t.orderEvaluateId},success:function(t){t.data.success&&(e.capimg=t.data.result.pic)}})}function y(e,t){e.$reqHttp({url:"/userToCancelOrderEvaluate",data:{orderEvaluateId:t.orderEvaluateId},success:function(t){t.data.success&&(e.$message("撤回成功"),g(e,1))}})}function h(e,t){e.$reqHttp({url:"/getFreeOfChargeCard",data:{orderId:t.orderId,orderEvaluateId:t.orderEvaluateId},success:function(t){t.data.success?(e.$message("领取成功"),g(e,2)):e.$message("领取失败")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var b={queryMyIndex:r,queryOrder:s,continueOrder:i,receiveRebate:n,queryOrderDetail:u,manualCancelOrder:d,queryGetCashDetail:o,cashOut:c,shareWxApp:l,queryEvaOrders:f,queryOrderEvaluate:g,getEvaluateForFreeCard:v,submitEva:p,getcapimg:m,cancelEva:y,getfreeCard:h};t.default=b},"5afe":function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("440f")),i={data:function(){return{list:[]}},onLoad:function(){uni.setNavigationBarTitle({title:this.$store.state.navigationBarTitle||"账单"}),s.default.queryOrderDetail(this)},methods:{}};t.default=i},"6eac":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".main[data-v-5cf5e6c8]{background:#fff;height:calc(100vh - %?1?%);border-top:%?1?% solid #e8e8e8;padding:0 %?24?%}.item[data-v-5cf5e6c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?24?% 0 %?26?%;border-bottom:%?1?% solid #e8e8e8}.title[data-v-5cf5e6c8]{font-size:%?30?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:%?42?%}.number[data-v-5cf5e6c8]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;line-height:%?33?%;margin:%?8?% 0}.time[data-v-5cf5e6c8]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;line-height:%?33?%}.add-money[data-v-5cf5e6c8]{margin-top:%?28?%;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;line-height:45px}.reduce-money[data-v-5cf5e6c8]{margin-top:%?28?%;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#eb1c24;line-height:45px}\r\n/* 无数据 */.no-data[data-v-5cf5e6c8]{margin-top:%?200?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#666;line-height:%?37?%}.no-data uni-image[data-v-5cf5e6c8]{width:%?280?%;height:%?280?%;display:block;margin-bottom:%?40?%}",""]),e.exports=t},"724e":function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"main"},[e._l(e.list,(function(t){return e.list?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(t.title))]),a("v-uni-view",{staticClass:"number"},[e._v("订单号："+e._s(t.orderNo))]),a("v-uni-view",{staticClass:"time"},[e._v(e._s(t.time))])],1),a("v-uni-view",{class:t.amt>0?"add-money":"reduce-money"},[e._v(e._s(t.amt))])],1):e._e()})),""==e.list?a("v-uni-view",{staticClass:"no-data"},[a("v-uni-image",{attrs:{src:"http://47.111.232.251:8106/path?name=1605005328572.png",mode:""}}),a("v-uni-view",[e._v("空空如也")])],1):e._e()],2)],1)},i=[]},"73a6":function(e,t,a){"use strict";var r=a("cc49"),s=a.n(r);s.a},cc49:function(e,t,a){var r=a("6eac");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=a("4f06").default;s("5de4ec61",r,!0,{sourceMap:!1,shadowMode:!1})}}]);