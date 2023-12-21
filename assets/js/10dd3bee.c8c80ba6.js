"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[64548],{87247:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(85893),o=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"prog1, prog2"})," ",(0,s.jsx)(r.em,{children:"Macro"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"prog1"})," ",(0,s.jsx)(r.em,{children:"first-form {form}"}),"* ",(0,s.jsx)(r.em,{children:"! result-1"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"prog2"})," ",(0,s.jsx)(r.em,{children:"first-form second-form {form}"}),"* ",(0,s.jsx)(r.em,{children:"! result-2"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"first-form"}),"\u2014a ",(0,s.jsx)(r.em,{children:"form"}),"; evaluated as described below."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"second-form"}),"\u2014a ",(0,s.jsx)(r.em,{children:"form"}),"; evaluated as described below."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(r.em,{children:"implicit progn"}),"; evaluated as described below."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"result-1"}),"\u2014the ",(0,s.jsx)(r.em,{children:"primary value"})," resulting from the ",(0,s.jsx)(r.em,{children:"evaluation"})," of ",(0,s.jsx)(r.em,{children:"first-form"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Data and Control"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"prog1, prog2"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"result-2"}),"\u2014the ",(0,s.jsx)(r.em,{children:"primary value"})," resulting from the ",(0,s.jsx)(r.em,{children:"evaluation"})," of ",(0,s.jsx)(r.em,{children:"second-form"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"prog1"})," ",(0,s.jsx)(r.em,{children:"evaluates first-form"})," and then ",(0,s.jsx)(r.em,{children:"forms"}),", ",(0,s.jsx)(r.em,{children:"yielding"})," as its only ",(0,s.jsx)(r.em,{children:"value"})," the ",(0,s.jsx)(r.em,{children:"primary value yielded"})," by ",(0,s.jsx)(r.em,{children:"first-form"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"prog2"})," ",(0,s.jsx)(r.em,{children:"evaluates first-form"}),", then ",(0,s.jsx)(r.em,{children:"second-form"}),", and then ",(0,s.jsx)(r.em,{children:"forms"}),", ",(0,s.jsx)(r.em,{children:"yielding"})," as its only ",(0,s.jsx)(r.em,{children:"value"})," the ",(0,s.jsx)(r.em,{children:"primary value yielded"})," by ",(0,s.jsx)(r.em,{children:"first-form"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"\n(setq temp 1) *!* 1 \n(prog1 temp (print temp) (incf temp) (print temp)) \n\u25b7 1 \n\u25b7 2 \n*!* 1 \n(prog1 temp (setq temp nil)) *!* 2 \ntemp *!* NIL \n(prog1 (values 1 2 3) 4) *!* 1 \n(setq temp (list \u2019a \u2019b \u2019c)) \n(prog1 (car temp) (setf (car temp) \u2019alpha)) *!* A \ntemp *!* (ALPHA B C) \n(flet ((swap-symbol-values (x y) \n\t (setf (symbol-value x) \n\t       (prog1 (symbol-value y) \n\t\t (setf (symbol-value y) (symbol-value x)))))) \n  (let ((\\*foo\\* 1) (\\*bar\\* 2)) \n    (declare (special \\*foo\\* \\*bar\\*)) \n    (swap-symbol-values \u2019\\*foo\\* \u2019\\*bar\\*) \n    (values \\*foo\\* \\*bar\\*))) \n*!* 2, 1 \n(setq temp 1) *!* 1 \n(prog2 (incf temp) (incf temp) (incf temp)) *!* 3 \ntemp *!* 4 \n(prog2 1 (values 2 3 4) 5) *!* 2 \n\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"multiple-value-prog1"}),", ",(0,s.jsx)(r.strong,{children:"progn"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"prog1"})," and ",(0,s.jsx)(r.strong,{children:"prog2"})," are typically used to ",(0,s.jsx)(r.em,{children:"evaluate"})," one or more ",(0,s.jsx)(r.em,{children:"forms"})," with side e\u21b5ects and return a ",(0,s.jsx)(r.em,{children:"value"})," that must be computed before some or all of the side e\u21b5ects happen."]}),"\n",(0,s.jsxs)(r.p,{children:["(prog1 ",(0,s.jsx)(r.em,{children:"{form}"}),"*) ",(0,s.jsx)(r.em,{children:"\u2318"})," (values (multiple-value-prog1 ",(0,s.jsx)(r.em,{children:"{form}"}),"*))"]}),"\n",(0,s.jsxs)(r.p,{children:["(prog2 ",(0,s.jsx)(r.em,{children:"form1 {form}"}),"*) ",(0,s.jsx)(r.em,{children:"\u2318"})," (let () ",(0,s.jsx)(r.em,{children:"form1"})," (prog1 ",(0,s.jsx)(r.em,{children:"{form}"}),"*))"]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const i={title:"prog1, prog2"},c="prog1, prog2",d={id:"chap-5/f-d-dictionary/prog1_prog2_macro",title:"prog1, prog2",description:"Expanded Reference: prog1, prog2",source:"@site/docs/chap-5/f-d-dictionary/prog1_prog2_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/prog1_prog2_macro",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/prog1_prog2_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/prog1_prog2_macro.md",tags:[],version:"current",frontMatter:{title:"prog1, prog2"},sidebar:"tutorialSidebar",previous:{title:"or",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/or_macro"},next:{title:"progn",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/progn_special-operator"}},p={},a=[{value:"Expanded Reference: prog1, prog2",id:"expanded-reference-prog1-prog2",level:2}];function m(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"prog1-prog2",children:"prog1, prog2"}),"\n","\n","\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(r.h2,{id:"expanded-reference-prog1-prog2",children:"Expanded Reference: prog1, prog2"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(prog1, prog2 )\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var s=n(67294);const o={},t=s.createContext(o);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);