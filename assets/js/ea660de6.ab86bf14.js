"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[16395],{31877:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=r(85893),c=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"vectorp"})," ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"vectorp",children:(0,t.jsx)("b",{children:"vectorp"})})," ",(0,t.jsx)(n.em,{children:"object \u2192 generalized-boolean"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2014an ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(r,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," if ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," is of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"vector",children:(0,t.jsx)("b",{children:"vector"})}),"; otherwise, returns ",(0,t.jsx)(r,{styled:!0,term:"false",children:(0,t.jsx)("i",{children:"false"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\n(vectorp "aaaaaa") \u2192 true \n(vectorp (make-array 6 :fill-pointer t)) \u2192 true \n(vectorp (make-array \u2019(2 3 4))) \u2192 false \n(vectorp #\\*11) \u2192 true \n(vectorp #b11) \u2192 false \n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["(vectorp ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),") ",(0,t.jsx)(n.em,{children:"\u2261"})," (typep ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," \u2019vector)"]})]})}function o(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const i={title:"vectorp"},l="vectorp",d={id:"chap-15/bf-c-dictionary/vectorp_function",title:"vectorp",description:"Expanded Reference: vectorp",source:"@site/docs/chap-15/bf-c-dictionary/vectorp_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/vectorp_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vectorp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/vectorp_function.md",tags:[],version:"current",frontMatter:{title:"vectorp"},sidebar:"tutorialSidebar",previous:{title:"vector",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector_system-class"},next:{title:"16. Strings",permalink:"/cl-language-reference/category/16-strings"}},a={},p=[{value:"Expanded Reference: vectorp",id:"expanded-reference-vectorp",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vectorp",children:"vectorp"}),"\n","\n","\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-vectorp",children:"Expanded Reference: vectorp"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(vectorp )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(67294);const c={},s=t.createContext(c);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);