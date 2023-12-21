"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[596],{98623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=t(85893),i=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"write-byte"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"write-byte"})," ",(0,r.jsx)(n.em,{children:"byte stream \u2192 byte"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"byte"}),"\u2014an ",(0,r.jsx)(n.em,{children:"integer"})," of the ",(0,r.jsx)(n.em,{children:"stream element type"})," of ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"binary output stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"write-byte"})," writes one byte, ",(0,r.jsx)(n.em,{children:"byte"}),", to ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(with-open-file (s "temp-bytes" \n\t\t   :direction :output \n\t\t   :element-type \u2019unsigned-byte) \n  (write-byte 101 s)) \u2192 101 \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"})," is modified."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"element type"})," of the ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"stream"})," is not a ",(0,r.jsx)(n.em,{children:"stream"}),". Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"error"})," if ",(0,r.jsx)(n.em,{children:"stream"})," is not a ",(0,r.jsx)(n.em,{children:"binary output stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Might signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"byte"})," is not an ",(0,r.jsx)(n.em,{children:"integer"})," of the ",(0,r.jsx)(n.em,{children:"stream element type"})," of ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"read-byte"}),", ",(0,r.jsx)(n.strong,{children:"write-char"}),", ",(0,r.jsx)(n.strong,{children:"write-sequence"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"peek-char"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const o={title:"write-byte"},d="write-byte",l={id:"chap-21/cb-c-dictionary/write-byte_function",title:"write-byte",description:"Expanded Reference: write-byte",source:"@site/docs/chap-21/cb-c-dictionary/write-byte_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/write-byte_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/write-byte_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/write-byte_function.md",tags:[],version:"current",frontMatter:{title:"write-byte"},sidebar:"tutorialSidebar",previous:{title:"with-output-to-string",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/with-output-to-string_macro"},next:{title:"write-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/write-char_function"}},a={},h=[{value:"Expanded Reference: write-byte",id:"expanded-reference-write-byte",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"write-byte",children:"write-byte"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-write-byte",children:"Expanded Reference: write-byte"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(write-byte )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);