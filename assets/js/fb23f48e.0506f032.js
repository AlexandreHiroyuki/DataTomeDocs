"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="\u27a1\ufe0f Front",p={unversionedId:"mvavg-methods/input-output/front",id:"mvavg-methods/input-output/front",title:"\u27a1\ufe0f Front",description:"Returns the first element of the array (the most recent element added).",source:"@site/docs/mvavg-methods/input-output/front.md",sourceDirName:"mvavg-methods/input-output",slug:"/mvavg-methods/input-output/front",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/front",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/input-output/front.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce4 Get By Brute",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/get-by-brute"},next:{title:"\u2b05\ufe0f Back",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/back"}},u={},l=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}],c={toc:l},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-front"},"\u27a1\ufe0f Front"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")," the first element of the ",(0,o.kt)("strong",{parentName:"p"},"array")," (the most recent element added)."),(0,o.kt)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray front()\n")),(0,o.kt)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// This will create an MovingAverage of size 4 and int type\nDataTomeMvAvg<int> intAverage(4);\n\n// Will return 0\nintAverage.front();\n\n// Array: 8 0 0 0\nintAverage.push(8);\n\n// Will return 8\nintAverage.front();\n")),(0,o.kt)("h3",{id:"-complexity"},"\u23f1 Complexity"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constant (O(1))"),"."))}m.isMDXComponent=!0}}]);