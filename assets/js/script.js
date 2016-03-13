function mainnav(){function e(){a&&a.classList.add("hide"),o&&o.classList.add("hide")}function t(){o&&o.classList.add("hide")}function n(){a&&a.classList.remove("hide"),o&&o.classList.remove("hide")}var r=document.querySelector(".mainnav"),i=r.querySelector(".togglenav"),u=r.querySelector(".nav-1"),a=r.querySelector(".nav-2"),o=r.querySelector(".nav-3"),s=u.querySelectorAll("li"),c;a&&(c=a.querySelectorAll("li")),i.addEventListener("click",function(){r.classList.contains("open")?r.classList.remove("open"):r.classList.add("open")}),_.each(s,function(t){t.querySelector("ul")&&!t.classList.contains("active")&&(t.addEventListener("mouseover",e),t.addEventListener("mouseout",n))}),_.each(c,function(e){e.querySelector("ul")&&!e.classList.contains("active")&&(e.addEventListener("mouseover",t),e.addEventListener("mouseout",n))})}function Event(e){function t(e){function t(){if(r.hidden){r.hidden=!1;var e=r.offsetHeight;r.style.height=0,r.offsetHeight,r.style.height=e+"px"}else r.style.height=0,setTimeout(function(){r.hidden=!0,r.style.height=null},150)}var n=e.querySelector("header"),r=e.querySelector(".more");r.hidden=!0,n.addEventListener("click",t)}var n=e.querySelectorAll("article");_.each(n,function(e){new t(e)})}function Gallery(e){function t(){if(s>0){var e=u[s].querySelector("figcaption");e&&e.classList.remove("show"),s-=1,i.style.transform="translateX(-"+s+"00%)";var e=u[s].querySelector("figcaption");e&&e.classList.add("show"),r()}}function n(){if(c-1>s){var e=u[s].querySelector("figcaption");e&&e.classList.remove("show"),s+=1,i.style.transform="translateX(-"+s+"00%)";var e=u[s].querySelector("figcaption");e&&e.classList.add("show"),r()}}function r(){1===c?(a.hidden=!0,o.hidden=!0):(0===s?a.classList.add("inactive"):a.classList.remove("inactive"),s===c-1?o.classList.add("inactive"):o.classList.remove("inactive"))}var i=e.querySelector("ul"),u=i.children,a=e.querySelector("nav a.previous"),o=e.querySelector("nav a.next"),s=0,c=i.childElementCount;r();var l=u[0].querySelector("figcaption");l&&l.classList.add("show"),a.addEventListener("click",function(){t()}),o.addEventListener("click",function(){n()});var f=0,p=0;e.addEventListener("touchstart",function(e){f=e.layerX}),e.addEventListener("touchmove",function(e){p=e.layerX-f,0===s&&p>0?p=Math.sqrt(2*p):s===c-1&&0>p&&(p=-Math.sqrt(2*Math.abs(p))),i.style.transform="translateX(calc(-"+s+"00% + "+p+"px))"}),e.addEventListener("touchend",function(){-50>p?n():p>50?t():i.style.transform="translateX(-"+s+"00%)"})}function homepage(){function e(){o.style.display="none",s.style.display="block",setTimeout(function(){n.style.opacity="1",r.style.opacity="1"},1e3),setTimeout(function(){i.style.opacity="1"},2500),setTimeout(function(){u.style.opacity="1"},2700),setTimeout(function(){a.style.transition="1s",a.offsetWidth,a.style.opacity="1"},2900)}var t=document.querySelector(".overlay"),n=t.querySelector(".cellu"),r=t.querySelector(".lart"),i=t.querySelector(".date"),u=t.querySelector(".venue"),a=document.querySelector(".mainfooter .logo"),o=document.querySelector(".teaser video"),s=document.querySelector(".teaser img"),c=setTimeout(e,6e3);0!==o.offsetWidth?(o.addEventListener("canplaythrough",function(){this.play()}),o.addEventListener("timeupdate",function(){clearTimeout(c),this.currentTime>1.4&&(i.style.opacity="1"),this.currentTime>2&&(u.style.opacity="1"),this.currentTime>4.8&&(n.style.opacity="1",r.style.opacity="1"),this.currentTime>6.8&&(a.style.transition="1s",a.offsetWidth,a.style.opacity="1")}),o.addEventListener("ended",function(){setTimeout(function(){o.currentTime=0,o.play(),i.style.opacity=null,u.style.opacity=null,n.style.opacity=null,r.style.opacity=null,a.style.transitionDuration="150ms",a.style.opacity=null,a.offsetWidth,a.style.transitionDuration=null},4e3)})):e()}function filmblock(){var e=document.querySelector("main .video"),t=e.querySelector(".play"),n=e.querySelector("video");t.classList.add("hidden"),e.addEventListener("click",function(){n.paused===!0?n.play():n.pause()}),n.addEventListener("canplay",function(){t.classList.remove("hidden")}),n.addEventListener("play",function(){t.classList.add("hidden"),n.controls=!0}),n.addEventListener("pause",function(){t.classList.remove("hidden"),n.controls=!1}),n.addEventListener("ended",function(){t.classList.remove("hidden"),n.controls=!1})}function callForEntries(){var e=document.querySelector("main"),t=e.querySelector(".text"),n=e.querySelector("h1 span:nth-of-type(1)"),r=e.querySelector("h1 span:nth-of-type(2)"),i=e.querySelector("h1 span:nth-of-type(3)");t.style.opacity="0",t.offsetWidth,t.style.transition="400ms",n.style.opacity="0",r.style.opacity="0",i.style.opacity="0",setTimeout(function(){n.style.opacity="1"},500),setTimeout(function(){r.style.opacity="1"},800),setTimeout(function(){i.style.opacity="1"},1100),setTimeout(function(){t.style.opacity="1"},1650)}(function(){function e(e){function t(t,n,r,i,u,a){for(;u>=0&&a>u;u+=e){var o=i?i[u]:u;r=n(r,t[o],o,t)}return r}return function(n,r,i,u){r=A(r,u,4);var a=!T(n)&&g.keys(n),o=(a||n).length,s=e>0?0:o-1;return arguments.length<3&&(i=n[a?a[s]:s],s+=e),t(n,r,i,a,s,o)}}function t(e){return function(t,n,r){n=S(n,r);for(var i=L(t),u=e>0?0:i-1;u>=0&&i>u;u+=e)if(n(t[u],u,t))return u;return-1}}function n(e,t,n){return function(r,i,u){var a=0,o=L(r);if("number"==typeof u)e>0?a=u>=0?u:Math.max(u+o,a):o=u>=0?Math.min(u+1,o):u+o+1;else if(n&&u&&o)return u=n(r,i),r[u]===i?u:-1;if(i!==i)return u=t(l.call(r,a,o),g.isNaN),u>=0?u+a:-1;for(u=e>0?a:o-1;u>=0&&o>u;u+=e)if(r[u]===i)return u;return-1}}function r(e,t){var n=M.length,r=e.constructor,i=g.isFunction(r)&&r.prototype||o,u="constructor";for(g.has(e,u)&&!g.contains(t,u)&&t.push(u);n--;)u=M[n],u in e&&e[u]!==i[u]&&!g.contains(t,u)&&t.push(u)}var i=this,u=i._,a=Array.prototype,o=Object.prototype,s=Function.prototype,c=a.push,l=a.slice,f=o.toString,p=o.hasOwnProperty,d=Array.isArray,h=Object.keys,m=s.bind,v=Object.create,y=function(){},g=function(e){return e instanceof g?e:this instanceof g?void(this._wrapped=e):new g(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=g),exports._=g):i._=g,g.VERSION="1.8.3";var A=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,u){return e.call(t,n,r,i,u)}}return function(){return e.apply(t,arguments)}},S=function(e,t,n){return null==e?g.identity:g.isFunction(e)?A(e,t,n):g.isObject(e)?g.matcher(e):g.property(e)};g.iteratee=function(e,t){return S(e,t,1/0)};var w=function(e,t){return function(n){var r=arguments.length;if(2>r||null==n)return n;for(var i=1;r>i;i++)for(var u=arguments[i],a=e(u),o=a.length,s=0;o>s;s++){var c=a[s];t&&void 0!==n[c]||(n[c]=u[c])}return n}},b=function(e){if(!g.isObject(e))return{};if(v)return v(e);y.prototype=e;var t=new y;return y.prototype=null,t},x=function(e){return function(t){return null==t?void 0:t[e]}},E=Math.pow(2,53)-1,L=x("length"),T=function(e){var t=L(e);return"number"==typeof t&&t>=0&&E>=t};g.each=g.forEach=function(e,t,n){t=A(t,n);var r,i;if(T(e))for(r=0,i=e.length;i>r;r++)t(e[r],r,e);else{var u=g.keys(e);for(r=0,i=u.length;i>r;r++)t(e[u[r]],u[r],e)}return e},g.map=g.collect=function(e,t,n){t=S(t,n);for(var r=!T(e)&&g.keys(e),i=(r||e).length,u=Array(i),a=0;i>a;a++){var o=r?r[a]:a;u[a]=t(e[o],o,e)}return u},g.reduce=g.foldl=g.inject=e(1),g.reduceRight=g.foldr=e(-1),g.find=g.detect=function(e,t,n){var r;return r=T(e)?g.findIndex(e,t,n):g.findKey(e,t,n),void 0!==r&&-1!==r?e[r]:void 0},g.filter=g.select=function(e,t,n){var r=[];return t=S(t,n),g.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},g.reject=function(e,t,n){return g.filter(e,g.negate(S(t)),n)},g.every=g.all=function(e,t,n){t=S(t,n);for(var r=!T(e)&&g.keys(e),i=(r||e).length,u=0;i>u;u++){var a=r?r[u]:u;if(!t(e[a],a,e))return!1}return!0},g.some=g.any=function(e,t,n){t=S(t,n);for(var r=!T(e)&&g.keys(e),i=(r||e).length,u=0;i>u;u++){var a=r?r[u]:u;if(t(e[a],a,e))return!0}return!1},g.contains=g.includes=g.include=function(e,t,n,r){return T(e)||(e=g.values(e)),("number"!=typeof n||r)&&(n=0),g.indexOf(e,t,n)>=0},g.invoke=function(e,t){var n=l.call(arguments,2),r=g.isFunction(t);return g.map(e,function(e){var i=r?t:e[t];return null==i?i:i.apply(e,n)})},g.pluck=function(e,t){return g.map(e,g.property(t))},g.where=function(e,t){return g.filter(e,g.matcher(t))},g.findWhere=function(e,t){return g.find(e,g.matcher(t))},g.max=function(e,t,n){var r,i,u=-1/0,a=-1/0;if(null==t&&null!=e){e=T(e)?e:g.values(e);for(var o=0,s=e.length;s>o;o++)r=e[o],r>u&&(u=r)}else t=S(t,n),g.each(e,function(e,n,r){i=t(e,n,r),(i>a||i===-1/0&&u===-1/0)&&(u=e,a=i)});return u},g.min=function(e,t,n){var r,i,u=1/0,a=1/0;if(null==t&&null!=e){e=T(e)?e:g.values(e);for(var o=0,s=e.length;s>o;o++)r=e[o],u>r&&(u=r)}else t=S(t,n),g.each(e,function(e,n,r){i=t(e,n,r),(a>i||1/0===i&&1/0===u)&&(u=e,a=i)});return u},g.shuffle=function(e){for(var t,n=T(e)?e:g.values(e),r=n.length,i=Array(r),u=0;r>u;u++)t=g.random(0,u),t!==u&&(i[u]=i[t]),i[t]=n[u];return i},g.sample=function(e,t,n){return null==t||n?(T(e)||(e=g.values(e)),e[g.random(e.length-1)]):g.shuffle(e).slice(0,Math.max(0,t))},g.sortBy=function(e,t,n){return t=S(t,n),g.pluck(g.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};var q=function(e){return function(t,n,r){var i={};return n=S(n,r),g.each(t,function(r,u){var a=n(r,u,t);e(i,r,a)}),i}};g.groupBy=q(function(e,t,n){g.has(e,n)?e[n].push(t):e[n]=[t]}),g.indexBy=q(function(e,t,n){e[n]=t}),g.countBy=q(function(e,t,n){g.has(e,n)?e[n]++:e[n]=1}),g.toArray=function(e){return e?g.isArray(e)?l.call(e):T(e)?g.map(e,g.identity):g.values(e):[]},g.size=function(e){return null==e?0:T(e)?e.length:g.keys(e).length},g.partition=function(e,t,n){t=S(t,n);var r=[],i=[];return g.each(e,function(e,n,u){(t(e,n,u)?r:i).push(e)}),[r,i]},g.first=g.head=g.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:g.initial(e,e.length-t)},g.initial=function(e,t,n){return l.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},g.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:g.rest(e,Math.max(0,e.length-t))},g.rest=g.tail=g.drop=function(e,t,n){return l.call(e,null==t||n?1:t)},g.compact=function(e){return g.filter(e,g.identity)};var k=function(e,t,n,r){for(var i=[],u=0,a=r||0,o=L(e);o>a;a++){var s=e[a];if(T(s)&&(g.isArray(s)||g.isArguments(s))){t||(s=k(s,t,n));var c=0,l=s.length;for(i.length+=l;l>c;)i[u++]=s[c++]}else n||(i[u++]=s)}return i};g.flatten=function(e,t){return k(e,t,!1)},g.without=function(e){return g.difference(e,l.call(arguments,1))},g.uniq=g.unique=function(e,t,n,r){g.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=S(n,r));for(var i=[],u=[],a=0,o=L(e);o>a;a++){var s=e[a],c=n?n(s,a,e):s;t?(a&&u===c||i.push(s),u=c):n?g.contains(u,c)||(u.push(c),i.push(s)):g.contains(i,s)||i.push(s)}return i},g.union=function(){return g.uniq(k(arguments,!0,!0))},g.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=L(e);i>r;r++){var u=e[r];if(!g.contains(t,u)){for(var a=1;n>a&&g.contains(arguments[a],u);a++);a===n&&t.push(u)}}return t},g.difference=function(e){var t=k(arguments,!0,!0,1);return g.filter(e,function(e){return!g.contains(t,e)})},g.zip=function(){return g.unzip(arguments)},g.unzip=function(e){for(var t=e&&g.max(e,L).length||0,n=Array(t),r=0;t>r;r++)n[r]=g.pluck(e,r);return n},g.object=function(e,t){for(var n={},r=0,i=L(e);i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},g.findIndex=t(1),g.findLastIndex=t(-1),g.sortedIndex=function(e,t,n,r){n=S(n,r,1);for(var i=n(t),u=0,a=L(e);a>u;){var o=Math.floor((u+a)/2);n(e[o])<i?u=o+1:a=o}return u},g.indexOf=n(1,g.findIndex,g.sortedIndex),g.lastIndexOf=n(-1,g.findLastIndex),g.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),u=0;r>u;u++,e+=n)i[u]=e;return i};var _=function(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i);var u=b(e.prototype),a=e.apply(u,i);return g.isObject(a)?a:u};g.bind=function(e,t){if(m&&e.bind===m)return m.apply(e,l.call(arguments,1));if(!g.isFunction(e))throw new TypeError("Bind must be called on a function");var n=l.call(arguments,2),r=function(){return _(e,r,t,this,n.concat(l.call(arguments)))};return r},g.partial=function(e){var t=l.call(arguments,1),n=function(){for(var r=0,i=t.length,u=Array(i),a=0;i>a;a++)u[a]=t[a]===g?arguments[r++]:t[a];for(;r<arguments.length;)u.push(arguments[r++]);return _(e,n,this,this,u)};return n},g.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=g.bind(e[n],e);return e},g.memoize=function(e,t){var n=function(r){var i=n.cache,u=""+(t?t.apply(this,arguments):r);return g.has(i,u)||(i[u]=e.apply(this,arguments)),i[u]};return n.cache={},n},g.delay=function(e,t){var n=l.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},g.defer=g.partial(g.delay,g,1),g.throttle=function(e,t,n){var r,i,u,a=null,o=0;n||(n={});var s=function(){o=n.leading===!1?0:g.now(),a=null,u=e.apply(r,i),a||(r=i=null)};return function(){var c=g.now();o||n.leading!==!1||(o=c);var l=t-(c-o);return r=this,i=arguments,0>=l||l>t?(a&&(clearTimeout(a),a=null),o=c,u=e.apply(r,i),a||(r=i=null)):a||n.trailing===!1||(a=setTimeout(s,l)),u}},g.debounce=function(e,t,n){var r,i,u,a,o,s=function(){var c=g.now()-a;t>c&&c>=0?r=setTimeout(s,t-c):(r=null,n||(o=e.apply(u,i),r||(u=i=null)))};return function(){u=this,i=arguments,a=g.now();var c=n&&!r;return r||(r=setTimeout(s,t)),c&&(o=e.apply(u,i),u=i=null),o}},g.wrap=function(e,t){return g.partial(t,e)},g.negate=function(e){return function(){return!e.apply(this,arguments)}},g.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},g.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},g.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},g.once=g.partial(g.before,2);var j=!{toString:null}.propertyIsEnumerable("toString"),M=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];g.keys=function(e){if(!g.isObject(e))return[];if(h)return h(e);var t=[];for(var n in e)g.has(e,n)&&t.push(n);return j&&r(e,t),t},g.allKeys=function(e){if(!g.isObject(e))return[];var t=[];for(var n in e)t.push(n);return j&&r(e,t),t},g.values=function(e){for(var t=g.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},g.mapObject=function(e,t,n){t=S(t,n);for(var r,i=g.keys(e),u=i.length,a={},o=0;u>o;o++)r=i[o],a[r]=t(e[r],r,e);return a},g.pairs=function(e){for(var t=g.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},g.invert=function(e){for(var t={},n=g.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},g.functions=g.methods=function(e){var t=[];for(var n in e)g.isFunction(e[n])&&t.push(n);return t.sort()},g.extend=w(g.allKeys),g.extendOwn=g.assign=w(g.keys),g.findKey=function(e,t,n){t=S(t,n);for(var r,i=g.keys(e),u=0,a=i.length;a>u;u++)if(r=i[u],t(e[r],r,e))return r},g.pick=function(e,t,n){var r,i,u={},a=e;if(null==a)return u;g.isFunction(t)?(i=g.allKeys(a),r=A(t,n)):(i=k(arguments,!1,!1,1),r=function(e,t,n){return t in n},a=Object(a));for(var o=0,s=i.length;s>o;o++){var c=i[o],l=a[c];r(l,c,a)&&(u[c]=l)}return u},g.omit=function(e,t,n){if(g.isFunction(t))t=g.negate(t);else{var r=g.map(k(arguments,!1,!1,1),String);t=function(e,t){return!g.contains(r,t)}}return g.pick(e,t,n)},g.defaults=w(g.allKeys,!0),g.create=function(e,t){var n=b(e);return t&&g.extendOwn(n,t),n},g.clone=function(e){return g.isObject(e)?g.isArray(e)?e.slice():g.extend({},e):e},g.tap=function(e,t){return t(e),e},g.isMatch=function(e,t){var n=g.keys(t),r=n.length;if(null==e)return!r;for(var i=Object(e),u=0;r>u;u++){var a=n[u];if(t[a]!==i[a]||!(a in i))return!1}return!0};var z=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;e instanceof g&&(e=e._wrapped),t instanceof g&&(t=t._wrapped);var i=f.call(e);if(i!==f.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}var u="[object Array]"===i;if(!u){if("object"!=typeof e||"object"!=typeof t)return!1;var a=e.constructor,o=t.constructor;if(a!==o&&!(g.isFunction(a)&&a instanceof a&&g.isFunction(o)&&o instanceof o)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var s=n.length;s--;)if(n[s]===e)return r[s]===t;if(n.push(e),r.push(t),u){if(s=e.length,s!==t.length)return!1;for(;s--;)if(!z(e[s],t[s],n,r))return!1}else{var c,l=g.keys(e);if(s=l.length,g.keys(t).length!==s)return!1;for(;s--;)if(c=l[s],!g.has(t,c)||!z(e[c],t[c],n,r))return!1}return n.pop(),r.pop(),!0};g.isEqual=function(e,t){return z(e,t)},g.isEmpty=function(e){return null==e?!0:T(e)&&(g.isArray(e)||g.isString(e)||g.isArguments(e))?0===e.length:0===g.keys(e).length},g.isElement=function(e){return!(!e||1!==e.nodeType)},g.isArray=d||function(e){return"[object Array]"===f.call(e)},g.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},g.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){g["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}}),g.isArguments(arguments)||(g.isArguments=function(e){return g.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(g.isFunction=function(e){return"function"==typeof e||!1}),g.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},g.isNaN=function(e){return g.isNumber(e)&&e!==+e},g.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===f.call(e)},g.isNull=function(e){return null===e},g.isUndefined=function(e){return void 0===e},g.has=function(e,t){return null!=e&&p.call(e,t)},g.noConflict=function(){return i._=u,this},g.identity=function(e){return e},g.constant=function(e){return function(){return e}},g.noop=function(){},g.property=x,g.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},g.matcher=g.matches=function(e){return e=g.extendOwn({},e),function(t){return g.isMatch(t,e)}},g.times=function(e,t,n){var r=Array(Math.max(0,e));t=A(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},g.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},g.now=Date.now||function(){return(new Date).getTime()};var O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},R=g.invert(O),F=function(e){var t=function(t){return e[t]},n="(?:"+g.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};g.escape=F(O),g.unescape=F(R),g.result=function(e,t,n){var r=null==e?void 0:e[t];return void 0===r&&(r=n),g.isFunction(r)?r.call(e):r};var I=0;g.uniqueId=function(e){var t=++I+"";return e?e+t:t},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/(.)^/,D={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\u2028|\u2029/g,P=function(e){return"\\"+D[e]};g.template=function(e,t,n){!t&&n&&(t=n),t=g.defaults({},t,g.templateSettings);var r=RegExp([(t.escape||C).source,(t.interpolate||C).source,(t.evaluate||C).source].join("|")+"|$","g"),i=0,u="__p+='";e.replace(r,function(t,n,r,a,o){return u+=e.slice(i,o).replace(B,P),i=o+t.length,n?u+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?u+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(u+="';\n"+a+"\n__p+='"),t}),u+="';\n",t.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{var a=new Function(t.variable||"obj","_",u)}catch(o){throw o.source=u,o}var s=function(e){return a.call(this,e,g)},c=t.variable||"obj";return s.source="function("+c+"){\n"+u+"}",s},g.chain=function(e){var t=g(e);return t._chain=!0,t};var N=function(e,t){return e._chain?g(t).chain():t};g.mixin=function(e){g.each(g.functions(e),function(t){var n=g[t]=e[t];g.prototype[t]=function(){var e=[this._wrapped];return c.apply(e,arguments),N(this,n.apply(g,e))}})},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=a[e];g.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],N(this,n)}}),g.each(["concat","join","slice"],function(e){var t=a[e];g.prototype[e]=function(){return N(this,t.apply(this._wrapped,arguments))}}),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return g})}).call(this),!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},u=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){u(),a&&a.addListener&&a.addListener(u)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),u}())}(window),function(e,t,n){"use strict";function r(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function i(t,n){var r=new e.Image;return r.onerror=function(){L[t]=!1,ee()},r.onload=function(){L[t]=1===r.width,ee()},r.src=n,"pending"}function u(){C=!1,P=e.devicePixelRatio,D={},B={},g.DPR=P||1,N.width=Math.max(e.innerWidth||0,E.clientWidth),N.height=Math.max(e.innerHeight||0,E.clientHeight),N.vw=N.width/100,N.vh=N.height/100,y=[N.height,N.width,P].join("-"),N.em=g.getEmValue(),N.rem=N.em}function a(e,t,n,r){var i,u,a,o;return"saveData"===T.algorithm?e>2.7?o=n+1:(u=t-n,i=Math.pow(e-.6,1.5),a=u*i,r&&(a+=.1*i),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function o(e){var t,n=g.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=g.setRes(n),g.applySetCandidate(t,e))),e[g.ns].evaled=r}function s(e,t){return e.res-t.res}function c(e,t,n){var r;return!n&&t&&(n=e[g.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=g.makeUrl(t),e[g.ns].curSrc=t,e[g.ns].curCan=r,r.res||Z(r,r.set.sizes)),r}function l(e,t){var n,r,i;if(e&&t)for(i=g.parseSet(t),e=g.makeUrl(e),n=0;n<i.length;n++)if(e===g.makeUrl(i[n].url)){r=i[n];break}return r}function f(e,t){var n,r,i,u,a=e.getElementsByTagName("source");for(n=0,r=a.length;r>n;n++)i=a[n],i[g.ns]=!0,u=i.getAttribute("srcset"),u&&t.push({srcset:u,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function p(e,t){function n(t){var n,r=t.exec(e.substring(p));return r?(n=r[0],p+=n.length,n):void 0}function i(){var e,n,r,i,u,s,c,l,f,p=!1,h={};for(i=0;i<o.length;i++)u=o[i],s=u[u.length-1],c=u.substring(0,u.length-1),l=parseInt(c,10),f=parseFloat(c),X.test(c)&&"w"===s?((e||n)&&(p=!0),0===l?p=!0:e=l):V.test(c)&&"x"===s?((e||n||r)&&(p=!0),0>f?p=!0:n=f):X.test(c)&&"h"===s?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(h.url=a,e&&(h.w=e),n&&(h.d=n),r&&(h.h=r),r||n||e||(h.d=1),1===h.d&&(t.has1x=!0),h.set=t,d.push(h))}function u(){for(n(Q),s="",c="in descriptor";;){if(l=e.charAt(p),"in descriptor"===c)if(r(l))s&&(o.push(s),s="",c="after descriptor");else{if(","===l)return p+=1,s&&o.push(s),void i();if("("===l)s+=l,c="in parens";else{if(""===l)return s&&o.push(s),void i();s+=l}}else if("in parens"===c)if(")"===l)s+=l,c="in descriptor";else{if(""===l)return o.push(s),void i();s+=l}else if("after descriptor"===c)if(r(l));else{if(""===l)return void i();c="in descriptor",p-=1}p+=1}}for(var a,o,s,c,l,f=e.length,p=0,d=[];;){if(n(G),p>=f)return d;a=n(H),o=[],","===a.slice(-1)?(a=a.replace(K,""),i()):u()}}function d(e){function t(e){function t(){u&&(a.push(u),u="")}function n(){a[0]&&(o.push(a),a=[])}for(var i,u="",a=[],o=[],s=0,c=0,l=!1;;){if(i=e.charAt(c),""===i)return t(),n(),o;if(l){if("*"===i&&"/"===e[c+1]){l=!1,c+=2,t();continue}c+=1}else{if(r(i)){if(e.charAt(c-1)&&r(e.charAt(c-1))||!u){c+=1;continue}if(0===s){t(),c+=1;continue}i=" "}else if("("===i)s+=1;else if(")"===i)s-=1;else{if(","===i){t(),n(),c+=1;continue}if("/"===i&&"*"===e.charAt(c+1)){l=!0,c+=2;continue}}u+=i,c+=1}}}function n(e){return l.test(e)&&parseFloat(e)>=0?!0:f.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var i,u,a,o,s,c,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(u=t(e),a=u.length,i=0;a>i;i++)if(o=u[i],s=o[o.length-1],n(s)){if(c=s,o.pop(),0===o.length)return c;if(o=o.join(" "),g.matchesMedia(o))return c}return"100vw"}t.createElement("picture");var h,m,v,y,g={},A=function(){},S=t.createElement("img"),w=S.getAttribute,b=S.setAttribute,x=S.removeAttribute,E=t.documentElement,L={},T={algorithm:""},q="data-pfsrc",k=q+"set",_=navigator.userAgent,j=/rident/.test(_)||/ecko/.test(_)&&_.match(/rv\:(\d+)/)&&RegExp.$1>35,M="currentSrc",z=/\s+\+?\d+(e\d+)?w/,O=/(\([^)]+\))?\s*(.+)/,R=e.picturefillCFG,F="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",I="font-size:100%!important;",C=!0,D={},B={},P=e.devicePixelRatio,N={px:1,"in":96},W=t.createElement("a"),U=!1,Q=/^[ \t\n\r\u000c]+/,G=/^[, \t\n\r\u000c]+/,H=/^[^ \t\n\r\u000c]+/,K=/[,]+$/,X=/^\d+$/,V=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,J=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Y=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},$=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=Y(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in D))if(D[t]=!1,r&&(i=t.match(e)))D[t]=i[1]*N[i[2]];else try{D[t]=new Function("e",n(t))(N)}catch(u){}return D[t]}}(),Z=function(e,t){return e.w?(e.cWidth=g.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){var n,r,i,u=e||{};if(u.elements&&1===u.elements.nodeType&&("IMG"===u.elements.nodeName.toUpperCase()?u.elements=[u.elements]:(u.context=u.elements,u.elements=null)),n=u.elements||g.qsa(u.context||t,u.reevaluate||u.reselect?g.sel:g.selShort),i=n.length){for(g.setupRun(u),U=!0,r=0;i>r;r++)g.fillImg(n[r],u);g.teardownRun(u)}};h=e.console&&console.warn?function(e){console.warn(e)}:A,M in S||(M="src"),L["image/jpeg"]=!0,L["image/gif"]=!0,L["image/png"]=!0,L["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),g.ns=("pf"+(new Date).getTime()).substr(0,9),g.supSrcset="srcset"in S,g.supSizes="sizes"in S,g.supPicture=!!e.HTMLPictureElement,g.supSrcset&&g.supPicture&&!g.supSizes&&!function(e){S.srcset="data:,a",e.src="data:,a",g.supSrcset=S.complete===e.complete,g.supPicture=g.supSrcset&&g.supPicture}(t.createElement("img")),g.selShort="picture>img,img[srcset]",g.sel=g.selShort,g.cfg=T,g.supSrcset&&(g.sel+=",img["+k+"]"),g.DPR=P||1,g.u=N,g.types=L,v=g.supSrcset&&!g.supSizes,g.setSize=A,g.makeUrl=Y(function(e){return W.href=e,W.href}),g.qsa=function(e,t){return e.querySelectorAll(t)},g.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?g.matchesMedia=function(e){return!e||matchMedia(e).matches}:g.matchesMedia=g.mMQ,g.matchesMedia.apply(this,arguments)},g.mMQ=function(e){return e?$(e):!0},g.calcLength=function(e){var t=$(e,!0)||!1;return 0>t&&(t=!1),t},g.supportsType=function(e){return e?L[e]:!0},g.parseSize=Y(function(e){var t=(e||"").match(O);return{media:t&&t[1],length:t&&t[2]}}),g.parseSet=function(e){return e.cands||(e.cands=p(e.srcset,e)),e.cands},g.getEmValue=function(){var e;if(!m&&(e=t.body)){var n=t.createElement("div"),r=E.style.cssText,i=e.style.cssText;n.style.cssText=F,E.style.cssText=I,e.style.cssText=I,e.appendChild(n),m=n.offsetWidth,e.removeChild(n),m=parseFloat(m,10),E.style.cssText=r,e.style.cssText=i}return m||16},g.calcListLength=function(e){if(!(e in B)||T.uT){var t=g.calcLength(d(e));B[e]=t?t:N.width}return B[e]},g.setRes=function(e){var t;if(e){t=g.parseSet(e);for(var n=0,r=t.length;r>n;n++)Z(t[n],e.sizes)}return t},g.setRes.res=Z,g.applySetCandidate=function(e,t){if(e.length){var n,r,i,u,o,l,f,p,d,h,m=t[g.ns],v=g.DPR;if(l=m.curSrc||t[M],f=m.curCan||c(t,l,e[0].set),f&&f.set===e[0].set&&(h=j&&!t.complete&&f.res-.1>v,h||(f.cached=!0,f&&p&&f.res>=v&&(o=f))),!o)for(e.sort(s),u=e.length,o=e[u-1],r=0;u>r;r++)if(n=e[r],n.res>=v){i=r-1,o=e[i]&&(h||l!==g.makeUrl(n.url))&&a(e[i].res,n.res,v,e[i].cached)?e[i]:n;break}o&&(d=g.makeUrl(o.url),m.curSrc=d,m.curCan=o,d!==l&&g.setSrc(t,o),g.setSize(t))}},g.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},g.getSet=function(e){var t,n,r,i=!1,u=e[g.ns].sets;for(t=0;t<u.length&&!i;t++)if(n=u[t],n.srcset&&g.matchesMedia(n.media)&&(r=g.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},g.parseSets=function(e,t,r){var i,u,a,o,s=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[g.ns];(c.src===n||r.src)&&(c.src=w.call(e,"src"),c.src?b.call(e,q,c.src):x.call(e,q)),(c.srcset===n||r.srcset||!g.supSrcset||e.srcset)&&(i=w.call(e,"srcset"),c.srcset=i,o=!0),c.sets=[],s&&(c.pic=!0,f(t,c.sets)),c.srcset?(u={srcset:c.srcset,sizes:w.call(e,"sizes")},c.sets.push(u),a=(v||c.src)&&z.test(c.srcset||""),a||!c.src||l(c.src,u)||u.has1x||(u.srcset+=", "+c.src,u.cands.push({url:c.src,d:1,set:u}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=n,c.supported=!(s||u&&!g.supSrcset||a),o&&g.supSrcset&&!c.supported&&(i?(b.call(e,k,i),e.srcset=""):x.call(e,k)),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==g.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},g.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[g.ns]||(e[g.ns]={}),n=e[g.ns],(r||n.evaled!==y)&&((!n.parsed||t.reevaluate)&&g.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:o(e))},g.setupRun=function(){(!U||C||P!==e.devicePixelRatio)&&u()},g.supPicture?(ee=A,g.fillImg=A):!function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||"";u=setTimeout(i,"loading"===e?200:999),t.body&&(g.fillImgs(),n=n||r.test(e),n&&clearTimeout(u))},u=setTimeout(i,t.body?9:99),a=function(e,t){var n,r,i=function(){var u=new Date-r;t>u?n=setTimeout(i,t-u):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}},o=E.clientHeight,s=function(){C=Math.max(e.innerWidth||0,E.clientWidth)!==N.width||E.clientHeight!==o,o=E.clientHeight,C&&g.fillImgs()};J(e,"resize",a(s,99)),J(t,"readystatechange",i)}(),g.picturefill=ee,g.fillImgs=ee,g.teardownRun=A,ee._=g,e.picturefillCFG={pf:g,push:function(e){var t=e.shift();"function"==typeof g[t]?g[t].apply(g,e):(T[t]=e[0],U&&g.fillImgs({reselect:!0}))}};for(;R&&R.length;)e.picturefillCFG.push(R.shift());e.picturefill=ee,"object"==typeof module&&"object"==typeof module.exports?module.exports=ee:"function"==typeof define&&define.amd&&define("picturefill",function(){
return ee}),g.supPicture||(L["image/webp"]=i("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),mainnav(),_.each(document.querySelectorAll(".events"),function(e){new Event(e)});var galleryElements=document.querySelectorAll(".gallery");_.each(galleryElements,function(e){new Gallery(e)}),function(){var e=document.querySelectorAll(".share a");_.each(e,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=this.href,n=640,r=400,i=screen.width/2-n/2,u=screen.height/2-r/2;window.open(t,"","width="+n+", height="+r+", top="+u+", left="+i)})})}(),document.body.classList.contains("homepage")&&homepage(),document.body.classList.contains("filmblock")&&filmblock(),document.body.classList.contains("call-for-entries")&&callForEntries();
//# sourceMappingURL=./script.js.map