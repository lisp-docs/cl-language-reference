"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[16890],{2445:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=r(85893),a=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"eval"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"eval"})," ",(0,s.jsx)(n.em,{children:"form \u2192 {result}"}),"*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"form"}),"\u2014a ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(n.em,{children:"values yielded"})," by the ",(0,s.jsx)(n.em,{children:"evaluation"})," of ",(0,s.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Evaluates ",(0,s.jsx)(n.em,{children:"form"})," in the current ",(0,s.jsx)(n.em,{children:"dynamic environment"})," and the ",(0,s.jsx)(n.em,{children:"null lexical environment"}),". ",(0,s.jsx)(n.strong,{children:"eval"})," is a user interface to the evaluator."]}),"\n",(0,s.jsxs)(n.p,{children:["The evaluator expands macro calls as if through the use of ",(0,s.jsx)(n.strong,{children:"macroexpand-1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Constants appearing in code processed by ",(0,s.jsx)(n.strong,{children:"eval"})," are not copied nor coalesced. The code resulting from the execution of ",(0,s.jsx)(n.strong,{children:"eval"})," references ",(0,s.jsx)(n.em,{children:"objects"})," that are ",(0,s.jsx)(n.strong,{children:"eql"})," to the corresponding ",(0,s.jsx)(n.em,{children:"objects"})," in the source code."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n(setq form \u2019(1+ a) a 999) \u2192 999 \n(eval form) \u2192 1000 \n(eval \u2019form) \u2192 (1+ A) \n(let ((a \u2019(this would break if eval used local value))) (eval form)) \n\u2192 1000 \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"macroexpand-1"}),", Section 3.1.2 (The Evaluation Model)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["To obtain the current dynamic value of a ",(0,s.jsx)(n.em,{children:"symbol"}),", use of ",(0,s.jsx)(n.strong,{children:"symbol-value"})," is equivalent (and usually preferable) to use of ",(0,s.jsx)(n.strong,{children:"eval"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that an ",(0,s.jsx)(n.strong,{children:"eval"})," ",(0,s.jsx)(n.em,{children:"form"})," involves two levels of ",(0,s.jsx)(n.em,{children:"evaluation"})," for its ",(0,s.jsx)(n.em,{children:"argument"}),". First, ",(0,s.jsx)(n.em,{children:"form"})," is ",(0,s.jsx)(n.em,{children:"evaluated"})," by the normal argument evaluation mechanism as would occur with any ",(0,s.jsx)(n.em,{children:"call"}),". The ",(0,s.jsx)(n.em,{children:"object"})," that"]}),"\n",(0,s.jsxs)(n.p,{children:["results from this normal ",(0,s.jsx)(n.em,{children:"argument evaluation"})," becomes the ",(0,s.jsx)(n.em,{children:"value"})," of the ",(0,s.jsx)(n.em,{children:"form parameter"})," , and is then ",(0,s.jsx)(n.em,{children:"evaluated"})," as part of the ",(0,s.jsx)(n.strong,{children:"eval"})," ",(0,s.jsx)(n.em,{children:"form"}),". For example:"]}),"\n",(0,s.jsx)(n.p,{children:"(eval (list \u2019cdr (car \u2019((quote (a . b)) c)))) \u2192 b"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"argument form"})," (list \u2019cdr (car \u2019((quote (a . b)) c))) is evaluated in the usual way to produce the ",(0,s.jsx)(n.em,{children:"argument"})," (cdr (quote (a . b))); ",(0,s.jsx)(n.strong,{children:"eval"})," then evaluates its ",(0,s.jsx)(n.em,{children:"argument"}),", (cdr (quote (a . b))), to produce b. Since a single ",(0,s.jsx)(n.em,{children:"evaluation"})," already occurs for any ",(0,s.jsx)(n.em,{children:"argument form"})," in any ",(0,s.jsx)(n.em,{children:"function form"}),", ",(0,s.jsx)(n.strong,{children:"eval"})," is sometimes said to perform \u201can extra level of evaluation.\u201d"]})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const c={},i="eval",o={id:"chap-3/d-i-dictionary/eval",title:"eval",description:"Expanded Reference: eval",source:"@site/docs/chap-3/d-i-dictionary/eval.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/eval",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/eval",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/eval.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dynamic-extent",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/dynamicextent"},next:{title:"eval-when",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/evalwhen"}},d={},h=[{value:"Expanded Reference: eval",id:"expanded-reference-eval",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"eval",children:"eval"}),"\n","\n","\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-eval",children:"Expanded Reference: eval"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(eval )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var s=r(67294);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);