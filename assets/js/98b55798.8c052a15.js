"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[87292],{72643:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=s(85893),i=s(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map-into"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map-into"})," ",(0,r.jsx)(n.em,{children:"result-sequence function"})," &rest ",(0,r.jsx)(n.em,{children:"sequences \u2192 result-sequence"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result-sequence"}),"\u2014a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"function"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of as many ",(0,r.jsx)(n.em,{children:"arguments"})," as there are ",(0,r.jsx)(n.em,{children:"sequences"}),". ",(0,r.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Destructively modifies ",(0,r.jsx)(n.em,{children:"result-sequence"})," to contain the results of applying ",(0,r.jsx)(n.em,{children:"function"})," to each element in the argument ",(0,r.jsx)(n.em,{children:"sequences"})," in turn."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result-sequence"})," and each element of ",(0,r.jsx)(n.em,{children:"sequences"})," can each be either a ",(0,r.jsx)(n.em,{children:"list"})," or a ",(0,r.jsx)(n.em,{children:"vector"})," . If ",(0,r.jsx)(n.em,{children:"result-sequence"})," and each element of ",(0,r.jsx)(n.em,{children:"sequences"})," are not all the same length, the iteration terminates when the shortest ",(0,r.jsx)(n.em,{children:"sequence"})," (of any of the ",(0,r.jsx)(n.em,{children:"sequences"})," or the ",(0,r.jsx)(n.em,{children:"result-sequence"}),") is exhausted. If ",(0,r.jsx)(n.em,{children:"result-sequence"})," is a ",(0,r.jsx)(n.em,{children:"vector"})," with a ",(0,r.jsx)(n.em,{children:"fill pointer"})," , the ",(0,r.jsx)(n.em,{children:"fill pointer"})," is ignored when deciding how many iterations to perform, and afterwards the ",(0,r.jsx)(n.em,{children:"fill pointer"})," is set to the number of times ",(0,r.jsx)(n.em,{children:"function"})," was applied. If ",(0,r.jsx)(n.em,{children:"result-sequence"})," is longer than the shortest element of ",(0,r.jsx)(n.em,{children:"sequences"}),", extra elements at the end of ",(0,r.jsx)(n.em,{children:"result-sequence"})," are left unchanged. If ",(0,r.jsx)(n.em,{children:"result-sequence"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),", ",(0,r.jsx)(n.strong,{children:"map-into"})," immediately returns ",(0,r.jsx)(n.strong,{children:"nil"}),", since ",(0,r.jsx)(n.strong,{children:"nil"})," is a ",(0,r.jsx)(n.em,{children:"sequence"})," of length zero."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function"})," has side effects, it can count on being called first on all of the elements with index 0, then on all of those numbered 1, and so on."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsxs)(n.p,{children:["(setq a (list 1 2 3 4) b (list 10 10 10 10)) ",(0,r.jsx)(n.em,{children:"\u2192"})," (10 10 10 10)"]}),"\n",(0,r.jsxs)(n.p,{children:["(map-into a #\u2019+ a b) ",(0,r.jsx)(n.em,{children:"\u2192"})," (11 12 13 14)"]}),"\n",(0,r.jsxs)(n.p,{children:["a ",(0,r.jsx)(n.em,{children:"\u2192"})," (11 12 13 14)"]}),"\n",(0,r.jsxs)(n.p,{children:["b ",(0,r.jsx)(n.em,{children:"\u2192"})," (10 10 10 10)"]}),"\n",(0,r.jsxs)(n.p,{children:["(setq k \u2019(one two three)) ",(0,r.jsx)(n.em,{children:"\u2192"})," (ONE TWO THREE)"]}),"\n",(0,r.jsxs)(n.p,{children:["(map-into a #\u2019cons k a) ",(0,r.jsx)(n.em,{children:"\u2192"})," ((ONE . 11) (TWO . 12) (THREE . 13) 14)"]}),"\n",(0,r.jsxs)(n.p,{children:["(map-into a #\u2019gensym) ",(0,r.jsx)(n.em,{children:"\u2192"})," (#",":G9090"," #",":G9091"," #",":G9092"," #",":G9093",")"]}),"\n",(0,r.jsxs)(n.p,{children:["a ",(0,r.jsx)(n.em,{children:"\u2192"})," (#",":G9090"," #",":G9091"," #",":G9092"," #",":G9093",")"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"result-sequence"})," is not a ",(0,r.jsx)(n.em,{children:"proper sequence"}),". Should be prepared to signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"sequence"})," is not a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map-into"})," differs from ",(0,r.jsx)(n.strong,{children:"map"})," in that it modifies an existing ",(0,r.jsx)(n.em,{children:"sequence"})," rather than creating a new one. In addition, ",(0,r.jsx)(n.strong,{children:"map-into"})," can be called with only two arguments, while ",(0,r.jsx)(n.strong,{children:"map"})," requires at least three"]}),"\n",(0,r.jsx)(n.p,{children:"arguments."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map-into"})," could be defined by:"]}),"\n",(0,r.jsx)(n.p,{children:"(defun map-into (result-sequence function &rest sequences)"}),"\n",(0,r.jsx)(n.p,{children:"(loop for index below (apply #\u2019min"}),"\n",(0,r.jsx)(n.p,{children:"(length result-sequence)"}),"\n",(0,r.jsx)(n.p,{children:"(mapcar #\u2019length sequences))"}),"\n",(0,r.jsx)(n.p,{children:"do (setf (elt result-sequence index)"}),"\n",(0,r.jsx)(n.p,{children:"(apply function"}),"\n",(0,r.jsx)(n.p,{children:"(mapcar #\u2019(lambda (seq) (elt seq index))"}),"\n",(0,r.jsx)(n.p,{children:"sequences))))"}),"\n",(0,r.jsx)(n.p,{children:"result-sequence)"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const l={},d="map-into",o={id:"chap-17/bh-d-dictionary/mapinto",title:"map-into",description:"Expanded Reference: map-into",source:"@site/docs/chap-17/bh-d-dictionary/mapinto.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/mapinto",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/mapinto",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/mapinto.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"map",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/map"},next:{title:"merge",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/merge"}},a={},h=[{value:"Expanded Reference: map-into",id:"expanded-reference-map-into",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"map-into",children:"map-into"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-map-into",children:"Expanded Reference: map-into"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(map-into )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(67294);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);