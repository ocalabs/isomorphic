webpackJsonp([83],{816:function(n,e,t){"use strict";function i(n,e){var t=new n,i=new n;i.addElement(e.querySelector("ion-backdrop"));var o=new n;return o.addElement(e.querySelector(".loading-wrapper")),i.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(e).easing("ease-in-out").duration(200).add(i).add(o))}function o(n,e){var t=new n,i=new n;i.addElement(e.querySelector("ion-backdrop"));var o=new n;return o.addElement(e.querySelector(".loading-wrapper")),i.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(e).easing("ease-in-out").duration(200).add(i).add(o))}function r(n,e){var t=new n,i=new n;i.addElement(e.querySelector("ion-backdrop"));var o=new n;return o.addElement(e.querySelector(".loading-wrapper")),i.fromTo("opacity",.01,.32),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(e).easing("ease-in-out").duration(200).add(i).add(o))}function a(n,e){var t=new n,i=new n;i.addElement(e.querySelector("ion-backdrop"));var o=new n;return o.addElement(e.querySelector(".loading-wrapper")),i.fromTo("opacity",.32,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(e).easing("ease-in-out").duration(200).add(i).add(o))}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"IonLoading",function(){return l}),t.d(e,"IonLoadingController",function(){return p});var s=t(965),c=t(31),d=t(968),u=t(966),l=function(){function n(){this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return n.prototype.componentWillLoad=function(){void 0===this.spinner&&(this.spinner=this.config.get("loadingSpinner","ios"===this.mode?"lines":"crescent"))},n.prototype.onBackdropTap=function(){this.dismiss(void 0,d.a)},n.prototype.present=function(){return s.a(this,void 0,void 0,function(){var n=this;return s.c(this,function(e){switch(e.label){case 0:return[4,Object(d.c)(this,"loadingEnter",i,r,void 0)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return n.dismiss()},this.duration+10)),[2]}})})},n.prototype.dismiss=function(n,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(d.d)(this,n,e,"loadingLeave",o,a)},n.prototype.onDidDismiss=function(){return Object(d.e)(this.el,"ionLoadingDidDismiss")},n.prototype.onWillDismiss=function(){return Object(d.e)(this.el,"ionLoadingWillDismiss")},n.prototype.hostData=function(){return{style:{zIndex:4e4+this.overlayIndex},class:Object.assign({},Object(u.a)(this.cssClass),{"loading-translucent":this.translucent})}},n.prototype.render=function(){return[Object(c.b)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(c.b)("div",{class:"loading-wrapper",role:"dialog"},this.spinner&&Object(c.b)("div",{class:"loading-spinner"},Object(c.b)("ion-spinner",{name:this.spinner})),this.message&&Object(c.b)("div",{class:"loading-content"},this.message))]},Object.defineProperty(n,"is",{get:function(){return"ion-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}.loading-translucent.sc-ion-loading-ios-h   .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}(),p=function(){function n(){}return n.prototype.create=function(n){return Object(d.f)(this.doc.createElement("ion-loading"),n)},n.prototype.dismiss=function(n,e,t){return Object(d.g)(this.doc,n,e,"ion-loading",t)},n.prototype.getTop=function(){return s.a(this,void 0,void 0,function(){return s.c(this,function(n){return[2,Object(d.h)(this.doc,"ion-loading")]})})},Object.defineProperty(n,"is",{get:function(){return"ion-loading-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),n}()},965:function(n,e,t){"use strict";function i(n,e){function t(){this.constructor=n}a(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}function o(n,e,t,i){return new(t||(t=Promise))(function(o,r){function a(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(a,s)}c((i=i.apply(n,e||[])).next())})}function r(n,e){function t(n){return function(e){return i([n,e])}}function i(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(a=2&t[0]?r.return:t[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,t[1])).done)return a;switch(r=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,r=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=e.call(n,c)}catch(n){t=[6,n],r=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var o,r,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:t(0),throw:t(1),return:t(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}e.b=i,e.a=o,e.c=r;var a=function(n,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)}},966:function(n,e,t){"use strict";function i(n,e){return null!==e.closest(n)}function o(n){var e;return"string"==typeof n&&n.length>0?((e={"ion-color":!0})["ion-color-"+n]=!0,e):void 0}function r(n,e){var t;return(t={})[e]=!0,t[e+"-"+n]=void 0!==n,t}function a(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}function s(n){var e={};return a(n).forEach(function(n){return e[n]=!0}),e}function c(n,e,t,i){return d.a(this,void 0,void 0,function(){var o;return d.c(this,function(r){switch(r.label){case 0:return null==e||"#"===e[0]||u.test(e)?[3,2]:(o=n.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(e,i)];case 2:return[2,!1]}})})}t.d(e,"a",function(){return s}),t.d(e,"b",function(){return c}),t.d(e,"c",function(){return o}),t.d(e,"d",function(){return i}),t.d(e,"e",function(){return r});var d=t(965),u=/^[a-z][a-z0-9+\-.]*:/},968:function(n,e,t){"use strict";function i(n,e){var t=n.ownerDocument;o(t),Object.assign(n,e),n.classList.add("overlay-hidden");var i=h++;return n.overlayIndex=i,n.hasAttribute("id")||(n.id="ion-overlay-"+i),u(t).appendChild(n),n.componentOnReady()}function o(n){0===h&&(h=1,n.addEventListener("focusin",function(e){var t=s(n);if(t&&t.backdropDismiss&&!g(t,e.target)){var i=t.querySelector("input,button");i&&i.focus()}}),n.addEventListener("ionBackButton",function(e){var t=s(n);t&&t.backdropDismiss&&e.detail.register(100,function(){return t.dismiss(void 0,y)})}),n.addEventListener("keyup",function(e){if("Escape"===e.key){var t=s(n);t&&t.backdropDismiss&&t.dismiss(void 0,y)}}))}function r(n,e,t,i,o){var r=s(n,i,o);return r?r.dismiss(e,t):Promise.reject("overlay does not exist")}function a(n,e){var t=Array.from(u(n).children).filter(function(n){return n.overlayIndex>0});return void 0===e?t:(e=e.toUpperCase(),t.filter(function(n){return n.tagName===e}))}function s(n,e,t){var i=a(n,e);return void 0===t?i[i.length-1]:i.find(function(n){return n.id===t})}function c(n,e,t,i,o){return b.a(this,void 0,void 0,function(){var r;return b.c(this,function(a){switch(a.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),r=n.enterAnimation?n.enterAnimation:n.config.get(e,"ios"===n.mode?t:i),[4,l(n,r,n.el,o)]);case 1:return a.sent()&&n.didPresent.emit(),[2]}})})}function d(n,e,t,i,o,r,a){return b.a(this,void 0,void 0,function(){var s,c;return b.c(this,function(d){switch(d.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,d.label=1;case 1:return d.trys.push([1,3,,4]),n.willDismiss.emit({data:e,role:t}),s=n.leaveAnimation?n.leaveAnimation:n.config.get(i,"ios"===n.mode?o:r),[4,l(n,s,n.el,a)];case 2:return d.sent(),n.didDismiss.emit({data:e,role:t}),[3,4];case 3:return c=d.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function u(n){return n.querySelector("ion-app")||n.body}function l(n,e,i,o){return b.a(this,void 0,void 0,function(){var r,a,s,c;return b.c(this,function(d){switch(d.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),r=i.shadowRoot||n.el,s=n,[4,t.e(162).then(t.bind(null,970)).then(function(n){return n.create(e,r,o)})]);case 1:return a=s.animation=d.sent(),n.animation=a,n.animated&&n.config.getBoolean("animated",!0)||a.duration(0),n.keyboardClose&&a.beforeAddWrite(function(){var n=i.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,a.playAsync()];case 2:return d.sent(),c=a.hasCompleted,a.destroy(),n.animation=void 0,[2,c]}})})}function p(n,e){var t,i=new Promise(function(n){return t=n});return f(n,e,function(n){t(n.detail)}),i}function f(n,e,t){var i=function(o){n.removeEventListener(e,i),t(o)};n.addEventListener(e,i)}function m(n){return"cancel"===n||n===y}function g(n,e){for(;e;){if(e===n)return!0;e=e.parentElement}return!1}t.d(e,"a",function(){return y}),t.d(e,"b",function(){return m}),t.d(e,"c",function(){return c}),t.d(e,"d",function(){return d}),t.d(e,"e",function(){return p}),t.d(e,"f",function(){return i}),t.d(e,"g",function(){return r}),t.d(e,"h",function(){return s});var b=t(965),h=0,y="backdrop"}});
//# sourceMappingURL=83.6155293e.chunk.js.map