"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[42033],{58437:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var r=a(85893),o=a(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand, macroexpand-1"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand"})," ",(0,r.jsx)(n.em,{children:"form"})," &optional ",(0,r.jsx)(n.em,{children:"env \u2192 expansion, expanded-p"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand-1"})," ",(0,r.jsx)(n.em,{children:"form"})," &optional ",(0,r.jsx)(n.em,{children:"env \u2192 expansion, expanded-p"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"env"}),"\u2014an ",(0,r.jsx)(n.em,{children:"environment object"}),". The default is ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"expansion"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"expanded-p"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand"})," and ",(0,r.jsx)(n.strong,{children:"macroexpand-1"})," expand ",(0,r.jsx)(n.em,{children:"macros"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"form"})," is a ",(0,r.jsx)(n.em,{children:"macro form"}),", then ",(0,r.jsx)(n.strong,{children:"macroexpand-1"})," expands the ",(0,r.jsx)(n.em,{children:"macro form"})," call once."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand"})," repeatedly expands ",(0,r.jsx)(n.em,{children:"form"})," until it is no longer a ",(0,r.jsx)(n.em,{children:"macro form"}),". In effect, ",(0,r.jsx)(n.strong,{children:"macroexpand"})," calls ",(0,r.jsx)(n.strong,{children:"macroexpand-1"})," repeatedly until the ",(0,r.jsx)(n.em,{children:"secondary value"})," it returns is ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"form"})," is a ",(0,r.jsx)(n.em,{children:"macro form"}),", then the ",(0,r.jsx)(n.em,{children:"expansion"})," is a ",(0,r.jsx)(n.em,{children:"macro expansion"})," and ",(0,r.jsx)(n.em,{children:"expanded-p"})," is ",(0,r.jsx)(n.em,{children:"true"}),". Otherwise, the ",(0,r.jsx)(n.em,{children:"expansion"})," is the given ",(0,r.jsx)(n.em,{children:"form"})," and ",(0,r.jsx)(n.em,{children:"expanded-p"})," is ",(0,r.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Macro expansion is carried out as follows. Once ",(0,r.jsx)(n.strong,{children:"macroexpand-1"})," has determined that the ",(0,r.jsx)(n.em,{children:"form"})," is a ",(0,r.jsx)(n.em,{children:"macro form"}),", it obtains an appropriate expansion ",(0,r.jsx)(n.em,{children:"function"})," for the ",(0,r.jsx)(n.em,{children:"macro"})," or ",(0,r.jsx)(n.em,{children:"symbol macro"}),". The value of ",(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"})," is coerced to a ",(0,r.jsx)(n.em,{children:"function"})," and then called as a ",(0,r.jsx)(n.em,{children:"function"})," of three arguments: the expansion ",(0,r.jsx)(n.em,{children:"function"}),", the ",(0,r.jsx)(n.em,{children:"form"}),", and the ",(0,r.jsx)(n.em,{children:"env"}),". The ",(0,r.jsx)(n.em,{children:"value"})," returned from this call is taken to be the expansion of the ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to ",(0,r.jsx)(n.em,{children:"macro"})," definitions in the global environment, any local macro definitions established within ",(0,r.jsx)(n.em,{children:"env"})," by ",(0,r.jsx)(n.strong,{children:"macrolet"})," or ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," are considered. If only ",(0,r.jsx)(n.em,{children:"form"})," is supplied as an argument, then the environment is effectively null, and only global macro definitions as established by ",(0,r.jsx)(n.strong,{children:"defmacro"})," are considered. ",(0,r.jsx)(n.em,{children:"Macro"})," definitions are shadowed by local ",(0,r.jsx)(n.em,{children:"function"})," definitions."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(defmacro alpha (x y) \u2018(beta ,x ,y)) \u2192 ALPHA \n(defmacro beta (x y) \u2018(gamma ,x ,y)) \u2192 BETA \n(defmacro delta (x y) \u2018(gamma ,x ,y)) \u2192 EPSILON \n(defmacro expand (form &environment env) \n  (multiple-value-bind (expansion expanded-p) \n      (macroexpand form env) \n    \u2018(values \u2019,expansion \u2019,expanded-p))) \u2192 EXPAND  \n**macroexpand, macroexpand-1** \n(defmacro expand-1 (form &environment env) \n  (multiple-value-bind (expansion expanded-p) \n      (macroexpand-1 form env) \n    \u2018(values \u2019,expansion \u2019,expanded-p))) \u2192 EXPAND-1 \n;; Simple examples involving just the global environment \n(macroexpand-1 \u2019(alpha a b)) \u2192 (BETA A B), *true* \n(expand-1 (alpha a b)) \u2192 (BETA A B), *true* \n(macroexpand \u2019(alpha a b)) \u2192 (GAMMA A B), *true* \n(expand (alpha a b)) \u2192 (GAMMA A B), *true* \n(macroexpand-1 \u2019not-a-macro) \u2192 NOT-A-MACRO, *false* \n(expand-1 not-a-macro) \u2192 NOT-A-MACRO, *false* \n(macroexpand \u2019(not-a-macro a b)) \u2192 (NOT-A-MACRO A B), *false* \n(expand (not-a-macro a b)) \u2192 (NOT-A-MACRO A B), *false* \n;; Examples involving lexical environments \n(macrolet ((alpha (x y) \u2018(delta ,x ,y))) \n  (macroexpand-1 \u2019(alpha a b))) \u2192 (BETA A B), *true* \n(macrolet ((alpha (x y) \u2018(delta ,x ,y))) \n  (expand-1 (alpha a b))) \u2192 (DELTA A B), *true* \n(macrolet ((alpha (x y) \u2018(delta ,x ,y))) \n  (macroexpand \u2019(alpha a b))) \u2192 (GAMMA A B), *true* \n(macrolet ((alpha (x y) \u2018(delta ,x ,y))) \n  (expand (alpha a b))) \u2192 (GAMMA A B), *true* \n(macrolet ((beta (x y) \u2018(epsilon ,x ,y))) \n  (expand (alpha a b))) \u2192 (EPSILON A B), *true* \n(let ((x (list 1 2 3))) \n  (symbol-macrolet ((a (first x))) \n    (expand a))) \u2192 (FIRST X), *true* \n(let ((x (list 1 2 3))) \n  (symbol-macrolet ((a (first x))) \n    (macroexpand \u2019a))) \u2192 A, *false* \n(symbol-macrolet ((b (alpha x y))) \n  (expand-1 b)) \u2192 (ALPHA X Y), *true* \n(symbol-macrolet ((b (alpha x y))) \n  (expand b)) \u2192 (GAMMA X Y), *true* \n(symbol-macrolet ((b (alpha x y)) \n\t\t  (a b)) \n  (expand-1 a)) \u2192 B, *true* \n(symbol-macrolet ((b (alpha x y)) \n\t\t  (a b)) \n  (expand a)) \u2192 (GAMMA X Y), *true*  \n;; Examples of shadowing behavior \n(flet ((beta (x y) (+ x y))) \n  (expand (alpha a b))) \u2192 (BETA A B), *true* \n(macrolet ((alpha (x y) \u2018(delta ,x ,y))) \n  (flet ((alpha (x y) (+ x y))) \n    (expand (alpha a b)))) \u2192 (ALPHA A B), *false* \n(let ((x (list 1 2 3))) \n  (symbol-macrolet ((a (first x))) \n    (let ((a x)) \n      (expand a)))) \u2192 A, *false* \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"defmacro"}),", ",(0,r.jsx)(n.strong,{children:"setf"})," of ",(0,r.jsx)(n.strong,{children:"macro-function"}),", ",(0,r.jsx)(n.strong,{children:"macrolet"}),", ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"}),", ",(0,r.jsx)(n.strong,{children:"defmacro"}),", ",(0,r.jsx)(n.strong,{children:"setf"})," of ",(0,r.jsx)(n.strong,{children:"macro-function"}),", ",(0,r.jsx)(n.strong,{children:"macrolet"}),", ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"}),", Section 3.1 (Evaluation)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["Neither ",(0,r.jsx)(n.strong,{children:"macroexpand"})," nor ",(0,r.jsx)(n.strong,{children:"macroexpand-1"})," makes any explicit attempt to expand ",(0,r.jsx)(n.em,{children:"macro forms"})," that are either ",(0,r.jsx)(n.em,{children:"subforms"})," of the ",(0,r.jsx)(n.em,{children:"form"})," or ",(0,r.jsx)(n.em,{children:"subforms"})," of the ",(0,r.jsx)(n.em,{children:"expansion"}),". Such expansion might occur implicitly, however, due to the semantics or implementation of the ",(0,r.jsx)(n.em,{children:"macro function"}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const d={},i="macroexpand, macroexpand-1",l={id:"chap-3/d-i-dictionary/macroexpand",title:"macroexpand, macroexpand-1",description:"Expanded Reference: macroexpand, macroexpand-1",source:"@site/docs/chap-3/d-i-dictionary/macroexpand.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/macroexpand",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/macroexpand",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/macroexpand.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"locally",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/locally"},next:{title:"macro-function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/macrofunction"}},t={},x=[{value:"Expanded Reference: macroexpand, macroexpand-1",id:"expanded-reference-macroexpand-macroexpand-1",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"macroexpand-macroexpand-1",children:"macroexpand, macroexpand-1"}),"\n","\n","\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-macroexpand-macroexpand-1",children:"Expanded Reference: macroexpand, macroexpand-1"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(macroexpand, macroexpand-1 )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>s});var r=a(67294);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);