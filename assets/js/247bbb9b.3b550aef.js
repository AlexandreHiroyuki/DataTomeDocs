"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[2735],{8407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(4848),n=a(8453);const i={sidebar_position:3},s="\ud83d\udce4 Partial Get",o={id:"mvavg-methods/partials/partial-get",title:"\ud83d\udce4 Partial Get",description:"Returns the partial average result of the requested ID.",source:"@site/docs/mvavg-methods/partials/partial-get.md",sourceDirName:"mvavg-methods/partials",slug:"/mvavg-methods/partials/partial-get",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/partial-get",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/partials/partial-get.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0 Partial Create",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/partial-create"},next:{title:"\ud83d\udccf Partial Size of Array",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/partial-size-of-array"}},l={},c=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1Complexity",id:"complexity",level:3}];function p(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-partial-get",children:"\ud83d\udce4 Partial Get"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Returns"})," the ",(0,r.jsx)(t.strong,{children:"partial average result"})," of the requested ID."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Use the ID provided by the creation method to access the partial result.\nRequesting an invalid ID will return a 0."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"TypeOfArray partial_get(size_t id)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"DataTomeMvAvg<unsigned int, unsigned long int> intAverage(10);\n\nsize_t partial_id = intAverage.partial_create(3);\nsize_t partial_2_id = intAverage.partial_create(5);\n\n// 10 4 3 2 1 0 0 0 0 0\nintAverage.push(1).push(2).push(3).push(4).push(10);\n\n// (10 + 4 + 3) / 3 = 5\nintAverage.partial_get(partial_id);\n// (10 + 4 + 3 + 2 + 1) / 5 = 4\nintAverage.partial_get(partial_2_id);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"complexity",children:"\u23f1Complexity"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Constant (O(1))"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var r=a(6540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);