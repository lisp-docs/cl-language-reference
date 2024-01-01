"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[73621],{2158:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=r(85893),t=r(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:l}=n;return r||s("DictionaryLink",!0),l||s("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fill-pointer"})," ",(0,i.jsx)(l,{term:"accessor",children:(0,i.jsx)("i",{children:"Accessor"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"fill-pointer",children:(0,i.jsx)("b",{children:"fill-pointer"})})," ",(0,i.jsx)(n.em,{children:"vector \u2192 fill-pointer"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"(setf (fill-pointer"})," ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})}),(0,i.jsx)(n.strong,{children:")"})," ",(0,i.jsx)(n.em,{children:"new-fill-pointer"}),"**)**"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})}),"\u2014a ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})})," with a ",(0,i.jsx)(l,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fill-pointer"}),", ",(0,i.jsx)(n.em,{children:"new-fill-pointer"}),"\u2014a ",(0,i.jsx)(l,{styled:!0,term:"valid fill pointer",children:(0,i.jsx)("i",{children:"valid fill pointer"})})," for the ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Accesses"})," the ",(0,i.jsx)(l,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," of ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(setq a (make-array 8 :fill-pointer 4)) \u2192 #(NIL NIL NIL NIL) \n(fill-pointer a) \u2192 4 \n(dotimes (i (length a)) (setf (aref a i) (\\* i i))) \u2192 NIL \na \u2192 #(0 1 4 9) \n(setf (fill-pointer a) 3) \u2192 3 \n(fill-pointer a) \u2192 3 \na \u2192 #(0 1 4) \n(setf (fill-pointer a) 8) \u2192 8 \na \u2192 #(0 1 4 9 NIL NIL NIL NIL) \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(l,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})})," is not a ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})})," with a ",(0,i.jsx)(l,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"make-array",children:(0,i.jsx)("b",{children:"make-array"})}),", ",(0,i.jsx)(r,{term:"length",children:(0,i.jsx)("b",{children:"length"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["There is no ",(0,i.jsx)(l,{term:"operator",children:(0,i.jsx)("i",{children:"operator"})})," that will remove a ",(0,i.jsx)(l,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})})," \u2019s ",(0,i.jsx)(l,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," ."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"fill-pointer"},d="fill-pointer",a={id:"chap-15/bf-c-dictionary/fill-pointer_accessor",title:"fill-pointer",description:"Expanded Reference: fill-pointer",source:"@site/docs/chap-15/bf-c-dictionary/fill-pointer_accessor.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/fill-pointer_accessor",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/fill-pointer_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/fill-pointer_accessor.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{title:"fill-pointer"},sidebar:"tutorialSidebar",previous:{title:"bit, sbit",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/bit_sbit_accessor"},next:{title:"make-array",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/make-array_function"}},p={},h=[{value:"Expanded Reference: fill-pointer",id:"expanded-reference-fill-pointer",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fill-pointer",children:"fill-pointer"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-fill-pointer",children:"Expanded Reference: fill-pointer"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(fill-pointer )\n"})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var i=r(67294);const t={},l=i.createContext(t);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);