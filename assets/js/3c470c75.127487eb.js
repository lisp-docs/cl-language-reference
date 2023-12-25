"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[26542],{2157:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=i(85893),s=i(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"signum"})," ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"signum",children:(0,r.jsx)("b",{children:"signum"})})," ",(0,r.jsx)(n.em,{children:"number \u2192 signed-prototype"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"signed-prototype"}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"signum",children:(0,r.jsx)("b",{children:"signum"})})," determines a numerical value that indicates whether ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," is negative, zero, or positive."]}),"\n",(0,r.jsxs)(n.p,{children:["For a ",(0,r.jsx)(i,{styled:!0,term:"rational",children:(0,r.jsx)("i",{children:"rational"})}),", ",(0,r.jsx)(i,{styled:!0,term:"signum",children:(0,r.jsx)("b",{children:"signum"})})," returns one of -1, 0, or 1 according to whether ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," is negative, zero, or positive. For a ",(0,r.jsx)(i,{styled:!0,term:"float",children:(0,r.jsx)("i",{children:"float"})}),", the result is a ",(0,r.jsx)(i,{styled:!0,term:"float",children:(0,r.jsx)("i",{children:"float"})})," of the same format whose value is minus one, zero, or one. For a ",(0,r.jsx)(i,{styled:!0,term:"complex",children:(0,r.jsx)("i",{children:"complex"})})," number z, (signum ",(0,r.jsx)(n.em,{children:"z"}),") is a complex number of the same phase but with unit magnitude, unless z is a complex zero, in which case the result is z."]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.em,{children:"rational arguments"}),", ",(0,r.jsx)(i,{styled:!0,term:"signum",children:(0,r.jsx)("b",{children:"signum"})})," is a rational function, but it may be irrational for ",(0,r.jsx)(n.em,{children:"complex arguments"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," is a ",(0,r.jsx)(i,{styled:!0,term:"float",children:(0,r.jsx)("i",{children:"float"})}),", the result is a ",(0,r.jsx)(i,{styled:!0,term:"float",children:(0,r.jsx)("i",{children:"float"})}),". If ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," is a ",(0,r.jsx)(i,{styled:!0,term:"rational",children:(0,r.jsx)("i",{children:"rational"})}),", the result is a ",(0,r.jsx)(i,{styled:!0,term:"rational",children:(0,r.jsx)("i",{children:"rational"})}),". If ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," is a ",(0,r.jsx)(n.em,{children:"complex float"}),", the result is a ",(0,r.jsx)(n.em,{children:"complex float"}),". If ",(0,r.jsx)(i,{styled:!0,term:"number",children:(0,r.jsx)("i",{children:"number"})})," is a ",(0,r.jsx)(n.em,{children:"complex rational"}),", the result is a ",(0,r.jsx)(i,{styled:!0,term:"complex",children:(0,r.jsx)("i",{children:"complex"})})," , but it is ",(0,r.jsx)(i,{styled:!0,term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})})," whether that result is a ",(0,r.jsx)(n.em,{children:"complex rational"})," or a ",(0,r.jsx)(n.em,{children:"complex float"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(signum 0) \u2192 0 \n(signum 99) \u2192 1 \n(signum 4/5) \u2192 1 \n(signum -99/100) \u2192 -1 \n(signum 0.0) \u2192 0.0 \n(signum #c(0 33)) \u2192 #C(0.0 1.0) \n(signum #c(7.5 10.0)) \u2192 #C(0.6 0.8) \n(signum #c(0.0 -14.7)) \u2192 #C(0.0 -1.0) \n(eql (signum -0.0) -0.0) \u2192 true \n\n\n\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 12.1.3.3 (Rule of Float Substitutability)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(signum x) ",(0,r.jsx)(n.em,{children:"\u2261"})," (if (zerop x) x (/ x (abs x)))"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const l={title:"signum"},d="signum",o={id:"chap-12/bc-c-dictionary/signum_function",title:"signum",description:"Expanded Reference: signum",source:"@site/docs/chap-12/bc-c-dictionary/signum_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/signum_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/signum_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/signum_function.md",tags:[],version:"current",frontMatter:{title:"signum"},sidebar:"tutorialSidebar",previous:{title:"signed-byte",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/signed-byte_type"},next:{title:"sin, cos, tan",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/sin_cos_tan_function"}},a={},m=[{value:"Expanded Reference: signum",id:"expanded-reference-signum",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"signum",children:"signum"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-signum",children:"Expanded Reference: signum"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(signum )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var r=i(67294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);