"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[1527],{23123:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>j});var a=n(85893),i=n(11151);function o(r){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...r.components},{ClLinks:n,GlossaryTerm:o}=e;return n||t("ClLinks",!0),o||t("GlossaryTerm",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"array-row-major-index"})," ",(0,a.jsx)(n,{term:"function",children:(0,a.jsx)("i",{children:"Function"})})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(n,{term:"array-row-major-index",children:(0,a.jsx)("b",{children:"array-row-major-index"})})," ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})})," &rest ",(0,a.jsx)(e.em,{children:"subscripts \u2192 index"})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})}),"\u2014an ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})}),"."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"subscripts"}),"\u2014a ",(0,a.jsx)(n,{term:"list",children:(0,a.jsx)("i",{children:"list"})})," of ",(0,a.jsx)(e.em,{children:"valid array indices"})," for the ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})}),"."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"index"}),"\u2014a ",(0,a.jsx)(o,{styled:!0,term:"valid array row-major index",children:(0,a.jsx)("i",{children:"valid array row-major index"})})," for the ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(e.p,{children:["Computes the position according to the row-major ordering of ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})})," for the element that is specified by ",(0,a.jsx)(e.em,{children:"subscripts"}),", and returns the offset of the element in the computed position from the beginning of ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["For a one-dimensional ",(0,a.jsx)(n,{term:"array",children:(0,a.jsx)("i",{children:"array"})}),", the result of ",(0,a.jsx)(n,{term:"array-row-major-index",children:(0,a.jsx)("b",{children:"array-row-major-index"})})," equals ",(0,a.jsx)(e.em,{children:"subscript"}),". ",(0,a.jsx)(n,{term:"array-row-major-index",children:(0,a.jsx)("b",{children:"array-row-major-index"})})," ignores ",(0,a.jsx)(o,{styled:!0,term:"fill pointer",children:(0,a.jsx)("i",{children:"fill pointers"})}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-lisp",children:"(setq a (make-array \u2019(4 7) :element-type \u2019(unsigned-byte 8))) \n(array-row-major-index a 1 2) \u2192 9 \n(array-row-major-index \n (make-array \u2019(2 3 4) \n\t      :element-type \u2019(unsigned-byte 8) \n\t      :displaced-to a \n\t      :displaced-index-offset 4) \n 0 2 1) \u2192 9 \n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(e.p,{children:["A possible definition of ",(0,a.jsx)(n,{term:"array-row-major-index",children:(0,a.jsx)("b",{children:"array-row-major-index"})}),", with no error-checking, is"]}),"\n",(0,a.jsx)(e.p,{children:"(defun array-row-major-index (a &rest subscripts)"}),"\n",(0,a.jsx)(e.p,{children:"(apply #\u2019+ (maplist #\u2019(lambda (x y)"}),"\n",(0,a.jsx)(e.p,{children:"(* (car x) (apply #\u2019* (cdr y))))"}),"\n",(0,a.jsx)(e.p,{children:"subscripts"}),"\n",(0,a.jsx)(e.p,{children:"(array-dimensions a))))"})]})}function s(r={}){const{wrapper:e}={...(0,i.a)(),...r.components};return e?(0,a.jsx)(e,{...r,children:(0,a.jsx)(o,{...r})}):o(r)}function t(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const c={title:"array-row-major-index"},d="array-row-major-index",l={id:"chap-15/bf-c-dictionary/array-row-major-index_function",title:"array-row-major-index",description:"Expanded Reference: array-row-major-index",source:"@site/docs/chap-15/bf-c-dictionary/array-row-major-index_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/array-row-major-index_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-row-major-index_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/array-row-major-index_function.md",tags:[],version:"current",frontMatter:{title:"array-row-major-index"},sidebar:"tutorialSidebar",previous:{title:"array-rank",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-rank_function"},next:{title:"array-total-size-limit",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-total-size-limit_constant-variable"}},x={},j=[{value:"Expanded Reference: array-row-major-index",id:"expanded-reference-array-row-major-index",level:2}];function h(r){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...r.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"array-row-major-index",children:"array-row-major-index"}),"\n","\n","\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(e.h2,{id:"expanded-reference-array-row-major-index",children:"Expanded Reference: array-row-major-index"}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-lisp",children:"(array-row-major-index )\n"})})]})}function p(r={}){const{wrapper:e}={...(0,i.a)(),...r.components};return e?(0,a.jsx)(e,{...r,children:(0,a.jsx)(h,{...r})}):h(r)}},11151:(r,e,n)=>{n.d(e,{Z:()=>t,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(r){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function t(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:s(r.components),a.createElement(o.Provider,{value:e},r.children)}}}]);