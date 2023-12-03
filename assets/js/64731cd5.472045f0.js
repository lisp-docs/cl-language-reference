"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[10880],{78494:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=n(85893),i=n(11151);function c(e){const s={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"rassoc, rassoc-if, rassoc-if-not"})," ",(0,r.jsx)(s.em,{children:"Function"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"rassoc"})," ",(0,r.jsx)(s.em,{children:"item alist"})," &key ",(0,r.jsx)(s.em,{children:"key test test-not \u2192 entry"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"rassoc-if"})," ",(0,r.jsx)(s.em,{children:"predicate alist"})," &key ",(0,r.jsx)(s.em,{children:"key \u2192 entry"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"rassoc-if-not"})," ",(0,r.jsx)(s.em,{children:"predicate alist"})," &key ",(0,r.jsx)(s.em,{children:"key \u2192 entry"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"item"}),"\u2014an ",(0,r.jsx)(s.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"alist"}),"\u2014an ",(0,r.jsx)(s.em,{children:"association list"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"predicate"}),"\u2014a ",(0,r.jsx)(s.em,{children:"designator"})," for a ",(0,r.jsx)(s.em,{children:"function"})," of one ",(0,r.jsx)(s.em,{children:"argument"})," that returns a ",(0,r.jsx)(s.em,{children:"generalized boolean"}),". ",(0,r.jsx)(s.em,{children:"test"}),"\u2014a ",(0,r.jsx)(s.em,{children:"designator"})," for a ",(0,r.jsx)(s.em,{children:"function"})," of two ",(0,r.jsx)(s.em,{children:"arguments"})," that returns a ",(0,r.jsx)(s.em,{children:"generalized boolean"}),". ",(0,r.jsx)(s.em,{children:"test-not"}),"\u2014a ",(0,r.jsx)(s.em,{children:"designator"})," for a ",(0,r.jsx)(s.em,{children:"function"})," of two ",(0,r.jsx)(s.em,{children:"arguments"})," that returns a ",(0,r.jsx)(s.em,{children:"generalized boolean"}),". ",(0,r.jsx)(s.em,{children:"key"}),"\u2014a ",(0,r.jsx)(s.em,{children:"designator"})," for a ",(0,r.jsx)(s.em,{children:"function"})," of one argument, or ",(0,r.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"entry"}),"\u2014a ",(0,r.jsx)(s.em,{children:"cons"})," that is an ",(0,r.jsx)(s.em,{children:"element"})," of the ",(0,r.jsx)(s.em,{children:"alist"}),", or ",(0,r.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"rassoc"}),", ",(0,r.jsx)(s.strong,{children:"rassoc-if"}),", and ",(0,r.jsx)(s.strong,{children:"rassoc-if-not"})," return the first ",(0,r.jsx)(s.em,{children:"cons"})," whose ",(0,r.jsx)(s.em,{children:"cdr satisfies the test"}),". If no such ",(0,r.jsx)(s.em,{children:"cons"})," is found, ",(0,r.jsx)(s.strong,{children:"nil"})," is returned."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.strong,{children:"nil"})," appears in ",(0,r.jsx)(s.em,{children:"alist"})," in place of a pair, it is ignored."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(s.p,{children:'(setq alist \u2019((1 . "one") (2 . "two") (3 . 3)))'}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2192"}),' ((1 . "one") (2 . "two") (3 . 3))']}),"\n",(0,r.jsxs)(s.p,{children:["(rassoc 3 alist) ",(0,r.jsx)(s.em,{children:"\u2192"})," (3 . 3)"]}),"\n",(0,r.jsxs)(s.p,{children:['(rassoc "two" alist) ',(0,r.jsx)(s.em,{children:"\u2192"})," NIL"]}),"\n",(0,r.jsxs)(s.p,{children:['(rassoc "two" alist ',":test"," \u2019equal) ",(0,r.jsx)(s.em,{children:"\u2192"}),' (2 . "two")']}),"\n",(0,r.jsxs)(s.p,{children:["(rassoc 1 alist ",":key"," #\u2019(lambda (x) (if (numberp x) (/ x 3)))) ",(0,r.jsx)(s.em,{children:"\u2192"})," (3 . 3)"]}),"\n",(0,r.jsxs)(s.p,{children:["(rassoc \u2019a \u2019((a . b) (b . c) (c . a) (z . a))) ",(0,r.jsx)(s.em,{children:"\u2192"})," (C . A)"]}),"\n",(0,r.jsxs)(s.p,{children:["(rassoc-if #\u2019stringp alist) ",(0,r.jsx)(s.em,{children:"\u2192"}),' (1 . "one")']}),"\n",(0,r.jsxs)(s.p,{children:["(rassoc-if-not #\u2019vectorp alist) ",(0,r.jsx)(s.em,{children:"\u2192"})," (3 . 3)"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"assoc"}),", Section 3.6 (Traversal Rules and Side Effects)"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",":test-not"," parameter is deprecated."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"function"})," ",(0,r.jsx)(s.strong,{children:"rassoc-if-not"})," is deprecated."]}),"\n",(0,r.jsxs)(s.p,{children:["It is possible to ",(0,r.jsx)(s.strong,{children:"rplaca"})," the result of ",(0,r.jsx)(s.strong,{children:"rassoc"}),", provided that it is not ",(0,r.jsx)(s.strong,{children:"nil"}),", in order to \u201cupdate\u201d ",(0,r.jsx)(s.em,{children:"alist"}),". The expressions"]}),"\n",(0,r.jsxs)(s.p,{children:["(rassoc item list ",":test"," fn)"]}),"\n",(0,r.jsx)(s.p,{children:"and"}),"\n",(0,r.jsxs)(s.p,{children:["(find item list ",":test"," fn ",":key"," #\u2019cdr)"]}),"\n",(0,r.jsxs)(s.p,{children:["are equivalent in meaning, except when the item is ",(0,r.jsx)(s.strong,{children:"nil"})," and ",(0,r.jsx)(s.strong,{children:"nil"})," appears in place of a pair in the ",(0,r.jsx)(s.em,{children:"alist"}),". See the ",(0,r.jsx)(s.em,{children:"function"})," ",(0,r.jsx)(s.strong,{children:"assoc"}),"."]})]})}function t(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const a={},o="rassoc, rassoc-if, rassoc-if-not",l={id:"chap-14/be-c-dictionary/rassocaarassocifaarassocifnot",title:"rassoc, rassoc-if, rassoc-if-not",description:"Expanded Reference: rassoc, rassoc-if, rassoc-if-not",source:"@site/docs/chap-14/be-c-dictionary/rassocaarassocifaarassocifnot.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/rassocaarassocifaarassocifnot",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/rassocaarassocifaarassocifnot",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/rassocaarassocifaarassocifnot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pushnew",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/pushnew"},next:{title:"remf",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/remf"}},d={},h=[{value:"Expanded Reference: rassoc, rassoc-if, rassoc-if-not",id:"expanded-reference-rassoc-rassoc-if-rassoc-if-not",level:2}];function x(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"rassoc-rassoc-if-rassoc-if-not",children:"rassoc, rassoc-if, rassoc-if-not"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(s.h2,{id:"expanded-reference-rassoc-rassoc-if-rassoc-if-not",children:"Expanded Reference: rassoc, rassoc-if, rassoc-if-not"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lisp",children:"(rassoc, rassoc-if, rassoc-if-not )\n"})})]})}function j(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>t});var r=n(67294);const i={},c=r.createContext(i);function t(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);