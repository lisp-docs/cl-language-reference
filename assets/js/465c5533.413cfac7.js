"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[9898],{2660:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=i(85893),s=i(11151);function d(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"deposit-field"})," ",(0,t.jsx)(i,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"deposit-field",children:(0,t.jsx)("b",{children:"deposit-field"})})," ",(0,t.jsx)(n.em,{children:"newbyte bytespec integer \u2192 result-integer"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"newbyte"}),"\u2014an ",(0,t.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"bytespec"}),"\u2014a ",(0,t.jsx)(n.em,{children:"byte specifier"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"integer"}),"\u2014an ",(0,t.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"result-integer"}),"\u2014an ",(0,t.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Replaces a field of bits within ",(0,t.jsx)(n.em,{children:"integer"}),"; specifically, returns an ",(0,t.jsx)(n.em,{children:"integer"})," that contains the bits of ",(0,t.jsx)(n.em,{children:"newbyte"})," within the ",(0,t.jsx)(i,{styled:!0,term:"byte",children:(0,t.jsx)("i",{children:"byte"})})," specified by ",(0,t.jsx)(n.em,{children:"bytespec"}),", and elsewhere contains the bits of ",(0,t.jsx)(n.em,{children:"integer"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(deposit-field 7 (byte 2 1) 0) \u2192 6 \n(deposit-field -1 (byte 4 0) 0) \u2192 15 \n(deposit-field 0 (byte 2 1) -3) \u2192 -7 \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"byte",children:(0,t.jsx)("b",{children:"byte"})}),", ",(0,t.jsx)(i,{styled:!0,term:"dpb",children:(0,t.jsx)("b",{children:"dpb"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["(logbitp ",(0,t.jsx)(n.em,{children:"j"})," (deposit-field ",(0,t.jsx)(n.em,{children:"m"})," (byte ",(0,t.jsx)(n.em,{children:"s p"}),") ",(0,t.jsx)(n.em,{children:"n"}),"))"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2261"})," (if (and (>= ",(0,t.jsx)(n.em,{children:"j p"}),") (< ",(0,t.jsx)(n.em,{children:"j"})," (+ ",(0,t.jsx)(n.em,{children:"p s"}),")))"]}),"\n",(0,t.jsxs)(n.p,{children:["(logbitp ",(0,t.jsx)(n.em,{children:"j m"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["(logbitp ",(0,t.jsx)(n.em,{children:"j n"}),"))"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"deposit-field",children:(0,t.jsx)("b",{children:"deposit-field"})})," is to ",(0,t.jsx)(i,{styled:!0,term:"mask-field",children:(0,t.jsx)("b",{children:"mask-field"})})," as ",(0,t.jsx)(i,{styled:!0,term:"dpb",children:(0,t.jsx)("b",{children:"dpb"})})," is to ",(0,t.jsx)(i,{styled:!0,term:"ldb",children:(0,t.jsx)("b",{children:"ldb"})}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const c={title:"deposit-field"},l="deposit-field",o={id:"chap-12/bc-c-dictionary/deposit-field_function",title:"deposit-field",description:"Expanded Reference: deposit-field",source:"@site/docs/chap-12/bc-c-dictionary/deposit-field_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/deposit-field_function",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/deposit-field_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/deposit-field_function.md",tags:[],version:"current",frontMatter:{title:"deposit-field"},sidebar:"tutorialSidebar",previous:{title:"decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/decode-float_scale-float_float-radix_float-sign_float-digits_float-precision_integer-decode-float_function"},next:{title:"division-by-zero",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/division-by-zero_condition-type"}},p={},a=[{value:"Expanded Reference: deposit-field",id:"expanded-reference-deposit-field",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deposit-field",children:"deposit-field"}),"\n","\n","\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-deposit-field",children:"Expanded Reference: deposit-field"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(deposit-field )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);