"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[98799],{68620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=r(85893),t=r(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fill-pointer"})," ",(0,i.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fill-pointer"})," ",(0,i.jsx)(n.em,{children:"vector \u2192 fill-pointer"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"(setf (fill-pointer"})," ",(0,i.jsx)(n.em,{children:"vector"}),"**)** ",(0,i.jsx)(n.em,{children:"new-fill-pointer"}),"**)**"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"vector"}),"\u2014a ",(0,i.jsx)(n.em,{children:"vector"})," with a ",(0,i.jsx)(n.em,{children:"fill pointer"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fill-pointer"}),", ",(0,i.jsx)(n.em,{children:"new-fill-pointer"}),"\u2014a ",(0,i.jsx)(n.em,{children:"valid fill pointer"})," for the ",(0,i.jsx)(n.em,{children:"vector"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Accesses"})," the ",(0,i.jsx)(n.em,{children:"fill pointer"})," of ",(0,i.jsx)(n.em,{children:"vector"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"\n(setq a (make-array 8 :fill-pointer 4)) \u2192 #(NIL NIL NIL NIL) \n(fill-pointer a) \u2192 4 \n(dotimes (i (length a)) (setf (aref a i) (\\* i i))) \u2192 NIL \na \u2192 #(0 1 4 9) \n(setf (fill-pointer a) 3) \u2192 3 \n(fill-pointer a) \u2192 3 \na \u2192 #(0 1 4) \n(setf (fill-pointer a) 8) \u2192 8 \na \u2192 #(0 1 4 9 NIL NIL NIL NIL) \n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"vector"})," is not a ",(0,i.jsx)(n.em,{children:"vector"})," with a ",(0,i.jsx)(n.em,{children:"fill pointer"})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"make-array"}),", ",(0,i.jsx)(n.strong,{children:"length"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["There is no ",(0,i.jsx)(n.em,{children:"operator"})," that will remove a ",(0,i.jsx)(n.em,{children:"vector"})," \u2019s ",(0,i.jsx)(n.em,{children:"fill pointer"})," ."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const s={},o="fill-pointer",a={id:"chap-15/bf-c-dictionary/fillpointer",title:"fill-pointer",description:"Expanded Reference: fill-pointer",source:"@site/docs/chap-15/bf-c-dictionary/fillpointer.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/fillpointer",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/fillpointer",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/fillpointer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bit-vector-p",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/bitvectorp"},next:{title:"make-array",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/makearray"}},d={},p=[{value:"Expanded Reference: fill-pointer",id:"expanded-reference-fill-pointer",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fill-pointer",children:"fill-pointer"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-fill-pointer",children:"Expanded Reference: fill-pointer"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(fill-pointer )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var i=r(67294);const t={},l=i.createContext(t);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);