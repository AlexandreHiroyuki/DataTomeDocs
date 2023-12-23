"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},s="\ud83d\udce4 Get By Brute",i={unversionedId:"class-methods/input-output/get-by-brute",id:"class-methods/input-output/get-by-brute",title:"\ud83d\udce4 Get By Brute",description:"Returns the average of the N last added data points requested.",source:"@site/docs/class-methods/input-output/get-by-brute.md",sourceDirName:"class-methods/input-output",slug:"/class-methods/input-output/get-by-brute",permalink:"/DataTomeDocs/docs/class-methods/input-output/get-by-brute",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/class-methods/input-output/get-by-brute.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce4 Get",permalink:"/DataTomeDocs/docs/class-methods/input-output/get"},next:{title:"\u27a1\ufe0f Front",permalink:"/DataTomeDocs/docs/class-methods/input-output/front"}},p={},u=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}],l={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-get-by-brute"},"\ud83d\udce4 Get By Brute"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")," the ",(0,a.kt)("strong",{parentName:"p"},"average")," of the ",(0,a.kt)("strong",{parentName:"p"},"N")," last added data points requested."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If the number of requested points exceed the array size, it will return the average of points already added.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u26a0 Pay attention to how get_by_brute is significantly ",(0,a.kt)("strong",{parentName:"em"},"slower")," than the pure get function. If you are looking for a more efficient solution, search for the partial average concept in this library.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"pathname:///docs/class-methods/partials/intro"},"\ud83d\udcca Partials")),(0,a.kt)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray get_by_brute(size_t n_points)\n")),(0,a.kt)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// This will create an MovingAverage of size 4 and int type\n// Array: 0 0 0 0\nMovingAveragePlus<int> intAverage(4);\n\n// Array: 8 0 0 0\nintAverage.push(8);\n// Array: 8 8 0 0\nintAverage.push(8);\n// Array: 4 8 8 0\nintAverage.push(4);\n// Array: 4 4 8 8\nintAverage.push(4);\n\n// Returns the average\n// Value: (8 + 8 + 4 + 4) / 4 = 6\nintAverage.get_by_brute(4);\n\n// Value: (4 + 4) / 2 = 4\nintAverage.get_by_brute(2);\n")),(0,a.kt)("h3",{id:"-complexity"},"\u23f1 Complexity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linear (O(n))")," in the ",(0,a.kt)("strong",{parentName:"p"},"data points requested"),"."))}d.isMDXComponent=!0}}]);