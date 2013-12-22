window.Modernizr=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return d(hb.join(a+";")+(b||""))}function f(a,b){return-1!==(""+a).indexOf(b)}function g(a,b){for(var d in a)if(r[a[d]]!==c&&(!b||b(a[d],q)))return!0}function h(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=[a,"Webkit"+c,"Moz"+c,"O"+c,"ms"+c,"Khtml"+c];return!!g(d,b)}function i(){l[O]=function(a){for(var b=0,c=a.length;c>b;b++)kb[a[b]]=!!(a[b]in s);return kb}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),l[P]=function(a){for(var d,e=0,f=a.length;f>e;e++)s.setAttribute("type",a[e]),d="text"!==s.type,d&&(s.value=fb,/^range$/.test(s.type)&&s.style.WebkitAppearance!==c?(o.appendChild(s),d=b.defaultView.getComputedStyle&&"textfield"!==b.defaultView.getComputedStyle(s,null).WebkitAppearance&&0!==s.offsetHeight,o.removeChild(s)):/^(search|tel)$/.test(s.type)||(d=/^(url|email)$/.test(s.type)?s.checkValidity&&s.checkValidity()===!1:s.value!=fb)),jb[a[e]]=!!d;return jb}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var j,k="1.5",l={},m=!0,n=75,o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=b.createElement("input"),t="canvas",u="canvastext",v="rgba",w="hsla",x="multiplebgs",y="backgroundsize",z="borderimage",A="borderradius",B="boxshadow",C="opacity",D="cssanimations",E="csscolumns",F="cssgradients",G="cssreflections",H="csstransforms",I="csstransforms3d",J="csstransitions",K="fontface",L="geolocation",M="video",N="audio",O="input",P=O+"types",Q="svg",R="smil",S=Q+"clippaths",T="background",U=T+"Color",V="canPlayType",W="localStorage",X="sessionStorage",Y="applicationCache",Z="webworkers",$="hashchange",_="crosswindowmessaging",ab="historymanagement",bb="draganddrop",cb="websqldatabase",db="indexedDB",eb="websockets",fb=":)",gb=Object.prototype.toString,hb=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),ib={},jb={},kb={},lb=[],mb=function(){function a(a,d){var e=1==arguments.length;if(e&&c[a])return c[a];d=d||document.createElement(b[a]||"div"),a="on"+a;var f=a in d;return!f&&d.setAttribute&&(d.setAttribute(a,"return;"),f="function"==typeof d[a]),d=null,e?c[a]=f:f}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},c={};return a}(),nb={}.hasOwnProperty;j="undefined"!=typeof nb&&"undefined"!=typeof nb.call?function(a,b){return nb.call(a,b)}:function(a,b){return b in a&&"undefined"==typeof a.constructor.prototype[b]},ib[t]=function(){return!!b.createElement(t).getContext},ib[u]=function(){return!(!ib[t]()||"function"!=typeof b.createElement(t).getContext("2d").fillText)},ib[L]=function(){return!!navigator.geolocation},ib[_]=function(){return!!a.postMessage},ib[cb]=function(){var b=!!a.openDatabase;if(b)try{b=!!openDatabase(p+"testdb","1.0",p+"testdb",2e4)}catch(c){b=!1}return b},ib[db]=function(){return!!a[db]},ib[$]=function(){return mb($,a)&&(document.documentMode===c||document.documentMode>7)},ib[ab]=function(){return!(!a.history||!history.pushState)},ib[bb]=function(){return mb("drag")&&mb("dragstart")&&mb("dragenter")&&mb("dragover")&&mb("dragleave")&&mb("dragend")&&mb("drop")},ib[eb]=function(){return"WebSocket"in a},ib[v]=function(){return d(T+"-color:rgba(150,255,150,.5)"),f(r[U],v)},ib[w]=function(){return d(T+"-color:hsla(120,40%,100%,.5)"),f(r[U],v)||f(r[U],w)},ib[x]=function(){return d(T+":url(//:),url(//:),red url(//:)"),new RegExp("(url\\s*\\(.*?){3}").test(r[T])},ib[y]=function(){return h(T+"Size")},ib[z]=function(){return h("borderImage")},ib[A]=function(){return h("borderRadius","",function(a){return f(a,"orderRadius")})},ib[B]=function(){return h("boxShadow")},ib[C]=function(){return e("opacity:.5"),f(r[C],"0.5")},ib[D]=function(){return h("animationName")},ib[E]=function(){return h("columnCount")},ib[F]=function(){var a=T+"-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+hb.join(b+a)+hb.join(c+a)).slice(0,-a.length)),f(r.backgroundImage,"gradient")},ib[G]=function(){return h("boxReflect")},ib[H]=function(){return!!g(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},ib[I]=function(){var a=!!g(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);if(a){var c=document.createElement("style"),d=b.createElement("div");c.textContent="@media ("+hb.join("transform-3d),(")+"modernizr){#modernizr{height:3px}}",b.getElementsByTagName("head")[0].appendChild(c),d.id="modernizr",o.appendChild(d),a=3===d.offsetHeight,c.parentNode.removeChild(c),d.parentNode.removeChild(d)}return a},ib[J]=function(){return h("transitionProperty")},ib[K]=function(){function a(){j.parentNode&&(c=l[K]=d!==h.offsetWidth*h.offsetHeight,o.className=o.className.replace(/(no-)?fontface\b/,"")+(c?" ":" no-")+K)}var c,d,e,f,g=b.createElement("style"),h=b.createElement("span"),i=!1,j=b.body;return g.textContent="@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}",b.getElementsByTagName("head")[0].appendChild(g),h.setAttribute("style","font:99px _,arial,helvetica;position:absolute;visibility:hidden"),j||(j=o.appendChild(b.createElement(K)),i=!0),h.innerHTML="........",h.id="fonttest",j.appendChild(h),d=h.offsetWidth*h.offsetHeight,h.style.font="99px testfont,_,arial,helvetica",c=d!==h.offsetWidth*h.offsetHeight,setTimeout(a,n),setTimeout(a,2*n),addEventListener("load",function(){a(),(f=!0)&&e&&e(c),setTimeout(function(){i||(j=h),j.parentNode.removeChild(j),g.parentNode.removeChild(g)},50)},!1),l._fontfaceready=function(a){f||c?a(c):e=a},c||d!==h.offsetWidth},ib[M]=function(){var a=b.createElement(M),c=!!a[V];return c&&(c=new Boolean(c),c.ogg=a[V]('video/ogg; codecs="theora"'),c.h264=a[V]('video/mp4; codecs="avc1.42E01E"'),c.webm=a[V]('video/webm; codecs="vp8, vorbis"')),c},ib[N]=function(){var a=b.createElement(N),c=!!a[V];return c&&(c=new Boolean(c),c.ogg=a[V]('audio/ogg; codecs="vorbis"'),c.mp3=a[V]("audio/mpeg;"),c.wav=a[V]('audio/wav; codecs="1"'),c.m4a=a[V]("audio/x-m4a;")||a[V]("audio/aac;")),c},ib[W]=function(){try{return"localStorage"in a&&null!==a[W]}catch(b){return!1}},ib[X]=function(){try{return"sessionStorage"in a&&null!==a[X]}catch(b){return!1}},ib[Z]=function(){return!!a.Worker},ib[Y]=function(){var b=a[Y];return!(!b||"undefined"==typeof b.status||"function"!=typeof b.update||"function"!=typeof b.swapCache)},ib[Q]=function(){return!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect},ib[R]=function(){return!!b.createElementNS&&/SVG/.test(gb.call(b.createElementNS("http://www.w3.org/2000/svg","animate")))},ib[S]=function(){return!!b.createElementNS&&/SVG/.test(gb.call(b.createElementNS("http://www.w3.org/2000/svg","clipPath")))};for(var ob in ib)j(ib,ob)&&lb.push(((l[ob.toLowerCase()]=ib[ob]())?"":"no-")+ob.toLowerCase());return l[O]||i(),l.addTest=function(a,b){return a=a.toLowerCase(),l[a]?void 0:(b=!!b(),o.className+=" "+(b?"":"no-")+a,l[a]=b,l)},d(""),q=s=null,m&&function(){var a=b.createElement("div");return a.innerHTML="<elem></elem>",1!==a.childNodes.length}()&&!function(a,b){function c(a,d){if(i[a])i[a].styleSheet.cssText+=d;else{var e=g[n],f=b[o]("style");f.media=a,e.insertBefore(f,e[n]),i[a]=f,c(a,d)}}function d(a,b){for(var e=new RegExp("\\b("+j+")\\b(?!.*[;}])","gi"),f=function(a){return".iepp_"+a},g=-1;++g<a.length;)b=a[g].media||b,d(a[g].imports,b),c(b,a[g].cssText.replace(e,f))}function e(){for(var a,c,e,f=b.getElementsByTagName("*"),g=new RegExp("^"+j+"$","i"),i=-1;++i<f.length;)(a=f[i])&&(e=a.nodeName.match(g))&&(c=new RegExp("^\\s*<"+e+"(.*)\\/"+e+">\\s*$","i"),h.innerHTML=a.outerHTML.replace(/\r|\n/g," ").replace(c,"block"==a.currentStyle.display?"<div$1/div>":"<span$1/span>"),c=h.childNodes[0],c.className+=" iepp_"+e,c=l[l.length]=[a,c],a.parentNode.replaceChild(c[1],c[0]));d(b.styleSheets,"all")}function f(){for(var a,b=-1;++b<l.length;)l[b][1].parentNode.replaceChild(l[b][0],l[b][1]);for(a in i)g[n].removeChild(i[a]);i={},l=[]}for(var g=b.documentElement,h=b.createDocumentFragment(),i={},j="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",k=j.split("|"),l=[],m=-1,n="firstChild",o="createElement";++m<k.length;)b[o](k[m]),h[o](k[m]);h=h.appendChild(b[o]("div")),a.attachEvent("onbeforeprint",e),a.attachEvent("onafterprint",f)}(this,b),l._enableHTML5=m,l._version=k,o.className=o.className.replace(/\bno-js\b/,"")+" js",o.className+=" "+lb.join(" "),l}(this,this.document);