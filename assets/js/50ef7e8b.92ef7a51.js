"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[30080],{98507:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var r=i(85893),t=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"reduce"})," ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"reduce",children:(0,r.jsx)("b",{children:"reduce"})})," ",(0,r.jsx)(n.em,{children:"function sequence"})," &key ",(0,r.jsx)(n.em,{children:"key from-end start end initial-value \u2192 result"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"designator",children:(0,r.jsx)("i",{children:"designator"})})," for a ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," that might be called with either zero or two ",(0,r.jsx)(i,{styled:!0,term:"argument",children:(0,r.jsx)("i",{children:"arguments"})}),". ",(0,r.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"key",children:(0,r.jsx)("i",{children:"key"})}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"designator",children:(0,r.jsx)("i",{children:"designator"})})," for a ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," of one argument, or ",(0,r.jsx)(i,{styled:!0,term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"from-end"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,r.jsx)(i,{styled:!0,term:"false",children:(0,r.jsx)("i",{children:"false"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"start"}),", ",(0,r.jsx)(n.em,{children:"end"}),"\u2014",(0,r.jsx)(n.em,{children:"bounding index designators"})," of ",(0,r.jsx)(n.em,{children:"sequence"}),". The defaults for ",(0,r.jsx)(n.em,{children:"start"})," and ",(0,r.jsx)(n.em,{children:"end"})," are 0 and ",(0,r.jsx)(i,{styled:!0,term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"initial-value"}),"\u2014an ",(0,r.jsx)(i,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result"}),"\u2014an ",(0,r.jsx)(i,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"reduce",children:(0,r.jsx)("b",{children:"reduce"})})," uses a binary operation, ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),", to combine the ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"elements"})})," of ",(0,r.jsx)(n.em,{children:"sequence bounded"})," by ",(0,r.jsx)(n.em,{children:"start"})," and ",(0,r.jsx)(n.em,{children:"end"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," must accept as ",(0,r.jsx)(i,{styled:!0,term:"argument",children:(0,r.jsx)("i",{children:"arguments"})})," two ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"elements"})})," of ",(0,r.jsx)(n.em,{children:"sequence"})," or the results from combining those ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"elements"})}),". The ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," must also be able to accept no arguments."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(i,{styled:!0,term:"key",children:(0,r.jsx)("i",{children:"key"})})," is supplied, it is used is used to extract the values to reduce. The ",(0,r.jsx)(i,{styled:!0,term:"key",children:(0,r.jsx)("i",{children:"key"})})," function is applied exactly once to each element of ",(0,r.jsx)(n.em,{children:"sequence"})," in the order implied by the reduction order but not to"]}),"\n",(0,r.jsxs)(n.p,{children:["the value of ",(0,r.jsx)(n.em,{children:"initial-value"}),", if supplied. The ",(0,r.jsx)(i,{styled:!0,term:"key",children:(0,r.jsx)("i",{children:"key"})})," function typically returns part of the ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"element"})})," of ",(0,r.jsx)(n.em,{children:"sequence"}),". If ",(0,r.jsx)(i,{styled:!0,term:"key",children:(0,r.jsx)("i",{children:"key"})})," is not supplied or is ",(0,r.jsx)(i,{styled:!0,term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),", the ",(0,r.jsx)(n.em,{children:"sequence element"})," itself is used."]}),"\n",(0,r.jsxs)(n.p,{children:["The reduction is left-associative, unless ",(0,r.jsx)(n.em,{children:"from-end"})," is ",(0,r.jsx)(i,{styled:!0,term:"true",children:(0,r.jsx)("i",{children:"true"})})," in which case it is right-associative."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"initial-value"})," is supplied, it is logically placed before the subsequence (or after it if ",(0,r.jsx)(n.em,{children:"from-end"})," is ",(0,r.jsx)(i,{styled:!0,term:"true",children:(0,r.jsx)("i",{children:"true"})}),") and included in the reduction operation."]}),"\n",(0,r.jsxs)(n.p,{children:["In the normal case, the result of ",(0,r.jsx)(i,{styled:!0,term:"reduce",children:(0,r.jsx)("b",{children:"reduce"})})," is the combined result of ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),"\u2019s being applied to successive pairs of ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"elements"})})," of ",(0,r.jsx)(n.em,{children:"sequence"}),". If the subsequence contains exactly one ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"element"})})," and no ",(0,r.jsx)(n.em,{children:"initial-value"})," is given, then that ",(0,r.jsx)(i,{styled:!0,term:"element",children:(0,r.jsx)("i",{children:"element"})})," is returned and ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," is not called. If the subsequence is empty and an ",(0,r.jsx)(n.em,{children:"initial-value"})," is given, then the ",(0,r.jsx)(n.em,{children:"initial-value"})," is returned and ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," is not called. If the subsequence is empty and no ",(0,r.jsx)(n.em,{children:"initial-value"})," is given, then the ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," is called with zero arguments, and ",(0,r.jsx)(i,{styled:!0,term:"reduce",children:(0,r.jsx)("b",{children:"reduce"})})," returns whatever ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," does. This is the only case where the ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," is called with other than two arguments."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(reduce #\u2019\\* \u2019(1 2 3 4 5)) \u2192 120 \n(reduce #\u2019append \u2019((1) (2)) :initial-value \u2019(i n i t)) \u2192 (I N I T 1 2) \n(reduce #\u2019append \u2019((1) (2)) :from-end t \n\t  :initial-value \u2019(i n i t)) \u2192 (1 2 I N I T) \n(reduce #\u2019- \u2019(1 2 3 4)) *\u2261* (- (- (- 1 2) 3) 4) \u2192 -8 \n(reduce #\u2019- \u2019(1 2 3 4) :from-end t) ;Alternating sum. \n*\u2261* (- 1 (- 2 (- 3 4))) \u2192 -2 \n(reduce #\u2019+ \u2019()) \u2192 0 \n(reduce #\u2019+ \u2019(3)) \u2192 3 \n(reduce #\u2019+ \u2019(foo)) \u2192 FOO \n(reduce #\u2019list \u2019(1 2 3 4)) \u2192 (((1 2) 3) 4) \n(reduce #\u2019list \u2019(1 2 3 4) :from-end t) \u2192 (1 (2 (3 4))) \n(reduce #\u2019list \u2019(1 2 3 4) :initial-value \u2019foo) \u2192 ((((foo 1) 2) 3) 4) \n(reduce #\u2019list \u2019(1 2 3 4) \n\t  :from-end t :initial-value \u2019foo) \u2192 (1 (2 (3 (4 foo)))) \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,r.jsx)(i,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{styled:!0,term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," if ",(0,r.jsx)(n.em,{children:"sequence"})," is not a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 3.6 (Traversal Rules and Side Effects)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"count, count-if, count-if-not"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const d={title:"reduce"},l="reduce",o={id:"chap-17/bh-d-dictionary/reduce_function",title:"reduce",description:"Expanded Reference: reduce",source:"@site/docs/chap-17/bh-d-dictionary/reduce_function.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/reduce_function",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/reduce_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/reduce_function.md",tags:[],version:"current",frontMatter:{title:"reduce"},sidebar:"tutorialSidebar",previous:{title:"position, position-if, position-if-not",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/position_position-if_position-if-not_function"},next:{title:"remove-duplicates, delete-duplicates",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/remove-duplicates_delete-duplicates_function"}},h={},a=[{value:"Expanded Reference: reduce",id:"expanded-reference-reduce",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"reduce",children:"reduce"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-reduce",children:"Expanded Reference: reduce"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(reduce )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var r=i(67294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);