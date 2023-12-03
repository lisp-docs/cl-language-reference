"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[59212],{12020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var c=r(85893),s=r(11151);function l(e){const n={em:"em",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"block"})," ",(0,c.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"block"})," ",(0,c.jsx)(n.em,{children:"name form"}),"* ",(0,c.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,c.jsx)(n.p,{children:"Data and Control"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"name"}),"\u2014a ",(0,c.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"form"}),"\u2014a ",(0,c.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"results"}),"\u2014the ",(0,c.jsx)(n.em,{children:"values"})," of the ",(0,c.jsx)(n.em,{children:"forms"})," if a ",(0,c.jsx)(n.em,{children:"normal return"})," occurs, or else, if an ",(0,c.jsx)(n.em,{children:"explicit return"})," occurs, the ",(0,c.jsx)(n.em,{children:"values"})," that were transferred."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"block"})," ",(0,c.jsx)(n.em,{children:"establishes"})," a ",(0,c.jsx)(n.em,{children:"block"})," named ",(0,c.jsx)(n.em,{children:"name"})," and then evaluates ",(0,c.jsx)(n.em,{children:"forms"})," as an ",(0,c.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"special operators"})," ",(0,c.jsx)(n.strong,{children:"block"})," and ",(0,c.jsx)(n.strong,{children:"return-from"})," work together to provide a structured, lexical, non-local exit facility. At any point lexically contained within ",(0,c.jsx)(n.em,{children:"forms"}),", ",(0,c.jsx)(n.strong,{children:"return-from"})," can be used with the given ",(0,c.jsx)(n.em,{children:"name"})," to return control and values from the ",(0,c.jsx)(n.strong,{children:"block"})," ",(0,c.jsx)(n.em,{children:"form"}),", except when an intervening ",(0,c.jsx)(n.em,{children:"block"})," with the same name has been ",(0,c.jsx)(n.em,{children:"established"}),", in which case the outer ",(0,c.jsx)(n.em,{children:"block"})," is shadowed by the inner one."]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"block"})," named ",(0,c.jsx)(n.em,{children:"name"})," has ",(0,c.jsx)(n.em,{children:"lexical scope"})," and ",(0,c.jsx)(n.em,{children:"dynamic extent"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Once established, a ",(0,c.jsx)(n.em,{children:"block"})," may only be exited once, whether by ",(0,c.jsx)(n.em,{children:"normal return"})," or ",(0,c.jsx)(n.em,{children:"explicit return"}),". ",(0,c.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,c.jsxs)(n.p,{children:["(block empty) ",(0,c.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,c.jsxs)(n.p,{children:["(block whocares (values 1 2) (values 3 4)) ",(0,c.jsx)(n.em,{children:"\u2192"})," 3, 4"]}),"\n",(0,c.jsx)(n.p,{children:"(let ((x 1))"}),"\n",(0,c.jsx)(n.p,{children:"(block stop (setq x 2) (return-from stop) (setq x 3))"}),"\n",(0,c.jsxs)(n.p,{children:["x) ",(0,c.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,c.jsxs)(n.p,{children:["(block early (return-from early (values 1 2)) (values 3 4)) ",(0,c.jsx)(n.em,{children:"\u2192"})," 1, 2"]}),"\n",(0,c.jsxs)(n.p,{children:["(block outer (block inner (return-from outer 1)) 2) ",(0,c.jsx)(n.em,{children:"\u2192"})," 1"]}),"\n",(0,c.jsxs)(n.p,{children:["(block twin (block twin (return-from twin 1)) 2) ",(0,c.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,c.jsx)(n.p,{children:";; Contrast behavior of this example with corresponding example of CATCH."}),"\n",(0,c.jsx)(n.p,{children:"(block b"}),"\n",(0,c.jsx)(n.p,{children:"(flet ((b1 () (return-from b 1)))"}),"\n",(0,c.jsx)(n.p,{children:"(block b (b1) (print \u2019unreachable))"}),"\n",(0,c.jsxs)(n.p,{children:["2)) ",(0,c.jsx)(n.em,{children:"\u2192"})," 1"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"return"}),", ",(0,c.jsx)(n.strong,{children:"return-from"}),", Section 3.1 (Evaluation)"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"catch"})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}const t={},o="block",d={id:"chap-5/f-d-dictionary/block",title:"block",description:"Expanded Reference: block",source:"@site/docs/chap-5/f-d-dictionary/block.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/block",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/block",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/block.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apply",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/apply"},next:{title:"call-arguments-limit",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/callargumentslimit"}},a={},h=[{value:"Expanded Reference: block",id:"expanded-reference-block",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"block",children:"block"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-block",children:"Expanded Reference: block"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(block )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>i});var c=r(67294);const s={},l=c.createContext(s);function i(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);