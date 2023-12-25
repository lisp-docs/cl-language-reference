"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[26936],{62405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),s=t(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"clrhash"})," ",(0,r.jsx)(t,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{term:"clrhash",children:(0,r.jsx)("b",{children:"clrhash"})})," ",(0,r.jsx)(n.em,{children:"hash-table \u2192 hash-table"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"hash-table"}),"\u2014a ",(0,r.jsx)(n.em,{children:"hash table"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Removes all entries from ",(0,r.jsx)(n.em,{children:"hash-table"}),", and then returns that empty ",(0,r.jsx)(n.em,{children:"hash table"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 32004073> \n(dotimes (i 100) (setf (gethash i table) (format nil "~R" i))) \u2192 NIL \n(hash-table-count table) \u2192 100 \n(gethash 57 table) \u2192 "fifty-seven", *true* \n(clrhash table) \u2192 #<HASH-TABLE EQL 0/120 32004073> \n(hash-table-count table) \u2192 0 \n(gethash 57 table) \u2192 NIL, *false* \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"hash-table"})," is modified."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const i={title:"clrhash"},h="clrhash",l={id:"chap-18/bi-c-dictionary/clrhash_function",title:"clrhash",description:"Expanded Reference: clrhash",source:"@site/docs/chap-18/bi-c-dictionary/clrhash_function.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/clrhash_function",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/clrhash_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/clrhash_function.md",tags:[],version:"current",frontMatter:{title:"clrhash"},sidebar:"tutorialSidebar",previous:{title:"18.2 Hash Tables Dictionary",permalink:"/cl-language-reference/category/182-hash-tables-dictionary"},next:{title:"gethash",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/gethash_accessor"}},o={},d=[{value:"Expanded Reference: clrhash",id:"expanded-reference-clrhash",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"clrhash",children:"clrhash"}),"\n","\n","\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-clrhash",children:"Expanded Reference: clrhash"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(clrhash )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const s={},c=r.createContext(s);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);