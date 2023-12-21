"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[36514],{96242:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=i(85893),t=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find, find-if, find-if-not"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find"})," ",(0,r.jsx)(n.em,{children:"item sequence"})," &key ",(0,r.jsx)(n.em,{children:"from-end test test-not start end key \u2192 element"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find-if"})," ",(0,r.jsx)(n.em,{children:"predicate sequence"})," &key ",(0,r.jsx)(n.em,{children:"from-end start end key \u2192 element"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find-if-not"})," ",(0,r.jsx)(n.em,{children:"predicate sequence"})," &key ",(0,r.jsx)(n.em,{children:"from-end start end key \u2192 element"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"item"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"predicate"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of one ",(0,r.jsx)(n.em,{children:"argument"})," that returns a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". ",(0,r.jsx)(n.em,{children:"from-end"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,r.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"test"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of two ",(0,r.jsx)(n.em,{children:"arguments"})," that returns a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". ",(0,r.jsx)(n.em,{children:"test-not"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of two ",(0,r.jsx)(n.em,{children:"arguments"})," that returns a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"start"}),", ",(0,r.jsx)(n.em,{children:"end"}),"\u2014",(0,r.jsx)(n.em,{children:"bounding index designators"})," of ",(0,r.jsx)(n.em,{children:"sequence"}),". The defaults for ",(0,r.jsx)(n.em,{children:"start"})," and ",(0,r.jsx)(n.em,{children:"end"})," are 0 and ",(0,r.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"key"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of one argument, or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"element"}),"\u2014an ",(0,r.jsx)(n.em,{children:"element"})," of the ",(0,r.jsx)(n.em,{children:"sequence"}),", or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find"}),", ",(0,r.jsx)(n.strong,{children:"find-if"}),", and ",(0,r.jsx)(n.strong,{children:"find-if-not"})," each search for an ",(0,r.jsx)(n.em,{children:"element"})," of the ",(0,r.jsx)(n.em,{children:"sequence bounded"})," by ",(0,r.jsx)(n.em,{children:"start"})," and ",(0,r.jsx)(n.em,{children:"end"})," that ",(0,r.jsx)(n.em,{children:"satisfies the predicate predicate"})," or that ",(0,r.jsx)(n.em,{children:"satisfies the test test"})," or ",(0,r.jsx)(n.em,{children:"test-not"}),", as appropriate."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"from-end"})," is ",(0,r.jsx)(n.em,{children:"true"}),", then the result is the rightmost ",(0,r.jsx)(n.em,{children:"element"})," that ",(0,r.jsx)(n.em,{children:"satisfies the test"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"sequence"})," contains an ",(0,r.jsx)(n.em,{children:"element"})," that ",(0,r.jsx)(n.em,{children:"satisfies the test"}),", then the leftmost or rightmost ",(0,r.jsx)(n.em,{children:"sequence"})," element, depending on ",(0,r.jsx)(n.em,{children:"from-end"}),", is returned; otherwise ",(0,r.jsx)(n.strong,{children:"nil"})," is returned."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(find #\\d "here are some letters that can be looked at" :test #\u2019char>) \n\u2192 #\\Space \n(find-if #\u2019oddp \u2019(1 2 3 4 5) :end 3 :from-end t) \u2192 3 \n(find-if-not #\u2019complexp \n\t       \u2019#(3.5 2 #C(1.0 0.0) #C(0.0 1.0)) \n\t       :start 2) \u2192 NIL \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"sequence"})," is not a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"position"}),", Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",":test-not"," ",(0,r.jsx)(n.em,{children:"argument"})," is deprecated."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"find-if-not"})," is deprecated."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={title:"find, find-if, find-if-not"},o="find, find-if, find-if-not",l={id:"chap-17/bh-d-dictionary/find_find-if_find-if-not_function",title:"find, find-if, find-if-not",description:"Expanded Reference: find, find-if, find-if-not",source:"@site/docs/chap-17/bh-d-dictionary/find_find-if_find-if-not_function.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/find_find-if_find-if-not_function",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/find_find-if_find-if-not_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/find_find-if_find-if-not_function.md",tags:[],version:"current",frontMatter:{title:"find, find-if, find-if-not"},sidebar:"tutorialSidebar",previous:{title:"fill",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/fill_function"},next:{title:"length",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/length_function"}},f={},h=[{value:"Expanded Reference: find, find-if, find-if-not",id:"expanded-reference-find-find-if-find-if-not",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"find-find-if-find-if-not",children:"find, find-if, find-if-not"}),"\n","\n","\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-find-find-if-find-if-not",children:"Expanded Reference: find, find-if, find-if-not"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(find, find-if, find-if-not )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>d});var r=i(67294);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);