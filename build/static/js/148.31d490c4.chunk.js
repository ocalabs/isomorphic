webpackJsonp([148],{855:function(t,e,n){"use strict";function i(t,e,n,i){for(var r=0,o=t;r<o.length;r++){var s=o[r];s.change=w,s.d=!0}for(var l=[],a=i.offset+i.length,h=i.offset;h<a;h++)!function(i){var r=n[i],o=t.find(function(t){return t.d&&t.cell===r});if(o){var s=e[i];s!==o.top&&(o.top=s,o.change=H),o.d=!1}else l.push(r)}(h);for(var c=t.filter(function(t){return t.d}),u=0,p=l;u<p.length;u++)!function(n){var i=c.find(function(t){return t.d&&t.cell.type===n.type}),r=n.index;i?(i.d=!1,i.change=S,i.cell=n,i.top=e[r]):t.push({d:!1,cell:n,visible:!0,change:S,top:e[r]})}(p[u]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=H,t.top=-9999})}function r(t,e,n,i){for(var r,s=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),l=s.length,a=0;a<n.length;a++){var h=n[a],c=h.cell;if(h.change===S){if(a<l)e(r=s[a],c,a);else{var u=o(t,c.type);(r=e(u,c,a)||u).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=s[a];h.change!==w&&(r.style.transform="translate3d(0,"+h.top+"px,0)");var p=c.visible;h.visible!==p&&(p?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=p),c.reads>0&&(i(c,r),c.reads--)}}function o(t,e){var n=s(t,e);return n&&t.ownerDocument?t.ownerDocument.importNode(n.content,!0).children[0]:null}function s(t,e){switch(e){case v:return t.querySelector("template:not([name])");case b:return t.querySelector("template[name=header]");case x:return t.querySelector("template[name=footer]")}}function l(t,e,n){return{top:Math.max(t-n,0),bottom:t+e+n}}function a(t,e,n){for(var i=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>i);o++);for(var s=Math.max(o-n-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+n,t.length)-s}}function h(t,e,n){return t<=n.offset+n.length||e.offset!==n.offset||e.length!==n.length}function c(t,e){return 0===e?0:e===(t[t.length-1].index||0)+1?t.length:t.findIndex(function(t){return t.index===e})}function u(t,e,n){if(0===n&&e.length>=t.length)return e;for(var i=0;i<e.length;i++)t[i+n]=e[i];return t}function p(t,e,n,i,r,o,s,l,a,h){for(var c=[],u=h+a,p=a;p<u;p++){var d,f=t[p];n&&null!=(d=n(f,p,t))&&c.push({i:l++,type:b,value:d,index:p,height:r,reads:I,visible:!1}),c.push({i:l++,type:v,value:f,index:p,height:e?e(f,p):s,reads:e?0:I,visible:!!e}),i&&null!=(d=i(f,p,t))&&c.push({i:l++,type:x,value:d,index:p,height:o,reads:2,visible:!1})}return c}function d(t,e,n){for(var i=t[n],r=n;r<t.length;r++)t[r]=i,i+=e[r].height;return i}function f(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var n=new Uint32Array(e);return n.set(t),n}return t.subarray(0,e)}function g(t,e,n){var i=e.find(function(e){return e.type===v&&e.index===t});return i?n[i.i]:-1}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"IonVirtualScroll",function(){return E});var m=n(965),y=n(31),v="item",b="header",x="footer",w=0,H=1,S=2,I=2,E=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return m.a(this,void 0,void 0,function(){var t,e;return m.c(this,function(n){switch(n.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return n.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=n.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(g(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){if(void 0===e&&(e=-1),this.items){var n=-1===e?this.items.length-t:e,i=c(this.cells,t),r=p(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,i,t,n);this.cells=u(this.cells,r,i),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.checkEnd=function(){this.items&&this.checkRange(this.lastItemLen)},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,n=0,i=this.el;i&&i!==t;)n+=i.offsetTop,i=i.parentElement;this.viewportOffset=n,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=l(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),n=this.getHeightIndex(),o=a(n,e,2);h(t,this.range,o)&&(this.range=o,i(this.virtualDom,n,this.cells,o),this.nodeRender?r(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var n=this,i=function(){if(e.$ionCell===t){var i=n.win.getComputedStyle(e),r=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));n.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()},t.prototype.setCellHeight=function(t,e){var n=t.i;t===this.cells[n]&&(t.visible=!0,t.height!==e&&(t.height=e,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=p(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=f(this.heightIndex,this.cells.length),this.totalHeight=d(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell,n=e.value,i=e.index;switch(e.type){case v:return this.renderItem(n,i);case b:return this.renderHeader(n,i);case x:return this.renderFooter(n,i)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.render=function(){var t=this;if(this.renderItem)return Object(y.b)(D,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},checkEnd:{method:!0},checkRange:{method:!0},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),D=function(t,e,n){var i=t.dom;return n.map(e,function(t,e){var n=i[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",n.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},r,{class:o,style:Object.assign({},r.style,{transform:"translate3d(0,"+n.top+"px,0)"})})})})}},965:function(t,e,n){"use strict";function i(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function r(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{a(i.next(t))}catch(t){o(t)}}function l(t){try{a(i.throw(t))}catch(t){o(t)}}function a(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,l)}a((i=i.apply(t,e||[])).next())})}function o(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(s=2&n[0]?o.return:n[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],o=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,o,s,l,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l}e.b=i,e.a=r,e.c=o;var s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}}});
//# sourceMappingURL=148.31d490c4.chunk.js.map