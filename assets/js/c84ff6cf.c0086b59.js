"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[65068],{23001:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var t=n(85893),s=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"with-open-stream"})," ",(0,t.jsx)(n,{term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"with-open-stream",children:(0,t.jsx)("b",{children:"with-open-stream"})})," (",(0,t.jsx)(r.em,{children:"var stream"}),") ",(0,t.jsx)(r.em,{children:"{declaration}"}),"* ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"{form}"})}),"*"]}),"\n",(0,t.jsx)(r.p,{children:"\u2192 {result}*"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"var"}),"\u2014a ",(0,t.jsx)(r.em,{children:"variable name"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"\u2014a ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})}),"; evaluated to produce a ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"declaration",children:(0,t.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,t.jsx)(n,{term:"declare",children:(0,t.jsx)("b",{children:"declare"})})," ",(0,t.jsx)(n,{term:"expression",children:(0,t.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"\u2014an ",(0,t.jsx)(r.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n,{term:"value",children:(0,t.jsx)("i",{children:"values"})})," returned by the ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"with-open-stream",children:(0,t.jsx)("b",{children:"with-open-stream"})})," performs a series of operations on ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),", returns a value, and then closes the ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Var"})," is bound to the value of ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),", and then ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})})," are executed as an ",(0,t.jsx)(r.em,{children:"implicit progn"}),". ",(0,t.jsx)(r.em,{children:"stream"})," is automatically closed on exit from ",(0,t.jsx)(n,{term:"with-open-stream",children:(0,t.jsx)("b",{children:"with-open-stream"})}),", no matter whether the exit is normal or abnormal. The ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," has ",(0,t.jsx)(r.em,{children:"dynamic extent"}),"; its ",(0,t.jsx)(n,{term:"extent",children:(0,t.jsx)("i",{children:"extent"})})," ends when the ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"form"})})," is exited."]}),"\n",(0,t.jsxs)(r.p,{children:["The consequences are undefined if an attempt is made to ",(0,t.jsx)(n,{term:"assign",children:(0,t.jsx)("i",{children:"assign"})})," the the ",(0,t.jsx)(r.em,{children:"variable var"})," with the ",(0,t.jsx)(n,{term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:'(with-open-stream (s (make-string-input-stream "1 2 3 4")) \n  (+ (read s) (read s) (read s))) \u2192 6 \n\n\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is closed (upon exit)."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n,{term:"close",children:(0,t.jsx)("b",{children:"close"})})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const a={title:"with-open-stream"},o="with-open-stream",d={id:"chap-21/cb-c-dictionary/with-open-stream_macro",title:"with-open-stream",description:"Expanded Reference: with-open-stream",source:"@site/docs/chap-21/cb-c-dictionary/with-open-stream_macro.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/with-open-stream_macro",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/with-open-stream_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/with-open-stream_macro.md",tags:[],version:"current",frontMatter:{title:"with-open-stream"},sidebar:"tutorialSidebar",previous:{title:"with-open-file",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/with-open-file_macro"},next:{title:"with-output-to-string",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/with-output-to-string_macro"}},l={},h=[{value:"Expanded Reference: with-open-stream",id:"expanded-reference-with-open-stream",level:2}];function m(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"with-open-stream",children:"with-open-stream"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-with-open-stream",children:"Expanded Reference: with-open-stream"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(with-open-stream )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(67294);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);