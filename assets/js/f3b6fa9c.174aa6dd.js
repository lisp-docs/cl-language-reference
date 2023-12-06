"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[6381],{58994:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"if"})," ",(0,s.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"if"})," ",(0,s.jsx)(n.em,{children:"test-form then-form"})," [",(0,s.jsx)(n.em,{children:"else-form"}),"] ",(0,s.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Test-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Then-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Else-form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014if the ",(0,s.jsx)(n.em,{children:"test-form yielded true"}),", the ",(0,s.jsx)(n.em,{children:"values"})," returned by the ",(0,s.jsx)(n.em,{children:"then-form"}),"; otherwise, the ",(0,s.jsx)(n.em,{children:"values"})," returned by the ",(0,s.jsx)(n.em,{children:"else-form"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"if"})," allows the execution of a ",(0,s.jsx)(n.em,{children:"form"})," to be dependent on a single ",(0,s.jsx)(n.em,{children:"test-form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["First ",(0,s.jsx)(n.em,{children:"test-form"})," is evaluated. If the result is ",(0,s.jsx)(n.em,{children:"true"}),", then ",(0,s.jsx)(n.em,{children:"then-form"})," is selected; otherwise ",(0,s.jsx)(n.em,{children:"else-form"})," is selected. Whichever form is selected is then evaluated."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(if t 1) *\u2192* 1 \n\n\n\n(if nil 1 2) *\u2192* 2 \n\n\n\n(defun test () \n\n\n\n(dolist (truth-value \u2019(t nil 1 (a b c))) \n\n\n\n(if truth-value (print \u2019true) (print \u2019false)) \n\n\n\n(prin1 truth-value))) *\u2192* TEST \n\n\n\n(test) \n\n\n\n\u25b7 TRUE T \n\n\n\n\u25b7 FALSE NIL \n\n\n\n\u25b7 TRUE 1 \n\n\n\n\u25b7 TRUE (A B C) \n\n\n\n*\u2192* NIL \n\n\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"cond"}),", ",(0,s.jsx)(n.strong,{children:"unless"}),", ",(0,s.jsx)(n.strong,{children:"when"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(if ",(0,s.jsx)(n.em,{children:"test-form then-form else-form"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2261"})," (cond (",(0,s.jsx)(n.em,{children:"test-form then-form"}),") (t ",(0,s.jsx)(n.em,{children:"else-form"}),"))"]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={},l="if",o={id:"chap-5/f-d-dictionary/if",title:"if",description:"Expanded Reference: if",source:"@site/docs/chap-5/f-d-dictionary/if.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/if",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/if",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/if.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"identity",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/identity"},next:{title:"lambda-list-keywords",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/lambdalistkeywords"}},a={},h=[{value:"Expanded Reference: if",id:"expanded-reference-if",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"if",children:"if"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-if",children:"Expanded Reference: if"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(if )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);