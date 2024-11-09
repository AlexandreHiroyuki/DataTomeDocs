"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[7964],{137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"mvavg-methods/input-output/operator-index","title":"\ud83d\udccd Operator[]","description":"Returns the requested element at the relative position of the array (the first index is aways the most recent element added).","source":"@site/docs/mvavg-methods/input-output/operator-index.md","sourceDirName":"mvavg-methods/input-output","slug":"/mvavg-methods/input-output/operator-index","permalink":"/DataTomeDocs/docs/mvavg-methods/input-output/operator-index","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/input-output/operator-index.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\u2b05\ufe0f Back","permalink":"/DataTomeDocs/docs/mvavg-methods/input-output/back"},"next":{"title":"\ud83d\udccd AtIndex","permalink":"/DataTomeDocs/docs/mvavg-methods/input-output/at-index"}}');var a=n(4848),s=n(8453);const o={sidebar_position:6},i="\ud83d\udccd Operator[]",d={},c=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}];function p(e){const t={code:"code",em:"em",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-operator",children:"\ud83d\udccd Operator[]"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Returns"})," the requested element at the ",(0,a.jsx)(t.strong,{children:"relative"})," position of the ",(0,a.jsx)(t.strong,{children:"array"})," (the first index is aways the most recent element added)."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"If the requested index exceed the array size, it will return a 0."})}),"\n",(0,a.jsx)(t.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"TypeOfArray operator[](int index)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// This will create an MovingAverage of size 4 and int type\nDataTomeMvAvg<int> intAverage(4);\n\n// Array[]: 1 0 0 0\nintAverage.push(1);\n// Array[]: 2 1 0 0\nintAverage.push(2);\n// Array[]: 3 2 1 0\nintAverage.push(3);\n// Array[]: 4 3 2 1\nintAverage.push(4);\n\n// Return 4\nintAverage[0];\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-complexity",children:"\u23f1 Complexity"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Constant (O(1))"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);