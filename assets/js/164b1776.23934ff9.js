"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[10144],{73922:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(85893),a=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"maphash"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"maphash"})," ",(0,t.jsx)(n.em,{children:"function hash-table \u2192"})," ",(0,t.jsx)(n.strong,{children:"nil"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"function"}),"\u2014a ",(0,t.jsx)(n.em,{children:"designator"})," for a ",(0,t.jsx)(n.em,{children:"function"})," of two ",(0,t.jsx)(n.em,{children:"arguments"}),", the ",(0,t.jsx)(n.em,{children:"key"})," and the ",(0,t.jsx)(n.em,{children:"value"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"hash-table"}),"\u2014a ",(0,t.jsx)(n.em,{children:"hash table"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Iterates over all entries in the ",(0,t.jsx)(n.em,{children:"hash-table"}),". For each entry, the ",(0,t.jsx)(n.em,{children:"function"})," is called with two ",(0,t.jsx)(n.em,{children:"arguments"}),"\u2013the ",(0,t.jsx)(n.em,{children:"key"})," and the ",(0,t.jsx)(n.em,{children:"value"})," of that entry."]}),"\n",(0,t.jsxs)(n.p,{children:["The consequences are unspecified if any attempt is made to add or remove an entry from the ",(0,t.jsx)(n.em,{children:"hash-table"})," while a ",(0,t.jsx)(n.strong,{children:"maphash"})," is in progress, with two exceptions: the ",(0,t.jsx)(n.em,{children:"function"})," can use can use ",(0,t.jsx)(n.strong,{children:"setf"})," of ",(0,t.jsx)(n.strong,{children:"gethash"})," to change the ",(0,t.jsx)(n.em,{children:"value"})," part of the entry currently being processed, or it can use ",(0,t.jsx)(n.strong,{children:"remhash"})," to remove that entry."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 32304110> \n(dotimes (i 10) (setf (gethash i table) i)) \u2192 NIL \n(let ((sum-of-squares 0)) \n  (maphash #\u2019(lambda (key val) \n\t       (let ((square (\\* val val))) \n\t\t (incf sum-of-squares square) \n\t\t (setf (gethash key table) square))) \n\t     table) \n  sum-of-squares) \u2192 285 \n(hash-table-count table) \u2192 10 \n(maphash #\u2019(lambda (key val) \n\t     (when (oddp val) (remhash key table))) \n\t   table) \u2192 NIL \n(hash-table-count table) \u2192 5 \n(maphash #\u2019(lambda (k v) (print (list k v))) table) \n(0 0) \n(8 64) \n(2 4) \n(6 36) \n(4 16) \n\u2192 NIL \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["None, other than any which might be done by the ",(0,t.jsx)(n.em,{children:"function"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"loop"}),", ",(0,t.jsx)(n.strong,{children:"with-hash-table-iterator"}),", Section 3.6 (Traversal Rules and Side Effects)"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const c={title:"maphash"},i="maphash",l={id:"chap-18/bi-c-dictionary/maphash_function",title:"maphash",description:"Expanded Reference: maphash",source:"@site/docs/chap-18/bi-c-dictionary/maphash_function.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/maphash_function",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/maphash_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/maphash_function.md",tags:[],version:"current",frontMatter:{title:"maphash"},sidebar:"tutorialSidebar",previous:{title:"make-hash-table",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/make-hash-table_function"},next:{title:"remhash",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/remhash_function"}},o={},d=[{value:"Expanded Reference: maphash",id:"expanded-reference-maphash",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"maphash",children:"maphash"}),"\n","\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-maphash",children:"Expanded Reference: maphash"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(maphash )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>h});var t=s(67294);const a={},r=t.createContext(a);function h(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:h(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);