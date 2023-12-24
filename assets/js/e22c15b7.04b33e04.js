"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[57442],{81282:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=t(85893),a=t(11151);function l(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{ClLinks:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["\u2217",(0,n.jsx)(t,{styled:!0,term:"read-default-float-format",children:(0,n.jsx)("b",{children:(0,n.jsx)(r.em,{children:"read-default-float-format"})})}),"\u2217 Variable"]})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Value Type:"})}),"\n",(0,n.jsxs)(r.p,{children:["one of the ",(0,n.jsx)(r.em,{children:"atomic type specifiers"})," ",(0,n.jsx)(t,{styled:!0,term:"short-float",children:(0,n.jsx)("b",{children:"short-float"})}),", ",(0,n.jsx)(t,{styled:!0,term:"single-float",children:(0,n.jsx)("b",{children:"single-float"})}),", ",(0,n.jsx)(t,{styled:!0,term:"double-float",children:(0,n.jsx)("b",{children:"double-float"})}),", or ",(0,n.jsx)(t,{styled:!0,term:"long-float",children:(0,n.jsx)("b",{children:"long-float"})}),", or else some other ",(0,n.jsx)(r.em,{children:"type specifier"})," defined by the ",(0,n.jsx)(t,{styled:!0,term:"implementation",children:(0,n.jsx)("i",{children:"implementation"})})," to be acceptable."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Initial Value:"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(t,{styled:!0,term:"symbol",children:(0,n.jsx)("i",{children:"symbol"})})," ",(0,n.jsx)(t,{styled:!0,term:"single-float",children:(0,n.jsx)("b",{children:"single-float"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(r.p,{children:["Controls the floating-point format that is to be used when reading a floating-point number that has no ",(0,n.jsx)(r.em,{children:"exponent marker"})," or that has e or E for an ",(0,n.jsx)(r.em,{children:"exponent marker"})," . Other ",(0,n.jsx)(r.em,{children:"exponent markers"})," explicitly prescribe the floating-point format to be used."]}),"\n",(0,n.jsxs)(r.p,{children:["The printer uses ",(0,n.jsx)(t,{styled:!0,term:"read-default-float-format",children:(0,n.jsx)("b",{children:"*read-default-float-format*"})})," to guide the choice of ",(0,n.jsx)(r.em,{children:"exponent markers"})," when printing floating-point numbers."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lisp",children:'\n(let ((\\*read-default-float-format\\* \u2019double-float)) \n  (read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) \n\u2192 (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. \n\u2192 (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. \u2192 (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. \u2192 (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. \u2192 (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. \u2192 (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. \n*\u2217***read-eval***\u2217 Variable* \n\n'})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Value Type:"})}),"\n",(0,n.jsxs)(r.p,{children:["a ",(0,n.jsx)(r.em,{children:"generalized boolean"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Initial Value:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{styled:!0,term:"true",children:(0,n.jsx)("i",{children:"true"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(r.p,{children:["If it is ",(0,n.jsx)(t,{styled:!0,term:"true",children:(0,n.jsx)("i",{children:"true"})}),", the #. ",(0,n.jsx)(r.em,{children:"reader macro"})," has its normal effect. Otherwise, that ",(0,n.jsx)(r.em,{children:"reader macro"})," signals an error of ",(0,n.jsx)(t,{styled:!0,term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(t,{styled:!0,term:"reader-error",children:(0,n.jsx)("b",{children:"reader-error"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,n.jsx)(t,{styled:!0,term:"print-readably",children:(0,n.jsx)("b",{children:"*print-readably*"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.strong,{children:"*read-eval*"})," is ",(0,n.jsx)(t,{styled:!0,term:"false",children:(0,n.jsx)("i",{children:"false"})})," and ",(0,n.jsx)(t,{styled:!0,term:"print-readably",children:(0,n.jsx)("b",{children:"*print-readably*"})})," is ",(0,n.jsx)(t,{styled:!0,term:"true",children:(0,n.jsx)("i",{children:"true"})}),", any ",(0,n.jsx)(t,{styled:!0,term:"method",children:(0,n.jsx)("i",{children:"method"})})," for ",(0,n.jsx)(t,{styled:!0,term:"print-object",children:(0,n.jsx)("b",{children:"print-object"})})," that would output a reference to the #. ",(0,n.jsx)(r.em,{children:"reader macro"})," either outputs something different or signals an error of ",(0,n.jsx)(t,{styled:!0,term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(t,{styled:!0,term:"print-not-readable",children:(0,n.jsx)("b",{children:"print-not-readable"})}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const i={title:"read-default-float-format"},s="*read-default-float-format*",o={id:"chap-23/cd-c-dictionary/read-default-float-format_variable",title:"read-default-float-format",description:"Expanded Reference: \\read-default-float-format\\",source:"@site/docs/chap-23/cd-c-dictionary/read-default-float-format_variable.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/read-default-float-format_variable",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read-default-float-format_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/read-default-float-format_variable.md",tags:[],version:"current",frontMatter:{title:"read-default-float-format"},sidebar:"tutorialSidebar",previous:{title:"make-dispatch-macro-character",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/make-dispatch-macro-character_function"},next:{title:"read-delimited-list",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read-delimited-list_function"}},c={},h=[{value:"Expanded Reference: *read-default-float-format*",id:"expanded-reference-read-default-float-format",level:2}];function f(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"read-default-float-format",children:"*read-default-float-format*"}),"\n","\n","\n",(0,n.jsx)(d,{}),"\n",(0,n.jsx)(r.h2,{id:"expanded-reference-read-default-float-format",children:"Expanded Reference: *read-default-float-format*"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lisp",children:"*read-default-float-format*\n"})})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>d});var n=t(67294);const a={},l=n.createContext(a);function d(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);