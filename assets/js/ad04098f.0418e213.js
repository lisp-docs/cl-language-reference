"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[51547],{48088:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>h,metadata:()=>l,toc:()=>d});var s=r(85893),a=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remhash"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remhash"})," ",(0,s.jsx)(n.em,{children:"key hash-table \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"key"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"hash-table"}),"\u2014a ",(0,s.jsx)(n.em,{children:"hash table"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Removes the entry for ",(0,s.jsx)(n.em,{children:"key"})," in ",(0,s.jsx)(n.em,{children:"hash-table"}),", if any. Returns ",(0,s.jsx)(n.em,{children:"true"})," if there was such an entry, or ",(0,s.jsx)(n.em,{children:"false"})," otherwise."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 32115666> \n(setf (gethash 100 table) "C") \u2192 "C" \n(gethash 100 table) \u2192 "C", *true* \n(remhash 100 table) \u2192 true \n(gethash 100 table) \u2192 NIL, *false* \n(remhash 100 table) \u2192 false \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"hash-table"})," is modified."]}),"\n",(0,s.jsx)(n.p,{children:"Hash"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"maphash"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const h={title:"remhash"},i="remhash",l={id:"chap-18/bi-c-dictionary/remhash_function",title:"remhash",description:"Expanded Reference: remhash",source:"@site/docs/chap-18/bi-c-dictionary/remhash_function.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/remhash_function",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/remhash_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/remhash_function.md",tags:[],version:"current",frontMatter:{title:"remhash"},sidebar:"tutorialSidebar",previous:{title:"maphash",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/maphash_function"},next:{title:"sxhash",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/sxhash_function"}},o={},d=[{value:"Expanded Reference: remhash",id:"expanded-reference-remhash",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"remhash",children:"remhash"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-remhash",children:"Expanded Reference: remhash"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(remhash )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>h,a:()=>c});var s=r(67294);const a={},t=s.createContext(a);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);