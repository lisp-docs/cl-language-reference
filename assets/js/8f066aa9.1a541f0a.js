"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[35386],{93654:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-byte"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-byte"})," ",(0,s.jsx)(n.em,{children:"stream"})," &optional ",(0,s.jsx)(n.em,{children:"eof-error-p eof-value \u2192 byte"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,s.jsx)(n.em,{children:"binary input stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"byte"}),"\u2014an ",(0,s.jsx)(n.em,{children:"integer"})," , or the ",(0,s.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-byte"})," reads and returns one byte from ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"false"}),", the ",(0,s.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(with-open-file (s "temp-bytes" \n\n\n\n:direction :output \n\n\n\n:element-type \u2019unsigned-byte) \n\n\n\n(write-byte 101 s)) *\u2192* 101 \n\n\n\n(with-open-file (s "temp-bytes" :element-type \u2019unsigned-byte) \n\n\n\n(format t "&#126;S &#126;S" (read-byte s) (read-byte s nil \u2019eof))) \n\n\n\n\u25b7 101 EOF \n\n\n\n*\u2192* NIL \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["Modifies ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"stream"})," is not a ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"error"})," if ",(0,s.jsx)(n.em,{children:"stream"})," is not a ",(0,s.jsx)(n.em,{children:"binary input stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If there are no ",(0,s.jsx)(n.em,{children:"bytes"})," remaining in the ",(0,s.jsx)(n.em,{children:"stream"})," and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char"}),", ",(0,s.jsx)(n.strong,{children:"read-sequence"}),", ",(0,s.jsx)(n.strong,{children:"write-byte"})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={},a="read-byte",l={id:"chap-21/cb-c-dictionary/readbyte",title:"read-byte",description:"Expanded Reference: read-byte",source:"@site/docs/chap-21/cb-c-dictionary/readbyte.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/readbyte",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/readbyte",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/readbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"open-stream-p",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/openstreamp"},next:{title:"read-line",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/readline"}},o={},h=[{value:"Expanded Reference: read-byte",id:"expanded-reference-read-byte",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"read-byte",children:"read-byte"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-read-byte",children:"Expanded Reference: read-byte"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(read-byte )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);