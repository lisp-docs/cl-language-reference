"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[89488],{59732:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=t(85893),r=t(11151);function i(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"tagbody"})," ",(0,s.jsx)(e.em,{children:"Special Operator"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"tagbody"})," ",(0,s.jsx)(e.em,{children:"&#123;tag | statement&#125;"}),"* ",(0,s.jsx)(e.em,{children:"\u2192"})," ",(0,s.jsx)(e.strong,{children:"nil"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"tag"}),"\u2014a ",(0,s.jsx)(e.em,{children:"go tag"}),"; not evaluated."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"statement"}),"\u2014a ",(0,s.jsx)(e.em,{children:"compound form"}),"; evaluated as described below."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:["Executes zero or more ",(0,s.jsx)(e.em,{children:"statements"})," in a ",(0,s.jsx)(e.em,{children:"lexical environment"})," that provides for control transfers to labels indicated by the ",(0,s.jsx)(e.em,{children:"tags"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.em,{children:"statements"})," in a ",(0,s.jsx)(e.strong,{children:"tagbody"})," are ",(0,s.jsx)(e.em,{children:"evaluated"})," in order from left to right, and their ",(0,s.jsx)(e.em,{children:"values"})," are discarded. If at any time there are no remaining ",(0,s.jsx)(e.em,{children:"statements"}),", ",(0,s.jsx)(e.strong,{children:"tagbody"})," returns ",(0,s.jsx)(e.strong,{children:"nil"}),". However, if (go ",(0,s.jsx)(e.em,{children:"tag"}),") is ",(0,s.jsx)(e.em,{children:"evaluated"}),", control jumps to the part of the body labeled with the ",(0,s.jsx)(e.em,{children:"tag"}),". (Tags are compared with ",(0,s.jsx)(e.strong,{children:"eql"}),".)"]}),"\n",(0,s.jsxs)(e.p,{children:["A ",(0,s.jsx)(e.em,{children:"tag"})," established by ",(0,s.jsx)(e.strong,{children:"tagbody"})," has ",(0,s.jsx)(e.em,{children:"lexical scope"})," and has ",(0,s.jsx)(e.em,{children:"dynamic extent"}),". Once ",(0,s.jsx)(e.strong,{children:"tagbody"})," has been exited, it is no longer valid to ",(0,s.jsx)(e.strong,{children:"go"})," to a ",(0,s.jsx)(e.em,{children:"tag"})," in its body. It is permissible for ",(0,s.jsx)(e.strong,{children:"go"})," to jump to a ",(0,s.jsx)(e.strong,{children:"tagbody"})," that is not the innermost ",(0,s.jsx)(e.strong,{children:"tagbody"})," containing that ",(0,s.jsx)(e.strong,{children:"go"}),"; the ",(0,s.jsx)(e.em,{children:"tags"})," established by a ",(0,s.jsx)(e.strong,{children:"tagbody"})," only shadow other ",(0,s.jsx)(e.em,{children:"tags"})," of like name."]}),"\n",(0,s.jsxs)(e.p,{children:["The determination of which elements of the body are ",(0,s.jsx)(e.em,{children:"tags"})," and which are ",(0,s.jsx)(e.em,{children:"statements"})," is made prior to any ",(0,s.jsx)(e.em,{children:"macro expansion"})," of that element. If a ",(0,s.jsx)(e.em,{children:"statement"})," is a ",(0,s.jsx)(e.em,{children:"macro form"})," and its ",(0,s.jsx)(e.em,{children:"macro expansion"})," is an ",(0,s.jsx)(e.em,{children:"atom"}),", that ",(0,s.jsx)(e.em,{children:"atom"})," is treated as a ",(0,s.jsx)(e.em,{children:"statement"}),", not a ",(0,s.jsx)(e.em,{children:"tag"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:" \n\n\n\n(let (val) \n\n\n\n(tagbody \n\n\n\n(setq val 1) \n\n\n\n(go point-a) \n\n\n\n(incf val 16) \n\n\n\npoint-c \n\n\n\n(incf val 04) \n\n\n\n(go point-b) \n\n\n\n(incf val 32) \n\n\n\npoint-a \n\n\n\n(incf val 02) \n\n\n\n(go point-c) \n\n\n\n(incf val 64) \n\n\n\npoint-b \n\n\n\n(incf val 08)) \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nval) \n\n\n\n*\u2192* 15 \n\n\n\n(defun f1 (flag) \n\n\n\n(let ((n 1)) \n\n\n\n(tagbody \n\n\n\n(setq n (f2 flag #\u2019(lambda () (go out)))) \n\n\n\nout \n\n\n\n(prin1 n)))) \n\n\n\n*\u2192* F1 \n\n\n\n(defun f2 (flag escape) \n\n\n\n(if flag (funcall escape) 2)) \n\n\n\n*\u2192* F2 \n\n\n\n(f1 nil) \n\n\n\n\u25b7 2 \n\n\n\n*\u2192* NIL \n\n\n\n(f1 t) \n\n\n\n\u25b7 1 \n\n\n\n*\u2192* NIL \n\n\n\n\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"go"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.em,{children:"macros"})," in Figure 5\u201310 have ",(0,s.jsx)(e.em,{children:"implicit tagbodies"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["|",(0,s.jsxs)("p",{children:[(0,s.jsx)(e.strong,{children:"do do-external-symbols dotimes do* do-symbols prog"})," "]}),(0,s.jsx)("p",{children:(0,s.jsx)(e.strong,{children:"do-all-symbols dolist prog*"})}),"|"]}),"\n",(0,s.jsx)(e.p,{children:"| :- |"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Figure 5\u201310. Macros that have implicit tagbodies."})})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}const o={},d="tagbody",c={id:"chap-5/f-d-dictionary/tagbody",title:"tagbody",description:"Expanded Reference: tagbody",source:"@site/docs/chap-5/f-d-dictionary/tagbody.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/tagbody",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/tagbody",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/tagbody.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"t",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/t"},next:{title:"throw",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/throw"}},l={},h=[{value:"Expanded Reference: tagbody",id:"expanded-reference-tagbody",level:2}];function x(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"tagbody",children:"tagbody"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(e.h2,{id:"expanded-reference-tagbody",children:"Expanded Reference: tagbody"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:"(tagbody )\n"})})]})}function g(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>a});var s=t(67294);const r={},i=s.createContext(r);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);