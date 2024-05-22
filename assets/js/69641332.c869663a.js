"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[237],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const o={sidebar_position:6},s="\ud83d\udcc9 Lowest Mode",i={unversionedId:"analysis-methods/analysis/lowest-mode",id:"analysis-methods/analysis/lowest-mode",title:"\ud83d\udcc9 Lowest Mode",description:"Returns the lowest mode of the data points pushed in the array.",source:"@site/docs/analysis-methods/analysis/lowest-mode.md",sourceDirName:"analysis-methods/analysis",slug:"/analysis-methods/analysis/lowest-mode",permalink:"/DataTomeDocs/docs/analysis-methods/analysis/lowest-mode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/analysis-methods/analysis/lowest-mode.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcca Median",permalink:"/DataTomeDocs/docs/analysis-methods/analysis/median"},next:{title:"\ud83d\udcc8 Highest Mode",permalink:"/DataTomeDocs/docs/analysis-methods/analysis/highest-mode"}},l={},p=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"-lowest-mode"},"\ud83d\udcc9 Lowest Mode"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns")," the ",(0,r.yg)("strong",{parentName:"p"},"lowest mode")," of the ",(0,r.yg)("strong",{parentName:"p"},"data points")," pushed in the ",(0,r.yg)("strong",{parentName:"p"},"array"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The mode is the value that appears most frequently in a data set. A set of data may have one mode, more than one mode, or no mode at all.\nTo avoid confusion, the lowest mode is returned in case of multiple modes.")),(0,r.yg)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray lowest_mode()\n")),(0,r.yg)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"DataTomeAnalysis<int, long int> intAverage(10);\n\nint mode_data[10] = {1, 2, 3, 3, 3, 3, 4, 4, 4, 4};\n\nfor (size_t i = 0; i < 10; i++) {\n  intAverage.push(mode_data[i]);\n}\n\nintAverage.lowest_mode(); // Will return 3\n")),(0,r.yg)("h3",{id:"-complexity"},"\u23f1 Complexity"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Linearithmic (O(n log n))")," in the number of data points in the array."))}d.isMDXComponent=!0}}]);