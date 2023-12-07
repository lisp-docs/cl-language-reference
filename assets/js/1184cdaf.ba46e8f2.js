"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43718],{38743:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var s=r(85893),o=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"progn"})," ",(0,s.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"progn"})," ",(0,s.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(n.em,{children:"values"})," of the ",(0,s.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"progn"})," evaluates ",(0,s.jsx)(n.em,{children:"forms"}),", in the order in which they are given."]}),"\n",(0,s.jsxs)(n.p,{children:["The values of each ",(0,s.jsx)(n.em,{children:"form"})," but the last are discarded."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.strong,{children:"progn"})," appears as a ",(0,s.jsx)(n.em,{children:"top level form"}),", then all ",(0,s.jsx)(n.em,{children:"forms"})," within that ",(0,s.jsx)(n.strong,{children:"progn"})," are considered by the compiler to be ",(0,s.jsx)(n.em,{children:"top level forms"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n(progn) \u2192 NIL \n(progn 1 2 3) \u2192 3 \n(progn (values 1 2 3)) \u2192 1, 2, 3 \n(setq a 1) \u2192 1 \n(if a \n    (progn (setq a nil) \u2019here) \n    (progn (setq a t) \u2019there)) \u2192 HERE \na \u2192 NIL \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"prog1"}),", ",(0,s.jsx)(n.strong,{children:"prog2"}),", Section 3.1 (Evaluation)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["Many places in Common Lisp involve syntax that uses ",(0,s.jsx)(n.em,{children:"implicit progns"}),". That is, part of their syntax allows many ",(0,s.jsx)(n.em,{children:"forms"})," to be written that are to be evaluated sequentially, discarding the results of all ",(0,s.jsx)(n.em,{children:"forms"})," but the last and returning the results of the last ",(0,s.jsx)(n.em,{children:"form"}),". Such places include, but are not limited to, the following: the body of a ",(0,s.jsx)(n.em,{children:"lambda expression"}),"; the bodies of various control and conditional ",(0,s.jsx)(n.em,{children:"forms"})," (",(0,s.jsx)(n.em,{children:"e.g."}),", ",(0,s.jsx)(n.strong,{children:"case"}),", ",(0,s.jsx)(n.strong,{children:"catch"}),", ",(0,s.jsx)(n.strong,{children:"progn"}),", and ",(0,s.jsx)(n.strong,{children:"when"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Data and Control"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"define-modify-macro"})})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const c={},l="progn",a={id:"chap-5/f-d-dictionary/progn",title:"progn",description:"Expanded Reference: progn",source:"@site/docs/chap-5/f-d-dictionary/progn.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/progn",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/progn",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/progn.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prog1, prog2",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/prog1"},next:{title:"program-error",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/programerror"}},d={},p=[{value:"Expanded Reference: progn",id:"expanded-reference-progn",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"progn",children:"progn"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-progn",children:"Expanded Reference: progn"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(progn )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(67294);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);