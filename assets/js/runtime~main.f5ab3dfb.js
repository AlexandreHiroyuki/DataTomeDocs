(()=>{"use strict";var e,a,c,t,r,d={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var c=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=d,b.c=f,e=[],b.O=(a,c,t,r)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var f=!0,o=0;o<c.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(f=!1,r<d&&(d=r));if(f){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,c({}),c([]),c(c)];for(var f=2&t&&e;"object"==typeof f&&!~a.indexOf(f);f=c(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({237:"69641332",764:"8987b6eb",797:"837f075b",1181:"2ad98251",1235:"a7456010",1546:"67233ced",1969:"ced3d221",2619:"eda1bfef",2634:"c4f5d8e4",2722:"aa9bb53d",2735:"247bbb9b",2754:"f3ab9f5c",3193:"fb23f48e",3562:"a19fe8a5",3719:"00d42046",3735:"5e208901",3810:"cae6103f",3976:"0e384e19",4239:"cdd361af",4361:"433bfda7",4472:"c98bf6c8",4484:"a14f63db",4766:"373f06f0",4908:"52fbc915",4988:"0c2335e2",5047:"47053160",5437:"af001fcc",5545:"85fa0000",5735:"7e0cf7d6",5742:"aba21aa0",6161:"93064bcc",6438:"cdc6cb26",6637:"dbd5e9d7",6969:"14eb3368",7098:"a7bd4aaa",7505:"c81c9e49",7582:"0d24d16d",7923:"d5dae577",7964:"63546490",8083:"fb0468fd",8289:"36917c34",8394:"6e33b6c9",8401:"17896441",8489:"186790cb",9048:"a94703ab",9214:"32f68345",9547:"801bc549",9565:"c35693de",9629:"266d0a49",9647:"5e95c892"}[e]||e)+"."+{237:"f31d5c93",764:"0d5c9642",797:"c67188c4",1181:"448975dd",1235:"e7f12e6f",1546:"29e5250d",1969:"57c18b08",2237:"6d055af0",2619:"631093df",2634:"10a97c91",2722:"f86b511b",2735:"24fc8d40",2754:"29e78cd6",3193:"7b3131f1",3562:"b97b7a90",3719:"09d79d71",3735:"7643e145",3810:"73baa786",3976:"59fa9201",4239:"d9947552",4361:"20463d51",4472:"19c56d44",4484:"89ab9dd1",4766:"004ae65a",4908:"bc6a04e4",4988:"60be2cbd",5047:"7d7a614c",5437:"f5eae291",5545:"c1cc73f9",5735:"825a313e",5742:"505df4e8",6161:"f15b8ca8",6438:"26f7041b",6637:"06d4245f",6969:"6d5aee6f",7098:"eede67ba",7505:"9a1b0950",7582:"816f4a71",7923:"b3a51f0d",7964:"11d721b6",8083:"2c2c3ea8",8289:"813534c5",8394:"3dc071bc",8401:"a6f38523",8489:"5c01f415",9048:"4b0e2d28",9214:"3030b16f",9547:"5f2cc13c",9565:"e461bd24",9629:"f604838c",9647:"c5cf25a7"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="moving-average-plus-docs:",b.l=(e,a,c,d)=>{if(t[e])t[e].push(a);else{var f,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",r+c),f.src=e),t[e]=[a];var l=(a,c)=>{f.onerror=f.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/DataTomeDocs/",b.gca=function(e){return e={17896441:"8401",47053160:"5047",63546490:"7964",69641332:"237","8987b6eb":"764","837f075b":"797","2ad98251":"1181",a7456010:"1235","67233ced":"1546",ced3d221:"1969",eda1bfef:"2619",c4f5d8e4:"2634",aa9bb53d:"2722","247bbb9b":"2735",f3ab9f5c:"2754",fb23f48e:"3193",a19fe8a5:"3562","00d42046":"3719","5e208901":"3735",cae6103f:"3810","0e384e19":"3976",cdd361af:"4239","433bfda7":"4361",c98bf6c8:"4472",a14f63db:"4484","373f06f0":"4766","52fbc915":"4908","0c2335e2":"4988",af001fcc:"5437","85fa0000":"5545","7e0cf7d6":"5735",aba21aa0:"5742","93064bcc":"6161",cdc6cb26:"6438",dbd5e9d7:"6637","14eb3368":"6969",a7bd4aaa:"7098",c81c9e49:"7505","0d24d16d":"7582",d5dae577:"7923",fb0468fd:"8083","36917c34":"8289","6e33b6c9":"8394","186790cb":"8489",a94703ab:"9048","32f68345":"9214","801bc549":"9547",c35693de:"9565","266d0a49":"9629","5e95c892":"9647"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var d=b.p+b.u(a),f=new Error;b.l(d,(c=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",f.name="ChunkLoadError",f.type=r,f.request=d,t[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,d=c[0],f=c[1],o=c[2],n=0;if(d.some((a=>0!==e[a]))){for(t in f)b.o(f,t)&&(b.m[t]=f[t]);if(o)var i=o(b)}for(a&&a(c);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},c=self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();