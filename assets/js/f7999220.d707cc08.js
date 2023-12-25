"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[84250],{44002:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=c(85893),r=c(11151);function o(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"conjugate"})," ",(0,t.jsx)(c,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(c,{term:"conjugate",children:(0,t.jsx)("b",{children:"conjugate"})})," ",(0,t.jsx)(n.em,{children:"number \u2192 conjugate"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(c,{term:"number",children:(0,t.jsx)("i",{children:"number"})}),"\u2014a ",(0,t.jsx)(c,{term:"number",children:(0,t.jsx)("i",{children:"number"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"conjugate"}),"\u2014a ",(0,t.jsx)(c,{term:"number",children:(0,t.jsx)("i",{children:"number"})})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the complex conjugate of ",(0,t.jsx)(c,{term:"number",children:(0,t.jsx)("i",{children:"number"})}),". The conjugate of a ",(0,t.jsx)(n.em,{children:"real"})," number is itself."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(conjugate #c(0 -1)) \u2192 #C(0 1) \n(conjugate #c(1 1)) \u2192 #C(1 -1) \n(conjugate 1.5) \u2192 1.5 \n(conjugate #C(3/5 4/5)) \u2192 #C(3/5 -4/5) \n(conjugate #C(0.0D0 -1.0D0)) \u2192 #C(0.0D0 1.0D0) \n(conjugate 3.7) \u2192 3.7 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["For a ",(0,t.jsx)(c,{term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," number z,"]}),"\n",(0,t.jsxs)(n.p,{children:["(conjugate z) ",(0,t.jsx)(n.em,{children:"\u2261"})," (complex (realpart z) (- (imagpart z)))"]})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const a={title:"conjugate"},s="conjugate",l={id:"chap-12/bc-c-dictionary/conjugate_function",title:"conjugate",description:"Expanded Reference: conjugate",source:"@site/docs/chap-12/bc-c-dictionary/conjugate_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/conjugate_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/conjugate_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/conjugate_function.md",tags:[],version:"current",frontMatter:{title:"conjugate"},sidebar:"tutorialSidebar",previous:{title:"complexp",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/complexp_function"},next:{title:"decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/decode-float_scale-float_float-radix_float-sign_float-digits_float-precision_integer-decode-float_function"}},d={},u=[{value:"Expanded Reference: conjugate",id:"expanded-reference-conjugate",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"conjugate",children:"conjugate"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-conjugate",children:"Expanded Reference: conjugate"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(conjugate )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>a,a:()=>i});var t=c(67294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);