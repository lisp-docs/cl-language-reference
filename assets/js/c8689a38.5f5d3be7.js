"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95770],{86118:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var c=s(85893),r=s(11151);function l(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set"})," ",(0,c.jsx)(n.em,{children:"symbol value \u2192 value"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,c.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"value"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set"})," changes the contents of the ",(0,c.jsx)(n.em,{children:"value cell"})," of ",(0,c.jsx)(n.em,{children:"symbol"})," to the given ",(0,c.jsx)(n.em,{children:"value"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["(set ",(0,c.jsx)(n.em,{children:"symbol value"}),") ",(0,c.jsx)(n.em,{children:"\u2261"})," (setf (symbol-value ",(0,c.jsx)(n.em,{children:"symbol"}),") ",(0,c.jsx)(n.em,{children:"value"}),")"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsxs)(n.p,{children:["(setf (symbol-value \u2019n) 1) ",(0,c.jsx)(n.em,{children:"\u2192"})," 1"]}),"\n",(0,c.jsxs)(n.p,{children:["(set \u2019n 2) ",(0,c.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,c.jsxs)(n.p,{children:["(symbol-value \u2019n) ",(0,c.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,c.jsx)(n.p,{children:"(let ((n 3))"}),"\n",(0,c.jsx)(n.p,{children:"(declare (special n))"}),"\n",(0,c.jsx)(n.p,{children:"(setq n (+ n 1))"}),"\n",(0,c.jsx)(n.p,{children:"(setf (symbol-value \u2019n) (* n 10))"}),"\n",(0,c.jsx)(n.p,{children:"(set \u2019n (+ (symbol-value \u2019n) n))"}),"\n",(0,c.jsxs)(n.p,{children:["n) ",(0,c.jsx)(n.em,{children:"\u2192"})," 80"]}),"\n",(0,c.jsxs)(n.p,{children:["n ",(0,c.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,c.jsx)(n.p,{children:"(let ((n 3))"}),"\n",(0,c.jsx)(n.p,{children:"(setq n (+ n 1))"}),"\n",(0,c.jsx)(n.p,{children:"(setf (symbol-value \u2019n) (* n 10))"}),"\n",(0,c.jsx)(n.p,{children:"(set \u2019n (+ (symbol-value \u2019n) n))"}),"\n",(0,c.jsxs)(n.p,{children:["n) ",(0,c.jsx)(n.em,{children:"\u2192"})," 4"]}),"\n",(0,c.jsxs)(n.p,{children:["n ",(0,c.jsx)(n.em,{children:"\u2192"})," 44"]}),"\n",(0,c.jsx)(n.p,{children:"(defvar *n* 2)"}),"\n",(0,c.jsx)(n.p,{children:"(let ((*n* 3))"}),"\n",(0,c.jsx)(n.p,{children:"(setq *n* (+ *n* 1))"}),"\n",(0,c.jsx)(n.p,{children:"(setf (symbol-value \u2019*n*) (* *n* 10))"}),"\n",(0,c.jsx)(n.p,{children:"(set \u2019*n* (+ (symbol-value \u2019*n*) *n*))"}),"\n",(0,c.jsxs)(n.p,{children:["*n*) ",(0,c.jsx)(n.em,{children:"\u2192"})," 80"]}),"\n",(0,c.jsxs)(n.p,{children:["*n* ",(0,c.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,c.jsxs)(n.p,{children:["(defvar *even-count* 0) ",(0,c.jsx)(n.em,{children:"\u2192"})," *EVEN-COUNT*"]}),"\n",(0,c.jsxs)(n.p,{children:["(defvar *odd-count* 0) ",(0,c.jsx)(n.em,{children:"\u2192"})," *ODD-COUNT*"]}),"\n",(0,c.jsx)(n.p,{children:"(defun tally-list (list)"}),"\n",(0,c.jsx)(n.p,{children:"(dolist (element list)"}),"\n",(0,c.jsx)(n.p,{children:"(set (if (evenp element) \u2019*even-count* \u2019*odd-count*)"}),"\n",(0,c.jsx)(n.p,{children:"(+ element (if (evenp element) *even-count* *odd-count*)))))"}),"\n",(0,c.jsxs)(n.p,{children:["(tally-list \u2019(1 9 4 3 2 7)) ",(0,c.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,c.jsxs)(n.p,{children:["*even-count* ",(0,c.jsx)(n.em,{children:"\u2192"})," 6"]}),"\n",(0,c.jsxs)(n.p,{children:["*odd-count* ",(0,c.jsx)(n.em,{children:"\u2192"})," 20"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"value"})," of ",(0,c.jsx)(n.em,{children:"symbol"})," is changed."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"setq"}),", ",(0,c.jsx)(n.strong,{children:"progv"}),", ",(0,c.jsx)(n.strong,{children:"symbol-value"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(n.p,{children:["The function ",(0,c.jsx)(n.strong,{children:"set"})," is deprecated."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set"})," cannot change the value of a ",(0,c.jsx)(n.em,{children:"lexical variable"}),"."]})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}const i={},d="set",o={id:"chap-10/ba-c-dictionary/set",title:"set",description:"Expanded Reference: set",source:"@site/docs/chap-10/ba-c-dictionary/set.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/set",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/set",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remprop",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/remprop"},next:{title:"symbol",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/symbol"}},h={},a=[{value:"Expanded Reference: set",id:"expanded-reference-set",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"set",children:"set"}),"\n","\n","\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-set",children:"Expanded Reference: set"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(set )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var c=s(67294);const r={},l=c.createContext(r);function t(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);