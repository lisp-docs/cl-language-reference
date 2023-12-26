"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[93962],{88489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=t(85893),c=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{DictionaryLink:t,GlossaryTerm:s}=n;return t||l("DictionaryLink",!0),s||l("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"concatenate"})," ",(0,r.jsx)(s,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{term:"concatenate",children:(0,r.jsx)("b",{children:"concatenate"})})," ",(0,r.jsx)(n.em,{children:"result-type"})," &rest ",(0,r.jsx)(n.em,{children:"sequences \u2192 result-sequence"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result-type"}),"\u2014a ",(0,r.jsx)(t,{term:"sequence",children:(0,r.jsx)("b",{children:"sequence"})})," ",(0,r.jsx)(s,{styled:!0,term:"type specifier",children:(0,r.jsx)("i",{children:"type specifier"})})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"sequences"}),"\u2014a ",(0,r.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result-sequence"}),"\u2014a ",(0,r.jsx)(s,{styled:!0,term:"proper sequence",children:(0,r.jsx)("i",{children:"proper sequence"})})," of ",(0,r.jsx)(n.em,{children:"type result-type"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{term:"concatenate",children:(0,r.jsx)("b",{children:"concatenate"})})," returns a ",(0,r.jsx)(n.em,{children:"sequence"})," that contains all the individual elements of all the ",(0,r.jsx)(n.em,{children:"sequences"})," in the order that they are supplied. The ",(0,r.jsx)(n.em,{children:"sequence"})," is of type ",(0,r.jsx)(n.em,{children:"result-type"}),", which must be a ",(0,r.jsx)(s,{term:"subtype",children:(0,r.jsx)("i",{children:"subtype"})})," of ",(0,r.jsx)(s,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(t,{term:"sequence",children:(0,r.jsx)("b",{children:"sequence"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["All of the ",(0,r.jsx)(n.em,{children:"sequences"})," are copied from; the result does not share any structure with any of the ",(0,r.jsx)(n.em,{children:"sequences"}),". Therefore, if only one ",(0,r.jsx)(n.em,{children:"sequence"})," is provided and it is of type ",(0,r.jsx)(n.em,{children:"result-type"}),", ",(0,r.jsx)(t,{term:"concatenate",children:(0,r.jsx)("b",{children:"concatenate"})})," is required to copy ",(0,r.jsx)(n.em,{children:"sequence"})," rather than simply returning it."]}),"\n",(0,r.jsxs)(n.p,{children:["It is an error if any element of the ",(0,r.jsx)(n.em,{children:"sequences"})," cannot be an element of the ",(0,r.jsx)(n.em,{children:"sequence"})," result. If the ",(0,r.jsx)(n.em,{children:"result-type"})," is a ",(0,r.jsx)(s,{term:"subtype",children:(0,r.jsx)("i",{children:"subtype"})})," of ",(0,r.jsx)(t,{term:"list",children:(0,r.jsx)("b",{children:"list"})}),", the result will be a ",(0,r.jsx)(s,{term:"list",children:(0,r.jsx)("i",{children:"list"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"result-type"})," is a ",(0,r.jsx)(s,{term:"subtype",children:(0,r.jsx)("i",{children:"subtype"})})," of ",(0,r.jsx)(t,{term:"vector",children:(0,r.jsx)("b",{children:"vector"})}),", then if the implementation can determine the element type specified for the ",(0,r.jsx)(n.em,{children:"result-type"}),", the element type of the resulting array is the result of ",(0,r.jsx)(n.em,{children:"upgrading"})," that element type; or, if the implementation can determine that the element type is unspecified (or *), the element type of the resulting array is ",(0,r.jsx)(t,{term:"t",children:(0,r.jsx)("b",{children:"t"})}),"; otherwise, an error is signaled."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'(concatenate \u2019string "all" " " "together" " " "now") \u2192 "all together now" \n(concatenate \u2019list "ABC" \u2019(d e f) #(1 2 3) #\\*1011) \n\u2192 (#\\A #\\B #\\C D E F 1 2 3 1 0 1 1) \n(concatenate \u2019list) \u2192 NIL \n(concatenate \u2019(vector \\* 2) "a" "bc") should signal an error \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["An error is signaled if the ",(0,r.jsx)(n.em,{children:"result-type"})," is neither a ",(0,r.jsx)(s,{styled:!0,term:"recognizable subtype",children:(0,r.jsx)("i",{children:"recognizable subtype"})})," of ",(0,r.jsx)(t,{term:"list",children:(0,r.jsx)("b",{children:"list"})}),", nor a ",(0,r.jsx)(s,{styled:!0,term:"recognizable subtype",children:(0,r.jsx)("i",{children:"recognizable subtype"})})," of ",(0,r.jsx)(t,{term:"vector",children:(0,r.jsx)("b",{children:"vector"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An error of ",(0,r.jsx)(s,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(t,{term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," should be signaled if ",(0,r.jsx)(n.em,{children:"result-type"})," specifies the number of elements and the sum of ",(0,r.jsx)(n.em,{children:"sequences"})," is different from that number."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(t,{term:"append",children:(0,r.jsx)("b",{children:"append"})})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"concatenate"},a="concatenate",d={id:"chap-17/bh-d-dictionary/concatenate_function",title:"concatenate",description:"Expanded Reference: concatenate",source:"@site/docs/chap-17/bh-d-dictionary/concatenate_function.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/concatenate_function",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/concatenate_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/concatenate_function.md",tags:[],version:"current",frontMatter:{title:"concatenate"},sidebar:"tutorialSidebar",previous:{title:"17.3 Sequences Dictionary",permalink:"/cl-language-reference/category/173-sequences-dictionary"},next:{title:"copy-seq",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/copy-seq_function"}},h={},p=[{value:"Expanded Reference: concatenate",id:"expanded-reference-concatenate",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"concatenate",children:"concatenate"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-concatenate",children:"Expanded Reference: concatenate"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(concatenate )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const c={},s=r.createContext(c);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);