webpackJsonp([3],{938:function(e,t,n){"use strict";function o(e,t,n){var o="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,u=window.innerWidth,l=window.innerHeight,d=n&&n.target&&n.target.getBoundingClientRect(),p=null!=d&&"top"in d?d.top:l/2-c/2,v=null!=d&&"left"in d?d.left:u/2,m=d&&d.width||0,h=d&&d.height||0,b=t.querySelector(".popover-arrow"),y=b.getBoundingClientRect(),g=y.width,w=y.height;null==d&&(b.style.display="none");var x={top:p+h,left:v+m/2-g/2},E={top:p+h+(w-1),left:v+m/2-s/2},k=!1,P=!1;E.left<f+25?(k=!0,E.left=f):s+f+E.left+25>u&&(P=!0,E.left=u-s-f,r="right"),p+h+c>l&&p-c>0?(x.top=p-(w+1),E.top=p-c-(w-1),t.className=t.className+" popover-bottom",o="bottom"):p+h+c>l&&(i.style.bottom=f+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=E.top+"px",i.style.left=E.left+"px",k&&(i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"),P&&(i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=o+" "+r;var D=new e,O=new e;O.addElement(t.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var j=new e;return j.addElement(t.querySelector(".popover-wrapper")),j.fromTo("opacity",.01,1),Promise.resolve(D.addElement(t).easing("ease").duration(100).add(O).add(j))}function r(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),o.fromTo("opacity",.08,0),Promise.resolve(n.addElement(t).easing("ease").duration(500).add(o).add(r))}function i(e,t,n){var o="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,u=window.innerWidth,l=window.innerHeight,d=n&&n.target&&n.target.getBoundingClientRect(),p=null!=d&&"top"in d?d.top:l/2-c/2,f="rtl"===document.dir,m=d&&d.height||0,h={top:p,left:null!=d&&"left"in d?f?d.left-s+d.width:d.left:u/2-s/2};h.left<v?h.left=v:s+v+h.left>u&&(h.left=u-s-v,r="right"),p+m+c>l&&p-c>0?(h.top=p-c,t.className=t.className+" popover-bottom",o="bottom"):p+m+c>l&&(i.style.bottom=v+"px"),i.style.top=h.top+"px",i.style.left=h.left+"px",i.style.transformOrigin=o+" "+r;var b=new e,y=new e;y.addElement(t.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.32);var g=new e;g.addElement(t.querySelector(".popover-wrapper")),g.fromTo("opacity",.01,1);var w=new e;w.addElement(t.querySelector(".popover-content")),w.fromTo("scale",.001,1);var x=new e;return x.addElement(t.querySelector(".popover-viewport")),x.fromTo("opacity",.01,1),Promise.resolve(b.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(g).add(w).add(x))}function a(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),o.fromTo("opacity",.32,0),Promise.resolve(n.addElement(t).easing("ease").duration(500).add(o).add(r))}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"IonPopover",function(){return m}),n.d(t,"IonPopoverController",function(){return b});var s=n(965),c=n(31),u=n(968),l=n(966),d=n(972),p=(n(971),n(974)),f=5,v=12,m=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,u.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,n=h[e.type];if(t&&n){var o=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}},e.prototype.present=function(){return s.a(this,void 0,void 0,function(){var e,t,n;return s.c(this,function(r){switch(r.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),n=this,[4,Object(d.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return n.usersElement=r.sent(),[4,Object(p.a)(this.usersElement)];case 2:return r.sent(),[2,Object(u.c)(this,"popoverEnter",o,i,this.event)]}})})},e.prototype.dismiss=function(e,t){return s.a(this,void 0,void 0,function(){var n;return s.c(this,function(o){switch(o.label){case 0:return[4,Object(u.d)(this,e,t,"popoverLeave",r,a,this.event)];case 1:return(n=o.sent())?[4,Object(d.b)(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,n]}})})},e.prototype.onDidDismiss=function(){return Object(u.e)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(u.e)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(l.a)(this.cssClass),{"popover-translucent":this.translucent})}},e.prototype.render=function(){return[Object(c.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(c.b)("div",{class:"popover-wrapper"},Object(c.b)("div",{class:"popover-arrow"}),Object(c.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios   .popover-arrow.sc-ion-popover-ios:after{right:3px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},b=function(){function e(){}return e.prototype.create=function(e){return Object(u.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,n){return Object(u.g)(this.doc,e,t,"ion-popover",n)},e.prototype.getTop=function(){return s.a(this,void 0,void 0,function(){return s.c(this,function(e){return[2,Object(u.h)(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()},965:function(e,t,n){"use strict";function o(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function r(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})}function i(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(a=2&n[0]?i.return:n[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],i=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}t.b=o,t.a=r,t.c=i;var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}},966:function(e,t,n){"use strict";function o(e,t){return null!==t.closest(e)}function r(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}function i(e,t){var n;return(n={})[t]=!0,n[t+"-"+e]=void 0!==e,n}function a(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}function s(e){var t={};return a(e).forEach(function(e){return t[e]=!0}),t}function c(e,t,n,o){return u.a(this,void 0,void 0,function(){var r;return u.c(this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||l.test(t)?[3,2]:(r=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return i.sent(),[2,r.push(t,o)];case 2:return[2,!1]}})})}n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return i});var u=n(965),l=/^[a-z][a-z0-9+\-.]*:/},968:function(e,t,n){"use strict";function o(e,t){var n=e.ownerDocument;r(n),Object.assign(e,t),e.classList.add("overlay-hidden");var o=b++;return e.overlayIndex=o,e.hasAttribute("id")||(e.id="ion-overlay-"+o),l(n).appendChild(e),e.componentOnReady()}function r(e){0===b&&(b=1,e.addEventListener("focusin",function(t){var n=s(e);if(n&&n.backdropDismiss&&!m(n,t.target)){var o=n.querySelector("input,button");o&&o.focus()}}),e.addEventListener("ionBackButton",function(t){var n=s(e);n&&n.backdropDismiss&&t.detail.register(100,function(){return n.dismiss(void 0,y)})}),e.addEventListener("keyup",function(t){if("Escape"===t.key){var n=s(e);n&&n.backdropDismiss&&n.dismiss(void 0,y)}}))}function i(e,t,n,o,r){var i=s(e,o,r);return i?i.dismiss(t,n):Promise.reject("overlay does not exist")}function a(e,t){var n=Array.from(l(e).children).filter(function(e){return e.overlayIndex>0});return void 0===t?n:(t=t.toUpperCase(),n.filter(function(e){return e.tagName===t}))}function s(e,t,n){var o=a(e,t);return void 0===n?o[o.length-1]:o.find(function(e){return e.id===n})}function c(e,t,n,o,r){return h.a(this,void 0,void 0,function(){var i;return h.c(this,function(a){switch(a.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),i=e.enterAnimation?e.enterAnimation:e.config.get(t,"ios"===e.mode?n:o),[4,d(e,i,e.el,r)]);case 1:return a.sent()&&e.didPresent.emit(),[2]}})})}function u(e,t,n,o,r,i,a){return h.a(this,void 0,void 0,function(){var s,c;return h.c(this,function(u){switch(u.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,u.label=1;case 1:return u.trys.push([1,3,,4]),e.willDismiss.emit({data:t,role:n}),s=e.leaveAnimation?e.leaveAnimation:e.config.get(o,"ios"===e.mode?r:i),[4,d(e,s,e.el,a)];case 2:return u.sent(),e.didDismiss.emit({data:t,role:n}),[3,4];case 3:return c=u.sent(),console.error(c),[3,4];case 4:return e.el.remove(),[2,!0]}})})}function l(e){return e.querySelector("ion-app")||e.body}function d(e,t,o,r){return h.a(this,void 0,void 0,function(){var i,a,s,c;return h.c(this,function(u){switch(u.label){case 0:return e.animation?(e.animation.destroy(),e.animation=void 0,[2,!1]):(o.classList.remove("overlay-hidden"),i=o.shadowRoot||e.el,s=e,[4,n.e(162).then(n.bind(null,970)).then(function(e){return e.create(t,i,r)})]);case 1:return a=s.animation=u.sent(),e.animation=a,e.animated&&e.config.getBoolean("animated",!0)||a.duration(0),e.keyboardClose&&a.beforeAddWrite(function(){var e=o.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,a.playAsync()];case 2:return u.sent(),c=a.hasCompleted,a.destroy(),e.animation=void 0,[2,c]}})})}function p(e,t){var n,o=new Promise(function(e){return n=e});return f(e,t,function(e){n(e.detail)}),o}function f(e,t,n){var o=function(r){e.removeEventListener(t,o),n(r)};e.addEventListener(t,o)}function v(e){return"cancel"===e||e===y}function m(e,t){for(;t;){if(t===e)return!0;t=t.parentElement}return!1}n.d(t,"a",function(){return y}),n.d(t,"b",function(){return v}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return p}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"h",function(){return s});var h=n(965),b=0,y="backdrop"},971:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return s});var o="ionViewWillEnter",r="ionViewDidEnter",i="ionViewWillLeave",a="ionViewDidLeave",s="ionViewWillUnload"},972:function(e,t,n){"use strict";function o(e,t,n,o,r){return i.a(this,void 0,void 0,function(){var a;return i.c(this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,o)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,o&&o.forEach(function(e){return a.classList.add(e)}),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function r(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var i=n(965)},974:function(e,t,n){"use strict";function o(e){return new Promise(function(t,n){e.queue.write(function(){r(e),i(e).then(function(n){n.animation&&n.animation.destroy(),a(e),t(n)},function(t){a(e),n(t)})})})}function r(e){var t=e.enteringEl,n=e.leavingEl;g(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),y(t,!1),n&&y(n,!1)}function i(e){return w.a(this,void 0,void 0,function(){var t;return w.c(this,function(n){switch(n.label){case 0:return[4,s(e)];case 1:return[2,(t=n.sent())?c(t,e):u(e)]}})})}function a(e){var t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function s(e){return w.a(this,void 0,void 0,function(){var t;return w.c(this,function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,E()]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,k()];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}})})}function c(e,t){return w.a(this,void 0,void 0,function(){var o;return w.c(this,function(r){switch(r.label){case 0:return[4,l(t,!0)];case 1:return r.sent(),[4,n.e(162).then(n.bind(null,970)).then(function(n){return n.create(e,t.baseEl,t)})];case 2:return o=r.sent(),f(t.enteringEl,t.leavingEl),[4,p(o,t)];case 3:return r.sent(),t.progressCallback&&t.progressCallback(void 0),o.hasCompleted&&v(t.enteringEl,t.leavingEl),[2,{hasCompleted:o.hasCompleted,animation:o}]}})})}function u(e){return w.a(this,void 0,void 0,function(){var t,n;return w.c(this,function(o){switch(o.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,l(e,!1)];case 1:return o.sent(),f(t,n),v(t,n),[2,{hasCompleted:!0}]}})})}function l(e,t){return w.a(this,void 0,void 0,function(){var n;return w.c(this,function(o){switch(o.label){case 0:return n=(void 0!==e.deepWait?e.deepWait:t)?[b(e.enteringEl),b(e.leavingEl)]:[h(e.enteringEl),h(e.leavingEl)],[4,Promise.all(n)];case 1:return o.sent(),[4,d(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}})})}function d(e,t){return w.a(this,void 0,void 0,function(){return w.c(this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function p(e,t){var n=t.progressCallback,o=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),o}function f(e,t){m(t,x.a),m(e,x.b)}function v(e,t){m(e,x.c),m(t,x.d)}function m(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}}function h(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function b(e){return w.a(this,void 0,void 0,function(){var t;return w.c(this,function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(b))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function y(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function g(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")}n.d(t,"a",function(){return b}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return y});var w=n(965),x=n(971),E=function(){return n.e(171).then(n.bind(null,975))},k=function(){return n.e(170).then(n.bind(null,976))}}});
//# sourceMappingURL=3.3953008a.chunk.js.map