"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[53913],{85221:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>h,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ash"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ash"})," ",(0,s.jsx)(n.em,{children:"integer count \u2192 shifted-integer"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"integer"}),"\u2014an ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"count"}),"\u2014an ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"shifted-integer"}),"\u2014an ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ash"})," performs the arithmetic shift operation on the binary representation of ",(0,s.jsx)(n.em,{children:"integer"}),", which is treated as if it were binary."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ash"})," shifts ",(0,s.jsx)(n.em,{children:"integer"})," arithmetically left by ",(0,s.jsx)(n.em,{children:"count"})," bit positions if ",(0,s.jsx)(n.em,{children:"count"})," is positive, or right ",(0,s.jsx)(n.em,{children:"count"})," bit positions if ",(0,s.jsx)(n.em,{children:"count"})," is negative. The shifted value of the same sign as ",(0,s.jsx)(n.em,{children:"integer"})," is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["Mathematically speaking, ",(0,s.jsx)("b",{children:"ash"})," performs the computation floor(",(0,s.jsx)("i",{children:"integer\xb7"}),"2",(0,s.jsx)("i",{children:(0,s.jsx)("sup",{children:"count"})}),"). Logically, ",(0,s.jsx)("b",{children:"ash"})," moves all of the bits in ",(0,s.jsx)("i",{children:"integer"})," to the left, adding zero-bits at the right, or moves them to the right, discarding bits."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ash"})," is defined to behave as if ",(0,s.jsx)(n.em,{children:"integer"})," were represented in two\u2019s complement form, regardless of how ",(0,s.jsx)(n.em,{children:"integers"})," are represented internally."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n(ash 16 1) \u2192 32 \n\n(ash 16 0) \u2192 16 \n\n(ash 16 -1) \u2192 8 \n\n(ash -100000000000000000000000000000000 -100) \u2192 -79 \n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"integer"})," is not an ",(0,s.jsx)(n.em,{children:"integer"})," . Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"count"})," is not an ",(0,s.jsx)(n.em,{children:"integer"})," . Might signal ",(0,s.jsx)(n.strong,{children:"arithmetic-error"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(logbitp ",(0,s.jsx)(n.em,{children:"j"})," (ash ",(0,s.jsx)(n.em,{children:"n k"}),"))"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2261"})," (and (>= ",(0,s.jsx)(n.em,{children:"j k"}),") (logbitp (- ",(0,s.jsx)(n.em,{children:"j k"}),") ",(0,s.jsx)(n.em,{children:"n"}),"))"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"integer-length"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const a={},h="ash",o={id:"chap-12/bc-c-dictionary/ash",title:"ash",description:"Expanded Reference: ash",source:"@site/docs/chap-12/bc-c-dictionary/ash.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/ash",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/ash",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/ash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"arithmetic-error",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/arithmeticerror"},next:{title:"asin, acos, atan",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/asin"}},d={},l=[{value:"Expanded Reference: ash",id:"expanded-reference-ash",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ash",children:"ash"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-ash",children:"Expanded Reference: ash"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(ash )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var s=r(67294);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);