"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[596],{98623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var n=r(85893),i=r(11151);function s(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"write-byte"})," ",(0,n.jsx)(r,{styled:!0,term:"function",children:(0,n.jsx)("i",{children:"Function"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r,{styled:!0,term:"write-byte",children:(0,n.jsx)("b",{children:"write-byte"})})," ",(0,n.jsx)(t.em,{children:"byte stream \u2192 byte"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r,{styled:!0,term:"byte",children:(0,n.jsx)("i",{children:"byte"})}),"\u2014an ",(0,n.jsx)(t.em,{children:"integer"})," of the ",(0,n.jsx)(t.em,{children:"stream element type"})," of ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"\u2014a ",(0,n.jsx)(t.em,{children:"binary output stream"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r,{styled:!0,term:"write-byte",children:(0,n.jsx)("b",{children:"write-byte"})})," writes one byte, ",(0,n.jsx)(r,{styled:!0,term:"byte",children:(0,n.jsx)("i",{children:"byte"})}),", to ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lisp",children:'\n(with-open-file (s "temp-bytes" \n\t\t   :direction :output \n\t\t   :element-type \u2019unsigned-byte) \n  (write-byte 101 s)) \u2192 101 \n\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Side Effects:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is modified."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Affected By:"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"element type"})," of the ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Exceptional Situations:"})}),"\n",(0,n.jsxs)(t.p,{children:["Should signal an error of ",(0,n.jsx)(r,{styled:!0,term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(r,{styled:!0,term:"type-error",children:(0,n.jsx)("b",{children:"type-error"})})," if ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is not a ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),". Should signal an error of ",(0,n.jsx)(r,{styled:!0,term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(r,{styled:!0,term:"error",children:(0,n.jsx)("b",{children:"error"})})," if ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})})," is not a ",(0,n.jsx)(t.em,{children:"binary output stream"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Might signal an error of ",(0,n.jsx)(r,{styled:!0,term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(r,{styled:!0,term:"type-error",children:(0,n.jsx)("b",{children:"type-error"})})," if ",(0,n.jsx)(r,{styled:!0,term:"byte",children:(0,n.jsx)("i",{children:"byte"})})," is not an ",(0,n.jsx)(t.em,{children:"integer"})," of the ",(0,n.jsx)(t.em,{children:"stream element type"})," of ",(0,n.jsx)(r,{styled:!0,term:"stream",children:(0,n.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r,{styled:!0,term:"read-byte",children:(0,n.jsx)("b",{children:"read-byte"})}),", ",(0,n.jsx)(r,{styled:!0,term:"write-char",children:(0,n.jsx)("b",{children:"write-char"})}),", ",(0,n.jsx)(r,{styled:!0,term:"write-sequence",children:(0,n.jsx)("b",{children:"write-sequence"})})]}),"\n",(0,n.jsx)(r,{styled:!0,term:"peek-char",children:(0,n.jsx)("b",{children:"peek-char"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}const d={title:"write-byte"},l="write-byte",o={id:"chap-21/cb-c-dictionary/write-byte_function",title:"write-byte",description:"Expanded Reference: write-byte",source:"@site/docs/chap-21/cb-c-dictionary/write-byte_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/write-byte_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/write-byte_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/write-byte_function.md",tags:[],version:"current",frontMatter:{title:"write-byte"},sidebar:"tutorialSidebar",previous:{title:"with-output-to-string",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/with-output-to-string_macro"},next:{title:"write-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/write-char_function"}},a={},h=[{value:"Expanded Reference: write-byte",id:"expanded-reference-write-byte",level:2}];function x(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"write-byte",children:"write-byte"}),"\n","\n","\n",(0,n.jsx)(c,{}),"\n",(0,n.jsx)(t.h2,{id:"expanded-reference-write-byte",children:"Expanded Reference: write-byte"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lisp",children:"(write-byte )\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>c});var n=r(67294);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);