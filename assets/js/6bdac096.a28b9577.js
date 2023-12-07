"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[3665],{87537:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=n(85893),r=n(11151);function c(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"assoc, assoc-if, assoc-if-not"})," ",(0,i.jsx)(s.em,{children:"Function"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"assoc"})," ",(0,i.jsx)(s.em,{children:"item alist"})," &key ",(0,i.jsx)(s.em,{children:"key test test-not \u2192 entry"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"assoc-if"})," ",(0,i.jsx)(s.em,{children:"predicate alist"})," &key ",(0,i.jsx)(s.em,{children:"key \u2192 entry"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"assoc, assoc-if, assoc-if-not"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"assoc-if-not"})," ",(0,i.jsx)(s.em,{children:"predicate alist"})," &key ",(0,i.jsx)(s.em,{children:"key \u2192 entry"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"item"}),"\u2014an ",(0,i.jsx)(s.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"alist"}),"\u2014an ",(0,i.jsx)(s.em,{children:"association list"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"predicate"}),"\u2014a ",(0,i.jsx)(s.em,{children:"designator"})," for a ",(0,i.jsx)(s.em,{children:"function"})," of one ",(0,i.jsx)(s.em,{children:"argument"})," that returns a ",(0,i.jsx)(s.em,{children:"generalized boolean"}),". ",(0,i.jsx)(s.em,{children:"test"}),"\u2014a ",(0,i.jsx)(s.em,{children:"designator"})," for a ",(0,i.jsx)(s.em,{children:"function"})," of two ",(0,i.jsx)(s.em,{children:"arguments"})," that returns a ",(0,i.jsx)(s.em,{children:"generalized boolean"}),". ",(0,i.jsx)(s.em,{children:"test-not"}),"\u2014a ",(0,i.jsx)(s.em,{children:"designator"})," for a ",(0,i.jsx)(s.em,{children:"function"})," of two ",(0,i.jsx)(s.em,{children:"arguments"})," that returns a ",(0,i.jsx)(s.em,{children:"generalized boolean"}),". ",(0,i.jsx)(s.em,{children:"key"}),"\u2014a ",(0,i.jsx)(s.em,{children:"designator"})," for a ",(0,i.jsx)(s.em,{children:"function"})," of one argument, or ",(0,i.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"entry"}),"\u2014a ",(0,i.jsx)(s.em,{children:"cons"})," that is an ",(0,i.jsx)(s.em,{children:"element"})," of ",(0,i.jsx)(s.em,{children:"alist"}),", or ",(0,i.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"assoc"}),", ",(0,i.jsx)(s.strong,{children:"assoc-if"}),", and ",(0,i.jsx)(s.strong,{children:"assoc-if-not"})," return the first ",(0,i.jsx)(s.em,{children:"cons"})," in ",(0,i.jsx)(s.em,{children:"alist"})," whose ",(0,i.jsx)(s.em,{children:"car satisfies the test"}),", or ",(0,i.jsx)(s.strong,{children:"nil"})," if no such ",(0,i.jsx)(s.em,{children:"cons"})," is found."]}),"\n",(0,i.jsxs)(s.p,{children:["For ",(0,i.jsx)(s.strong,{children:"assoc"}),", ",(0,i.jsx)(s.strong,{children:"assoc-if"}),", and ",(0,i.jsx)(s.strong,{children:"assoc-if-not"}),", if ",(0,i.jsx)(s.strong,{children:"nil"})," appears in ",(0,i.jsx)(s.em,{children:"alist"})," in place of a pair, it is ignored. ",(0,i.jsx)(s.strong,{children:"Examples:"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lisp",children:'\n(setq values \u2019((x . 100) (y . 200) (z . 50))) \u2192 ((X . 100) (Y . 200) (Z . 50)) (assoc \u2019y values) \u2192 (Y . 200) \n(rplacd (assoc \u2019y values) 201) \u2192 (Y . 201) \n(assoc \u2019y values) \u2192 (Y . 201) \n(setq alist \u2019((1 . "one")(2 . "two")(3 . "three"))) \n\u2192 ((1 . "one") (2 . "two") (3 . "three")) \n(assoc 2 alist) \u2192 (2 . "two") \n(assoc-if #\u2019evenp alist) \u2192 (2 . "two") \n(assoc-if-not #\u2019(lambda(x) (< x 3)) alist) \u2192 (3 . "three") \n(setq alist \u2019(("one" . 1)("two" . 2))) \u2192 (("one" . 1) ("two" . 2)) \n(assoc "one" alist) \u2192 NIL \n(assoc "one" alist :test #\u2019equalp) \u2192 ("one" . 1) \n(assoc "two" alist :key #\u2019(lambda(x) (char x 2))) \u2192 NIL \n(assoc #\\o alist :key #\u2019(lambda(x) (char x 2))) \u2192 ("two" . 2) \n(assoc \u2019r \u2019((a . b) (c . d) (r . x) (s . y) (r . z))) \u2192 (R . X) \n(assoc \u2019goo \u2019((foo . bar) (zoo . goo))) \u2192 NIL \n(assoc \u20192 \u2019((1 a b c) (2 b c d) (-7 x y z))) \u2192 (2 B C D) \n(setq alist \u2019(("one" . 1) ("2" . 2) ("three" . 3))) \n\u2192 (("one" . 1) ("2" . 2) ("three" . 3)) \n(assoc-if-not #\u2019alpha-char-p alist \n\t\t:key #\u2019(lambda (x) (char x 0))) \u2192 ("2" . 2) \n\n\n\n\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(s.p,{children:["Should be prepared to signal an error of ",(0,i.jsx)(s.em,{children:"type"})," ",(0,i.jsx)(s.strong,{children:"type-error"})," if ",(0,i.jsx)(s.em,{children:"alist"})," is not an ",(0,i.jsx)(s.em,{children:"association list"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"rassoc"}),", ",(0,i.jsx)(s.strong,{children:"find"}),", ",(0,i.jsx)(s.strong,{children:"member"}),", ",(0,i.jsx)(s.strong,{children:"position"}),", Section 3.6 (Traversal Rules and Side Effects)"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",":test-not"," parameter is deprecated."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.em,{children:"function"})," ",(0,i.jsx)(s.strong,{children:"assoc-if-not"})," is deprecated."]}),"\n",(0,i.jsxs)(s.p,{children:["It is possible to ",(0,i.jsx)(s.strong,{children:"rplacd"})," the result of ",(0,i.jsx)(s.strong,{children:"assoc"}),", provided that it is not ",(0,i.jsx)(s.strong,{children:"nil"}),", in order to \u201cupdate\u201d ",(0,i.jsx)(s.em,{children:"alist"}),". The two expressions"]}),"\n",(0,i.jsxs)(s.p,{children:["(assoc item list ",":test"," fn)"]}),"\n",(0,i.jsx)(s.p,{children:"and"}),"\n",(0,i.jsxs)(s.p,{children:["(find item list ",":test"," fn ",":key"," #\u2019car)"]}),"\n",(0,i.jsxs)(s.p,{children:["are equivalent in meaning with one exception: if ",(0,i.jsx)(s.strong,{children:"nil"})," appears in ",(0,i.jsx)(s.em,{children:"alist"})," in place of a pair, and ",(0,i.jsx)(s.em,{children:"item"})," is ",(0,i.jsx)(s.strong,{children:"nil"}),", ",(0,i.jsx)(s.strong,{children:"find"})," will compute the ",(0,i.jsx)(s.em,{children:"car"})," of the ",(0,i.jsx)(s.strong,{children:"nil"})," in ",(0,i.jsx)(s.em,{children:"alist"}),", find that it is equal to ",(0,i.jsx)(s.em,{children:"item"}),", and return ",(0,i.jsx)(s.strong,{children:"nil"}),", whereas ",(0,i.jsx)(s.strong,{children:"assoc"})," will ignore the ",(0,i.jsx)(s.strong,{children:"nil"})," in ",(0,i.jsx)(s.em,{children:"alist"})," and continue to search for an actual ",(0,i.jsx)(s.em,{children:"cons"})," whose ",(0,i.jsx)(s.em,{children:"car"})," is ",(0,i.jsx)(s.strong,{children:"nil"}),"."]})]})}function t(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const o={},a="assoc, assoc-if, assoc-if-not",l={id:"chap-14/be-c-dictionary/assoc",title:"assoc, assoc-if, assoc-if-not",description:"Expanded Reference: assoc, assoc-if, assoc-if-not",source:"@site/docs/chap-14/be-c-dictionary/assoc.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/assoc",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/assoc",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/assoc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"append",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/append"},next:{title:"atom",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/atom"}},d={},h=[{value:"Expanded Reference: assoc, assoc-if, assoc-if-not",id:"expanded-reference-assoc-assoc-if-assoc-if-not",level:2}];function x(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"assoc-assoc-if-assoc-if-not",children:"assoc, assoc-if, assoc-if-not"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(s.h2,{id:"expanded-reference-assoc-assoc-if-assoc-if-not",children:"Expanded Reference: assoc, assoc-if, assoc-if-not"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lisp",children:"(assoc, assoc-if, assoc-if-not )\n"})})]})}function j(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>t});var i=n(67294);const r={},c=i.createContext(r);function t(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);