"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[83060],{64556:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var r=n(85893),t=n(11151);function c(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:c}=s;return n||l("DictionaryLink",!0),c||l("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"subseq"})," ",(0,r.jsx)(c,{term:"accessor",children:(0,r.jsx)("i",{children:"Accessor"})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(n,{term:"subseq",children:(0,r.jsx)("b",{children:"subseq"})})," ",(0,r.jsx)(s.em,{children:"sequence start"})," &optional ",(0,r.jsx)(s.em,{children:"end \u2192 subsequence"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"(setf (subseq"})," ",(0,r.jsx)(s.em,{children:"sequence start"})," &optional ",(0,r.jsx)(s.em,{children:"end"}),"**)** ",(0,r.jsx)(s.em,{children:"new-subsequence"}),"**)**"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"sequence"}),"\u2014a ",(0,r.jsx)(c,{styled:!0,term:"proper sequence",children:(0,r.jsx)("i",{children:"proper sequence"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"start"}),", ",(0,r.jsx)(s.em,{children:"end"}),"\u2014",(0,r.jsx)(c,{styled:!0,term:"bounding index designator",children:(0,r.jsx)("i",{children:"bounding index designators"})})," of ",(0,r.jsx)(s.em,{children:"sequence"}),". The default for ",(0,r.jsx)(s.em,{children:"end"})," is ",(0,r.jsx)(n,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"subsequence"}),"\u2014a ",(0,r.jsx)(c,{styled:!0,term:"proper sequence",children:(0,r.jsx)("i",{children:"proper sequence"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"new-subsequence"}),"\u2014a ",(0,r.jsx)(c,{styled:!0,term:"proper sequence",children:(0,r.jsx)("i",{children:"proper sequence"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(n,{term:"subseq",children:(0,r.jsx)("b",{children:"subseq"})})," creates a ",(0,r.jsx)(s.em,{children:"sequence"})," that is a copy of the subsequence of ",(0,r.jsx)(s.em,{children:"sequence bounded"})," by ",(0,r.jsx)(s.em,{children:"start"})," and ",(0,r.jsx)(s.em,{children:"end"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Start"})," specifies an offset into the original ",(0,r.jsx)(s.em,{children:"sequence"})," and marks the beginning position of the subsequence. ",(0,r.jsx)(s.em,{children:"end"})," marks the position following the last element of the subsequence."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(n,{term:"subseq",children:(0,r.jsx)("b",{children:"subseq"})})," always allocates a new ",(0,r.jsx)(s.em,{children:"sequence"})," for a result; it never shares storage with an old ",(0,r.jsx)(s.em,{children:"sequence"}),". The result subsequence is always of the same ",(0,r.jsx)(c,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," as ",(0,r.jsx)(s.em,{children:"sequence"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.em,{children:"sequence"})," is a ",(0,r.jsx)(c,{term:"vector",children:(0,r.jsx)("i",{children:"vector"})})," , the result is a ",(0,r.jsx)(s.em,{children:"fresh simple array"})," of ",(0,r.jsx)(c,{term:"rank",children:(0,r.jsx)("i",{children:"rank"})})," one that has the same ",(0,r.jsx)(c,{styled:!0,term:"actual array element type",children:(0,r.jsx)("i",{children:"actual array element type"})})," as ",(0,r.jsx)(s.em,{children:"sequence"}),". If ",(0,r.jsx)(s.em,{children:"sequence"})," is a ",(0,r.jsx)(c,{term:"list",children:(0,r.jsx)("i",{children:"list"})}),", the result is a ",(0,r.jsx)(s.em,{children:"fresh list"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(n,{term:"setf",children:(0,r.jsx)("b",{children:"setf"})})," may be used with ",(0,r.jsx)(n,{term:"subseq",children:(0,r.jsx)("b",{children:"subseq"})})," to destructively replace ",(0,r.jsx)(c,{term:"element",children:(0,r.jsx)("i",{children:"elements"})})," of a subsequence with ",(0,r.jsx)(c,{term:"element",children:(0,r.jsx)("i",{children:"elements"})})," taken from a ",(0,r.jsx)(s.em,{children:"sequence"})," of new values. If the subsequence and the new sequence are not of equal"]}),"\n",(0,r.jsxs)(s.p,{children:["length, the shorter length determines the number of elements that are replaced. The remaining ",(0,r.jsx)(c,{term:"element",children:(0,r.jsx)("i",{children:"elements"})})," at the end of the longer sequence are not modified in the operation."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lisp",children:'(setq str "012345") \u2192 "012345" \n(subseq str 2) \u2192 "2345" \n(subseq str 3 5) \u2192 "34" \n(setf (subseq str 4) "abc") \u2192 "abc" \nstr \u2192 "0123ab" \n(setf (subseq str 0 2) "A") \u2192 "A" \nstr \u2192 "A123ab" \n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(s.p,{children:["Should be prepared to signal an error of ",(0,r.jsx)(c,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," if ",(0,r.jsx)(s.em,{children:"sequence"})," is not a ",(0,r.jsx)(c,{styled:!0,term:"proper sequence",children:(0,r.jsx)("i",{children:"proper sequence"})}),". Should be prepared to signal an error of ",(0,r.jsx)(c,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"type-error",children:(0,r.jsx)("b",{children:"type-error"})})," if ",(0,r.jsx)(s.em,{children:"new-subsequence"})," is not a ",(0,r.jsx)(c,{styled:!0,term:"proper sequence",children:(0,r.jsx)("i",{children:"proper sequence"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n,{term:"replace",children:(0,r.jsx)("b",{children:"replace"})})]})}function i(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function l(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"subseq"},a="subseq",o={id:"chap-17/bh-d-dictionary/subseq_accessor",title:"subseq",description:"Expanded Reference: subseq",source:"@site/docs/chap-17/bh-d-dictionary/subseq_accessor.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/subseq_accessor",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/subseq_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/subseq_accessor.md",tags:[],version:"current",frontMatter:{title:"subseq"},sidebar:"tutorialSidebar",previous:{title:"sort, stable-sort",permalink:"/cl-language-reference/chap-17/bh-d-dictionary/sort_stable-sort_function"},next:{title:"18. Hash Tables",permalink:"/cl-language-reference/category/18-hash-tables"}},h={},u=[{value:"Expanded Reference: subseq",id:"expanded-reference-subseq",level:2}];function x(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"subseq",children:"subseq"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(s.h2,{id:"expanded-reference-subseq",children:"Expanded Reference: subseq"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lisp",children:"(subseq )\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var r=n(67294);const t={},c=r.createContext(t);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);