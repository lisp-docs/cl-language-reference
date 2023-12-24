"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[47329],{29439:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"/"})," ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"/",children:(0,i.jsx)("b",{children:"/"})})," ",(0,i.jsx)(n.em,{children:"number \u2192 reciprocal"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"/",children:(0,i.jsx)("b",{children:"/"})})," ",(0,i.jsx)(n.em,{children:"numerator"})," &rest ",(0,i.jsx)(n.em,{children:"denominators"}),(0,i.jsx)("sup",{children:"+"})," \u2192 quotient"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"number",children:(0,i.jsx)("i",{children:"number"})}),", ",(0,i.jsx)(n.em,{children:"denominator"}),"\u2014a non-zero ",(0,i.jsx)(r,{styled:!0,term:"number",children:(0,i.jsx)("i",{children:"number"})})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"numerator"}),", ",(0,i.jsx)(n.em,{children:"quotient"}),", ",(0,i.jsx)(n.em,{children:"reciprocal"}),"\u2014a ",(0,i.jsx)(r,{styled:!0,term:"number",children:(0,i.jsx)("i",{children:"number"})})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(r,{styled:!0,term:"/",children:(0,i.jsx)("b",{children:"/"})})," performs division or reciprocation."]}),"\n",(0,i.jsxs)(n.p,{children:["If no ",(0,i.jsx)(n.em,{children:"denominators"})," are supplied, the ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(r,{styled:!0,term:"/",children:(0,i.jsx)("b",{children:"/"})})," returns the reciprocal of ",(0,i.jsx)(r,{styled:!0,term:"number",children:(0,i.jsx)("i",{children:"number"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If at least one ",(0,i.jsx)(n.em,{children:"denominator"})," is supplied, the ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(r,{styled:!0,term:"/",children:(0,i.jsx)("b",{children:"/"})})," divides the ",(0,i.jsx)(n.em,{children:"numerator"})," by all of the ",(0,i.jsx)(n.em,{children:"denominators"})," and returns the resulting ",(0,i.jsx)(n.em,{children:"quotient"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If each ",(0,i.jsx)(r,{styled:!0,term:"argument",children:(0,i.jsx)("i",{children:"argument"})})," is either an ",(0,i.jsx)(n.em,{children:"integer"})," or a ",(0,i.jsx)(r,{styled:!0,term:"ratio",children:(0,i.jsx)("i",{children:"ratio"})}),", and the result is not an ",(0,i.jsx)(n.em,{children:"integer"})," , then it is a ",(0,i.jsx)(r,{styled:!0,term:"ratio",children:(0,i.jsx)("i",{children:"ratio"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," ",(0,i.jsx)(r,{styled:!0,term:"/",children:(0,i.jsx)("b",{children:"/"})})," performs necessary type conversions."]}),"\n",(0,i.jsxs)(n.p,{children:["If any ",(0,i.jsx)(r,{styled:!0,term:"argument",children:(0,i.jsx)("i",{children:"argument"})})," is a ",(0,i.jsx)(r,{styled:!0,term:"float",children:(0,i.jsx)("i",{children:"float"})})," then the rules of floating-point contagion apply; see Section 12.1.4 (Floating-point Computations)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:" \n(/ 12 4) \u2192 3 \n(/ 13 4) \u2192 13/4 \n(/ -8) \u2192 -1/8 \n(/ 3 4 5) \u2192 3/20 \n(/ 0.5) \u2192 2.0 \n(/ 20 5) \u2192 4 \n(/ 5 20) \u2192 1/4 \n(/ 60 -2 3 5.0) \u2192 -2.0 \n(/ 2 #c(2 2)) \u2192 #C(1/2 -1/2) \n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["The consequences are unspecified if any ",(0,i.jsx)(r,{styled:!0,term:"argument",children:(0,i.jsx)("i",{children:"argument"})})," other than the first is zero. If there is only one ",(0,i.jsx)(r,{styled:!0,term:"argument",children:(0,i.jsx)("i",{children:"argument"})}),", the consequences are unspecified if it is zero."]}),"\n",(0,i.jsxs)(n.p,{children:["Might signal ",(0,i.jsx)(r,{styled:!0,term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if some ",(0,i.jsx)(r,{styled:!0,term:"argument",children:(0,i.jsx)("i",{children:"argument"})})," is not a ",(0,i.jsx)(r,{styled:!0,term:"number",children:(0,i.jsx)("i",{children:"number"})})," . Might signal ",(0,i.jsx)(r,{styled:!0,term:"division-by-zero",children:(0,i.jsx)("b",{children:"division-by-zero"})})," if division by zero is attempted. Might signal ",(0,i.jsx)(r,{styled:!0,term:"arithmetic-error",children:(0,i.jsx)("b",{children:"arithmetic-error"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"floor",children:(0,i.jsx)("b",{children:"floor"})}),", ",(0,i.jsx)(r,{styled:!0,term:"ceiling",children:(0,i.jsx)("b",{children:"ceiling"})}),", ",(0,i.jsx)(r,{styled:!0,term:"truncate",children:(0,i.jsx)("b",{children:"truncate"})}),", ",(0,i.jsx)(r,{styled:!0,term:"round",children:(0,i.jsx)("b",{children:"round"})})]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const l={title:"/"},d="/",o={id:"chap-12/bc-c-dictionary/slash_function",title:"/",description:"Expanded Reference: /",source:"@site/docs/chap-12/bc-c-dictionary/slash_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/slash_function",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/slash_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/slash_function.md",tags:[],version:"current",frontMatter:{title:"/"},sidebar:"tutorialSidebar",previous:{title:"sinh, cosh, tanh, asinh, acosh, atanh",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/sinh_cosh_tanh_asinh_acosh_atanh_function"},next:{title:"sqrt, isqrt",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/sqrt_isqrt_function"}},h={},a=[{value:"Expanded Reference: /",id:"expanded-reference-",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"",children:"/"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-",children:"Expanded Reference: /"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(/ )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var i=r(67294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);