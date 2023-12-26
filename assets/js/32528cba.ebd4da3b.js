"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[4924],{10216:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var s=n(85893),t=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:i}=r;return n||l("DictionaryLink",!0),i||l("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"close"})," ",(0,s.jsx)(i,{term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{term:"close",children:(0,s.jsx)("b",{children:"close"})})," ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," &key ",(0,s.jsx)(r.em,{children:"abort \u2192 result"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})}),"\u2014a ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," (either ",(0,s.jsx)(i,{term:"open",children:(0,s.jsx)("i",{children:"open"})})," or ",(0,s.jsx)(i,{term:"closed",children:(0,s.jsx)("i",{children:"closed"})}),")."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"abort"}),"\u2014a ",(0,s.jsx)(i,{styled:!0,term:"generalized boolean",children:(0,s.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,s.jsx)(i,{term:"false",children:(0,s.jsx)("i",{children:"false"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"result"}),"\u2014",(0,s.jsx)(n,{term:"t",children:(0,s.jsx)("b",{children:"t"})})," if the ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," was ",(0,s.jsx)(i,{term:"open",children:(0,s.jsx)("i",{children:"open"})})," at the time it was received as an ",(0,s.jsx)(i,{term:"argument",children:(0,s.jsx)("i",{children:"argument"})}),", or ",(0,s.jsx)(r.em,{children:"implementation dependent"})," otherwise."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{term:"close",children:(0,s.jsx)("b",{children:"close"})})," closes ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})}),". Closing a ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," means that it may no longer be used in input or output operations. The act of ",(0,s.jsx)(r.em,{children:"closing"})," a ",(0,s.jsx)(i,{styled:!0,term:"file stream",children:(0,s.jsx)("i",{children:"file stream"})})," ends the association between the ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," and its associated ",(0,s.jsx)(i,{term:"file",children:(0,s.jsx)("i",{children:"file"})}),"; the transaction with the ",(0,s.jsx)(i,{styled:!0,term:"file system",children:(0,s.jsx)("i",{children:"file system"})})," is terminated, and input/output may no longer be performed on the ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.em,{children:"abort"})," is ",(0,s.jsx)(i,{term:"true",children:(0,s.jsx)("i",{children:"true"})}),", an attempt is made to clean up any side effects of having created ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})}),". If ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," performs output to a file that was created when the ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," was created, the file is deleted and any previously existing file is not superseded."]}),"\n",(0,s.jsxs)(r.p,{children:["It is permissible to close an already closed ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})}),", but in that case the ",(0,s.jsx)(r.em,{children:"result"})," is ",(0,s.jsx)(r.em,{children:"implementation dependent"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["After ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," is closed, it is still possible to perform the following query operations upon it: ",(0,s.jsx)(n,{term:"streamp",children:(0,s.jsx)("b",{children:"streamp"})}),", ",(0,s.jsx)(n,{term:"pathname",children:(0,s.jsx)("b",{children:"pathname"})}),", ",(0,s.jsx)(n,{term:"truename",children:(0,s.jsx)("b",{children:"truename"})}),", ",(0,s.jsx)(n,{term:"merge-pathnames",children:(0,s.jsx)("b",{children:"merge-pathnames"})}),", ",(0,s.jsx)(r.strong,{children:"pathname-host"}),", ",(0,s.jsx)(r.strong,{children:"pathname-device"}),", ",(0,s.jsx)(r.strong,{children:"pathname-directory"}),",",(0,s.jsx)(r.strong,{children:"pathname-name"}),", ",(0,s.jsx)(r.strong,{children:"pathname-type"}),", ",(0,s.jsx)(r.strong,{children:"pathname-version"}),", ",(0,s.jsx)(n,{term:"namestring",children:(0,s.jsx)("b",{children:"namestring"})}),", ",(0,s.jsx)(n,{term:"file-namestring",children:(0,s.jsx)("b",{children:"file-namestring"})}),", ",(0,s.jsx)(n,{term:"directory-namestring",children:(0,s.jsx)("b",{children:"directory-namestring"})}),", ",(0,s.jsx)(n,{term:"host-namestring",children:(0,s.jsx)("b",{children:"host-namestring"})}),", ",(0,s.jsx)(n,{term:"enough-namestring",children:(0,s.jsx)("b",{children:"enough-namestring"})}),", ",(0,s.jsx)(n,{term:"open",children:(0,s.jsx)("b",{children:"open"})}),", ",(0,s.jsx)(n,{term:"probe-file",children:(0,s.jsx)("b",{children:"probe-file"})}),", and ",(0,s.jsx)(n,{term:"directory",children:(0,s.jsx)("b",{children:"directory"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The effect of ",(0,s.jsx)(n,{term:"close",children:(0,s.jsx)("b",{children:"close"})})," on a ",(0,s.jsx)(i,{styled:!0,term:"constructed stream",children:(0,s.jsx)("i",{children:"constructed stream"})})," is to close the argument ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," only. There is no effect on the ",(0,s.jsx)(i,{term:"constituent",children:(0,s.jsx)("i",{children:"constituents"})})," of ",(0,s.jsx)(i,{styled:!0,term:"composite stream",children:(0,s.jsx)("i",{children:"composite streams"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For a ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," created with ",(0,s.jsx)(n,{term:"make-string-output-stream",children:(0,s.jsx)("b",{children:"make-string-output-stream"})}),", the result of ",(0,s.jsx)(n,{term:"get-output-stream-string",children:(0,s.jsx)("b",{children:"get-output-stream-string"})})," is unspecified after ",(0,s.jsx)(n,{term:"close",children:(0,s.jsx)("b",{children:"close"})}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(setq s (make-broadcast-stream)) \u2192 #<BROADCAST-STREAM> \n(close s) \u2192 T \n(output-stream-p s) \u2192 true \n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," is ",(0,s.jsx)(i,{term:"closed",children:(0,s.jsx)("i",{children:"closed"})})," (if necessary). If ",(0,s.jsx)(r.em,{children:"abort"})," is ",(0,s.jsx)(i,{term:"true",children:(0,s.jsx)("i",{children:"true"})})," and the ",(0,s.jsx)(i,{term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," is an ",(0,s.jsx)(r.em,{children:"output file stream"}),", its associated ",(0,s.jsx)(i,{term:"file",children:(0,s.jsx)("i",{children:"file"})})," might be deleted."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n,{term:"open",children:(0,s.jsx)("b",{children:"open"})})]})}function c(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}function l(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"close"},a="close",o={id:"chap-21/cb-c-dictionary/close_function",title:"close",description:"Expanded Reference: close",source:"@site/docs/chap-21/cb-c-dictionary/close_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/close_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/close_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/close_function.md",tags:[],version:"current",frontMatter:{title:"close"},sidebar:"tutorialSidebar",previous:{title:"clear-input",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/clear-input_function"},next:{title:"concatenated-stream",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/concatenated-stream_system-class"}},h={},m=[{value:"Expanded Reference: close",id:"expanded-reference-close",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"close",children:"close"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(r.h2,{id:"expanded-reference-close",children:"Expanded Reference: close"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(close )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>c});var s=n(67294);const t={},i=s.createContext(t);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);