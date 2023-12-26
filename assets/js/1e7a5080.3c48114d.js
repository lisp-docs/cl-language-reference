"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[38367],{37511:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>x});var t=n(85893),i=n(11151);function s(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:n,GlossaryTerm:s}=r;return n||d("ClLinks",!0),s||d("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"read-byte"})," ",(0,t.jsx)(n,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read-byte",children:(0,t.jsx)("b",{children:"read-byte"})})," ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," &optional ",(0,t.jsx)(r.em,{children:"eof-error-p eof-value \u2192 byte"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"\u2014a ",(0,t.jsx)(r.em,{children:"binary input stream"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"eof-error-p"}),"\u2014a ",(0,t.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,t.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,t.jsx)(n,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"eof-value"}),"\u2014an ",(0,t.jsx)(n,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),". The default is ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"byte",children:(0,t.jsx)("i",{children:"byte"})}),"\u2014an ",(0,t.jsx)(r.em,{children:"integer"})," , or the ",(0,t.jsx)(r.em,{children:"eof-value"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read-byte",children:(0,t.jsx)("b",{children:"read-byte"})})," reads and returns one byte from ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If an ",(0,t.jsx)(s,{styled:!0,term:"end of file",children:(0,t.jsx)("i",{children:"end of file"})}),(0,t.jsx)("sub",{children:"2"})," occurs and ",(0,t.jsx)(r.em,{children:"eof-error-p"})," is ",(0,t.jsx)(n,{term:"false",children:(0,t.jsx)("i",{children:"false"})}),", the ",(0,t.jsx)(r.em,{children:"eof-value"})," is returned."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:'(with-open-file (s "temp-bytes" \n\t\t   :direction :output \n\t\t   :element-type \u2019unsigned-byte) \n  (write-byte 101 s)) \u2192 101 \n(with-open-file (s "temp-bytes" :element-type \u2019unsigned-byte) \n  (format t "~S ~S" (read-byte s) (read-byte s nil \u2019eof))) \n\u25b7 101 EOF \n\u2192 NIL \n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(r.p,{children:["Modifies ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(r.p,{children:["Should signal an error of ",(0,t.jsx)(n,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," if ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is not a ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Should signal an error of ",(0,t.jsx)(n,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"error",children:(0,t.jsx)("b",{children:"error"})})," if ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is not a ",(0,t.jsx)(r.em,{children:"binary input stream"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If there are no ",(0,t.jsx)(n,{term:"byte",children:(0,t.jsx)("i",{children:"bytes"})})," remaining in the ",(0,t.jsx)(n,{term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," and ",(0,t.jsx)(r.em,{children:"eof-error-p"})," is ",(0,t.jsx)(n,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),", an error of ",(0,t.jsx)(n,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"end-of-file",children:(0,t.jsx)("b",{children:"end-of-file"})})," is signaled."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read-char",children:(0,t.jsx)("b",{children:"read-char"})}),", ",(0,t.jsx)(n,{term:"read-sequence",children:(0,t.jsx)("b",{children:"read-sequence"})}),", ",(0,t.jsx)(n,{term:"write-byte",children:(0,t.jsx)("b",{children:"write-byte"})})]})]})}function c(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function d(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"read-byte"},a="read-byte",o={id:"chap-21/cb-c-dictionary/read-byte_function",title:"read-byte",description:"Expanded Reference: read-byte",source:"@site/docs/chap-21/cb-c-dictionary/read-byte_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/read-byte_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-byte_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/read-byte_function.md",tags:[],version:"current",frontMatter:{title:"read-byte"},sidebar:"tutorialSidebar",previous:{title:"peek-char",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/peek-char_function"},next:{title:"read-char-no-hang",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-char-no-hang_function"}},h={},x=[{value:"Expanded Reference: read-byte",id:"expanded-reference-read-byte",level:2}];function j(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"read-byte",children:"read-byte"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-read-byte",children:"Expanded Reference: read-byte"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(read-byte )\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>c});var t=n(67294);const i={},s=t.createContext(i);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);