"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[78662],{45235:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=t(85893),s=t(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:t,GlossaryTerm:i}=r;return t||c("ClLinks",!0),i||c("GlossaryTerm",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"two-way-stream"})," ",(0,n.jsx)(i,{styled:!0,term:"system class",children:(0,n.jsx)("i",{children:"System Class"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Class Precedence List:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"two-way-stream",children:(0,n.jsx)("b",{children:"two-way-stream"})}),", ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("b",{children:"stream"})}),", ",(0,n.jsx)(t,{term:"t",children:(0,n.jsx)("b",{children:"t"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.em,{children:"bidirectional composite stream"})," that receives its input from an associated ",(0,n.jsx)(r.em,{children:"input stream"})," and sends its output to an associated ",(0,n.jsx)(r.em,{children:"output stream"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"make-two-way-stream",children:(0,n.jsx)("b",{children:"make-two-way-stream"})}),", ",(0,n.jsx)(r.strong,{children:"two-way-stream-input-stream"}),", ",(0,n.jsx)(r.strong,{children:"two-way-stream-output-stream input-stream-p, output-stream-p"})," ",(0,n.jsx)(t,{term:"function",children:(0,n.jsx)("i",{children:"Function"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"input-stream-p"})," ",(0,n.jsx)(r.em,{children:"stream \u2192 generalized-boolean"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"output-stream-p"})," ",(0,n.jsx)(r.em,{children:"stream \u2192 generalized-boolean"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"\u2014a ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"generalized-boolean"}),"\u2014a ",(0,n.jsx)(i,{styled:!0,term:"generalized boolean",children:(0,n.jsx)("i",{children:"generalized boolean"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"input-stream-p"})," returns ",(0,n.jsx)(t,{term:"true",children:(0,n.jsx)("i",{children:"true"})})," if ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is an ",(0,n.jsx)(r.em,{children:"input stream"}),"; otherwise, returns ",(0,n.jsx)(t,{term:"false",children:(0,n.jsx)("i",{children:"false"})}),". ",(0,n.jsx)(r.strong,{children:"output-stream-p"})," returns ",(0,n.jsx)(t,{term:"true",children:(0,n.jsx)("i",{children:"true"})})," if ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is an ",(0,n.jsx)(r.em,{children:"output stream"}),"; otherwise, returns ",(0,n.jsx)(t,{term:"false",children:(0,n.jsx)("i",{children:"false"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lisp",children:'(input-stream-p \\*standard-input\\*) \u2192 true \n(input-stream-p \\*terminal-io\\*) \u2192 true \n(input-stream-p (make-string-output-stream)) \u2192 false \n(output-stream-p \\*standard-output\\*) \u2192 true \n(output-stream-p \\*terminal-io\\*) \u2192 true \n(output-stream-p (make-string-input-stream "jr")) \u2192 false \n'})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,n.jsxs)(r.p,{children:["Should signal an error of ",(0,n.jsx)(t,{term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(t,{term:"type-error",children:(0,n.jsx)("b",{children:"type-error"})})," if ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is not a ",(0,n.jsx)(t,{term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]})]})}function a(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}function c(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"two-way-stream"},l="two-way-stream",d={id:"chap-21/cb-c-dictionary/two-way-stream_system-class",title:"two-way-stream",description:"Expanded Reference: two-way-stream",source:"@site/docs/chap-21/cb-c-dictionary/two-way-stream_system-class.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/two-way-stream_system-class",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/two-way-stream_system-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/two-way-stream_system-class.md",tags:[],version:"current",frontMatter:{title:"two-way-stream"},sidebar:"tutorialSidebar",previous:{title:"terpri, fresh-line",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/terpri_fresh-line_function"},next:{title:"unread-char",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/unread-char_function"}},m={},p=[{value:"Expanded Reference: two-way-stream",id:"expanded-reference-two-way-stream",level:2}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"two-way-stream",children:"two-way-stream"}),"\n","\n","\n",(0,n.jsx)(a,{}),"\n",(0,n.jsx)(r.h2,{id:"expanded-reference-two-way-stream",children:"Expanded Reference: two-way-stream"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lisp",children:"(two-way-stream )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>a});var n=t(67294);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);