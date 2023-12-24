"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[64954],{23332:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var t=l(85893),i=l(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"eval-when"})," ",(0,t.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," (",(0,t.jsx)(l,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"{situation}"})}),"*) ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"{form}"})}),"* \u2192 {result}*"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})}),"\u2014One of the ",(0,t.jsx)(l,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbols"})})," ",":compile-toplevel",", ",":load-toplevel",", ",":execute",", ",(0,t.jsx)(l,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})}),", ",(0,t.jsx)(l,{styled:!0,term:"load",children:(0,t.jsx)("b",{children:"load"})}),", or ",(0,t.jsx)(l,{styled:!0,term:"eval",children:(0,t.jsx)("b",{children:"eval"})}),". The use of ",(0,t.jsx)(l,{styled:!0,term:"eval",children:(0,t.jsx)("b",{children:"eval"})}),", ",(0,t.jsx)(l,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})}),", and ",(0,t.jsx)(l,{styled:!0,term:"load",children:(0,t.jsx)("b",{children:"load"})})," is deprecated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"\u2014an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(l,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"values"})})," of the ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," if they are executed, or ",(0,t.jsx)(l,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," if they are not."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["The body of an ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," form is processed as an ",(0,t.jsx)(n.em,{children:"implicit progn"}),", but only in the ",(0,t.jsx)(l,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situations"})})," listed."]}),"\n",(0,t.jsxs)(n.p,{children:["The use of the ",(0,t.jsx)(l,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situations"})})," ",":compile-toplevel"," (or compile) and ",":load-toplevel"," (or load) controls whether and when ",(0,t.jsx)(l,{styled:!0,term:"evaluation",children:(0,t.jsx)("i",{children:"evaluation"})})," occurs when ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," appears as a ",(0,t.jsx)(n.em,{children:"top level form"})," in code processed by ",(0,t.jsx)(l,{styled:!0,term:"compile-file",children:(0,t.jsx)("b",{children:"compile-file"})}),". See Section 3.2.3 (File Compilation)."]}),"\n",(0,t.jsxs)(n.p,{children:["The use of the ",(0,t.jsx)(l,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," ",":execute"," (or eval) controls whether evaluation occurs for other ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})}),"; that is, those that are not ",(0,t.jsx)(n.em,{children:"top level forms"}),", or those in code processed by ",(0,t.jsx)(l,{styled:!0,term:"eval",children:(0,t.jsx)("b",{children:"eval"})})," or ",(0,t.jsx)(l,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})}),". If the ",":execute"," situation is specified in such a ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),", then the body ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," are processed as an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"; otherwise, the ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," returns ",(0,t.jsx)(l,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," normally appears as a ",(0,t.jsx)(n.em,{children:"top level form"}),", but it is meaningful for it to appear as a ",(0,t.jsx)(n.em,{children:"non-top-level form"}),". However, the compile-time side effects described in Section 3.2 (Compilation) only take place when ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," appears as a ",(0,t.jsx)(n.em,{children:"top level form"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\nOne example of the use of **eval-when** is that for the compiler to be able to read a file properly when it uses user-defined *reader macros*, it is necessary to write \n(eval-when (:compile-toplevel :load-toplevel :execute)  \n\n  **eval-when** \n  (set-macro-character #\\$ #\u2019(lambda (stream char) \n\t\t\t       (declare (ignore char)) \n\t\t\t       (list \u2019dollar (read stream))))) \u2192 T \nThis causes the call to **set-macro-character** to be executed in the compiler\u2019s execution environment, thereby modifying its reader syntax table. \n;;; The EVAL-WHEN in this case is not at toplevel, so only the :EXECUTE \n;;; keyword is considered. At compile time, this has no effect. \n;;; At load time (if the LET is at toplevel), or at execution time \n;;; (if the LET is embedded in some other form which does not execute \n;;; until later) this sets (SYMBOL-FUNCTION \u2019FOO1) to a function which \n;;; returns 1. \n(let ((x 1)) \n  (eval-when (:execute :load-toplevel :compile-toplevel) \n    (setf (symbol-function \u2019foo1) #\u2019(lambda () x)))) \n;;; If this expression occurs at the toplevel of a file to be compiled, \n;;; it has BOTH a compile time AND a load-time effect of setting \n;;; (SYMBOL-FUNCTION \u2019FOO2) to a function which returns 2. \n(eval-when (:execute :load-toplevel :compile-toplevel) \n  (let ((x 2)) \n    (eval-when (:execute :load-toplevel :compile-toplevel) \n      (setf (symbol-function \u2019foo2) #\u2019(lambda () x))))) \n;;; If this expression occurs at the toplevel of a file to be compiled, \n;;; it has BOTH a compile time AND a load-time effect of setting the \n;;; function cell of FOO3 to a function which returns 3. \n(eval-when (:execute :load-toplevel :compile-toplevel) \n  (setf (symbol-function \u2019foo3) #\u2019(lambda () 3))) \n;;; #4: This always does nothing. It simply returns NIL. \n(eval-when (:compile-toplevel) \n  (eval-when (:compile-toplevel) \n    (print \u2019foo4))) \n;;; If this form occurs at toplevel of a file to be compiled, FOO5 is \n;;; printed at compile time. If this form occurs in a non-top-level \n;;; position, nothing is printed at compile time. Regardless of context, \n;;; nothing is ever printed at load time or execution time. \n(eval-when (:compile-toplevel) \n  (eval-when (:execute) \n    (print \u2019foo5))) \n;;; If this form occurs at toplevel of a file to be compiled, FOO6 is \n;;; printed at compile time. If this form occurs in a non-top-level  \n\n**eval-when** \n;;; position, nothing is printed at compile time. Regardless of context, \n;;; nothing is ever printed at load time or execution time. \n(eval-when (:execute :load-toplevel) \n  (eval-when (:compile-toplevel) \n    (print \u2019foo6))) \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"compile-file",children:(0,t.jsx)("b",{children:"compile-file"})}),", Section 3.2 (Compilation)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["The following effects are logical consequences of the definition of ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})}),":"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," Execution of a single ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," expression executes the body code at most once."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022 Macros"})," intended for use in ",(0,t.jsx)(n.em,{children:"top level forms"})," should be written so that side-effects are done by the ",(0,t.jsx)(l,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," in the macro expansion. The macro-expander itself should not do the side-effects."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.p,{children:"Wrong:"}),"\n",(0,t.jsx)(n.p,{children:"(defmacro foo ()"}),"\n",(0,t.jsx)(n.p,{children:"(really-foo)"}),"\n",(0,t.jsx)(n.p,{children:"\u2018(really-foo))"}),"\n",(0,t.jsx)(n.p,{children:"Right:"}),"\n",(0,t.jsx)(n.p,{children:"(defmacro foo ()"}),"\n",(0,t.jsxs)(n.p,{children:["\u2018(eval-when (",":compile-toplevel"," ",":execute"," ",":load-toplevel",") (really-foo)))"]}),"\n",(0,t.jsxs)(n.p,{children:["Adherence to this convention means that such ",(0,t.jsx)(l,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macros"})})," behave intuitively when appearing as ",(0,t.jsx)(n.em,{children:"non-top-level forms"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," Placing a variable binding around an ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," reliably captures the binding because the compile-time-too mode cannot occur (",(0,t.jsx)(n.em,{children:"i.e."}),", introducing a variable binding means that the ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," is not a ",(0,t.jsx)(n.em,{children:"top level form"}),"). For example,"]}),"\n",(0,t.jsx)(n.p,{children:"(let ((x 3))"}),"\n",(0,t.jsxs)(n.p,{children:["(eval-when (",":execute"," ",":load-toplevel"," ",":compile-toplevel",") (print x)))"]}),"\n",(0,t.jsxs)(n.p,{children:["prints 3 at execution (",(0,t.jsx)(n.em,{children:"i.e."}),", load) time, and does not print anything at compile time. This is important so that expansions of ",(0,t.jsx)(l,{styled:!0,term:"defun",children:(0,t.jsx)("b",{children:"defun"})})," and ",(0,t.jsx)(l,{styled:!0,term:"defmacro",children:(0,t.jsx)("b",{children:"defmacro"})})," can be done in terms of ",(0,t.jsx)(l,{styled:!0,term:"eval-when",children:(0,t.jsx)("b",{children:"eval-when"})})," and can correctly capture the ",(0,t.jsx)(n.em,{children:"lexical environment"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"(defun bar (x) (defun foo () (+ x 3)))"}),"\n",(0,t.jsx)(n.p,{children:"(defun bar (x)"}),"\n",(0,t.jsxs)(n.p,{children:["(progn (eval-when (",":compile-toplevel",")"]}),"\n",(0,t.jsx)(n.p,{children:"(compiler::notice-function-definition \u2019foo \u2019(x)))"}),"\n",(0,t.jsxs)(n.p,{children:["(eval-when (",":execute"," ",":load-toplevel",")"]}),"\n",(0,t.jsx)(n.p,{children:"(setf (symbol-function \u2019foo) #\u2019(lambda () (+ x 3))))))"}),"\n",(0,t.jsx)(n.p,{children:"which would be treated by the above rules the same as"}),"\n",(0,t.jsx)(n.p,{children:"(defun bar (x)"}),"\n",(0,t.jsx)(n.p,{children:"(setf (symbol-function \u2019foo) #\u2019(lambda () (+ x 3))))"}),"\n",(0,t.jsxs)(n.p,{children:["when the definition of bar is not a ",(0,t.jsx)(n.em,{children:"top level form"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const s={title:"eval-when"},c="eval-when",d={id:"chap-3/d-i-dictionary/eval-when_special-operator",title:"eval-when",description:"Expanded Reference: eval-when",source:"@site/docs/chap-3/d-i-dictionary/eval-when_special-operator.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/eval-when_special-operator",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/eval-when_special-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/eval-when_special-operator.md",tags:[],version:"current",frontMatter:{title:"eval-when"},sidebar:"tutorialSidebar",previous:{title:"dynamic-extent",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/dynamic-extent_declaration"},next:{title:"eval",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/eval_function"}},a={},h=[{value:"Expanded Reference: eval-when",id:"expanded-reference-eval-when",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"eval-when",children:"eval-when"}),"\n","\n","\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-eval-when",children:"Expanded Reference: eval-when"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(eval-when )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>s,a:()=>o});var t=l(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);