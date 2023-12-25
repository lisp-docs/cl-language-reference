"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[83475],{41714:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>h,toc:()=>d});var s=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"phase"})," ",(0,s.jsx)(r,{term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{term:"phase",children:(0,s.jsx)("b",{children:"phase"})})," ",(0,s.jsx)(n.em,{children:"number \u2192 phase"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})}),"\u2014a ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"phase"}),"\u2014a ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{term:"phase",children:(0,s.jsx)("b",{children:"phase"})})," returns the phase of ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," (the angle part of its polar representation) in radians, in the range ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})," (exclusive) if minus zero is not supported, or ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})," (inclusive) if minus zero is supported, to ",(0,s.jsx)(n.em,{children:"\u03c0"})," (inclusive). The phase of a positive ",(0,s.jsx)(n.em,{children:"real"})," number is zero; that of a negative ",(0,s.jsx)(n.em,{children:"real"})," number is ",(0,s.jsx)(n.em,{children:"\u03c0"}),". The phase of zero is defined to be zero."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," is a ",(0,s.jsx)(n.em,{children:"complex float"}),", the result is a ",(0,s.jsx)(r,{term:"float",children:(0,s.jsx)("i",{children:"float"})})," of the same ",(0,s.jsx)(r,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," as the components of ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})}),". If ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," is a ",(0,s.jsx)(r,{term:"float",children:(0,s.jsx)("i",{children:"float"})}),", the result is a ",(0,s.jsx)(r,{term:"float",children:(0,s.jsx)("i",{children:"float"})})," of the same ",(0,s.jsx)(r,{term:"type",children:(0,s.jsx)("i",{children:"type"})}),". If ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," is a ",(0,s.jsx)(r,{term:"rational",children:(0,s.jsx)("i",{children:"rational"})})," or a ",(0,s.jsx)(n.em,{children:"complex rational"}),", the result is a ",(0,s.jsx)(n.em,{children:"single float"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The branch cut for ",(0,s.jsx)(r,{term:"phase",children:(0,s.jsx)("b",{children:"phase"})})," lies along the negative real axis, continuous with quadrant II. The range consists of that portion of the real axis between ",(0,s.jsx)(n.em,{children:"\u2212\u03c0"})," (exclusive) and ",(0,s.jsx)(n.em,{children:"\u03c0"})," (inclusive)."]}),"\n",(0,s.jsxs)(n.p,{children:["The mathematical definition of ",(0,s.jsx)(r,{term:"phase",children:(0,s.jsx)("b",{children:"phase"})})," is as follows:"]}),"\n",(0,s.jsxs)(n.p,{children:["(phase ",(0,s.jsx)(n.em,{children:"x"}),") = (atan (imagpart ",(0,s.jsx)(n.em,{children:"x"}),") (realpart ",(0,s.jsx)(n.em,{children:"x"}),"))"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(phase 1) \u2192 0.0s0 \n\n(phase 0) \u2192 0.0s0 \n(phase (cis 30)) \u2192 -1.4159266 \n(phase #c(0 1)) \u2192 1.5707964 \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal ",(0,s.jsx)(r,{term:"type-error",children:(0,s.jsx)("b",{children:"type-error"})})," if its argument is not a ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," . Might signal ",(0,s.jsx)(r,{term:"arithmetic-error",children:(0,s.jsx)("b",{children:"arithmetic-error"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:"Section 12.1.3.3 (Rule of Float Substitutability)"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const a={title:"phase"},l="phase",h={id:"chap-12/bc-c-dictionary/phase_function",title:"phase",description:"Expanded Reference: phase",source:"@site/docs/chap-12/bc-c-dictionary/phase_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/phase_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/phase_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/phase_function.md",tags:[],version:"current",frontMatter:{title:"phase"},sidebar:"tutorialSidebar",previous:{title:"parse-integer",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/parse-integer_function"},next:{title:"+",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/plus_function"}},o={},d=[{value:"Expanded Reference: phase",id:"expanded-reference-phase",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"phase",children:"phase"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-phase",children:"Expanded Reference: phase"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(phase )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var s=r(67294);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);