"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[25496],{70429:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var i=r(85893),d=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{ClLinks:r,GlossaryTerm:s}=n;return r||l("ClLinks",!0),s||l("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"handler-bind"})," ",(0,i.jsx)(r,{styled:!0,term:"macro",children:(0,i.jsx)("i",{children:"Macro"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"handler-bind",children:(0,i.jsx)("b",{children:"handler-bind"})})," (",(0,i.jsx)(r,{styled:!0,term:"binding",children:(0,i.jsx)("i",{children:"{\u2193binding}"})}),"*) ",(0,i.jsx)(r,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"{form}"})}),"* \u2192 {result}*"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"binding",children:(0,i.jsx)("i",{children:"binding::"})}),"=(",(0,i.jsx)(n.em,{children:"type handler"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})}),"\u2014a ",(0,i.jsx)(s,{styled:!0,term:"type specifier",children:(0,i.jsx)("i",{children:"type specifier"})})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})}),"\u2014a ",(0,i.jsx)(r,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"form"})}),"; evaluated to produce a ",(0,i.jsx)(n.em,{children:"handler-function"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"handler-function"}),"\u2014a ",(0,i.jsx)(r,{styled:!0,term:"designator",children:(0,i.jsx)("i",{children:"designator"})})," for a ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," of one ",(0,i.jsx)(r,{styled:!0,term:"argument",children:(0,i.jsx)("i",{children:"argument"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"\u2014an ",(0,i.jsx)(s,{styled:!0,term:"implicit progn",children:(0,i.jsx)("i",{children:"implicit progn"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"results"}),"\u2014the ",(0,i.jsx)(r,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"values"})})," returned by the ",(0,i.jsx)(r,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Executes ",(0,i.jsx)(r,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})})," in a ",(0,i.jsx)(s,{styled:!0,term:"dynamic environment",children:(0,i.jsx)("i",{children:"dynamic environment"})})," where the indicated ",(0,i.jsx)(n.em,{children:"handler bindings"})," are in effect."]}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})})," should evaluate to a ",(0,i.jsx)(n.em,{children:"handler-function"}),", which is used to handle ",(0,i.jsx)(r,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"conditions"})})," of the given ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," during execution of the ",(0,i.jsx)(r,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})}),". This ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," should take a single argument, the ",(0,i.jsx)(r,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})})," being signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["If more than one ",(0,i.jsx)(n.em,{children:"handler binding"})," is supplied, the ",(0,i.jsx)(n.em,{children:"handler bindings"})," are searched sequentially from top to bottom in search of a match (by visual analogy with ",(0,i.jsx)(r,{styled:!0,term:"typecase",children:(0,i.jsx)("b",{children:"typecase"})}),"). If an appropriate ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," is found, the associated handler is run in a ",(0,i.jsx)(s,{styled:!0,term:"dynamic environment",children:(0,i.jsx)("i",{children:"dynamic environment"})})," where none of these ",(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})})," bindings are visible (to avoid recursive errors). If the ",(0,i.jsx)(n.em,{children:"handler declines"}),", the search continues for another ",(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})})," ."]}),"\n",(0,i.jsxs)(n.p,{children:["If no appropriate ",(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})})," is found, other ",(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handlers"})})," are sought from dynamically enclosing contours. If no ",(0,i.jsx)(r,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})})," is found outside, then ",(0,i.jsx)(r,{styled:!0,term:"signal",children:(0,i.jsx)("b",{children:"signal"})})," returns or ",(0,i.jsx)(r,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})})," enters the debugger."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'In the following code, if an unbound variable error is signaled in the body (and not handled by an intervening handler), the first function is called. \n\n(handler-bind ((unbound-variable #\u2019(lambda ...)) \n\t       (error #\u2019(lambda ...))) \n  ...) \nIf any other kind of error is signaled, the second function is called. In either case, neither handler is active while executing the code in the associated function. \n(defun trap-error-handler (condition) \n  (format \\*error-output\\* "~&~A~&" condition) \n  (throw \u2019trap-errors nil)) \n(defmacro trap-errors (&rest forms) \n  \u2018(catch \u2019trap-errors \n     (handler-bind ((error #\u2019trap-error-handler)) \n       ,@forms))) \n(list (trap-errors (signal "Foo.") 1) \n      (trap-errors (error "Bar.") 2) \n      (+ 1 2)) \n\u25b7 Bar. \n\u2192 (1 NIL 3) \nNote that \u201cFoo.\u201d is not printed because the condition made by **signal** is a *simple condition*, which is not of *type* **error**, so it doesn\u2019t trigger the handler for **error** set up by trap-errors. \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(r,{styled:!0,term:"handler-case",children:(0,i.jsx)("b",{children:"handler-case"})})]})}function t(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const c={title:"handler-bind"},a="handler-bind",o={id:"chap-9/j-c-dictionary/handler-bind_macro",title:"handler-bind",description:"Expanded Reference: handler-bind",source:"@site/docs/chap-9/j-c-dictionary/handler-bind_macro.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/handler-bind_macro",permalink:"/cl-language-reference/chap-9/j-c-dictionary/handler-bind_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/handler-bind_macro.md",tags:[],version:"current",frontMatter:{title:"handler-bind"},sidebar:"tutorialSidebar",previous:{title:"find-restart",permalink:"/cl-language-reference/chap-9/j-c-dictionary/find-restart_function"},next:{title:"handler-case",permalink:"/cl-language-reference/chap-9/j-c-dictionary/handler-case_macro"}},h={},x=[{value:"Expanded Reference: handler-bind",id:"expanded-reference-handler-bind",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"handler-bind",children:"handler-bind"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-handler-bind",children:"Expanded Reference: handler-bind"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(handler-bind )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var i=r(67294);const d={},s=i.createContext(d);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);