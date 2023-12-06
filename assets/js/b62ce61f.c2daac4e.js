"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[62858],{40201:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=r(85893),d=r(11151);function s(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"handler-bind"})," ",(0,i.jsx)(e.em,{children:"Macro"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"handler-bind"})," (",(0,i.jsx)(e.em,{children:"{\u2193binding}"}),"*) ",(0,i.jsx)(e.em,{children:"{form}"}),"* ",(0,i.jsx)(e.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"binding::"}),"=(",(0,i.jsx)(e.em,{children:"type handler"}),")"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"type"}),"\u2014a ",(0,i.jsx)(e.em,{children:"type specifier"})," ."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"handler"}),"\u2014a ",(0,i.jsx)(e.em,{children:"form"}),"; evaluated to produce a ",(0,i.jsx)(e.em,{children:"handler-function"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"handler-function"}),"\u2014a ",(0,i.jsx)(e.em,{children:"designator"})," for a ",(0,i.jsx)(e.em,{children:"function"})," of one ",(0,i.jsx)(e.em,{children:"argument"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"forms"}),"\u2014an ",(0,i.jsx)(e.em,{children:"implicit progn"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"results"}),"\u2014the ",(0,i.jsx)(e.em,{children:"values"})," returned by the ",(0,i.jsx)(e.em,{children:"forms"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:["Executes ",(0,i.jsx)(e.em,{children:"forms"})," in a ",(0,i.jsx)(e.em,{children:"dynamic environment"})," where the indicated ",(0,i.jsx)(e.em,{children:"handler bindings"})," are in effect."]}),"\n",(0,i.jsxs)(e.p,{children:["Each ",(0,i.jsx)(e.em,{children:"handler"})," should evaluate to a ",(0,i.jsx)(e.em,{children:"handler-function"}),", which is used to handle ",(0,i.jsx)(e.em,{children:"conditions"})," of the given ",(0,i.jsx)(e.em,{children:"type"})," during execution of the ",(0,i.jsx)(e.em,{children:"forms"}),". This ",(0,i.jsx)(e.em,{children:"function"})," should take a single argument, the ",(0,i.jsx)(e.em,{children:"condition"})," being signaled."]}),"\n",(0,i.jsxs)(e.p,{children:["If more than one ",(0,i.jsx)(e.em,{children:"handler binding"})," is supplied, the ",(0,i.jsx)(e.em,{children:"handler bindings"})," are searched sequentially from top to bottom in search of a match (by visual analogy with ",(0,i.jsx)(e.strong,{children:"typecase"}),"). If an appropriate ",(0,i.jsx)(e.em,{children:"type"})," is found, the associated handler is run in a ",(0,i.jsx)(e.em,{children:"dynamic environment"})," where none of these ",(0,i.jsx)(e.em,{children:"handler"})," bindings are visible (to avoid recursive errors). If the ",(0,i.jsx)(e.em,{children:"handler declines"}),", the search continues for another ",(0,i.jsx)(e.em,{children:"handler"})," ."]}),"\n",(0,i.jsxs)(e.p,{children:["If no appropriate ",(0,i.jsx)(e.em,{children:"handler"})," is found, other ",(0,i.jsx)(e.em,{children:"handlers"})," are sought from dynamically enclosing contours. If no ",(0,i.jsx)(e.em,{children:"handler"})," is found outside, then ",(0,i.jsx)(e.strong,{children:"signal"})," returns or ",(0,i.jsx)(e.strong,{children:"error"})," enters the debugger."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:' \n\n\n\nIn the following code, if an unbound variable error is signaled in the body (and not handled by an intervening handler), the first function is called. \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n(handler-bind ((unbound-variable #\u2019(lambda ...)) \n\n\n\n(error #\u2019(lambda ...))) \n\n\n\n...) \n\n\n\nIf any other kind of error is signaled, the second function is called. In either case, neither handler is active while executing the code in the associated function. \n\n\n\n(defun trap-error-handler (condition) \n\n\n\n(format \\*error-output\\* "&#126;&amp;&#126;A&#126;&amp;" condition) \n\n\n\n(throw \u2019trap-errors nil)) \n\n\n\n(defmacro trap-errors (&amp;rest forms) \n\n\n\n\u2018(catch \u2019trap-errors \n\n\n\n(handler-bind ((error #\u2019trap-error-handler)) \n\n\n\n,@forms))) \n\n\n\n(list (trap-errors (signal "Foo.") 1) \n\n\n\n(trap-errors (error "Bar.") 2) \n\n\n\n(+ 1 2)) \n\n\n\n\u25b7 Bar. \n\n\n\n*\u2192* (1 NIL 3) \n\n\n\nNote that \u201cFoo.\u201d is not printed because the condition made by **signal** is a *simple condition*, which is not of *type* **error**, so it doesn\u2019t trigger the handler for **error** set up by trap-errors. \n\n\n\n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"handler-case"})})]})}function t(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}const a={},c="handler-bind",o={id:"chap-9/j-c-dictionary/handlerbind",title:"handler-bind",description:"Expanded Reference: handler-bind",source:"@site/docs/chap-9/j-c-dictionary/handlerbind.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/handlerbind",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/handlerbind",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/handlerbind.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"find-restart",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/findrestart"},next:{title:"handler-case",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/handlercase"}},l={},h=[{value:"Expanded Reference: handler-bind",id:"expanded-reference-handler-bind",level:2}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"handler-bind",children:"handler-bind"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-handler-bind",children:"Expanded Reference: handler-bind"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(handler-bind )\n"})})]})}function m(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>a,a:()=>t});var i=r(67294);const d={},s=i.createContext(d);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);