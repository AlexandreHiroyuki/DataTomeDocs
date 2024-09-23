"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[1181],{1135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(4848),r=n(8453);const s={sidebar_position:2},o="\ud83d\udce4 Get",i={id:"mvavg-methods/input-output/get",title:"\ud83d\udce4 Get",description:"Returns the current moving average value.",source:"@site/docs/mvavg-methods/input-output/get.md",sourceDirName:"mvavg-methods/input-output",slug:"/mvavg-methods/input-output/get",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/get",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/input-output/get.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce5 Push",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/push"},next:{title:"\ud83d\udce4 Get By Brute",permalink:"/DataTomeDocs/docs/mvavg-methods/input-output/get-by-brute"}},u={},c=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-get",children:"\ud83d\udce4 Get"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Returns"})," the ",(0,a.jsx)(t.strong,{children:"current"})," moving average ",(0,a.jsx)(t.strong,{children:"value"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"pathname:///docs/mvavg-methods/partials/intro",children:"\ud83d\udcca Partials"})}),"\n",(0,a.jsx)(t.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"TypeOfArray get()\n\n// Passing the number of points you want to calculate the average as an parameter is an alias to ge_by_brute function.\n// \u26a0Pay attention to how get_by_brute is significantly slower than the pure get function.\n// If you are looking for a more efficient solution, search for the partial average concept in this library.\nTypeOfArray get(size_t n_points) { return get_by_brute(n_points); }\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// This will create an MovingAverage of size 4 and int type\nDataTomeMvAvg<int, long int> intAverage(4);\n\n// Array: 8 0 0 0\nintAverage.push(8);\n// Array: 8 8 0 0\nintAverage.push(8);\n// Array: 4 8 8 0\nintAverage.push(4);\n// Array: 4 4 8 8\nintAverage.push(4);\n\n// Returns the average\n// Value: (4 + 4 + 8 + 8) / 4 = 6\nintAverage.get();\n\n// Value: (4 + 4) / 2 = 4\nintAverage.get(2);\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-complexity",children:"\u23f1 Complexity"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Constant (O(1))"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);