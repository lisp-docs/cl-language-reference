"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[14677],{99288:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=r(85893),o=r(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog1, prog2"})," ",(0,s.jsx)(n.em,{children:"Macro"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog1"})," ",(0,s.jsx)(n.em,{children:"first-form {form}"}),"* \u2192  result-1"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog2"})," ",(0,s.jsx)(n.em,{children:"first-form second-form {form}"}),"* \u2192  result-2"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"first-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"; evaluated as described below."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"second-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"; evaluated as described below."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(n.em,{children:"implicit progn"}),"; evaluated as described below."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result-1"}),"\u2014the ",(0,s.jsx)(n.em,{children:"primary value"})," resulting from the ",(0,s.jsx)(n.em,{children:"evaluation"})," of ",(0,s.jsx)(n.em,{children:"first-form"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Data and Control"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"prog1, prog2"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result-2"}),"\u2014the ",(0,s.jsx)(n.em,{children:"primary value"})," resulting from the ",(0,s.jsx)(n.em,{children:"evaluation"})," of ",(0,s.jsx)(n.em,{children:"second-form"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog1"})," ",(0,s.jsx)(n.em,{children:"evaluates first-form"})," and then ",(0,s.jsx)(n.em,{children:"forms"}),", ",(0,s.jsx)(n.em,{children:"yielding"})," as its only ",(0,s.jsx)(n.em,{children:"value"})," the ",(0,s.jsx)(n.em,{children:"primary value yielded"})," by ",(0,s.jsx)(n.em,{children:"first-form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog2"})," ",(0,s.jsx)(n.em,{children:"evaluates first-form"}),", then ",(0,s.jsx)(n.em,{children:"second-form"}),", and then ",(0,s.jsx)(n.em,{children:"forms"}),", ",(0,s.jsx)(n.em,{children:"yielding"})," as its only ",(0,s.jsx)(n.em,{children:"value"})," the ",(0,s.jsx)(n.em,{children:"primary value yielded"})," by ",(0,s.jsx)(n.em,{children:"first-form"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n(setq temp 1) \u2192 1 \n\n(prog1 temp (print temp) (incf temp) (print temp)) \n\n\u25b7 1 \n\n\u25b7 2 \n\n\u2192 1 \n\n(prog1 temp (setq temp nil)) \u2192 2 \n\ntemp \u2192 NIL \n\n(prog1 (values 1 2 3) 4) \u2192 1 \n\n(setq temp (list \u2019a \u2019b \u2019c)) \n\n(prog1 (car temp) (setf (car temp) \u2019alpha)) \u2192 A \n\ntemp \u2192 (ALPHA B C) \n\n(flet ((swap-symbol-values (x y) \n\n(setf (symbol-value x) \n\n(prog1 (symbol-value y) \n\n(setf (symbol-value y) (symbol-value x)))))) \n\n(let ((\\*foo\\* 1) (\\*bar\\* 2)) \n\n(declare (special \\*foo\\* \\*bar\\*)) \n\n(swap-symbol-values \u2019\\*foo\\* \u2019\\*bar\\*) \n\n(values \\*foo\\* \\*bar\\*))) \n\n\u2192 2, 1 \n\n(setq temp 1) \u2192 1 \n\n(prog2 (incf temp) (incf temp) (incf temp)) \u2192 3 \n\ntemp \u2192 4 \n\n(prog2 1 (values 2 3 4) 5) \u2192 2 \n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"multiple-value-prog1"}),", ",(0,s.jsx)(n.strong,{children:"progn"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog1"})," and ",(0,s.jsx)(n.strong,{children:"prog2"})," are typically used to ",(0,s.jsx)(n.em,{children:"evaluate"})," one or more ",(0,s.jsx)(n.em,{children:"forms"})," with side e\u21b5ects and return a ",(0,s.jsx)(n.em,{children:"value"})," that must be computed before some or all of the side e\u21b5ects happen."]}),"\n",(0,s.jsxs)(n.p,{children:["(prog1 ",(0,s.jsx)(n.em,{children:"{form}"}),"*) \u2261 (values (multiple-value-prog1 ",(0,s.jsx)(n.em,{children:"{form}"}),"*))"]}),"\n",(0,s.jsxs)(n.p,{children:["(prog2 ",(0,s.jsx)(n.em,{children:"form1 {form}"}),"*) \u2261 (let () ",(0,s.jsx)(n.em,{children:"form1"})," (prog1 ",(0,s.jsx)(n.em,{children:"{form}"}),"*))"]})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const t={},c="prog1, prog2",d={id:"chap-5/f-d-dictionary/prog1",title:"prog1, prog2",description:"Expanded Reference: prog1, prog2",source:"@site/docs/chap-5/f-d-dictionary/prog1.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/prog1",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/prog1",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/prog1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"or",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/or"},next:{title:"progn",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/progn"}},p={},a=[{value:"Expanded Reference: prog1, prog2",id:"expanded-reference-prog1-prog2",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"prog1-prog2",children:"prog1, prog2"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-prog1-prog2",children:"Expanded Reference: prog1, prog2"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(prog1, prog2 )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>i});var s=r(67294);const o={},l=s.createContext(o);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);