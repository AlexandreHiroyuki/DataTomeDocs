(()=>{"use strict";var e,t,r,a,o,c={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=d,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var d=!0,n=0;n<r.length;n++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[n])))?r.splice(n--,1):(d=!1,o<c&&(c=o));if(d){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({42:"5db1be20",53:"935f2afb",59:"4163c1e8",193:"c4f5d8e4",195:"8d8319fb",200:"88d0af7c",214:"575d55b4",295:"85449ed6",409:"390351d6",448:"1313d70f",458:"ae32ca38",509:"30c8f9f0",514:"1be78505",556:"90c5675e",560:"0b0d2c40",572:"03d1925a",671:"0e384e19",685:"940d657d",776:"bcf23c2d",808:"b46d6778",812:"9b7df6cf",817:"14eb3368",881:"0b01fa5c",885:"a8cdcdc8",911:"fb5d4593",918:"17896441",945:"9cbaeb3d",961:"15027bd5"}[e]||e)+"."+{42:"77b7cdbb",53:"2e1d6d8a",59:"7995dd11",193:"9064b99e",195:"a71fa1e8",200:"1c78225e",214:"05fc0371",295:"91cafa7b",409:"35542c7a",448:"382849ba",458:"61c8d79b",509:"735eeb73",514:"70e5b3cf",556:"765f8631",560:"c7368649",572:"cadcc3c5",671:"9d80a330",685:"3f500c0e",776:"44f831e5",808:"15231997",812:"6f83b836",817:"e32e8901",881:"63f2a2c9",885:"28e67caf",911:"e0d85fdb",918:"ccb6a75b",945:"0c12c690",961:"d88c8f98",972:"e195df99"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="moving-average-plus-docs:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var d,n;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){d=u;break}}d||(n=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var l=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),n&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/DataTomeDocs/",f.gca=function(e){return e={17896441:"918","5db1be20":"42","935f2afb":"53","4163c1e8":"59",c4f5d8e4:"193","8d8319fb":"195","88d0af7c":"200","575d55b4":"214","85449ed6":"295","390351d6":"409","1313d70f":"448",ae32ca38:"458","30c8f9f0":"509","1be78505":"514","90c5675e":"556","0b0d2c40":"560","03d1925a":"572","0e384e19":"671","940d657d":"685",bcf23c2d:"776",b46d6778:"808","9b7df6cf":"812","14eb3368":"817","0b01fa5c":"881",a8cdcdc8:"885",fb5d4593:"911","9cbaeb3d":"945","15027bd5":"961"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),d=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,a[1](d)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],d=r[1],n=r[2],i=0;if(c.some((t=>0!==e[t]))){for(a in d)f.o(d,a)&&(f.m[a]=d[a]);if(n)var b=n(f)}for(t&&t(r);i<c.length;i++)o=c[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(b)},r=self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();