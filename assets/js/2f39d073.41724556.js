"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[77048],{39341:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=r(85893),s=r(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fill"})," ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"fill",children:(0,i.jsx)("b",{children:"fill"})})," ",(0,i.jsx)(n.em,{children:"sequence item"})," &key ",(0,i.jsx)(n.em,{children:"start end \u2192 sequence"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,i.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"item"}),"\u2014a ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start"}),", ",(0,i.jsx)(n.em,{children:"end"}),"\u2014",(0,i.jsx)(n.em,{children:"bounding index designators"})," of ",(0,i.jsx)(n.em,{children:"sequence"}),". The defaults for ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," are 0 and ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Replaces the ",(0,i.jsx)(r,{styled:!0,term:"element",children:(0,i.jsx)("i",{children:"elements"})})," of ",(0,i.jsx)(n.em,{children:"sequence bounded"})," by ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," with ",(0,i.jsx)(n.em,{children:"item"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n(fill (list 0 1 2 3 4 5) \u2019(444)) \u2192 ((444) (444) (444) (444) (444) (444)) \n(fill (copy-seq "01234") #\\e :start 3) \u2192 "012ee" \n(setq x (vector \u2019a \u2019b \u2019c \u2019d \u2019e)) \u2192 #(A B C D E) \n(fill x \u2019z :start 1 :end 3) \u2192 #(A Z Z D E) \nx \u2192 #(A Z Z D E) \n(fill x \u2019p) \u2192 #(P P P P P) \nx \u2192 #(P P P P P) \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Sequence"})," is destructively modified."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{styled:!0,term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"sequence"})," is not a ",(0,i.jsx)(n.em,{children:"proper sequence"}),". Should signal an error of ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{styled:!0,term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"start"})," is not a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," . Should signal an error of ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{styled:!0,term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"end"})," is not a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," or ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"replace",children:(0,i.jsx)("b",{children:"replace"})}),", ",(0,i.jsx)(n.strong,{children:"nsubstitute"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["(fill ",(0,i.jsx)(n.em,{children:"sequence item"}),") ",(0,i.jsx)(n.em,{children:"\u2261"}),"(nsubstitute-if ",(0,i.jsx)(n.em,{children:"item"})," (constantly t) ",(0,i.jsx)(n.em,{children:"sequence"}),")"]}),"\n",(0,i.jsx)(r,{styled:!0,term:"make-sequence",children:(0,i.jsx)("b",{children:"make-sequence"})})]})}function t(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const c={title:"fill"},d="fill",o={id:"chap-17/bh-d-dictionary/fill_function",title:"fill",description:"Expanded Reference: fill",source:"@site/docs/chap-17/bh-d-dictionary/fill_function.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/fill_function",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/fill_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/fill_function.md",tags:[],version:"current",frontMatter:{title:"fill"},sidebar:"tutorialSidebar",previous:{title:"elt",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/elt_accessor"},next:{title:"find, find-if, find-if-not",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/find_find-if_find-if-not_function"}},h={},a=[{value:"Expanded Reference: fill",id:"expanded-reference-fill",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fill",children:"fill"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-fill",children:"Expanded Reference: fill"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(fill )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var i=r(67294);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);