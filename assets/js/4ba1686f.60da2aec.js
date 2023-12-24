"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[811],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3},o="\ud83d\udce4 Get Partial",l={unversionedId:"mvavg-methods/partials/get-partial",id:"mvavg-methods/partials/get-partial",title:"\ud83d\udce4 Get Partial",description:"Returns the Partial average result of the requested ID.",source:"@site/docs/mvavg-methods/partials/get-partial.md",sourceDirName:"mvavg-methods/partials",slug:"/mvavg-methods/partials/get-partial",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/get-partial",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/partials/get-partial.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0 Create Partial",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/create-partial"},next:{title:"Analysis Methods",permalink:"/DataTomeDocs/docs/category/analysis-methods"}},s={},p=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1Complexity",id:"complexity",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-get-partial"},"\ud83d\udce4 Get Partial"),(0,n.kt)("p",null,"Returns the Partial average result of the requested ID.\nUse the ID provided by the creation method to access the partial result.\nRequesting an invalid ID will return a 0."),(0,n.kt)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray get_partial(size_t id)\n")),(0,n.kt)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"DataTomeMvAvg<unsigned int, unsigned long int> intAverage(10);\n\nsize_t partial_id = intAverage.create_partial(3);\nsize_t partial_2_id = intAverage.create_partial(5);\n\n// 10 4 3 2 1 0 0 0 0 0\nintAverage.push(1).push(2).push(3).push(4).push(10);\n\n// (10 + 4 + 3) / 3 = 5\nintAverage.get_partial(partial_id);\n// (10 + 4 + 3 + 2 + 1) / 5 = 4\nintAverage.get_partial(partial_2_id);\n")),(0,n.kt)("h3",{id:"complexity"},"\u23f1Complexity"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Constant (O(1))"),"."))}m.isMDXComponent=!0}}]);