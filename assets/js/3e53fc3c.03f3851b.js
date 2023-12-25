"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[85585],{23710:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=n(85893),t=n(11151);function a(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"aref"})," ",(0,s.jsx)(n,{styled:!0,term:"accessor",children:(0,s.jsx)("i",{children:"Accessor"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"aref",children:(0,s.jsx)("b",{children:"aref"})})," ",(0,s.jsx)(n,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"array"})})," &rest ",(0,s.jsx)(r.em,{children:"subscripts \u2192 element"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"(setf (aref"})," ",(0,s.jsx)(r.em,{children:"array"})," &rest ",(0,s.jsx)(r.em,{children:"subscripts"}),"**)** ",(0,s.jsx)(r.em,{children:"new-element"}),"**)**"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"array"})}),"\u2014an ",(0,s.jsx)(n,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"array"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"subscripts"}),"\u2014a ",(0,s.jsx)(n,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," of ",(0,s.jsx)(r.em,{children:"valid array indices"})," for the ",(0,s.jsx)(n,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"array"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"element",children:(0,s.jsx)("i",{children:"element"})}),", ",(0,s.jsx)(r.em,{children:"new-element"}),"\u2014an ",(0,s.jsx)(n,{styled:!0,term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Accesses"})," the ",(0,s.jsx)(r.em,{children:"array element"})," specified by the ",(0,s.jsx)(r.em,{children:"subscripts"}),". If no ",(0,s.jsx)(r.em,{children:"subscripts"})," are supplied and ",(0,s.jsx)(n,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"array"})})," is zero rank, ",(0,s.jsx)(n,{styled:!0,term:"aref",children:(0,s.jsx)("b",{children:"aref"})})," ",(0,s.jsx)(r.em,{children:"accesses"})," the sole element of ",(0,s.jsx)(n,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"array"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"aref",children:(0,s.jsx)("b",{children:"aref"})})," ignores ",(0,s.jsx)(r.em,{children:"fill pointers"}),". It is permissible to use ",(0,s.jsx)(n,{styled:!0,term:"aref",children:(0,s.jsx)("b",{children:"aref"})})," to ",(0,s.jsx)(n,{styled:!0,term:"access",children:(0,s.jsx)("i",{children:"access"})})," any ",(0,s.jsx)(r.em,{children:"array element"}),", whether ",(0,s.jsx)(n,{styled:!0,term:"active",children:(0,s.jsx)("i",{children:"active"})})," or not."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"\nIf the variable foo names a 3-by-5 array, then the first index could be 0, 1, or 2, and then second index could be 0, 1, 2, 3, or 4. The array elements can be referred to by using the *function* **aref**; for example, (aref foo 2 1) refers to element (2, 1) of the array. \n(aref (setq alpha (make-array 4)) 3) \u2192 implementation-dependent \n(setf (aref alpha 3) \u2019sirens) \u2192 SIRENS \n(aref alpha 3) \u2192 SIRENS \n(aref (setq beta (make-array \u2019(2 4) \n\t\t\t      :element-type \u2019(unsigned-byte 2) \n\t\t\t      :initial-contents \u2019((0 1 2 3) (3 2 1 0)))) \n      1 2) \u2192 1 \n\n\n\n(setq gamma \u2019(0 2)) \n(apply #\u2019aref beta gamma) \u2192 2 \n(setf (apply #\u2019aref beta gamma) 3) \u2192 3 \n(apply #\u2019aref beta gamma) \u2192 3 \n(aref beta 0 2) \u2192 3 \n\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"bit",children:(0,s.jsx)("b",{children:"bit"})}),", ",(0,s.jsx)(n,{styled:!0,term:"char",children:(0,s.jsx)("b",{children:"char"})}),", ",(0,s.jsx)(n,{styled:!0,term:"elt",children:(0,s.jsx)("b",{children:"elt"})}),", ",(0,s.jsx)(n,{styled:!0,term:"row-major-aref",children:(0,s.jsx)("b",{children:"row-major-aref"})}),", ",(0,s.jsx)(n,{styled:!0,term:"svref",children:(0,s.jsx)("b",{children:"svref"})}),", Section 3.2.1 (Compiler Terminology)"]})]})}function i(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const c={title:"aref"},l="aref",d={id:"chap-15/bf-c-dictionary/aref_accessor",title:"aref",description:"Expanded Reference: aref",source:"@site/docs/chap-15/bf-c-dictionary/aref_accessor.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/aref_accessor",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/aref_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/aref_accessor.md",tags:[],version:"current",frontMatter:{title:"aref"},sidebar:"tutorialSidebar",previous:{title:"adjust-array",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/adjust-array_function"},next:{title:"array-dimension-limit",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-dimension-limit_constant-variable"}},o={},h=[{value:"Expanded Reference: aref",id:"expanded-reference-aref",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"aref",children:"aref"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(r.h2,{id:"expanded-reference-aref",children:"Expanded Reference: aref"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(aref )\n"})})]})}function m(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var s=n(67294);const t={},a=s.createContext(t);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);