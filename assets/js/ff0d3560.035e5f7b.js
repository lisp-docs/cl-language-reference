"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[79923],{67862:(e,h,s)=>{s.r(h),s.d(h,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=s(85893),r=s(11151);function a(e){const h={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.p,{children:[(0,n.jsx)(h.strong,{children:"hash-table-rehash-threshold"})," ",(0,n.jsx)(h.em,{children:"Function"})]}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.strong,{children:"Syntax:"})}),"\n",(0,n.jsxs)(h.p,{children:[(0,n.jsx)(h.strong,{children:"hash-table-rehash-threshold"})," ",(0,n.jsx)(h.em,{children:"hash-table \u2192 rehash-threshold"})]}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.strong,{children:"Arguments and Values:"})}),"\n",(0,n.jsxs)(h.p,{children:[(0,n.jsx)(h.em,{children:"hash-table"}),"\u2014a ",(0,n.jsx)(h.em,{children:"hash table"}),"."]}),"\n",(0,n.jsxs)(h.p,{children:[(0,n.jsx)(h.em,{children:"rehash-threshold"}),"\u2014a ",(0,n.jsx)(h.em,{children:"real"})," of ",(0,n.jsx)(h.em,{children:"type"})," (real 0 1)."]}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(h.p,{children:["Returns the current rehash threshold of ",(0,n.jsx)(h.em,{children:"hash-table"}),", which is suitable for use in a call to ",(0,n.jsx)(h.strong,{children:"make-hash-table"})," in order to produce a ",(0,n.jsx)(h.em,{children:"hash table"})," with state corresponding to the current state of the ",(0,n.jsx)(h.em,{children:"hash-table"}),"."]}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(h.pre,{children:(0,n.jsx)(h.code,{className:"language-lisp",children:" \n\n\n\n(setq table (make-hash-table :size 100 :rehash-threshold 0.5)) \n\n\n\n*\u2192* #<HASH-TABLE EQL 0/100 2562446> \n\n\n\n(hash-table-rehash-threshold table) *\u2192* 0.5 \n\n\n\n\n"})}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.strong,{children:"Exceptional Situations:"})}),"\n",(0,n.jsxs)(h.p,{children:["Should signal an error of ",(0,n.jsx)(h.em,{children:"type"})," ",(0,n.jsx)(h.strong,{children:"type-error"})," if ",(0,n.jsx)(h.em,{children:"hash-table"})," is not a ",(0,n.jsx)(h.em,{children:"hash table"}),"."]}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.strong,{children:"See Also:"})}),"\n",(0,n.jsxs)(h.p,{children:[(0,n.jsx)(h.strong,{children:"make-hash-table"}),", ",(0,n.jsx)(h.strong,{children:"hash-table-rehash-size"})]})]})}function t(e={}){const{wrapper:h}={...(0,r.a)(),...e.components};return h?(0,n.jsx)(h,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}const l={},c="hash-table-rehash-threshold",i={id:"chap-18/bi-c-dictionary/hashtablerehashthreshold",title:"hash-table-rehash-threshold",description:"Expanded Reference: hash-table-rehash-threshold",source:"@site/docs/chap-18/bi-c-dictionary/hashtablerehashthreshold.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/hashtablerehashthreshold",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/hashtablerehashthreshold",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/hashtablerehashthreshold.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hash-table-rehash-size",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/hashtablerehashsize"},next:{title:"hash-table-size",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/hashtablesize"}},o={},d=[{value:"Expanded Reference: hash-table-rehash-threshold",id:"expanded-reference-hash-table-rehash-threshold",level:2}];function p(e){const h={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.h1,{id:"hash-table-rehash-threshold",children:"hash-table-rehash-threshold"}),"\n","\n","\n",(0,n.jsx)(t,{}),"\n",(0,n.jsx)(h.h2,{id:"expanded-reference-hash-table-rehash-threshold",children:"Expanded Reference: hash-table-rehash-threshold"}),"\n",(0,n.jsx)(h.admonition,{type:"tip",children:(0,n.jsx)(h.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,n.jsx)(h.pre,{children:(0,n.jsx)(h.code,{className:"language-lisp",children:"(hash-table-rehash-threshold )\n"})})]})}function x(e={}){const{wrapper:h}={...(0,r.a)(),...e.components};return h?(0,n.jsx)(h,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,h,s)=>{s.d(h,{Z:()=>l,a:()=>t});var n=s(67294);const r={},a=n.createContext(r);function t(e){const h=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(h):{...h,...e}}),[h,e])}function l(e){let h;return h=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(a.Provider,{value:h},e.children)}}}]);