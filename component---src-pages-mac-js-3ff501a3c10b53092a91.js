(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{uqSU:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return jt}));var r=e("q1tI"),o=e.n(r);var i={data:""},a=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||i},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,u=/\/\*[^]*?\*\/|\s\s+|\n/g,s=function t(n,e){var r,o="",i="",a="",c=function(c){var s=n[c];"object"==typeof s?(r=e?e.replace(/([^,])+/g,(function(t){return c.replace(/([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):c,i+="@"==c[0]?"f"==c[1]?t(s,c):c+"{"+t(s,"k"==c[1]?"":e)+"}":t(s,r)):"@"==c[0]&&"i"==c[1]?o=c+" "+s+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(c,s):c+":"+s+";"),u=c};for(var u in n)c(u);return a[0]?o+(r=e?e+"{"+a+"}":a)+i:o+i},f={},l=function(t,n,e,r,o){var i,a,l,d="object"==typeof t?function t(n){var e="";for(var r in n)e+=r+("object"==typeof n[r]?t(n[r]):n[r]);return e}(t):t,p=f[d]||(f[d]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(d));if(!f[p]){var m="object"==typeof t?t:function(t){for(var n,e=[{}];n=c.exec(t.replace(u,""));)n[4]&&e.shift(),n[3]?e.unshift(e[0][n[3]]=e[0][n[3]]||{}):n[4]||(e[0][n[1]]=n[2]);return e[0]}(t);f[p]=s(o?(l=m,(a="@keyframes "+p)in(i={})?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l,i):m,e?"":"."+p)}return function(t,n,e){-1==n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(f[p],n,r),p},d=function(t,n,e){return t.reduce((function(t,r,o){var i=n[o];if(i&&i.call){var a=i(e),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=c?"."+c:a&&"object"==typeof a?a.props?"":s(a,""):a}return t+r+(null==i?"":i)}),"")};function p(t){var n=this||{},e=t.call?t(n.p):t;return l(e.unshift?e.raw?d(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return e?Object.assign(t,e.call?e(n.p):e):t}),{}):e,a(n.target),n.g,n.o,n.k)}p.bind({g:1});var m,v,y,b=p.bind({k:1});function g(t,n){var e=this||{};return function(){var r=arguments;function o(i,a){var c=Object.assign({},i),u=c.className||o.className;e.p=Object.assign({theme:v&&v()},c),e.o=/ *go\d+/.test(u),c.className=p.apply(e,r)+(u?" "+u:""),n&&(c.ref=a);var s=c.as||t;return y&&s[0]&&y(c),m(s,c)}return n?n(o):o}}function h(){return(h=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function O(t,n){return n||(n=t.slice(0)),t.raw=n,t}var T,x=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},E=function(){var t=0;return function(){return(++t).toString()}}(),S=function(){var t=void 0;return function(){if(void 0===t){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(T||(T={}));var A=new Map,w=function(t){if(!A.has(t)){var n=setTimeout((function(){A.delete(t),D({type:T.REMOVE_TOAST,toastId:t})}),1e3);A.set(t,n)}},j=function t(n,e){switch(e.type){case T.ADD_TOAST:return h({},n,{toasts:[e.toast].concat(n.toasts).slice(0,20)});case T.UPDATE_TOAST:return e.toast.id&&function(t){var n=A.get(t);n&&clearTimeout(n)}(e.toast.id),h({},n,{toasts:n.toasts.map((function(t){return t.id===e.toast.id?h({},t,e.toast):t}))});case T.UPSERT_TOAST:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:T.UPDATE_TOAST,toast:r}):t(n,{type:T.ADD_TOAST,toast:r});case T.DISMISS_TOAST:var o=e.toastId;return o?w(o):n.toasts.forEach((function(t){w(t.id)})),h({},n,{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?h({},t,{visible:!1}):t}))});case T.REMOVE_TOAST:return void 0===e.toastId?h({},n,{toasts:[]}):h({},n,{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case T.START_PAUSE:return h({},n,{pausedAt:e.time});case T.END_PAUSE:var i=e.time-(n.pausedAt||0);return h({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return h({},t,{pauseDuration:t.pauseDuration+i})}))})}},_=[],P={toasts:[],pausedAt:void 0},D=function(t){P=j(P,t),_.forEach((function(t){t(P)}))},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},k=function(t){return function(n,e){var r=function(t,n,e){return void 0===n&&(n="blank"),h({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e,{id:(null==e?void 0:e.id)||E()})}(n,t,e);return D({type:T.UPSERT_TOAST,toast:r}),r.id}},I=function(t,n){return k("blank")(t,n)};I.error=k("error"),I.success=k("success"),I.loading=k("loading"),I.custom=k("custom"),I.dismiss=function(t){D({type:T.DISMISS_TOAST,toastId:t})},I.remove=function(t){return D({type:T.REMOVE_TOAST,toastId:t})},I.promise=function(t,n,e){var r=I.loading(n.loading,h({},e,null==e?void 0:e.loading));return t.then((function(t){return I.success(x(n.success,t),h({id:r},e,null==e?void 0:e.success)),t})).catch((function(t){I.error(x(n.error,t),h({id:r},e,null==e?void 0:e.error))})),t};var M=function(t){var n=function(t){void 0===t&&(t={});var n=Object(r.useState)(P),e=n[0],o=n[1];Object(r.useEffect)((function(){return _.push(o),function(){var t=_.indexOf(o);t>-1&&_.splice(t,1)}}),[e]);var i=e.toasts.map((function(n){var e,r,o;return h({},t,t[n.type],n,{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==(r=t)?void 0:r.duration)||R[n.type],style:h({},t.style,null==(o=t[n.type])?void 0:o.style,n.style)})}));return h({},e,{toasts:i})}(t),e=n.toasts,o=n.pausedAt;Object(r.useEffect)((function(){if(!o){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return I.dismiss(n.id)}),e);n.visible&&I.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,o]);var i=Object(r.useMemo)((function(){return{startPause:function(){D({type:T.START_PAUSE,time:Date.now()})},endPause:function(){o&&D({type:T.END_PAUSE,time:Date.now()})},updateHeight:function(t,n){return D({type:T.UPDATE_TOAST,toast:{id:t,height:n}})},calculateOffset:function(t,n){var r,o=n||{},i=o.reverseOrder,a=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,s=o.defaultPosition,f=e.filter((function(n){return(n.position||s)===(t.position||s)&&n.height})),l=f.findIndex((function(n){return n.id===t.id})),d=f.filter((function(t,n){return n<l&&t.visible})).length;return(r=f.filter((function(t){return t.visible}))).slice.apply(r,a?[d+1]:[0,d]).reduce((function(t,n){return t+(n.height||0)+u}),0)}}}),[e,o]);return{toasts:e,handlers:i}};function U(){var t=O(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return U=function(){return t},t}function C(){var t=O(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return C=function(){return t},t}function N(){var t=O(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return N=function(){return t},t}function z(){var t=O(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return z=function(){return t},t}var V=b(z()),F=b(N()),B=b(C()),L=g("div")(U(),(function(t){return t.primary||"#ff4b4b"}),V,F,(function(t){return t.secondary||"#fff"}),B);function q(){var t=O(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return q=function(){return t},t}function H(){var t=O(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return H=function(){return t},t}var J=b(H()),$=g("div")(q(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),J);function G(){var t=O(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return G=function(){return t},t}function Y(){var t=O(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return Y=function(){return t},t}function Z(){var t=O(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return Z=function(){return t},t}var K=b(Z()),Q=b(Y()),W=g("div")(G(),(function(t){return t.primary||"#61d345"}),K,Q,(function(t){return t.secondary||"#fff"}));function X(){var t=O(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return X=function(){return t},t}function tt(){var t=O(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return tt=function(){return t},t}function nt(){var t=O(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return nt=function(){return t},t}function et(){var t=O(["\n  position: absolute;\n"]);return et=function(){return t},t}var rt=g("div")(et()),ot=g("div")(nt()),it=b(tt()),at=g("div")(X(),it),ct=function(t){var n=t.toast,e=n.icon,o=n.type,i=n.iconTheme;return void 0!==e?"string"==typeof e?Object(r.createElement)(at,null,e):e:"blank"===o?null:Object(r.createElement)(ot,null,Object(r.createElement)($,Object.assign({},i)),"loading"!==o&&Object(r.createElement)(rt,null,"error"===o?Object(r.createElement)(L,Object.assign({},i)):Object(r.createElement)(W,Object.assign({},i))))};function ut(){var t=O(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return ut=function(){return t},t}function st(){var t=O(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return st=function(){return t},t}var ft=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},lt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},dt=g("div",r.forwardRef)(st()),pt=g("div")(ut()),mt=Object(r.memo)((function(t){var n=t.toast,e=t.position,o=t.style,i=t.children,a=null!=n&&n.height?function(t,n){var e=t.includes("top")?1:-1,r=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ft(e),lt(e)],o=r[1];return{animation:n?b(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":b(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(n.position||e||"top-center",n.visible):{opacity:0},c=Object(r.createElement)(ct,{toast:n}),u=Object(r.createElement)(pt,Object.assign({},n.ariaProps),x(n.message,n));return Object(r.createElement)(dt,{className:n.className,style:h({},a,o,n.style)},"function"==typeof i?i({icon:c,message:u}):Object(r.createElement)(r.Fragment,null,c,u))}));function vt(){var t=O(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return vt=function(){return t},t}!function(t,n,e,r){s.p=n,m=t,v=e,y=r}(r.createElement);var yt=p(vt()),bt=function(t){var n=t.reverseOrder,e=t.position,o=void 0===e?"top-center":e,i=t.toastOptions,a=t.gutter,c=t.children,u=t.containerStyle,s=t.containerClassName,f=M(i),l=f.toasts,d=f.handlers;return Object(r.createElement)("div",{style:h({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:s,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((function(t){var e,i=t.position||o,u=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return h({left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(e?1:-1)+"px)"},r,o)}(i,d.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:o})),s=t.height?void 0:(e=function(n){d.updateHeight(t.id,n.height)},function(t){t&&setTimeout((function(){var n=t.getBoundingClientRect();e(n)}))});return Object(r.createElement)("div",{ref:s,className:t.visible?yt:"",key:t.id,style:u},"custom"===t.type?x(t.message,t):c?c(t):Object(r.createElement)(mt,{toast:t,position:i}))})))},gt=I,ht=e("Bl7J");function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Tt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function xt(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Et(t,n){return(Et=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function St(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=wt(t);if(n){var o=wt(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return At(this,e)}}function At(t,n){return!n||"object"!==Ot(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function wt(t){return(wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var jt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Et(t,n)}(a,t);var n,e,r,i=St(a);function a(){return Tt(this,a),i.apply(this,arguments)}return n=a,(e=[{key:"render",value:function(){var t=this.props.location,n='/bin/bash -c "$(curl -fsSL '.concat(t.origin,'/mac.sh)"');return o.a.createElement(ht.a,null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("p",null,"Run the following command in your terminal to setup a new Mac interactively."),o.a.createElement("p",{style:{cursor:"pointer",borderRadius:"5px",border:"1px solid #2E333E",padding:"5px"},onClick:function(){(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.target,r=void 0===e?document.body:e,o=document.createElement("textarea"),i=document.activeElement;o.value=t,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=t.length;var u=!1;try{u=document.execCommand("copy")}catch(s){}return o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),i&&i.focus(),u})(n)&&gt.success("Copied Script")}},n),o.a.createElement("a",{href:"https://github.com/mcclayton/MacSetup",className:"icon fa-github"},o.a.createElement("span",{style:{padding:"5px"}}," View MacSetup On Github")),o.a.createElement(bt,null)))}}])&&xt(n.prototype,e),r&&xt(n,r),a}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-mac-js-3ff501a3c10b53092a91.js.map