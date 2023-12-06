"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[10980],{75213:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var i=l(85893),r=l(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"locally"})," ",(0,i.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"locally"})," ",(0,i.jsx)(n.em,{children:"{declaration}"}),"* ",(0,i.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Declaration"}),"\u2014a ",(0,i.jsx)(n.strong,{children:"declare"})," ",(0,i.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,i.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"results"}),"\u2014the ",(0,i.jsx)(n.em,{children:"values"})," of the ",(0,i.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Sequentially evaluates a body of ",(0,i.jsx)(n.em,{children:"forms"})," in a ",(0,i.jsx)(n.em,{children:"lexical environment"})," where the given ",(0,i.jsx)(n.em,{children:"declarations"})," have e\u21b5ect."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:" \n\n(defun sample-function (y) ;this y is regarded as special \n\n(declare (special y)) \n\nEvaluation and \n\n \n\n \n\n(let ((y t)) ;this y is regarded as lexical \n\n(list y \n\n(locally (declare (special y)) \n\n;; this next y is regarded as special \n\ny)))) \n\n\u2192 SAMPLE-FUNCTION \n\n(sample-function nil) \u2192 (T NIL) \n\n(setq x \u2019(1 2 3) y \u2019(4 . 5)) \u2192 (4 . 5) \n\n;;; The following declarations are not notably useful in specific. \n\n;;; They just offer a sample of valid declaration syntax using LOCALLY. \n\n(locally (declare (inline floor) (notinline car cdr)) \n\n(declare (optimize space)) \n\n(floor (car x) (cdr y))) \u2192 0, 1 \n\n;;; This example shows a definition of a function that has a particular set \n\n;;; of OPTIMIZE settings made locally to that definition. \n\n(locally (declare (optimize (safety 3) (space 3) (speed 0))) \n\n(defun frob (w x y &amp;optional (z (foo x y))) \n\n(mumble x y z w))) \n\n\u2192 FROB \n\n;;; This is like the previous example, except that the optimize settings \n\n;;; remain in effect for subsequent definitions in the same compilation unit. (declaim (optimize (safety 3) (space 3) (speed 0))) \n\n(defun frob (w x y &amp;optional (z (foo x y))) \n\n(mumble x y z w)) \n\n\u2192 FROB \n\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"declare"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"special"})," declaration may be used with ",(0,i.jsx)(n.strong,{children:"locally"})," to a\u21b5ect references to, rather than ",(0,i.jsx)(n.em,{children:"bindings"})," of, ",(0,i.jsx)(n.em,{children:"variables"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If a ",(0,i.jsx)(n.strong,{children:"locally"})," ",(0,i.jsx)(n.em,{children:"form"})," is a ",(0,i.jsx)(n.em,{children:"top level form"}),", the body ",(0,i.jsx)(n.em,{children:"forms"})," are also processed as ",(0,i.jsx)(n.em,{children:"top level forms"}),". See Section 3.2.3 (File Compilation)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"the"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const c={},t="locally",o={id:"chap-3/d-i-dictionary/locally",title:"locally",description:"Expanded Reference: locally",source:"@site/docs/chap-3/d-i-dictionary/locally.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/locally",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/locally",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/locally.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"load-time-value",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/loadtimevalue"},next:{title:"macroexpand, macroexpand-1",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/macroexpand"}},d={},p=[{value:"Expanded Reference: locally",id:"expanded-reference-locally",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"locally",children:"locally"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-locally",children:"Expanded Reference: locally"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(locally )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>a});var i=l(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);