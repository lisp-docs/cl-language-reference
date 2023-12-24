"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[4924],{10216:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=n(85893),r=n(11151);function i(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"close"})," ",(0,t.jsx)(n,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"close",children:(0,t.jsx)("b",{children:"close"})})," ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," &key ",(0,t.jsx)(s.em,{children:"abort \u2192 result"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"\u2014a ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," (either ",(0,t.jsx)(n,{styled:!0,term:"open",children:(0,t.jsx)("i",{children:"open"})})," or ",(0,t.jsx)(n,{styled:!0,term:"closed",children:(0,t.jsx)("i",{children:"closed"})}),")."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"abort"}),"\u2014a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". The default is ",(0,t.jsx)(n,{styled:!0,term:"false",children:(0,t.jsx)("i",{children:"false"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"result"}),"\u2014",(0,t.jsx)(n,{styled:!0,term:"t",children:(0,t.jsx)("b",{children:"t"})})," if the ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," was ",(0,t.jsx)(n,{styled:!0,term:"open",children:(0,t.jsx)("i",{children:"open"})})," at the time it was received as an ",(0,t.jsx)(n,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"argument"})}),", or ",(0,t.jsx)(s.em,{children:"implementation dependent"})," otherwise."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"close",children:(0,t.jsx)("b",{children:"close"})})," closes ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),". Closing a ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," means that it may no longer be used in input or output operations. The act of ",(0,t.jsx)(s.em,{children:"closing"})," a ",(0,t.jsx)(s.em,{children:"file stream"})," ends the association between the ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," and its associated ",(0,t.jsx)(n,{styled:!0,term:"file",children:(0,t.jsx)("i",{children:"file"})}),"; the transaction with the ",(0,t.jsx)(s.em,{children:"file system"})," is terminated, and input/output may no longer be performed on the ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.em,{children:"abort"})," is ",(0,t.jsx)(n,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),", an attempt is made to clean up any side effects of having created ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),". If ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," performs output to a file that was created when the ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," was created, the file is deleted and any previously existing file is not superseded."]}),"\n",(0,t.jsxs)(s.p,{children:["It is permissible to close an already closed ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),", but in that case the ",(0,t.jsx)(s.em,{children:"result"})," is ",(0,t.jsx)(s.em,{children:"implementation dependent"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["After ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is closed, it is still possible to perform the following query operations upon it: ",(0,t.jsx)(n,{styled:!0,term:"streamp",children:(0,t.jsx)("b",{children:"streamp"})}),", ",(0,t.jsx)(n,{styled:!0,term:"pathname",children:(0,t.jsx)("b",{children:"pathname"})}),", ",(0,t.jsx)(n,{styled:!0,term:"truename",children:(0,t.jsx)("b",{children:"truename"})}),", ",(0,t.jsx)(n,{styled:!0,term:"merge-pathnames",children:(0,t.jsx)("b",{children:"merge-pathnames"})}),", ",(0,t.jsx)(s.strong,{children:"pathname-host"}),", ",(0,t.jsx)(s.strong,{children:"pathname-device"}),", ",(0,t.jsx)(s.strong,{children:"pathname-directory"}),",",(0,t.jsx)(s.strong,{children:"pathname-name"}),", ",(0,t.jsx)(s.strong,{children:"pathname-type"}),", ",(0,t.jsx)(s.strong,{children:"pathname-version"}),", ",(0,t.jsx)(n,{styled:!0,term:"namestring",children:(0,t.jsx)("b",{children:"namestring"})}),", ",(0,t.jsx)(n,{styled:!0,term:"file-namestring",children:(0,t.jsx)("b",{children:"file-namestring"})}),", ",(0,t.jsx)(n,{styled:!0,term:"directory-namestring",children:(0,t.jsx)("b",{children:"directory-namestring"})}),", ",(0,t.jsx)(n,{styled:!0,term:"host-namestring",children:(0,t.jsx)("b",{children:"host-namestring"})}),", ",(0,t.jsx)(n,{styled:!0,term:"enough-namestring",children:(0,t.jsx)("b",{children:"enough-namestring"})}),", ",(0,t.jsx)(n,{styled:!0,term:"open",children:(0,t.jsx)("b",{children:"open"})}),", ",(0,t.jsx)(n,{styled:!0,term:"probe-file",children:(0,t.jsx)("b",{children:"probe-file"})}),", and ",(0,t.jsx)(n,{styled:!0,term:"directory",children:(0,t.jsx)("b",{children:"directory"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The effect of ",(0,t.jsx)(n,{styled:!0,term:"close",children:(0,t.jsx)("b",{children:"close"})})," on a ",(0,t.jsx)(s.em,{children:"constructed stream"})," is to close the argument ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," only. There is no effect on the ",(0,t.jsx)(n,{styled:!0,term:"constituent",children:(0,t.jsx)("i",{children:"constituents"})})," of ",(0,t.jsx)(s.em,{children:"composite streams"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For a ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," created with ",(0,t.jsx)(n,{styled:!0,term:"make-string-output-stream",children:(0,t.jsx)("b",{children:"make-string-output-stream"})}),", the result of ",(0,t.jsx)(n,{styled:!0,term:"get-output-stream-string",children:(0,t.jsx)("b",{children:"get-output-stream-string"})})," is unspecified after ",(0,t.jsx)(n,{styled:!0,term:"close",children:(0,t.jsx)("b",{children:"close"})}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"\n(setq s (make-broadcast-stream)) \u2192 #<BROADCAST-STREAM> \n(close s) \u2192 T \n(output-stream-p s) \u2192 true \n\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is ",(0,t.jsx)(n,{styled:!0,term:"closed",children:(0,t.jsx)("i",{children:"closed"})})," (if necessary). If ",(0,t.jsx)(s.em,{children:"abort"})," is ",(0,t.jsx)(n,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," and the ",(0,t.jsx)(n,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is an ",(0,t.jsx)(s.em,{children:"output file stream"}),", its associated ",(0,t.jsx)(n,{styled:!0,term:"file",children:(0,t.jsx)("i",{children:"file"})})," might be deleted."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n,{styled:!0,term:"open",children:(0,t.jsx)("b",{children:"open"})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const l={title:"close"},d="close",a={id:"chap-21/cb-c-dictionary/close_function",title:"close",description:"Expanded Reference: close",source:"@site/docs/chap-21/cb-c-dictionary/close_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/close_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/close_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/close_function.md",tags:[],version:"current",frontMatter:{title:"close"},sidebar:"tutorialSidebar",previous:{title:"clear-input",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/clear-input_function"},next:{title:"concatenated-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/concatenated-stream_system-class"}},o={},h=[{value:"Expanded Reference: close",id:"expanded-reference-close",level:2}];function m(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"close",children:"close"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(s.h2,{id:"expanded-reference-close",children:"Expanded Reference: close"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"(close )\n"})})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>c});var t=n(67294);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);