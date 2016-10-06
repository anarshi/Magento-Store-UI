/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-bgrepeatspace_bgrepeatround-boxshadow-boxsizing-cssall-cssanimations-csscalc-cssremunit-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-cubicbezierrange-fontface-ie8compat-opacity-rgba-touchevents-setclasses !*/
!function(e,t,n){function s(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,a;for(var d in b)if(b.hasOwnProperty(d)){if(e=[],t=b[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function o(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?T.className.baseVal=t:T.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function d(e,n,s,r){var o,d,u,c,l="modernizr",f=i("div"),p=a();if(parseInt(s,10))for(;s--;)u=i("div"),u.id=r?r[s]:l+(s+1),f.appendChild(u);return o=i("style"),o.type="text/css",o.id="s"+l,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",c=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),d=n(f,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=c,T.offsetHeight):f.parentNode.removeChild(f),!!d}function u(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?l(r,n||t):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,s){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+p(t[r])+":"+s+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,o){function a(){l&&(delete j.style,delete j.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var d=m(e,r);if(!s(d,"undefined"))return d}for(var l,f,p,h,g,v=["modernizr","tspan","samp"];!j.style&&v.length;)l=!0,j.modElem=i(v.shift()),j.style=j.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],g=j.style[h],u(h,"-")&&(h=c(h)),j.style[h]!==n){if(o||s(r,"undefined"))return a(),"pfx"==t?h:!0;try{j.style[h]=r}catch(y){}if(j.style[h]!=g)return a(),"pfx"==t?h:!0}return a(),!1}function g(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return s(t,"string")||s(t,"undefined")?h(a,t,r,o):(a=(e+" "+E.join(i+" ")+i).split(" "),f(a,t,n))}function v(e,t,s){return g(e,n,n,t,s)}var y=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode);var T=t.documentElement;Modernizr.addTest("cssall","all"in T.style);var w="svg"===T.nodeName.toLowerCase(),S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=i("a");return n.style.cssText=e+S.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=i("a");return e.style.cssText=S.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("cssremunit",function(){var e=i("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var C=x.testStyles=d;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var s=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");C(s,function(e){n=9===e.offsetTop})}return n});var z=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),s=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||s}();z?Modernizr.addTest("fontface",!1):C('@font-face {font-family:"font";src:url("https://")}',function(e,n){var s=t.getElementById("smodernizr"),r=s.sheet||s.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),C("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),s=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",s==n)}),C("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),s=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",s==n)});var _="Moz O ms Webkit",k=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=k;var E=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=E;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var j={style:P.elem.style};Modernizr._q.unshift(function(){delete j.style}),x.testAllProps=g,x.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("backgroundcliptext",function(){return v("backgroundClip","text")}),Modernizr.addTest("bgrepeatround",v("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",v("backgroundRepeat","space")),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",v("transition","all",!0));var N="CSS"in e&&"supports"in e.CSS,R="supportsCSS"in e;Modernizr.addTest("supports",N||R),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in T.style)){var n,s="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",C(s+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),r(),o(y),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);