"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[73952],{29137:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var t=n(85893),c=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:i}=r;return n||a("DictionaryLink",!0),i||a("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"write-char"})," ",(0,t.jsx)(i,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"write-char",children:(0,t.jsx)("b",{children:"write-char"})})," ",(0,t.jsx)(i,{term:"character",children:(0,t.jsx)("i",{children:"character"})})," &optional ",(0,t.jsx)(r.em,{children:"output-stream \u2192 character"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(i,{term:"character",children:(0,t.jsx)("i",{children:"character"})}),"\u2014a ",(0,t.jsx)(i,{term:"character",children:(0,t.jsx)("i",{children:"character"})})," ."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"output-stream"})," \u2013 an ",(0,t.jsx)(r.em,{children:"output stream designator"})," . The default is ",(0,t.jsx)(i,{styled:!0,term:"standard output",children:(0,t.jsx)("i",{children:"standard output"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"write-char",children:(0,t.jsx)("b",{children:"write-char"})})," outputs ",(0,t.jsx)(i,{term:"character",children:(0,t.jsx)("i",{children:"character"})})," to ",(0,t.jsx)(r.em,{children:"output-stream"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:'(write-char #\\a) \n\u25b7 a \n\u2192 #\\a \n(with-output-to-string (s) \n  (write-char #\\a s) \n  (write-char #\\Space s) \n  (write-char #\\b s)) \n\u2192 "a b" \n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"output-stream"})," is modified."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"*standard-output*"}),", ",(0,t.jsx)(n,{term:"terminal-io",children:(0,t.jsx)("b",{children:"*terminal-io*"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read-char",children:(0,t.jsx)("b",{children:"read-char"})}),", ",(0,t.jsx)(n,{term:"write-byte",children:(0,t.jsx)("b",{children:"write-byte"})}),", ",(0,t.jsx)(n,{term:"write-sequence",children:(0,t.jsx)("b",{children:"write-sequence"})})]}),"\n",(0,t.jsx)(n,{term:"read-line",children:(0,t.jsx)("b",{children:"read-line"})})]})}function s(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function a(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"write-char"},o="write-char",h={id:"chap-21/cb-c-dictionary/write-char_function",title:"write-char",description:"Expanded Reference: write-char",source:"@site/docs/chap-21/cb-c-dictionary/write-char_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/write-char_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/write-char_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/write-char_function.md",tags:[],version:"current",frontMatter:{title:"write-char"},sidebar:"tutorialSidebar",previous:{title:"write-byte",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/write-byte_function"},next:{title:"write-sequence",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/write-sequence_function"}},l={},p=[{value:"Expanded Reference: write-char",id:"expanded-reference-write-char",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"write-char",children:"write-char"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-write-char",children:"Expanded Reference: write-char"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(write-char )\n"})})]})}function u(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>s});var t=n(67294);const c={},i=t.createContext(c);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);