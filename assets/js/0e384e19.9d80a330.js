"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="\ud83d\udcbe Installation",l={unversionedId:"intro",id:"intro",title:"\ud83d\udcbe Installation",description:"1. Clone the repository and download the zip file at https://github.com/AlexandreHiroyuki/DataTome.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/DataTomeDocs/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Moving Average+ Methods",permalink:"/DataTomeDocs/docs/category/moving-average-methods"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-installation"},"\ud83d\udcbe Installation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone the repository and download the zip file at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AlexandreHiroyuki/DataTome"},"https://github.com/AlexandreHiroyuki/DataTome"),".\nAlso, you can see and download all releases at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AlexandreHiroyuki/DataTome/releases"},"https://github.com/AlexandreHiroyuki/DataTome/releases"),"."),(0,n.kt)("li",{parentName:"ol"},"Drag and drop it on ",(0,n.kt)("inlineCode",{parentName:"li"},"Arduino/libraries/")," folder."),(0,n.kt)("li",{parentName:"ol"},"Include it on your code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <MovingAveragePlus.h>\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also download and install the library through the official library manager on the Arduino IDE ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/libraries/movingaverageplus/"},"https://www.arduino.cc/reference/en/libraries/movingaverageplus/"),".\nAccess ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/guide/libraries"},"https://www.arduino.cc/en/guide/libraries")," to see more details about installing libraries on Arduino IDE.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Another site that lists Arduino libraries accepted by the official library manager ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduinolibraries.info/libraries/moving-average-plus"},"https://www.arduinolibraries.info/libraries/moving-average-plus"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u2014Recommended Platform\u2014"))," Now it's possible to install this library on the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://registry.platformio.org/libraries/alexandrehiroyuki/DataTome"},"PlatformIO Registry"),"!")))),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"-getting-started"},"\ud83d\udca1 Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You can easily try out the library by running the example code."),(0,n.kt)("li",{parentName:"ol"},"Just open the subfolder ",(0,n.kt)("inlineCode",{parentName:"li"},"DataTome/examples/"),"."),(0,n.kt)("li",{parentName:"ol"},"Then try compiling the ",(0,n.kt)("inlineCode",{parentName:"li"},"moving_average_print.ino"),"."),(0,n.kt)("li",{parentName:"ol"},"Open the serial monitor."),(0,n.kt)("li",{parentName:"ol"},"Then see the array magically moving and calculating it average!")),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"-moving-average-methods"},"\ud83d\udce6 Moving Average+ Methods"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"MovingAveragePlus")," class abstracts the implementation of a circular array in order to calculate the arithmetic average of its members.\nBecause it is a circular array, the next input will replace the oldest element (represented by the first index), so it is also possible to call it a ",(0,n.kt)("strong",{parentName:"p"},"FIFO queue"),"."),(0,n.kt)("p",null,"If you are used to the C++ Standard Library, it will be easier to learn the methods since they follow the same pattern of name and logic."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Click on the link below to see more about the class methods.")))}m.isMDXComponent=!0}}]);