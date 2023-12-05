"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[37818],{82355:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>m,metadata:()=>o,toc:()=>a});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"member, member-if, member-if-not"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"member"})," ",(0,i.jsx)(n.em,{children:"item list"})," &key ",(0,i.jsx)(n.em,{children:"key test test-not \u2192 tail"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"member-if"})," ",(0,i.jsx)(n.em,{children:"predicate list"})," &key ",(0,i.jsx)(n.em,{children:"key \u2192 tail"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"member-if-not"})," ",(0,i.jsx)(n.em,{children:"predicate list"})," &key ",(0,i.jsx)(n.em,{children:"key \u2192 tail"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"item"}),"\u2014an ",(0,i.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"list"}),"\u2014a ",(0,i.jsx)(n.em,{children:"proper list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"predicate"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of one ",(0,i.jsx)(n.em,{children:"argument"})," that returns a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),". ",(0,i.jsx)(n.em,{children:"test"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of two ",(0,i.jsx)(n.em,{children:"arguments"})," that returns a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),". ",(0,i.jsx)(n.em,{children:"test-not"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of two ",(0,i.jsx)(n.em,{children:"arguments"})," that returns a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),". ",(0,i.jsx)(n.em,{children:"key"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of one argument, or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tail"}),"\u2014a ",(0,i.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"member"}),", ",(0,i.jsx)(n.strong,{children:"member-if"}),", and ",(0,i.jsx)(n.strong,{children:"member-if-not"})," each search ",(0,i.jsx)(n.em,{children:"list"})," for ",(0,i.jsx)(n.em,{children:"item"})," or for a top-level element that ",(0,i.jsx)(n.em,{children:"satisfies the test"}),". The argument to the ",(0,i.jsx)(n.em,{children:"predicate"})," function is an element of ",(0,i.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If some element ",(0,i.jsx)(n.em,{children:"satisfies the test"}),", the tail of ",(0,i.jsx)(n.em,{children:"list"})," beginning with this element is returned; otherwise ",(0,i.jsx)(n.strong,{children:"nil"})," is returned."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"list"})," is searched on the top level only."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(member 2 \u2019(1 2 3)) *\u2192* (2 3) \n\n\n\n(member 2 \u2019((1 . 2) (3 . 4)) :test-not #\u2019= :key #\u2019cdr) *\u2192* ((3 . 4)) \n\n\n\n(member \u2019e \u2019(a b c d)) *\u2192* NIL \n\n\n\n(member-if #\u2019listp \u2019(a b nil c d)) *\u2192* (NIL C D) \n\n\n\n(member-if #\u2019numberp \u2019(a #\\Space 5/3 foo)) *\u2192* (5/3 FOO) \n\n\n\n(member-if-not #\u2019zerop \n\n\n\n\u2019(3 6 9 11 . 12) \n\n\n\n:key #\u2019(lambda (x) (mod x 3))) *\u2192* (11 . 12) \n\n\n\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"list"})," is not a ",(0,i.jsx)(n.em,{children:"proper list"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"find"}),", ",(0,i.jsx)(n.strong,{children:"position"}),", Section 3.6 (Traversal Rules and Side Effects)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",":test-not"," parameter is deprecated."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"function"})," ",(0,i.jsx)(n.strong,{children:"member-if-not"})," is deprecated."]}),"\n",(0,i.jsx)(n.p,{children:"In the following"}),"\n",(0,i.jsxs)(n.p,{children:["(member \u2019a \u2019(g (a y) c a d e a f)) ",(0,i.jsx)(n.em,{children:"\u2192"})," (A D E A F)"]}),"\n",(0,i.jsxs)(n.p,{children:["the value returned by ",(0,i.jsx)(n.strong,{children:"member"})," is ",(0,i.jsx)(n.em,{children:"identical"})," to the portion of the ",(0,i.jsx)(n.em,{children:"list"})," beginning with a. Thus ",(0,i.jsx)(n.strong,{children:"rplaca"})," on the result of ",(0,i.jsx)(n.strong,{children:"member"})," can be used to alter the part of the ",(0,i.jsx)(n.em,{children:"list"})," where a was found (assuming a check has been made that ",(0,i.jsx)(n.strong,{children:"member"})," did not return ",(0,i.jsx)(n.strong,{children:"nil"}),")."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const m={},l="member, member-if, member-if-not",o={id:"chap-14/be-c-dictionary/member",title:"member, member-if, member-if-not",description:"Expanded Reference: member, member-if, member-if-not",source:"@site/docs/chap-14/be-c-dictionary/member.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/member",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/member",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/member.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mapc, mapcar, mapcan, mapl, maplist, mapcon",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/mapc"},next:{title:"nconc",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/nconc"}},d={},a=[{value:"Expanded Reference: member, member-if, member-if-not",id:"expanded-reference-member-member-if-member-if-not",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"member-member-if-member-if-not",children:"member, member-if, member-if-not"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-member-member-if-member-if-not",children:"Expanded Reference: member, member-if, member-if-not"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(member, member-if, member-if-not )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>m,a:()=>c});var i=r(67294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);