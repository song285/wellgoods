(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-confirm-order"],{"0700":function(e,t,i){var a=i("e9d4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("4772a846",a,!0,{sourceMap:!1,shadowMode:!1})},"6c2d":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("d15d")),s={data:function(){return{isPopup:!1,h:0,m:0,s:0,countdown:"10:00",timer:null,stepOneData:{},orderClaimId:"",orderData:{},orderNo:"",paymentPopup:!1,paymentData:{}}},onLoad:function(e){var t=this;e.orderData?(this.stepOneData=JSON.parse(e.orderData),this.orderData=JSON.parse(e.orderData),this.orderClaimId=this.orderData.orderClaimId):(this.stepOneData.orderClaimId=e.orderClaimId,this.orderClaimId=e.orderClaimId,n.default.goCheckOrder(this)),this.timeCount(),this.timer=setInterval((function(){t.timeCount()}),1e3),uni.setNavigationBarTitle({title:this.$store.state.navigationBarTitle||"确认订单"})},onUnload:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{timeCount:function(){var e=new Date(this.orderData.endTime)-new Date;this.h=Math.floor(e/36e5)||0;var t=e%36e5;this.m=Math.floor(t/6e4)||0;var i=t%6e4;this.s=Math.floor(i/1e3)||0},showPopup:function(){this.isPopup=!0},close:function(){this.isPopup=!1,this.paymentPopup=!1},success:function(){n.default.checkOrder(this)},cancel:function(){n.default.manualCancelOrder(this)},payment:function(){n.default.modifyOrderRebateAmt(this)}}};t.default=s},"7c67":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top-left"},[i("v-uni-view",{staticClass:"wait-for"},[e._v("等待付款")]),i("v-uni-view",[e._v("请在剩余时间内付款")])],1),i("v-uni-view",{staticClass:"top-right"},[i("v-uni-view",[e._v(e._s(e.h>9?e.h:"0"+e.h))]),e._v(":"),i("v-uni-view",[e._v(e._s(e.m>9?e.m:"0"+e.m))]),e._v(":"),i("v-uni-view",[e._v(e._s(e.s>9?e.s:"0"+e.s))])],1)],1),i("v-uni-view",{staticClass:"commodity"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.orderData.shopName))]),i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"commodity-img",attrs:{src:e.orderData.mainPic,mode:""}}),i("v-uni-view",{staticClass:"content-left"},[i("v-uni-view",{staticClass:"describe eli"},[e._v(e._s(e.orderData.title))]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"present-price"},[e._v("¥"),i("v-uni-text",[e._v(e._s(Math.ceil(100*(e.orderData.firstPayAmt-e.orderData.rebateAmt))/100))])],1),i("v-uni-view",[e._v("￥"+e._s(e.orderData.firstPayAmt))])],1),i("v-uni-view",[e._v("x1")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"method"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title"},[e._v("先付款")]),i("v-uni-view",[e._v("¥"+e._s(e.orderData.firstPayAmt))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title"},[e._v("收货后返利")]),i("v-uni-view",[e._v("¥"+e._s(e.orderData.rebateAmt))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title"},[e._v("返利方式")]),i("v-uni-view",[e._v("微信提现")])],1),null!=e.orderData.costFreeBillCard?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title"},[e._v("消耗免单卡")]),i("v-uni-view",[e._v(e._s(e.orderData.costFreeBillCard)+"张")])],1):e._e()],1),i("v-uni-view",{staticClass:"method"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title"},[e._v("订单编号")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入订单编号进行提交"},model:{value:e.orderNo,callback:function(t){e.orderNo=t},expression:"orderNo"}})],1)],1)],1),i("v-uni-view",{staticClass:"footer ios-safe-area "},[i("v-uni-view",{staticClass:"footer-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPopup.apply(void 0,arguments)}}},[e._v("取消订单")]),i("v-uni-view",{staticClass:"footer-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.success.apply(void 0,arguments)}}},[e._v("提交订单")])],1),e.isPopup?i("v-uni-view",{staticClass:"exchange"},[i("v-uni-view",{staticClass:"exchange-content"},[i("v-uni-view",{staticClass:"exchange-tips"},[e._v("提示")]),i("v-uni-view",{staticClass:"exchange-use"},[e._v("确定取消购买？确认后订单将被取消，好好珍惜抢到的购买机会哦？")]),i("v-uni-view",{staticClass:"exchange-footer"},[i("v-uni-view",{staticClass:"cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[e._v("取消")]),i("v-uni-view",{staticClass:"determine",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1):e._e(),e.paymentPopup?i("v-uni-view",{staticClass:"exchange"},[i("v-uni-view",{staticClass:"exchange-content"},[i("v-uni-view",{staticClass:"exchange-tips"},[e._v("提示")]),i("v-uni-view",{staticClass:"exchange-use"},[e._v("订单实际支付金额低于平台商品价格（"),i("v-uni-text",[e._v(e._s(e.paymentData.originalPriceAmt))]),e._v("元），返利将自动同步未"),i("v-uni-text",[e._v(e._s(e.paymentData.actualRebateAmt))]),e._v("元，是否确认提交")],1),i("v-uni-view",{staticClass:"exchange-footer"},[i("v-uni-view",{staticClass:"cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[e._v("取消")]),i("v-uni-view",{staticClass:"determine",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.payment.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1):e._e()],1)},s=[]},"882c":function(e,t,i){"use strict";i.r(t);var a=i("7c67"),n=i("b951");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("f278");var o,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"27635d15",null,!1,a["a"],o);t["default"]=d.exports},b951:function(e,t,i){"use strict";i.r(t);var a=i("6c2d"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},d15d:function(e,t,i){"use strict";function a(e){e.$reqHttp({url:"/createOrder",data:{userId:e.$store.state.userData.id||"",goodsId:e.goodsId,substationId:e.$store.state.userBaseinfo.substationId},success:function(t){e.stepOneData=t.data.result,e.condition=JSON.parse(t.data.result.condition)}})}function n(e){e.$reqHttp({url:"/refreshKeyword",data:{orderClaimId:e.stepOneData.orderClaimId},success:function(t){e.condition=JSON.parse(t.data.result.condition),e.stepOneData.keyword=t.data.result.keyword,e.stepOneData.order=t.data.result.order,e.stepOneData.keywordResult=t.data.result.keywordResult}})}function s(e){e.$reqHttp({url:"/manualCancelOrder",data:{orderClaimId:e.stepOneData.orderClaimId},success:function(t){if(!t.data.success)return e.$message(t.data.message),void e.$message("取消失败");e.$message("购买失败"),setTimeout((function(){uni.reLaunch({url:"/pages/index/index"})}),1e3)}})}function o(e){e.$reqHttp({url:"/answerTitle",data:{orderClaimId:e.stepOneData.orderClaimId},success:function(t){t.data.success?t.data.result.goToTaobaoCheck?(e.answer=2,e.isVerification=!0):e.choiceQuestion=t.data.result:e.$message(t.data.message)}})}function r(e){e.$reqHttp({url:"/answerTitleResult",data:{result:e.isAnswer,orderClaimId:e.stepOneData.orderClaimId},success:function(t){if(t.data.success)if(t.data.result.goToTaobaoCheck){if(1!=e.$store.state.isSensitive)return s(e),void setTimeout((function(){uni.navigateBack({})}),2e3);e.answer=0}else e.choiceQuestion=t.data.result;else e.$message(t.data.message)}})}function d(e){e.$reqHttp({url:"/taobaoCheckGoods",data:{orderClaimId:e.stepOneData.orderClaimId,taobaoWord:e.taobaoWord},success:function(t){t.data.success?(e.$message("验证成功"),e.isAnswer=1,c(e),e.isVerification=!1,e.step=3):e.$message(t.data.message)}})}function c(e){e.$reqHttp({url:"/answerShopTitleResult",data:{result:e.isAnswer,orderClaimId:e.stepOneData.orderClaimId},success:function(t){if(0==e.isAnswer){if(t.data.result.goToTaobaoCheck)return 1!=e.$store.state.isSensitive?(s(e),void setTimeout((function(){uni.navigateBack({})}),2e3)):void(e.answer=0);e.choiceQuestion=t.data.result}else e.stepThreeData=t.data.result}})}function l(e){e.$reqHttp({url:"/goCheckOrder",data:{orderClaimId:e.orderClaimId},success:function(t){e.orderData=t.data.result}})}function u(e){""!=e.orderNo?e.$reqHttp({url:"/checkOrder",data:{orderClaimId:e.orderClaimId,orderNo:e.orderNo},success:function(t){if(t.data.success)return 701==t.data.code?(e.paymentPopup=!0,void(e.paymentData=JSON.parse(t.data.message))):void uni.navigateTo({url:"./orderSuccess"});e.$message(t.data.message)}}):e.$message("订单编号不能为空")}function f(e){e.$reqHttp({url:"/modifyOrderRebateAmt",data:{orderId:e.paymentData.orderId,actualRebateAmt:e.paymentData.actualRebateAmt},success:function(t){t.data.success?u(e):e.$message(t.data.message)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v={createOrder:a,refreshKeyword:n,manualCancelOrder:s,answerTitle:o,answerTitleResult:r,answerShopTitleResult:c,goCheckOrder:l,modifyOrderRebateAmt:f,checkOrder:u,taobaoCheckGoods:d};t.default=v},e9d4:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".main[data-v-27635d15]{padding-bottom:%?108?%}.top[data-v-27635d15]{background:#eb1c24;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?24?% %?40?% %?120?%}.top-left[data-v-27635d15]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:hsla(0,0%,100%,.8)}.top-left .wait-for[data-v-27635d15]{margin-bottom:%?8?%;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff}.top-right[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff}.top-right uni-view[data-v-27635d15]{width:%?70?%;height:%?70?%;line-height:%?70?%;text-align:center;background:#eb1c24;border-radius:%?8?%;border:%?2?% solid #d7040c;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;margin:0 %?13?%}.top-right uni-view[data-v-27635d15]:last-child{margin-right:%?0?%}.commodity[data-v-27635d15]{margin:%?-80?% %?24?% %?16?%;background:#fff;border-radius:16px;padding:0 %?24?% %?24?%}.commodity .title[data-v-27635d15]{line-height:%?80?%;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;margin-bottom:%?24?%}.content[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?180?%}.commodity-img[data-v-27635d15]{width:%?180?%;height:%?180?%;-webkit-flex-shrink:0;flex-shrink:0;display:block;margin-right:%?16?%}.content-left[data-v-27635d15]{width:%?458?%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.describe[data-v-27635d15]{font-size:%?26?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333}.number[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.price[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?22?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.present-price[data-v-27635d15]{font-size:%?20?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#eb1c24;margin-right:%?16?%}.present-price uni-view[data-v-27635d15]:last-child{.text-decoration:line-through}.present-price uni-text[data-v-27635d15]{font-size:%?32?%}.method[data-v-27635d15]{background:#fff;border-radius:%?16?%;margin:%?16?% %?24?%;padding:0 %?24?%}.item[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?88?%;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.item-title[data-v-27635d15]{width:%?180?%;font-size:%?26?%;-webkit-flex-shrink:0;flex-shrink:0;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.item uni-input[data-v-27635d15]{border:none;width:100%;font-size:%?26?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#c1c1c1}\n\n/* 底部 */.footer[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?98?%;position:fixed;bottom:0;left:0;right:0}.footer uni-view[data-v-27635d15]{width:50%;text-align:center;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500}.footer .footer-left[data-v-27635d15]{background:#fff;color:#eb1c24}.footer .footer-right[data-v-27635d15]{background:#eb1c24;color:#fff}\n\n/* 弹窗 */.exchange[data-v-27635d15]{position:fixed;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:0;left:0;right:0;bottom:0;z-index:10}.exchange-content[data-v-27635d15]{background:#fff;border-radius:%?16?%;width:%?560?%;text-align:center;padding-top:%?50?%}.exchange-tips[data-v-27635d15]{font-size:%?36?%;color:#333;text-align:center}.exchange-use[data-v-27635d15]{font-size:%?30?%;padding:0 %?32?%;color:#666;margin:%?18?% 0 %?30?%}.exchange-use uni-text[data-v-27635d15]{color:#eb1c24}.exchange-footer[data-v-27635d15]{display:-webkit-box;display:-webkit-flex;display:flex}.exchange-footer uni-view[data-v-27635d15]{width:50%;line-height:%?100?%;font-size:%?36?%;border-top:%?1?% solid #e5e5e5}.exchange-footer .cancel[data-v-27635d15]{border-right:%?1?% solid #e5e5e5;color:#999}.exchange-footer .determine[data-v-27635d15]{color:#eb1c24}",""]),e.exports=t},f278:function(e,t,i){"use strict";var a=i("0700"),n=i.n(a);n.a}}]);