webpackJsonp([146],{953:function(t,n,e){"use strict";function i(t){t.classList.add("fade-out"),setTimeout(function(){t.remove()},200)}Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"IonRippleEffect",function(){return o});var a=e(965),o=function(){function t(){this.type="bounded"}return t.prototype.addRipple=function(t,n){return a.a(this,void 0,void 0,function(){var e=this;return a.c(this,function(a){return[2,new Promise(function(a){e.queue.read(function(){var o=e.el.getBoundingClientRect(),u=o.width,f=o.height,l=Math.sqrt(u*u+f*f),s=Math.max(f,u),p=e.unbounded?s:l+r,d=Math.floor(s*c),m=p/d,b=t-o.left,y=n-o.top;e.unbounded&&(b=.5*u,y=.5*f);var w=b-.5*d,h=y-.5*d,v=.5*u-b,g=.5*f-y;e.queue.write(function(){var t=e.win.document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=h+"px",n.left=w+"px",n.width=n.height=d+"px",n.setProperty("--final-scale",""+m),n.setProperty("--translate-end",v+"px, "+g+"px"),(e.el.shadowRoot||e.el).appendChild(t),setTimeout(function(){a(function(){i(t)})},325)})})})]})})},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),t.prototype.hostData=function(){return{role:"presentation",class:{unbounded:this.unbounded}}},Object.defineProperty(t,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),t}(),r=10,c=.5},965:function(t,n,e){"use strict";function i(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function a(t,n,e,i){return new(e||(e=Promise))(function(a,o){function r(t){try{u(i.next(t))}catch(t){o(t)}}function c(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?a(t.value):new e(function(n){n(t.value)}).then(r,c)}u((i=i.apply(t,n||[])).next())})}function o(t,n){function e(t){return function(n){return i([t,n])}}function i(e){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,o&&(r=2&e[0]?o.return:e[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,e[1])).done)return r;switch(o=0,r&&(e=[2&e[0],r.value]),e[0]){case 0:case 1:r=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,o=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(r=u.trys,!(r=r.length>0&&r[r.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!r||e[1]>r[0]&&e[1]<r[3])){u.label=e[1];break}if(6===e[0]&&u.label<r[1]){u.label=r[1],r=e;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(e);break}r[2]&&u.ops.pop(),u.trys.pop();continue}e=n.call(t,u)}catch(t){e=[6,t],o=0}finally{a=r=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}var a,o,r,c,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:e(0),throw:e(1),return:e(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}n.b=i,n.a=a,n.c=o;var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)}}});
//# sourceMappingURL=146.a768b557.chunk.js.map