(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(461)}])},461:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);n(7294);var o=n(4593);n(795);var i=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{children:(0,r.jsx)("h1",{style:{textAlign:"center"},children:(0,r.jsx)("a",{href:"https://karl-police.github.io/binary-pattern-painter-online",className:"no-link-style",children:"Binary Pattern Editor"})})})})},a=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.q,{htmlAttributes:{lang:"en"},title:"Binary Pattern Editor Online"}),(0,r.jsx)(i,{}),(0,r.jsx)(t,{...n})]})}},795:function(){},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,i){try{return function e(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){var u,c,s,f;if(i.constructor!==a.constructor)return!1;if(Array.isArray(i)){if((u=i.length)!=a.length)return!1;for(c=u;0!=c--;)if(!e(i[c],a[c]))return!1;return!0}if(n&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(f=i.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=i.entries();!(c=f.next()).done;)if(!e(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(f=i.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((u=i.length)!=a.length)return!1;for(c=u;0!=c--;)if(i[c]!==a[c])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((u=(s=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&i instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!i.$$typeof)&&!e(i[s[c]],a[s[c]]))return!1;return!0}return i!=i&&a!=a}(e,i)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},4593:function(e,t,n){"use strict";n.d(t,{q:function(){return Z}});var r,o,i,a,u=n(5697),c=n.n(u),s=n(3524),f=n.n(s),l=n(9590),p=n.n(l),d=n(7294),y=n(6086),h=n.n(y),T={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(b).map(function(e){return b[e]});var m={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},v={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},g=Object.keys(v).reduce(function(e,t){return e[v[t]]=t,e},{}),E=[b.NOSCRIPT,b.SCRIPT,b.STYLE],O="data-react-helmet",C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},j=function(e,t){var n={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e},L=function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},R=function(e){var t=k(e,b.TITLE),n=k(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var r=k(e,"defaultTitle");return t||r||void 0},I=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return A({},e,t)},{})},x=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&D("Helmet: "+e+' should be of type "Array". Instead found type "'+C(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===m.REL&&"canonical"===e[n].toLowerCase()||c===m.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1!==t.indexOf(u)&&(u===m.INNER_HTML||u===m.CSS_TEXT||u===m.ITEM_PROP)&&(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=h()({},r[u],o[u]);r[u]=c}return e},[]).reverse()},k=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},N=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout(function(){N(e)},0)}),M=function(e){return clearTimeout(e)},H="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||N:n.g.requestAnimationFrame||N,B="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||M:n.g.cancelAnimationFrame||M,D=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Y=null,F=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;X(b.BODY,r),X(b.HTML,o),U(l,p);var d={baseTag:z(b.BASE,n),linkTags:z(b.LINK,i),metaTags:z(b.META,a),noscriptTags:z(b.NOSCRIPT,u),scriptTags:z(b.SCRIPT,s),styleTags:z(b.STYLE,f)},y={},h={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)}),t&&t(),c(e,y,h)},q=function(e){return Array.isArray(e)?e.join(""):e},U=function(e,t){void 0!==e&&document.title!==e&&(document.title=q(e)),X(b.TITLE,t)},X=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(O),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(O):n.getAttribute(O)!==a.join(",")&&n.setAttribute(O,a.join(","))}},z=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+O+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r)){if(r===m.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===m.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}}n.setAttribute(O,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},K=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},V=function(e,t,n,r){var o=K(n),i=q(t);return o?"<"+e+" "+O+'="true" '+o+">"+L(i,r)+"</"+e+">":"<"+e+" "+O+'="true">'+L(i,r)+"</"+e+">"},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[v[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[g[n]||n]=e[n],t},t)},Q=function(e,t,n){var r,o=W(n,((r={key:t})[O]=!0,r));return[d.createElement(b.TITLE,o,t)]},$=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return Q(e,t.title,t.titleAttributes,n)},toString:function(){return V(e,t.title,t.titleAttributes,n)}};case T.BODY:case T.HTML:return{toComponent:function(){return W(t)},toString:function(){return K(t)}};default:return{toComponent:function(){return t.map(function(t,n){var r,o=((r={key:n})[O]=!0,r);return Object.keys(t).forEach(function(e){var n=v[e]||e;if(n===m.INNER_HTML||n===m.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),d.createElement(e,o)})},toString:function(){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===m.INNER_HTML||e===m.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+L(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===E.indexOf(e);return t+"<"+e+" "+O+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}}}},J=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,l=e.titleAttributes;return{base:$(b.BASE,t,r),bodyAttributes:$(T.BODY,n,r),htmlAttributes:$(T.HTML,o,r),link:$(b.LINK,i,r),meta:$(b.META,a,r),noscript:$(b.NOSCRIPT,u,r),script:$(b.SCRIPT,c,r),style:$(b.STYLE,s,r),title:$(b.TITLE,{title:void 0===f?"":f,titleAttributes:l},r)}},Z=(o=f()(function(e){var t;return{baseTag:(t=[m.HREF,m.TARGET],e.filter(function(e){return void 0!==e[b.BASE]}).map(function(e){return e[b.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e},[])),bodyAttributes:I(T.BODY,e),defer:k(e,"defer"),encode:k(e,"encodeSpecialCharacters"),htmlAttributes:I(T.HTML,e),linkTags:x(b.LINK,[m.REL,m.HREF],e),metaTags:x(b.META,[m.NAME,m.CHARSET,m.HTTPEQUIV,m.PROPERTY,m.ITEM_PROP],e),noscriptTags:x(b.NOSCRIPT,[m.INNER_HTML],e),onChangeClientState:k(e,"onChangeClientState")||function(){},scriptTags:x(b.SCRIPT,[m.SRC,m.INNER_HTML],e),styleTags:x(b.STYLE,[m.CSS_TEXT],e),title:R(e),titleAttributes:I(T.TITLE,e)}},function(e){Y&&B(Y),e.defer?Y=H(function(){F(e,function(){Y=null})}):(F(e),Y=null)},J)(function(){return null}),a=i=function(e){function t(){return S(this,t),_(this,e.apply(this,arguments))}return P(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return A({},r,((t={})[n.type]=[].concat(r[n.type]||[],[A({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return A({},o,((t={})[r.type]=a,t.titleAttributes=A({},i),t));case b.BODY:return A({},o,{bodyAttributes:A({},i)});case b.HTML:return A({},o,{htmlAttributes:A({},i)})}return A({},o,((n={})[r.type]=A({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=A({},t);return Object.keys(e).forEach(function(t){var r;n=A({},n,((r={})[t]=e[t],r))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=G(j(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=A({},j(e,["children"]));return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},w(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=J({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Z.renderStatic=Z.rewind},3524:function(e,t,n){"use strict";var r=n(7294),o=r&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!!("undefined"!=typeof window&&window.document&&window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){if("function"!=typeof u)throw Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map(function(e){return e.props})),l.canUseDOM?t(c):n&&(c=n(c))}var l=function(e){function t(){return e.apply(this,arguments)||this}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,t.peek=function(){return c},t.rewind=function(){if(t.canUseDOM)throw Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var n=t.prototype;return n.UNSAFE_componentWillMount=function(){s.push(this),f()},n.componentDidUpdate=function(){f()},n.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},n.render=function(){return o.createElement(u,this.props)},t}(r.PureComponent);return i(l,"displayName","SideEffect("+(u.displayName||u.name||"Component")+")"),i(l,"canUseDOM",a),l}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);