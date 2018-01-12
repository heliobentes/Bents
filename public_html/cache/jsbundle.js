 /*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
 /*
 * jQuery Dropdown: A simple dropdown plugin
 *
 * Contribute: https://github.com/claviska/jquery-dropdown
 *
 * @license: MIT license: http://opensource.org/licenses/MIT
 *
 */
jQuery&&function($){function t(t,e){var d=t?$(this):e,n=$(d.attr("data-jq-dropdown")),a=d.hasClass("jq-dropdown-open");if(t){if($(t.target).hasClass("jq-dropdown-ignore"))return;t.preventDefault(),t.stopPropagation()}else if(d!==e.target&&$(e.target).hasClass("jq-dropdown-ignore"))return;o(),a||d.hasClass("jq-dropdown-disabled")||(d.addClass("jq-dropdown-open"),n.data("jq-dropdown-trigger",d).show(),r(),n.trigger("show",{jqDropdown:n,trigger:d}))}function o(t){var o=t?$(t.target).parents().addBack():null;if(o&&o.is(".jq-dropdown")){if(!o.is(".jq-dropdown-menu"))return;if(!o.is("A"))return}var r=jQuery.Event("hide");$(document).find(".jq-dropdown:visible").each(function(){var t=$(this);t.hide().removeData("jq-dropdown-trigger").trigger("hide",{jqDropdown:t})}),r.isDefaultPrevented()||($(document).find(".jq-dropdown:visible").each(function(){var t=$(this);t.hide().removeData("jq-dropdown-trigger").trigger("hide",{jqDropdown:t})}),$(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open"))}function r(){var t=$(".jq-dropdown:visible").eq(0),o=t.data("jq-dropdown-trigger"),r=o?parseInt(o.attr("data-horizontal-offset")||0,10):null,e=o?parseInt(o.attr("data-vertical-offset")||0,10):null;0!==t.length&&o&&(t.hasClass("jq-dropdown-relative")?t.css({left:t.hasClass("jq-dropdown-anchor-right")?o.position().left-(t.outerWidth(!0)-o.outerWidth(!0))-parseInt(o.css("margin-right"),10)+r:o.position().left+parseInt(o.css("margin-left"),10)+r,top:o.position().top+o.outerHeight(!0)-parseInt(o.css("margin-top"),10)+e}):t.css({left:t.hasClass("jq-dropdown-anchor-right")?o.offset().left-(t.outerWidth()-o.outerWidth())+r:o.offset().left+r,top:o.offset().top+o.outerHeight()+e}))}$.extend($.fn,{jqDropdown:function(r,e){switch(r){case"show":return t(null,$(this)),$(this);case"hide":return o(),$(this);case"attach":return $(this).attr("data-jq-dropdown",e);case"detach":return o(),$(this).removeAttr("data-jq-dropdown");case"disable":return $(this).addClass("jq-dropdown-disabled");case"enable":return o(),$(this).removeClass("jq-dropdown-disabled")}}}),$(document).on("click.jq-dropdown","[data-jq-dropdown]",t),$(document).on("click.jq-dropdown",o),$(window).on("resize",r)}(jQuery); /*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);
 /*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c}); /*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return t!=1&&(n+="s"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Please enter "+t+" or more characters";return n},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return e.maximum!=1&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),{define:e.define,require:e.require}})(); /*!
 * jquery.spinner v0.2.1 (https://vsn4ik.github.io/jquery.spinner/)
 * Copyright 2013-2017 xixilive
 * Licensed under the MIT license
 */

"use strict";!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){var i,t,e=function(i,t){return this.$el=i,this.options=n.extend({},e.rules.defaults,e.rules[t.rule]||{},t),this.min=Number(this.options.min)||0,this.max=Number(this.options.max)||0,this.$el.on({"focus.spinner":n.proxy(function(i){i.preventDefault(),n(document).trigger("mouseup.spinner"),this.oldValue=this.value()},this),"change.spinner":n.proxy(function(n){n.preventDefault(),this.value(this.$el.val())},this),"keydown.spinner":n.proxy(function(n){var i={38:"up",40:"down"}[n.which];i&&(n.preventDefault(),this.spin(i))},this)}),this.oldValue=this.value(),this.value(this.$el.val()),this};e.rules={defaults:{min:null,max:null,step:1,precision:0},currency:{min:0,max:null,step:.01,precision:2},quantity:{min:1,max:999,step:1,precision:0},percent:{min:1,max:100,step:1,precision:0},month:{min:1,max:12,step:1,precision:0},day:{min:1,max:31,step:1,precision:0},hour:{min:0,max:23,step:1,precision:0},minute:{min:1,max:59,step:1,precision:0},second:{min:1,max:59,step:1,precision:0}},e.prototype={spin:function(i){if(!this.$el.prop("disabled")){this.oldValue=this.value();var t=n.isFunction(this.options.step)?this.options.step.call(this,i):this.options.step,e="up"===i?1:-1;this.value(this.oldValue+Number(t)*e)}},value:function(e){if(null===e||void 0===e)return this.numeric(this.$el.val());e=this.numeric(e);var s=this.validate(e);0!==s&&(e=-1===s?this.min:this.max),this.$el.val(e.toFixed(this.options.precision)),this.oldValue!==this.value()&&(this.$el.trigger("changing.spinner",[this.value(),this.oldValue]),clearTimeout(i),i=setTimeout(n.proxy(function(){this.$el.trigger("changed.spinner",[this.value(),this.oldValue])},this),t.delay))},numeric:function(n){return n=this.options.precision>0?parseFloat(n,10):parseInt(n,10),isFinite(n)?n:n||this.options.min||0},validate:function(n){return null!==this.options.min&&n<this.min?-1:null!==this.options.max&&n>this.max?1:0}},(t=function(i,t){this.$el=n(i),this.$spinning=this.$el.find('[data-spin="spinner"]'),0===this.$spinning.length&&(this.$spinning=this.$el.find(':input[type="text"]')),t=n.extend({},t,this.$spinning.data()),this.spinning=new e(this.$spinning,t),this.$el.on("click.spinner",'[data-spin="up"], [data-spin="down"]',n.proxy(this,"spin")).on("mousedown.spinner",'[data-spin="up"], [data-spin="down"]',n.proxy(this,"spin")),n(document).on("mouseup.spinner",n.proxy(function(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)},this)),t.delay&&this.delay(t.delay),t.changed&&this.changed(t.changed),t.changing&&this.changing(t.changing)}).delay=500,t.prototype={constructor:t,spin:function(i){var t=n(i.currentTarget).data("spin");switch(i.type){case"click":i.preventDefault(),this.spinning.spin(t);break;case"mousedown":1===i.which&&(this.spinTimeout=setTimeout(n.proxy(this,"beginSpin",t),300))}},delay:function(n){var i=Number(n);i>=0&&(this.constructor.delay=i+100)},value:function(){return this.spinning.value()},changed:function(n){this.bindHandler("changed.spinner",n)},changing:function(n){this.bindHandler("changing.spinner",n)},bindHandler:function(i,t){n.isFunction(t)?this.$spinning.on(i,t):this.$spinning.off(i)},beginSpin:function(i){this.spinInterval=setInterval(n.proxy(this.spinning,"spin",i),100)}};var s=n.fn.spinner;return n.fn.spinner=function(i,e){return this.each(function(){var s=n.data(this,"spinner");s||(s=new t(this,i),n.data(this,"spinner",s)),"delay"===i||"changed"===i||"changing"===i?s[i](e):"step"===i&&e?s.spinning.step=e:"spin"===i&&e&&s.spinning.spin(e)})},n.fn.spinner.Constructor=t,n.fn.spinner.noConflict=function(){return n.fn.spinner=s,this},n(function(){n('[data-trigger="spinner"]').spinner()}),n.fn.spinner}); /** Trumbowyg v2.9.3 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
jQuery.trumbowyg={langs:{en:{viewHTML:"View HTML",undo:"Undo",redo:"Redo",formatting:"Formatting",p:"Paragraph",blockquote:"Quote",code:"Code",header:"Header",bold:"Bold",italic:"Italic",strikethrough:"Stroke",underline:"Underline",strong:"Strong",em:"Emphasis",del:"Deleted",superscript:"Superscript",subscript:"Subscript",unorderedList:"Unordered list",orderedList:"Ordered list",insertImage:"Insert Image",link:"Link",createLink:"Insert link",unlink:"Remove link",justifyLeft:"Align Left",justifyCenter:"Align Center",justifyRight:"Align Right",justifyFull:"Align Justify",horizontalRule:"Insert horizontal rule",removeformat:"Remove format",fullscreen:"Fullscreen",close:"Close",submit:"Confirm",reset:"Cancel",required:"Required",description:"Description",title:"Title",text:"Text",target:"Target",width:"Width"}},plugins:{},svgPath:null,hideButtonTexts:null},Object.defineProperty(jQuery.trumbowyg,"defaultOptions",{value:{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,autogrowOnEnter:!1,imageWidthModalEdit:!1,prefix:"trumbowyg-",semantic:!0,resetCss:!1,removeformatPasted:!1,tagsToRemove:[],btns:[["viewHTML"],["undo","redo"],["formatting"],["strong","em","del"],["superscript","subscript"],["link"],["insertImage"],["justifyLeft","justifyCenter","justifyRight","justifyFull"],["unorderedList","orderedList"],["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],plugins:{}},writable:!1,enumerable:!0,configurable:!1}),function(e,t,n,a){"use strict";var o="tbwconfirm",r="tbwcancel";a.fn.trumbowyg=function(e,t){var n="trumbowyg";if(e===Object(e)||!e)return this.each(function(){a(this).data(n)||a(this).data(n,new i(this,e))});if(1===this.length)try{var o=a(this).data(n);switch(e){case"execCmd":return o.execCmd(t.cmd,t.param,t.forceCss);case"openModal":return o.openModal(t.title,t.content);case"closeModal":return o.closeModal();case"openModalInsert":return o.openModalInsert(t.title,t.fields,t.callback);case"saveRange":return o.saveRange();case"getRange":return o.range;case"getRangeText":return o.getRangeText();case"restoreRange":return o.restoreRange();case"enable":return o.setDisabled(!1);case"disable":return o.setDisabled(!0);case"toggle":return o.toggle();case"destroy":return o.destroy();case"empty":return o.empty();case"html":return o.html(t)}}catch(r){}return!1};var i=function(o,r){var i=this,s="trumbowyg-icons",l=a.trumbowyg;i.doc=o.ownerDocument||n,i.$ta=a(o),i.$c=a(o),r=r||{},null!=r.lang||null!=l.langs[r.lang]?i.lang=a.extend(!0,{},l.langs.en,l.langs[r.lang]):i.lang=l.langs.en,i.hideButtonTexts=null!=l.hideButtonTexts?l.hideButtonTexts:r.hideButtonTexts;var d=null!=l.svgPath?l.svgPath:r.svgPath;if(i.hasSvg=d!==!1,i.svgPath=i.doc.querySelector("base")?t.location.href.split("#")[0]:"",0===a("#"+s,i.doc).length&&d!==!1){if(null==d){for(var c=n.getElementsByTagName("script"),u=0;u<c.length;u+=1){var g=c[u].src,f=g.match("trumbowyg(.min)?.js");null!=f&&(d=g.substring(0,g.indexOf(f[0]))+"/ui/icons.svg")}null==d&&console.warn("You must define svgPath: https://goo.gl/CfTY9U")}var h=i.doc.createElement("div");h.id=s,i.doc.body.insertBefore(h,i.doc.body.childNodes[0]),a.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",crossDomain:!0,url:d,data:null,beforeSend:null,complete:null,success:function(e){h.innerHTML=(new XMLSerializer).serializeToString(e.documentElement)}})}var p=i.lang.header,m=function(){return(t.chrome||t.Intl&&Intl.v8BreakIterator)&&"CSS"in t};i.btnsDef={viewHTML:{fn:"toggle"},undo:{isSupported:m,key:"Z"},redo:{isSupported:m,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:p+" 1"},h2:{fn:"formatBlock",title:p+" 2"},h3:{fn:"formatBlock",title:p+" 3"},h4:{fn:"formatBlock",title:p+" 4"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{"class":"trumbowyg-not-disable"},close:{fn:"destroy","class":"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},i.o=a.extend(!0,{},l.defaultOptions,r),i.o.hasOwnProperty("imgDblClickHandler")||(i.o.imgDblClickHandler=i.getDefaultImgDblClickHandler()),i.disabled=i.o.disabled||"TEXTAREA"===o.nodeName&&o.disabled,r.btns?i.o.btns=r.btns:i.o.semantic||(i.o.btns[3]=["bold","italic","underline","strikethrough"]),a.each(i.o.btnsDef,function(e,t){i.addBtnDef(e,t)}),i.eventNamespace="trumbowyg-event",i.keys=[],i.tagToButton={},i.tagHandlers=[],i.pasteHandlers=[].concat(i.o.pasteHandlers),i.isIE=e.userAgent.indexOf("MSIE")!==-1||e.appVersion.indexOf("Trident/")!==-1,i.init()};i.prototype={init:function(){var e=this;e.height=e.$ta.height(),e.initPlugins();try{e.doc.execCommand("enableObjectResizing",!1,!1),e.doc.execCommand("defaultParagraphSeparator",!1,"p")}catch(t){}e.buildEditor(),e.buildBtnPane(),e.fixedBtnPaneEvents(),e.buildOverlay(),setTimeout(function(){e.disabled&&e.setDisabled(!0),e.$c.trigger("tbwinit")})},addBtnDef:function(e,t){this.btnsDef[e]=t},buildEditor:function(){var e=this,n=e.o.prefix,o="";e.$box=a("<div/>",{"class":n+"box "+n+"editor-visible "+n+e.o.lang+" trumbowyg"}),e.isTextarea=e.$ta.is("textarea"),e.isTextarea?(o=e.$ta.val(),e.$ed=a("<div/>"),e.$box.insertAfter(e.$ta).append(e.$ed,e.$ta)):(e.$ed=e.$ta,o=e.$ed.html(),e.$ta=a("<textarea/>",{name:e.$ta.attr("id"),height:e.height}).val(o),e.$box.insertAfter(e.$ed).append(e.$ta,e.$ed),e.syncCode()),e.$ta.addClass(n+"textarea").attr("tabindex",-1),e.$ed.addClass(n+"editor").attr({contenteditable:!0,dir:e.lang._dir||"ltr"}).html(o),e.o.tabindex&&e.$ed.attr("tabindex",e.o.tabindex),e.$c.is("[placeholder]")&&e.$ed.attr("placeholder",e.$c.attr("placeholder")),e.$c.is("[spellcheck]")&&e.$ed.attr("spellcheck",e.$c.attr("spellcheck")),e.o.resetCss&&e.$ed.addClass(n+"reset-css"),e.o.autogrow||e.$ta.add(e.$ed).css({height:e.height}),e.semanticCode(),e.o.autogrowOnEnter&&e.$ed.addClass(n+"autogrow-on-enter");var r,i=!1,s=!1,l=e.isIE?"keyup":"input";e.$ed.on("dblclick","img",e.o.imgDblClickHandler).on("keydown",function(t){if((t.ctrlKey||t.metaKey)&&!t.altKey){i=!0;var n=e.keys[String.fromCharCode(t.which).toUpperCase()];try{return e.execCmd(n.fn,n.param),!1}catch(a){}}}).on("compositionstart compositionupdate",function(){s=!0}).on(l+" compositionend",function(t){if("compositionend"===t.type)s=!1;else if(s)return;var n=t.which;n>=37&&n<=40||(!t.ctrlKey&&!t.metaKey||89!==n&&90!==n?i||17===n?"undefined"==typeof t.which&&e.semanticCode(!1,!1,!0):(e.semanticCode(!1,"compositionend"===t.type&&13===n),e.$c.trigger("tbwchange")):e.$c.trigger("tbwchange"),setTimeout(function(){i=!1},50))}).on("mouseup keydown keyup",function(t){(!t.ctrlKey&&!t.metaKey||t.altKey)&&setTimeout(function(){i=!1},50),clearTimeout(r),r=setTimeout(function(){e.updateButtonPaneStatus()},50)}).on("focus blur",function(t){if(e.$c.trigger("tbw"+t.type),"blur"===t.type&&a("."+n+"active-button",e.$btnPane).removeClass(n+"active-button "+n+"active"),e.o.autogrowOnEnter){if(e.autogrowOnEnterDontClose)return;"focus"===t.type?(e.autogrowOnEnterWasFocused=!0,e.autogrowEditorOnEnter()):e.o.autogrow||(e.$ed.css({height:e.$ed.css("min-height")}),e.$c.trigger("tbwresize"))}}).on("cut",function(){setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwchange")},0)}).on("paste",function(n){if(e.o.removeformatPasted){n.preventDefault(),t.getSelection&&t.getSelection().deleteFromDocument&&t.getSelection().deleteFromDocument();try{var o=t.clipboardData.getData("Text");try{e.doc.selection.createRange().pasteHTML(o)}catch(r){e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(o))}e.$c.trigger("tbwchange",n)}catch(i){e.execCmd("insertText",(n.originalEvent||n).clipboardData.getData("text/plain"))}}a.each(e.pasteHandlers,function(e,t){t(n)}),setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwpaste",n)},0)}),e.$ta.on("keyup",function(){e.$c.trigger("tbwchange")}).on("paste",function(){setTimeout(function(){e.$c.trigger("tbwchange")},0)}),e.$box.on("keydown",function(t){if(27===t.which&&1===a("."+n+"modal-box",e.$box).length)return e.closeModal(),!1})},autogrowEditorOnEnter:function(){var e=this;e.$ed.removeClass("autogrow-on-enter");var t=e.$ed[0].clientHeight;e.$ed.height("auto");var n=e.$ed[0].scrollHeight;e.$ed.addClass("autogrow-on-enter"),t!==n&&(e.$ed.height(t),setTimeout(function(){e.$ed.css({height:n}),e.$c.trigger("tbwresize")},0))},buildBtnPane:function(){var e=this,t=e.o.prefix,n=e.$btnPane=a("<div/>",{"class":t+"button-pane"});a.each(e.o.btns,function(o,r){a.isArray(r)||(r=[r]);var i=a("<div/>",{"class":t+"button-group "+(r.indexOf("fullscreen")>=0?t+"right":"")});a.each(r,function(t,n){try{e.isSupportedBtn(n)&&i.append(e.buildBtn(n))}catch(a){}}),i.html().trim().length>0&&n.append(i)}),e.$box.prepend(n)},buildBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=o.dropdown,i=null==o.hasIcon||o.hasIcon,s=t.lang[e]||e,l=a("<button/>",{type:"button","class":n+e+"-button "+(o["class"]||"")+(i?"":" "+n+"textual-button"),html:t.hasSvg&&i?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>':t.hideButtonTexts?"":o.text||o.title||t.lang[e]||e,title:(o.title||o.text||s)+(o.key?" (Ctrl + "+o.key+")":""),tabindex:-1,mousedown:function(){return r&&!a("."+e+"-"+n+"dropdown",t.$box).is(":hidden")||a("body",t.doc).trigger("mousedown"),!((t.$btnPane.hasClass(n+"disable")||t.$box.hasClass(n+"disabled"))&&!a(this).hasClass(n+"active")&&!a(this).hasClass(n+"not-disable"))&&(t.execCmd(!!r&&"dropdown"||o.fn||e,o.param||e,o.forceCss),!1)}});if(r){l.addClass(n+"open-dropdown");var d=n+"dropdown",c={"class":d+"-"+e+" "+d+" "+n+"fixed-top"};c["data-"+d]=e;var u=a("<div/>",c);a.each(r,function(e,n){t.btnsDef[n]&&t.isSupportedBtn(n)&&u.append(t.buildSubBtn(n))}),t.$box.append(u.hide())}else o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e});return r||(t.tagToButton[(o.tag||e).toLowerCase()]=e),l},buildSubBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=null==o.hasIcon||o.hasIcon;return o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e}),t.tagToButton[(o.tag||e).toLowerCase()]=e,a("<button/>",{type:"button","class":n+e+"-dropdown-button"+(o.ico?" "+n+o.ico+"-button":""),html:t.hasSvg&&r?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>'+(o.text||o.title||t.lang[e]||e):o.text||o.title||t.lang[e]||e,title:o.key?" (Ctrl + "+o.key+")":null,style:o.style||null,mousedown:function(){return a("body",t.doc).trigger("mousedown"),t.execCmd(o.fn||e,o.param||e,o.forceCss),!1}})},isSupportedBtn:function(e){try{return this.btnsDef[e].isSupported()}catch(t){}return!0},buildOverlay:function(){var e=this;return e.$overlay=a("<div/>",{"class":e.o.prefix+"overlay"}).appendTo(e.$box),e.$overlay},showOverlay:function(){var e=this;a(t).trigger("scroll"),e.$overlay.fadeIn(200),e.$box.addClass(e.o.prefix+"box-blur")},hideOverlay:function(){var e=this;e.$overlay.fadeOut(50),e.$box.removeClass(e.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var e=this,n=e.o.fixedFullWidth,o=e.$box;e.o.fixedBtnPane&&(e.isFixed=!1,a(t).on("scroll."+e.eventNamespace+" resize."+e.eventNamespace,function(){if(o){e.syncCode();var r=a(t).scrollTop(),i=o.offset().top+1,s=e.$btnPane,l=s.outerHeight()-2;r-i>0&&r-i-e.height<0?(e.isFixed||(e.isFixed=!0,s.css({position:"fixed",top:0,left:n?"0":"auto",zIndex:7}),a([e.$ta,e.$ed]).css({marginTop:s.height()})),s.css({width:n?"100%":o.width()-1+"px"}),a("."+e.o.prefix+"fixed-top",o).css({position:n?"fixed":"absolute",top:n?l:l+(r-i)+"px",zIndex:15})):e.isFixed&&(e.isFixed=!1,s.removeAttr("style"),a([e.$ta,e.$ed]).css({marginTop:0}),a("."+e.o.prefix+"fixed-top",o).css({position:"absolute",top:l}))}}))},setDisabled:function(e){var t=this,n=t.o.prefix;t.disabled=e,e?t.$ta.attr("disabled",!0):t.$ta.removeAttr("disabled"),t.$box.toggleClass(n+"disabled",e),t.$ed.attr("contenteditable",!e)},destroy:function(){var e=this,n=e.o.prefix;e.isTextarea?e.$box.after(e.$ta.css({height:""}).val(e.html()).removeClass(n+"textarea").show()):e.$box.after(e.$ed.css({height:""}).removeClass(n+"editor").removeAttr("contenteditable").removeAttr("dir").html(e.html()).show()),e.$ed.off("dblclick","img"),e.destroyPlugins(),e.$box.remove(),e.$c.removeData("trumbowyg"),a("body").removeClass(n+"body-fullscreen"),e.$c.trigger("tbwclose"),a(t).off("scroll."+e.eventNamespace+" resize."+e.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var e=this,t=e.o.prefix;e.o.autogrowOnEnter&&(e.autogrowOnEnterDontClose=!e.$box.hasClass(t+"editor-hidden")),e.semanticCode(!1,!0),setTimeout(function(){e.doc.activeElement.blur(),e.$box.toggleClass(t+"editor-hidden "+t+"editor-visible"),e.$btnPane.toggleClass(t+"disable"),a("."+t+"viewHTML-button",e.$btnPane).toggleClass(t+"active"),e.$box.hasClass(t+"editor-visible")?e.$ta.attr("tabindex",-1):e.$ta.removeAttr("tabindex"),e.o.autogrowOnEnter&&!e.autogrowOnEnterDontClose&&e.autogrowEditorOnEnter()},0)},dropdown:function(e){var n=this,o=n.doc,r=n.o.prefix,i=a("[data-"+r+"dropdown="+e+"]",n.$box),s=a("."+r+e+"-button",n.$btnPane),l=i.is(":hidden");if(a("body",o).trigger("mousedown"),l){var d=s.offset().left;s.addClass(r+"active"),i.css({position:"absolute",top:s.offset().top-n.$btnPane.offset().top+s.outerHeight(),left:n.o.fixedFullWidth&&n.isFixed?d+"px":d-n.$btnPane.offset().left+"px"}).show(),a(t).trigger("scroll"),a("body",o).on("mousedown."+n.eventNamespace,function(e){i.is(e.target)||(a("."+r+"dropdown",n.$box).hide(),a("."+r+"active",n.$btnPane).removeClass(r+"active"),a("body",o).off("mousedown."+n.eventNamespace))})}},html:function(e){var t=this;return null!=e?(t.$ta.val(e),t.syncCode(!0),t):t.$ta.val()},syncTextarea:function(){var e=this;e.$ta.val(e.$ed.text().trim().length>0||e.$ed.find("hr,img,embed,iframe,input").length>0?e.$ed.html():"")},syncCode:function(e){var t=this;if(!e&&t.$ed.is(":visible"))t.syncTextarea();else{var n=a("<div>").html(t.$ta.val()),o=a("<div>").append(n);a(t.o.tagsToRemove.join(","),o).remove(),t.$ed.html(o.contents().html())}if(t.o.autogrow&&(t.height=t.$ed.height(),t.height!==t.$ta.css("height")&&(t.$ta.css({height:t.height}),t.$c.trigger("tbwresize"))),t.o.autogrowOnEnter){t.$ed.height("auto");var r=t.autogrowOnEnterWasFocused?t.$ed[0].scrollHeight:t.$ed.css("min-height");r!==t.$ta.css("height")&&(t.$ed.css({height:r}),t.$c.trigger("tbwresize"))}},semanticCode:function(e,t,n){var o=this;if(o.saveRange(),o.syncCode(e),o.o.semantic){if(o.semanticTag("b","strong"),o.semanticTag("i","em"),o.semanticTag("s","del"),o.semanticTag("strike","del"),t){var r=o.o.inlineElementsSelector,i=":not("+r+")";o.$ed.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim().length>0}).wrap("<span data-tbw/>");var s=function(e){if(0!==e.length){var t=e.nextUntil(i).addBack().wrapAll("<p/>").parent(),n=t.nextAll(r).first();t.next("br").remove(),s(n)}};s(o.$ed.children(r).first()),o.semanticTag("div","p",!0),o.$ed.find("p").filter(function(){return(!o.range||this!==o.range.startContainer)&&(0===a(this).text().trim().length&&0===a(this).children().not("br,span").length)}).contents().unwrap(),a("[data-tbw]",o.$ed).contents().unwrap(),o.$ed.find("p:empty").remove()}n||o.restoreRange(),o.syncTextarea()}},semanticTag:function(e,t,n){a(e,this.$ed).each(function(){var e=a(this);e.wrap("<"+t+"/>"),n&&a.each(e.prop("attributes"),function(){e.parent().attr(this.name,this.value)}),e.contents().unwrap()})},createLink:function(){for(var e,t,n,o=this,r=o.doc.getSelection(),i=r.focusNode;["A","DIV"].indexOf(i.nodeName)<0;)i=i.parentNode;if(i&&"A"===i.nodeName){var s=a(i);e=s.attr("href"),t=s.attr("title"),n=s.attr("target");var l=o.doc.createRange();l.selectNode(i),r.removeAllRanges(),r.addRange(l)}o.saveRange(),o.openModalInsert(o.lang.createLink,{url:{label:"URL",required:!0,value:e},title:{label:o.lang.title,value:t},text:{label:o.lang.text,value:(new XMLSerializer).serializeToString(r.getRangeAt(0).cloneContents())},target:{label:o.lang.target,value:n}},function(e){var t=a(['<a href="',e.url,'">',e.text,"</a>"].join(""));return e.title.length>0&&t.attr("title",e.title),e.target.length>0&&t.attr("target",e.target),o.range.deleteContents(),o.range.insertNode(t[0]),o.syncCode(),o.$c.trigger("tbwchange"),!0})},unlink:function(){var e=this,t=e.doc.getSelection(),n=t.focusNode;if(t.isCollapsed){for(;["A","DIV"].indexOf(n.nodeName)<0;)n=n.parentNode;if(n&&"A"===n.nodeName){var a=e.doc.createRange();a.selectNode(n),t.removeAllRanges(),t.addRange(a)}}e.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var e=this;e.saveRange();var t={url:{label:"URL",required:!0},alt:{label:e.lang.description,value:e.getRangeText()}};e.o.imageWidthModalEdit&&(t.width={}),e.openModalInsert(e.lang.insertImage,t,function(t){e.execCmd("insertImage",t.url);var n=a('img[src="'+t.url+'"]:not([alt])',e.$box);return n.attr("alt",t.alt),e.o.imageWidthModalEdit&&n.attr({width:t.width}),e.syncCode(),e.$c.trigger("tbwchange"),!0})},fullscreen:function(){var e,n=this,o=n.o.prefix,r=o+"fullscreen";n.$box.toggleClass(r),e=n.$box.hasClass(r),a("body").toggleClass(o+"body-fullscreen",e),a(t).trigger("scroll"),n.$c.trigger("tbw"+(e?"open":"close")+"fullscreen")},execCmd:function(e,t,n,a){var o=this;a=!!a||"","dropdown"!==e&&o.$ed.focus();try{o.doc.execCommand("styleWithCSS",!1,n||!1)}catch(r){}try{o[e+a](t)}catch(r){try{e(t)}catch(i){"insertHorizontalRule"===e?t=void 0:"formatBlock"===e&&o.isIE&&(t="<"+t+">"),o.doc.execCommand(e,!1,t),o.syncCode(),o.semanticCode(!1,!0)}"dropdown"!==e&&(o.updateButtonPaneStatus(),o.$c.trigger("tbwchange"))}},openModal:function(e,n){var i=this,s=i.o.prefix;if(a("."+s+"modal-box",i.$box).length>0)return!1;i.o.autogrowOnEnter&&(i.autogrowOnEnterDontClose=!0),i.saveRange(),i.showOverlay(),i.$btnPane.addClass(s+"disable");var l=a("<div/>",{"class":s+"modal "+s+"fixed-top"}).css({top:i.$btnPane.height()}).appendTo(i.$box);i.$overlay.one("click",function(){return l.trigger(r),!1});var d=a("<form/>",{action:"",html:n}).on("submit",function(){return l.trigger(o),!1}).on("reset",function(){return l.trigger(r),!1}).on("submit reset",function(){i.o.autogrowOnEnter&&(i.autogrowOnEnterDontClose=!1)}),c=a("<div/>",{"class":s+"modal-box",html:d}).css({top:"-"+i.$btnPane.outerHeight()+"px",opacity:0}).appendTo(l).animate({top:0,opacity:1},100);return a("<span/>",{text:e,"class":s+"modal-title"}).prependTo(c),l.height(c.outerHeight()+10),a("input:first",c).focus(),i.buildModalBtn("submit",c),i.buildModalBtn("reset",c),a(t).trigger("scroll"),l},buildModalBtn:function(e,t){var n=this,o=n.o.prefix;return a("<button/>",{"class":o+"modal-button "+o+"modal-"+e,type:e,text:n.lang[e]||e}).appendTo(a("form",t))},closeModal:function(){var e=this,t=e.o.prefix;e.$btnPane.removeClass(t+"disable"),e.$overlay.off();var n=a("."+t+"modal-box",e.$box);n.animate({top:"-"+n.height()},100,function(){n.parent().remove(),e.hideOverlay()}),e.restoreRange()},openModalInsert:function(e,t,n){var i=this,s=i.o.prefix,l=i.lang,d="";return a.each(t,function(e,t){var n=t.label,a=t.name||e,o=t.attributes||{},r=Object.keys(o).map(function(e){return e+'="'+o[e]+'"'}).join(" ");d+='<label><input type="'+(t.type||"text")+'" name="'+a+'" value="'+(t.value||"").replace(/"/g,"&quot;")+'"'+r+'><span class="'+s+'input-infos"><span>'+(n?l[n]?l[n]:n:l[e]?l[e]:e)+"</span></span></label>"}),i.openModal(e,d).on(o,function(){var e=a("form",a(this)),r=!0,s={};a.each(t,function(t,n){var o=a('input[name="'+t+'"]',e),l=o.attr("type");"checkbox"===l.toLowerCase()?s[t]=o.is(":checked"):s[t]=a.trim(o.val()),n.required&&""===s[t]?(r=!1,i.addErrorOnModalField(o,i.lang.required)):n.pattern&&!n.pattern.test(s[t])&&(r=!1,i.addErrorOnModalField(o,n.patternError))}),r&&(i.restoreRange(),n(s,t)&&(i.syncCode(),i.$c.trigger("tbwchange"),i.closeModal(),a(this).off(o)))}).one(r,function(){a(this).off(o),i.closeModal()})},addErrorOnModalField:function(e,t){var n=this.o.prefix,o=e.parent();e.on("change keyup",function(){o.removeClass(n+"input-error")}),o.addClass(n+"input-error").find("input+span").append(a("<span/>",{"class":n+"msg-error",text:t}))},getDefaultImgDblClickHandler:function(){var e=this;return function(){var t=a(this),n=t.attr("src"),o="(Base64)";0===n.indexOf("data:image")&&(n=o);var r={url:{label:"URL",value:n,required:!0},alt:{label:e.lang.description,value:t.attr("alt")}};return e.o.imageWidthModalEdit&&(r.width={value:t.attr("width")?t.attr("width"):""}),e.openModalInsert(e.lang.insertImage,r,function(n){return n.src!==o&&t.attr({src:n.url}),t.attr({alt:n.alt}),e.o.imageWidthModalEdit&&(parseInt(n.width)>0?t.attr({width:n.width}):t.removeAttr("width")),!0}),!1}},saveRange:function(){var e=this,t=e.doc.getSelection();if(e.range=null,t.rangeCount){var n,a=e.range=t.getRangeAt(0),o=e.doc.createRange();o.selectNodeContents(e.$ed[0]),o.setEnd(a.startContainer,a.startOffset),n=(o+"").length,e.metaRange={start:n,end:n+(a+"").length}}},restoreRange:function(){var e,t=this,n=t.metaRange,a=t.range,o=t.doc.getSelection();if(a){if(n&&n.start!==n.end){var r,i=0,s=[t.$ed[0]],l=!1,d=!1;for(e=t.doc.createRange();!d&&(r=s.pop());)if(3===r.nodeType){var c=i+r.length;!l&&n.start>=i&&n.start<=c&&(e.setStart(r,n.start-i),l=!0),l&&n.end>=i&&n.end<=c&&(e.setEnd(r,n.end-i),d=!0),i=c}else for(var u=r.childNodes,g=u.length;g>0;)g-=1,s.push(u[g])}o.removeAllRanges(),o.addRange(e||a)}},getRangeText:function(){return this.range+""},updateButtonPaneStatus:function(){var e=this,t=e.o.prefix,n=e.getTagsRecursive(e.doc.getSelection().focusNode),o=t+"active-button "+t+"active";a("."+t+"active-button",e.$btnPane).removeClass(o),a.each(n,function(n,r){var i=e.tagToButton[r.toLowerCase()],s=a("."+t+i+"-button",e.$btnPane);if(s.length>0)s.addClass(o);else try{s=a("."+t+"dropdown ."+t+i+"-dropdown-button",e.$box);var l=s.parent().data("dropdown");a("."+t+l+"-button",e.$box).addClass(o)}catch(d){}})},getTagsRecursive:function(e,t){var n=this;if(t=t||(e&&e.tagName?[e.tagName]:[]),!e||!e.parentNode)return t;e=e.parentNode;var o=e.tagName;return"DIV"===o?t:("P"===o&&""!==e.style.textAlign&&t.push(e.style.textAlign),a.each(n.tagHandlers,function(a,o){t=t.concat(o(e,n))}),t.push(o),n.getTagsRecursive(e,t).filter(function(e){return null!=e}))},initPlugins:function(){var e=this;e.loadedPlugins=[],a.each(a.trumbowyg.plugins,function(t,n){n.shouldInit&&!n.shouldInit(e)||(n.init(e),n.tagHandler&&e.tagHandlers.push(n.tagHandler),e.loadedPlugins.push(n))})},destroyPlugins:function(){a.each(this.loadedPlugins,function(e,t){t.destroy&&t.destroy()})}}}(navigator,window,document,jQuery); !function(o){"use strict";function r(o){return("0"+parseInt(o).toString(16)).slice(-2)}function e(o){return o.search("rgb")===-1?o.replace("#",""):"rgba(0, 0, 0, 0)"===o?"transparent":(o=o.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/),r(o[1])+r(o[2])+r(o[3]))}function f(o,r){var f=[];if(!o.style)return f;if(""!==o.style.backgroundColor){var c=e(o.style.backgroundColor);r.o.plugins.colors.colorList.indexOf(c)>=0?f.push("backColor"+c):f.push("backColorFree")}var a;return""!==o.style.color?a=e(o.style.color):o.hasAttribute("color")&&(a=e(o.getAttribute("color"))),a&&(r.o.plugins.colors.colorList.indexOf(a)>=0?f.push("foreColor"+a):f.push("foreColorFree")),f}function c(r,e){var f=[];o.each(e.o.plugins.colors.colorList,function(o,c){var a=r+c,l={fn:r,forceCss:!0,param:"#"+c,style:"background-color: #"+c+";"};e.addBtnDef(a,l),f.push(a)});var c=r+"Remove",a={fn:"removeFormat",param:r,style:"background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkQAAfEJMRmwBYhoGBYQtMBYoAADziAp0jtJTgAAAAAElFTkSuQmCC);"};e.addBtnDef(c,a),f.push(c);var l=r+"Free",d={fn:function(){e.openModalInsert(e.lang[r],{color:{label:r,value:"#FFFFFF"}},function(o){return e.execCmd(r,o.color),!0})},text:"#",style:"text-indent: 0;line-height: 20px;padding: 0 5px;"};return e.addBtnDef(l,d),f.push(l),f}o.extend(!0,o.trumbowyg,{langs:{cs:{foreColor:"Barva textu",backColor:"Barva pozadí"},en:{foreColor:"Text color",backColor:"Background color"},fr:{foreColor:"Couleur du texte",backColor:"Couleur de fond"},nl:{foreColor:"Tekstkleur",backColor:"Achtergrondkleur"},sk:{foreColor:"Farba textu",backColor:"Farba pozadia"},zh_cn:{foreColor:"文字颜色",backColor:"背景颜色"},ru:{foreColor:"Цвет текста",backColor:"Цвет выделения текста"},ja:{foreColor:"文字色",backColor:"背景色"}}});var a={colorList:["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646","ffff00","f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","fff2ca","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","ffe694","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","b7dde8","fac08f","f2c314","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","92cddc","e36c09","c09100","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","31859b","974806","7f6000"]};o.extend(!0,o.trumbowyg,{plugins:{color:{init:function(o){o.o.plugins.colors=o.o.plugins.colors||a;var r={dropdown:c("foreColor",o)},e={dropdown:c("backColor",o)};o.addBtnDef("foreColor",r),o.addBtnDef("backColor",e)},tagHandler:f}}})}(jQuery); (function(){var a="\n//# sourceURL=",k="' of type ",n='<script type="text/javascript" src="',p="SCRIPT",r="array",t="complete",u="function",v="google.charts.load",w="hasOwnProperty",x="number",y="object",z="pre-45",A="propertyIsEnumerable",B="string",C="text/javascript",D="toLocaleString";function E(){return function(b){return b}}function F(){return function(){}}function G(b){return function(){return this[b]}}var I,J=J||{};J.scope={};
J.Up=function(b,c,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""};J.Gh=!1;J.fm=!1;J.gm=!1;J.defineProperty=J.Gh||typeof Object.defineProperties==u?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value)};
J.Ij=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};J.global=J.Ij(this);J.Sk=function(b){if(b){for(var c=J.global,d=["Promise"],e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];b=b(e);b!=e&&null!=b&&J.defineProperty(c,d,{configurable:!0,writable:!0,value:b})}};
J.Fq=function(b,c,d){b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var g=b[f];if(c.call(d,g,f,b))return{Zj:f,Ll:g}}return{Zj:-1,Ll:void 0}};J.yi="jscomp_symbol_";J.rg=function(){J.rg=F();J.global.Symbol||(J.global.Symbol=J.Symbol)};J.Symbol=function(){var b=0;return function(c){return J.yi+(c||"")+b++}}();
J.Fd=function(){J.rg();var b=J.global.Symbol.iterator;b||(b=J.global.Symbol.iterator=J.global.Symbol("iterator"));typeof Array.prototype[b]!=u&&J.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return J.df(this)}});J.Fd=F()};J.df=function(b){var c=0;return J.uk(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})};J.uk=function(b){J.Fd();b={next:b};b[J.global.Symbol.iterator]=function(){return this};return b};
J.Qg=function(b){J.Fd();var c=b[Symbol.iterator];return c?c.call(b):J.df(b)};J.Yh=!1;
J.Sk(function(b){function c(b){this.$=g.wa;this.ia=void 0;this.Ub=[];var c=this.gd();try{b(c.resolve,c.reject)}catch(q){c.reject(q)}}function d(){this.Ma=null}function e(b){return b instanceof c?b:new c(function(c){c(b)})}if(b&&!J.Yh)return b;d.prototype.ef=function(b){null==this.Ma&&(this.Ma=[],this.Ni());this.Ma.push(b)};d.prototype.Ni=function(){var b=this;this.ff(function(){b.uj()})};var f=J.global.setTimeout;d.prototype.ff=function(b){f(b,0)};d.prototype.uj=function(){for(;this.Ma&&this.Ma.length;){var b=
this.Ma;this.Ma=[];for(var c=0;c<b.length;++c){var d=b[c];delete b[c];try{d()}catch(H){this.Oi(H)}}}this.Ma=null};d.prototype.Oi=function(b){this.ff(function(){throw b;})};var g={wa:0,Ja:1,ka:2};c.prototype.gd=function(){function b(b){return function(e){d||(d=!0,b.call(c,e))}}var c=this,d=!1;return{resolve:b(this.Xk),reject:b(this.Yd)}};c.prototype.Xk=function(b){if(b===this)this.Yd(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.pl(b);else{a:switch(typeof b){case y:var d=
null!=b;break a;case u:d=!0;break a;default:d=!1}d?this.Wk(b):this.If(b)}};c.prototype.Wk=function(b){var c=void 0;try{c=b.then}catch(q){this.Yd(q);return}typeof c==u?this.ql(c,b):this.If(b)};c.prototype.Yd=function(b){this.mh(g.ka,b)};c.prototype.If=function(b){this.mh(g.Ja,b)};c.prototype.mh=function(b,c){if(this.$!=g.wa)throw Error("Cannot settle("+b+", "+c|"): Promise already settled in state"+this.$);this.$=b;this.ia=c;this.wj()};c.prototype.wj=function(){if(null!=this.Ub){for(var b=this.Ub,
c=0;c<b.length;++c)b[c].call(),b[c]=null;this.Ub=null}};var h=new d;c.prototype.pl=function(b){var c=this.gd();b.fc(c.resolve,c.reject)};c.prototype.ql=function(b,c){var d=this.gd();try{b.call(c,d.resolve,d.reject)}catch(H){d.reject(H)}};c.prototype.then=function(b,d){function e(b,c){return typeof b==u?function(c){try{f(b(c))}catch(ca){g(ca)}}:c}var f,g,h=new c(function(b,c){f=b;g=c});this.fc(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.fc=function(b,
c){function d(){switch(e.$){case g.Ja:b(e.ia);break;case g.ka:c(e.ia);break;default:throw Error("Unexpected state: "+e.$);}}var e=this;null==this.Ub?h.ef(d):this.Ub.push(function(){h.ef(d)})};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b)})};c.race=function(b){return new c(function(c,d){for(var f=J.Qg(b),g=f.next();!g.done;g=f.next())e(g.value).fc(c,d)})};c.all=function(b){var d=J.Qg(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;l--;
0==l&&b(h)}}var h=[],l=0;do h.push(void 0),l++,e(f.value).fc(g(h.length-1),c),f=d.next();while(!f.done)})};return c});var K=K||{};K.global=this;K.R=function(b){return void 0!==b};K.L=function(b){return typeof b==B};K.ck=function(b){return"boolean"==typeof b};K.Rb=function(b){return typeof b==x};
K.md=function(b,c,d){b=b.split(".");d=d||K.global;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&K.R(c)?d[e]=c:d=d[e]&&d[e]!==Object.prototype[e]?d[e]:d[e]={}};K.define=function(b,c){K.md(b,c)};K.ea=!0;K.ba="en";K.$c=!0;K.wi=!1;K.Uh=!K.ea;K.De=!1;K.Es=function(b){if(K.Kd())throw Error("goog.provide can not be used within a goog.module.");K.qf(b)};K.qf=function(b,c){K.md(b,c)};K.Di=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
K.Td=function(b){if(!K.L(b)||!b||-1==b.search(K.Di))throw Error("Invalid module identifier");if(!K.Kd())throw Error("Module "+b+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
if(K.na.Ud)throw Error("goog.module may only be called once per module.");K.na.Ud=b};K.Td.get=function(){return null};K.Td.$q=function(){return null};K.na=null;K.Kd=function(){return null!=K.na};K.Td.jd=function(){K.na.jd=!0};K.rt=function(b){if(K.Uh)throw b=b||"",Error("Importing test-only code into non-debug environment"+(b?": "+b:"."));};K.Lq=F();K.rb=function(b){b=b.split(".");for(var c=K.global,d=0;d<b.length;d++)if(c=c[b[d]],!K.cb(c))return null;return c};
K.kr=function(b,c){c=c||K.global;for(var d in b)c[d]=b[d]};K.hp=function(b,c,d,e){if(K.Ae){var f;b=b.replace(/\\/g,"/");var g=K.la;e&&"boolean"!==typeof e||(e=e?{module:"goog"}:{});for(var h=0;f=c[h];h++)g.Sb[f]=b,g.Od[b]=e;for(e=0;c=d[e];e++)b in g.gb||(g.gb[b]={}),g.gb[b][c]=!0}};K.Ut=!1;K.Xm=!0;K.Ek=function(b){K.global.console&&K.global.console.error(b)};K.Qs=F();K.La="";K.eb=F();K.gp=function(){throw Error("unimplemented abstract method");};
K.ip=function(b){b.Gd=void 0;b.Zq=function(){if(b.Gd)return b.Gd;K.ea&&(K.wg[K.wg.length]=b);return b.Gd=new b}};K.wg=[];K.fi=!0;K.ti=K.ea;K.Ck={};K.Ae=!1;K.Ve="detect";K.zi="transpile.js";
K.Ae&&(K.la={Od:{},Sb:{},gb:{},zh:{},je:{},pb:{}},K.qg=function(){var b=K.global.document;return null!=b&&"write"in b},K.xj=function(){if(K.R(K.global.ye)&&K.L(K.global.ye))K.La=K.global.ye;else if(K.qg()){var b=K.global.document,c=b.currentScript;b=c?[c]:b.getElementsByTagName(p);for(c=b.length-1;0<=c;--c){var d=b[c].src,e=d.lastIndexOf("?");e=-1==e?d.length:e;if("base.js"==d.substr(e-7,7)){K.La=d.substr(0,e-7);break}}}},K.Ed=function(b,c){(K.global.zm||K.Tl)(b,c)&&(K.la.je[b]=!0)},K.di=!(K.global.atob||
!K.global.document||!K.global.document.all),K.$g=!1,K.ak=function(b,c,d){K.Ed("",'goog.retrieveAndExec_("'+b+'", '+c+", "+d+");")},K.Wd=[],K.Yt=function(b,c){return K.fi&&K.R(K.global.JSON)?"goog.loadModule("+K.global.JSON.stringify(c+a+b+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+c+"\n;return exports});\n//# sourceURL="+b+"\n"},K.Ak=function(){var b=K.Wd.length;if(0<b){var c=K.Wd;K.Wd=[];for(var d=0;d<b;d++)K.Tg(c[d])}K.$g=!1},K.ks=function(b){K.Bg(b)&&K.Ji(b)&&K.Tg(K.La+K.zd(b))},
K.Bg=function(b){var c=(b=K.zd(b))&&K.la.Od[b]||{},d=c.lang||"es3";return b&&("goog"==c.module||K.Xg(d))?K.La+b in K.la.pb:!1},K.Ji=function(b){if((b=K.zd(b))&&b in K.la.gb)for(var c in K.la.gb[b])if(!K.mk(c)&&!K.Bg(c))return!1;return!0},K.Tg=function(b){if(b in K.la.pb){var c=K.la.pb[b];delete K.la.pb[b];K.Tj(c)}},K.es=F(),K.Sl=function(b){K.global.document.write(n+b+'">\x3c/script>')},K.Ki=function(b){var c=K.global.document,d=c.createElement("script");d.type=C;d.src=b;d.defer=!1;d.async=!1;c.head.appendChild(d)},
K.Tl=function(b,c){if(K.qg()){var d=K.global.document;if(!K.De&&d.readyState==t){if(/\bdeps.js$/.test(b))return!1;throw Error('Cannot write "'+b+'" after document load');}void 0===c?K.di?(K.$g=!0,c=" onreadystatechange='goog.onScriptLoad_(this, "+ ++K.Pg+")' ",d.write(n+b+'"'+c+">\x3c/script>")):K.De?K.Ki(b):K.Sl(b):d.write('<script type="text/javascript">'+K.Tk(c)+"\x3c/script>");return!0}return!1},K.Tk=function(b){return b.replace(/<\/(SCRIPT)/ig,"\\x3c/$1")},K.Xg=function(b){if("always"==K.Ve)return!0;
if("never"==K.Ve)return!1;K.Dc||(K.Dc=K.ej());if(b in K.Dc)return K.Dc[b];throw Error("Unknown language mode: "+b);},K.Dc=null,K.Pg=0,K.ys=function(b,c){b.readyState==t&&K.Pg==c&&K.Ak();return!0},K.Zt=function(b){function c(b){if(!(b in f.je||b in f.zh)){f.zh[b]=!0;if(b in f.gb)for(var g in f.gb[b])if(!K.mk(g))if(g in f.Sb)c(f.Sb[g]);else throw Error("Undefined nameToPath for "+g);b in e||(e[b]=!0,d.push(b))}}var d=[],e={},f=K.la;c(b);for(b=0;b<d.length;b++){var g=d[b];K.la.je[g]=!0}var h=K.na;K.na=
null;for(b=0;b<d.length;b++)if(g=d[b]){var l=f.Od[g]||{},m=K.Xg(l.lang||"es3");"goog"==l.module||m?K.ak(K.La+g,"goog"==l.module,m):K.Ed(K.La+g)}else throw K.na=h,Error("Undefined script input");K.na=h},K.zd=function(b){return b in K.la.Sb?K.la.Sb[b]:null},K.xj(),K.global.Am||K.Ed(K.La+"deps.js"));K.Cd=null;K.Jl=function(){if(null==K.Cd){try{var b=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(c){b=!1}K.Cd=b}return K.Cd};
K.Ql=function(b){return"(function(){"+b+"\n;})();\n"};K.ds=function(b){var c=K.na;try{K.na={Ud:void 0,jd:!1};if(K.ya(b))var d=b.call(void 0,{});else if(K.L(b))K.Jl()&&(b=K.Ql(b)),d=K.zk.call(void 0,b);else throw Error("Invalid module definition");var e=K.na.Ud;if(!K.L(e)||!e)throw Error('Invalid module name "'+e+'"');K.na.jd?K.qf(e,d):K.ti&&Object.seal&&typeof d==y&&null!=d&&Object.seal(d);K.Ck[e]=d}finally{K.na=c}};K.zk=function(b){eval(b);return{}};
K.rs=function(b){b=b.split("/");for(var c=0;c<b.length;)"."==b[c]?b.splice(c,1):c&&".."==b[c]&&b[c-1]&&".."!=b[c-1]?b.splice(--c,2):c++;return b.join("/")};K.xk=function(b){if(K.global.Ph)return K.global.Ph(b);try{var c=new K.global.XMLHttpRequest;c.open("get",b,!1);c.send();return 0==c.status||200==c.status?c.responseText:null}catch(d){return null}};K.Ss=F();
K.Lt=function(b,c){var d=K.global.$jscomp;d||(K.global.$jscomp=d={});var e=d.he;if(!e){var f=K.La+K.zi,g=K.xk(f);if(g){eval(g+a+f);if(K.global.$gwtExport&&K.global.$gwtExport.$jscomp&&!K.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(K.global.$gwtExport));K.global.$jscomp.he=K.global.$gwtExport.$jscomp.transpile;d=K.global.$jscomp;e=d.he}}if(!e){var h=" requires transpilation but no transpiler was found.";
h+=' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.';e=d.he=function(b,c){K.Ek(c+h);return b}}return e(b,c)};
K.aa=function(b){var c=typeof b;if(c==y)if(b){if(b instanceof Array)return r;if(b instanceof Object)return c;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return y;if("[object Array]"==d||typeof b.length==x&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return r;if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return u}else return"null";
else if(c==u&&"undefined"==typeof b.call)return y;return c};K.Pr=function(b){return null===b};K.cb=function(b){return null!=b};K.isArray=function(b){return K.aa(b)==r};K.Nb=function(b){var c=K.aa(b);return c==r||c==y&&typeof b.length==x};K.Br=function(b){return K.ha(b)&&typeof b.getFullYear==u};K.ya=function(b){return K.aa(b)==u};K.ha=function(b){var c=typeof b;return c==y&&null!=b||c==u};K.kg=function(b){return b[K.Va]||(b[K.Va]=++K.Cl)};K.nr=function(b){return!!b[K.Va]};
K.Uk=function(b){null!==b&&"removeAttribute"in b&&b.removeAttribute(K.Va);try{delete b[K.Va]}catch(c){}};K.Va="closure_uid_"+(1E9*Math.random()>>>0);K.Cl=0;K.Yq=K.kg;K.Ms=K.Uk;K.aj=function(b){var c=K.aa(b);if(c==y||c==r){if(b.clone)return b.clone();c=c==r?[]:{};for(var d in b)c[d]=K.aj(b[d]);return c}return b};K.Si=function(b,c,d){return b.call.apply(b.bind,arguments)};
K.Ri=function(b,c,d){if(!b)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return b.apply(c,d)}}return function(){return b.apply(c,arguments)}};K.bind=function(b,c,d){K.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?K.Si:K.Ri;return K.bind.apply(null,arguments)};
K.fb=function(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return b.apply(this,c)}};K.ms=function(b,c){for(var d in c)b[d]=c[d]};K.now=K.$c&&Date.now||function(){return+new Date};
K.Tj=function(b){if(K.global.execScript)K.global.execScript(b,"JavaScript");else if(K.global.eval){if(null==K.lc)if(K.global.eval("var _evalTest_ = 1;"),"undefined"!=typeof K.global._evalTest_){try{delete K.global._evalTest_}catch(e){}K.lc=!0}else K.lc=!1;if(K.lc)K.global.eval(b);else{var c=K.global.document,d=c.createElement(p);d.type=C;d.defer=!1;d.appendChild(c.createTextNode(b));c.body.appendChild(d);c.body.removeChild(d)}}else throw Error("goog.globalEval not available");};K.lc=null;
K.Wq=function(b,c){function d(b){b=b.split("-");for(var c=[],d=0;d<b.length;d++)c.push(e(b[d]));return c.join("-")}function e(b){return K.uf[b]||b}if("."==String(b).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+b);var f=K.uf?"BY_WHOLE"==K.kj?e:d:E();b=c?b+"-"+f(c):f(b);return K.global.Oh?K.global.Oh(b):b};K.bt=function(b,c){K.uf=b;K.kj=c};K.ar=function(b,c){c&&(b=b.replace(/\{\$([^}]+)}/g,function(b,e){return null!=c&&e in c?c[e]:b}));return b};
K.cr=E();K.zf=function(b,c){K.md(b,c,void 0)};K.Eq=function(b,c,d){b[c]=d};K.ab=function(b,c){function d(){}d.prototype=c.prototype;b.Lc=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.Qi=function(b,d,g){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return c.prototype[d].apply(b,e)}};
K.Qi=function(b,c,d){var e=arguments.callee.caller;if(K.wi||K.ea&&!e)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(e.Lc){for(var f=Array(arguments.length-1),g=1;g<arguments.length;g++)f[g-1]=arguments[g];return e.Lc.constructor.apply(b,f)}f=Array(arguments.length-2);for(g=2;g<arguments.length;g++)f[g-2]=arguments[g];g=!1;for(var h=b.constructor;h;h=h.Lc&&h.Lc.constructor)if(h.prototype[c]===
e)g=!0;else if(g)return h.prototype[c].apply(b,f);if(b[c]===e)return b.constructor.prototype[c].apply(b,f);throw Error("goog.base called from a method of one name to a method of a different name");};K.scope=function(b){if(K.Kd())throw Error("goog.scope is not supported within a goog.module.");b.call(K.global)};
K.oa=function(b,c){var d=c.constructor,e=c.ul;d&&d!=Object.prototype.constructor||(d=function(){throw Error("cannot instantiate an interface (no constructor defined).");});d=K.oa.fj(d,b);b&&K.ab(d,b);delete c.constructor;delete c.ul;K.oa.cf(d.prototype,c);null!=e&&(e instanceof Function?e(d):K.oa.cf(d,e));return d};K.oa.si=K.ea;
K.oa.fj=function(b,c){function d(){var c=b.apply(this,arguments)||this;c[K.Va]=c[K.Va];this.constructor===d&&e&&Object.seal instanceof Function&&Object.seal(c);return c}if(!K.oa.si)return b;var e=!K.oa.qk(c);return d};K.oa.qk=function(b){return b&&b.prototype&&b.prototype[K.Bi]};K.oa.Me=["constructor",w,"isPrototypeOf",A,D,"toString","valueOf"];
K.oa.cf=function(b,c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d]);for(var e=0;e<K.oa.Me.length;e++)d=K.oa.Me[e],Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d])};K.Et=F();K.Bi="goog_defineClass_legacy_unsealable";
K.ej=function(){function b(b,c){e?d[b]=!0:c()?d[b]=!1:e=d[b]=!0}function c(b){try{return!!eval(b)}catch(h){return!1}}var d={es3:!1},e=!1,f=K.global.navigator&&K.global.navigator.userAgent?K.global.navigator.userAgent:"";b("es5",function(){return c("[1,].length==1")});b("es6",function(){var b=f.match(/Edge\/(\d+)(\.\d)*/i);return b&&15>Number(b[1])?!1:c('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')});
b("es6-impl",function(){return!0});b("es7",function(){return c("2 ** 2 == 4")});b("es8",function(){return c("async () => 1, true")});return d};K.debug={};K.debug.Error=function(b){if(Error.captureStackTrace)Error.captureStackTrace(this,K.debug.Error);else{var c=Error().stack;c&&(this.stack=c)}b&&(this.message=String(b))};K.ab(K.debug.Error,Error);K.debug.Error.prototype.name="CustomError";K.a={};K.a.fa={Ia:1,hm:2,cc:3,wm:4,Zm:5,Ym:6,oo:7,Fm:8,Xc:9,Rm:10,Vh:11,bo:12};K.f={};K.f.Wc=!1;K.f.Xh=!1;K.f.Ye={Ke:"\u00a0"};K.f.startsWith=function(b,c){return 0==b.lastIndexOf(c,0)};K.f.endsWith=function(b,c){var d=b.length-c.length;return 0<=d&&b.indexOf(c,d)==d};K.f.Zi=function(b){return 0==K.f.jf("tel:",b.substr(0,4))};K.f.Sp=function(b,c){return 0==K.f.jf(c,b.substr(b.length-c.length,c.length))};K.f.Tp=function(b,c){return b.toLowerCase()==c.toLowerCase()};
K.f.wl=function(b,c){for(var d=b.split("%s"),e="",f=Array.prototype.slice.call(arguments,1);f.length&&1<d.length;)e+=d.shift()+f.shift();return e+d.join("%s")};K.f.Zp=function(b){return b.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};K.f.Id=function(b){return/^[\s\xa0]*$/.test(b)};K.f.Er=function(b){return 0==b.length};K.f.Qb=K.f.Id;K.f.ek=function(b){return K.f.Id(K.f.Jk(b))};K.f.Dr=K.f.ek;K.f.zr=function(b){return!/[^\t\n\r ]/.test(b)};K.f.wr=function(b){return!/[^a-zA-Z]/.test(b)};
K.f.Qr=function(b){return!/[^0-9]/.test(b)};K.f.xr=function(b){return!/[^a-zA-Z0-9]/.test(b)};K.f.Wr=function(b){return" "==b};K.f.Xr=function(b){return 1==b.length&&" "<=b&&"~">=b||"\u0080"<=b&&"\ufffd">=b};K.f.Ct=function(b){return b.replace(/(\r\n|\r|\n)+/g," ")};K.f.Yi=function(b){return b.replace(/(\r\n|\r|\n)/g,"\n")};K.f.ts=function(b){return b.replace(/\xa0|\s/g," ")};K.f.ss=function(b){return b.replace(/\xa0|[ \t]+/g," ")};
K.f.Yp=function(b){return b.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};K.f.trim=K.$c&&String.prototype.trim?function(b){return b.trim()}:function(b){return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};K.f.trimLeft=function(b){return b.replace(/^[\s\xa0]+/,"")};K.f.trimRight=function(b){return b.replace(/[\s\xa0]+$/,"")};K.f.jf=function(b,c){b=String(b).toLowerCase();c=String(c).toLowerCase();return b<c?-1:b==c?0:1};
K.f.Zg=function(b,c,d){if(b==c)return 0;if(!b)return-1;if(!c)return 1;for(var e=b.toLowerCase().match(d),f=c.toLowerCase().match(d),g=Math.min(e.length,f.length),h=0;h<g;h++){d=e[h];var l=f[h];if(d!=l)return b=parseInt(d,10),!isNaN(b)&&(c=parseInt(l,10),!isNaN(c)&&b-c)?b-c:d<l?-1:1}return e.length!=f.length?e.length-f.length:b<c?-1:1};K.f.ur=function(b,c){return K.f.Zg(b,c,/\d+|\D+/g)};K.f.Aj=function(b,c){return K.f.Zg(b,c,/\d+|\.\d+|\D+/g)};K.f.ws=K.f.Aj;K.f.Tt=function(b){return encodeURIComponent(String(b))};
K.f.St=function(b){return decodeURIComponent(b.replace(/\+/g," "))};K.f.Yg=function(b,c){return b.replace(/(\r\n|\r|\n)/g,c?"<br />":"<br>")};
K.f.ta=function(b,c){if(c)b=b.replace(K.f.ke,"&amp;").replace(K.f.Je,"&lt;").replace(K.f.Ge,"&gt;").replace(K.f.Qe,"&quot;").replace(K.f.Te,"&#39;").replace(K.f.Le,"&#0;"),K.f.Wc&&(b=b.replace(K.f.Ee,"&#101;"));else{if(!K.f.Eh.test(b))return b;-1!=b.indexOf("&")&&(b=b.replace(K.f.ke,"&amp;"));-1!=b.indexOf("<")&&(b=b.replace(K.f.Je,"&lt;"));-1!=b.indexOf(">")&&(b=b.replace(K.f.Ge,"&gt;"));-1!=b.indexOf('"')&&(b=b.replace(K.f.Qe,"&quot;"));-1!=b.indexOf("'")&&(b=b.replace(K.f.Te,"&#39;"));-1!=b.indexOf("\x00")&&
(b=b.replace(K.f.Le,"&#0;"));K.f.Wc&&-1!=b.indexOf("e")&&(b=b.replace(K.f.Ee,"&#101;"))}return b};K.f.ke=/&/g;K.f.Je=/</g;K.f.Ge=/>/g;K.f.Qe=/"/g;K.f.Te=/'/g;K.f.Le=/\x00/g;K.f.Ee=/e/g;K.f.Eh=K.f.Wc?/[\x00&<>"'e]/:/[\x00&<>"']/;K.f.vh=function(b){return K.f.contains(b,"&")?!K.f.Xh&&"document"in K.global?K.f.wh(b):K.f.Fl(b):b};K.f.Pt=function(b,c){return K.f.contains(b,"&")?K.f.wh(b,c):b};
K.f.wh=function(b,c){var d={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var e=c?c.createElement("div"):K.global.document.createElement("div");return b.replace(K.f.bi,function(b,c){var f=d[b];if(f)return f;"#"==c.charAt(0)&&(c=Number("0"+c.substr(1)),isNaN(c)||(f=String.fromCharCode(c)));f||(e.innerHTML=b+" ",f=e.firstChild.nodeValue.slice(0,-1));return d[b]=f})};
K.f.Fl=function(b){return b.replace(/&([^;]+);/g,function(b,d){switch(d){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=d.charAt(0)||(d=Number("0"+d.substr(1)),isNaN(d))?b:String.fromCharCode(d)}})};K.f.bi=/&([^;\s<&]+);?/g;K.f.Ol=function(b){return K.f.Yg(b.replace(/  /g," &#160;"),void 0)};K.f.Ds=function(b){return b.replace(/(^|[\n ]) /g,"$1"+K.f.Ye.Ke)};
K.f.Dt=function(b,c){for(var d=c.length,e=0;e<d;e++){var f=1==d?c:c.charAt(e);if(b.charAt(0)==f&&b.charAt(b.length-1)==f)return b.substring(1,b.length-1)}return b};K.f.truncate=function(b,c,d){d&&(b=K.f.vh(b));b.length>c&&(b=b.substring(0,c-3)+"...");d&&(b=K.f.ta(b));return b};K.f.Nt=function(b,c,d,e){d&&(b=K.f.vh(b));e&&b.length>c?(e>c&&(e=c),b=b.substring(0,c-e)+"..."+b.substring(b.length-e)):b.length>c&&(e=Math.floor(c/2),b=b.substring(0,e+c%2)+"..."+b.substring(b.length-e));d&&(b=K.f.ta(b));return b};
K.f.de={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"};K.f.vc={"'":"\\'"};K.f.quote=function(b){b=String(b);for(var c=['"'],d=0;d<b.length;d++){var e=b.charAt(d),f=e.charCodeAt(0);c[d+1]=K.f.de[e]||(31<f&&127>f?e:K.f.xf(e))}c.push('"');return c.join("")};K.f.Dq=function(b){for(var c=[],d=0;d<b.length;d++)c[d]=K.f.xf(b.charAt(d));return c.join("")};
K.f.xf=function(b){if(b in K.f.vc)return K.f.vc[b];if(b in K.f.de)return K.f.vc[b]=K.f.de[b];var c=b.charCodeAt(0);if(31<c&&127>c)var d=b;else{if(256>c){if(d="\\x",16>c||256<c)d+="0"}else d="\\u",4096>c&&(d+="0");d+=c.toString(16).toUpperCase()}return K.f.vc[b]=d};K.f.contains=function(b,c){return-1!=b.indexOf(c)};K.f.kf=function(b,c){return K.f.contains(b.toLowerCase(),c.toLowerCase())};K.f.gq=function(b,c){return b&&c?b.split(c).length-1:0};
K.f.yb=function(b,c,d){var e=b;0<=c&&c<b.length&&0<d&&(e=b.substr(0,c)+b.substr(c+d,b.length-c-d));return e};K.f.remove=function(b,c){return b.replace(c,"")};K.f.Js=function(b,c){c=new RegExp(K.f.Xd(c),"g");return b.replace(c,"")};K.f.Ps=function(b,c,d){c=new RegExp(K.f.Xd(c),"g");return b.replace(c,d.replace(/\$/g,"$$$$"))};K.f.Xd=function(b){return String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};
K.f.repeat=String.prototype.repeat?function(b,c){return b.repeat(c)}:function(b,c){return Array(c+1).join(b)};K.f.Bs=function(b,c,d){b=K.R(d)?b.toFixed(d):String(b);d=b.indexOf(".");-1==d&&(d=b.length);return K.f.repeat("0",Math.max(0,c-d))+b};K.f.Jk=function(b){return null==b?"":String(b)};K.f.Np=function(b){return Array.prototype.join.call(arguments,"")};K.f.fr=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^K.now()).toString(36)};
K.f.Eb=function(b,c){var d=0;b=K.f.trim(String(b)).split(".");c=K.f.trim(String(c)).split(".");for(var e=Math.max(b.length,c.length),f=0;0==d&&f<e;f++){var g=b[f]||"",h=c[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;d=K.f.dd(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||K.f.dd(0==g[2].length,0==h[2].length)||K.f.dd(g[2],h[2]);g=g[3];h=h[3]}while(0==d)}return d};
K.f.dd=function(b,c){return b<c?-1:b>c?1:0};K.f.or=function(b){for(var c=0,d=0;d<b.length;++d)c=31*c+b.charCodeAt(d)>>>0;return c};K.f.Gl=2147483648*Math.random()|0;K.f.pq=function(){return"goog_"+K.f.Gl++};K.f.Ht=function(b){var c=Number(b);return 0==c&&K.f.Id(b)?NaN:c};K.f.Jr=function(b){return/^[a-z]+([A-Z][a-z]*)*$/.test(b)};K.f.Yr=function(b){return/^([A-Z][a-z]*)+$/.test(b)};K.f.Gt=function(b){return String(b).replace(/\-([a-z])/g,function(b,d){return d.toUpperCase()})};
K.f.Jt=function(b){return String(b).replace(/([A-Z])/g,"-$1").toLowerCase()};K.f.Kt=function(b,c){c=K.L(c)?K.f.Xd(c):"\\s";return b.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(b,c,f){return c+f.toUpperCase()})};K.f.Rp=function(b){return String(b.charAt(0)).toUpperCase()+String(b.substr(1)).toLowerCase()};K.f.parseInt=function(b){isFinite(b)&&(b=String(b));return K.L(b)?/^\s*-?0x/i.test(b)?parseInt(b,16):parseInt(b,10):NaN};
K.f.xt=function(b,c,d){b=b.split(c);for(var e=[];0<d&&b.length;)e.push(b.shift()),d--;b.length&&e.push(b.join(c));return e};K.f.as=function(b,c){if(c)typeof c==B&&(c=[c]);else return b;for(var d=-1,e=0;e<c.length;e++)if(""!=c[e]){var f=b.lastIndexOf(c[e]);f>d&&(d=f)}return-1==d?b:b.slice(d+1)};
K.f.xq=function(b,c){var d=[],e=[];if(b==c)return 0;if(!b.length||!c.length)return Math.max(b.length,c.length);for(var f=0;f<c.length+1;f++)d[f]=f;for(f=0;f<b.length;f++){e[0]=f+1;for(var g=0;g<c.length;g++)e[g+1]=Math.min(e[g]+1,d[g+1]+1,d[g]+Number(b[f]!=c[g]));for(g=0;g<d.length;g++)d[g]=e[g]}return e[c.length]};K.m={};K.m.ja=K.ea;K.m.Xb=function(b,c){c.unshift(b);K.debug.Error.call(this,K.f.wl.apply(null,c));c.shift()};K.ab(K.m.Xb,K.debug.Error);K.m.Xb.prototype.name="AssertionError";K.m.Sh=function(b){throw b;};K.m.kd=K.m.Sh;K.m.xa=function(b,c,d,e){var f="Assertion failed";if(d){f+=": "+d;var g=e}else b&&(f+=": "+b,g=c);b=new K.m.Xb(""+f,g||[]);K.m.kd(b)};K.m.ft=function(b){K.m.ja&&(K.m.kd=b)};K.m.assert=function(b,c,d){K.m.ja&&!b&&K.m.xa("",null,c,Array.prototype.slice.call(arguments,2));return b};
K.m.ma=function(b,c){K.m.ja&&K.m.kd(new K.m.Xb("Failure"+(b?": "+b:""),Array.prototype.slice.call(arguments,1)))};K.m.Ep=function(b,c,d){K.m.ja&&!K.Rb(b)&&K.m.xa("Expected number but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};K.m.Hp=function(b,c,d){K.m.ja&&!K.L(b)&&K.m.xa("Expected string but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};
K.m.sp=function(b,c,d){K.m.ja&&!K.ya(b)&&K.m.xa("Expected function but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};K.m.Fp=function(b,c,d){K.m.ja&&!K.ha(b)&&K.m.xa("Expected object but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};K.m.op=function(b,c,d){K.m.ja&&!K.isArray(b)&&K.m.xa("Expected array but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};
K.m.pp=function(b,c,d){K.m.ja&&!K.ck(b)&&K.m.xa("Expected boolean but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};K.m.qp=function(b,c,d){!K.m.ja||K.ha(b)&&b.nodeType==K.a.fa.Ia||K.m.xa("Expected Element but got %s: %s.",[K.aa(b),b],c,Array.prototype.slice.call(arguments,2));return b};K.m.tp=function(b,c,d,e){!K.m.ja||b instanceof c||K.m.xa("Expected instanceof %s but got %s.",[K.m.jg(c),K.m.jg(b)],d,Array.prototype.slice.call(arguments,3));return b};
K.m.rp=function(b,c,d){!K.m.ja||typeof b==x&&isFinite(b)||K.m.xa("Expected %s to be a finite number but it is not.",[b],c,Array.prototype.slice.call(arguments,2));return b};K.m.Gp=function(){for(var b in Object.prototype)K.m.ma(b+" should not be enumerable in Object.prototype.")};K.m.jg=function(b){return b instanceof Function?b.displayName||b.name||"unknown type name":b instanceof Object?b.constructor.displayName||b.constructor.name||Object.prototype.toString.call(b):null===b?"null":typeof b};K.f.Yo=F();K.f.I=function(){this.Kc="";this.xi=K.f.I.We};K.f.I.prototype.ua=!0;K.f.I.prototype.ga=G("Kc");K.f.I.prototype.toString=function(){return"Const{"+this.Kc+"}"};K.f.I.u=function(b){if(b instanceof K.f.I&&b.constructor===K.f.I&&b.xi===K.f.I.We)return b.Kc;K.m.ma("expected object of type Const, got '"+b+"'");return"type_error:Const"};K.f.I.from=function(b){return K.f.I.jj(b)};K.f.I.We={};K.f.I.jj=function(b){var c=new K.f.I;c.Kc=b;return c};K.f.I.EMPTY=K.f.I.from("");K.j={};K.Ca=K.$c;K.j.za=!1;K.j.Rk=function(b){return b[b.length-1]};K.j.$r=K.j.Rk;K.j.indexOf=K.Ca&&(K.j.za||Array.prototype.indexOf)?function(b,c,d){return Array.prototype.indexOf.call(b,c,d)}:function(b,c,d){d=null==d?0:0>d?Math.max(0,b.length+d):d;if(K.L(b))return K.L(c)&&1==c.length?b.indexOf(c,d):-1;for(;d<b.length;d++)if(d in b&&b[d]===c)return d;return-1};
K.j.lastIndexOf=K.Ca&&(K.j.za||Array.prototype.lastIndexOf)?function(b,c,d){return Array.prototype.lastIndexOf.call(b,c,null==d?b.length-1:d)}:function(b,c,d){d=null==d?b.length-1:d;0>d&&(d=Math.max(0,b.length+d));if(K.L(b))return K.L(c)&&1==c.length?b.lastIndexOf(c,d):-1;for(;0<=d;d--)if(d in b&&b[d]===c)return d;return-1};
K.j.forEach=K.Ca&&(K.j.za||Array.prototype.forEach)?function(b,c,d){Array.prototype.forEach.call(b,c,d)}:function(b,c,d){for(var e=b.length,f=K.L(b)?b.split(""):b,g=0;g<e;g++)g in f&&c.call(d,f[g],g,b)};K.j.Gf=function(b,c){for(var d=K.L(b)?b.split(""):b,e=b.length-1;0<=e;--e)e in d&&c.call(void 0,d[e],e,b)};
K.j.filter=K.Ca&&(K.j.za||Array.prototype.filter)?function(b,c,d){return Array.prototype.filter.call(b,c,d)}:function(b,c,d){for(var e=b.length,f=[],g=0,h=K.L(b)?b.split(""):b,l=0;l<e;l++)if(l in h){var m=h[l];c.call(d,m,l,b)&&(f[g++]=m)}return f};K.j.map=K.Ca&&(K.j.za||Array.prototype.map)?function(b,c,d){return Array.prototype.map.call(b,c,d)}:function(b,c,d){for(var e=b.length,f=Array(e),g=K.L(b)?b.split(""):b,h=0;h<e;h++)h in g&&(f[h]=c.call(d,g[h],h,b));return f};
K.j.reduce=K.Ca&&(K.j.za||Array.prototype.reduce)?function(b,c,d,e){e&&(c=K.bind(c,e));return Array.prototype.reduce.call(b,c,d)}:function(b,c,d,e){var f=d;K.j.forEach(b,function(d,h){f=c.call(e,f,d,h,b)});return f};K.j.reduceRight=K.Ca&&(K.j.za||Array.prototype.reduceRight)?function(b,c,d,e){e&&(c=K.bind(c,e));return Array.prototype.reduceRight.call(b,c,d)}:function(b,c,d,e){var f=d;K.j.Gf(b,function(d,h){f=c.call(e,f,d,h,b)});return f};
K.j.some=K.Ca&&(K.j.za||Array.prototype.some)?function(b,c,d){return Array.prototype.some.call(b,c,d)}:function(b,c,d){for(var e=b.length,f=K.L(b)?b.split(""):b,g=0;g<e;g++)if(g in f&&c.call(d,f[g],g,b))return!0;return!1};K.j.every=K.Ca&&(K.j.za||Array.prototype.every)?function(b,c,d){return Array.prototype.every.call(b,c,d)}:function(b,c,d){for(var e=b.length,f=K.L(b)?b.split(""):b,g=0;g<e;g++)if(g in f&&!c.call(d,f[g],g,b))return!1;return!0};
K.j.count=function(b,c,d){var e=0;K.j.forEach(b,function(b,g,h){c.call(d,b,g,h)&&++e},d);return e};K.j.find=function(b,c,d){c=K.j.findIndex(b,c,d);return 0>c?null:K.L(b)?b.charAt(c):b[c]};K.j.findIndex=function(b,c,d){for(var e=b.length,f=K.L(b)?b.split(""):b,g=0;g<e;g++)if(g in f&&c.call(d,f[g],g,b))return g;return-1};K.j.Gq=function(b,c,d){c=K.j.yj(b,c,d);return 0>c?null:K.L(b)?b.charAt(c):b[c]};
K.j.yj=function(b,c,d){for(var e=K.L(b)?b.split(""):b,f=b.length-1;0<=f;f--)if(f in e&&c.call(d,e[f],f,b))return f;return-1};K.j.contains=function(b,c){return 0<=K.j.indexOf(b,c)};K.j.Qb=function(b){return 0==b.length};K.j.clear=function(b){if(!K.isArray(b))for(var c=b.length-1;0<=c;c--)delete b[c];b.length=0};K.j.rr=function(b,c){K.j.contains(b,c)||b.push(c)};K.j.sg=function(b,c,d){K.j.splice(b,d,0,c)};K.j.tr=function(b,c,d){K.fb(K.j.splice,b,d,0).apply(null,c)};
K.j.insertBefore=function(b,c,d){var e;2==arguments.length||0>(e=K.j.indexOf(b,d))?b.push(c):K.j.sg(b,c,e)};K.j.remove=function(b,c){c=K.j.indexOf(b,c);var d;(d=0<=c)&&K.j.yb(b,c);return d};K.j.Os=function(b,c){c=K.j.lastIndexOf(b,c);return 0<=c?(K.j.yb(b,c),!0):!1};K.j.yb=function(b,c){return 1==Array.prototype.splice.call(b,c,1).length};K.j.Ns=function(b,c,d){c=K.j.findIndex(b,c,d);return 0<=c?(K.j.yb(b,c),!0):!1};
K.j.Ks=function(b,c,d){var e=0;K.j.Gf(b,function(f,g){c.call(d,f,g,b)&&K.j.yb(b,g)&&e++});return e};K.j.concat=function(b){return Array.prototype.concat.apply([],arguments)};K.j.join=function(b){return Array.prototype.concat.apply([],arguments)};K.j.th=function(b){var c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];return d}return[]};K.j.clone=K.j.th;
K.j.extend=function(b,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(K.Nb(e)){var f=b.length||0,g=e.length||0;b.length=f+g;for(var h=0;h<g;h++)b[f+h]=e[h]}else b.push(e)}};K.j.splice=function(b,c,d,e){return Array.prototype.splice.apply(b,K.j.slice(arguments,1))};K.j.slice=function(b,c,d){return 2>=arguments.length?Array.prototype.slice.call(b,c):Array.prototype.slice.call(b,c,d)};
K.j.Ls=function(b,c,d){function e(b){return K.ha(b)?"o"+K.kg(b):(typeof b).charAt(0)+b}c=c||b;d=d||e;for(var f={},g=0,h=0;h<b.length;){var l=b[h++],m=d(l);Object.prototype.hasOwnProperty.call(f,m)||(f[m]=!0,c[g++]=l)}c.length=g};K.j.gf=function(b,c,d){return K.j.hf(b,d||K.j.Pa,!1,c)};K.j.Kp=function(b,c,d){return K.j.hf(b,c,!0,void 0,d)};K.j.hf=function(b,c,d,e,f){for(var g=0,h=b.length,l;g<h;){var m=g+h>>1;var q=d?c.call(f,b[m],m,b):c(e,b[m]);0<q?g=m+1:(h=m,l=!q)}return l?g:~g};
K.j.sort=function(b,c){b.sort(c||K.j.Pa)};K.j.zt=function(b,c){for(var d=Array(b.length),e=0;e<b.length;e++)d[e]={index:e,value:b[e]};var f=c||K.j.Pa;K.j.sort(d,function(b,c){return f(b.value,c.value)||b.index-c.index});for(e=0;e<b.length;e++)b[e]=d[e].value};K.j.sl=function(b,c,d){var e=d||K.j.Pa;K.j.sort(b,function(b,d){return e(c(b),c(d))})};K.j.wt=function(b,c,d){K.j.sl(b,function(b){return b[c]},d)};
K.j.Vr=function(b,c,d){c=c||K.j.Pa;for(var e=1;e<b.length;e++){var f=c(b[e-1],b[e]);if(0<f||0==f&&d)return!1}return!0};K.j.Ib=function(b,c,d){if(!K.Nb(b)||!K.Nb(c)||b.length!=c.length)return!1;var e=b.length;d=d||K.j.lj;for(var f=0;f<e;f++)if(!d(b[f],c[f]))return!1;return!0};K.j.$p=function(b,c,d){d=d||K.j.Pa;for(var e=Math.min(b.length,c.length),f=0;f<e;f++){var g=d(b[f],c[f]);if(0!=g)return g}return K.j.Pa(b.length,c.length)};K.j.Pa=function(b,c){return b>c?1:b<c?-1:0};
K.j.vr=function(b,c){return-K.j.Pa(b,c)};K.j.lj=function(b,c){return b===c};K.j.Ip=function(b,c,d){d=K.j.gf(b,c,d);return 0>d?(K.j.sg(b,c,-(d+1)),!0):!1};K.j.Jp=function(b,c,d){c=K.j.gf(b,c,d);return 0<=c?K.j.yb(b,c):!1};K.j.Mp=function(b,c,d){for(var e={},f=0;f<b.length;f++){var g=b[f],h=c.call(d,g,f,b);K.R(h)&&(e[h]||(e[h]=[])).push(g)}return e};K.j.It=function(b,c,d){var e={};K.j.forEach(b,function(f,g){e[c.call(d,f,g,b)]=f});return e};
K.j.Gs=function(b,c,d){var e=[],f=0,g=b;d=d||1;void 0!==c&&(f=b,g=c);if(0>d*(g-f))return[];if(0<d)for(b=f;b<g;b+=d)e.push(b);else for(b=f;b>g;b+=d)e.push(b);return e};K.j.repeat=function(b,c){for(var d=[],e=0;e<c;e++)d[e]=b;return d};K.j.flatten=function(b){for(var c=[],d=0;d<arguments.length;d++){var e=arguments[d];if(K.isArray(e))for(var f=0;f<e.length;f+=8192)for(var g=K.j.flatten.apply(null,K.j.slice(e,f,f+8192)),h=0;h<g.length;h++)c.push(g[h]);else c.push(e)}return c};
K.j.rotate=function(b,c){b.length&&(c%=b.length,0<c?Array.prototype.unshift.apply(b,b.splice(-c,c)):0>c&&Array.prototype.push.apply(b,b.splice(0,-c)));return b};K.j.os=function(b,c,d){c=Array.prototype.splice.call(b,c,1);Array.prototype.splice.call(b,d,0,c[0])};
K.j.$t=function(b){if(!arguments.length)return[];for(var c=[],d=arguments[0].length,e=1;e<arguments.length;e++)arguments[e].length<d&&(d=arguments[e].length);for(e=0;e<d;e++){for(var f=[],g=0;g<arguments.length;g++)f.push(arguments[g][e]);c.push(f)}return c};K.j.vt=function(b,c){c=c||Math.random;for(var d=b.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=b[d];b[d]=b[e];b[e]=f}};K.j.fq=function(b,c){var d=[];K.j.forEach(c,function(c){d.push(b[c])});return d};
K.j.bq=function(b,c,d){return K.j.concat.apply([],K.j.map(b,c,d))};K.h={};K.h.i={};K.h.i.Zh=!1;
K.h.i.Ie=K.h.i.Zh||("ar"==K.ba.substring(0,2).toLowerCase()||"fa"==K.ba.substring(0,2).toLowerCase()||"he"==K.ba.substring(0,2).toLowerCase()||"iw"==K.ba.substring(0,2).toLowerCase()||"ps"==K.ba.substring(0,2).toLowerCase()||"sd"==K.ba.substring(0,2).toLowerCase()||"ug"==K.ba.substring(0,2).toLowerCase()||"ur"==K.ba.substring(0,2).toLowerCase()||"yi"==K.ba.substring(0,2).toLowerCase())&&(2==K.ba.length||"-"==K.ba.substring(2,3)||"_"==K.ba.substring(2,3))||3<=K.ba.length&&"ckb"==K.ba.substring(0,3).toLowerCase()&&
(3==K.ba.length||"-"==K.ba.substring(3,4)||"_"==K.ba.substring(3,4));K.h.i.mb={gi:"\u202a",ji:"\u202b",Oe:"\u202c",hi:"\u200e",ki:"\u200f"};K.h.i.O={Ta:1,Ua:-1,qa:0};K.h.i.bc="right";K.h.i.$b="left";K.h.i.yn=K.h.i.Ie?K.h.i.$b:K.h.i.bc;K.h.i.xn=K.h.i.Ie?K.h.i.bc:K.h.i.$b;K.h.i.Al=function(b){return typeof b==x?0<b?K.h.i.O.Ta:0>b?K.h.i.O.Ua:K.h.i.O.qa:null==b?null:b?K.h.i.O.Ua:K.h.i.O.Ta};K.h.i.vb="A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
K.h.i.zb="\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";K.h.i.Yj=/<[^>]*>|&[^;]+;/g;K.h.i.Sa=function(b,c){return c?b.replace(K.h.i.Yj,""):b};K.h.i.$k=new RegExp("["+K.h.i.zb+"]");K.h.i.Fk=new RegExp("["+K.h.i.vb+"]");K.h.i.Bd=function(b,c){return K.h.i.$k.test(K.h.i.Sa(b,c))};K.h.i.mr=K.h.i.Bd;K.h.i.og=function(b){return K.h.i.Fk.test(K.h.i.Sa(b,void 0))};K.h.i.Ik=new RegExp("^["+K.h.i.vb+"]");K.h.i.el=new RegExp("^["+K.h.i.zb+"]");K.h.i.nk=function(b){return K.h.i.el.test(b)};
K.h.i.jk=function(b){return K.h.i.Ik.test(b)};K.h.i.Nr=function(b){return!K.h.i.jk(b)&&!K.h.i.nk(b)};K.h.i.Gk=new RegExp("^[^"+K.h.i.zb+"]*["+K.h.i.vb+"]");K.h.i.bl=new RegExp("^[^"+K.h.i.vb+"]*["+K.h.i.zb+"]");K.h.i.nh=function(b,c){return K.h.i.bl.test(K.h.i.Sa(b,c))};K.h.i.Tr=K.h.i.nh;K.h.i.tl=function(b,c){return K.h.i.Gk.test(K.h.i.Sa(b,c))};K.h.i.Lr=K.h.i.tl;K.h.i.Jg=/^http:\/\/.*/;K.h.i.Or=function(b,c){b=K.h.i.Sa(b,c);return K.h.i.Jg.test(b)||!K.h.i.og(b)&&!K.h.i.Bd(b)};
K.h.i.Hk=new RegExp("["+K.h.i.vb+"][^"+K.h.i.zb+"]*$");K.h.i.cl=new RegExp("["+K.h.i.zb+"][^"+K.h.i.vb+"]*$");K.h.i.rj=function(b,c){return K.h.i.Hk.test(K.h.i.Sa(b,c))};K.h.i.Kr=K.h.i.rj;K.h.i.sj=function(b,c){return K.h.i.cl.test(K.h.i.Sa(b,c))};K.h.i.Rr=K.h.i.sj;K.h.i.dl=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;K.h.i.Sr=function(b){return K.h.i.dl.test(b)};K.h.i.Ui=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
K.h.i.lr=function(b,c){c=(void 0===c?K.h.i.Bd(b):c)?K.h.i.mb.ki:K.h.i.mb.hi;return b.replace(K.h.i.Ui,c+"$&"+c)};K.h.i.Aq=function(b){return"<"==b.charAt(0)?b.replace(/<\w+/,"$& dir=rtl"):"\n<span dir=rtl>"+b+"</span>"};K.h.i.Bq=function(b){return K.h.i.mb.ji+b+K.h.i.mb.Oe};K.h.i.yq=function(b){return"<"==b.charAt(0)?b.replace(/<\w+/,"$& dir=ltr"):"\n<span dir=ltr>"+b+"</span>"};K.h.i.zq=function(b){return K.h.i.mb.gi+b+K.h.i.mb.Oe};K.h.i.pj=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
K.h.i.vk=/left/gi;K.h.i.Zk=/right/gi;K.h.i.yl=/%%%%/g;K.h.i.ls=function(b){return b.replace(K.h.i.pj,":$1 $4 $3 $2").replace(K.h.i.vk,"%%%%").replace(K.h.i.Zk,K.h.i.$b).replace(K.h.i.yl,K.h.i.bc)};K.h.i.qj=/([\u0591-\u05f2])"/g;K.h.i.rl=/([\u0591-\u05f2])'/g;K.h.i.qs=function(b){return b.replace(K.h.i.qj,"$1\u05f4").replace(K.h.i.rl,"$1\u05f3")};K.h.i.Pl=/\s+/;K.h.i.Xj=/[\d\u06f0-\u06f9]/;K.h.i.al=.4;
K.h.i.yf=function(b,c){var d=0,e=0,f=!1;b=K.h.i.Sa(b,c).split(K.h.i.Pl);for(c=0;c<b.length;c++){var g=b[c];K.h.i.nh(g)?(d++,e++):K.h.i.Jg.test(g)?f=!0:K.h.i.og(g)?e++:K.h.i.Xj.test(g)&&(f=!0)}return 0==e?f?K.h.i.O.Ta:K.h.i.O.qa:d/e>K.h.i.al?K.h.i.O.Ua:K.h.i.O.Ta};K.h.i.tq=function(b,c){return K.h.i.yf(b,c)==K.h.i.O.Ua};K.h.i.ct=function(b,c){b&&(c=K.h.i.Al(c))&&(b.style.textAlign=c==K.h.i.O.Ua?K.h.i.bc:K.h.i.$b,b.dir=c==K.h.i.O.Ua?"rtl":"ltr")};
K.h.i.dt=function(b,c){switch(K.h.i.yf(c)){case K.h.i.O.Ta:b.dir="ltr";break;case K.h.i.O.Ua:b.dir="rtl";break;default:b.removeAttribute("dir")}};K.h.i.Tm=F();K.b={};K.b.C=function(){this.Bc="";this.Ai=K.b.C.ca};K.b.C.prototype.ua=!0;K.b.C.prototype.ga=G("Bc");K.b.C.prototype.Dd=!0;K.b.C.prototype.$a=function(){return K.h.i.O.Ta};K.ea&&(K.b.C.prototype.toString=function(){return"TrustedResourceUrl{"+this.Bc+"}"});K.b.C.u=function(b){if(b instanceof K.b.C&&b.constructor===K.b.C&&b.Ai===K.b.C.ca)return b.Bc;K.m.ma("expected object of type TrustedResourceUrl, got '"+b+k+K.aa(b));return"type_error:TrustedResourceUrl"};
K.b.C.format=function(b,c){b=K.b.C.Hf(b,c);return K.b.C.Hb(b)};K.b.C.Hf=function(b,c){var d=K.f.I.u(b);if(!K.b.C.Ih.test(d))throw Error("Invalid TrustedResourceUrl format: "+d);return d.replace(K.b.C.$h,function(b,f){if(!Object.prototype.hasOwnProperty.call(c,f))throw Error('Found marker, "'+f+'", in format string, "'+d+'", but no valid label mapping found in args: '+JSON.stringify(c));b=c[f];return b instanceof K.f.I?K.f.I.u(b):encodeURIComponent(String(b))})};K.b.C.$h=/%{(\w+)}/g;K.b.C.Ih=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i;
K.b.C.Kq=function(b,c,d){b=K.b.C.Hf(b,c);c=/\?/.test(b)?"&":"?";for(var e in d)for(var f=K.isArray(d[e])?d[e]:[d[e]],g=0;g<f.length;g++)null!=f[g]&&(b+=c+encodeURIComponent(e)+"="+encodeURIComponent(String(f[g])),c="&");return K.b.C.Hb(b)};K.b.C.mc=function(b){return K.b.C.Hb(K.f.I.u(b))};K.b.C.Nq=function(b){for(var c="",d=0;d<b.length;d++)c+=K.f.I.u(b[d]);return K.b.C.Hb(c)};K.b.C.ca={};K.b.C.Hb=function(b){var c=new K.b.C;c.Bc=b;return c};K.async={};K.async.Zb=function(b,c,d){this.wk=d;this.ij=b;this.Vk=c;this.xc=0;this.tc=null};K.async.Zb.prototype.get=function(){if(0<this.xc){this.xc--;var b=this.tc;this.tc=b.next;b.next=null}else b=this.ij();return b};K.async.Zb.prototype.put=function(b){this.Vk(b);this.xc<this.wk&&(this.xc++,b.next=this.tc,this.tc=b)};K.debug.Z={};K.debug.$m=F();K.debug.Z.xb=[];K.debug.Z.Vd=[];K.debug.Z.Wg=!1;K.debug.Z.register=function(b){K.debug.Z.xb[K.debug.Z.xb.length]=b;if(K.debug.Z.Wg)for(var c=K.debug.Z.Vd,d=0;d<c.length;d++)b(K.bind(c[d].Rl,c[d]))};K.debug.Z.ns=function(b){K.debug.Z.Wg=!0;for(var c=K.bind(b.Rl,b),d=0;d<K.debug.Z.xb.length;d++)K.debug.Z.xb[d](c);K.debug.Z.Vd.push(b)};K.debug.Z.Rt=function(b){var c=K.debug.Z.Vd;b=K.bind(b.u,b);for(var d=0;d<K.debug.Z.xb.length;d++)K.debug.Z.xb[d](b);c.length--};K.a.vn=F();K.a.c=function(b){this.xl=b};K.a.c.prototype.toString=G("xl");K.a.c.Ul=new K.a.c("A");K.a.c.Vl=new K.a.c("ABBR");K.a.c.Xl=new K.a.c("ACRONYM");K.a.c.Yl=new K.a.c("ADDRESS");K.a.c.bm=new K.a.c("APPLET");K.a.c.cm=new K.a.c("AREA");K.a.c.dm=new K.a.c("ARTICLE");K.a.c.em=new K.a.c("ASIDE");K.a.c.im=new K.a.c("AUDIO");K.a.c.jm=new K.a.c("B");K.a.c.km=new K.a.c("BASE");K.a.c.lm=new K.a.c("BASEFONT");K.a.c.mm=new K.a.c("BDI");K.a.c.nm=new K.a.c("BDO");K.a.c.qm=new K.a.c("BIG");K.a.c.rm=new K.a.c("BLOCKQUOTE");
K.a.c.sm=new K.a.c("BODY");K.a.c.we=new K.a.c("BR");K.a.c.tm=new K.a.c("BUTTON");K.a.c.um=new K.a.c("CANVAS");K.a.c.vm=new K.a.c("CAPTION");K.a.c.xm=new K.a.c("CENTER");K.a.c.ym=new K.a.c("CITE");K.a.c.Bm=new K.a.c("CODE");K.a.c.Cm=new K.a.c("COL");K.a.c.Dm=new K.a.c("COLGROUP");K.a.c.Em=new K.a.c("COMMAND");K.a.c.Gm=new K.a.c("DATA");K.a.c.Hm=new K.a.c("DATALIST");K.a.c.Im=new K.a.c("DD");K.a.c.Jm=new K.a.c("DEL");K.a.c.Km=new K.a.c("DETAILS");K.a.c.Lm=new K.a.c("DFN");K.a.c.Mm=new K.a.c("DIALOG");
K.a.c.Nm=new K.a.c("DIR");K.a.c.Om=new K.a.c("DIV");K.a.c.Pm=new K.a.c("DL");K.a.c.Sm=new K.a.c("DT");K.a.c.Vm=new K.a.c("EM");K.a.c.Wm=new K.a.c("EMBED");K.a.c.bn=new K.a.c("FIELDSET");K.a.c.cn=new K.a.c("FIGCAPTION");K.a.c.dn=new K.a.c("FIGURE");K.a.c.en=new K.a.c("FONT");K.a.c.fn=new K.a.c("FOOTER");K.a.c.gn=new K.a.c("FORM");K.a.c.hn=new K.a.c("FRAME");K.a.c.jn=new K.a.c("FRAMESET");K.a.c.kn=new K.a.c("H1");K.a.c.ln=new K.a.c("H2");K.a.c.mn=new K.a.c("H3");K.a.c.nn=new K.a.c("H4");K.a.c.on=new K.a.c("H5");
K.a.c.pn=new K.a.c("H6");K.a.c.qn=new K.a.c("HEAD");K.a.c.rn=new K.a.c("HEADER");K.a.c.sn=new K.a.c("HGROUP");K.a.c.tn=new K.a.c("HR");K.a.c.un=new K.a.c("HTML");K.a.c.wn=new K.a.c("I");K.a.c.zn=new K.a.c("IFRAME");K.a.c.An=new K.a.c("IMG");K.a.c.Bn=new K.a.c("INPUT");K.a.c.Cn=new K.a.c("INS");K.a.c.Hn=new K.a.c("ISINDEX");K.a.c.Jn=new K.a.c("KBD");K.a.c.Kn=new K.a.c("KEYGEN");K.a.c.Ln=new K.a.c("LABEL");K.a.c.Nn=new K.a.c("LEGEND");K.a.c.On=new K.a.c("LI");K.a.c.Pn=new K.a.c("LINK");K.a.c.Sn=new K.a.c("MAP");
K.a.c.Tn=new K.a.c("MARK");K.a.c.Un=new K.a.c("MATH");K.a.c.Vn=new K.a.c("MENU");K.a.c.Wn=new K.a.c("META");K.a.c.Xn=new K.a.c("METER");K.a.c.Zn=new K.a.c("NAV");K.a.c.$n=new K.a.c("NOFRAMES");K.a.c.ao=new K.a.c("NOSCRIPT");K.a.c.eo=new K.a.c("OBJECT");K.a.c.fo=new K.a.c("OL");K.a.c.ho=new K.a.c("OPTGROUP");K.a.c.io=new K.a.c("OPTION");K.a.c.jo=new K.a.c("OUTPUT");K.a.c.ko=new K.a.c("P");K.a.c.lo=new K.a.c("PARAM");K.a.c.no=new K.a.c("PRE");K.a.c.po=new K.a.c("PROGRESS");K.a.c.Q=new K.a.c("Q");
K.a.c.qo=new K.a.c("RP");K.a.c.ro=new K.a.c("RT");K.a.c.so=new K.a.c("RUBY");K.a.c.uo=new K.a.c("S");K.a.c.wo=new K.a.c("SAMP");K.a.c.xo=new K.a.c(p);K.a.c.yo=new K.a.c("SECTION");K.a.c.zo=new K.a.c("SELECT");K.a.c.Ao=new K.a.c("SMALL");K.a.c.Bo=new K.a.c("SOURCE");K.a.c.Co=new K.a.c("SPAN");K.a.c.Do=new K.a.c("STRIKE");K.a.c.Eo=new K.a.c("STRONG");K.a.c.Fo=new K.a.c("STYLE");K.a.c.Go=new K.a.c("SUB");K.a.c.Ho=new K.a.c("SUMMARY");K.a.c.Io=new K.a.c("SUP");K.a.c.Jo=new K.a.c("SVG");K.a.c.Ko=new K.a.c("TABLE");
K.a.c.Lo=new K.a.c("TBODY");K.a.c.Mo=new K.a.c("TD");K.a.c.No=new K.a.c("TEMPLATE");K.a.c.Oo=new K.a.c("TEXTAREA");K.a.c.Po=new K.a.c("TFOOT");K.a.c.Qo=new K.a.c("TH");K.a.c.Ro=new K.a.c("THEAD");K.a.c.So=new K.a.c("TIME");K.a.c.To=new K.a.c("TITLE");K.a.c.Uo=new K.a.c("TR");K.a.c.Vo=new K.a.c("TRACK");K.a.c.Xo=new K.a.c("TT");K.a.c.Zo=new K.a.c("U");K.a.c.$o=new K.a.c("UL");K.a.c.ap=new K.a.c("VAR");K.a.c.bp=new K.a.c("VIDEO");K.a.c.cp=new K.a.c("WBR");K.J={};K.J.ic=function(b){return function(){return b}};K.J.an=K.J.ic(!1);K.J.Wo=K.J.ic(!0);K.J.co=K.J.ic(null);K.J.$j=E();K.J.error=function(b){return function(){throw Error(b);}};K.J.ma=function(b){return function(){throw b;}};K.J.lock=function(b,c){c=c||0;return function(){return b.apply(this,Array.prototype.slice.call(arguments,0,c))}};K.J.vs=function(b){return function(){return arguments[b]}};
K.J.Cs=function(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.push.apply(c,d);return b.apply(this,c)}};K.J.Xt=function(b,c){return K.J.ll(b,K.J.ic(c))};K.J.Cq=function(b,c){return function(d){return c?b==d:b===d}};K.J.aq=function(b,c){var d=arguments,e=d.length;return function(){var b;e&&(b=d[e-1].apply(this,arguments));for(var c=e-2;0<=c;c--)b=d[c].call(this,b);return b}};
K.J.ll=function(b){var c=arguments,d=c.length;return function(){for(var b,f=0;f<d;f++)b=c[f].apply(this,arguments);return b}};K.J.kp=function(b){var c=arguments,d=c.length;return function(){for(var b=0;b<d;b++)if(!c[b].apply(this,arguments))return!1;return!0}};K.J.As=function(b){var c=arguments,d=c.length;return function(){for(var b=0;b<d;b++)if(c[b].apply(this,arguments))return!0;return!1}};K.J.us=function(b){return function(){return!b.apply(this,arguments)}};
K.J.create=function(b,c){function d(){}d.prototype=b.prototype;var e=new d;b.apply(e,Array.prototype.slice.call(arguments,1));return e};K.J.Kh=!0;K.J.Op=function(b){var c=!1,d;return function(){if(!K.J.Kh)return b();c||(d=b(),c=!0);return d}};K.J.once=function(b){var c=b;return function(){if(c){var b=c;c=null;b()}}};K.J.rq=function(b,c,d){var e=0;return function(f){K.global.clearTimeout(e);var g=arguments;e=K.global.setTimeout(function(){b.apply(d,g)},c)}};
K.J.Ft=function(b,c,d){function e(){g=K.global.setTimeout(f,c);b.apply(d,l)}function f(){g=0;h&&(h=!1,e())}var g=0,h=!1,l=[];return function(b){l=arguments;g?h=!0:e()}};K.J.Hs=function(b,c,d){function e(){f=0}var f=0;return function(g){f||(f=K.global.setTimeout(e,c),b.apply(d,arguments))}};K.g={};K.g.userAgent={};K.g.userAgent.A={};K.g.userAgent.A.Xf=function(){var b=K.g.userAgent.A.Kj();return b&&(b=b.userAgent)?b:""};K.g.userAgent.A.Kj=function(){return K.global.navigator};K.g.userAgent.A.xh=K.g.userAgent.A.Xf();K.g.userAgent.A.tt=function(b){K.g.userAgent.A.xh=b||K.g.userAgent.A.Xf()};K.g.userAgent.A.sb=function(){return K.g.userAgent.A.xh};K.g.userAgent.A.K=function(b){return K.f.contains(K.g.userAgent.A.sb(),b)};
K.g.userAgent.A.Pk=function(){return K.f.kf(K.g.userAgent.A.sb(),"WebKit")};K.g.userAgent.A.Af=function(b){for(var c=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,d=[],e;e=c.exec(b);)d.push([e[1],e[2],e[3]||void 0]);return d};K.object={};K.object.is=function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c};K.object.forEach=function(b,c,d){for(var e in b)c.call(d,b[e],e,b)};K.object.filter=function(b,c,d){var e={},f;for(f in b)c.call(d,b[f],f,b)&&(e[f]=b[f]);return e};K.object.map=function(b,c,d){var e={},f;for(f in b)e[f]=c.call(d,b[f],f,b);return e};K.object.some=function(b,c,d){for(var e in b)if(c.call(d,b[e],e,b))return!0;return!1};K.object.every=function(b,c,d){for(var e in b)if(!c.call(d,b[e],e,b))return!1;return!0};
K.object.Vq=function(b){var c=0,d;for(d in b)c++;return c};K.object.Tq=function(b){for(var c in b)return c};K.object.Uq=function(b){for(var c in b)return b[c]};K.object.contains=function(b,c){return K.object.cj(b,c)};K.object.jr=function(b){var c=[],d=0,e;for(e in b)c[d++]=b[e];return c};K.object.Vf=function(b){var c=[],d=0,e;for(e in b)c[d++]=e;return c};K.object.ir=function(b,c){var d=K.Nb(c),e=d?c:arguments;for(d=d?0:1;d<e.length;d++){if(null==b)return;b=b[e[d]]}return b};
K.object.bj=function(b,c){return null!==b&&c in b};K.object.cj=function(b,c){for(var d in b)if(b[d]==c)return!0;return!1};K.object.zj=function(b,c,d){for(var e in b)if(c.call(d,b[e],e,b))return e};K.object.Hq=function(b,c,d){return(c=K.object.zj(b,c,d))&&b[c]};K.object.Qb=function(b){for(var c in b)return!1;return!0};K.object.clear=function(b){for(var c in b)delete b[c]};K.object.remove=function(b,c){var d;(d=c in b)&&delete b[c];return d};
K.object.add=function(b,c,d){if(null!==b&&c in b)throw Error('The object already contains the key "'+c+'"');K.object.set(b,c,d)};K.object.get=function(b,c,d){return null!==b&&c in b?b[c]:d};K.object.set=function(b,c,d){b[c]=d};K.object.ht=function(b,c,d){return c in b?b[c]:b[c]=d};K.object.ut=function(b,c,d){if(c in b)return b[c];d=d();return b[c]=d};K.object.Ib=function(b,c){for(var d in b)if(!(d in c)||b[d]!==c[d])return!1;for(d in c)if(!(d in b))return!1;return!0};
K.object.clone=function(b){var c={},d;for(d in b)c[d]=b[d];return c};K.object.Hl=function(b){var c=K.aa(b);if(c==y||c==r){if(K.ya(b.clone))return b.clone();c=c==r?[]:{};for(var d in b)c[d]=K.object.Hl(b[d]);return c}return b};K.object.Mt=function(b){var c={},d;for(d in b)c[b[d]]=d;return c};K.object.Pe=["constructor",w,"isPrototypeOf",A,D,"toString","valueOf"];
K.object.extend=function(b,c){for(var d,e,f=1;f<arguments.length;f++){e=arguments[f];for(d in e)b[d]=e[d];for(var g=0;g<K.object.Pe.length;g++)d=K.object.Pe[g],Object.prototype.hasOwnProperty.call(e,d)&&(b[d]=e[d])}};K.object.create=function(b){var c=arguments.length;if(1==c&&K.isArray(arguments[0]))return K.object.create.apply(null,arguments[0]);if(c%2)throw Error("Uneven number of arguments");for(var d={},e=0;e<c;e+=2)d[arguments[e]]=arguments[e+1];return d};
K.object.gj=function(b){var c=arguments.length;if(1==c&&K.isArray(arguments[0]))return K.object.gj.apply(null,arguments[0]);for(var d={},e=0;e<c;e++)d[arguments[e]]=!0;return d};K.object.iq=function(b){var c=b;Object.isFrozen&&!Object.isFrozen(b)&&(c=Object.create(b),Object.freeze(c));return c};K.object.Gr=function(b){return!!Object.isFrozen&&Object.isFrozen(b)};
K.object.Sq=function(b,c,d){if(!b)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return K.object.Vf(b);for(var e={};b&&(b!==Object.prototype||c)&&(b!==Function.prototype||d);){for(var f=Object.getOwnPropertyNames(b),g=0;g<f.length;g++)e[f[g]]=!0;b=Object.getPrototypeOf(b)}return K.object.Vf(e)};K.g.userAgent.v={};K.g.userAgent.v.Rg=function(){return K.g.userAgent.A.K("Opera")};K.g.userAgent.v.Nk=function(){return K.g.userAgent.A.K("Trident")||K.g.userAgent.A.K("MSIE")};K.g.userAgent.v.Sd=function(){return K.g.userAgent.A.K("Edge")};K.g.userAgent.v.Mk=function(){return K.g.userAgent.A.K("Firefox")};K.g.userAgent.v.Sg=function(){return K.g.userAgent.A.K("Safari")&&!(K.g.userAgent.v.Qd()||K.g.userAgent.v.Rd()||K.g.userAgent.v.Rg()||K.g.userAgent.v.Sd()||K.g.userAgent.v.Kg()||K.g.userAgent.A.K("Android"))};
K.g.userAgent.v.Rd=function(){return K.g.userAgent.A.K("Coast")};K.g.userAgent.v.Ok=function(){return(K.g.userAgent.A.K("iPad")||K.g.userAgent.A.K("iPhone"))&&!K.g.userAgent.v.Sg()&&!K.g.userAgent.v.Qd()&&!K.g.userAgent.v.Rd()&&K.g.userAgent.A.K("AppleWebKit")};K.g.userAgent.v.Qd=function(){return(K.g.userAgent.A.K("Chrome")||K.g.userAgent.A.K("CriOS"))&&!K.g.userAgent.v.Sd()};
K.g.userAgent.v.Lk=function(){return K.g.userAgent.A.K("Android")&&!(K.g.userAgent.v.zg()||K.g.userAgent.v.fk()||K.g.userAgent.v.Nd()||K.g.userAgent.v.Kg())};K.g.userAgent.v.Nd=K.g.userAgent.v.Rg;K.g.userAgent.v.uc=K.g.userAgent.v.Nk;K.g.userAgent.v.Ra=K.g.userAgent.v.Sd;K.g.userAgent.v.fk=K.g.userAgent.v.Mk;K.g.userAgent.v.Ur=K.g.userAgent.v.Sg;K.g.userAgent.v.Ar=K.g.userAgent.v.Rd;K.g.userAgent.v.Ir=K.g.userAgent.v.Ok;K.g.userAgent.v.zg=K.g.userAgent.v.Qd;K.g.userAgent.v.yr=K.g.userAgent.v.Lk;
K.g.userAgent.v.Kg=function(){return K.g.userAgent.A.K("Silk")};K.g.userAgent.v.Lb=function(){function b(b){b=K.j.find(b,e);return d[b]||""}var c=K.g.userAgent.A.sb();if(K.g.userAgent.v.uc())return K.g.userAgent.v.Jj(c);c=K.g.userAgent.A.Af(c);var d={};K.j.forEach(c,function(b){d[b[0]]=b[1]});var e=K.fb(K.object.bj,d);return K.g.userAgent.v.Nd()?b(["Version","Opera"]):K.g.userAgent.v.Ra()?b(["Edge"]):K.g.userAgent.v.zg()?b(["Chrome","CriOS"]):(c=c[2])&&c[1]||""};
K.g.userAgent.v.va=function(b){return 0<=K.f.Eb(K.g.userAgent.v.Lb(),b)};K.g.userAgent.v.Jj=function(b){var c=/rv: *([\d\.]*)/.exec(b);if(c&&c[1])return c[1];c="";var d=/MSIE +([\d\.]+)/.exec(b);if(d&&d[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==d[1])if(b&&b[1])switch(b[1]){case "4.0":c="8.0";break;case "5.0":c="9.0";break;case "6.0":c="10.0";break;case "7.0":c="11.0"}else c="7.0";else c=d[1];return c};K.g.userAgent.U={};K.g.userAgent.U.lk=function(){return K.g.userAgent.A.K("Presto")};K.g.userAgent.U.pk=function(){return K.g.userAgent.A.K("Trident")||K.g.userAgent.A.K("MSIE")};K.g.userAgent.U.Ra=function(){return K.g.userAgent.A.K("Edge")};K.g.userAgent.U.Mg=function(){return K.g.userAgent.A.Pk()&&!K.g.userAgent.U.Ra()};K.g.userAgent.U.gk=function(){return K.g.userAgent.A.K("Gecko")&&!K.g.userAgent.U.Mg()&&!K.g.userAgent.U.pk()&&!K.g.userAgent.U.Ra()};
K.g.userAgent.U.Lb=function(){var b=K.g.userAgent.A.sb();if(b){b=K.g.userAgent.A.Af(b);var c=K.g.userAgent.U.Hj(b);if(c)return"Gecko"==c[0]?K.g.userAgent.U.Rj(b):c[1];b=b[0];var d;if(b&&(d=b[2])&&(d=/Trident\/([^\s;]+)/.exec(d)))return d[1]}return""};K.g.userAgent.U.Hj=function(b){if(!K.g.userAgent.U.Ra())return b[1];for(var c=0;c<b.length;c++){var d=b[c];if("Edge"==d[0])return d}};K.g.userAgent.U.va=function(b){return 0<=K.f.Eb(K.g.userAgent.U.Lb(),b)};
K.g.userAgent.U.Rj=function(b){return(b=K.j.find(b,function(b){return"Firefox"==b[0]}))&&b[1]||""};K.async.qh=function(b){K.global.setTimeout(function(){throw b;},0)};K.async.pa=function(b,c,d){var e=b;c&&(e=K.bind(b,c));e=K.async.pa.Ah(e);K.ya(K.global.setImmediate)&&(d||K.async.pa.Kl())?K.global.setImmediate(e):(K.async.pa.kh||(K.async.pa.kh=K.async.pa.Nj()),K.async.pa.kh(e))};K.async.pa.Kl=function(){return K.global.Window&&K.global.Window.prototype&&!K.g.userAgent.v.Ra()&&K.global.Window.prototype.setImmediate==K.global.setImmediate?!1:!0};
K.async.pa.Nj=function(){var b=K.global.MessageChannel;"undefined"===typeof b&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K.g.userAgent.U.lk()&&(b=function(){var b=document.createElement("IFRAME");b.style.display="none";b.src="";document.documentElement.appendChild(b);var c=b.contentWindow;b=c.document;b.open();b.write("");b.close();var d="callImmediate"+Math.random(),e="file:"==c.location.protocol?"*":c.location.protocol+"//"+c.location.host;b=K.bind(function(b){if(("*"==
e||b.origin==e)&&b.data==d)this.port1.onmessage()},this);c.addEventListener("message",b,!1);this.port1={};this.port2={postMessage:function(){c.postMessage(d,e)}}});if("undefined"!==typeof b&&!K.g.userAgent.v.uc()){var c=new b,d={},e=d;c.port1.onmessage=function(){if(K.R(d.next)){d=d.next;var b=d.lf;d.lf=null;b()}};return function(b){e.next={lf:b};e=e.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement(p)?function(b){var c=document.createElement(p);
c.onreadystatechange=function(){c.onreadystatechange=null;c.parentNode.removeChild(c);c=null;b();b=null};document.documentElement.appendChild(c)}:function(b){K.global.setTimeout(b,0)}};K.async.pa.Ah=K.J.$j;K.debug.Z.register(function(b){K.async.pa.Ah=b});K.async.Ea=function(){this.Qc=this.Ab=null};K.async.Ea.Vc=100;K.async.Ea.Kb=new K.async.Zb(function(){return new K.async.ad},function(b){b.reset()},K.async.Ea.Vc);K.async.Ea.prototype.add=function(b,c){var d=K.async.Ea.Kb.get();d.set(b,c);this.Qc?this.Qc.next=d:this.Ab=d;this.Qc=d};K.async.Ea.prototype.remove=function(){var b=null;this.Ab&&(b=this.Ab,this.Ab=this.Ab.next,this.Ab||(this.Qc=null),b.next=null);return b};K.async.ad=function(){this.next=this.scope=this.od=null};
K.async.ad.prototype.set=function(b,c){this.od=b;this.scope=c;this.next=null};K.async.ad.prototype.reset=function(){this.next=this.scope=this.od=null};K.async.M=function(b,c){K.async.M.Hc||K.async.M.bk();K.async.M.Pc||(K.async.M.Hc(),K.async.M.Pc=!0);K.async.M.ie.add(b,c)};K.async.M.bk=function(){if(-1!=String(K.global.Promise).indexOf("[native code]")){var b=K.global.Promise.resolve(void 0);K.async.M.Hc=function(){b.then(K.async.M.Cc)}}else K.async.M.Hc=function(){K.async.pa(K.async.M.Cc)}};K.async.M.Jq=function(b){K.async.M.Hc=function(){K.async.pa(K.async.M.Cc);b&&b(K.async.M.Cc)}};K.async.M.Pc=!1;K.async.M.ie=new K.async.Ea;
K.ea&&(K.async.M.Rs=function(){K.async.M.Pc=!1;K.async.M.ie=new K.async.Ea});K.async.M.Cc=function(){for(var b;b=K.async.M.ie.remove();){try{b.od.call(b.scope)}catch(c){K.async.qh(c)}K.async.Ea.Kb.put(b)}K.async.M.Pc=!1};K.a.m={};K.a.m.Cp=F();K.a.m.up=F();K.a.m.zp=F();K.a.m.yp=F();K.a.m.vp=F();K.a.m.wp=F();K.a.m.xp=F();K.a.m.Ap=F();K.a.m.Bp=F();K.a.m.sq=function(b){return K.ha(b)?b.constructor.displayName||b.constructor.name||Object.prototype.toString.call(b):void 0===b?"undefined":null===b?"null":typeof b};K.a.m.qc=function(b){return(b=b&&b.ownerDocument)&&(b.defaultView||b.parentWindow)||K.global};K.g.userAgent.platform={};K.g.userAgent.platform.yg=function(){return K.g.userAgent.A.K("Android")};K.g.userAgent.platform.Hg=function(){return K.g.userAgent.A.K("iPod")};K.g.userAgent.platform.Gg=function(){return K.g.userAgent.A.K("iPhone")&&!K.g.userAgent.A.K("iPod")&&!K.g.userAgent.A.K("iPad")};K.g.userAgent.platform.Fg=function(){return K.g.userAgent.A.K("iPad")};K.g.userAgent.platform.Eg=function(){return K.g.userAgent.platform.Gg()||K.g.userAgent.platform.Fg()||K.g.userAgent.platform.Hg()};
K.g.userAgent.platform.Ig=function(){return K.g.userAgent.A.K("Macintosh")};K.g.userAgent.platform.ik=function(){return K.g.userAgent.A.K("Linux")};K.g.userAgent.platform.Og=function(){return K.g.userAgent.A.K("Windows")};K.g.userAgent.platform.Ag=function(){return K.g.userAgent.A.K("CrOS")};
K.g.userAgent.platform.Lb=function(){var b=K.g.userAgent.A.sb(),c="";K.g.userAgent.platform.Og()?(c=/Windows (?:NT|Phone) ([0-9.]+)/,c=(b=c.exec(b))?b[1]:"0.0"):K.g.userAgent.platform.Eg()?(c=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,c=(b=c.exec(b))&&b[1].replace(/_/g,".")):K.g.userAgent.platform.Ig()?(c=/Mac OS X ([0-9_.]+)/,c=(b=c.exec(b))?b[1].replace(/_/g,"."):"10"):K.g.userAgent.platform.yg()?(c=/Android\s+([^\);]+)(\)|;)/,c=(b=c.exec(b))&&b[1]):K.g.userAgent.platform.Ag()&&(c=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
c=(b=c.exec(b))&&b[1]);return c||""};K.g.userAgent.platform.va=function(b){return 0<=K.f.Eb(K.g.userAgent.platform.Lb(),b)};K.Ha={};K.Ha.object=function(b,c){return c};K.Ha.ce=function(b){K.Ha.ce[" "](b);return b};K.Ha.ce[" "]=K.eb;K.Ha.Pp=function(b,c){try{return K.Ha.ce(b[c]),!0}catch(d){}return!1};K.Ha.cache=function(b,c,d,e){e=e?e(c):c;return Object.prototype.hasOwnProperty.call(b,e)?b[e]:b[e]=d(c)};K.userAgent={};K.userAgent.oe=!1;K.userAgent.me=!1;K.userAgent.ne=!1;K.userAgent.te=!1;K.userAgent.Uc=!1;K.userAgent.re=!1;K.userAgent.Fh=!1;K.userAgent.Bb=K.userAgent.oe||K.userAgent.me||K.userAgent.ne||K.userAgent.Uc||K.userAgent.te||K.userAgent.re;K.userAgent.Qj=function(){return K.g.userAgent.A.sb()};K.userAgent.Yf=function(){return K.global.navigator||null};K.userAgent.Ne=K.userAgent.Bb?K.userAgent.re:K.g.userAgent.v.Nd();K.userAgent.Y=K.userAgent.Bb?K.userAgent.oe:K.g.userAgent.v.uc();
K.userAgent.Ce=K.userAgent.Bb?K.userAgent.me:K.g.userAgent.U.Ra();K.userAgent.Um=K.userAgent.Ce||K.userAgent.Y;K.userAgent.Yc=K.userAgent.Bb?K.userAgent.ne:K.g.userAgent.U.gk();K.userAgent.Cb=K.userAgent.Bb?K.userAgent.te||K.userAgent.Uc:K.g.userAgent.U.Mg();K.userAgent.kk=function(){return K.userAgent.Cb&&K.g.userAgent.A.K("Mobile")};K.userAgent.Yn=K.userAgent.Uc||K.userAgent.kk();K.userAgent.vo=K.userAgent.Cb;K.userAgent.nj=function(){var b=K.userAgent.Yf();return b&&b.platform||""};
K.userAgent.mo=K.userAgent.nj();K.userAgent.qe=!1;K.userAgent.ue=!1;K.userAgent.pe=!1;K.userAgent.ve=!1;K.userAgent.le=!1;K.userAgent.Sc=!1;K.userAgent.Rc=!1;K.userAgent.Tc=!1;K.userAgent.Da=K.userAgent.qe||K.userAgent.ue||K.userAgent.pe||K.userAgent.ve||K.userAgent.le||K.userAgent.Sc||K.userAgent.Rc||K.userAgent.Tc;K.userAgent.Rn=K.userAgent.Da?K.userAgent.qe:K.g.userAgent.platform.Ig();K.userAgent.ep=K.userAgent.Da?K.userAgent.ue:K.g.userAgent.platform.Og();
K.userAgent.hk=function(){return K.g.userAgent.platform.ik()||K.g.userAgent.platform.Ag()};K.userAgent.Qn=K.userAgent.Da?K.userAgent.pe:K.userAgent.hk();K.userAgent.tk=function(){var b=K.userAgent.Yf();return!!b&&K.f.contains(b.appVersion||"","X11")};K.userAgent.fp=K.userAgent.Da?K.userAgent.ve:K.userAgent.tk();K.userAgent.am=K.userAgent.Da?K.userAgent.le:K.g.userAgent.platform.yg();K.userAgent.Fn=K.userAgent.Da?K.userAgent.Sc:K.g.userAgent.platform.Gg();
K.userAgent.En=K.userAgent.Da?K.userAgent.Rc:K.g.userAgent.platform.Fg();K.userAgent.Gn=K.userAgent.Da?K.userAgent.Tc:K.g.userAgent.platform.Hg();K.userAgent.Dn=K.userAgent.Da?K.userAgent.Sc||K.userAgent.Rc||K.userAgent.Tc:K.g.userAgent.platform.Eg();K.userAgent.oj=function(){var b="",c=K.userAgent.Sj();c&&(b=c?c[1]:"");return K.userAgent.Y&&(c=K.userAgent.Of(),null!=c&&c>parseFloat(b))?String(c):b};
K.userAgent.Sj=function(){var b=K.userAgent.Qj();if(K.userAgent.Yc)return/rv\:([^\);]+)(\)|;)/.exec(b);if(K.userAgent.Ce)return/Edge\/([\d\.]+)/.exec(b);if(K.userAgent.Y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);if(K.userAgent.Cb)return/WebKit\/(\S+)/.exec(b);if(K.userAgent.Ne)return/(?:Version)[ \/]?(\S+)/.exec(b)};K.userAgent.Of=function(){var b=K.global.document;return b?b.documentMode:void 0};K.userAgent.VERSION=K.userAgent.oj();K.userAgent.compare=function(b,c){return K.f.Eb(b,c)};
K.userAgent.rk={};K.userAgent.va=function(b){return K.userAgent.Fh||K.Ha.cache(K.userAgent.rk,b,function(){return 0<=K.f.Eb(K.userAgent.VERSION,b)})};K.userAgent.Zr=K.userAgent.va;K.userAgent.Pb=function(b){return Number(K.userAgent.Wh)>=b};K.userAgent.Cr=K.userAgent.Pb;var L;var M=K.global.document,aa=K.userAgent.Of();L=M&&K.userAgent.Y?aa||("CSS1Compat"==M.compatMode?parseInt(K.userAgent.VERSION,10):5):void 0;K.userAgent.Wh=L;K.a.ib={Lh:!K.userAgent.Y||K.userAgent.Pb(9),Mh:!K.userAgent.Yc&&!K.userAgent.Y||K.userAgent.Y&&K.userAgent.Pb(9)||K.userAgent.Yc&&K.userAgent.va("1.9.1"),xe:K.userAgent.Y&&!K.userAgent.va("9"),Nh:K.userAgent.Y||K.userAgent.Ne||K.userAgent.Cb,ci:K.userAgent.Y,Mn:K.userAgent.Y&&!K.userAgent.Pb(9)};K.a.Mc={};K.a.Mc.Hi={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};K.a.Mc.sk=function(b){return!0===K.a.Mc.Hi[b]};K.b.V=function(){this.yc="";this.ni=K.b.V.ca};K.b.V.prototype.ua=!0;K.b.V.ca={};K.b.V.mc=function(b){b=K.f.I.u(b);return 0===b.length?K.b.V.EMPTY:K.b.V.hd(b)};K.b.V.prototype.ga=G("yc");K.ea&&(K.b.V.prototype.toString=function(){return"SafeScript{"+this.yc+"}"});K.b.V.u=function(b){if(b instanceof K.b.V&&b.constructor===K.b.V&&b.ni===K.b.V.ca)return b.yc;K.m.ma("expected object of type SafeScript, got '"+b+k+K.aa(b));return"type_error:SafeScript"};K.b.V.hd=function(b){return(new K.b.V).bb(b)};
K.b.V.prototype.bb=function(b){this.yc=b;return this};K.b.V.EMPTY=K.b.V.hd("");K.sa={};K.sa.url={};K.sa.url.dj=function(b){return K.sa.url.lg().createObjectURL(b)};K.sa.url.Ts=function(b){K.sa.url.lg().revokeObjectURL(b)};K.sa.url.lg=function(){var b=K.sa.url.Ef();if(null!=b)return b;throw Error("This browser doesn't seem to support blob URLs");};K.sa.url.Ef=function(){return K.R(K.global.URL)&&K.R(K.global.URL.createObjectURL)?K.global.URL:K.R(K.global.webkitURL)&&K.R(K.global.webkitURL.createObjectURL)?K.global.webkitURL:K.R(K.global.createObjectURL)?K.global:null};
K.sa.url.Lp=function(){return null!=K.sa.url.Ef()};K.b.o=function(){this.Ga="";this.ri=K.b.o.ca};K.b.o.Ka="about:invalid#zClosurez";K.b.o.prototype.ua=!0;K.b.o.prototype.ga=G("Ga");K.b.o.prototype.Dd=!0;K.b.o.prototype.$a=function(){return K.h.i.O.Ta};K.ea&&(K.b.o.prototype.toString=function(){return"SafeUrl{"+this.Ga+"}"});K.b.o.u=function(b){if(b instanceof K.b.o&&b.constructor===K.b.o&&b.ri===K.b.o.ca)return b.Ga;K.m.ma("expected object of type SafeUrl, got '"+b+k+K.aa(b));return"type_error:SafeUrl"};K.b.o.mc=function(b){return K.b.o.Fa(K.f.I.u(b))};
K.b.Re=/^(?:audio\/(?:3gpp|3gpp2|aac|midi|mp4|mpeg|ogg|x-m4a|x-wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|text\/csv|video\/(?:mpeg|mp4|ogg|webm))$/i;K.b.o.Mq=function(b){b=K.b.Re.test(b.type)?K.sa.url.dj(b):K.b.o.Ka;return K.b.o.Fa(b)};K.b.Rh=/^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;K.b.o.Oq=function(b){var c=b.match(K.b.Rh);c=c&&K.b.Re.test(c[1]);return K.b.o.Fa(c?b:K.b.o.Ka)};K.b.o.Qq=function(b){K.f.Zi(b)||(b=K.b.o.Ka);return K.b.o.Fa(b)};K.b.o.Rq=function(b){return K.b.o.Fa(K.b.C.u(b))};
K.b.Se=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;K.b.o.Gc=function(b){if(b instanceof K.b.o)return b;b=b.ua?b.ga():String(b);K.b.Se.test(b)||(b=K.b.o.Ka);return K.b.o.Fa(b)};K.b.o.Vb=function(b){if(b instanceof K.b.o)return b;b=b.ua?b.ga():String(b);K.b.Se.test(b)||(b=K.b.o.Ka);return K.b.o.Fa(b)};K.b.o.ca={};K.b.o.Fa=function(b){var c=new K.b.o;c.Ga=b;return c};K.b.o.Wl=K.b.o.Fa("about:blank");K.b.B=function(){this.Ac="";this.pi=K.b.B.ca};K.b.B.prototype.ua=!0;K.b.B.ca={};K.b.B.mc=function(b){b=K.f.I.u(b);return 0===b.length?K.b.B.EMPTY:K.b.B.Fb(b)};K.b.B.Vp=F();K.b.B.prototype.ga=G("Ac");K.ea&&(K.b.B.prototype.toString=function(){return"SafeStyle{"+this.Ac+"}"});K.b.B.u=function(b){if(b instanceof K.b.B&&b.constructor===K.b.B&&b.pi===K.b.B.ca)return b.Ac;K.m.ma("expected object of type SafeStyle, got '"+b+k+K.aa(b));return"type_error:SafeStyle"};K.b.B.Fb=function(b){return(new K.b.B).bb(b)};
K.b.B.prototype.bb=function(b){this.Ac=b;return this};K.b.B.EMPTY=K.b.B.Fb("");K.b.B.Ka="zClosurez";K.b.B.create=function(b){var c="",d;for(d in b){if(!/^[-_a-zA-Z0-9]+$/.test(d))throw Error("Name allows only [-_a-zA-Z0-9], got: "+d);var e=b[d];null!=e&&(e=K.isArray(e)?K.j.map(e,K.b.B.gh).join(" "):K.b.B.gh(e),c+=d+":"+e+";")}return c?K.b.B.Fb(c):K.b.B.EMPTY};
K.b.B.gh=function(b){return b instanceof K.b.o?'url("'+K.b.o.u(b).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")':b instanceof K.f.I?K.f.I.u(b):K.b.B.il(String(b))};K.b.B.il=function(b){var c=b.replace(K.b.o.ai,"$1").replace(K.b.o.Xe,"url");return K.b.B.Ei.test(c)?K.b.B.Vj(b)?K.b.B.jl(b):(K.m.ma("String value requires balanced quotes, got: "+b),K.b.B.Ka):(K.m.ma("String value allows only "+K.b.B.$e+" and simple functions, got: "+b),K.b.B.Ka)};
K.b.B.Vj=function(b){for(var c=!0,d=!0,e=0;e<b.length;e++){var f=b.charAt(e);"'"==f&&d?c=!c:'"'==f&&c&&(d=!d)}return c&&d};K.b.B.$e="[-,.\"'%_!# a-zA-Z0-9]";K.b.B.Ei=new RegExp("^"+K.b.B.$e+"+$");K.b.o.Xe=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;K.b.o.ai=/\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;
K.b.B.jl=function(b){return b.replace(K.b.o.Xe,function(b,d,e,f){var c="";e=e.replace(/^(['"])(.*)\1$/,function(b,d,e){c=d;return e});b=K.b.o.Gc(e).ga();return d+c+b+c+f})};K.b.B.concat=function(b){function c(b){K.isArray(b)?K.j.forEach(b,c):d+=K.b.B.u(b)}var d="";K.j.forEach(arguments,c);return d?K.b.B.Fb(d):K.b.B.EMPTY};K.b.N=function(){this.zc="";this.oi=K.b.N.ca};K.b.N.prototype.ua=!0;K.b.N.ca={};
K.b.N.kq=function(b,c){if(K.f.contains(b,"<"))throw Error("Selector does not allow '<', got: "+b);var d=b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+b);if(!K.b.N.Uj(d))throw Error("() and [] in selector must be balanced, got: "+b);c instanceof K.b.B||(c=K.b.B.create(c));b=b+"{"+K.b.B.u(c)+"}";return K.b.N.Gb(b)};
K.b.N.Uj=function(b){for(var c={"(":")","[":"]"},d=[],e=0;e<b.length;e++){var f=b[e];if(c[f])d.push(c[f]);else if(K.object.contains(c,f)&&d.pop()!=f)return!1}return 0==d.length};K.b.N.concat=function(b){function c(b){K.isArray(b)?K.j.forEach(b,c):d+=K.b.N.u(b)}var d="";K.j.forEach(arguments,c);return K.b.N.Gb(d)};K.b.N.mc=function(b){b=K.f.I.u(b);return 0===b.length?K.b.N.EMPTY:K.b.N.Gb(b)};K.b.N.prototype.ga=G("zc");K.ea&&(K.b.N.prototype.toString=function(){return"SafeStyleSheet{"+this.zc+"}"});
K.b.N.u=function(b){if(b instanceof K.b.N&&b.constructor===K.b.N&&b.oi===K.b.N.ca)return b.zc;K.m.ma("expected object of type SafeStyleSheet, got '"+b+k+K.aa(b));return"type_error:SafeStyleSheet"};K.b.N.Gb=function(b){return(new K.b.N).bb(b)};K.b.N.prototype.bb=function(b){this.zc=b;return this};K.b.N.EMPTY=K.b.N.Gb("");K.b.l=function(){this.Ga="";this.mi=K.b.l.ca;this.kc=null};K.b.l.prototype.Dd=!0;K.b.l.prototype.$a=G("kc");K.b.l.prototype.ua=!0;K.b.l.prototype.ga=G("Ga");K.ea&&(K.b.l.prototype.toString=function(){return"SafeHtml{"+this.Ga+"}"});K.b.l.u=function(b){if(b instanceof K.b.l&&b.constructor===K.b.l&&b.mi===K.b.l.ca)return b.Ga;K.m.ma("expected object of type SafeHtml, got '"+b+k+K.aa(b));return"type_error:SafeHtml"};
K.b.l.ta=function(b){if(b instanceof K.b.l)return b;var c=null;b.Dd&&(c=b.$a());return K.b.l.ra(K.f.ta(b.ua?b.ga():String(b)),c)};K.b.l.pr=function(b){if(b instanceof K.b.l)return b;b=K.b.l.ta(b);return K.b.l.ra(K.f.Yg(K.b.l.u(b)),b.$a())};K.b.l.qr=function(b){if(b instanceof K.b.l)return b;b=K.b.l.ta(b);return K.b.l.ra(K.f.Ol(K.b.l.u(b)),b.$a())};K.b.l.from=K.b.l.ta;K.b.l.Ze=/^[a-zA-Z0-9-]+$/;K.b.l.Ci={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};
K.b.l.ii={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};K.b.l.create=function(b,c,d){K.b.l.Ml(String(b));return K.b.l.Ya(String(b),c,d)};K.b.l.Ml=function(b){if(!K.b.l.Ze.test(b))throw Error("Invalid tag name <"+b+">.");if(b.toUpperCase()in K.b.l.ii)throw Error("Tag name <"+b+"> is not allowed for SafeHtml.");};
K.b.l.hq=function(b,c,d,e){b&&K.b.C.u(b);var f={};f.src=b||null;f.srcdoc=c&&K.b.l.u(c);b=K.b.l.hc(f,{sandbox:""},d);return K.b.l.Ya("iframe",b,e)};K.b.l.lq=function(b,c,d,e){if(!K.b.l.Wi())throw Error("The browser does not support sandboxed iframes.");var f={};f.src=b?K.b.o.u(K.b.o.Gc(b)):null;f.srcdoc=c||null;f.sandbox="";b=K.b.l.hc(f,{},d);return K.b.l.Ya("iframe",b,e)};K.b.l.Wi=function(){return K.global.HTMLIFrameElement&&"sandbox"in K.global.HTMLIFrameElement.prototype};
K.b.l.nq=function(b,c){K.b.C.u(b);b=K.b.l.hc({src:b},{},c);return K.b.l.Ya("script",b)};K.b.l.mq=function(b,c){for(var d in c){var e=d.toLowerCase();if("language"==e||"src"==e||"text"==e||"type"==e)throw Error('Cannot set "'+e+'" attribute');}d="";b=K.j.concat(b);for(e=0;e<b.length;e++)d+=K.b.V.u(b[e]);b=K.b.l.ra(d,K.h.i.O.qa);return K.b.l.Ya("script",c,b)};
K.b.l.oq=function(b,c){c=K.b.l.hc({type:"text/css"},{},c);var d="";b=K.j.concat(b);for(var e=0;e<b.length;e++)d+=K.b.N.u(b[e]);b=K.b.l.ra(d,K.h.i.O.qa);return K.b.l.Ya("style",c,b)};K.b.l.jq=function(b,c){b=K.b.o.u(K.b.o.Gc(b));(K.g.userAgent.v.uc()||K.g.userAgent.v.Ra())&&K.f.contains(b,";")&&(b="'"+b.replace(/'/g,"%27")+"'");return K.b.l.Ya("meta",{"http-equiv":"refresh",content:(c||0)+"; url="+b})};
K.b.l.Cj=function(b,c,d){if(d instanceof K.f.I)d=K.f.I.u(d);else if("style"==c.toLowerCase())d=K.b.l.Oj(d);else{if(/^on/i.test(c))throw Error('Attribute "'+c+'" requires goog.string.Const value, "'+d+'" given.');if(c.toLowerCase()in K.b.l.Ci)if(d instanceof K.b.C)d=K.b.C.u(d);else if(d instanceof K.b.o)d=K.b.o.u(d);else if(K.L(d))d=K.b.o.Gc(d).ga();else throw Error('Attribute "'+c+'" on tag "'+b+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+d+'" given.');}d.ua&&(d=d.ga());
return c+'="'+K.f.ta(String(d))+'"'};K.b.l.Oj=function(b){if(!K.ha(b))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof b+" given: "+b);b instanceof K.b.B||(b=K.b.B.create(b));return K.b.B.u(b)};K.b.l.qq=function(b,c,d,e){c=K.b.l.create(c,d,e);c.kc=b;return c};
K.b.l.concat=function(b){function c(b){K.isArray(b)?K.j.forEach(b,c):(b=K.b.l.ta(b),e+=K.b.l.u(b),b=b.$a(),d==K.h.i.O.qa?d=b:b!=K.h.i.O.qa&&d!=b&&(d=null))}var d=K.h.i.O.qa,e="";K.j.forEach(arguments,c);return K.b.l.ra(e,d)};K.b.l.cq=function(b,c){var d=K.b.l.concat(K.j.slice(arguments,1));d.kc=b;return d};K.b.l.ca={};K.b.l.ra=function(b,c){return(new K.b.l).bb(b,c)};K.b.l.prototype.bb=function(b,c){this.Ga=b;this.kc=c;return this};
K.b.l.Ya=function(b,c,d){var e=null;var f="<"+b+K.b.l.vl(b,c);K.cb(d)?K.isArray(d)||(d=[d]):d=[];K.a.Mc.sk(b.toLowerCase())?f+=">":(e=K.b.l.concat(d),f+=">"+K.b.l.u(e)+"</"+b+">",e=e.$a());(b=c&&c.dir)&&(e=/^(ltr|rtl|auto)$/i.test(b)?K.h.i.O.qa:null);return K.b.l.ra(f,e)};K.b.l.vl=function(b,c){var d="";if(c)for(var e in c){if(!K.b.l.Ze.test(e))throw Error('Invalid attribute name "'+e+'".');var f=c[e];K.cb(f)&&(d+=" "+K.b.l.Cj(b,e,f))}return d};
K.b.l.hc=function(b,c,d){var e={},f;for(f in b)e[f]=b[f];for(f in c)e[f]=c[f];for(f in d){var g=f.toLowerCase();if(g in b)throw Error('Cannot override "'+g+'" attribute, got "'+f+'" with value "'+d[f]+'"');g in c&&delete e[g];e[f]=d[f]}return e};K.b.l.Qm=K.b.l.ra("<!DOCTYPE html>",K.h.i.O.qa);K.b.l.EMPTY=K.b.l.ra("",K.h.i.O.qa);K.b.l.we=K.b.l.ra("<br>",K.h.i.O.qa);K.a.S={};K.a.S.In={Zl:"afterbegin",$l:"afterend",om:"beforebegin",pm:"beforeend"};K.a.S.sr=function(b,c,d){b.insertAdjacentHTML(c,K.b.l.u(d))};K.a.S.ui={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};K.a.S.lh=function(b,c){if(K.m.ja&&K.a.S.ui[b.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+b.tagName+".");b.innerHTML=K.b.l.u(c)};K.a.S.ot=function(b,c){b.outerHTML=K.b.l.u(c)};K.a.S.qt=function(b,c){b.style.cssText=K.b.B.u(c)};K.a.S.wq=function(b,c){b.write(K.b.l.u(c))};
K.a.S.at=function(b,c){c=c instanceof K.b.o?c:K.b.o.Vb(c);b.href=K.b.o.u(c)};K.a.S.kt=function(b,c){c=c instanceof K.b.o?c:K.b.o.Vb(c);b.src=K.b.o.u(c)};K.a.S.et=function(b,c){b.src=K.b.C.u(c)};K.a.S.gt=function(b,c){b.src=K.b.C.u(c)};K.a.S.it=function(b,c){b.src=K.b.C.u(c)};K.a.S.jt=function(b,c){b.srcdoc=K.b.l.u(c)};K.a.S.lt=function(b,c,d){b.rel=d;K.f.kf(d,"stylesheet")?b.href=K.b.C.u(c):b.href=c instanceof K.b.C?K.b.C.u(c):c instanceof K.b.o?K.b.o.u(c):K.b.o.Vb(c).ga()};
K.a.S.nt=function(b,c){b.data=K.b.C.u(c)};K.a.S.ol=function(b,c){b.src=K.b.C.u(c)};K.a.S.pt=function(b,c){b.text=K.b.V.u(c)};K.a.S.mt=function(b,c){c=c instanceof K.b.o?c:K.b.o.Vb(c);b.href=K.b.o.u(c)};K.a.S.zs=function(b,c,d,e,f){b=b instanceof K.b.o?b:K.b.o.Vb(b);return(c||window).open(K.b.o.u(b),d?K.f.I.u(d):"",e,f)};K.b.hb={};K.b.hb.fl=function(b,c){return K.b.l.ra(c,null)};K.b.hb.Xs=function(b,c){return K.b.V.hd(c)};K.b.hb.Ys=function(b,c){return K.b.B.Fb(c)};K.b.hb.Zs=function(b,c){return K.b.N.Gb(c)};K.b.hb.$s=function(b,c){return K.b.o.Fa(c)};K.b.hb.Ot=function(b,c){return K.b.C.Hb(c)};K.s={};K.s.Fs=function(b){return Math.floor(Math.random()*b)};K.s.Qt=function(b,c){return b+Math.random()*(c-b)};K.s.Wp=function(b,c,d){return Math.min(Math.max(b,c),d)};K.s.Vg=function(b,c){b%=c;return 0>b*c?b+c:b};K.s.bs=function(b,c,d){return b+d*(c-b)};K.s.ps=function(b,c,d){return Math.abs(b-c)<=(d||1E-6)};K.s.fe=function(b){return K.s.Vg(b,360)};K.s.At=function(b){return K.s.Vg(b,2*Math.PI)};K.s.uh=function(b){return b*Math.PI/180};K.s.zl=function(b){return 180*b/Math.PI};
K.s.mp=function(b,c){return c*Math.cos(K.s.uh(b))};K.s.np=function(b,c){return c*Math.sin(K.s.uh(b))};K.s.angle=function(b,c,d,e){return K.s.fe(K.s.zl(Math.atan2(e-c,d-b)))};K.s.lp=function(b,c){b=K.s.fe(c)-K.s.fe(b);180<b?b-=360:-180>=b&&(b=360+b);return b};K.s.sign=function(b){return 0<b?1:0>b?-1:b};
K.s.gs=function(b,c,d,e){d=d||function(b,c){return b==c};e=e||function(c){return b[c]};for(var f=b.length,g=c.length,h=[],l=0;l<f+1;l++)h[l]=[],h[l][0]=0;for(var m=0;m<g+1;m++)h[0][m]=0;for(l=1;l<=f;l++)for(m=1;m<=g;m++)d(b[l-1],c[m-1])?h[l][m]=h[l-1][m-1]+1:h[l][m]=Math.max(h[l-1][m],h[l][m-1]);var q=[];l=f;for(m=g;0<l&&0<m;)d(b[l-1],c[m-1])?(q.unshift(e(l-1,m-1)),l--,m--):h[l-1][m]>h[l][m-1]?l--:m--;return q};K.s.ge=function(b){return K.j.reduce(arguments,function(b,d){return b+d},0)};
K.s.Pi=function(b){return K.s.ge.apply(null,arguments)/arguments.length};K.s.hl=function(b){var c=arguments.length;if(2>c)return 0;var d=K.s.Pi.apply(null,arguments);return K.s.ge.apply(null,K.j.map(arguments,function(b){return Math.pow(b-d,2)}))/(c-1)};K.s.Bt=function(b){return Math.sqrt(K.s.hl.apply(null,arguments))};K.s.Hr=function(b){return isFinite(b)&&0==b%1};K.s.Fr=function(b){return isFinite(b)};K.s.Mr=function(b){return 0==b&&0>1/b};
K.s.fs=function(b){if(0<b){var c=Math.round(Math.log(b)*Math.LOG10E);return c-(parseFloat("1e"+c)>b?1:0)}return 0==b?-Infinity:NaN};K.s.Vs=function(b,c){return Math.floor(b+(c||2E-15))};K.s.Us=function(b,c){return Math.ceil(b-(c||2E-15))};K.s.W=function(b,c){this.x=K.R(b)?b:0;this.y=K.R(c)?c:0};K.s.W.prototype.clone=function(){return new K.s.W(this.x,this.y)};K.ea&&(K.s.W.prototype.toString=function(){return"("+this.x+", "+this.y+")"});K.s.W.prototype.Ib=function(b){return b instanceof K.s.W&&K.s.W.Ib(this,b)};K.s.W.Ib=function(b,c){return b==c?!0:b&&c?b.x==c.x&&b.y==c.y:!1};K.s.W.vq=function(b,c){var d=b.x-c.x;b=b.y-c.y;return Math.sqrt(d*d+b*b)};K.s.W.hs=function(b){return Math.sqrt(b.x*b.x+b.y*b.y)};
K.s.W.azimuth=function(b){return K.s.angle(0,0,b.x,b.y)};K.s.W.yt=function(b,c){var d=b.x-c.x;b=b.y-c.y;return d*d+b*b};K.s.W.uq=function(b,c){return new K.s.W(b.x-c.x,b.y-c.y)};K.s.W.ge=function(b,c){return new K.s.W(b.x+c.x,b.y+c.y)};I=K.s.W.prototype;I.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};I.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};I.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
I.translate=function(b,c){b instanceof K.s.W?(this.x+=b.x,this.y+=b.y):(this.x+=Number(b),K.Rb(c)&&(this.y+=c));return this};I.scale=function(b,c){c=K.Rb(c)?c:b;this.x*=b;this.y*=c;return this};K.s.nb=function(b,c){this.width=b;this.height=c};K.s.nb.Ib=function(b,c){return b==c?!0:b&&c?b.width==c.width&&b.height==c.height:!1};K.s.nb.prototype.clone=function(){return new K.s.nb(this.width,this.height)};K.ea&&(K.s.nb.prototype.toString=function(){return"("+this.width+" x "+this.height+")"});I=K.s.nb.prototype;I.Li=function(){return this.width*this.height};I.aspectRatio=function(){return this.width/this.height};I.Qb=function(){return!this.Li()};
I.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};I.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};I.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};I.scale=function(b,c){c=K.Rb(c)?c:b;this.width*=b;this.height*=c;return this};K.a.Hh=!1;K.a.se=!1;K.a.Qh=K.a.Hh||K.a.se;K.a.td=function(b){return b?new K.a.lb(K.a.Qa(b)):K.a.mj||(K.a.mj=new K.a.lb)};K.a.Dj=function(){return document};K.a.ud=function(b){return K.a.xd(document,b)};K.a.xd=function(b,c){return K.L(c)?b.getElementById(c):c};K.a.Lj=function(b){return K.a.ig(document,b)};K.a.ig=function(b,c){return K.a.xd(b,c)};K.a.Bh=K.a.ud;K.a.getElementsByTagName=function(b,c){return(c||document).getElementsByTagName(String(b))};
K.a.yd=function(b,c,d){return K.a.nc(document,b,c,d)};K.a.Gj=function(b,c,d){return K.a.wd(document,b,c,d)};K.a.Rf=function(b,c){var d=c||document;return K.a.cd(d)?d.querySelectorAll("."+b):K.a.nc(document,"*",b,c)};K.a.vd=function(b,c){var d=c||document;return(d.getElementsByClassName?d.getElementsByClassName(b)[0]:K.a.wd(document,"*",b,c))||null};K.a.hg=function(b,c){return K.a.vd(b,c)};K.a.cd=function(b){return!(!b.querySelectorAll||!b.querySelector)};
K.a.nc=function(b,c,d,e){b=e||b;c=c&&"*"!=c?String(c).toUpperCase():"";if(K.a.cd(b)&&(c||d))return b.querySelectorAll(c+(d?"."+d:""));if(d&&b.getElementsByClassName){b=b.getElementsByClassName(d);if(c){e={};for(var f=0,g=0,h;h=b[g];g++)c==h.nodeName&&(e[f++]=h);e.length=f;return e}return b}b=b.getElementsByTagName(c||"*");if(d){e={};for(g=f=0;h=b[g];g++)c=h.className,typeof c.split==u&&K.j.contains(c.split(/\s+/),d)&&(e[f++]=h);e.length=f;return e}return b};
K.a.wd=function(b,c,d,e){var f=e||b,g=c&&"*"!=c?String(c).toUpperCase():"";return K.a.cd(f)&&(g||d)?f.querySelector(g+(d?"."+d:"")):K.a.nc(b,c,d,e)[0]||null};K.a.Ch=K.a.yd;K.a.Jc=function(b,c){K.object.forEach(c,function(c,e){c&&c.ua&&(c=c.ga());"style"==e?b.style.cssText=c:"class"==e?b.className=c:"for"==e?b.htmlFor=c:K.a.Be.hasOwnProperty(e)?b.setAttribute(K.a.Be[e],c):K.f.startsWith(e,"aria-")||K.f.startsWith(e,"data-")?b.setAttribute(e,c):b[e]=c})};
K.a.Be={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};K.a.mg=function(b){return K.a.ng(b||window)};K.a.ng=function(b){b=b.document;b=K.a.Ob(b)?b.documentElement:b.body;return new K.s.nb(b.clientWidth,b.clientHeight)};K.a.Ej=function(){return K.a.rd(window)};K.a.Xq=function(b){return K.a.rd(b)};
K.a.rd=function(b){var c=b.document,d=0;if(c){d=c.body;var e=c.documentElement;if(!e||!d)return 0;b=K.a.ng(b).height;if(K.a.Ob(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);d=c>b?c>f?c:f:c<f?c:f}}return d};K.a.dr=function(b){return K.a.td((b||K.global||window).document).Pf()};K.a.Pf=function(){return K.a.Qf(document)};
K.a.Qf=function(b){var c=K.a.sd(b);b=K.a.qc(b);return K.userAgent.Y&&K.userAgent.va("10")&&b.pageYOffset!=c.scrollTop?new K.s.W(c.scrollLeft,c.scrollTop):new K.s.W(b.pageXOffset||c.scrollLeft,b.pageYOffset||c.scrollTop)};K.a.Fj=function(){return K.a.sd(document)};K.a.sd=function(b){return b.scrollingElement?b.scrollingElement:!K.userAgent.Cb&&K.a.Ob(b)?b.documentElement:b.body||b.documentElement};K.a.tb=function(b){return b?K.a.qc(b):window};K.a.qc=function(b){return b.parentWindow||b.defaultView};
K.a.fd=function(b,c,d){return K.a.sf(document,arguments)};K.a.sf=function(b,c){var d=String(c[0]),e=c[1];if(!K.a.ib.Lh&&e&&(e.name||e.type)){d=["<",d];e.name&&d.push(' name="',K.f.ta(e.name),'"');if(e.type){d.push(' type="',K.f.ta(e.type),'"');var f={};K.object.extend(f,e);delete f.type;e=f}d.push(">");d=d.join("")}d=b.createElement(d);e&&(K.L(e)?d.className=e:K.isArray(e)?d.className=e.join(" "):K.a.Jc(d,e));2<c.length&&K.a.bf(b,d,c,2);return d};
K.a.bf=function(b,c,d,e){function f(d){d&&c.appendChild(K.L(d)?b.createTextNode(d):d)}for(;e<d.length;e++){var g=d[e];K.Nb(g)&&!K.a.Ld(g)?K.j.forEach(K.a.Md(g)?K.j.th(g):g,f):f(g)}};K.a.Dh=K.a.fd;K.a.createElement=function(b){return K.a.Oa(document,b)};K.a.Oa=function(b,c){return b.createElement(String(c))};K.a.createTextNode=function(b){return document.createTextNode(String(b))};K.a.hj=function(b,c,d){return K.a.tf(document,b,c,!!d)};
K.a.tf=function(b,c,d,e){for(var f=K.a.Oa(b,"TABLE"),g=f.appendChild(K.a.Oa(b,"TBODY")),h=0;h<c;h++){for(var l=K.a.Oa(b,"TR"),m=0;m<d;m++){var q=K.a.Oa(b,"TD");e&&K.a.ae(q,K.f.Ye.Ke);l.appendChild(q)}g.appendChild(l)}return f};K.a.eq=function(b){var c=K.j.map(arguments,K.f.I.u);c=K.b.hb.fl(K.f.I.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."),c.join(""));return K.a.eh(c)};K.a.eh=function(b){return K.a.fh(document,b)};
K.a.fh=function(b,c){var d=K.a.Oa(b,"DIV");K.a.ib.ci?(K.a.S.lh(d,K.b.l.concat(K.b.l.we,c)),d.removeChild(d.firstChild)):K.a.S.lh(d,c);return K.a.$i(b,d)};K.a.$i=function(b,c){if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);return b};K.a.dk=function(){return K.a.Ob(document)};K.a.Ob=function(b){return K.a.Qh?K.a.se:"CSS1Compat"==b.compatMode};K.a.canHaveChildren=function(b){if(b.nodeType!=K.a.fa.Ia)return!1;switch(b.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case p:case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
K.a.appendChild=function(b,c){b.appendChild(c)};K.a.append=function(b,c){K.a.bf(K.a.Qa(b),b,arguments,1)};K.a.Zd=function(b){for(var c;c=b.firstChild;)b.removeChild(c)};K.a.vg=function(b,c){c.parentNode&&c.parentNode.insertBefore(b,c)};K.a.ug=function(b,c){c.parentNode&&c.parentNode.insertBefore(b,c.nextSibling)};K.a.tg=function(b,c,d){b.insertBefore(c,b.childNodes[d]||null)};K.a.removeNode=function(b){return b&&b.parentNode?b.parentNode.removeChild(b):null};
K.a.dh=function(b,c){var d=c.parentNode;d&&d.replaceChild(b,c)};K.a.Ff=function(b){var c,d=b.parentNode;if(d&&d.nodeType!=K.a.fa.Vh){if(b.removeNode)return b.removeNode(!1);for(;c=b.firstChild;)d.insertBefore(c,b);return K.a.removeNode(b)}};K.a.Nf=function(b){return K.a.ib.Mh&&void 0!=b.children?b.children:K.j.filter(b.childNodes,function(b){return b.nodeType==K.a.fa.Ia})};K.a.Sf=function(b){return K.R(b.firstElementChild)?b.firstElementChild:K.a.oc(b.firstChild,!0)};
K.a.Wf=function(b){return K.R(b.lastElementChild)?b.lastElementChild:K.a.oc(b.lastChild,!1)};K.a.Zf=function(b){return K.R(b.nextElementSibling)?b.nextElementSibling:K.a.oc(b.nextSibling,!0)};K.a.fg=function(b){return K.R(b.previousElementSibling)?b.previousElementSibling:K.a.oc(b.previousSibling,!1)};K.a.oc=function(b,c){for(;b&&b.nodeType!=K.a.fa.Ia;)b=c?b.nextSibling:b.previousSibling;return b};
K.a.$f=function(b){if(!b)return null;if(b.firstChild)return b.firstChild;for(;b&&!b.nextSibling;)b=b.parentNode;return b?b.nextSibling:null};K.a.gg=function(b){if(!b)return null;if(!b.previousSibling)return b.parentNode;for(b=b.previousSibling;b&&b.lastChild;)b=b.lastChild;return b};K.a.Ld=function(b){return K.ha(b)&&0<b.nodeType};K.a.Hd=function(b){return K.ha(b)&&b.nodeType==K.a.fa.Ia};K.a.Ng=function(b){return K.ha(b)&&b.window==b};
K.a.eg=function(b){var c;if(K.a.ib.Nh&&!(K.userAgent.Y&&K.userAgent.va("9")&&!K.userAgent.va("10")&&K.global.SVGElement&&b instanceof K.global.SVGElement)&&(c=b.parentElement))return c;c=b.parentNode;return K.a.Hd(c)?c:null};K.a.contains=function(b,c){if(!b||!c)return!1;if(b.contains&&c.nodeType==K.a.fa.Ia)return b==c||b.contains(c);if("undefined"!=typeof b.compareDocumentPosition)return b==c||!!(b.compareDocumentPosition(c)&16);for(;c&&b!=c;)c=c.parentNode;return c==b};
K.a.mf=function(b,c){if(b==c)return 0;if(b.compareDocumentPosition)return b.compareDocumentPosition(c)&2?1:-1;if(K.userAgent.Y&&!K.userAgent.Pb(9)){if(b.nodeType==K.a.fa.Xc)return-1;if(c.nodeType==K.a.fa.Xc)return 1}if("sourceIndex"in b||b.parentNode&&"sourceIndex"in b.parentNode){var d=b.nodeType==K.a.fa.Ia,e=c.nodeType==K.a.fa.Ia;if(d&&e)return b.sourceIndex-c.sourceIndex;var f=b.parentNode,g=c.parentNode;return f==g?K.a.pf(b,c):!d&&K.a.contains(f,c)?-1*K.a.nf(b,c):!e&&K.a.contains(g,b)?K.a.nf(c,
b):(d?b.sourceIndex:f.sourceIndex)-(e?c.sourceIndex:g.sourceIndex)}e=K.a.Qa(b);d=e.createRange();d.selectNode(b);d.collapse(!0);b=e.createRange();b.selectNode(c);b.collapse(!0);return d.compareBoundaryPoints(K.global.Range.START_TO_END,b)};K.a.nf=function(b,c){var d=b.parentNode;if(d==c)return-1;for(;c.parentNode!=d;)c=c.parentNode;return K.a.pf(c,b)};K.a.pf=function(b,c){for(;c=c.previousSibling;)if(c==b)return-1;return 1};
K.a.Bf=function(b){var c,d=arguments.length;if(!d)return null;if(1==d)return arguments[0];var e=[],f=Infinity;for(c=0;c<d;c++){for(var g=[],h=arguments[c];h;)g.unshift(h),h=h.parentNode;e.push(g);f=Math.min(f,g.length)}g=null;for(c=0;c<f;c++){h=e[0][c];for(var l=1;l<d;l++)if(h!=e[l][c])return g;g=h}return g};K.a.Qa=function(b){return b.nodeType==K.a.fa.Xc?b:b.ownerDocument||b.document};K.a.Tf=function(b){return b.contentDocument||b.contentWindow.document};
K.a.Uf=function(b){try{return b.contentWindow||(b.contentDocument?K.a.tb(b.contentDocument):null)}catch(c){}return null};K.a.ae=function(b,c){if("textContent"in b)b.textContent=c;else if(b.nodeType==K.a.fa.cc)b.data=String(c);else if(b.firstChild&&b.firstChild.nodeType==K.a.fa.cc){for(;b.lastChild!=b.firstChild;)b.removeChild(b.lastChild);b.firstChild.data=String(c)}else{K.a.Zd(b);var d=K.a.Qa(b);b.appendChild(d.createTextNode(String(c)))}};
K.a.dg=function(b){if("outerHTML"in b)return b.outerHTML;var c=K.a.Qa(b);c=K.a.Oa(c,"DIV");c.appendChild(b.cloneNode(!0));return c.innerHTML};K.a.Cf=function(b,c){var d=[];return K.a.nd(b,c,d,!0)?d[0]:void 0};K.a.Df=function(b,c){var d=[];K.a.nd(b,c,d,!1);return d};K.a.nd=function(b,c,d,e){if(null!=b)for(b=b.firstChild;b;){if(c(b)&&(d.push(b),e)||K.a.nd(b,c,d,e))return!0;b=b.nextSibling}return!1};K.a.Ue={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};K.a.ac={IMG:" ",BR:"\n"};
K.a.Jd=function(b){return K.a.pg(b)&&K.a.Lg(b)};K.a.jh=function(b,c){c?b.tabIndex=0:(b.tabIndex=-1,b.removeAttribute("tabIndex"))};K.a.Cg=function(b){var c;return(c=K.a.Qk(b)?!b.disabled&&(!K.a.pg(b)||K.a.Lg(b)):K.a.Jd(b))&&K.userAgent.Y?K.a.Wj(b):c};K.a.pg=function(b){return K.userAgent.Y&&!K.userAgent.va("9")?(b=b.getAttributeNode("tabindex"),K.cb(b)&&b.specified):b.hasAttribute("tabindex")};K.a.Lg=function(b){b=b.tabIndex;return K.Rb(b)&&0<=b&&32768>b};
K.a.Qk=function(b){return"A"==b.tagName||"INPUT"==b.tagName||"TEXTAREA"==b.tagName||"SELECT"==b.tagName||"BUTTON"==b.tagName};K.a.Wj=function(b){b=!K.ya(b.getBoundingClientRect)||K.userAgent.Y&&null==b.parentElement?{height:b.offsetHeight,width:b.offsetWidth}:b.getBoundingClientRect();return K.cb(b)&&0<b.height&&0<b.width};
K.a.pc=function(b){if(K.a.ib.xe&&null!==b&&"innerText"in b)b=K.f.Yi(b.innerText);else{var c=[];K.a.Ad(b,c,!0);b=c.join("")}b=b.replace(/ \xAD /g," ").replace(/\xAD/g,"");b=b.replace(/\u200B/g,"");K.a.ib.xe||(b=b.replace(/ +/g," "));" "!=b&&(b=b.replace(/^\s*/,""));return b};K.a.gr=function(b){var c=[];K.a.Ad(b,c,!1);return c.join("")};
K.a.Ad=function(b,c,d){if(!(b.nodeName in K.a.Ue))if(b.nodeType==K.a.fa.cc)d?c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(b.nodeValue);else if(b.nodeName in K.a.ac)c.push(K.a.ac[b.nodeName]);else for(b=b.firstChild;b;)K.a.Ad(b,c,d),b=b.nextSibling};K.a.bg=function(b){return K.a.pc(b).length};K.a.cg=function(b,c){c=c||K.a.Qa(b).body;for(var d=[];b&&b!=c;){for(var e=b;e=e.previousSibling;)d.unshift(K.a.pc(e));b=b.parentNode}return K.f.trimLeft(d.join("")).replace(/ +/g," ").length};
K.a.ag=function(b,c,d){b=[b];for(var e=0,f=null;0<b.length&&e<c;)if(f=b.pop(),!(f.nodeName in K.a.Ue))if(f.nodeType==K.a.fa.cc){var g=f.nodeValue.replace(/(\r\n|\r|\n)/g,"").replace(/ +/g," ");e+=g.length}else if(f.nodeName in K.a.ac)e+=K.a.ac[f.nodeName].length;else for(g=f.childNodes.length-1;0<=g;g--)b.push(f.childNodes[g]);K.ha(d)&&(d.Is=f?f.nodeValue.length+c-e-1:0,d.node=f);return f};
K.a.Md=function(b){if(b&&typeof b.length==x){if(K.ha(b))return typeof b.item==u||typeof b.item==B;if(K.ya(b))return typeof b.item==u}return!1};K.a.qd=function(b,c,d,e){if(!c&&!d)return null;var f=c?String(c).toUpperCase():null;return K.a.pd(b,function(b){return(!f||b.nodeName==f)&&(!d||K.L(b.className)&&K.j.contains(b.className.split(/\s+/),d))},!0,e)};K.a.Kf=function(b,c,d){return K.a.qd(b,null,c,d)};
K.a.pd=function(b,c,d,e){b&&!d&&(b=b.parentNode);for(d=0;b&&(null==e||d<=e);){if(c(b))return b;b=b.parentNode;d++}return null};K.a.Jf=function(b){try{return b&&b.activeElement}catch(c){}return null};K.a.er=function(){var b=K.a.tb();return K.R(b.devicePixelRatio)?b.devicePixelRatio:b.matchMedia?K.a.wc(3)||K.a.wc(2)||K.a.wc(1.5)||K.a.wc(1)||.75:1};
K.a.wc=function(b){return K.a.tb().matchMedia("(min-resolution: "+b+"dppx),(min--moz-device-pixel-ratio: "+b+"),(min-resolution: "+96*b+"dpi)").matches?b:0};K.a.Mf=function(b){return b.getContext("2d")};K.a.lb=function(b){this.X=b||K.global.document||document};I=K.a.lb.prototype;I.td=K.a.td;I.Dj=G("X");I.ud=function(b){return K.a.xd(this.X,b)};I.Lj=function(b){return K.a.ig(this.X,b)};I.Bh=K.a.lb.prototype.ud;I.getElementsByTagName=function(b,c){return(c||this.X).getElementsByTagName(String(b))};
I.yd=function(b,c,d){return K.a.nc(this.X,b,c,d)};I.Gj=function(b,c,d){return K.a.wd(this.X,b,c,d)};I.Rf=function(b,c){return K.a.Rf(b,c||this.X)};I.vd=function(b,c){return K.a.vd(b,c||this.X)};I.hg=function(b,c){return K.a.hg(b,c||this.X)};I.Ch=K.a.lb.prototype.yd;I.Jc=K.a.Jc;I.mg=function(b){return K.a.mg(b||this.tb())};I.Ej=function(){return K.a.rd(this.tb())};I.fd=function(b,c,d){return K.a.sf(this.X,arguments)};I.Dh=K.a.lb.prototype.fd;I.createElement=function(b){return K.a.Oa(this.X,b)};
I.createTextNode=function(b){return this.X.createTextNode(String(b))};I.hj=function(b,c,d){return K.a.tf(this.X,b,c,!!d)};I.eh=function(b){return K.a.fh(this.X,b)};I.dk=function(){return K.a.Ob(this.X)};I.tb=function(){return K.a.qc(this.X)};I.Fj=function(){return K.a.sd(this.X)};I.Pf=function(){return K.a.Qf(this.X)};I.Jf=function(b){return K.a.Jf(b||this.X)};I.appendChild=K.a.appendChild;I.append=K.a.append;I.canHaveChildren=K.a.canHaveChildren;I.Zd=K.a.Zd;I.vg=K.a.vg;I.ug=K.a.ug;I.tg=K.a.tg;
I.removeNode=K.a.removeNode;I.dh=K.a.dh;I.Ff=K.a.Ff;I.Nf=K.a.Nf;I.Sf=K.a.Sf;I.Wf=K.a.Wf;I.Zf=K.a.Zf;I.fg=K.a.fg;I.$f=K.a.$f;I.gg=K.a.gg;I.Ld=K.a.Ld;I.Hd=K.a.Hd;I.Ng=K.a.Ng;I.eg=K.a.eg;I.contains=K.a.contains;I.mf=K.a.mf;I.Bf=K.a.Bf;I.Qa=K.a.Qa;I.Tf=K.a.Tf;I.Uf=K.a.Uf;I.ae=K.a.ae;I.dg=K.a.dg;I.Cf=K.a.Cf;I.Df=K.a.Df;I.Jd=K.a.Jd;I.jh=K.a.jh;I.Cg=K.a.Cg;I.pc=K.a.pc;I.bg=K.a.bg;I.cg=K.a.cg;I.ag=K.a.ag;I.Md=K.a.Md;I.qd=K.a.qd;I.Kf=K.a.Kf;I.pd=K.a.pd;I.Mf=K.a.Mf;K.bh={};K.bh.to=F();K.Thenable=F();K.Thenable.prototype.then=F();K.Thenable.He="$goog_Thenable";K.Thenable.af=function(b){b.prototype.then=b.prototype.then;b.prototype[K.Thenable.He]=!0};K.Thenable.Dg=function(b){if(!b)return!1;try{return!!b[K.Thenable.He]}catch(c){return!1}};K.Promise=function(b,c){this.$=K.Promise.P.wa;this.ia=void 0;this.ob=this.Na=this.da=null;this.ld=!1;0<K.Promise.Wa?this.Oc=0:0==K.Promise.Wa&&(this.rc=!1);K.Promise.Aa&&(this.ee=[],N(this,Error("created")),this.vf=0);if(b!=K.eb)try{var d=this;b.call(c,function(b){O(d,K.Promise.P.Ja,b)},function(b){if(K.ea&&!(b instanceof K.Promise.kb))try{if(b instanceof Error)throw b;throw Error("Promise rejected.");}catch(f){}O(d,K.Promise.P.ka,b)})}catch(e){O(this,K.Promise.P.ka,e)}};K.Promise.Aa=!1;
K.Promise.Wa=0;K.Promise.P={wa:0,Jh:1,Ja:2,ka:3};K.Promise.ze=function(){this.next=this.context=this.wb=this.Tb=this.Xa=null;this.dc=!1};K.Promise.ze.prototype.reset=function(){this.context=this.wb=this.Tb=this.Xa=null;this.dc=!1};K.Promise.Vc=100;K.Promise.Kb=new K.async.Zb(function(){return new K.Promise.ze},function(b){b.reset()},K.Promise.Vc);K.Promise.Lf=function(b,c,d){var e=K.Promise.Kb.get();e.Tb=b;e.wb=c;e.context=d;return e};K.Promise.Yk=function(b){K.Promise.Kb.put(b)};
K.Promise.resolve=function(b){if(b instanceof K.Promise)return b;var c=new K.Promise(K.eb);O(c,K.Promise.P.Ja,b);return c};K.Promise.reject=function(b){return new K.Promise(function(c,d){d(b)})};K.Promise.Ec=function(b,c,d){K.Promise.Ug(b,c,d,null)||K.async.M(K.fb(c,b))};K.Promise.race=function(b){return new K.Promise(function(c,d){b.length||c(void 0);for(var e=0,f;e<b.length;e++)f=b[e],K.Promise.Ec(f,c,d)})};
K.Promise.all=function(b){return new K.Promise(function(c,d){var e=b.length,f=[];if(e)for(var g=function(b,d){e--;f[b]=d;0==e&&c(f)},h=function(b){d(b)},l=0,m;l<b.length;l++)m=b[l],K.Promise.Ec(m,K.fb(g,l),h);else c(f)})};K.Promise.jp=function(b){return new K.Promise(function(c){var d=b.length,e=[];if(d)for(var f=function(b,f,g){d--;e[b]=f?{Bj:!0,value:g}:{Bj:!1,reason:g};0==d&&c(e)},g=0,h;g<b.length;g++)h=b[g],K.Promise.Ec(h,K.fb(f,g,!0),K.fb(f,g,!1));else c(e)})};
K.Promise.Iq=function(b){return new K.Promise(function(c,d){var e=b.length,f=[];if(e)for(var g=function(b){c(b)},h=function(b,c){e--;f[b]=c;0==e&&d(f)},l=0,m;l<b.length;l++)m=b[l],K.Promise.Ec(m,g,K.fb(h,l));else c(void 0)})};K.Promise.Wt=function(){var b,c,d=new K.Promise(function(d,f){b=d;c=f});return new K.Promise.li(d,b,c)};K.Promise.prototype.then=function(b,c,d){K.Promise.Aa&&N(this,Error("then"));return ba(this,K.ya(b)?b:null,K.ya(c)?c:null,d)};K.Thenable.af(K.Promise);
K.Promise.prototype.cancel=function(b){this.$==K.Promise.P.wa&&K.async.M(function(){var c=new K.Promise.kb(b);P(this,c)},this)};function P(b,c){if(b.$==K.Promise.P.wa)if(b.da){var d=b.da;if(d.Na){for(var e=0,f=null,g=null,h=d.Na;h&&(h.dc||(e++,h.Xa==b&&(f=h),!(f&&1<e)));h=h.next)f||(g=h);f&&(d.$==K.Promise.P.wa&&1==e?P(d,c):(g?(e=g,e.next==d.ob&&(d.ob=e),e.next=e.next.next):Q(d),R(d,f,K.Promise.P.ka,c)))}b.da=null}else O(b,K.Promise.P.ka,c)}
function S(b,c){b.Na||b.$!=K.Promise.P.Ja&&b.$!=K.Promise.P.ka||T(b);b.ob?b.ob.next=c:b.Na=c;b.ob=c}function ba(b,c,d,e){var f=K.Promise.Lf(null,null,null);f.Xa=new K.Promise(function(b,h){f.Tb=c?function(d){try{var f=c.call(e,d);b(f)}catch(q){h(q)}}:b;f.wb=d?function(c){try{var f=d.call(e,c);!K.R(f)&&c instanceof K.Promise.kb?h(c):b(f)}catch(q){h(q)}}:h});f.Xa.da=b;S(b,f);return f.Xa}K.Promise.prototype.Dl=function(b){this.$=K.Promise.P.wa;O(this,K.Promise.P.Ja,b)};
K.Promise.prototype.El=function(b){this.$=K.Promise.P.wa;O(this,K.Promise.P.ka,b)};function O(b,c,d){b.$==K.Promise.P.wa&&(b===d&&(c=K.Promise.P.ka,d=new TypeError("Promise cannot resolve to itself")),b.$=K.Promise.P.Jh,K.Promise.Ug(d,b.Dl,b.El,b)||(b.ia=d,b.$=c,b.da=null,T(b),c!=K.Promise.P.ka||d instanceof K.Promise.kb||K.Promise.Ii(b,d)))}
K.Promise.Ug=function(b,c,d,e){if(b instanceof K.Promise)return K.Promise.Aa&&N(b,Error("then")),S(b,K.Promise.Lf(c||K.eb,d||null,e)),!0;if(K.Thenable.Dg(b))return b.then(c,d,e),!0;if(K.ha(b))try{var f=b.then;if(K.ya(f))return K.Promise.Bl(b,f,c,d,e),!0}catch(g){return d.call(e,g),!0}return!1};K.Promise.Bl=function(b,c,d,e,f){function g(b){l||(l=!0,e.call(f,b))}function h(b){l||(l=!0,d.call(f,b))}var l=!1;try{c.call(b,h,g)}catch(m){g(m)}};function T(b){b.ld||(b.ld=!0,K.async.M(b.vj,b))}
function Q(b){var c=null;b.Na&&(c=b.Na,b.Na=c.next,c.next=null);b.Na||(b.ob=null);return c}K.Promise.prototype.vj=function(){for(var b;b=Q(this);)K.Promise.Aa&&this.vf++,R(this,b,this.$,this.ia);this.ld=!1};
function R(b,c,d,e){if(d==K.Promise.P.ka&&c.wb&&!c.dc)if(0<K.Promise.Wa)for(;b&&b.Oc;b=b.da)K.global.clearTimeout(b.Oc),b.Oc=0;else if(0==K.Promise.Wa)for(;b&&b.rc;b=b.da)b.rc=!1;if(c.Xa)c.Xa.da=null,K.Promise.xg(c,d,e);else try{c.dc?c.Tb.call(c.context):K.Promise.xg(c,d,e)}catch(f){K.Promise.sc.call(null,f)}K.Promise.Yk(c)}K.Promise.xg=function(b,c,d){c==K.Promise.P.Ja?b.Tb.call(b.context,d):b.wb&&b.wb.call(b.context,d)};
function N(b,c){if(K.Promise.Aa&&K.L(c.stack)){var d=c.stack.split("\n",4)[3];c=c.message;c+=Array(11-c.length).join(" ");b.ee.push(c+d)}}function U(b,c){if(K.Promise.Aa&&c&&K.L(c.stack)&&b.ee.length){for(var d=["Promise trace:"],e=b;e;e=e.da){for(var f=b.vf;0<=f;f--)d.push(e.ee[f]);d.push("Value: ["+(e.$==K.Promise.P.ka?"REJECTED":"FULFILLED")+"] <"+String(e.ia)+">")}c.stack+="\n\n"+d.join("\n")}}
K.Promise.Ii=function(b,c){0<K.Promise.Wa?b.Oc=K.global.setTimeout(function(){U(b,c);K.Promise.sc.call(null,c)},K.Promise.Wa):0==K.Promise.Wa&&(b.rc=!0,K.async.M(function(){b.rc&&(U(b,c),K.Promise.sc.call(null,c))}))};K.Promise.sc=K.async.qh;K.Promise.st=function(b){K.Promise.sc=b};K.Promise.kb=function(b){K.debug.Error.call(this,b)};K.ab(K.Promise.kb,K.debug.Error);K.Promise.kb.prototype.name="cancel";K.Promise.li=function(b,c,d){this.bh=b;this.resolve=c;this.reject=d};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
K.async.w=function(b,c){this.Ic=[];this.ah=b;this.wf=c||null;this.ub=this.qb=!1;this.ia=void 0;this.be=this.Ti=this.bd=!1;this.Nc=0;this.da=null;this.ec=0;K.async.w.Aa&&(this.ed=null,Error.captureStackTrace&&(b={stack:""},Error.captureStackTrace(b,K.async.w),typeof b.stack==B&&(this.ed=b.stack.replace(/^[^\n]*\n/,""))))};K.async.w.vi=!1;K.async.w.Aa=!1;I=K.async.w.prototype;
I.cancel=function(b){if(this.qb)this.ia instanceof K.async.w&&this.ia.cancel();else{if(this.da){var c=this.da;delete this.da;b?c.cancel(b):(c.ec--,0>=c.ec&&c.cancel())}this.ah?this.ah.call(this.wf,this):this.be=!0;this.qb||this.Za(new K.async.w.jb(this))}};I.rf=function(b,c){this.bd=!1;V(this,b,c)};function V(b,c,d){b.qb=!0;b.ia=d;b.ub=!c;W(b)}function X(b){if(b.qb){if(!b.be)throw new K.async.w.Wb(b);b.be=!1}}I.Db=function(b){X(this);V(this,!0,b)};I.Za=function(b){X(this);da(this,b);V(this,!1,b)};
function da(b,c){K.async.w.Aa&&b.ed&&K.ha(c)&&c.stack&&/^[^\n]+(\n   [^\n]+)+/.test(c.stack)&&(c.stack=c.stack+"\nDEFERRED OPERATION:\n"+b.ed)}function Y(b,c,d){return Z(b,c,null,d)}function ea(b,c){Z(b,null,c,void 0)}function Z(b,c,d,e){b.Ic.push([c,d,e]);b.qb&&W(b);return b}I.then=function(b,c,d){var e,f,g=new K.Promise(function(b,c){e=b;f=c});Z(this,e,function(b){b instanceof K.async.w.jb?g.cancel():f(b)});return g.then(b,c,d)};K.Thenable.af(K.async.w);
K.async.w.prototype.Vi=function(){var b=new K.async.w;Z(this,b.Db,b.Za,b);b.da=this;this.ec++;return b};function fa(b){return K.j.some(b.Ic,function(b){return K.ya(b[1])})}
function W(b){b.Nc&&b.qb&&fa(b)&&(K.async.w.Il(b.Nc),b.Nc=0);b.da&&(b.da.ec--,delete b.da);for(var c=b.ia,d=!1,e=!1;b.Ic.length&&!b.bd;){var f=b.Ic.shift(),g=f[0],h=f[1];f=f[2];if(g=b.ub?h:g)try{var l=g.call(f||b.wf,c);K.R(l)&&(b.ub=b.ub&&(l==c||l instanceof Error),b.ia=c=l);if(K.Thenable.Dg(c)||typeof K.global.Promise===u&&c instanceof K.global.Promise)e=!0,b.bd=!0}catch(m){c=m,b.ub=!0,da(b,c),fa(b)||(d=!0)}}b.ia=c;e?(e=K.bind(b.rf,b,!0),l=K.bind(b.rf,b,!1),c instanceof K.async.w?(Z(c,e,l),c.Ti=
!0):c.then(e,l)):K.async.w.vi&&c instanceof Error&&!(c instanceof K.async.w.jb)&&(d=b.ub=!0);d&&(b.Nc=K.async.w.kl(c))}K.async.w.oh=function(b){var c=new K.async.w;c.Db(b);return c};K.async.w.Pq=function(b){var c=new K.async.w;c.Db();Y(c,function(){return b});return c};K.async.w.ma=function(b){var c=new K.async.w;c.Za(b);return c};K.async.w.Qp=function(){var b=new K.async.w;b.cancel();return b};K.async.w.Vt=function(b,c,d){return b instanceof K.async.w?Y(b.Vi(),c,d):Y(K.async.w.oh(b),c,d)};
K.async.w.Wb=function(b){K.debug.Error.call(this);this.pb=b};K.ab(K.async.w.Wb,K.debug.Error);K.async.w.Wb.prototype.message="Deferred has already fired";K.async.w.Wb.prototype.name="AlreadyCalledError";K.async.w.jb=function(b){K.debug.Error.call(this);this.pb=b};K.ab(K.async.w.jb,K.debug.Error);K.async.w.jb.prototype.message="Deferred was canceled";K.async.w.jb.prototype.name="CanceledError";K.async.w.Fe=function(b){this.Mb=K.global.setTimeout(K.bind(this.ph,this),0);this.tj=b};
K.async.w.Fe.prototype.ph=function(){delete K.async.w.Jb[this.Mb];throw this.tj;};K.async.w.Jb={};K.async.w.kl=function(b){b=new K.async.w.Fe(b);K.async.w.Jb[b.Mb]=b;return b.Mb};K.async.w.Il=function(b){var c=K.async.w.Jb[b];c&&(K.global.clearTimeout(c.Mb),delete K.async.w.Jb[b])};K.async.w.Dp=function(){var b=K.async.w.Jb,c;for(c in b){var d=b[c];K.global.clearTimeout(d.Mb);d.ph()}};K.D={};K.D.F={};K.D.F.Zc="closure_verification";K.D.F.Th=5E3;K.D.F.$d=[];K.D.F.gl=function(b,c){function d(){var e=b.shift();e=K.D.F.Fc(e,c);b.length&&Z(e,d,d,void 0);return e}if(!b.length)return K.async.w.oh(null);var e=K.D.F.$d.length;K.j.extend(K.D.F.$d,b);if(e)return K.D.F.hh;b=K.D.F.$d;K.D.F.hh=d();return K.D.F.hh};
K.D.F.Fc=function(b,c){var d=c||{};c=d.document||document;var e=K.b.C.u(b),f=K.a.createElement(p),g={ih:f,sh:void 0},h=new K.async.w(K.D.F.Xi,g),l=null,m=K.cb(d.timeout)?d.timeout:K.D.F.Th;0<m&&(l=window.setTimeout(function(){K.D.F.gc(f,!0);h.Za(new K.D.F.Error(K.D.F.Yb.TIMEOUT,"Timeout reached for loading script "+e))},m),g.sh=l);f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&f.readyState!=t||(K.D.F.gc(f,d.Xp||!1,l),h.Db(null))};f.onerror=function(){K.D.F.gc(f,!0,
l);h.Za(new K.D.F.Error(K.D.F.Yb.ei,"Error while loading script "+e))};g=d.attributes||{};K.object.extend(g,{type:C,charset:"UTF-8"});K.a.Jc(f,g);K.a.S.ol(f,b);K.D.F.Mj(c).appendChild(f);return h};
K.D.F.Ws=function(b,c,d){K.global[K.D.F.Zc]||(K.global[K.D.F.Zc]={});var e=K.global[K.D.F.Zc],f=K.b.C.u(b);if(K.R(e[c]))return K.async.w.ma(new K.D.F.Error(K.D.F.Yb.Gi,"Verification object "+c+" already defined."));b=K.D.F.Fc(b,d);var g=new K.async.w(K.bind(b.cancel,b));Y(b,function(){var b=e[c];K.R(b)?(g.Db(b),delete e[c]):g.Za(new K.D.F.Error(K.D.F.Yb.Fi,"Script "+f+" loaded, but verification object "+c+" was not defined."))});ea(b,function(b){K.R(e[c])&&delete e[c];g.Za(b)});return g};
K.D.F.Mj=function(b){var c=K.a.getElementsByTagName("HEAD",b);return!c||K.j.Qb(c)?b.documentElement:c[0]};K.D.F.Xi=function(){if(this&&this.ih){var b=this.ih;b&&b.tagName==p&&K.D.F.gc(b,!0,this.sh)}};K.D.F.gc=function(b,c,d){K.cb(d)&&K.global.clearTimeout(d);b.onload=K.eb;b.onerror=K.eb;b.onreadystatechange=K.eb;c&&window.setTimeout(function(){K.a.removeNode(b)},0)};K.D.F.Yb={ei:0,TIMEOUT:1,Fi:2,Gi:3};
K.D.F.Error=function(b,c){var d="Jsloader error (code #"+b+")";c&&(d+=": "+c);K.debug.Error.call(this,d);this.code=b};K.ab(K.D.F.Error,K.debug.Error);var google={G:{}};google.G.H={};google.G.H.Ba={};google.G.H.Ba.rh=3E4;google.G.H.Ba.js=function(b,c){return{format:b,Mi:c}};google.G.H.Ba.Pj=function(b){return K.b.C.format(b.format,b.Mi)};google.G.H.Ba.load=function(b,c){b=K.b.C.format(b,c);var d=K.D.F.Fc(b,{timeout:google.G.H.Ba.rh,attributes:{async:!1,defer:!1}});return new Promise(function(b){Y(d,b)})};
google.G.H.Ba.cs=function(b){b=K.j.map(b,google.G.H.Ba.Pj);if(K.j.Qb(b))return Promise.resolve();var c={timeout:google.G.H.Ba.rh,attributes:{async:!1,defer:!1}},d=[];!K.userAgent.Y||K.userAgent.va(11)?K.j.forEach(b,function(b){d.push(K.D.F.Fc(b,c))}):d.push(K.D.F.gl(b,c));return Promise.all(K.j.map(d,function(b){return new Promise(function(c){return Y(b,c)})}))};google.G.H.T={};if(K.rb(v))throw Error("Google Charts loader.js can only be loaded once.");google.G.H.T.Nl={41:z,42:z,43:z,44:z,1:"1.0","1.0":"current","1.1":"upcoming",current:"45.2",upcoming:"46"};google.G.H.T.Kk=function(b){var c=b,d=b.match(/^testing-/);d&&(c=c.replace(/^testing-/,""));b=c;do{var e=google.G.H.T.Nl[c];e&&(c=e)}while(e);d=(d?"testing-":"")+c;return{version:c==z?b:d,Dk:d}};google.G.H.T.yh=null;
google.G.H.T.Bk=function(b){var c=google.G.H.T.Kk(b),d=K.f.I.from("https://www.gstatic.com/charts/%{version}/loader.js");return google.G.H.Ba.load(d,{version:c.Dk}).then(function(){var d=K.rb("google.charts.loader.VersionSpecific.load")||K.rb("google.charts.loader.publicLoad")||K.rb("google.charts.versionSpecific.load");if(!d)throw Error("Bad version: "+b);google.G.H.T.yh=function(b){b=d(c.version,b);if(null==b||null==b.then){var e=K.rb("google.charts.loader.publicSetOnLoadCallback")||K.rb("google.charts.versionSpecific.setOnLoadCallback");
b=new Promise(function(b){e(b)});b.then=e}return b}})};google.G.H.T.Pd=null;google.G.H.T.jc=null;google.G.H.T.yk=function(b,c){google.G.H.T.Pd||(google.G.H.T.Pd=google.G.H.T.Bk(b));return google.G.H.T.jc=google.G.H.T.Pd.then(function(){return google.G.H.T.yh(c)})};google.G.H.T.nl=function(b){if(!google.G.H.T.jc)throw Error("Must call google.charts.load before google.charts.setOnLoadCallback");return b?google.G.H.T.jc.then(b):google.G.H.T.jc};
google.G.load=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=0;"visualization"===c[d]&&d++;var e="current";K.L(c[d])&&(e=c[d],d++);var f={};K.ha(c[d])&&(f=c[d]);return google.G.H.T.yk(e,f)};K.zf(v,google.G.load);google.G.ml=google.G.H.T.nl;K.zf("google.charts.setOnLoadCallback",google.G.ml);}).call(this);
 

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[null,[["https://khms0.googleapis.com/kh?v=748\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=748\u0026hl=en-US\u0026"],null,null,null,1,"748",["https://khms0.google.com/kh?v=748\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=748\u0026hl=en-US\u0026"]],null,null,null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=112\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=112\u0026hl=en-US\u0026"],null,null,null,null,"112",["https://khms0.google.com/kh?v=112\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=112\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/31/5","3.31.5"],[2258107048],1,null,null,null,null,null,"",["places"],null,1,"https://khms.googleapis.com/mz?v=748\u0026","AIzaSyCAebtVrx8yzcCCmOvD3n1Fr_06afhhubU","https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["https://maps.googleapis.com/maps/vt"],["https://maps.googleapis.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",407000000,407],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],null,null,null,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0]],null,[],["31.5"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){var va,Aa,za,Ba,Da,Ea,Qa,Ra,Ua,cb,jb,kb,mb,sb,rb,tb,ub,Nb,Qb,Ub,bc,dc,ec,gc,hc,lc,pc,vc,Fc,Gc,Mc,Nc,Pc,Qc,Uc,Xc,Tc,Yc,ad,fd,nd,pd,rd,vd,wd,Ed,Gd,Fd,Qd,Sd,Ud,Xd,Yd,$d,be,fe,Zd,ae,he,je,ke,le,Ae,De,Ee,Ge,He,Je,Ke,Oe,Pe,Qe,Re,Ue,We,Xe,gf,hf,jf,mf,nf,of,qf,rf,sf,xf,Cf,Ef,Lf,Mf,Nf,Uf,Xf,gg,hg,ig,jg,kg,lg,zg,Ag,Cg,Dg,Eg,Fg,Gg,Mg,Kg,Ng,Og,Qg,Tg,Vg,Ug,bh,fh,ih,mh,nh,qh,rh,sh,th,uh,wh,ya,xa,Na,Oa;_.ba="ERROR";_.ca="INVALID_REQUEST";_.da="MAX_DIMENSIONS_EXCEEDED";_.ea="MAX_ELEMENTS_EXCEEDED";_.fa="MAX_WAYPOINTS_EXCEEDED";
_.ha="NOT_FOUND";_.ia="OK";_.ka="OVER_QUERY_LIMIT";_.la="REQUEST_DENIED";_.ma="UNKNOWN_ERROR";_.na="ZERO_RESULTS";_.oa=function(){return function(a){return a}};_.k=function(){return function(){}};_.pa=function(a){return function(b){this[a]=b}};_.qa=function(a){return function(){return this[a]}};_.ra=function(a){return function(){return a}};_.ua=function(a){return function(){return _.sa[a].apply(this,arguments)}};va=function(){va=_.k();_.wa.Symbol||(_.wa.Symbol=xa)};
Aa=function(){va();var a=_.wa.Symbol.iterator;a||(a=_.wa.Symbol.iterator=_.wa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ya(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return za(this)}});Aa=_.k()};za=function(a){var b=0;return Ba(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};Ba=function(a){Aa();a={next:a};a[_.wa.Symbol.iterator]=function(){return this};return a};_.Ca=function(a){Aa();var b=a[window.Symbol.iterator];return b?b.call(a):za(a)};
Da=function(a,b){if(b){var c=_.wa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ya(c,a,{configurable:!0,writable:!0,value:b})}};Ea=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};_.p=function(a){return void 0!==a};_.Fa=function(a){return"string"==typeof a};_.Ga=function(a){return"number"==typeof a};_.Ha=_.k();
_.Ia=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.Ja=function(a){return"array"==_.Ia(a)};_.Ka=function(a){var b=_.Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.La=function(a){return"function"==_.Ia(a)};_.Ma=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Pa=function(a){return a[Na]||(a[Na]=++Oa)};Qa=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ra=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.t=Qa:_.t=Ra;return _.t.apply(null,arguments)};_.Sa=function(){return+new Date};
_.v=function(a,b){function c(){}c.prototype=b.prototype;a.vb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.bf=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};_.Ta=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.Fa(a))return _.Fa(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
_.x=function(a,b,c){for(var d=a.length,e=_.Fa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Ua=function(a,b){for(var c=a.length,d=_.Fa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};_.Wa=function(a,b){b=_.Ta(a,b);var c;(c=0<=b)&&_.Va(a,b);return c};_.Va=function(a,b){Array.prototype.splice.call(a,b,1)};_.Xa=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.Za=function(){return-1!=_.Ya.toLowerCase().indexOf("webkit")};
_.$a=function(a){return-1!=_.Ya.indexOf(a)};_.ab=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.bb=function(){return _.$a("Trident")||_.$a("MSIE")};_.eb=function(){return _.$a("Safari")&&!(cb()||_.$a("Coast")||_.$a("Opera")||_.$a("Edge")||_.$a("Silk")||_.$a("Android"))};cb=function(){return(_.$a("Chrome")||_.$a("CriOS"))&&!_.$a("Edge")};_.fb=function(){return _.$a("Android")&&!(cb()||_.$a("Firefox")||_.$a("Opera")||_.$a("Silk"))};_.gb=function(){return _.$a("iPhone")&&!_.$a("iPod")&&!_.$a("iPad")};
_.hb=function(a){_.hb[" "](a);return a};jb=function(){var a=_.ib.document;return a?a.documentMode:void 0};kb=function(a,b){this.j=a;this.l=b;this.f=0;this.b=null};_.lb=_.oa();mb=function(a){_.ib.setTimeout(function(){throw a;},0)};sb=function(){var a=_.nb.f;a=ob(a);!_.La(_.ib.setImmediate)||_.ib.Window&&_.ib.Window.prototype&&!_.$a("Edge")&&_.ib.Window.prototype.setImmediate==_.ib.setImmediate?(qb||(qb=rb()),qb(a)):_.ib.setImmediate(a)};
rb=function(){var a=_.ib.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.$a("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,_.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.bb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.p(c.next)){c=c.next;var a=c.eh;c.eh=null;a()}};return function(a){d.next={eh:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.ib.setTimeout(a,0)}};tb=function(){this.f=this.b=null};ub=function(){this.next=this.b=this.Hc=null};_.nb=function(a,b){_.nb.b||_.nb.m();_.nb.j||(_.nb.b(),_.nb.j=!0);_.nb.l.add(a,b)};_.vb=function(a){return a*Math.PI/180};_.wb=function(a){return 180*a/Math.PI};_.xb=function(a){return a?a.length:0};
_.zb=function(a,b){_.yb(b,function(c){a[c]=b[c]})};_.Ab=function(a){for(var b in a)return!1;return!0};_.Bb=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.Cb=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.Db=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.Eb=function(a,b){for(var c=[],d=_.xb(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.Gb=function(a,b){for(var c=_.Fb(void 0,_.xb(b)),d=_.Fb(void 0,0);d<c;++d)a.push(b[d])};_.Hb=function(a){return"number"==typeof a};
_.Ib=function(a){return"object"==typeof a};_.Fb=function(a,b){return null==a?b:a};_.Jb=function(a){return"string"==typeof a};_.Kb=function(a){return a===!!a};_.yb=function(a,b){for(var c in a)b(c,a[c])};_.Mb=function(a){return function(){var b=this,c=arguments;_.Lb(function(){a.apply(b,c)})}};_.Lb=function(a){return window.setTimeout(a,0)};Nb=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.Pb=function(a){window.console&&window.console.error&&window.console.error(a)};
Qb=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.Rb=function(a,b){var c="";if(null!=b){if(!(b instanceof Qb))return b;c=": "+b.message}return new Qb(a+c)};_.Sb=function(a){if(!(a instanceof Qb))throw a;_.Pb(a.name+": "+a.message)};
_.Tb=function(a,b){var c=c?c+": ":"";return function(d){if(!d||!_.Ib(d))throw _.Rb(c+"not an Object");var e={},f;for(f in d)if(e[f]=d[f],!b&&!a[f])throw _.Rb(c+"unknown property "+f);for(f in a)try{var g=a[f](e[f]);if(_.p(g)||Object.prototype.hasOwnProperty.call(d,f))e[f]=a[f](e[f])}catch(h){throw _.Rb(c+"in property "+f,h);}return e}};Ub=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.Vb=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.Rb("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.Rb("not an instance of "+b);}};_.Wb=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.Rb(b);}};_.Xb=function(a){return function(b){if(!_.Ja(b))throw _.Rb("not an Array");return _.Eb(b,function(b,d){try{return a(b)}catch(e){throw _.Rb("at index "+d,e);}})}};
_.Yb=function(a,b){return function(c){if(a(c))return c;throw _.Rb(b||""+c);}};_.Zb=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.qg||f)(b)}catch(g){if(!(g instanceof Qb))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.Rb(c.join("; and "));}};_.$b=function(a,b){return function(c){return b(a(c))}};_.ac=function(a){return function(b){return null==b?b:a(b)}};
bc=function(a){return function(b){if(b&&null!=b[a])return b;throw _.Rb("no "+a+" property");}};_.y=function(a,b){this.x=a;this.y=b};dc=function(a){if(a instanceof _.y)return a;try{_.Tb({x:_.cc,y:_.cc},!0)(a)}catch(b){throw _.Rb("not a Point",b);}return new _.y(a.x,a.y)};_.z=function(a,b,c,d){this.width=a;this.height=b;this.f=c||"px";this.b=d||"px"};ec=function(a){if(a instanceof _.z)return a;try{_.Tb({height:_.cc,width:_.cc},!0)(a)}catch(b){throw _.Rb("not a Size",b);}return new _.z(a.width,a.height)};
_.fc=function(a,b){this.b=a;this.f=b};gc=function(a){this.b=a;a=Math.cos(0*Math.PI/180);var b=Math.cos(0*Math.PI/180),c=Math.sin(0*Math.PI/180);this.m11=this.b*b;this.m12=this.b*c;this.m21=-this.b*a*c;this.m22=this.b*a*b;this.f=this.m11*this.m22-this.m12*this.m21};hc=function(a,b){return new _.fc((a.m22*b.Ka-a.m12*b.La)/a.f,(-a.m21*b.Ka+a.m11*b.La)/a.f)};_.ic=function(a){this.J=this.I=window.Infinity;this.L=this.K=-window.Infinity;_.x(a||[],this.extend,this)};
_.kc=function(a,b,c,d){var e=new _.ic;e.I=a;e.J=b;e.K=c;e.L=d;return e};lc=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.b=a;this.f=b};_.mc=function(a){return a.b>a.f};_.nc=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.oc=function(a){return a.isEmpty()?0:_.mc(a)?360-(a.b-a.f):a.f-a.b};pc=function(a,b){this.b=a;this.f=b};
_.D=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{qc(a),b=a.lng,a=a.lat,c=!1}catch(d){_.Sb(d)}a-=0;b-=0;c||(a=_.Bb(a,-90,90),180!=b&&(b=_.Cb(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.tc=function(a){return _.vb(a.lat())};_.uc=function(a){return _.vb(a.lng())};vc=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};
_.wc=function(a){try{if(a instanceof _.D)return a;a=qc(a);return new _.D(a.lat,a.lng)}catch(b){throw _.Rb("not a LatLng or LatLngLiteral",b);}};_.xc=function(a,b){a=a&&_.wc(a);b=b&&_.wc(b);if(a){b=b||a;var c=_.Bb(a.lat(),-90,90),d=_.Bb(b.lat(),-90,90);this.f=new pc(c,d);a=a.lng();b=b.lng();360<=b-a?this.b=new lc(-180,180):(a=_.Cb(a,-180,180),b=_.Cb(b,-180,180),this.b=new lc(a,b))}else this.f=new pc(1,-1),this.b=new lc(180,-180)};_.yc=function(a,b,c,d){return new _.xc(new _.D(a,b,!0),new _.D(c,d,!0))};
_.Ac=function(a){if(a instanceof _.xc)return a;try{return a=zc(a),_.yc(a.south,a.west,a.north,a.east)}catch(b){throw _.Rb("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.Dc=function(a){a=a||window.event;_.Bc(a);_.Cc(a)};_.Bc=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};_.Cc=function(a){a.preventDefault&&_.p(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.Ec=function(a){a.handled=!0;void 0===a.bubbles&&(a.returnValue="handled")};
Fc=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};Gc=function(a,b){var c=a.__e3_||{};if(b)a=c[b]||{};else for(b in a={},c)_.zb(a,c[b]);return a};Mc=function(a,b){return function(c){return b.call(a,c,this)}};Nc=function(a,b,c){return function(d){var e=[b,a];_.Gb(e,arguments);_.F.trigger.apply(this,e);c&&_.Ec.apply(null,arguments)}};Pc=function(a,b,c,d){this.f=a;this.j=b;this.b=c;this.l=d;this.id=++Oc;Fc(a,b)[this.id]=this};
Qc=function(a){return function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c=a.b.apply(a.f,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};_.Rc=function(a,b){this.f=a||0;this.j=b||0};_.Sc=function(a){return""+(_.Ma(a)?_.Pa(a):a)};_.G=_.k();Uc=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);c=Tc(a,b);for(var d in c){var e=c[d];Uc(e.Jc,e.ub)}_.F.trigger(a,b.toLowerCase()+"_changed")};
_.Wc=function(a){return Vc[a]||(Vc[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Xc=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};Tc=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};Yc=function(a){this.M=[];this.b=a&&a.sd||_.Ha;this.f=a&&a.ud||_.Ha};
_.$c=function(a,b,c,d){function e(){_.x(f,function(a){b.call(c||null,function(b){if(a.once){if(a.once.bh)return;a.once.bh=!0;_.Wa(g.M,a);g.M.length||g.b()}a.Hc.call(a.context,b)})})}var f=a.M.slice(0),g=a;d&&d.sync?e():Zc(e)};ad=function(a,b){return function(c){return c.Hc==a&&c.context==(b||null)}};_.bd=function(){this.M=new Yc({sd:(0,_.t)(this.sd,this),ud:(0,_.t)(this.ud,this)})};_.cd=function(a){return function(){return this.get(a)}};
_.dd=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.Sb(_.Rb("set"+_.Wc(a),d))}}:function(b){this.set(a,b)}};_.ed=function(a,b){_.yb(b,function(b,d){var c=_.cd(b);a["get"+_.Wc(b)]=c;d&&(d=_.dd(b,d),a["set"+_.Wc(b)]=d)})};_.gd=function(a){this.b=a||[];fd(this)};fd=function(a){a.set("length",a.b.length)};_.hd=function(){this.f={};this.j=0};_.id=function(a,b){var c=a.f,d=_.Sc(b);c[d]||(c[d]=b,++a.j,_.F.trigger(a,"insert",b),a.b&&a.b(b))};_.jd=_.pa("b");
_.kd=function(a,b,c){this.heading=a;this.pitch=_.Bb(b,-90,90);this.zoom=Math.max(0,c)};_.ld=function(){this.__gm=new _.G;this.l=null};_.md=function(a){_.bd.call(this);this.m=!!a};_.od=function(a){return new nd(a,void 0)};nd=function(a,b){_.md.call(this,b);this.b=a};pd=_.k();_.qd=function(a,b){a[b]||(a[b]=[]);return a[b]};
_.ud=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into jsproto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&rd(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};
rd=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.ud(a,b))return!1}else return!1;return!0};vd=function(a,b,c,d){this.type=a;this.label=b;this.ql=c;this.Ec=d};wd=function(a){switch(a){case "d":case "f":case "i":case "j":case "u":case "v":case "x":case "y":case "g":case "h":case "n":case "o":case "e":return 0;case "s":case "z":case "B":return"";case "b":return!1;default:return null}};
_.xd=function(a,b,c){return new vd(a,1,_.p(b)?b:wd(a),c)};_.yd=function(a,b,c){return new vd(a,2,_.p(b)?b:wd(a),c)};_.zd=function(a){return _.xd("i",a)};_.Ad=function(a){return _.xd("v",a)};_.Bd=function(a){return _.xd("b",a)};_.Cd=function(a){return _.xd("e",a)};_.J=function(a,b){return _.xd("m",a,b)};_.Dd=function(a){return new vd("m",3,void 0,a)};Ed=_.k();
Gd=function(a,b,c){for(var d=1;d<b.A.length;++d){var e=b.A[d],f=a[d+b.b];if(e&&null!=f)if(3==e.label)for(var g=0;g<f.length;++g)Fd(f[g],d,e,c);else Fd(f,d,e,c)}};Fd=function(a,b,c,d){if("m"==c.type){var e=d.length;Gd(a,c.Ec,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),a=[b,c.type,(0,window.encodeURIComponent)(a)].join(""),d.push(a)};_.K=function(a){this.data=a||[]};_.Hd=function(a,b,c){a=a.data[b];return null!=a?a:c};_.Kd=function(a,b,c){return _.Hd(a,b,c||0)};
_.L=function(a,b,c){return _.Hd(a,b,c||0)};_.M=function(a,b,c){return _.Hd(a,b,c||"")};_.N=function(a,b){var c=a.data[b];c||(c=a.data[b]=[]);return c};_.Ld=function(a,b){return _.qd(a.data,b)};_.Md=function(a,b,c){_.Ld(a,b).push(c)};_.Nd=function(a,b,c){return _.Ld(a,b)[c]};_.Od=function(a,b){var c=[];_.Ld(a,b).push(c);return c};_.Pd=function(a,b){return a.data[b]?a.data[b].length:0};Qd=_.k();_.Rd=_.pa("__gm");Sd=_.k();_.Td=function(a){this.b=_.wc(a)};
Ud=function(a){if(a instanceof Sd)return a;try{return new _.Td(_.wc(a))}catch(b){}throw _.Rb("not a Geometry or LatLng or LatLngLiteral object");};_.Vd=function(a,b){if(a)return function(){--a||b()};b();return _.Ha};_.Wd=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};
Xd=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};Yd=function(a){this.j=window.document;this.b={};this.f=a};$d=function(){this.l={};this.f={};this.m={};this.b={};this.j=new Zd};be=function(a,b){a.l[b]||(a.l[b]=!0,ae(a.j,function(c){for(var d=c.b[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.b[g]||be(a,g)}c=c.j;c.b[b]||_.Wd(c.j,Xd(c.f,b)+".js")}))};
fe=function(a,b){var c=ce;this.j=a;this.b=c;a={};for(var d in c)for(var e=c[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.l=a;this.f=b};Zd=function(){this.b=[]};ae=function(a,b){a.f?b(a.f):a.b.push(b)};_.O=function(a,b,c){var d=$d.b();a=""+a;d.b[a]?b(d.b[a]):((d.f[a]=d.f[a]||[]).push(b),c||be(d,a))};_.ge=function(a,b){$d.b().b[""+a]=b};he=function(a,b,c){var d=[],e=_.Vd(a.length,function(){b.apply(null,d)});_.x(a,function(a,b){_.O(a,function(a){d[b]=a;e()},c)})};
_.ie=function(a){a=a||{};this.j=a.id;this.b=null;try{this.b=a.geometry?Ud(a.geometry):null}catch(b){_.Sb(b)}this.f=a.properties||{}};je=function(){this.b={};this.j={};this.f={}};ke=function(){this.b={}};le=function(a){this.b=new ke;var b=this;_.F.addListenerOnce(a,"addfeature",function(){_.O("data",function(c){c.b(b,a,b.b)})})};_.ne=function(a){this.b=[];try{this.b=me(a)}catch(b){_.Sb(b)}};_.pe=function(a){this.b=(0,_.oe)(a)};_.qe=function(a){this.b=(0,_.oe)(a)};_.se=function(a){this.b=re(a)};
_.te=function(a){this.b=(0,_.oe)(a)};_.ve=function(a){this.b=ue(a)};_.xe=function(a){this.b=we(a)};
_.ye=function(a,b,c){function d(a){if(!a)throw _.Rb("not a Feature");if("Feature"!=a.type)throw _.Rb('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(H){throw _.Rb('in property "geometry"',H);}var d=a.properties||{};if(!_.Ib(d))throw _.Rb("properties is not an Object");var f=c.idPropertyName;a=f?d[f]:a.id;if(null!=a&&!_.Hb(a)&&!_.Jb(a))throw _.Rb((f||"id")+" is not a string or number");return{id:a,geometry:b,properties:d}}function e(a){if(null==a)throw _.Rb("is null");var b=(a.type+
"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Td(h(c));case "multipoint":return new _.te(n(c));case "linestring":return g(c);case "multilinestring":return new _.se(q(c));case "polygon":return f(c);case "multipolygon":return new _.xe(u(c))}}catch(I){throw _.Rb('in property "coordinates"',I);}if("geometrycollection"==b)try{return new _.ne(B(a.geometries))}catch(I){throw _.Rb('in property "geometries"',I);}throw _.Rb("invalid type");}function f(a){return new _.ve(r(a))}function g(a){return new _.pe(n(a))}
function h(a){a=l(a);return _.wc({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.Xb(_.cc),n=_.Xb(h),q=_.Xb(g),r=_.Xb(function(a){a=n(a);if(!a.length)throw _.Rb("contains no elements");if(!a[0].W(a[a.length-1]))throw _.Rb("first and last positions are not equal");return new _.qe(a.slice(0,-1))}),u=_.Xb(f),B=_.Xb(e),w=_.Xb(d);if("FeatureCollection"==b.type){b=b.features;try{return _.Eb(w(b),function(b){return a.add(b)})}catch(C){throw _.Rb('in property "features"',C);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.Rb("not a Feature or FeatureCollection");};Ae=function(a){var b=this;a=a||{};this.setValues(a);this.b=new je;_.F.forward(this.b,"addfeature",this);_.F.forward(this.b,"removefeature",this);_.F.forward(this.b,"setgeometry",this);_.F.forward(this.b,"setproperty",this);_.F.forward(this.b,"removeproperty",this);this.f=new le(this.b);this.f.bindTo("map",this);this.f.bindTo("style",this);_.x(_.ze,function(a){_.F.forward(b.f,a,b)});this.j=!1};De=function(a){a.j||(a.j=!0,_.O("drawing_impl",function(b){b.gm(a)}))};
Ee=function(a){if(!a)return null;if(_.Fa(a)){var b=window.document.createElement("div");b.style.overflow="auto";b.innerHTML=a}else a.nodeType==window.Node.TEXT_NODE?(b=window.document.createElement("div"),b.appendChild(a)):b=a;return b};Ge=function(a){var b=Fe,c=$d.b().j;a=c.f=new fe(new Yd(a),b);b=0;for(var d=c.b.length;b<d;++b)c.b[b](a);c.b.length=0};He=function(a){a=a||{};a.clickable=_.Fb(a.clickable,!0);a.visible=_.Fb(a.visible,!0);this.setValues(a);_.O("marker",_.Ha)};
_.Ie=function(a){this.__gm={set:null,Yd:null,Zb:{map:null,Ae:null}};He.call(this,a)};Je=function(a,b){this.b=a;this.f=b;a.addListener("map_changed",(0,_.t)(this.jn,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Ke=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
_.Le=function(a){function b(){e||(e=!0,_.O("infowindow",function(a){a.Ok(d)}))}window.setTimeout(function(){_.O("infowindow",_.Ha)},100);a=a||{};var c=!!a.b;delete a.b;var d=new Je(this,c),e=!1;_.F.addListenerOnce(this,"anchor_changed",b);_.F.addListenerOnce(this,"map_changed",b);this.setValues(a)};_.Ne=function(a){_.Me&&a&&_.Me.push(a)};Oe=function(a){this.setValues(a)};Pe=_.k();Qe=_.k();Re=_.k();_.Se=function(){_.O("geocoder",_.Ha)};
_.Te=function(a,b,c){this.G=null;this.set("url",a);this.set("bounds",_.ac(_.Ac)(b));this.setValues(c)};Ue=function(a,b){_.Jb(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.Ve=function(){var a=this;_.O("layers",function(b){b.b(a)})};We=function(a){this.setValues(a);var b=this;_.O("layers",function(a){a.f(b)})};Xe=function(){var a=this;_.O("layers",function(b){b.j(a)})};_.Ze=function(){this.b="";this.f=_.Ye};_.$e=function(a){var b=new _.Ze;b.b=a;return b};
_.bf=function(){this.vf="";this.lk=_.af;this.b=null};_.cf=function(a,b){var c=new _.bf;c.vf=a;c.b=b;return c};_.df=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.ef=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};_.ff=_.k();gf=function(a,b,c,d,e){this.b=!!b;this.node=null;this.f=0;this.j=!1;this.l=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.f||0;this.b&&(this.depth*=-1)};hf=function(a,b,c,d){gf.call(this,a,b,c,null,d)};jf=function(a){this.data=a||[]};
mf=function(a){this.data=a||[]};nf=function(a){this.data=a||[]};of=function(a){this.data=a||[]};_.pf=function(a){this.data=a||[]};qf=function(a){this.data=a||[]};rf=function(a){this.data=a||[]};sf=function(a){this.data=a||[]};_.tf=function(a){return _.M(a,0)};_.uf=function(a){return _.M(a,1)};_.vf=function(){return _.M(_.Q,16)};_.wf=function(a){return new of(a.data[2])};
xf=function(a,b,c,d,e){var f=_.M(_.wf(_.Q),7);this.b=a;this.f=d;this.j=_.p(e)?e:_.Sa();var g=f+"/csi?v=2&s=mapsapi3&v3v="+_.M(new sf(_.Q.data[36]),0)+"&action="+a;_.ab(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.l=g};_.zf=function(a,b){var c={};c[b]=void 0;_.yf(a,c)};
_.yf=function(a,b){var c="";_.ab(b,function(a,b){var d=(null!=a?a:_.Sa())-this.j;c&&(c+=",");c+=b+"."+Math.round(d);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.b+":"+b)},a);b=a.l+"&rt="+c;a.f.createElement("img").src=b;(a=_.ib.__gm_captureCSI)&&a(b)};
_.Af=function(a,b){b=b||{};var c=b.An||{},d=_.Ld(_.Q,12).join(",");d&&(c.libraries=d);d=_.M(_.Q,6);var e=new jf(_.Q.data[33]),f=[];d&&f.push(d);_.x(e.data,function(a,b){a&&_.x(a,function(a,c){null!=a&&f.push(b+1+"_"+(c+1)+"_"+a)})});b.Dl&&(f=f.concat(b.Dl));return new xf(a,f.join(","),c,b.document||window.document,b.startTime)};Cf=function(){this.f=_.Af("apiboot2",{startTime:_.Bf});_.zf(this.f,"main");this.b=!1};Ef=function(){var a=Df;a.b||(a.b=!0,_.zf(a.f,"firstmap"))};
_.Ff=function(a,b,c){this.size=a;this.b=b;this.heading=c;this.f=Math.cos(this.b/180*Math.PI)};_.Gf=function(){this.b=new _.y(128,128);this.j=256/360;this.l=256/(2*Math.PI);this.f=!0};_.Hf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};
_.If=function(a,b){var c=a.lat()+_.wb(b);90<c&&(c=90);var d=a.lat()-_.wb(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.vb(a.lat()));if(90==c||-90==d||1E-6>e)return new _.xc(new _.D(d,-180),new _.D(c,180));b=_.wb(Math.asin(b/e));return new _.xc(new _.D(d,a.lng()-b),new _.D(c,a.lng()+b))};
Lf=function(a,b){_.ld.call(this);_.Ne(a);this.__gm=new _.G;this.f=null;b&&b.client&&(this.f=_.Jf[b.client]||null);var c=this.controls=[];_.yb(_.Kf,function(a,b){c[b]=new _.gd});this.j=!0;this.b=a;this.m=!1;this.__gm.Db=b&&b.Db||new _.hd;this.set("standAlone",!0);this.setPov(new _.kd(0,0,1));b&&b.re&&(a=b.re,_.Hb(a.zoom)||(a.zoom=_.Hb(b.zoom)?b.zoom:1));this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);_.F.addListenerOnce(this,"pano_changed",_.Mb(function(){_.O("marker",(0,_.t)(function(a){a.b(this.__gm.Db,
this)},this))}))};Mf=function(){this.l=[];this.j=this.b=this.f=null};Nf=function(a,b,c,d,e){this.S=b;this.T=e;this.b=_.od(new _.jd([]));this.D=new _.hd;new _.gd;this.j=new _.hd;this.m=new _.hd;this.l=new _.hd;var f=this.Db=new _.hd;f.b=function(){delete f.b;_.O("marker",_.Mb(function(b){b.b(f,a)}))};this.B=new Lf(c,{visible:!1,enableCloseButton:!0,Db:f});this.B.bindTo("reportErrorControl",a);this.B.j=!1;this.f=new Mf;this.overlayLayer=null};_.Of=function(){this.M=new Yc};
_.Pf=function(a){this.dl=a||0;_.F.bind(this,"forceredraw",this,this.B)};_.Qf=function(a,b){a=a.style;a.width=b.width+b.f;a.height=b.height+b.b};_.Rf=function(a){return new _.z(a.offsetWidth,a.offsetHeight)};_.Tf=function(){var a=[],b=_.ib.google&&_.ib.google.maps&&_.ib.google.maps.fisfetsz;b&&Array.isArray(b)&&_.Sf[15]&&b.forEach(function(b){_.Hb(b)&&a.push(b)});return a};Uf=function(a){this.data=a||[]};Xf=function(){Vf||(Vf={b:-1,A:[,_.Wf,_.Wf,_.Wf,_.Wf]});return Vf};
gg=function(a){this.data=a||[]};hg=function(a){this.data=a||[]};ig=function(a){this.data=a||[]};jg=function(a){this.data=a||[]};kg=function(a){this.data=a||[]};lg=function(a){this.data=a||[]};
zg=function(a){if(!mg){var b=mg={b:-1,A:[]},c=new jg([]);ng||(ng={b:-1,A:[,_.R,_.R]});c=_.J(c,ng);var d=new kg([]);og||(og={b:-1,A:[]},og.A=[,_.S,_.S,_.Cd(1)]);d=_.J(d,og);var e=new ig([]);if(!pg){var f=[];pg={b:-1,A:f};f[1]=_.T;f[2]=_.U;f[3]=_.U;f[5]=_.V;f[6]=_.V;qg||(qg={b:-1,A:[]},qg.A=[,_.T,_.Cd(1),_.rg,_.J(new Uf([]),Xf()),_.U,_.rg,_.rg,_.T,_.J(new Uf([]),Xf()),_.rg]);f[8]=_.Dd(qg);var g=new hg([]);sg||(sg={b:-1,A:[,_.tg,_.U]});f[9]=_.J(g,sg);f[10]=_.U;f[11]=_.U;f[12]=_.U;f[13]=_.tg;f[14]=_.ug;
f[100]=_.U}e=_.J(e,pg);f=new jf([]);if(!vg){g=vg={b:-1,A:[]};var h=new nf([]);wg||(wg={b:-1,A:[,_.U,_.U]});h=_.J(h,wg);var l=new mf([]);xg||(xg={b:-1,A:[,_.U]});g.A=[,,,,,,,,,,h,,_.J(l,xg)]}b.A=[,c,_.T,_.S,d,e,_.J(f,vg)]}return _.yg.b(a.data,mg)};Ag=function(a,b,c,d,e){_.Pf.call(this);this.H=b;this.F=new _.Gf;this.N=c+"/maps/api/js/StaticMapService.GetMapImage";this.b=this.f=null;this.C=d;this.j=e?new nd(null,void 0):null;this.l=null;this.m=!1;this.set("div",a);this.set("loading",!0)};
Cg=function(a){var b=a.get("tilt")||_.xb(a.get("styles"));a=a.get("mapTypeId");return b?null:Bg[a]};Dg=function(a){a.parentNode&&a.parentNode.removeChild(a)};Eg=function(a,b){var c=a.b;c.onload=null;c.onerror=null;var d=a.get("size");d&&(b&&(c.parentNode||a.f.appendChild(c),a.j||_.Qf(c,d),_.F.trigger(a,"staticmaploaded"),a.C.set(_.Sa())),a.set("loading",!1))};
Fg=function(a,b,c,d,e){var f=new lg,g=new jg(_.N(f,0));g.data[0]=b.I;g.data[1]=b.J;f.data[1]=e;f.setZoom(c);c=new kg(_.N(f,3));c.data[0]=b.K-b.I;c.data[1]=b.L-b.J;var h=new ig(_.N(f,4));h.data[0]=d;h.data[4]=_.tf(_.wf(_.Q));h.data[5]=_.uf(_.wf(_.Q)).toLowerCase();h.data[9]=!0;_.Tf().forEach(function(a){0>_.Ld(h,13).indexOf(a)&&_.Md(h,13,a)});h.data[11]=!0;_.Sf[13]&&(b=new gg(_.Od(h,7)),b.data[0]=33,b.data[1]=3,b.data[7]=1);f=a.N+(0,window.unescape)("%3F")+zg(f);return a.H(f)};
Gg=function(a,b){var c=a.b;b!=c.src?(a.j||Dg(c),c.onload=function(){Eg(a,!0)},c.onerror=function(){Eg(a,!1)},c.src=b):!c.parentNode&&b&&a.f.appendChild(c)};_.Ig=function(a){for(var b;b=a.firstChild;)_.Hg(b),a.removeChild(b)};_.Hg=function(a){a=new hf(a);try{for(;;)_.F.clearInstanceListeners(a.next())}catch(b){if(b!==_.Jg)throw b;}};
Mg=function(a,b){var c=_.Sa();Df&&Ef();var d=new _.Of,e=b||{};e.noClear||_.Ig(a);var f="undefined"==typeof window.document?null:window.document.createElement("div");f&&a.appendChild&&(a.appendChild(f),f.style.width=f.style.height="100%");if(![].forEach)throw _.O("controls",function(b){b.kg(a)}),Error("The Google Maps API does not support this browser.");var g;b=new window.Promise(function(a){g=a});_.Rd.call(this,new Nf(this,a,f,d,b));_.p(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.Z=
_.Sf[15]&&e.noControlsOrLogging;this.mapTypes=new Qd;this.features=new _.G;_.Ne(f);this.notify("streetView");b=_.Rf(f);var h=null;Kg(e.useStaticMap,b)&&(h=new Ag(f,_.Lg,_.M(_.wf(_.Q),9),new nd(null,void 0),!1),_.F.forward(h,"staticmaploaded",this),h.set("size",b),h.bindTo("center",this),h.bindTo("zoom",this),h.bindTo("mapTypeId",this),h.bindTo("styles",this));this.overlayMapTypes=new _.gd;var l=this.controls=[];_.yb(_.Kf,function(a,b){l[b]=new _.gd});var n=this,q=!0;_.O("map",function(a){n.getDiv()&&
f&&a.f(n,e,f,h,q,c,d,g)});q=!1;this.data=new Ae({map:this})};Kg=function(a,b){if(!_.Q||2==_.Kd(_.Q,37))return!1;if(_.p(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};Ng=function(){_.O("maxzoom",_.Ha)};Og=function(a,b){!a||_.Jb(a)||_.Hb(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.Pg=_.k();Qg=function(a){a=a||{};a.visible=_.Fb(a.visible,!0);return a};_.Rg=function(a){return a&&a.radius||6378137};Tg=function(a){return a instanceof _.gd?Sg(a):new _.gd((0,_.oe)(a))};
Vg=function(a){if(_.Ja(a)||a instanceof _.gd)if(0==_.xb(a))var b=!0;else b=a instanceof _.gd?a.getAt(0):a[0],b=_.Ja(b)||b instanceof _.gd;else b=!1;return b?a instanceof _.gd?Ug(Sg)(a):new _.gd(_.Xb(Tg)(a)):new _.gd([Tg(a)])};Ug=function(a){return function(b){if(!(b instanceof _.gd))throw _.Rb("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.Rb("at index "+d,e);}});return b}};_.ah=function(a){this.setValues(Qg(a));_.O("poly",_.Ha)};
bh=function(a){this.set("latLngs",new _.gd([new _.gd]));this.setValues(Qg(a));_.O("poly",_.Ha)};_.ch=function(a){bh.call(this,a)};_.dh=function(a){bh.call(this,a)};_.eh=function(a){this.setValues(Qg(a));_.O("poly",_.Ha)};fh=function(){this.b=null};_.gh=function(){this.b=null};
_.hh=function(a){var b=this;this.tileSize=a.tileSize||new _.z(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.j=(0,_.t)(a.getTileUrl,a);this.b=new _.hd;this.f=null;this.set("opacity",a.opacity);_.O("map",function(a){var c=b.f=a.b,e=b.tileSize||new _.z(256,256);b.b.forEach(function(a){var d=a.__gmimt,f=d.$,l=d.zoom,n=b.j(f,l);d.ac=c({V:f.x,X:f.y,aa:l},e,a,n,function(){return _.F.trigger(a,"load")})})})};
ih=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.jh=function(){_.jh.bf(this,"constructor")};_.kh=function(a,b){_.kh.bf(this,"constructor");this.set("styles",a);a=b||{};this.f=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.z(256,256)};_.lh=function(a,b){_.Yb(Ub,"container is not a Node")(a);this.setValues(b);_.O("controls",(0,_.t)(function(b){b.ym(this,a)},this))};mh=_.pa("b");
nh=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.b;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};qh=function(){var a=_.L(new qf(_.Q.data[4]),0),b=new mh(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(oh,"%27");var e=d+c;ph||(ph=/(?:https?:\/\/[^/]+)?(.*)/);d=ph.exec(d);return e+nh(b,d&&d[1],a)}};rh=function(){var a=new mh(2147483647);return function(b){return nh(a,b,0)}};
sh=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.Rb(a+" is not a function");return function(){c.apply(d)}};th=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};
uh=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.sa=[];_.wa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;_.vh="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)wh=Object.setPrototypeOf;else{var xh;a:{var yh={Kk:!0},zh={};try{zh.__proto__=yh;xh=zh.Kk;break a}catch(a){}xh=!1}wh=xh?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}_.Ah=wh;ya="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};xa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
Da("Array.prototype.findIndex",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++)if(a.call(c,b[f],f,b)){a=f;break a}a=-1}return a}});Da("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});Da("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length;for(c=c||0;c<e;c++)if(b[c]==a||Object.is(b[c],a))return!0;return!1}});
Da("Promise",function(a){function b(a){this.b=0;this.j=void 0;this.f=[];var b=this.l();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}}function c(){this.b=null}function d(a){return a instanceof b?a:new b(function(b){b(a)})}if(a)return a;c.prototype.f=function(a){null==this.b&&(this.b=[],this.l());this.b.push(a)};c.prototype.l=function(){var a=this;this.j(function(){a.B()})};var e=_.wa.setTimeout;c.prototype.j=function(a){e(a,0)};c.prototype.B=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=
[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.m(n)}}}this.b=null};c.prototype.m=function(a){this.j(function(){throw a;})};b.prototype.l=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.H),reject:a(this.m)}};b.prototype.H=function(a){if(a===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.N(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=
!0;break a;default:c=!1}c?this.F(a):this.B(a)}};b.prototype.F=function(a){var b=void 0;try{b=a.then}catch(l){this.m(l);return}"function"==typeof b?this.R(b,a):this.B(a)};b.prototype.m=function(a){this.C(2,a)};b.prototype.B=function(a){this.C(1,a)};b.prototype.C=function(a,b){if(0!=this.b)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.b);this.b=a;this.j=b;this.D()};b.prototype.D=function(){if(null!=this.f){for(var a=this.f,b=0;b<a.length;++b)a[b].call(),a[b]=null;
this.f=null}};var f=new c;b.prototype.N=function(a){var b=this.l();a.Ld(b.resolve,b.reject)};b.prototype.R=function(a,b){var c=this.l();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(C){f(C)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.Ld(d(a,e),d(c,f));return g};b.prototype["catch"]=function(a){return this.then(void 0,a)};b.prototype.Ld=function(a,b){function c(){switch(d.b){case 1:a(d.j);
break;case 2:b(d.j);break;default:throw Error("Unexpected state: "+d.b);}}var d=this;null==this.f?f.f(c):this.f.push(function(){f.f(c)})};b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,c){for(var e=_.Ca(a),f=e.next();!f.done;f=e.next())d(f.value).Ld(b,c)})};b.all=function(a){var c=_.Ca(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){g[b]=c;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,d(e.value).Ld(f(g.length-
1),b),e=c.next();while(!e.done)})};return b});Da("Array.from",function(a){return a?a:function(a,c,d){Aa();c=null!=c?c:_.oa();var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var g=0;g<f;g++)b.push(c.call(d,a[g]))}return b}});Da("Math.sign",function(a){return a?a:function(a){a=Number(a);return 0===a||(0,window.isNaN)(a)?a:0<a?1:-1}});
Da("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){va();Aa();a=_.Ca(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){Ea(a,e)||ya(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!Ea(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};b.prototype.get=function(a){return Ea(a,e)?a[e][this.b]:void 0};b.prototype.has=function(a){return Ea(a,e)&&Ea(a[e],this.b)};b.prototype["delete"]=function(a){return Ea(a,e)&&Ea(a[e],this.b)?delete a[e][this.b]:!1};return b});
Da("Map",function(a){function b(){var a={};return a.Jb=a.next=a.head=a}function c(a,b){var c=a.b;return Ba(function(){if(c){for(;c.head!=a.b;)c=c.Jb;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&Ea(a.f,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,Ra:e}}return{id:c,
list:d,index:-1,Ra:void 0}}function e(a){this.f={};this.b=b();this.size=0;if(a){a=_.Ca(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(_.Ca([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||
!d.next().done?!1:!0}catch(r){return!1}}())return a;va();Aa();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.Ra?c.Ra.value=b:(c.Ra={next:this.b,Jb:this.b.Jb,head:this.b,key:a,value:b},c.list.push(c.Ra),this.b.Jb.next=c.Ra,this.b.Jb=c.Ra,this.size++);return this};e.prototype["delete"]=function(a){a=d(this,a);return a.Ra&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.Ra.Jb.next=a.Ra.next,a.Ra.next.Jb=a.Ra.Jb,a.Ra.head=
null,this.size--,!0):!1};e.prototype.clear=function(){this.f={};this.b=this.b.Jb=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).Ra};e.prototype.get=function(a){return(a=d(this,a).Ra)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=
d.value,a.call(b,d[1],d[0],this)};e.prototype[window.Symbol.iterator]=e.prototype.entries;var g=0;return e});Da("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});_.ib=this;Na="closure_uid_"+(1E9*Math.random()>>>0);Oa=0;a:{var Bh=_.ib.navigator;if(Bh){var Ch=Bh.userAgent;if(Ch){_.Ya=Ch;break a}}_.Ya=""};_.hb[" "]=_.Ha;var Ph;_.Dh=_.$a("Opera");_.Eh=_.bb();_.Fh=_.$a("Edge");_.Gh=_.$a("Gecko")&&!(_.Za()&&!_.$a("Edge"))&&!(_.$a("Trident")||_.$a("MSIE"))&&!_.$a("Edge");_.Hh=_.Za()&&!_.$a("Edge");_.Ih=_.$a("Macintosh");_.Jh=_.$a("Windows");_.Kh=_.$a("Linux")||_.$a("CrOS");_.Lh=_.$a("Android");_.Mh=_.gb();_.Nh=_.$a("iPad");_.Oh=_.$a("iPod");
a:{var Qh="",Rh=function(){var a=_.Ya;if(_.Gh)return/rv:([^\);]+)(\)|;)/.exec(a);if(_.Fh)return/Edge\/([\d\.]+)/.exec(a);if(_.Eh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Hh)return/WebKit\/(\S+)/.exec(a);if(_.Dh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Rh&&(Qh=Rh?Rh[1]:"");if(_.Eh){var Sh=jb();if(null!=Sh&&Sh>(0,window.parseFloat)(Qh)){Ph=String(Sh);break a}}Ph=Qh}_.Th=Ph;var Vh=_.ib.document;_.Uh=Vh&&_.Eh?jb()||("CSS1Compat"==Vh.compatMode?(0,window.parseInt)(_.Th,10):5):void 0;_.Wh=_.$a("Firefox");_.Xh=_.gb()||_.$a("iPod");_.Yh=_.$a("iPad");_.Zh=_.fb();_.$h=cb();_.ai=_.eb()&&!(_.gb()||_.$a("iPad")||_.$a("iPod"));var bi;bi=_.Gh||_.Hh&&!_.ai||_.Dh;_.ci=bi||"function"==typeof _.ib.btoa;_.di=bi||!_.ai&&!_.Eh&&"function"==typeof _.ib.atob;kb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.j();return a};var ei=function(a){return function(){return a}}(null);var qb,ob=_.lb;var fi=new kb(function(){return new ub},function(a){a.reset()});tb.prototype.add=function(a,b){var c=fi.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};tb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};ub.prototype.set=function(a,b){this.Hc=a;this.b=b;this.next=null};ub.prototype.reset=function(){this.next=this.b=this.Hc=null};_.nb.m=function(){if(-1!=String(_.ib.Promise).indexOf("[native code]")){var a=_.ib.Promise.resolve(void 0);_.nb.b=function(){a.then(_.nb.f)}}else _.nb.b=function(){sb()}};_.nb.B=function(a){_.nb.b=function(){sb();a&&a(_.nb.f)}};_.nb.j=!1;_.nb.l=new tb;_.nb.f=function(){for(var a;a=_.nb.l.remove();){try{a.Hc.call(a.b)}catch(c){mb(c)}var b=fi;b.l(a);100>b.f&&(b.f++,a.next=b.b,b.b=a)}_.nb.j=!1};_.gi={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.Kf={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};_.v(Qb,Error);var hi,ji;_.cc=_.Yb(_.Hb,"not a number");hi=_.$b(_.cc,function(a){if((0,window.isNaN)(a))throw _.Rb("NaN is not an accepted value");return a});_.ii=_.Yb(_.Jb,"not a string");ji=_.Yb(_.Kb,"not a boolean");_.ki=_.ac(_.cc);_.li=_.ac(_.ii);_.mi=_.ac(ji);_.ni=new _.y(0,0);_.y.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.y.prototype.W=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.y.prototype.equals=_.y.prototype.W;_.y.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.y.prototype.ce=_.ua(0);_.oi=new _.z(0,0);_.z.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.z.prototype.W=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.z.prototype.equals=_.z.prototype.W;_.fc.prototype.W=function(a){return a?this.b==a.b&&this.f==a.f:!1};gc.prototype.W=function(a){return a?this.m11==a.m11&&this.m12==a.m12&&this.m21==a.m21&&this.m22==a.m22:!1};_.ic.prototype.isEmpty=function(){return!(this.I<this.K&&this.J<this.L)};_.ic.prototype.extend=function(a){a&&(this.I=Math.min(this.I,a.x),this.K=Math.max(this.K,a.x),this.J=Math.min(this.J,a.y),this.L=Math.max(this.L,a.y))};_.ic.prototype.getCenter=function(){return new _.y((this.I+this.K)/2,(this.J+this.L)/2)};_.ic.prototype.W=function(a){return a?this.I==a.I&&this.J==a.J&&this.K==a.K&&this.L==a.L:!1};_.pi=_.kc(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.qi=_.kc(0,0,0,0);_.m=lc.prototype;_.m.isEmpty=function(){return 360==this.b-this.f};_.m.intersects=function(a){var b=this.b,c=this.f;return this.isEmpty()||a.isEmpty()?!1:_.mc(this)?_.mc(a)||a.b<=this.f||a.f>=b:_.mc(a)?a.b<=c||a.f>=b:a.b<=c&&a.f>=b};_.m.contains=function(a){-180==a&&(a=180);var b=this.b,c=this.f;return _.mc(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.m.extend=function(a){this.contains(a)||(this.isEmpty()?this.b=this.f=a:_.nc(a,this.b)<_.nc(this.f,a)?this.b=a:this.f=a)};
_.m.W=function(a){return 1E-9>=Math.abs(a.b-this.b)%360+Math.abs(_.oc(a)-_.oc(this))};_.m.Sb=function(){var a=(this.b+this.f)/2;_.mc(this)&&(a=_.Cb(a+180,-180,180));return a};_.m=pc.prototype;_.m.isEmpty=function(){return this.b>this.f};_.m.intersects=function(a){var b=this.b,c=this.f;return b<=a.b?a.b<=c&&a.b<=a.f:b<=a.f&&b<=c};_.m.contains=function(a){return a>=this.b&&a<=this.f};_.m.extend=function(a){this.isEmpty()?this.f=this.b=a:a<this.b?this.b=a:a>this.f&&(this.f=a)};
_.m.W=function(a){return this.isEmpty()?a.isEmpty():1E-9>=Math.abs(a.b-this.b)+Math.abs(this.f-a.f)};_.m.Sb=function(){return(this.f+this.b)/2};var qc=_.Tb({lat:_.cc,lng:_.cc},!0);_.D.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.D.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.D.prototype.W=function(a){return a?_.Db(this.lat(),a.lat())&&_.Db(this.lng(),a.lng()):!1};_.D.prototype.equals=_.D.prototype.W;_.D.prototype.toUrlValue=function(a){a=_.p(a)?a:6;return vc(this.lat(),a)+","+vc(this.lng(),a)};_.oe=_.Xb(_.wc);_.m=_.xc.prototype;_.m.getCenter=function(){return new _.D(this.f.Sb(),this.b.Sb())};_.m.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.m.toJSON=function(){return{south:this.f.b,west:this.b.b,north:this.f.f,east:this.b.f}};_.m.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};_.m.W=function(a){if(!a)return!1;a=_.Ac(a);return this.f.W(a.f)&&this.b.W(a.b)};_.xc.prototype.equals=_.xc.prototype.W;
_.m=_.xc.prototype;_.m.contains=function(a){a=_.wc(a);return this.f.contains(a.lat())&&this.b.contains(a.lng())};_.m.intersects=function(a){a=_.Ac(a);return this.f.intersects(a.f)&&this.b.intersects(a.b)};_.m.extend=function(a){a=_.wc(a);this.f.extend(a.lat());this.b.extend(a.lng());return this};_.m.union=function(a){a=_.Ac(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.m.getSouthWest=function(){return new _.D(this.f.b,this.b.b,!0)};
_.m.getNorthEast=function(){return new _.D(this.f.f,this.b.f,!0)};_.m.toSpan=function(){var a=this.f;a=a.isEmpty()?0:a.f-a.b;return new _.D(a,_.oc(this.b),!0)};_.m.isEmpty=function(){return this.f.isEmpty()||this.b.isEmpty()};var zc=_.Tb({south:_.cc,west:_.cc,north:_.cc,east:_.cc},!1);var Oc;
_.F={addListener:function(a,b,c){return new Pc(a,b,c,0)},hasListeners:function(a,b){if(!a)return!1;b=(a=a.__e3_)&&a[b];return!!b&&!_.Ab(b)},removeListener:function(a){a&&a.remove()},clearListeners:function(a,b){_.yb(Gc(a,b),function(a,b){b&&b.remove()})},clearInstanceListeners:function(a){_.yb(Gc(a),function(a,c){c&&c.remove()})},trigger:function(a,b,c){if(_.F.hasListeners(a,b)){var d=_.Xa(arguments,2),e=Gc(a,b),f;for(f in e){var g=e[f];g&&g.b.apply(g.f,d)}}},addDomListener:function(a,b,c,d){var e=
d?4:1;if(!a.addEventListener&&a.attachEvent)return c=new Pc(a,b,c,2),a.attachEvent("on"+b,Qc(c)),c;a.addEventListener&&a.addEventListener(b,c,d);return new Pc(a,b,c,e)},addDomListenerOnce:function(a,b,c,d){var e=_.F.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e},Y:function(a,b,c,d){return _.F.addDomListener(a,b,Mc(c,d))},bind:function(a,b,c,d){return _.F.addListener(a,b,(0,_.t)(d,c))},addListenerOnce:function(a,b,c){var d=_.F.addListener(a,b,function(){d.remove();
return c.apply(this,arguments)});return d},forward:function(a,b,c){return _.F.addListener(a,b,Nc(b,c))},Za:function(a,b,c,d){return _.F.addDomListener(a,b,Nc(b,c,!d))}};Oc=0;Pc.prototype.remove=function(){if(this.f){if(this.f.removeEventListener)switch(this.l){case 1:this.f.removeEventListener(this.j,this.b,!1);break;case 4:this.f.removeEventListener(this.j,this.b,!0)}delete Fc(this.f,this.j)[this.id];this.b=this.f=null}};_.Rc.prototype.heading=_.qa("f");_.Rc.prototype.b=_.qa("j");_.Rc.prototype.toString=function(){return this.f+","+this.j};_.ri=new _.Rc;_.m=_.G.prototype;_.m.get=function(a){var b=Xc(this);a+="";b=Nb(b,a);if(_.p(b)){if(b){a=b.ub;b=b.Jc;var c="get"+_.Wc(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.m.set=function(a,b){var c=Xc(this);a+="";var d=Nb(c,a);if(d)if(a=d.ub,d=d.Jc,c="set"+_.Wc(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,Uc(this,a)};_.m.notify=function(a){var b=Xc(this);a+="";(b=Nb(b,a))?b.Jc.notify(b.ub):Uc(this,a)};
_.m.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.Wc(b);if(this[d])this[d](c);else this.set(b,c)}};_.m.setOptions=_.G.prototype.setValues;_.m.changed=_.k();var Vc={};_.G.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={Jc:this,ub:a},f={Jc:b,ub:c,ah:e};Xc(this)[a]=f;Tc(b,c)[_.Sc(e)]=e;d||Uc(this,a)};_.G.prototype.unbind=function(a){var b=Xc(this),c=b[a];c&&(c.ah&&delete Tc(c.Jc,c.ub)[_.Sc(c.ah)],this[a]=this.get(a),b[a]=null)};
_.G.prototype.unbindAll=function(){var a=(0,_.t)(this.unbind,this),b=Xc(this),c;for(c in b)a(c)};_.G.prototype.addListener=function(a,b){return _.F.addListener(this,a,b)};Yc.prototype.addListener=function(a,b,c){c=c?{bh:!1}:null;var d=!this.M.length;var e=this.M;var f=Ua(e,ad(a,b));(e=0>f?null:_.Fa(e)?e.charAt(f):e[f])?e.once=e.once&&c:this.M.push({Hc:a,context:b||null,once:c});d&&this.f();return a};Yc.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};Yc.prototype.removeListener=function(a,b){if(this.M.length){var c=this.M;a=Ua(c,ad(a,b));0<=a&&_.Va(c,a);this.M.length||this.b()}};var Zc=_.nb;_.m=_.bd.prototype;_.m.ud=_.k();_.m.sd=_.k();_.m.addListener=function(a,b){return this.M.addListener(a,b)};_.m.addListenerOnce=function(a,b){return this.M.addListenerOnce(a,b)};_.m.removeListener=function(a,b){return this.M.removeListener(a,b)};_.m.notify=function(a){_.$c(this.M,function(a){a(this.get())},this,a)};_.v(_.gd,_.G);_.m=_.gd.prototype;_.m.getAt=function(a){return this.b[a]};_.m.indexOf=function(a){for(var b=0,c=this.b.length;b<c;++b)if(a===this.b[b])return b;return-1};_.m.forEach=function(a){for(var b=0,c=this.b.length;b<c;++b)a(this.b[b],b)};_.m.setAt=function(a,b){var c=this.b[a],d=this.b.length;if(a<d)this.b[a]=b,_.F.trigger(this,"set_at",a,c),this.l&&this.l(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
_.m.insertAt=function(a,b){this.b.splice(a,0,b);fd(this);_.F.trigger(this,"insert_at",a);this.f&&this.f(a)};_.m.removeAt=function(a){var b=this.b[a];this.b.splice(a,1);fd(this);_.F.trigger(this,"remove_at",a,b);this.j&&this.j(a,b);return b};_.m.push=function(a){this.insertAt(this.b.length,a);return this.b.length};_.m.pop=function(){return this.removeAt(this.b.length-1)};_.m.getArray=_.qa("b");_.m.clear=function(){for(;this.get("length");)this.pop()};_.ed(_.gd.prototype,{length:null});_.hd.prototype.remove=function(a){var b=this.f,c=_.Sc(a);b[c]&&(delete b[c],--this.j,_.F.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.hd.prototype.contains=function(a){return!!this.f[_.Sc(a)]};_.hd.prototype.forEach=function(a){var b=this.f,c;for(c in b)a.call(this,b[c])};_.jd.prototype.mb=_.ua(1);_.jd.prototype.forEach=function(a,b){_.x(this.b,function(c,d){a.call(b,c,d)})};var si=_.Tb({zoom:_.ac(hi),heading:hi,pitch:hi});_.v(_.ld,_.G);_.v(_.md,_.bd);_.md.prototype.set=function(a){this.m&&this.get()===a||(this.Ai(a),this.notify())};_.v(nd,_.md);nd.prototype.get=_.qa("b");nd.prototype.Ai=_.pa("b");_.v(pd,_.G);_.rg=_.xd("d",void 0);_.ti=_.xd("f",void 0);_.R=_.zd();_.ui=_.yd("i",void 0);_.ug=new vd("i",3,void 0,void 0);_.vi=new vd("j",3,"",void 0);_.S=_.xd("u",void 0);_.Wf=_.yd("u",void 0);_.wi=new vd("u",3,void 0,void 0);_.xi=_.Ad();_.U=_.Bd();_.T=_.Cd();_.tg=new vd("e",3,void 0,void 0);_.V=_.xd("s",void 0);_.yi=_.yd("s",void 0);_.zi=new vd("s",3,void 0,void 0);_.Ai=_.xd("B",void 0);_.Bi=_.xd("x",void 0);_.Ci=_.yd("x",void 0);_.Di=new vd("x",3,void 0,void 0);_.Ei=new vd("y",3,void 0,void 0);var Fi;_.yg=new Ed;Fi=/'/g;Ed.prototype.b=function(a,b){var c=[];Gd(a,b,c);return c.join("&").replace(Fi,"%27")};_.K.prototype.W=function(a){return _.ud(this.data,a?(a&&a).data:null)};_.K.prototype.Ni=_.ua(2);_.v(Qd,_.G);Qd.prototype.set=function(a,b){if(null!=b&&!(b&&_.Hb(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.G.prototype.set.apply(this,arguments)};_.v(_.Rd,_.G);_.v(_.Td,Sd);_.Td.prototype.getType=_.ra("Point");_.Td.prototype.forEachLatLng=function(a){a(this.b)};_.Td.prototype.get=_.qa("b");var me=_.Xb(Ud);$d.f=void 0;$d.b=function(){return $d.f?$d.f:$d.f=new $d};$d.prototype.na=function(a,b){if(!this.b[a]){var c=this,d=c.m;ae(c.j,function(e){for(var f=e.b[a]||[],g=e.l[a]||[],h=d[a]=_.Vd(f.length,function(){delete d[a];b(e.f);for(var f=c.f[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.b[a]);delete c.f[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.b[f[l]]&&h()})}};_.m=_.ie.prototype;_.m.getId=_.qa("j");_.m.getGeometry=_.qa("b");_.m.setGeometry=function(a){var b=this.b;try{this.b=a?Ud(a):null}catch(c){_.Sb(c);return}_.F.trigger(this,"setgeometry",{feature:this,newGeometry:this.b,oldGeometry:b})};_.m.getProperty=function(a){return Nb(this.f,a)};_.m.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.f[a]=b;_.F.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
_.m.removeProperty=function(a){var b=this.getProperty(a);delete this.f[a];_.F.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.m.forEachProperty=function(a){for(var b in this.f)a(this.getProperty(b),b)};_.m.toGeoJson=function(a){var b=this;_.O("data",function(c){c.f(b,a)})};var Gi={op:"Point",kp:"LineString",POLYGON:"Polygon"};var Hi={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.m=je.prototype;_.m.contains=function(a){return this.b.hasOwnProperty(_.Sc(a))};_.m.getFeatureById=function(a){return Nb(this.f,a)};
_.m.add=function(a){a=a||{};a=a instanceof _.ie?a:new _.ie(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.Sc(a);this.b[c]=a;b&&(this.f[b]=a);var d=_.F.forward(a,"setgeometry",this),e=_.F.forward(a,"setproperty",this),f=_.F.forward(a,"removeproperty",this);this.j[c]=function(){_.F.removeListener(d);_.F.removeListener(e);_.F.removeListener(f)};_.F.trigger(this,"addfeature",{feature:a})}return a};
_.m.remove=function(a){var b=_.Sc(a),c=a.getId();if(this.b[b]){delete this.b[b];c&&delete this.f[c];if(c=this.j[b])delete this.j[b],c();_.F.trigger(this,"removefeature",{feature:a})}};_.m.forEach=function(a){for(var b in this.b)a(this.b[b])};_.ze="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");ke.prototype.get=function(a){return this.b[a]};ke.prototype.set=function(a,b){var c=this.b;c[a]||(c[a]={});_.zb(c[a],b);_.F.trigger(this,"changed",a)};ke.prototype.reset=function(a){delete this.b[a];_.F.trigger(this,"changed",a)};ke.prototype.forEach=function(a){_.yb(this.b,a)};_.v(le,_.G);le.prototype.overrideStyle=function(a,b){this.b.set(_.Sc(a),b)};le.prototype.revertStyle=function(a){a?this.b.reset(_.Sc(a)):this.b.forEach((0,_.t)(this.b.reset,this.b))};_.v(_.ne,Sd);_.m=_.ne.prototype;_.m.getType=_.ra("GeometryCollection");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.v(_.pe,Sd);_.m=_.pe.prototype;_.m.getType=_.ra("LineString");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};var re=_.Xb(_.Vb(_.pe,"google.maps.Data.LineString",!0));_.v(_.qe,Sd);_.m=_.qe.prototype;_.m.getType=_.ra("LinearRing");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};var ue=_.Xb(_.Vb(_.qe,"google.maps.Data.LinearRing",!0));_.v(_.se,Sd);_.m=_.se.prototype;_.m.getType=_.ra("MultiLineString");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.v(_.te,Sd);_.m=_.te.prototype;_.m.getType=_.ra("MultiPoint");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};_.v(_.ve,Sd);_.m=_.ve.prototype;_.m.getType=_.ra("Polygon");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var we=_.Xb(_.Vb(_.ve,"google.maps.Data.Polygon",!0));_.v(_.xe,Sd);_.m=_.xe.prototype;_.m.getType=_.ra("MultiPolygon");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.Ii=_.ac(_.Vb(_.Rd,"Map"));_.v(Ae,_.G);_.m=Ae.prototype;_.m.contains=function(a){return this.b.contains(a)};_.m.getFeatureById=function(a){return this.b.getFeatureById(a)};_.m.add=function(a){return this.b.add(a)};_.m.remove=function(a){this.b.remove(a)};_.m.forEach=function(a){this.b.forEach(a)};_.m.addGeoJson=function(a,b){return _.ye(this.b,a,b)};_.m.loadGeoJson=function(a,b,c){var d=this.b;_.O("data",function(e){e.Gl(d,a,b,c)})};_.m.toGeoJson=function(a){var b=this.b;_.O("data",function(c){c.Cl(b,a)})};
_.m.overrideStyle=function(a,b){this.f.overrideStyle(a,b)};_.m.revertStyle=function(a){this.f.revertStyle(a)};_.m.controls_changed=function(){this.get("controls")&&De(this)};_.m.drawingMode_changed=function(){this.get("drawingMode")&&De(this)};_.ed(Ae.prototype,{map:_.Ii,style:_.lb,controls:_.ac(_.Xb(_.Wb(Gi))),controlPosition:_.ac(_.Wb(_.Kf)),drawingMode:_.ac(_.Wb(Gi))});_.Ji={METRIC:0,IMPERIAL:1};_.Ki={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Li={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Mi={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Ni={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Oi=_.Tb({routes:_.Xb(_.Yb(_.Ib))},!0);var ce={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var Pi=_.ib.google.maps,Qi=$d.b(),Yi=(0,_.t)(Qi.na,Qi);Pi.__gjsload__=Yi;_.yb(Pi.modules,Yi);delete Pi.modules;var Zi=_.Tb({source:_.ii,webUrl:_.li,iosDeepLinkId:_.li});var $i=_.$b(_.Tb({placeId:_.li,query:_.li,location:_.wc}),function(a){if(a.placeId&&a.query)throw _.Rb("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.Rb("must set one of placeId or query");return a});_.v(He,_.G);
_.ed(He.prototype,{position:_.ac(_.wc),title:_.li,icon:_.ac(_.Zb([_.ii,{qg:bc("url"),then:_.Tb({url:_.ii,scaledSize:_.ac(ec),size:_.ac(ec),origin:_.ac(dc),anchor:_.ac(dc),labelOrigin:_.ac(dc),path:_.Yb(function(a){return null==a})},!0)},{qg:bc("path"),then:_.Tb({path:_.Zb([_.ii,_.Wb(Hi)]),anchor:_.ac(dc),labelOrigin:_.ac(dc),fillColor:_.li,fillOpacity:_.ki,rotation:_.ki,scale:_.ki,strokeColor:_.li,strokeOpacity:_.ki,strokeWeight:_.ki,url:_.Yb(function(a){return null==a})},!0)}])),label:_.ac(_.Zb([_.ii,{qg:bc("text"),
then:_.Tb({text:_.ii,fontSize:_.li,fontWeight:_.li,fontFamily:_.li},!0)}])),shadow:_.lb,shape:_.lb,cursor:_.li,clickable:_.mi,animation:_.lb,draggable:_.mi,visible:_.mi,flat:_.lb,zIndex:_.ki,opacity:_.ki,place:_.ac($i),attribution:_.ac(Zi)});var aj=_.ac(_.Vb(_.ld,"StreetViewPanorama"));_.v(_.Ie,He);_.Ie.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.Db;this.__gm.set&&_.id(this.__gm.set,this)};_.Ie.MAX_ZINDEX=1E6;_.ed(_.Ie.prototype,{map:_.Zb([_.Ii,aj])});_.v(Je,_.G);_.m=Je.prototype;_.m.internalAnchor_changed=function(){var a=this.get("internalAnchor");Ke(this,"attribution",a);Ke(this,"place",a);Ke(this,"internalAnchorMap",a,"map");Ke(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.Ie?Ke(this,"internalAnchorPosition",a,"internalPosition"):Ke(this,"internalAnchorPosition",a,"position")};
_.m.internalAnchorPoint_changed=Je.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.ni,b=this.get("internalPixelOffset")||_.oi;this.set("pixelOffset",new _.z(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.m.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.m.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.b.set("map",this.get("internalAnchorMap"))};
_.m.jn=function(){var a=this.get("internalAnchor");!this.b.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.m.internalContent_changed=function(){this.set("content",Ee(this.get("internalContent")))};_.m.trigger=function(a){_.F.trigger(this.b,a)};_.m.close=function(){this.b.set("map",null)};_.v(_.Le,_.G);_.ed(_.Le.prototype,{content:_.Zb([_.li,_.Yb(Ub)]),position:_.ac(_.wc),size:_.ac(ec),map:_.Zb([_.Ii,aj]),anchor:_.ac(_.Vb(_.G,"MVCObject")),zIndex:_.ki});_.Le.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Le.prototype.close=function(){this.set("map",null)};_.Me=[];_.v(Oe,_.G);Oe.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.O("directions",function(c){c.hm(b,a)})}"panel"==a&&_.Ne(this.getPanel())};_.ed(Oe.prototype,{directions:Oi,map:_.Ii,panel:_.ac(_.Yb(Ub)),routeIndex:_.ki});Pe.prototype.route=function(a,b){_.O("directions",function(c){c.zi(a,b,!0)})};Qe.prototype.getDistanceMatrix=function(a,b){_.O("distance_matrix",function(c){c.b(a,b)})};Re.prototype.getElevationAlongPath=function(a,b){_.O("elevation",function(c){c.getElevationAlongPath(a,b)})};Re.prototype.getElevationForLocations=function(a,b){_.O("elevation",function(c){c.getElevationForLocations(a,b)})};_.bj=_.Vb(_.xc,"LatLngBounds");_.Se.prototype.geocode=function(a,b){_.O("geocoder",function(c){c.geocode(a,b)})};_.v(_.Te,_.G);_.Te.prototype.map_changed=function(){var a=this;_.O("kml",function(b){b.b(a)})};_.ed(_.Te.prototype,{map:_.Ii,url:null,bounds:null,opacity:_.ki});_.dj={UNKNOWN:"UNKNOWN",OK:_.ia,INVALID_REQUEST:_.ca,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.v(Ue,_.G);_.m=Ue.prototype;_.m.Gd=function(){var a=this;_.O("kml",function(b){b.f(a)})};_.m.url_changed=Ue.prototype.Gd;_.m.driveFileId_changed=Ue.prototype.Gd;_.m.map_changed=Ue.prototype.Gd;_.m.zIndex_changed=Ue.prototype.Gd;_.ed(Ue.prototype,{map:_.Ii,defaultViewport:null,metadata:null,status:null,url:_.li,screenOverlays:_.mi,zIndex:_.ki});_.v(_.Ve,_.G);_.ed(_.Ve.prototype,{map:_.Ii});_.v(We,_.G);_.ed(We.prototype,{map:_.Ii});_.v(Xe,_.G);_.ed(Xe.prototype,{map:_.Ii});_.Ze.prototype.Zd=!0;_.Ze.prototype.Gb=_.ua(4);_.Ze.prototype.Ph=!0;_.Ze.prototype.Wd=_.ua(6);_.Ye={};_.$e("about:blank");_.bf.prototype.Ph=!0;_.bf.prototype.Wd=_.ua(5);_.bf.prototype.Zd=!0;_.bf.prototype.Gb=_.ua(3);_.af={};_.cf("<!DOCTYPE html>",0);_.cf("",0);_.cf("<br>",0);_.Jg="StopIteration"in _.ib?_.ib.StopIteration:{message:"StopIteration",stack:""};_.ff.prototype.next=function(){throw _.Jg;};_.ff.prototype.Xe=function(){return this};_.v(gf,_.ff);gf.prototype.setPosition=function(a,b,c){if(this.node=a)this.f=_.Ga(b)?b:1!=this.node.nodeType?0:this.b?-1:1;_.Ga(c)&&(this.depth=c)};
gf.prototype.next=function(){if(this.j){if(!this.node||this.l&&0==this.depth)throw _.Jg;var a=this.node;var b=this.b?-1:1;if(this.f==b){var c=this.b?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.b?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.f*(this.b?-1:1)}else this.j=!0;a=this.node;if(!this.node)throw _.Jg;return a};gf.prototype.W=function(a){return a.node==this.node&&(!this.node||a.f==this.f)};
gf.prototype.splice=function(a){var b=this.node,c=this.b?1:-1;this.f==c&&(this.f=-1*c,this.depth+=this.f*(this.b?-1:1));this.b=!this.b;gf.prototype.next.call(this);this.b=!this.b;c=_.Ka(arguments[0])?arguments[0]:arguments;for(var d=c.length-1;0<=d;d--)_.df(c[d],b);_.ef(b)};_.v(hf,gf);hf.prototype.next=function(){do hf.vb.next.call(this);while(-1==this.f);return this.node};var vg;_.v(jf,_.K);var xg;_.v(mf,_.K);var wg;_.v(nf,_.K);_.v(of,_.K);_.v(_.pf,_.K);_.v(qf,_.K);_.v(rf,_.K);_.v(sf,_.K);_.Sf={};var Df;_.Ff.prototype.W=function(a){return this==a||a instanceof _.Ff&&this.size.W(a.size)&&this.heading==a.heading&&this.b==a.b};_.fj=new _.Ff(new _.fc(256,256),0,0);_.Gf.prototype.fromLatLngToPoint=function(a,b){b=b||new _.y(0,0);var c=this.b;b.x=c.x+a.lng()*this.j;a=_.Bb(Math.sin(_.vb(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.l;return b};_.Gf.prototype.fromPointToLatLng=function(a,b){var c=this.b;return new _.D(_.wb(2*Math.atan(Math.exp((a.y-c.y)/-this.l))-Math.PI/2),(a.x-c.x)/this.j,b)};_.Jf={japan_prequake:20,japan_postquake2010:24};_.gj={NEAREST:"nearest",BEST:"best"};_.hj={DEFAULT:"default",OUTDOOR:"outdoor"};_.v(Lf,_.ld);Lf.prototype.visible_changed=function(){var a=this;!a.m&&a.getVisible()&&(a.m=!0,_.O("streetview",function(b){if(a.f)var c=a.f;b.yn(a,c)}))};_.ed(Lf.prototype,{visible:_.mi,pano:_.li,position:_.ac(_.wc),pov:_.ac(si),motionTracking:ji,photographerPov:null,location:null,links:_.Xb(_.Yb(_.Ib)),status:null,zoom:_.ki,enableCloseButton:_.mi});Lf.prototype.registerPanoProvider=function(a,b){this.set("panoProvider",{pi:a,options:b||{}})};_.v(Nf,pd);_.Of.prototype.addListener=function(a,b){this.M.addListener(a,b)};_.Of.prototype.addListenerOnce=function(a,b){this.M.addListenerOnce(a,b)};_.Of.prototype.removeListener=function(a,b){this.M.removeListener(a,b)};_.Of.prototype.b=_.ua(7);_.v(_.Pf,_.G);_.Pf.prototype.P=function(){var a=this;a.wa||(a.wa=_.ib.setTimeout(function(){a.wa=void 0;a.da()},a.dl))};_.Pf.prototype.B=function(){this.wa&&_.ib.clearTimeout(this.wa);this.wa=void 0;this.da()};var Vf;_.v(Uf,_.K);var qg;_.v(gg,_.K);var sg;_.v(hg,_.K);var pg;_.v(ig,_.K);var ng;_.v(jg,_.K);var og;_.v(kg,_.K);var mg;_.v(lg,_.K);lg.prototype.getZoom=function(){return _.L(this,2)};lg.prototype.setZoom=function(a){this.data[2]=a};_.v(Ag,_.Pf);var Bg={roadmap:0,satellite:2,hybrid:3,terrain:4},ij={0:1,2:2,3:2,4:2};_.m=Ag.prototype;_.m.Ah=_.cd("center");_.m.Ng=_.cd("zoom");_.m.changed=function(){var a=this.Ah(),b=this.Ng(),c=Cg(this);if(a&&!a.W(this.D)||this.R!=b||this.T!=c)this.j||Dg(this.b),this.P(),this.R=b,this.T=c;this.D=a};
_.m.da=function(){var a=Cg(this);if(this.j&&this.m)this.l!=a&&Dg(this.b);else{var b="",c=this.Ah(),d=this.Ng(),e=this.get("size");if(e){if(c&&(0,window.isFinite)(c.lat())&&(0,window.isFinite)(c.lng())&&1<d&&null!=a&&e&&e.width&&e.height&&this.f){_.Qf(this.f,e);if(c=_.Hf(this.F,c,d)){var f=new _.ic;f.I=Math.round(c.x-e.width/2);f.K=f.I+e.width;f.J=Math.round(c.y-e.height/2);f.L=f.J+e.height;c=f}else c=null;f=ij[a];c&&(this.m=!0,this.l=a,this.j&&this.b&&(b=Math.pow(2,Math.round(d))/256,b=new gc(Math.round(Math.pow(2,
d)/b)*b),this.j.set({ib:this.b,Ia:{min:hc(b,{Ka:c.I,La:c.J}),max:hc(b,{Ka:c.K,La:c.L})},size:{width:e.width,height:e.height}})),b=Fg(this,c,d,a,f))}this.b&&(_.Qf(this.b,e),Gg(this,b))}}};
_.m.div_changed=function(){var a=this.get("div"),b=this.f;if(a)if(b)a.appendChild(b);else{b=this.f=window.document.createElement("div");b.style.overflow="hidden";var c=this.b=window.document.createElement("img");_.F.addDomListener(b,"contextmenu",function(a){_.Cc(a);_.Ec(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.Dc(a);_.Ec(a)};_.Qf(c,_.oi);a.appendChild(b);this.da()}else b&&(Dg(b),this.f=null)};_.v(Mg,_.Rd);_.m=Mg.prototype;_.m.streetView_changed=function(){var a=this.get("streetView");a?a.set("standAlone",!1):this.set("streetView",this.__gm.B)};_.m.getDiv=function(){return this.__gm.S};_.m.panBy=function(a,b){var c=this.__gm;_.O("map",function(){_.F.trigger(c,"panby",a,b)})};_.m.panTo=function(a){var b=this.__gm;a=_.wc(a);_.O("map",function(){_.F.trigger(b,"panto",a)})};_.m.panToBounds=function(a){var b=this.__gm,c=_.Ac(a);_.O("map",function(){_.F.trigger(b,"pantolatlngbounds",c)})};
_.m.fitBounds=function(a,b){var c=this;a=_.Ac(a);_.O("map",function(d){d.fitBounds(c,a,b)})};_.ed(Mg.prototype,{bounds:null,streetView:aj,center:_.ac(_.wc),zoom:_.ki,mapTypeId:_.li,projection:null,heading:_.ki,tilt:_.ki,clickableIcons:ji});Ng.prototype.getMaxZoomAtLatLng=function(a,b){_.O("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.v(Og,_.G);Og.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.O("onion",function(a){a.b(b)})}};_.ed(Og.prototype,{map:_.Ii,tableId:_.ki,query:_.ac(_.Zb([_.ii,_.Yb(_.Ib,"not an Object")]))});_.v(_.Pg,_.G);_.Pg.prototype.map_changed=function(){var a=this;_.O("overlay",function(b){b.Qk(a)})};_.ed(_.Pg.prototype,{panes:null,projection:null,map:_.Zb([_.Ii,aj])});var Sg=Ug(_.Vb(_.D,"LatLng"));_.v(_.ah,_.G);_.ah.prototype.map_changed=_.ah.prototype.visible_changed=function(){var a=this;_.O("poly",function(b){b.b(a)})};_.ah.prototype.center_changed=function(){_.F.trigger(this,"bounds_changed")};_.ah.prototype.radius_changed=_.ah.prototype.center_changed;_.ah.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.Hb(a)){var c=this.get("map");c=c&&c.__gm.get("baseMapType");return _.If(b,a/_.Rg(c))}return null};
_.ed(_.ah.prototype,{center:_.ac(_.wc),draggable:_.mi,editable:_.mi,map:_.Ii,radius:_.ki,visible:_.mi});_.v(bh,_.G);bh.prototype.map_changed=bh.prototype.visible_changed=function(){var a=this;_.O("poly",function(b){b.f(a)})};bh.prototype.getPath=function(){return this.get("latLngs").getAt(0)};bh.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,Tg(a))}catch(b){_.Sb(b)}};_.ed(bh.prototype,{draggable:_.mi,editable:_.mi,map:_.Ii,visible:_.mi});_.v(_.ch,bh);_.ch.prototype.Sa=!0;_.ch.prototype.getPaths=function(){return this.get("latLngs")};_.ch.prototype.setPaths=function(a){this.set("latLngs",Vg(a))};_.v(_.dh,bh);_.dh.prototype.Sa=!1;_.v(_.eh,_.G);_.eh.prototype.map_changed=_.eh.prototype.visible_changed=function(){var a=this;_.O("poly",function(b){b.j(a)})};_.ed(_.eh.prototype,{draggable:_.mi,editable:_.mi,bounds:_.ac(_.Ac),map:_.Ii,visible:_.mi});_.v(fh,_.G);fh.prototype.map_changed=function(){var a=this;_.O("streetview",function(b){b.Pk(a)})};_.ed(fh.prototype,{map:_.Ii});_.gh.prototype.getPanorama=function(a,b){var c=this.b||void 0;_.O("streetview",function(d){_.O("geometry",function(e){d.Ml(a,b,e.computeHeading,e.computeOffset,c)})})};_.gh.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.gh.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.v(_.hh,_.G);_.m=_.hh.prototype;_.m.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={$:a,zoom:b,ac:null};d.__gmimt=c;_.id(this.b,d);var e=ih(this);1!=e&&(d.style.opacity=e);if(this.f){e=this.tileSize||new _.z(256,256);var f=this.j(a,b);c.ac=this.f({V:a.x,X:a.y,aa:b},e,d,f,function(){_.F.trigger(d,"load")})}return d};_.m.releaseTile=function(a){a&&this.b.contains(a)&&(this.b.remove(a),(a=a.__gmimt.ac)&&a.release())};_.m.nf=_.ua(8);
_.m.opacity_changed=function(){var a=ih(this);this.b.forEach(function(b){return b.style.opacity=a})};_.m.Tc=!0;_.ed(_.hh.prototype,{opacity:_.ki});_.v(_.jh,_.G);_.jh.prototype.getTile=ei;_.jh.prototype.tileSize=new _.z(256,256);_.jh.prototype.Tc=!0;_.v(_.kh,_.jh);_.v(_.lh,_.G);_.ed(_.lh.prototype,{attribution:_.ac(Zi),place:_.ac($i)});var jj={Animation:{BOUNCE:1,DROP:2,qp:3,lp:4},Circle:_.ah,ControlPosition:_.Kf,Data:Ae,GroundOverlay:_.Te,ImageMapType:_.hh,InfoWindow:_.Le,LatLng:_.D,LatLngBounds:_.xc,MVCArray:_.gd,MVCObject:_.G,Map:Mg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.gi,MapTypeRegistry:Qd,Marker:_.Ie,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
ANDROID:2,ZOOM_PAN:3,rp:4,Ak:5},OverlayView:_.Pg,Point:_.y,Polygon:_.ch,Polyline:_.dh,Rectangle:_.eh,ScaleControlStyle:{DEFAULT:0},Size:_.z,StreetViewPreference:_.gj,StreetViewSource:_.hj,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:Hi,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,Ak:3},event:_.F};_.zb(Ae,{Feature:_.ie,Geometry:_.k(),GeometryCollection:_.ne,LineString:_.pe,LinearRing:_.qe,MultiLineString:_.se,MultiPoint:_.te,MultiPolygon:_.xe,Point:_.Td,Polygon:_.ve});
_.zb(jj,{BicyclingLayer:_.Ve,DirectionsRenderer:Oe,DirectionsService:Pe,DirectionsStatus:{OK:_.ia,UNKNOWN_ERROR:_.ma,OVER_QUERY_LIMIT:_.ka,REQUEST_DENIED:_.la,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.na,MAX_WAYPOINTS_EXCEEDED:_.fa,NOT_FOUND:_.ha},DirectionsTravelMode:_.Ki,DirectionsUnitSystem:_.Ji,DistanceMatrixService:Qe,DistanceMatrixStatus:{OK:_.ia,INVALID_REQUEST:_.ca,OVER_QUERY_LIMIT:_.ka,REQUEST_DENIED:_.la,UNKNOWN_ERROR:_.ma,MAX_ELEMENTS_EXCEEDED:_.ea,MAX_DIMENSIONS_EXCEEDED:_.da},DistanceMatrixElementStatus:{OK:_.ia,
NOT_FOUND:_.ha,ZERO_RESULTS:_.na},ElevationService:Re,ElevationStatus:{OK:_.ia,UNKNOWN_ERROR:_.ma,OVER_QUERY_LIMIT:_.ka,REQUEST_DENIED:_.la,INVALID_REQUEST:_.ca,hp:"DATA_NOT_AVAILABLE"},FusionTablesLayer:Og,Geocoder:_.Se,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ia,UNKNOWN_ERROR:_.ma,OVER_QUERY_LIMIT:_.ka,REQUEST_DENIED:_.la,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.na,ERROR:_.ba},KmlLayer:Ue,
KmlLayerStatus:_.dj,MaxZoomService:Ng,MaxZoomStatus:{OK:_.ia,ERROR:_.ba},SaveWidget:_.lh,StreetViewCoverageLayer:fh,StreetViewPanorama:Lf,StreetViewService:_.gh,StreetViewStatus:{OK:_.ia,UNKNOWN_ERROR:_.ma,ZERO_RESULTS:_.na},StyledMapType:_.kh,TrafficLayer:We,TrafficModel:_.Li,TransitLayer:Xe,TransitMode:_.Mi,TransitRoutePreference:_.Ni,TravelMode:_.Ki,UnitSystem:_.Ji});_.ge("main",{});var oh=/'/g,ph;var Fe=arguments[0];
window.google.maps.Load(function(a,b){var c=window.google.maps;th();var d=uh(c);_.Q=new rf(a);_.kj=Math.random()<_.L(_.Q,0,1);_.lj=Math.round(1E15*Math.random()).toString(36);_.Lg=qh();_.cj=rh();_.ej=new _.gd;_.Bf=b;for(a=0;a<_.Pd(_.Q,8);++a)_.Sf[_.Nd(_.Q,8,a)]=!0;a=new _.pf(_.Q.data[3]);Ge(_.M(a,0));_.yb(jj,function(a,b){c[a]=b});c.version=_.M(a,1);window.setTimeout(function(){he(["util","stats"],function(a,b){a.f.b();a.j();d&&b.b.b({ev:"api_alreadyloaded",client:_.M(_.Q,6),key:_.vf()})})},5E3);
Df=new Cf;(a=_.M(_.Q,11))&&he(_.Ld(_.Q,12),sh(a),!0)});}).call(this,{});

// inlined
google.maps.__gjsload__('places', function(_){var xx=function(a,b){try{_.Vb(window.HTMLInputElement,"HTMLInputElement")(a)}catch(c){if(_.Sb(c),!a)return}_.O("places_impl",(0,_.t)(function(c){b=b||{};this.setValues(b);c.b(this,a);_.Ne(a)},this))},yx=function(){this.b=null;_.O("places_impl",(0,_.t)(function(a){this.b=a.l()},this))},zx=function(a){this.b=null;_.O("places_impl",(0,_.t)(function(b){this.b=b.f(a)},this))},Ax=function(a,b){_.O("places_impl",(0,_.t)(function(c){c.j(this,a);b=b||{};this.setValues(b)},this))};_.v(xx,_.G);xx.prototype.setTypes=_.dd("types",_.Xb(_.ii));xx.prototype.setComponentRestrictions=_.dd("componentRestrictions",_.ac(_.Tb({country:_.Zb([_.ii,_.Xb(_.ii)])},!0)));_.ed(xx.prototype,{place:null,bounds:_.ac(_.Ac)});yx.prototype.getPlacePredictions=function(a,b){_.O("places_impl",(0,_.t)(function(){this.b.getPlacePredictions(a,b)},this))};yx.prototype.getPredictions=yx.prototype.getPlacePredictions;yx.prototype.getQueryPredictions=function(a,b){_.O("places_impl",(0,_.t)(function(){this.b.getQueryPredictions(a,b)},this))};_.m=zx.prototype;_.m.getDetails=function(a,b){_.O("places_impl",(0,_.t)(function(){this.b.getDetails(a,b)},this))};_.m.nearbySearch=function(a,b){_.O("places_impl",(0,_.t)(function(){this.b.nearbySearch(a,b)},this))};_.m.search=zx.prototype.nearbySearch;_.m.textSearch=function(a,b){_.O("places_impl",(0,_.t)(function(){this.b.textSearch(a,b)},this))};_.m.radarSearch=function(a,b){_.O("places_impl",(0,_.t)(function(){this.b.radarSearch(a,b)},this))};_.v(Ax,_.G);_.ed(Ax.prototype,{places:null,bounds:_.ac(_.Ac)});_.ib.google.maps.places={PlacesService:zx,PlacesServiceStatus:{OK:_.ia,UNKNOWN_ERROR:_.ma,OVER_QUERY_LIMIT:_.ka,REQUEST_DENIED:_.la,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.na,NOT_FOUND:_.ha},AutocompleteService:yx,Autocomplete:xx,SearchBox:Ax,RankBy:{PROMINENCE:0,DISTANCE:1},RatingLevel:{GOOD:0,VERY_GOOD:1,EXCELLENT:2,EXTRAORDINARY:3}};_.ge("places",{});});

 // jQuery Mask Plugin v1.14.13
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a,l,d){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-c.val().length),r=a.text.length;else if(f||"0"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c,
g=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){d===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){d=c.val()}).on("focus.mask",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,
(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+"?":c)):a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");n&&(a=a.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data("mask-previus-value")||"",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data("mask-previus-caret-pos")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=10*e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&
(g=g+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},10);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+"",n=0,h=e.length,q=0,l=d.length,k=1,r="push",p=-1,t=0,y=[],v,z;f.reverse?(r="unshift",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<n&&-1<q}):(v=h-1,z=function(){return n<
h&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&n!==p&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join("");c.mapMaskdigitPositions(g,y,l);return g},mapMaskdigitPositions:function(a,
b,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){"function"===typeof f[a]&&b&&f[a].apply(this,c)};q("onChange",!0===g,m);q("onKeyPress",!0===g,m);q("onComplete",h.length===e.length,m);q("onInvalid",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e="function"===typeof e?e(c.val(),void 0,b,f):e;m.mask=e;m.options=f;m.remove=function(){var a=c.getCaret();
c.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr("placeholder",f.placeholder);b.data("mask")&&
b.attr("autocomplete","off");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr("maxlength",e.length);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is("input"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr("data-mask");b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=
!0);if(p(b,f,e))return b.data("mask",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data("mask"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,"return;"),d="function"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,
t=function(){if(p(this,b,d))return a(this).data("mask",new l(this,b,d))};a(this).each(t);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};
a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&h("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},
S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);
 /*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
* http://jqueryui.com
* Includes: widget.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if ( typeof exports === "object" ) {

		// Node/CommonJS
		factory( require( "jquery" ) );

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));
 /*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, require, window, document, JSON */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0,
        jsonAPI = $,
        jsonParse = 'parseJSON';

    if ('JSON' in window && 'parse' in JSON) {
      jsonAPI = JSON;
      jsonParse = 'parse';
    }

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));
 /*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery-ui/ui/widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.uploadName || file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(
                            paramName,
                            options.blob,
                            file.uploadName || file.name
                        );
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).then(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).then(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + ($.type(mcs) === 'function' ? mcs(o) : mcs),
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.then(send);
                } else {
                    this._sequence = this._sequence.then(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                entries = [],
                dirReader,
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                };
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _destroy: function () {
            this._destroyEventHandlers();
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));
 /**
 * Created by heliobentes on 6/21/17.
 */

$(document).ready(function () {

    //calling functions
    StartMenu();
    TriggerNotificationClose();
    CountNotifications();




    //menu toggle
    $('#main-nav > li > a').on('click', function () {
        $('#main-nav > li').removeClass('active');
        $('#main-nav > li > ul').removeClass('open');
        $(this).parent().addClass('active');
        $(this).parent().find('ul').addClass('open');
    });

    //active link
    $('#main-nav > li > ul > li > a').on('click', function () {
        $('#main-nav > li > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });


    //notifications toggle
    $('#notifications-icon,#notification-backdrop').on('click', function () {
        ClearPops();
        $('#notifications').toggleClass('open');
    });

    //clearing all notifications
    $('#btn-clear-notifications').on('click', function () {
        $('.notification-close').each(function (i, e) {
            let obj = $(e).parent();
            let delay = ($('.notification-close').length * 100) - i * 100;
            window.setTimeout(function () {
                    ClearNotification(obj);
                }, delay
            );
        });
    });

    //closing containers
    $('#close-container-2').on('click', function () {
        $('.content').removeClass('two').removeClass('three').addClass('one');
    });
    $('#close-container-3').on('click', function () {
        $('.content').removeClass('one').removeClass('three').addClass('two');
    });

    //Show Hide Full menu
    $('#menu-icon').on('click', function () {
        $('body').toggleClass('menu-open');
        if ($('body').hasClass('menu-open')) {
            localStorage.setItem("menu-status", 'open');
        } else {
            localStorage.setItem("menu-status", 'closed');
        }
    });

    setTimeout(function () {
        $('#full-loader').fadeOut('fast');
    }, 100);

    ReloadFunctions();


});


$(window).on('beforeunload', function (e) {

    $('#full-loader').fadeIn('fast');

});

//window.onpopstate = function(){ location.reload(); }


/*
 * ----------------------------
 * BEGIN intervals
 */
//var oneSecInterval = window.setInterval(function () {
//CountNotifications();
//}, 1000);
/*
 * END intervals
 * -----------------------------
 */

//functions to be loaded after a page is loaded
function ReloadFunctions(){

    //converting links to ajax
    $('a').on('click', function (e) {
        if ($(this).data('link-ajax') == true) {
            e.preventDefault();
            let url = $(this).attr('href');
            history.pushState(null, null, url);
            OpenLink(url, $(this).data('link-title'), $(this).data('link-subtitle'), $(this).data('link-data'), $(this).data('link-container'));
        }
    });

    //Starting checkboxes
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });

    //loading select2 on default configuration
    $('.select2').select2({
        language:language
    });

    //tabs
    $('.tabs .tabs-navigation li:not(.actions)').on('click',function(){
        let parent = $(this).parent();
        let index = parent.find('li').index($(this)) + 1;

        ChangeTab($(this),parent,index);


    });
    $(".tabs .next").on('click',function(){
        let parent =( $(this).parent().parent().find('.tabs-navigation').length >0)? $(this).parent().parent().find('.tabs-navigation'): $(this).closest('.tabs-navigation');

        let next = parent.find('li').index(parent.find('li.active'))+2;


        if(next>(parent.find('li').length-1) || next<=0){
            next = 1;
        }
        let obj = parent.find('li:nth-child('+next+')');


        ChangeTab(obj,parent,next);
    });
    $(".tabs .previous").on('click',function(){
        let parent =( $(this).parent().parent().find('.tabs-navigation').length >0)? $(this).parent().parent().find('.tabs-navigation'): $(this).closest('.tabs-navigation');

        let prev = parent.find('li').index(parent.find('li.active'));


        if(prev<=0 || prev>(parent.find('li').length-1)){
            prev = (parent.find('li').length-1);
        }
        let obj = parent.find('li:nth-child('+prev+')');


        ChangeTab(obj,parent,prev);
    });



    //mask fields
    MaskAllFields();

}
//masking all fields based on type and
function MaskAllFields(){
    $('.money').mask("#"+__('thousandSeparator')+"##0"+__('decimalSeparator')+"00", {reverse: true});
}

//changing tab
function ChangeTab(obj,parent,index){
    parent.find("li").removeClass('active');
    obj.addClass('active');

    parent.parent().find('.tabs-contents li').removeClass('active');
    parent.parent().find('.tabs-contents li').removeClass('open');
    parent.parent().find('.tabs-contents li:nth-child('+index+')').addClass('active');
    setTimeout(function(){
        parent.parent().find('.tabs-contents li:nth-child('+index+')').addClass('open');
    },10);
}

//removing all notifications delayed
function ClearNotification(obj) {
    obj.css('height', obj.outerHeight(false) + 'px');

    obj.addClass('close');
    setTimeout(function () {
        obj.addClass('closed');
    }, 250);
    setTimeout(function () {
        obj.remove();
        CountNotifications();
    }, 500);


}

//closing notifications
function TriggerNotificationClose() {
    $('.notification-close').on('click', function () {
        let obj = $(this).parent();
        ClearNotification(obj);
    });
}

//removing all pop
function ClearPops() {
    $('#pop .notification-close').each(function (i, e) {
        let obj = $(e).parent();
        ClearNotification(obj);

    });
}

//Adding a new pop
function AddPop(type, title, content, link1, link2, icon = null) {

    if (icon == null) {

        switch (type) {
            case 'success':
                icon = 'fa fa-check';
                break;
            case 'info':
                icon = 'fa fa-info-circle';
                break;
            case 'danger':
                icon = 'fa fa-exclamation-triangle';
                break;
            case 'warning':
                icon = 'fa fa-exclamation-circle';
                break;
            default:
                icon = 'fa fa-info-circle';
        }
    }

    let pop = '<li class="' + type + '">' +
        '            <div class="notification-icon">' +
        '                <i class="' + icon + '"></i>' +
        '            </div>' +
        '            <div class="notification-content">' +
        '                <h5 class="notification-title">' + title + '</h5>' +
        '                <p>' + content + '</p>';
    if (Array.isArray(link1)) {
        pop += '<a href="' + link1[0] + '">' + link1[1] + '</a>';
    }
    if (Array.isArray(link2)) {
        pop += '<a href="' + link1[0] + '">' + link2[1] + '</a>';

    }

    pop += '            </div>' +
        '            <i class="far fa-times-circle notification-close"></i>' +
        '        </li>';

    let obj = $(pop);
    $('#pop-list').prepend(obj);

    $('#notifications-list').prepend(obj.clone());

    TriggerNotificationClose();

    var audio = new Audio('/sounds/pop.mp3');
    audio.play();


    setTimeout(function () {
        obj.addClass('close');
    }, 6000);
    setTimeout(function () {
        obj.addClass('closed');
    }, 6250);
    setTimeout(function () {
        obj.remove();
    }, 6500);

    CountNotifications();
}


//counting notification number
function CountNotifications() {
    let notifications = $('#notifications-list li').length;
    if (notifications <= 0) {
        $('#notifications-icon').addClass('none');
        $('#no-notifications').fadeIn('fast');
    } else {
        $('#notifications-icon').removeClass('none');
        $('#no-notifications').fadeOut('slow');
    }
}

//starting menu
//check if it was open before and open it again
//keep closed if it was closed before
function StartMenu() {
    let menuStatus = localStorage.getItem("menu-status");
    if (menuStatus == 'open' || menuStatus == undefined) {
        $('body').addClass('menu-open');
    } else {
        $('body').removeClass('menu-open');
    }
}


//open links
function OpenLink(url, title = '', subtitle = '', data = '', container = 1) {
    $('#loader').show();
    let containerId = '#main-container';
    switch (container) {
        case 2:
            containerId = '#second-container';
            break;
        case 3 :
            containerId = '#thrid-container';
            break;
        default:
            containerId = '#main-container';
    }
    $.ajax({
        url: url,
        data: data,
        dataType: 'html',
        statusCode: {
            401: function () {
                AddPop('danger', __('Unauthorized!'), __("You don't have permissions to access this page")+'<br><b>' + __(title) + '</b>','','','fa fa-lock');
            }
        }
    }).always(function (content) {
        $('#loader').hide();
    }).fail(function (response) {
        if (response.status != 401) {
            AddPop('danger', __('Error!'), __('An error occurred while trying to access this function, please try again later or contact us.'));
        }
    }).done(function (content) {
        if (content == 'userNotLogged') {
            window.location = '/Login/Login';
        } else {
            $(containerId+' .content').html(content);

            document.title = title + ' | Reaws';

            if (subtitle != '') {
                title += '<small>' + subtitle + '</small>';
            }
            if (title != '') {
                $(containerId + ' .title').show();
                $(containerId + ' .title').html(title);
            } else {
                $(containerId + ' .title').hide();
            }
            ReloadFunctions();
        }
    });

}