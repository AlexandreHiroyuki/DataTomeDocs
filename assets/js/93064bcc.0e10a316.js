"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[6161],{4403:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(4848),i=a(8453);const r={sidebar_position:5},o="\ud83d\udcc8 Partial Point Count",s={id:"mvavg-methods/partials/partial-point-count",title:"\ud83d\udcc8 Partial Point Count",description:"Returns the number of data points pushed in the array contributing to the partial average calculation.",source:"@site/docs/mvavg-methods/partials/partial-point-count.md",sourceDirName:"mvavg-methods/partials",slug:"/mvavg-methods/partials/partial-point-count",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/partial-point-count",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvavg-methods/partials/partial-point-count.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccf Partial Size of Array",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/partial-size-of-array"},next:{title:"\ud83d\udccf Partials Memory",permalink:"/DataTomeDocs/docs/mvavg-methods/partials/partials-memory"}},l={},c=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}];function p(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"-partial-point-count",children:"\ud83d\udcc8 Partial Point Count"})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Returns"})," the ",(0,n.jsx)(e.strong,{children:"number of data points"})," pushed in the ",(0,n.jsx)(e.strong,{children:"array"})," contributing to the partial average calculation."]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"Use the ID provided by the creation method to access the partial result.\nRequesting an invalid ID will return a 0."}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"size_t partial_point_count(size_t id);\n"})}),"\n",(0,n.jsx)(e.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"DataTomeMvAvg<unsigned int> intAverage(10);\n\nsize_t partial_id = intAverage.partial_create(5);\n\nintAverage.push(2);\n\nintAverage.partial_point_count(partial_id); // Will return 1\n\nintAverage.push(5);\n\nintAverage.partial_point_count(partial_id); // Will return 2\n"})}),"\n",(0,n.jsx)(e.h3,{id:"-complexity",children:"\u23f1 Complexity"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Constant (O(1))"}),"."]})]})}function d(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},8453:(t,e,a)=>{a.d(e,{R:()=>o,x:()=>s});var n=a(6540);const i={},r=n.createContext(i);function o(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);