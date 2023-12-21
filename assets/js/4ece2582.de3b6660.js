"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[9536],{7036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var i=s(85893),t=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mismatch"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mismatch"})," ",(0,i.jsx)(n.em,{children:"sequence-1 sequence-2"})," &key ",(0,i.jsx)(n.em,{children:"from-end test test-not key start1 start2 end1 end2 \u2192 position"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Sequence-1"}),"\u2014a ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Sequence-2"}),"\u2014a ",(0,i.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"from-end"}),"\u2014a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"test"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of two ",(0,i.jsx)(n.em,{children:"arguments"})," that returns a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),". ",(0,i.jsx)(n.em,{children:"test-not"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of two ",(0,i.jsx)(n.em,{children:"arguments"})," that returns a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start1"}),", ",(0,i.jsx)(n.em,{children:"end1"}),"\u2014",(0,i.jsx)(n.em,{children:"bounding index designators"})," of ",(0,i.jsx)(n.em,{children:"sequence-1"}),". The defaults for ",(0,i.jsx)(n.em,{children:"start1"})," and ",(0,i.jsx)(n.em,{children:"end1"})," are 0 and ",(0,i.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start2"}),", ",(0,i.jsx)(n.em,{children:"end2"}),"\u2014",(0,i.jsx)(n.em,{children:"bounding index designators"})," of ",(0,i.jsx)(n.em,{children:"sequence-2"}),". The defaults for ",(0,i.jsx)(n.em,{children:"start2"})," and ",(0,i.jsx)(n.em,{children:"end2"})," are 0 and ",(0,i.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"key"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of one argument, or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"position"}),"\u2014a ",(0,i.jsx)(n.em,{children:"bounding index"})," of ",(0,i.jsx)(n.em,{children:"sequence-1"}),", or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The specified subsequences of ",(0,i.jsx)(n.em,{children:"sequence-1"})," and ",(0,i.jsx)(n.em,{children:"sequence-2"})," are compared element-wise. The ",(0,i.jsx)(n.em,{children:"key"})," argument is used for both the ",(0,i.jsx)(n.em,{children:"sequence-1"})," and the ",(0,i.jsx)(n.em,{children:"sequence-2"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"sequence-1"})," and ",(0,i.jsx)(n.em,{children:"sequence-2"})," are of equal length and match in every element, the result is ",(0,i.jsx)(n.em,{children:"false"}),". Otherwise, the result is a non-negative ",(0,i.jsx)(n.em,{children:"integer"})," , the index within ",(0,i.jsx)(n.em,{children:"sequence-1"})," of the leftmost or rightmost position, depending on ",(0,i.jsx)(n.em,{children:"from-end"}),", at which the two subsequences fail to match. If one subsequence is shorter than and a matching prefix of the other, the result is the index relative to ",(0,i.jsx)(n.em,{children:"sequence-1"})," beyond the last position tested."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"from-end"})," is ",(0,i.jsx)(n.em,{children:"true"}),", then one plus the index of the rightmost position in which the ",(0,i.jsx)(n.em,{children:"sequences"})," differ is returned. In effect, the subsequences are aligned at their right-hand ends; then, the last elements are compared, the penultimate elements, and so on. The index returned is an index relative to ",(0,i.jsx)(n.em,{children:"sequence-1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n(mismatch "abcd" "ABCDE" :test #\u2019char-equal) \u2192 4 \n(mismatch \u2019(3 2 1 1 2 3) \u2019(1 2 3) :from-end t) \u2192 3 \n(mismatch \u2019(1 2 3) \u2019(2 3 4) :test-not #\u2019eq :key #\u2019oddp) \u2192 NIL \n(mismatch \u2019(1 2 3 4 5 6) \u2019(3 4 5 6 7) :start1 2 :end2 4) \u2192 NIL \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:"Section 3.6 (Traversal Rules and Side Effects)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",":test-not"," ",(0,i.jsx)(n.em,{children:"argument"})," is deprecated."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}const d={title:"mismatch"},h="mismatch",a={id:"chap-17/bh-d-dictionary/mismatch_function",title:"mismatch",description:"Expanded Reference: mismatch",source:"@site/docs/chap-17/bh-d-dictionary/mismatch_function.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/mismatch_function",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/mismatch_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/mismatch_function.md",tags:[],version:"current",frontMatter:{title:"mismatch"},sidebar:"tutorialSidebar",previous:{title:"merge",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/merge_function"},next:{title:"position, position-if, position-if-not",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/position_position-if_position-if-not_function"}},o={},l=[{value:"Expanded Reference: mismatch",id:"expanded-reference-mismatch",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mismatch",children:"mismatch"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-mismatch",children:"Expanded Reference: mismatch"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(mismatch )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(67294);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);