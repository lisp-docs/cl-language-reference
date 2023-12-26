"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[87109],{41824:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>x});var i=r(85893),t=r(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:a}=n;return r||c("DictionaryLink",!0),a||c("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"rational, rationalize"})," ",(0,i.jsx)(a,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"rational",children:(0,i.jsx)("b",{children:"rational"})})," ",(0,i.jsx)(n.em,{children:"number \u2192 rational"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"rationalize",children:(0,i.jsx)("b",{children:"rationalize"})})," ",(0,i.jsx)(n.em,{children:"number \u2192 rational"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(a,{term:"number",children:(0,i.jsx)("i",{children:"number"})}),"\u2014a ",(0,i.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(a,{term:"rational",children:(0,i.jsx)("i",{children:"rational"})}),"\u2014a ",(0,i.jsx)(a,{term:"rational",children:(0,i.jsx)("i",{children:"rational"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"rational",children:(0,i.jsx)("b",{children:"rational"})})," and ",(0,i.jsx)(r,{term:"rationalize",children:(0,i.jsx)("b",{children:"rationalize"})})," convert ",(0,i.jsx)(n.em,{children:"reals"})," to ",(0,i.jsx)(a,{term:"rational",children:(0,i.jsx)("i",{children:"rationals"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(a,{term:"number",children:(0,i.jsx)("i",{children:"number"})})," is already ",(0,i.jsx)(a,{term:"rational",children:(0,i.jsx)("i",{children:"rational"})}),", it is returned."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(a,{term:"number",children:(0,i.jsx)("i",{children:"number"})})," is a ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})}),", ",(0,i.jsx)(r,{term:"rational",children:(0,i.jsx)("b",{children:"rational"})})," returns a ",(0,i.jsx)(a,{term:"rational",children:(0,i.jsx)("i",{children:"rational"})})," that is mathematically equal in value to the ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})}),". ",(0,i.jsx)(r,{term:"rationalize",children:(0,i.jsx)("b",{children:"rationalize"})})," returns a ",(0,i.jsx)(a,{term:"rational",children:(0,i.jsx)("i",{children:"rational"})})," that approximates the ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})})," to the accuracy of the underlying floating-point representation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"rational",children:(0,i.jsx)("b",{children:"rational"})})," assumes that the ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})})," is completely accurate."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"rationalize",children:(0,i.jsx)("b",{children:"rationalize"})})," assumes that the ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})})," is accurate only to the precision of the floating-point representation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(rational 0) \u2192 0 \n(rationalize -11/100) \u2192 -11/100 \n(rational .1) \u2192 13421773/134217728 ;implementation-dependent \n(rationalize .1) \u2192 1/10 \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(a,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(a,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(a,{term:"number",children:(0,i.jsx)("i",{children:"number"})})," is not a ",(0,i.jsx)(n.em,{children:"real"}),". Might signal ",(0,i.jsx)(r,{term:"arithmetic-error",children:(0,i.jsx)("b",{children:"arithmetic-error"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsx)(n.p,{children:"It is always the case that"}),"\n",(0,i.jsxs)(n.p,{children:["(float (rational x) x) ",(0,i.jsx)(n.em,{children:"\u2261"})," x"]}),"\n",(0,i.jsx)(n.p,{children:"and"}),"\n",(0,i.jsxs)(n.p,{children:["(float (rationalize x) x) ",(0,i.jsx)(n.em,{children:"\u2261"})," x"]}),"\n",(0,i.jsxs)(n.p,{children:["That is, rationalizing a ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})})," by either method and then converting it back to a ",(0,i.jsx)(a,{term:"float",children:(0,i.jsx)("i",{children:"float"})})," of the same format produces the original ",(0,i.jsx)(a,{term:"number",children:(0,i.jsx)("i",{children:"number"})}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"rational, rationalize"},s="rational, rationalize",d={id:"chap-12/bc-c-dictionary/rational_rationalize_function",title:"rational, rationalize",description:"Expanded Reference: rational, rationalize",source:"@site/docs/chap-12/bc-c-dictionary/rational_rationalize_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/rational_rationalize_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/rational_rationalize_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/rational_rationalize_function.md",tags:[],version:"current",frontMatter:{title:"rational, rationalize"},sidebar:"tutorialSidebar",previous:{title:"ratio",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/ratio_system-class"},next:{title:"rational",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/rational_system-class"}},h={},x=[{value:"Expanded Reference: rational, rationalize",id:"expanded-reference-rational-rationalize",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rational-rationalize",children:"rational, rationalize"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-rational-rationalize",children:"Expanded Reference: rational, rationalize"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(rational, rationalize )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var i=r(67294);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);