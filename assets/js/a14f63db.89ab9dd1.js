"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[4484],{7651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(4848),a=n(8453);const s={sidebar_position:7},i="\ud83d\udccd AtIndex",o={id:"mvavg-methods/input-output/at-index",title:"\ud83d\udccd AtIndex",description:"Returns the requested element at the absolute position of the array.",source:"@site/docs/mvavg-methods/input-output/at-index.md",sourceDirName:"mvavg-methods/input-output",slug:"/mvavg-methods/input-output/at-index",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/at-index",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/input-output/at-index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccd Operator[]",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/operator-index"},next:{title:"\ud83d\udccf Size of Array",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/size-of-array"}},d={},u=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}];function c(e){const t={code:"code",em:"em",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-atindex",children:"\ud83d\udccd AtIndex"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Returns"})," the requested element at the ",(0,r.jsx)(t.strong,{children:"absolute"})," position of the ",(0,r.jsx)(t.strong,{children:"array"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"If the requested index exceed the array size, it will return a 0."})}),"\n",(0,r.jsx)(t.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"TypeOfArray at_index(size_t index)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// This will create an MovingAverage of size 4 and int type\nDataTomeMvAvg<int> intAverage(4);\n\n// Array.atIndex(): 1 0 0 0\nintAverage.push(1);\n// Array.atIndex(): 1 2 0 0\nintAverage.push(2);\n// Array.atIndex(): 1 2 3 0\nintAverage.push(3);\n// Array.atIndex(): 1 2 3 4\nintAverage.push(4)\n\n// return 1\nintAverage.at_index(0);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"-complexity",children:"\u23f1 Complexity"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Constant (O(1))"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);