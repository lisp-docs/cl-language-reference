"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[29181],{33838:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>x});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:r,GlossaryTerm:t}=n;return r||d("ClLinks",!0),t||d("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"read-sequence"})," ",(0,i.jsx)(r,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"read-sequence",children:(0,i.jsx)("b",{children:"read-sequence"})})," ",(0,i.jsx)(n.em,{children:"sequence stream"})," &key ",(0,i.jsx)(n.em,{children:"start end \u2192 position"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"\u2014an ",(0,i.jsx)(n.em,{children:"input stream"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start"}),", ",(0,i.jsx)(n.em,{children:"end"}),"\u2014",(0,i.jsx)(t,{styled:!0,term:"bounding index designator",children:(0,i.jsx)("i",{children:"bounding index designators"})})," of ",(0,i.jsx)(n.em,{children:"sequence"}),". The defaults for ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," are 0 and ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"position"}),"\u2014an ",(0,i.jsx)(n.em,{children:"integer"})," greater than or equal to zero, and less than or equal to the ",(0,i.jsx)(r,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," of the ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Destructively modifies ",(0,i.jsx)(n.em,{children:"sequence"})," by replacing the ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"elements"})})," of ",(0,i.jsx)(n.em,{children:"sequence bounded"})," by ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," with ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"elements"})})," read from ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Sequence"})," is destructively modified by copying successive ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"elements"})})," into it from ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),". If the ",(0,i.jsx)(t,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})})," for ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," is reached before copying all ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"elements"})})," of the subsequence, then the extra ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"elements"})})," near the end of ",(0,i.jsx)(n.em,{children:"sequence"})," are not updated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Position"})," is the index of the first ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"element"})})," of ",(0,i.jsx)(n.em,{children:"sequence"})," that was not updated, which might be less than ",(0,i.jsx)(n.em,{children:"end"})," because the ",(0,i.jsx)(t,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})})," was reached."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(defvar \\*data\\* (make-array 15 :initial-element nil)) \n(values (read-sequence \\*data\\* (make-string-input-stream "test string")) \\*data\\*) \u2192 11, #(#\\t #\\e #\\s #\\t #\\Space #\\s #\\t #\\r #\\i #\\n #\\g NIL NIL NIL NIL) \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(n.p,{children:["Modifies ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," and ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,i.jsx)(r,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"sequence"})," is not a ",(0,i.jsx)(t,{styled:!0,term:"proper sequence",children:(0,i.jsx)("i",{children:"proper sequence"})}),". Should signal an error of ",(0,i.jsx)(r,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"start"})," is not a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," . Should signal an error of ",(0,i.jsx)(r,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(n.em,{children:"end"})," is not a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," or ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Might signal an error of ",(0,i.jsx)(r,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if an ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"element"})})," read from the ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," is not a member of the ",(0,i.jsx)(t,{styled:!0,term:"element type",children:(0,i.jsx)("i",{children:"element type"})})," of the ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:["Section 3.2.1 (Compiler Terminology), ",(0,i.jsx)(r,{term:"write-sequence",children:(0,i.jsx)("b",{children:"write-sequence"})}),", ",(0,i.jsx)(r,{term:"read-line",children:(0,i.jsx)("b",{children:"read-line"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"read-sequence",children:(0,i.jsx)("b",{children:"read-sequence"})})," is identical in effect to iterating over the indicated subsequence and reading one ",(0,i.jsx)(r,{term:"element",children:(0,i.jsx)("i",{children:"element"})})," at a time from ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," and storing it into ",(0,i.jsx)(n.em,{children:"sequence"}),", but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the ",(0,i.jsx)(n.em,{children:"sequence"})," is a ",(0,i.jsx)(r,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})})," with the same ",(0,i.jsx)(t,{styled:!0,term:"element type",children:(0,i.jsx)("i",{children:"element type"})})," as the ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"read-sequence"},a="read-sequence",h={id:"chap-21/cb-c-dictionary/read-sequence_function",title:"read-sequence",description:"Expanded Reference: read-sequence",source:"@site/docs/chap-21/cb-c-dictionary/read-sequence_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/read-sequence_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-sequence_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/read-sequence_function.md",tags:[],version:"current",frontMatter:{title:"read-sequence"},sidebar:"tutorialSidebar",previous:{title:"read-line",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-line_function"},next:{title:"stream-element-type",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/stream-element-type_function"}},o={},x=[{value:"Expanded Reference: read-sequence",id:"expanded-reference-read-sequence",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"read-sequence",children:"read-sequence"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-read-sequence",children:"Expanded Reference: read-sequence"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(read-sequence )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var i=r(67294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);