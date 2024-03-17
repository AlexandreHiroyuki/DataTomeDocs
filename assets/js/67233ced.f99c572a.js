"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[546],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:2},i="\ud83d\udee0 Constructor",s={unversionedId:"mvavg-methods/constructor",id:"mvavg-methods/constructor",title:"\ud83d\udee0 Constructor",description:"\ud83d\udcdd Syntax",source:"@site/docs/mvavg-methods/constructor.md",sourceDirName:"mvavg-methods",slug:"/mvavg-methods/constructor",permalink:"/DataTomeDocs/docs/mvavg-methods/constructor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/constructor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Moving Average Methods",permalink:"/DataTomeDocs/docs/mvavg-methods/intro"},next:{title:"Input/Output Methods",permalink:"/DataTomeDocs/docs/category/inputoutput-methods"}},l={},c=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:2},{value:"\ud83d\udd2e Example",id:"-example",level:2},{value:"\u23f1 Complexity",id:"-complexity",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"-constructor"},"\ud83d\udee0 Constructor"),(0,a.yg)("h2",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Passing only size as an argument\nDataTomeMvAvg<class TypeOfArray, class TypeOfSum> yourAverageName(size_t size);\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Template parameter"),".\n",(0,a.yg)("strong",{parentName:"li"},"TypeOfArray")," is the ",(0,a.yg)("strong",{parentName:"li"},"type of the array elements"),".\n",(0,a.yg)("strong",{parentName:"li"},"TypeOfSum")," is the ",(0,a.yg)("strong",{parentName:"li"},"type of the sum of the array elements"),", it is equal to ",(0,a.yg)("strong",{parentName:"li"},"TypeOfArray")," by default.")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Passing only size as an argument"),".",(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"The class will create an array with the ",(0,a.yg)("strong",{parentName:"p"},"size")," passed as an argument and, by ",(0,a.yg)("strong",{parentName:"p"},"default"),", all positions will initialize with 0.")))),(0,a.yg)("h2",{id:"-example"},"\ud83d\udd2e Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// This will create an MovingAverage of size 10, unsigned int type, and acumulator type as unsigned int\nDataTomeMvAvg<unsigned int> intAverage(10);\n\n// This will create an MovingAverage of size 10, unsigned int type, and acumulator type as long unsigned int\nDataTomeMvAvg<unsigned int, unsigned long int> intAverage(10);\n")),(0,a.yg)("h2",{id:"-complexity"},"\u23f1 Complexity"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Constant (O(1))"),"."))}m.isMDXComponent=!0}}]);