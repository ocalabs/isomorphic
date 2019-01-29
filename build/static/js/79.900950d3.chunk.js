webpackJsonp([79,161],{824:function(t,e,n){"use strict";function i(t,e,n){return Math.max(0,e!==n?-t:t)}function r(t,e,n,i){return n?e>=t.innerWidth-i:e<=i}function o(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}function s(t,e,n){var i,r,s=n.width+v;n.isEndSide?(i=s+"px",r="0px"):(i=-s+"px",r="0px");var a=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,r),u=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return o(t).then(function(t){return t.add(a).add(u)})}function a(t,e,n){var i,r,s=n.width;n.isEndSide?(i=-s+"px",r=s+"px"):(i=s+"px",r=-s+"px");var a=(new t).addElement(n.menuInnerEl).fromTo("translateX",r,"0px"),u=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),c=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return o(t).then(function(t){return t.add(a).add(c).add(u)})}function u(t,e,n){var i=n.width*(n.isEndSide?-1:1)+"px",r=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return o(t).then(function(t){return t.add(r)})}function c(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"IonMenu",function(){return f}),n.d(e,"IonMenuButton",function(){return y}),n.d(e,"IonMenuController",function(){return w}),n.d(e,"IonMenuToggle",function(){return S});var l=n(965),d=n(31),h=n(967),p=n(969),f=function(){function t(){this.lastOnEnd=0,this.blocker=p.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(h.g)(this.win,this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return l.a(this,void 0,void 0,function(){var t,e,i,r,o,s=this;return l.c(this,function(a){switch(a.label){case 0:return void 0===this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer?(this.disabled=!0,[2]):(e=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(t){return t._getInstance()})]);case 1:return t=e.menuCtrl=a.sent(),i=this.el.parentNode,(r=void 0!==this.contentId?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]"))&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),o=this,[4,new Promise(function(t){t()}).then(n.bind(null,969))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 2:return o.gesture=a.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return s.canStart(t)},onWillStart:function(){return s.onWillStart()},onStart:function(){return s.onStart()},onMove:function(t){return s.onMove(t)},onEnd:function(t){return s.onEnd(t)}}),this.updateState(),[2]}})})},t.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),l.a(this,void 0,void 0,function(){return l.c(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}})})},t.prototype.loadAnimation=function(){return l.a(this,void 0,void 0,function(){var t,e;return l.c(this,function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(t,e){return l.a(this,void 0,void 0,function(){var n;return l.c(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&r(this.win,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=i(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,r=this.isEndSide,o=i(t.deltaX,n,r),s=this.width,a=o/s,u=t.velocityX,c=s/2,l=u>=0&&(u>.2||t.deltaX>c),d=u<=0&&(u<-.2||t.deltaX<-c),h=n?r?l:d:r?d:l,p=!n&&h;n&&!h&&(p=!0);var f=(h?1-a:a)*s,m=0;if(f>5){var b=f/Math.abs(u);m=Math.min(b,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(p)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(h,a,m)}},t.prototype.beforeAnimation=function(t){this.el.classList.add(m),this.backdropEl&&this.backdropEl.classList.add(b),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"click",t),t?(this.contentEl&&this.contentEl.classList.add(g),this.ionDidOpen.emit()):(this.el.classList.remove(m),this.contentEl&&this.contentEl.classList.remove(g),this.backdropEl&&this.backdropEl.classList.remove(b),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this)},t.prototype.forceClosing=function(){this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},t.prototype.hostData=function(){var t,e=this.isEndSide,n=this.disabled,i=this.isPaneVisible;return{role:"complementary",class:(t={},t["menu-type-"+this.type]=!0,t["menu-enabled"]=!n,t["menu-side-end"]=e,t["menu-side-start"]=!e,t["menu-pane-visible"]=i,t)}},t.prototype.render=function(){var t=this;return[Object(d.b)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(d.b)("slot",null)),Object(d.b)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(t,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionWillOpen",method:"ionWillOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionWillClose",method:"ionWillClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidOpen",method:"ionDidOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidClose",method:"ionDidClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner{left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),m="show-menu",b="show-backdrop",g="menu-content-open",y=function(){function t(){this.autoHide=!0}return t.prototype.hostData=function(){return{class:{button:!0,"ion-activatable":!0}}},t.prototype.render=function(){var t=this.config.get("menuIcon","menu");return Object(d.b)("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(d.b)("button",{type:"button"},Object(d.b)("slot",null,Object(d.b)("ion-icon",{icon:t,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&Object(d.b)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:none;background:transparent;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button,ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0}ion-icon{padding-top:0;padding-bottom:0;pointer-events:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host{--color:var(--ion-color-primary,#3880ff)}:host(.activated){opacity:.4}button{padding-left:5px;padding-right:5px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){button{padding-left:unset;padding-right:unset;-webkit-padding-start:5px;padding-inline-start:5px;-webkit-padding-end:5px;padding-inline-end:5px}}ion-icon{font-size:31px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),v=8,w=function(){function t(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",u),this.registerAnimation("push",a),this.registerAnimation("overlay",s)}return t.prototype.open=function(t){return l.a(this,void 0,void 0,function(){var e;return l.c(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.open()]:[2,!1]}})})},t.prototype.close=function(t){return l.a(this,void 0,void 0,function(){var e;return l.c(this,function(n){switch(n.label){case 0:return[4,void 0!==t?this.get(t):this.getOpen()];case 1:return void 0!==(e=n.sent())?[2,e.close()]:[2,!1]}})})},t.prototype.toggle=function(t){return l.a(this,void 0,void 0,function(){var e;return l.c(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.toggle()]:[2,!1]}})})},t.prototype.enable=function(t,e){return l.a(this,void 0,void 0,function(){var n;return l.c(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.disabled=!t),[2,n]}})})},t.prototype.swipeGesture=function(t,e){return l.a(this,void 0,void 0,function(){var n;return l.c(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.swipeGesture=t),[2,n]}})})},t.prototype.isOpen=function(t){return l.a(this,void 0,void 0,function(){var e;return l.c(this,function(n){switch(n.label){case 0:return null==t?[3,2]:[4,this.get(t)];case 1:return[2,void 0!==(e=n.sent())&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(e=n.sent())]}})})},t.prototype.isEnabled=function(t){return l.a(this,void 0,void 0,function(){var e;return l.c(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,!e.disabled]:[2,!1]}})})},t.prototype.get=function(t){return l.a(this,void 0,void 0,function(){var e,n;return l.c(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:return i.sent(),"start"===t||"end"===t?(e=this.find(function(e){return e.side===t&&!e.disabled}))?[2,e]:[2,this.find(function(e){return e.side===t})]:null!=t?[2,this.find(function(e){return e.menuId===t})]:(n=this.find(function(t){return!t.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0]}})})},t.prototype.getOpen=function(){return l.a(this,void 0,void 0,function(){return l.c(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getOpenSync()]}})})},t.prototype.getMenus=function(){return l.a(this,void 0,void 0,function(){return l.c(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getMenusSync()]}})})},t.prototype.isAnimating=function(){return l.a(this,void 0,void 0,function(){return l.c(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.isAnimatingSync()]}})})},t.prototype.registerAnimation=function(t,e){this.menuAnimations.set(t,e)},t.prototype._getInstance=function(){return Promise.resolve(this)},t.prototype._register=function(t){var e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))},t.prototype._unregister=function(t){var e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)},t.prototype._setActiveMenu=function(t){var e=t.side;this.menus.filter(function(n){return n.side===e&&n!==t}).forEach(function(t){return t.disabled=!0})},t.prototype._setOpen=function(t,e,n){return l.a(this,void 0,void 0,function(){var i;return l.c(this,function(r){switch(r.label){case 0:return this.isAnimatingSync()?[2,!1]:e?[4,this.getOpen()]:[3,3];case 1:return(i=r.sent())&&t.el!==i?[4,i.setOpen(!1,!1)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,t._setOpen(e,n)]}})})},t.prototype._createAnimation=function(t,e){return l.a(this,void 0,void 0,function(){var i,r;return l.c(this,function(o){switch(o.label){case 0:if(!(i=this.menuAnimations.get(t)))throw new Error("animation not registered");return[4,n.e(162).then(n.bind(null,970)).then(function(t){return t.create(i,null,e)})];case 1:return r=o.sent(),this.config.getBoolean("animated",!0)||r.duration(0),[2,r]}})})},t.prototype.getOpenSync=function(){return this.find(function(t){return t._isOpen})},t.prototype.getMenusSync=function(){return this.menus.map(function(t){return t.el})},t.prototype.isAnimatingSync=function(){return this.menus.some(function(t){return t.isAnimating})},t.prototype.find=function(t){var e=this.menus.find(t);if(void 0!==e)return e.el},t.prototype.waitUntilReady=function(){return Promise.all(Array.from(this.doc.querySelectorAll("ion-menu")).map(function(t){return t.componentOnReady()}))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_getInstance:{method:!0},close:{method:!0},config:{context:"config"},doc:{context:"document"},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),S=function(){function t(){this.visible=!1,this.autoHide=!0}return t.prototype.componentDidLoad=function(){return this.updateVisibility()},t.prototype.onClick=function(){return l.a(this,void 0,void 0,function(){var t;return l.c(this,function(e){switch(e.label){case 0:return[4,c(this.doc)];case 1:return(t=e.sent())?[4,t.get(this.menu)]:[3,3];case 2:e.sent()&&t.toggle(this.menu),e.label=3;case 3:return[2]}})})},t.prototype.updateVisibility=function(){return l.a(this,void 0,void 0,function(){var t,e,n;return l.c(this,function(i){switch(i.label){case 0:return[4,c(this.doc)];case 1:return(t=i.sent())?[4,t.get(this.menu)]:[3,5];case 2:return e=i.sent(),(n=e)?[4,e.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},t.prototype.hostData=function(){var t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}},t.prototype.render=function(){return Object(d.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}()},965:function(t,e,n){"use strict";function i(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function r(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})}function o(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,o&&(s=2&n[0]?o.return:n[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],o=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,o,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a}e.b=i,e.a=r,e.c=o;var s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}},967:function(t,e,n){"use strict";function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function r(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function s(t,e,n,i,o){if(t||r(e)){var s=e.querySelector("input.aux-input");s||((s=e.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),e.appendChild(s)),s.disabled=o,s.name=n,s.value=i||""}}function a(t,e,n){return Math.max(t,Math.min(e,n))}function u(t){return t.timeStamp||Date.now()}function c(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var n=t._original||t;return{_original:t,emit:h(n.emit.bind(n),e)}}function h(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return a}),n.d(e,"i",function(){return h}),n.d(e,"j",function(){return c})},969:function(t,e,n){"use strict";function i(t,e,n,i){var o,s,a=r(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(o="addEventListener",s="removeEventListener"),t[o](e,n,a),function(){t[s](e,n,a)}}function r(t){if(void 0===h)try{var e=Object.defineProperty({},"passive",{get:function(){h=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){h=!1}return!!h}function o(t,e,n,r,o){function a(r){O=Date.now()+y,e(r)&&(!b&&n&&(b=i(t,"touchmove",n,o)),g||(g=i(t,"touchend",c,o)),v||(v=i(t,"touchcancel",c,o)))}function u(r){O>Date.now()||e(r)&&(!S&&n&&(S=i(s(t),"mousemove",n,o)),x||(x=i(s(t),"mouseup",l,o)))}function c(t){d(),r&&r(t)}function l(t){h(),r&&r(t)}function d(){b&&b(),g&&g(),v&&v(),b=g=v=void 0}function h(){S&&S(),x&&x(),S=x=void 0}function p(){d(),h()}function f(e){e?(m&&m(),w&&w(),m=w=void 0,p()):(m||(m=i(t,"touchstart",a,o)),w||(w=i(t,"mousedown",u,o)))}var m,b,g,v,w,S,x,O=0;return{setDisabled:f,stop:p,destroy:function(){f(!0),r=n=e=void 0}}}function s(t){return t instanceof Document?t:t.ownerDocument}function a(t,e,n){var i=n*(Math.PI/180),r="x"===t,o=Math.cos(i),s=e*e,a=0,u=0,c=!1,l=0;return{start:function(t,e){a=t,u=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var n=t-a,i=e-u,d=n*n+i*i;if(d<s)return!1;var h=Math.sqrt(d),p=(r?n:i)/h;return l=p>o?1:p<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function u(t){function e(){E&&(C=!1,y&&y(S))}function n(){return!(k&&!k.capture()||(E=!0,A=!1,S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp,p?p(S).then(i):i(),0))}function i(){f&&f(S),A=!0}function r(){E=!1,_=!1,C=!1,A=!0,k.release()}function s(t){var e=E,n=A;r(),n&&(c(S,t),e?m&&m(S):b&&b(S))}var u=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),h=u.canStart,p=u.onWillStart,f=u.onStart,m=u.onEnd,b=u.notCaptured,y=u.onMove,v=u.threshold,w=u.queue,S={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},x=o(u.el,function(t){var e=d(t);return!(_||!A)&&(l(t,S),S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp=e,S.velocityX=S.velocityY=S.deltaX=S.deltaY=0,S.event=t,(!h||!1!==h(S))&&(k.release(),!!k.start()&&(_=!0,0===v?n():(O.start(S.startX,S.startY),!0))))},function(t){E?!C&&A&&(C=!0,c(S,t),w.write(e)):(c(S,t),O.detect(S.currentX,S.currentY)&&(O.isGesture()&&n()||(r(),x.stop(),b&&b(S))))},s,{capture:!1}),O=a(u.direction,u.threshold,u.maxAngle),k=g.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=!1,_=!1,A=!0,C=!1;return{setDisabled:function(t){t&&E&&s(void 0),x.setDisabled(t)},destroy:function(){k.destroy(),x.destroy()}}}function c(t,e){if(e){var n=t.currentX,i=t.currentY,r=t.timeStamp;l(e,t);var o=t.currentX,s=t.currentY,a=(t.timeStamp=d(e))-r;if(a>0&&a<100){var u=(s-i)/a;t.velocityX=(o-n)/a*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}}function l(t,e){var n=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];n=o.clientX,i=o.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i}function d(t){return t.timeStamp||Date.now()}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"createGesture",function(){return u}),n.d(e,"GESTURE_CONTROLLER",function(){return g});var h,p=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new f(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new m(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach(function(t){r=Math.max(r,t)}),r===n){this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(b)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(b)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return++this.gestureId},t}(),f=function(){function t(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),m=function(){function t(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),b="backdrop-no-scroll",g=new p(document),y=2e3}});
//# sourceMappingURL=79.900950d3.chunk.js.map