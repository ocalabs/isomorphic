webpackJsonp([130],{839:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"IonText",function(){return u});var r=e(31),o=e(966),u=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(o.c)(this.color)}},t.prototype.render=function(){return Object(r.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-text"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".ion-color.sc-ion-text-h{color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),t}()},965:function(t,n,e){"use strict";function r(t,n){function e(){this.constructor=t}c(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n,e,r){return new(e||(e=Promise))(function(o,u){function c(t){try{a(r.next(t))}catch(t){u(t)}}function i(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(c,i)}a((r=r.apply(t,n||[])).next())})}function u(t,n){function e(t){return function(n){return r([t,n])}}function r(e){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,u&&(c=2&e[0]?u.return:e[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,e[1])).done)return c;switch(u=0,c&&(e=[2&e[0],c.value]),e[0]){case 0:case 1:c=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,u=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(c=a.trys,!(c=c.length>0&&c[c.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!c||e[1]>c[0]&&e[1]<c[3])){a.label=e[1];break}if(6===e[0]&&a.label<c[1]){a.label=c[1],c=e;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(e);break}c[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(t,a)}catch(t){e=[6,t],u=0}finally{o=c=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}var o,u,c,i,a={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:e(0),throw:e(1),return:e(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i}n.b=r,n.a=o,n.c=u;var c=function(t,n){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)}},966:function(t,n,e){"use strict";function r(t,n){return null!==n.closest(t)}function o(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function u(t,n){var e;return(e={})[n]=!0,e[n+"-"+t]=void 0!==t,e}function c(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}function i(t){var n={};return c(t).forEach(function(t){return n[t]=!0}),n}function a(t,n,e,r){return l.a(this,void 0,void 0,function(){var o;return l.c(this,function(u){switch(u.label){case 0:return null==n||"#"===n[0]||f.test(n)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return u.sent(),[2,o.push(n,r)];case 2:return[2,!1]}})})}e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return r}),e.d(n,"e",function(){return u});var l=e(965),f=/^[a-z][a-z0-9+\-.]*:/}});
//# sourceMappingURL=130.ad76a3e3.chunk.js.map