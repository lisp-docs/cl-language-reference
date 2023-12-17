"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[35056],{80951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var r=t(85893),a=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2217"}),(0,r.jsx)(n.strong,{children:"random-state"}),(0,r.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,r.jsxs)(n.p,{children:["a ",(0,r.jsx)(n.em,{children:"random state"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"current random state"}),", which is used, for example, by the ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"random"})," when a ",(0,r.jsx)(n.em,{children:"random state"})," is not explicitly supplied."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(random-state-p \\*random-state\\*) \u2192 true \n(setq snap-shot (make-random-state)) \n;; The series from any given point is random, \n;; but if you backtrack to that point, you get the same series. \n(list (loop for i from 1 to 10 collect (random)) \n      (let ((\\*random-state\\* snap-shot)) \n\t(loop for i from 1 to 10 collect (random))) \n      (loop for i from 1 to 10 collect (random)) \n      (let ((\\*random-state\\* snap-shot)) \n\t(loop for i from 1 to 10 collect (random)))) \n\u2192 ((19 16 44 19 96 15 76 96 13 61) \n   (19 16 44 19 96 15 76 96 13 61) \n   (16 67 0 43 70 79 58 5 63 50) \n   (16 67 0 43 70 79 58 5 63 50)) \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"implementation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"random"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-random-state"}),", ",(0,r.jsx)(n.strong,{children:"random"}),", ",(0,r.jsx)(n.strong,{children:"random-state"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Binding"})," ",(0,r.jsx)(n.strong,{children:"*random-state*"})," to a different ",(0,r.jsx)(n.em,{children:"random state object"})," correctly saves and restores the old ",(0,r.jsx)(n.em,{children:"random state object"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},d="*random-state*",i={id:"chap-12/bc-c-dictionary/random-state_variable",title:"\\*random-state\\*",description:"Expanded Reference: \\random-state\\",source:"@site/docs/chap-12/bc-c-dictionary/random-state_variable.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/random-state_variable",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/random-state_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/random-state_variable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"random-state-p",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/random-state-p_function"},next:{title:"random",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/random"}},l={},m=[{value:"Expanded Reference: *random-state*",id:"expanded-reference-random-state",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"random-state",children:"*random-state*"}),"\n","\n","\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-random-state",children:"Expanded Reference: *random-state*"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"*random-state*\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);