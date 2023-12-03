"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[12895],{35847:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=n(85893),r=n(11151);function i(e){const s={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"set-exclusive-or, nset-exclusive-or"})," ",(0,t.jsx)(s.em,{children:"Function"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"set-exclusive-or"})," ",(0,t.jsx)(s.em,{children:"list-1 list-2"})," &key ",(0,t.jsx)(s.em,{children:"key test test-not \u2192 result-list"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nset-exclusive-or"})," ",(0,t.jsx)(s.em,{children:"list-1 list-2"})," &key ",(0,t.jsx)(s.em,{children:"key test test-not \u2192 result-list"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"list-1"}),"\u2014a ",(0,t.jsx)(s.em,{children:"proper list"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"list-2"}),"\u2014a ",(0,t.jsx)(s.em,{children:"proper list"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"test"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of two ",(0,t.jsx)(s.em,{children:"arguments"})," that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". ",(0,t.jsx)(s.em,{children:"test-not"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of two ",(0,t.jsx)(s.em,{children:"arguments"})," that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". ",(0,t.jsx)(s.em,{children:"key"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of one argument, or ",(0,t.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"result-list"}),"\u2014a ",(0,t.jsx)(s.em,{children:"list"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"set-exclusive-or"})," returns a ",(0,t.jsx)(s.em,{children:"list"})," of elements that appear in exactly one of ",(0,t.jsx)(s.em,{children:"list-1"})," and ",(0,t.jsx)(s.em,{children:"list-2"}),". ",(0,t.jsx)(s.strong,{children:"nset-exclusive-or"})," is the ",(0,t.jsx)(s.em,{children:"destructive"})," version of ",(0,t.jsx)(s.strong,{children:"set-exclusive-or"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For all possible ordered pairs consisting of one element from ",(0,t.jsx)(s.em,{children:"list-1"})," and one element from ",(0,t.jsx)(s.em,{children:"list-2"}),", the ",":test"," or ",":test-not"," function is used to determine whether they ",(0,t.jsx)(s.em,{children:"satisfy the test"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",":key"," is supplied, it is used to extract the part to be tested from the ",(0,t.jsx)(s.em,{children:"list-1"})," or ",(0,t.jsx)(s.em,{children:"list-2"})," element. The first argument to the ",":test"," or ",":test-not"," function is the part of an element of ",(0,t.jsx)(s.em,{children:"list-1"})," extracted by the ",":key"," function (if supplied); the second argument is the part of an element of ",(0,t.jsx)(s.em,{children:"list-2"})," extracted by the ",":key"," function (if supplied). If ",":key"," is not supplied or ",(0,t.jsx)(s.strong,{children:"nil"}),", the ",(0,t.jsx)(s.em,{children:"list-1"})," or ",(0,t.jsx)(s.em,{children:"list-2"})," element is used."]}),"\n",(0,t.jsxs)(s.p,{children:["The result contains precisely those elements of ",(0,t.jsx)(s.em,{children:"list-1"})," and ",(0,t.jsx)(s.em,{children:"list-2"})," that appear in no matching pair. The result ",(0,t.jsx)(s.em,{children:"list"})," of ",(0,t.jsx)(s.strong,{children:"set-exclusive-or"})," might share storage with one of ",(0,t.jsx)(s.em,{children:"list-1"})," or ",(0,t.jsx)(s.em,{children:"list-2"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(s.p,{children:'(setq lst1 (list 1 "a" "b")'}),"\n",(0,t.jsxs)(s.p,{children:['lst2 (list 1 "A" "b")) ',(0,t.jsx)(s.em,{children:"\u2192"}),' (1 "A" "b")']}),"\n",(0,t.jsxs)(s.p,{children:["(set-exclusive-or lst1 lst2) ",(0,t.jsx)(s.em,{children:"\u2192"}),' ("b" "A" "b" "a")']}),"\n",(0,t.jsxs)(s.p,{children:["(set-exclusive-or lst1 lst2 ",":test"," #\u2019equal) ",(0,t.jsx)(s.em,{children:"\u2192"}),' ("A" "a")']}),"\n",(0,t.jsxs)(s.p,{children:["(set-exclusive-or lst1 lst2 ",":test"," \u2019equalp) ",(0,t.jsx)(s.em,{children:"\u2192"})," NIL"]}),"\n",(0,t.jsxs)(s.p,{children:["(nset-exclusive-or lst1 lst2) ",(0,t.jsx)(s.em,{children:"\u2192"}),' ("a" "b" "A" "b")']}),"\n",(0,t.jsx)(s.p,{children:'(setq lst1 (list (("a" . "b") ("c" . "d") ("e" . "f"))))'}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"\u2192"}),' (("a" . "b") ("c" . "d") ("e" . "f"))']}),"\n",(0,t.jsx)(s.p,{children:'(setq lst2 (list (("c" . "a") ("e" . "b") ("d" . "a"))))'}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"\u2192"}),' (("c" . "a") ("e" . "b") ("d" . "a"))']}),"\n",(0,t.jsxs)(s.p,{children:["(nset-exclusive-or lst1 lst2 ",":test"," #\u2019string= ",":key"," #\u2019cdr)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"\u2192"}),' (("c" . "d") ("e" . "f") ("c" . "a") ("d" . "a"))']}),"\n",(0,t.jsxs)(s.p,{children:["lst1 ",(0,t.jsx)(s.em,{children:"\u2192"}),' (("a" . "b") ("c" . "d") ("e" . "f"))']}),"\n",(0,t.jsxs)(s.p,{children:["lst2 ",(0,t.jsx)(s.em,{children:"\u2192"}),' (("c" . "a") ("d" . "a"))']}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nset-exclusive-or"})," is permitted to modify any part, ",(0,t.jsx)(s.em,{children:"car"})," or ",(0,t.jsx)(s.em,{children:"cdr"})," , of the ",(0,t.jsx)(s.em,{children:"list structure"})," of ",(0,t.jsx)(s.em,{children:"list-1"})," or ",(0,t.jsx)(s.em,{children:"list-2"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(s.p,{children:["Should be prepared to signal an error of ",(0,t.jsx)(s.em,{children:"type"})," ",(0,t.jsx)(s.strong,{children:"type-error"})," if ",(0,t.jsx)(s.em,{children:"list-1"})," and ",(0,t.jsx)(s.em,{children:"list-2"})," are not ",(0,t.jsx)(s.em,{children:"proper lists"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(s.p,{children:"Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects)"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",":test-not"," parameter is deprecated."]}),"\n",(0,t.jsxs)(s.p,{children:["Since the ",(0,t.jsx)(s.strong,{children:"nset-exclusive-or"})," side effect is not required, it should not be used in for-effect-only positions in portable code."]})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={},o="set-exclusive-or, nset-exclusive-or",d={id:"chap-14/be-c-dictionary/setexclusiveoraansetexclusiveor",title:"set-exclusive-or, nset-exclusive-or",description:"Expanded Reference: set-exclusive-or, nset-exclusive-or",source:"@site/docs/chap-14/be-c-dictionary/setexclusiveoraansetexclusiveor.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/setexclusiveoraansetexclusiveor",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/setexclusiveoraansetexclusiveor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/setexclusiveoraansetexclusiveor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set-difference, nset-difference",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/setdifferenceaansetdifference"},next:{title:"sublis, nsublis",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/sublisaansublis"}},x={},a=[{value:"Expanded Reference: set-exclusive-or, nset-exclusive-or",id:"expanded-reference-set-exclusive-or-nset-exclusive-or",level:2}];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"set-exclusive-or-nset-exclusive-or",children:"set-exclusive-or, nset-exclusive-or"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(s.h2,{id:"expanded-reference-set-exclusive-or-nset-exclusive-or",children:"Expanded Reference: set-exclusive-or, nset-exclusive-or"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"(set-exclusive-or, nset-exclusive-or )\n"})})]})}function j(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var t=n(67294);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);