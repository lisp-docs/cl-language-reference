"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[52677],{9737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=t(85893),r=t(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"file-length"})," ",(0,i.jsx)(t,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"file-length",children:(0,i.jsx)("b",{children:"file-length"})})," ",(0,i.jsx)(n.em,{children:"stream \u2192 length"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"\u2014a ",(0,i.jsx)(n.em,{children:"stream associated with a file"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"length",children:(0,i.jsx)("i",{children:"length"})}),"\u2014a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," or ",(0,i.jsx)(t,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"file-length",children:(0,i.jsx)("b",{children:"file-length"})})," returns the length of ",(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),", or ",(0,i.jsx)(t,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," if the length cannot be determined."]}),"\n",(0,i.jsxs)(n.p,{children:["For a binary file, the length is measured in units of the ",(0,i.jsx)(n.em,{children:"element type"})," of the ",(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n(with-open-file (s "decimal-digits.text" \n\n\t\t   \n\t\t   \n\t\t   :direction :output :if-exists :error) \n  (princ "0123456789" s) \n  (truename s)) \n\u2192 #P"A:>Joe>decimal-digits.text.1" \n(with-open-file (s "decimal-digits.text") \n  (file-length s)) \n\u2192 10 \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{styled:!0,term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," is not a ",(0,i.jsx)(n.em,{children:"stream associated with a file"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(t,{styled:!0,term:"open",children:(0,i.jsx)("b",{children:"open"})})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const c={title:"file-length"},d="file-length",o={id:"chap-21/cb-c-dictionary/file-length_function",title:"file-length",description:"Expanded Reference: file-length",source:"@site/docs/chap-21/cb-c-dictionary/file-length_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/file-length_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/file-length_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/file-length_function.md",tags:[],version:"current",frontMatter:{title:"file-length"},sidebar:"tutorialSidebar",previous:{title:"end-of-file",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/end-of-file_condition-type"},next:{title:"file-position",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/file-position_function"}},a={},h=[{value:"Expanded Reference: file-length",id:"expanded-reference-file-length",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file-length",children:"file-length"}),"\n","\n","\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-file-length",children:"Expanded Reference: file-length"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(file-length )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);