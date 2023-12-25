"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[25038],{28804:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var r=i(85893),s=i(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unsigned-byte"})," ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"Type"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supertypes:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"unsigned-byte",children:(0,r.jsx)("b",{children:"unsigned-byte"})}),", ",(0,r.jsx)(i,{term:"signed-byte",children:(0,r.jsx)("b",{children:"signed-byte"})}),", ",(0,r.jsx)(i,{term:"integer",children:(0,r.jsx)("b",{children:"integer"})}),", ",(0,r.jsx)(i,{term:"rational",children:(0,r.jsx)("b",{children:"rational"})}),", ",(0,r.jsx)(i,{term:"real",children:(0,r.jsx)("b",{children:"real"})}),", ",(0,r.jsx)(i,{term:"number",children:(0,r.jsx)("b",{children:"number"})}),", ",(0,r.jsx)(i,{term:"t",children:(0,r.jsx)("b",{children:"t"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["The atomic ",(0,r.jsx)(n.em,{children:"type specifier"})," ",(0,r.jsx)(i,{term:"unsigned-byte",children:(0,r.jsx)("b",{children:"unsigned-byte"})})," denotes the same type as is denoted by the ",(0,r.jsx)(n.em,{children:"type specifier"})," (integer 0 *)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Kind:"})}),"\n",(0,r.jsx)(n.p,{children:"Abbreviating."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:["(unsigned-byte [",(0,r.jsx)(n.em,{children:"s |"})," ",(0,r.jsx)(n.strong,{children:"*"}),"])"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Arguments:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"s"}),"\u2014a positive ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["This denotes the set of non-negative ",(0,r.jsx)("i",{children:"integers"})," that can be represented in a byte of size ",(0,r.jsx)("i",{children:"s"})," (bits). This is equivalent to (mod ",(0,r.jsx)("i",{children:"m"}),") for ",(0,r.jsx)("i",{children:"m"})," = 2",(0,r.jsx)("i",{children:(0,r.jsx)("sup",{children:"s"})}),", or to (integer 0 ",(0,r.jsx)("i",{children:"n"}),") for ",(0,r.jsx)("i",{children:"n"})," = 2",(0,r.jsxs)("i",{children:[(0,r.jsx)("sup",{children:"s"})," \u2212"]}),"1. The ",(0,r.jsx)("i",{children:"type"})," ",(0,r.jsx)("b",{children:"unsigned-byte"})," or the type (unsigned-byte *) is the same as the type (integer 0 *), the set of non-negative ",(0,r.jsx)("i",{children:"integers"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," (unsigned-byte 1) is also called ",(0,r.jsx)(i,{term:"bit",children:(0,r.jsx)("b",{children:"bit"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"mod",children:(0,r.jsx)("b",{children:"mod"})})," ",(0,r.jsx)(n.em,{children:"Type Specifier"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Kind:"})}),"\n",(0,r.jsx)(n.p,{children:"Abbreviating."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:["(mod ",(0,r.jsx)(n.em,{children:"n"}),")"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Arguments:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"n"}),"\u2014a positive ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compound Type Specifier Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["This denotes the set of non-negative ",(0,r.jsx)(n.em,{children:"integers"})," less than ",(0,r.jsx)(n.em,{children:"n"}),". This is equivalent to (integer 0 (",(0,r.jsx)(n.em,{children:"n"}),")) or to (integer 0 ",(0,r.jsx)(n.em,{children:"m"}),"), where ",(0,r.jsx)(n.em,{children:"m"})," = ",(0,r.jsx)(n.em,{children:"n \u2212"})," 1."]}),"\n",(0,r.jsxs)(n.p,{children:["The argument is required, and cannot be ",(0,r.jsx)(n.strong,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The symbol ",(0,r.jsx)(i,{term:"mod",children:(0,r.jsx)("b",{children:"mod"})})," is not valid as a ",(0,r.jsx)(n.em,{children:"type specifier"})," ."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const d={title:"unsigned-byte"},l="unsigned-byte",o={id:"chap-12/bc-c-dictionary/unsigned-byte_type",title:"unsigned-byte",description:"Expanded Reference: unsigned-byte",source:"@site/docs/chap-12/bc-c-dictionary/unsigned-byte_type.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/unsigned-byte_type",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/unsigned-byte_type",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/unsigned-byte_type.md",tags:[],version:"current",frontMatter:{title:"unsigned-byte"},sidebar:"tutorialSidebar",previous:{title:"sqrt, isqrt",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/sqrt_isqrt_function"},next:{title:"upgraded-complex-part-type",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/upgraded-complex-part-type_function"}},h={},p=[{value:"Expanded Reference: unsigned-byte",id:"expanded-reference-unsigned-byte",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"unsigned-byte",children:"unsigned-byte"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-unsigned-byte",children:"Expanded Reference: unsigned-byte"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(unsigned-byte )\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var r=i(67294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);