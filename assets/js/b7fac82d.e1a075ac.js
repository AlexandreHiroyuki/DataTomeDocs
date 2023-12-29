"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},s="\ud83d\udcd0 Resize",i={unversionedId:"mvavg-methods/array-methods/resize",id:"mvavg-methods/array-methods/resize",title:"\ud83d\udcd0 Resize",description:"Changes the array size.",source:"@site/docs/mvavg-methods/array-methods/resize.md",sourceDirName:"mvavg-methods/array-methods",slug:"/mvavg-methods/array-methods/resize",permalink:"/DataTomeDocs/docs/mvavg-methods/array-methods/resize",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/array-methods/resize.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Array Methods",permalink:"/DataTomeDocs/docs/category/array-methods"},next:{title:"\ud83e\uddf9 Clear",permalink:"/DataTomeDocs/docs/mvavg-methods/array-methods/clear"}},p={},l=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-resize"},"\ud83d\udcd0 Resize"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Changes")," the ",(0,a.kt)("strong",{parentName:"p"},"array")," ",(0,a.kt)("strong",{parentName:"p"},"size"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Methods that ",(0,a.kt)("strong",{parentName:"em"},"return pointers")," allow ",(0,a.kt)("strong",{parentName:"em"},"chained calls"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"DataTomeMvAvg<unsigned int> intAverage(10);\n\nunsigned int x = 5, y = 10;\nunsigned int result, first, last;\n\nresult = intAverage.push(x).push(y).get();\nfirst = intAverage.push(56).front();\nlast = intAverage.push(8).back();\n")),(0,a.kt)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"DataTomeMvAvg<TypeOfArray, TypeOfSum> &resize(size_t new_size)\n")),(0,a.kt)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"DataTomeMvAvg<unsigned int, unsigned long int> intAverage(3);\n\n// 3 2 1\nintAverage.push(1).push(2).push(3);\n\n// 3 2 1 0 0\nintAverage.resize(5);\n\n// 4 3 2 1 0\nintAverage.push(4);\n")),(0,a.kt)("h3",{id:"-complexity"},"\u23f1 Complexity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linear (O(n))")," in the ",(0,a.kt)("strong",{parentName:"p"},"array size"),"."))}u.isMDXComponent=!0}}]);