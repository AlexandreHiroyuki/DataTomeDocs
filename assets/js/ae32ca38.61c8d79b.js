"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},s="\u2b05\ufe0f Back",i={unversionedId:"class-methods/input-output/back",id:"class-methods/input-output/back",title:"\u2b05\ufe0f Back",description:"Returns the last element of the array (the oldest element added).",source:"@site/docs/class-methods/input-output/back.md",sourceDirName:"class-methods/input-output",slug:"/class-methods/input-output/back",permalink:"/DataTomeDocs/docs/class-methods/input-output/back",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/class-methods/input-output/back.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u27a1\ufe0f Front",permalink:"/DataTomeDocs/docs/class-methods/input-output/front"},next:{title:"\ud83d\udccd Operator[]",permalink:"/DataTomeDocs/docs/class-methods/input-output/operator-index"}},p={},c=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-back"},"\u2b05\ufe0f Back"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")," the last element of the ",(0,a.kt)("strong",{parentName:"p"},"array")," (the oldest element added)."),(0,a.kt)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray back()\n")),(0,a.kt)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// This will create an MovingAverage of size 4 and int type\nMovingAveragePlus<int> intAverage(4);\n\n// Will return 0\nintAverage.back();\n\n// Array: 8 0 0 0\nintAverage.push(8);\n// Array: 7 8 0 0\nintAverage.push(7);\n// Array: 12 7 8 0\nintAverage.push(12);\n// Array: 1 12 7 8\nintAverage.push(1);\n\n// Will return 8\nintAverage.back();\n")),(0,a.kt)("h3",{id:"-complexity"},"\u23f1 Complexity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constant (O(1))"),"."))}m.isMDXComponent=!0}}]);