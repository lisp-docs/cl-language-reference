"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[74732],{82348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var i=t(85893),r=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"file-length"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"file-length"})," ",(0,i.jsx)(n.em,{children:"stream \u2192 length"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,i.jsx)(n.em,{children:"stream associated with a file"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"length"}),"\u2014a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"file-length"})," returns the length of ",(0,i.jsx)(n.em,{children:"stream"}),", or ",(0,i.jsx)(n.strong,{children:"nil"})," if the length cannot be determined."]}),"\n",(0,i.jsxs)(n.p,{children:["For a binary file, the length is measured in units of the ",(0,i.jsx)(n.em,{children:"element type"})," of the ",(0,i.jsx)(n.em,{children:"stream"}),". ",(0,i.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:' \n\n(with-open-file (s "decimal-digits.text" \n\n\n\n \n\n \n\n:direction :output :if-exists :error) \n\n(princ "0123456789" s) \n\n(truename s)) \n\n\u2192 #P"A:&gt;Joe&gt;decimal-digits.text.1" \n\n(with-open-file (s "decimal-digits.text") \n\n(file-length s)) \n\n\u2192 10 \n\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"stream"})," is not a ",(0,i.jsx)(n.em,{children:"stream associated with a file"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"open"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const l={},a="file-length",o={id:"chap-21/cb-c-dictionary/filelength",title:"file-length",description:"Expanded Reference: file-length",source:"@site/docs/chap-21/cb-c-dictionary/filelength.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/filelength",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/filelength",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/filelength.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"end-of-file** is signaled. **read-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/endoffileaaaisasignaledaaaareadchar"},next:{title:"file-position",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/fileposition"}},d={},h=[{value:"Expanded Reference: file-length",id:"expanded-reference-file-length",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file-length",children:"file-length"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-file-length",children:"Expanded Reference: file-length"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(file-length )\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var i=t(67294);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);