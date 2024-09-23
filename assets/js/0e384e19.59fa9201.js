"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[3976],{619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(4848),a=t(8453);const r={sidebar_position:1},o="\ud83d\udcbe Installation",l={id:"intro",title:"\ud83d\udcbe Installation",description:"PlatformIO Installation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/DataTomeDocs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Moving Average Methods",permalink:"/DataTomeDocs/docs/category/moving-average-methods"}},s={},d=[{value:"PlatformIO Installation",id:"platformio-installation",level:2},{value:"Manual Installation on Arduino IDE",id:"manual-installation-on-arduino-ide",level:2},{value:"\ud83d\udca1 Getting Started",id:"-getting-started",level:2},{value:"\ud83d\udce6 Data Tome Methods",id:"-data-tome-methods",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-installation",children:"\ud83d\udcbe Installation"})}),"\n",(0,i.jsx)(n.h2,{id:"platformio-installation",children:"PlatformIO Installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open PlatformIO Core CLI ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.li,{children:["Change directory (cd) to the PlatformIO project where platformio.ini is located. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.li,{children:"Install Data Tome library by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pio pkg install --library "alexandrehiroyuki/DataTome"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"manual-installation-on-arduino-ide",children:"Manual Installation on Arduino IDE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the repository and download the zip file at ",(0,i.jsx)(n.a,{href:"https://github.com/AlexandreHiroyuki/DataTome",children:"https://github.com/AlexandreHiroyuki/DataTome"}),".\nAlso, you can see and download all releases at ",(0,i.jsx)(n.a,{href:"https://github.com/AlexandreHiroyuki/DataTome/releases",children:"https://github.com/AlexandreHiroyuki/DataTome/releases"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Drag and drop it on ",(0,i.jsx)(n.code,{children:"Arduino/libraries/"})," folder."]}),"\n",(0,i.jsx)(n.li,{children:"Include it on your code."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <DataTome.h>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can also download and install the library through the official library manager on the Arduino IDE ",(0,i.jsx)(n.a,{href:"https://www.arduino.cc/reference/en/libraries/datatome/",children:"https://www.arduino.cc/reference/en/libraries/datatome/"}),".\nAccess ",(0,i.jsx)(n.a,{href:"https://www.arduino.cc/en/guide/libraries",children:"https://www.arduino.cc/en/guide/libraries"})," to see more details about installing libraries on Arduino IDE."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"\u2014Recommended Platform\u2014"})})," Now it's possible to install this library on the\xa0",(0,i.jsx)(n.a,{href:"https://registry.platformio.org/libraries/alexandrehiroyuki/DataTome",children:"PlatformIO Registry"}),"!"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-getting-started",children:"\ud83d\udca1 Getting Started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"You can easily try out the library by running the example code."}),"\n",(0,i.jsxs)(n.li,{children:["Just open the subfolder ",(0,i.jsx)(n.code,{children:"DataTome/examples/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Then try compiling the ",(0,i.jsx)(n.code,{children:"moving_average_print.ino"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Open the serial monitor."}),"\n",(0,i.jsx)(n.li,{children:"Then see the array magically moving and calculating it average!"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-data-tome-methods",children:"\ud83d\udce6 Data Tome Methods"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"DataTome"})," classes abstracts the implementation of a circular array in order to calculate the arithmetic average of its members.\nBecause it is a circular array, the next input will replace the oldest element (represented by the first index), so it is also possible to call it a ",(0,i.jsx)(n.strong,{children:"FIFO queue"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If you are used to the C++ Standard Library, it will be easier to learn the methods since they follow the same pattern of name and logic."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Click on the link below to see more about the class methods."})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);