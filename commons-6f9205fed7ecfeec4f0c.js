(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0BK2":function(t,e){t.exports={}},"0Dky":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2oRo":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("yLpj"))},"8+s/":function(t,e,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,f=[];function s(){u=t(f.map((function(t){return t.props}))),l.canUseDOM?e(u):n&&(u=n(u))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,f=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){f.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},"93I0":function(t,e,n){var r=n("VpIT"),o=n("kOOl"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},Bl7J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("17x9"),a=n.n(i),c=n("qhky"),u=n("Wbzz"),f="\n                      .\n                     /|\n                    /_|\n               ,   /__|\n              / \\,,___:'|\n           ,{{| /}}}}/_.'\n          }}}}` '{{'  '.\n        {{{{{    _   ;, \\\n     ,}}}}}}    /o`\\  ` ;)\n    {{{{{{   /           (\n    }}}}}}   |            \\       _______________________\n   {{{{{{{{   \\            \\     /    __ _  ________     \\\n   }}}}}}}}}   '.__      _  |   /    /  ' \\/ __/ __/___   |\n   {{{{{{{{       /`._  (_\\ /  <    / /_/_/\\__/\\______/   |\n    }}}}}}'      |    //___/    \\  /_/ Michael Clayton    |\n    `{{{{`       |     '--'      \\_______________________/\n     }}}'\n",s="\n\x3c!--\n\n".concat(f,"\n\n--\x3e\n"),l=(n("wcMv"),function(t){var e,n=t.children,r=t.location;return e=r&&"/"===r.pathname?o.a.createElement("div",null,n):o.a.createElement("div",{id:"wrapper",className:"page"},o.a.createElement("div",null,n)),o.a.useEffect((function(){console.log(f)}),[]),o.a.createElement(u.StaticQuery,{query:"3649515864",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"party_horse",content:s},{name:"description",content:"Michael Clayton's Online Portfolio"},{name:"keywords",content:"portfolio, michael, clayton, michael c. clayton, software engineer"}]},o.a.createElement("html",{lang:"en"},s)),e)}})});l.propTypes={children:a.a.node.isRequired};e.a=l},DPsx:function(t,e,n){var r=n("g6v/"),o=n("0Dky"),i=n("zBJ4");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},DQNa:function(t,e,n){var r=n("busE"),o=Date.prototype,i=o.toString,a=o.getTime;new Date(NaN)+""!="Invalid Date"&&r(o,"toString",(function(){var t=a.call(this);return t==t?i.call(this):"Invalid Date"}))},UTVS:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},VpIT:function(t,e,n){var r=n("xDBR"),o=n("xs3f");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},XGwC:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},afO8:function(t,e,n){var r,o,i,a=n("f5p1"),c=n("2oRo"),u=n("hh1v"),f=n("kRJp"),s=n("UTVS"),l=n("93I0"),p=n("0BK2"),d=c.WeakMap;if(a){var y=new d,h=y.get,m=y.has,v=y.set;r=function(t,e){return v.call(y,t,e),e},o=function(t){return h.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var b=l("state");p[b]=!0,r=function(t,e){return f(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},bmMU:function(t,e,n){n("DQNa");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,u,f,s;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(o&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!n.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!t(u.value[1],n.get(u.value[0])))return!1;return!0}if(i&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(e[u]!==n[u])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(f=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,f[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==f[u]&&"__v"!==f[u]&&"__o"!==f[u]||!e.$$typeof)&&!t(e[f[u]],n[f[u]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},busE:function(t,e,n){var r=n("2oRo"),o=n("kRJp"),i=n("UTVS"),a=n("zk60"),c=n("iSVu"),u=n("afO8"),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},f5p1:function(t,e,n){var r=n("2oRo"),o=n("iSVu"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},"g6v/":function(t,e,n){var r=n("0Dky");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,e,n){var r=n("hh1v");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,e,n){var r=n("xs3f"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},kOOl:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},kRJp:function(t,e,n){var r=n("g6v/"),o=n("m/L8"),i=n("XGwC");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"m/L8":function(t,e,n){var r=n("g6v/"),o=n("DPsx"),i=n("glrk"),a=n("wE6v"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},qhky:function(t,e,n){"use strict";(function(t){n("DQNa");var r,o,i,a,c=n("17x9"),u=n.n(c),f=n("8+s/"),s=n.n(f),l=n("bmMU"),p=n.n(l),d=n("q1tI"),y=n.n(d),h=n("YVoz"),m=n.n(h),v="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),_="cssText",S="href",O="http-equiv",E="innerHTML",A="itemprop",C="name",x="property",j="rel",k="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",D="onChangeClientState",N="titleTemplate",q=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},V=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},J=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=$(t,T.TITLE),n=$(t,N);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=$(t,L);return e||r||void 0},W=function(t){return $(t,D)||function(){}},Q=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return H({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},X=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+F(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===j&&"canonical"===t[n].toLowerCase()||u===j&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==E&&c!==_&&c!==A||(n=c)}if(!n||!t[n])return!1;var f=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][f]&&(o[n][f]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},$=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Z=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Z(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:t.requestAnimationFrame||Z,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,f=t.scriptTags,s=t.styleTags,l=t.title,p=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,o),ct(l,p);var d={baseTag:ft(T.BASE,n),linkTags:ft(T.LINK,i),metaTags:ft(T.META,a),noscriptTags:ft(T.NOSCRIPT,c),scriptTags:ft(T.SCRIPT,f),styleTags:ft(T.STYLE,s)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],f=e[u]||"";n.getAttribute(u)!==f&&n.setAttribute(u,f),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ft=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===E)n.innerHTML=e.innerHTML;else if(r===_)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},st=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=lt(n,r),[y.a.createElement(T.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=st(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+J(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+J(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case v:case b:return{toComponent:function(){return lt(e)},toString:function(){return st(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=I[t]||t;if(n===E||n===_){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),y.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===E||t===_)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+J(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,f=t.styleTags,s=t.title,l=void 0===s?"":s,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(v,n,r),htmlAttributes:pt(b,o,r),link:pt(T.LINK,i,r),meta:pt(T.META,a,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,u,r),style:pt(T.STYLE,f,r),title:pt(T.TITLE,{title:l,titleAttributes:p},r)}},yt=s()((function(t){return{baseTag:G([S,P],t),bodyAttributes:Q(v,t),defer:$(t,M),encode:$(t,R),htmlAttributes:Q(b,t),linkTags:X(T.LINK,[j,S],t),metaTags:X(T.META,[C,w,O,x,A],t),noscriptTags:X(T.NOSCRIPT,[E],t),onChangeClientState:W(t),scriptTags:X(T.SCRIPT,[k,E],t),styleTags:X(T.STYLE,[_],t),title:K(t),titleAttributes:Q(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),ht=(o=yt,a=i=function(t){function e(){return z(this,e),Y(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return H({},r,((e={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return H({},o,((e={})[r.type]=a,e.titleAttributes=H({},i),e));case T.BODY:return H({},o,{bodyAttributes:H({},i)});case T.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=H({},e);return Object.keys(t).forEach((function(e){var r;n=H({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return y.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[q[n]||n]=t[n],e}),e)}(V(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=V(t,["children"]),r=H({},n);return e&&(r=this.mapChildrenToProps(e,r)),y.a.createElement(o,r)},U(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(y.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ht.renderStatic=ht.rewind,e.a=ht}).call(this,n("yLpj"))},wE6v:function(t,e,n){var r=n("hh1v");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},wcMv:function(t,e,n){},xDBR:function(t,e){t.exports=!1},xs3f:function(t,e,n){var r=n("2oRo"),o=n("zk60"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n},zBJ4:function(t,e,n){var r=n("2oRo"),o=n("hh1v"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},zk60:function(t,e,n){var r=n("2oRo"),o=n("kRJp");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}}}]);
//# sourceMappingURL=commons-6f9205fed7ecfeec4f0c.js.map