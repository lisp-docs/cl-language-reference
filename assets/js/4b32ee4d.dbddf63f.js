"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[20220],{11685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=t(85893),c=t(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"count, count-if, count-if-not"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"count"})," ",(0,r.jsx)(n.em,{children:"item sequence"})," &key ",(0,r.jsx)(n.em,{children:"from-end start end key test test-not \u2192 n"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"count-if"})," ",(0,r.jsx)(n.em,{children:"predicate sequence"})," &key ",(0,r.jsx)(n.em,{children:"from-end start end key \u2192 n"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"count-if-not"})," ",(0,r.jsx)(n.em,{children:"predicate sequence"})," &key ",(0,r.jsx)(n.em,{children:"from-end start end key \u2192 n"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"item"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"predicate"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of one ",(0,r.jsx)(n.em,{children:"argument"})," that returns a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". ",(0,r.jsx)(n.em,{children:"from-end"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,r.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"test"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of two ",(0,r.jsx)(n.em,{children:"arguments"})," that returns a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". ",(0,r.jsx)(n.em,{children:"test-not"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of two ",(0,r.jsx)(n.em,{children:"arguments"})," that returns a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"start"}),", ",(0,r.jsx)(n.em,{children:"end"}),"\u2014",(0,r.jsx)(n.em,{children:"bounding index designators"})," of ",(0,r.jsx)(n.em,{children:"sequence"}),". The defaults for ",(0,r.jsx)(n.em,{children:"start"})," and ",(0,r.jsx)(n.em,{children:"end"})," are 0 and ",(0,r.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"key"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of one argument, or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"n"}),"\u2014a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," less than or equal to the ",(0,r.jsx)(n.em,{children:"length"})," of ",(0,r.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"count"}),", ",(0,r.jsx)(n.strong,{children:"count-if"}),", and ",(0,r.jsx)(n.strong,{children:"count-if-not"})," count and return the number of ",(0,r.jsx)(n.em,{children:"elements"})," in the ",(0,r.jsx)(n.em,{children:"sequence bounded"})," by ",(0,r.jsx)(n.em,{children:"start"})," and ",(0,r.jsx)(n.em,{children:"end"})," that ",(0,r.jsx)(n.em,{children:"satisfy the test"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"from-end"})," has no direct effect on the result. However, if ",(0,r.jsx)(n.em,{children:"from-end"})," is ",(0,r.jsx)(n.em,{children:"true"}),", the ",(0,r.jsx)(n.em,{children:"elements"})," of ",(0,r.jsx)(n.em,{children:"sequence"})," will be supplied as ",(0,r.jsx)(n.em,{children:"arguments"})," to the ",(0,r.jsx)(n.em,{children:"test"}),", ",(0,r.jsx)(n.em,{children:"test-not"}),", and ",(0,r.jsx)(n.em,{children:"key"})," in reverse order, which may change the side-effects, if any, of those functions."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsxs)(n.p,{children:['(count #\\a "how many A\u2019s are there in here?") ',(0,r.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,r.jsxs)(n.p,{children:["(count-if-not #\u2019oddp \u2019((1) (2) (3) (4)) ",":key"," #\u2019car) ",(0,r.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,r.jsxs)(n.p,{children:['(count-if #\u2019upper-case-p "The Crying of Lot 49" ',":start"," 4) ",(0,r.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"sequence"})," is not a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",":test-not"," ",(0,r.jsx)(n.em,{children:"argument"})," is deprecated."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"count-if-not"})," is deprecated."]})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const o={},d="count, count-if, count-if-not",l={id:"chap-17/bh-d-dictionary/countaacountifaacountifnot",title:"count, count-if, count-if-not",description:"Expanded Reference: count, count-if, count-if-not",source:"@site/docs/chap-17/bh-d-dictionary/countaacountifaacountifnot.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/countaacountifaacountifnot",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/countaacountifaacountifnot",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/countaacountifaacountifnot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"copy-seq",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/copyseq"},next:{title:"elt",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/elt"}},a={},h=[{value:"Expanded Reference: count, count-if, count-if-not",id:"expanded-reference-count-count-if-count-if-not",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"count-count-if-count-if-not",children:"count, count-if, count-if-not"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-count-count-if-count-if-not",children:"Expanded Reference: count, count-if, count-if-not"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(count, count-if, count-if-not )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const c={},s=r.createContext(c);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);