"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[77948],{30586:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>x});var s=n(85893),c=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{ClLinks:n,GlossaryTerm:i}=r;return n||l("ClLinks",!0),i||l("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"svref"})," ",(0,s.jsx)(n,{term:"accessor",children:(0,s.jsx)("i",{children:"Accessor"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{term:"svref",children:(0,s.jsx)("b",{children:"svref"})})," ",(0,s.jsx)(r.em,{children:"simple-vector index \u2192 element"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"(setf (svref"})," ",(0,s.jsx)(r.em,{children:"simple-vector index"}),"**)** ",(0,s.jsx)(r.em,{children:"new-element"}),"**)**"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"simple-vector"}),"\u2014a ",(0,s.jsx)(i,{styled:!0,term:"simple vector",children:(0,s.jsx)("i",{children:"simple vector"})})," ."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"index"}),"\u2014a ",(0,s.jsx)(i,{styled:!0,term:"valid array index",children:(0,s.jsx)("i",{children:"valid array index"})})," for the ",(0,s.jsx)(r.em,{children:"simple-vector"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{term:"element",children:(0,s.jsx)("i",{children:"element"})}),", ",(0,s.jsx)(r.em,{children:"new-element"}),"\u2014an ",(0,s.jsx)(n,{term:"object",children:(0,s.jsx)("i",{children:"object"})})," (whose ",(0,s.jsx)(n,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," is a ",(0,s.jsx)(n,{term:"subtype",children:(0,s.jsx)("i",{children:"subtype"})})," of the ",(0,s.jsx)(i,{styled:!0,term:"array element type",children:(0,s.jsx)("i",{children:"array element type"})})," of the ",(0,s.jsx)(r.em,{children:"simple-vector"}),")."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Accesses"})," the ",(0,s.jsx)(n,{term:"element",children:(0,s.jsx)("i",{children:"element"})})," of ",(0,s.jsx)(r.em,{children:"simple-vector"})," specified by ",(0,s.jsx)(r.em,{children:"index"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(simple-vector-p (setq v (vector 1 2 \u2019sirens))) \u2192 true \n(svref v 0) \u2192 1 \n(svref v 2) \u2192 SIRENS \n(setf (svref v 1) \u2019newcomer) \u2192 NEWCOMER \nv \u2192 #(1 NEWCOMER SIRENS) \n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{term:"aref",children:(0,s.jsx)("b",{children:"aref"})}),", ",(0,s.jsx)(n,{term:"sbit",children:(0,s.jsx)("b",{children:"sbit"})}),", ",(0,s.jsx)(n,{term:"schar",children:(0,s.jsx)("b",{children:"schar"})}),", ",(0,s.jsx)(n,{term:"vector",children:(0,s.jsx)("b",{children:"vector"})}),", Section 3.2.1 (Compiler Terminology)"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{term:"svref",children:(0,s.jsx)("b",{children:"svref"})})," is identical to ",(0,s.jsx)(n,{term:"aref",children:(0,s.jsx)("b",{children:"aref"})})," except that it requires its first argument to be a ",(0,s.jsx)(i,{styled:!0,term:"simple vector",children:(0,s.jsx)("i",{children:"simple vector"})})," . (svref ",(0,s.jsx)(r.em,{children:"v i"}),") ",(0,s.jsx)(r.em,{children:"\u2261"})," (aref (the simple-vector ",(0,s.jsx)(r.em,{children:"v"}),") ",(0,s.jsx)(r.em,{children:"i"}),")"]})]})}function t(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}function l(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"svref"},o="svref",a={id:"chap-15/bf-c-dictionary/svref_accessor",title:"svref",description:"Expanded Reference: svref",source:"@site/docs/chap-15/bf-c-dictionary/svref_accessor.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/svref_accessor",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/svref_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/svref_accessor.md",tags:[],version:"current",frontMatter:{title:"svref"},sidebar:"tutorialSidebar",previous:{title:"simple-vector",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/simple-vector_type"},next:{title:"upgraded-array-element-type",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/upgraded-array-element-type_function"}},h={},x=[{value:"Expanded Reference: svref",id:"expanded-reference-svref",level:2}];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"svref",children:"svref"}),"\n","\n","\n",(0,s.jsx)(t,{}),"\n",(0,s.jsx)(r.h2,{id:"expanded-reference-svref",children:"Expanded Reference: svref"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(svref )\n"})})]})}function m(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>t});var s=n(67294);const c={},i=s.createContext(c);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);