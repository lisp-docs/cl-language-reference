"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[64060],{75837:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>o,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var a=c(85893),t=c(11151);function n(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:c,GlossaryTerm:n}=r;return c||s("DictionaryLink",!0),n||s("GlossaryTerm",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"make-dispatch-macro-character"})," ",(0,a.jsx)(n,{term:"function",children:(0,a.jsx)("i",{children:"Function"})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(c,{term:"make-dispatch-macro-character",children:(0,a.jsx)("b",{children:"make-dispatch-macro-character"})})," ",(0,a.jsx)(r.em,{children:"char"})," &optional ",(0,a.jsx)(r.em,{children:"non-terminating-p readtable \u2192"})," ",(0,a.jsx)(c,{term:"t",children:(0,a.jsx)("b",{children:"t"})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.em,{children:"char"}),"\u2014a ",(0,a.jsx)(n,{term:"character",children:(0,a.jsx)("i",{children:"character"})})," ."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.em,{children:"non-terminating-p"}),"\u2014a ",(0,a.jsx)(n,{styled:!0,term:"generalized boolean",children:(0,a.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,a.jsx)(n,{term:"false",children:(0,a.jsx)("i",{children:"false"})}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(n,{term:"readtable",children:(0,a.jsx)("i",{children:"readtable"})}),"\u2014a ",(0,a.jsx)(n,{term:"readtable",children:(0,a.jsx)("i",{children:"readtable"})}),". The default is the ",(0,a.jsx)(n,{styled:!0,term:"current readtable",children:(0,a.jsx)("i",{children:"current readtable"})}),"."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(c,{term:"make-dispatch-macro-character",children:(0,a.jsx)("b",{children:"make-dispatch-macro-character"})})," makes ",(0,a.jsx)(r.em,{children:"char"})," be a ",(0,a.jsx)(n,{styled:!0,term:"dispatching macro character",children:(0,a.jsx)("i",{children:"dispatching macro character"})})," in ",(0,a.jsx)(n,{term:"readtable",children:(0,a.jsx)("i",{children:"readtable"})}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Initially, every ",(0,a.jsx)(n,{term:"character",children:(0,a.jsx)("i",{children:"character"})})," in the dispatch table associated with the ",(0,a.jsx)(r.em,{children:"char"})," has an associated function that signals an error of ",(0,a.jsx)(n,{term:"type",children:(0,a.jsx)("i",{children:"type"})})," ",(0,a.jsx)(c,{term:"reader-error",children:(0,a.jsx)("b",{children:"reader-error"})}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["If ",(0,a.jsx)(r.em,{children:"non-terminating-p"})," is ",(0,a.jsx)(n,{term:"true",children:(0,a.jsx)("i",{children:"true"})}),", the ",(0,a.jsx)(n,{styled:!0,term:"dispatching macro character",children:(0,a.jsx)("i",{children:"dispatching macro character"})})," is made a ",(0,a.jsx)(r.em,{children:"non-terminating macro character"})," ; if ",(0,a.jsx)(r.em,{children:"non-terminating-p"})," is ",(0,a.jsx)(n,{term:"false",children:(0,a.jsx)("i",{children:"false"})}),", the ",(0,a.jsx)(n,{styled:!0,term:"dispatching macro character",children:(0,a.jsx)("i",{children:"dispatching macro character"})})," is made a ",(0,a.jsx)(r.em,{children:"terminating macro character"})," ."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lisp",children:"(get-macro-character #\\\\&#123;) \u2192 NIL, *false* \n\t\t     (make-dispatch-macro-character #\\\\&#123;) \u2192 T \n\t\t\t\t\t\t    (not (get-macro-character #\\\\&#123;)) \u2192 false \n\t\t\t\t\t\t\t\t\t      The *readtable* is altered. \n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(c,{term:"readtable",children:(0,a.jsx)("b",{children:"*readtable*"})}),", ",(0,a.jsx)(r.strong,{children:"set-dispatch-macro-character"})]})]})}function i(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(n,{...e})}):n(e)}function s(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"make-dispatch-macro-character"},h="make-dispatch-macro-character",l={id:"chap-23/cd-c-dictionary/make-dispatch-macro-character_function",title:"make-dispatch-macro-character",description:"Expanded Reference: make-dispatch-macro-character",source:"@site/docs/chap-23/cd-c-dictionary/make-dispatch-macro-character_function.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/make-dispatch-macro-character_function",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/make-dispatch-macro-character_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/make-dispatch-macro-character_function.md",tags:[],version:"current",frontMatter:{title:"make-dispatch-macro-character"},sidebar:"tutorialSidebar",previous:{title:"copy-readtable",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/copy-readtable_function"},next:{title:"read-default-float-format",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/read-default-float-format_variable"}},o={},m=[{value:"Expanded Reference: make-dispatch-macro-character",id:"expanded-reference-make-dispatch-macro-character",level:2}];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"make-dispatch-macro-character",children:"make-dispatch-macro-character"}),"\n","\n","\n",(0,a.jsx)(i,{}),"\n",(0,a.jsx)(r.h2,{id:"expanded-reference-make-dispatch-macro-character",children:"Expanded Reference: make-dispatch-macro-character"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lisp",children:"(make-dispatch-macro-character )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,r,c)=>{c.d(r,{Z:()=>s,a:()=>i});var a=c(67294);const t={},n=a.createContext(t);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);