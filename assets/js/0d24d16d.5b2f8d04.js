"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[7582],{9315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"mvavg-methods/input-output/get-by-brute","title":"\ud83d\udce4 Get By Brute","description":"Returns the average of the N last added data points requested.","source":"@site/docs/mvavg-methods/input-output/get-by-brute.md","sourceDirName":"mvavg-methods/input-output","slug":"/mvavg-methods/input-output/get-by-brute","permalink":"/DataTomeDocs/docs/mvavg-methods/input-output/get-by-brute","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/input-output/get-by-brute.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udce4 Get","permalink":"/DataTomeDocs/docs/mvavg-methods/input-output/get"},"next":{"title":"\u27a1\ufe0f Front","permalink":"/DataTomeDocs/docs/mvavg-methods/input-output/front"}}');var a=n(4848),s=n(8453);const o={sidebar_position:3},i="\ud83d\udce4 Get By Brute",d={},u=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-get-by-brute",children:"\ud83d\udce4 Get By Brute"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Returns"})," the ",(0,a.jsx)(t.strong,{children:"average"})," of the ",(0,a.jsx)(t.strong,{children:"N"})," last added data points requested."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"If the number of requested points exceed the array size, it will return the average of points already added."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["\u26a0 Pay attention to how get_by_brute is significantly ",(0,a.jsx)(t.strong,{children:"slower"})," than the pure get function. If you are looking for a more efficient solution, search for the partial average concept in this library."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"pathname:///docs/mvavg-methods/partials/intro",children:"\ud83d\udcca Partials"})}),"\n",(0,a.jsx)(t.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"TypeOfArray get_by_brute(size_t n_points)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// This will create an MovingAverage of size 4 and int type\n// Array: 0 0 0 0\nDataTomeMvAvg<int, long int> intAverage(4);\n\n// Array: 8 0 0 0\nintAverage.push(8);\n// Array: 8 8 0 0\nintAverage.push(8);\n// Array: 4 8 8 0\nintAverage.push(4);\n// Array: 4 4 8 8\nintAverage.push(4);\n\n// Returns the average\n// Value: (8 + 8 + 4 + 4) / 4 = 6\nintAverage.get_by_brute(4);\n\n// Value: (4 + 4) / 2 = 4\nintAverage.get_by_brute(2);\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-complexity",children:"\u23f1 Complexity"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Linear (O(n))"})," in the ",(0,a.jsx)(t.strong,{children:"data points requested"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);