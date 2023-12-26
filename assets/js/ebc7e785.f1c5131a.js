"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[11246],{31494:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>a,toc:()=>g});var r=i(85893),t=i(11151);function o(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:i,GlossaryTerm:o}=n;return i||c("ClLinks",!0),o||c("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"logbitp"})," ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"logbitp",children:(0,r.jsx)("b",{children:"logbitp"})})," ",(0,r.jsx)(n.em,{children:"index integer \u2192 generalized-boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"index"}),"\u2014a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"integer"}),"\u2014an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,r.jsx)(o,{styled:!0,term:"generalized boolean",children:(0,r.jsx)("i",{children:"generalized boolean"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("b",{children:"logbitp"})," is used to test the value of a particular bit in ",(0,r.jsx)("i",{children:"integer"}),", that is treated as if it were binary. The value of ",(0,r.jsx)("b",{children:"logbitp"})," is ",(0,r.jsx)("i",{children:"true"})," if the bit in ",(0,r.jsx)("i",{children:"integer"})," whose index is ",(0,r.jsx)("i",{children:"index"})," (that is, its weight is 2",(0,r.jsx)("i",{children:(0,r.jsx)("sup",{children:"index"})})," ) is a one-bit; otherwise it is ",(0,r.jsx)("i",{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Negative ",(0,r.jsx)(n.em,{children:"integers"})," are treated as if they were in two\u2019s-complement notation."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(logbitp 1 1) \u2192 false \n(logbitp 0 1) \u2192 true \n(logbitp 3 10) \u2192 true \n(logbitp 1000000 -1) \u2192 true \n(logbitp 2 6) \u2192 true \n(logbitp 0 6) \u2192 false \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," if ",(0,r.jsx)(n.em,{children:"index"})," is not a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," . Should signal an error of ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," if ",(0,r.jsx)(n.em,{children:"integer"})," is not an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(logbitp ",(0,r.jsx)(n.em,{children:"k n"}),") ",(0,r.jsx)(n.em,{children:"\u2261"})," (ldb-test (byte 1 ",(0,r.jsx)(n.em,{children:"k"}),") ",(0,r.jsx)(n.em,{children:"n"}),")"]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const s={title:"logbitp"},d="logbitp",a={id:"chap-12/bc-c-dictionary/logbitp_function",title:"logbitp",description:"Expanded Reference: logbitp",source:"@site/docs/chap-12/bc-c-dictionary/logbitp_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/logbitp_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/logbitp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/logbitp_function.md",tags:[],version:"current",frontMatter:{title:"logbitp"},sidebar:"tutorialSidebar",previous:{title:"logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/logand_logandc1_logandc2_logeqv_logior_lognand_lognor_lognot_logorc1_logorc2_logxor_function"},next:{title:"logcount",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/logcount_function"}},p={},g=[{value:"Expanded Reference: logbitp",id:"expanded-reference-logbitp",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"logbitp",children:"logbitp"}),"\n","\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-logbitp",children:"Expanded Reference: logbitp"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(logbitp )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var r=i(67294);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);