"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[237],{7496:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(4848),o=n(8453);const a={sidebar_position:6},i="\ud83d\udcc9 Lowest Mode",r={id:"analysis-methods/analysis/lowest-mode",title:"\ud83d\udcc9 Lowest Mode",description:"Returns the lowest mode of the data points pushed in the array.",source:"@site/docs/analysis-methods/analysis/lowest-mode.md",sourceDirName:"analysis-methods/analysis",slug:"/analysis-methods/analysis/lowest-mode",permalink:"/DataTomeDocs/docs/analysis-methods/analysis/lowest-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/analysis-methods/analysis/lowest-mode.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcca Median",permalink:"/DataTomeDocs/docs/analysis-methods/analysis/median"},next:{title:"\ud83d\udcc8 Highest Mode",permalink:"/DataTomeDocs/docs/analysis-methods/analysis/highest-mode"}},d={},l=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}];function c(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"-lowest-mode",children:"\ud83d\udcc9 Lowest Mode"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Returns"})," the ",(0,t.jsx)(s.strong,{children:"lowest mode"})," of the ",(0,t.jsx)(s.strong,{children:"data points"})," pushed in the ",(0,t.jsx)(s.strong,{children:"array"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The mode is the value that appears most frequently in a data set. A set of data may have one mode, more than one mode, or no mode at all.\nTo avoid confusion, the lowest mode is returned in case of multiple modes."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"TypeOfArray lowest_mode()\n"})}),"\n",(0,t.jsx)(s.h3,{id:"-example",children:"\ud83d\udd2e Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"DataTomeAnalysis<int, long int> intAverage(10);\n\nint mode_data[10] = {1, 2, 3, 3, 3, 3, 4, 4, 4, 4};\n\nfor (size_t i = 0; i < 10; i++) {\n  intAverage.push(mode_data[i]);\n}\n\nintAverage.lowest_mode(); // Will return 3\n"})}),"\n",(0,t.jsx)(s.h3,{id:"-complexity",children:"\u23f1 Complexity"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Linearithmic (O(n log n))"})," in the number of data points in the array."]})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(6540);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);