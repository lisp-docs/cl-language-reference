"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[27110],{92026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(85893),s=n(11151);function i(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"make-string-output-stream"})," ",(0,r.jsx)(n,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(n,{styled:!0,term:"make-string-output-stream",children:(0,r.jsx)("b",{children:"make-string-output-stream"})})," &key ",(0,r.jsx)(t.em,{children:"element-type \u2192 string-stream"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"element-type"}),"\u2014a ",(0,r.jsx)(t.em,{children:"type specifier"})," . The default is ",(0,r.jsx)(n,{styled:!0,term:"character",children:(0,r.jsx)("b",{children:"character"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"string-stream"}),"\u2014an ",(0,r.jsx)(t.em,{children:"output string stream"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns an ",(0,r.jsx)(t.em,{children:"output string stream"})," that accepts ",(0,r.jsx)(n,{styled:!0,term:"character",children:(0,r.jsx)("i",{children:"characters"})})," and makes available (via ",(0,r.jsx)(n,{styled:!0,term:"get-output-stream-string",children:(0,r.jsx)("b",{children:"get-output-stream-string"})}),") a ",(0,r.jsx)(n,{styled:!0,term:"string",children:(0,r.jsx)("i",{children:"string"})})," that contains the ",(0,r.jsx)(n,{styled:!0,term:"character",children:(0,r.jsx)("i",{children:"characters"})})," that were actually output."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"element-type"})," names the ",(0,r.jsx)(n,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," of the ",(0,r.jsx)(n,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"elements"})})," of the ",(0,r.jsx)(n,{styled:!0,term:"string",children:(0,r.jsx)("i",{children:"string"})}),"; a ",(0,r.jsx)(n,{styled:!0,term:"string",children:(0,r.jsx)("i",{children:"string"})})," is constructed of the most specialized ",(0,r.jsx)(n,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," that can accommodate ",(0,r.jsx)(n,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"elements"})})," of that ",(0,r.jsx)(t.em,{children:"element-type"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lisp",children:'\n(let ((s (make-string-output-stream))) \n  (write-string "testing... " s) \n  (prin1 1234 s) \n  (get-output-stream-string s)) \n\u2192 "testing... 1234" \nNone.. \n\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(n,{styled:!0,term:"get-output-stream-string",children:(0,r.jsx)("b",{children:"get-output-stream-string"})}),", ",(0,r.jsx)(n,{styled:!0,term:"with-output-to-string",children:(0,r.jsx)("b",{children:"with-output-to-string"})})]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const a={title:"make-string-output-stream"},o="make-string-output-stream",l={id:"chap-21/cb-c-dictionary/make-string-output-stream_function",title:"make-string-output-stream",description:"Expanded Reference: make-string-output-stream",source:"@site/docs/chap-21/cb-c-dictionary/make-string-output-stream_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/make-string-output-stream_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/make-string-output-stream_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/make-string-output-stream_function.md",tags:[],version:"current",frontMatter:{title:"make-string-output-stream"},sidebar:"tutorialSidebar",previous:{title:"make-string-input-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/make-string-input-stream_function"},next:{title:"make-synonym-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/make-synonym-stream_function"}},d={},m=[{value:"Expanded Reference: make-string-output-stream",id:"expanded-reference-make-string-output-stream",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"make-string-output-stream",children:"make-string-output-stream"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(t.h2,{id:"expanded-reference-make-string-output-stream",children:"Expanded Reference: make-string-output-stream"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lisp",children:"(make-string-output-stream )\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(67294);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);