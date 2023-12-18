"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[79526],{83304:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var t=r(85893),s=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-byte"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-byte"})," ",(0,t.jsx)(n.em,{children:"byte stream \u2192 byte"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"byte"}),"\u2014an ",(0,t.jsx)(n.em,{children:"integer"})," of the ",(0,t.jsx)(n.em,{children:"stream element type"})," of ",(0,t.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,t.jsx)(n.em,{children:"binary output stream"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-byte"})," writes one byte, ",(0,t.jsx)(n.em,{children:"byte"}),", to ",(0,t.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\n(with-open-file (s "temp-bytes" \n\t\t   :direction :output \n\t\t   :element-type \u2019unsigned-byte) \n  (write-byte 101 s)) \u2192 101 \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"stream"})," is modified."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"element type"})," of the ",(0,t.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["Should signal an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"type-error"})," if ",(0,t.jsx)(n.em,{children:"stream"})," is not a ",(0,t.jsx)(n.em,{children:"stream"}),". Should signal an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"error"})," if ",(0,t.jsx)(n.em,{children:"stream"})," is not a ",(0,t.jsx)(n.em,{children:"binary output stream"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Might signal an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"type-error"})," if ",(0,t.jsx)(n.em,{children:"byte"})," is not an ",(0,t.jsx)(n.em,{children:"integer"})," of the ",(0,t.jsx)(n.em,{children:"stream element type"})," of ",(0,t.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"read-byte"}),", ",(0,t.jsx)(n.strong,{children:"write-char"}),", ",(0,t.jsx)(n.strong,{children:"write-sequence"})]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const d={},o="write-byte",l={id:"chap-21/cb-c-dictionary/writebyte",title:"write-byte",description:"Expanded Reference: write-byte",source:"@site/docs/chap-21/cb-c-dictionary/writebyte.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/writebyte",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writebyte",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/writebyte.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"with-output-to-string",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/withoutputtostring"},next:{title:"write-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writechar"}},a={},h=[{value:"Expanded Reference: write-byte",id:"expanded-reference-write-byte",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"write-byte",children:"write-byte"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-write-byte",children:"Expanded Reference: write-byte"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(write-byte )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var t=r(67294);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);