"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[62858],{40201:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=r(85893),d=r(11151);function s(e){const n={del:"del",em:"em",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"handler-bind"})," ",(0,i.jsx)(n.em,{children:"Macro"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"handler-bind"})," (",(0,i.jsx)(n.em,{children:"{\u2193binding}"}),"*) ",(0,i.jsx)(n.em,{children:"{form}"}),"* ",(0,i.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"binding::"}),"=(",(0,i.jsx)(n.em,{children:"type handler"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"type"}),"\u2014a ",(0,i.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"handler"}),"\u2014a ",(0,i.jsx)(n.em,{children:"form"}),"; evaluated to produce a ",(0,i.jsx)(n.em,{children:"handler-function"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"handler-function"}),"\u2014a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"function"})," of one ",(0,i.jsx)(n.em,{children:"argument"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,i.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"results"}),"\u2014the ",(0,i.jsx)(n.em,{children:"values"})," returned by the ",(0,i.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Executes ",(0,i.jsx)(n.em,{children:"forms"})," in a ",(0,i.jsx)(n.em,{children:"dynamic environment"})," where the indicated ",(0,i.jsx)(n.em,{children:"handler bindings"})," are in effect."]}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.em,{children:"handler"})," should evaluate to a ",(0,i.jsx)(n.em,{children:"handler-function"}),", which is used to handle ",(0,i.jsx)(n.em,{children:"conditions"})," of the given ",(0,i.jsx)(n.em,{children:"type"})," during execution of the ",(0,i.jsx)(n.em,{children:"forms"}),". This ",(0,i.jsx)(n.em,{children:"function"})," should take a single argument, the ",(0,i.jsx)(n.em,{children:"condition"})," being signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["If more than one ",(0,i.jsx)(n.em,{children:"handler binding"})," is supplied, the ",(0,i.jsx)(n.em,{children:"handler bindings"})," are searched sequentially from top to bottom in search of a match (by visual analogy with ",(0,i.jsx)(n.strong,{children:"typecase"}),"). If an appropriate ",(0,i.jsx)(n.em,{children:"type"})," is found, the associated handler is run in a ",(0,i.jsx)(n.em,{children:"dynamic environment"})," where none of these ",(0,i.jsx)(n.em,{children:"handler"})," bindings are visible (to avoid recursive errors). If the ",(0,i.jsx)(n.em,{children:"handler declines"}),", the search continues for another ",(0,i.jsx)(n.em,{children:"handler"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:["If no appropriate ",(0,i.jsx)(n.em,{children:"handler"})," is found, other ",(0,i.jsx)(n.em,{children:"handlers"})," are sought from dynamically enclosing contours. If no ",(0,i.jsx)(n.em,{children:"handler"})," is found outside, then ",(0,i.jsx)(n.strong,{children:"signal"})," returns or ",(0,i.jsx)(n.strong,{children:"error"})," enters the debugger."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:"In the following code, if an unbound variable error is signaled in the body (and not handled by an intervening handler), the first function is called."}),"\n",(0,i.jsx)(n.p,{children:"(handler-bind ((unbound-variable #\u2019(lambda ...))"}),"\n",(0,i.jsx)(n.p,{children:"(error #\u2019(lambda ...)))"}),"\n",(0,i.jsx)(n.p,{children:"...)"}),"\n",(0,i.jsx)(n.p,{children:"If any other kind of error is signaled, the second function is called. In either case, neither handler is active while executing the code in the associated function."}),"\n",(0,i.jsx)(n.p,{children:"(defun trap-error-handler (condition)"}),"\n",(0,i.jsxs)(n.p,{children:['(format *error-output* "~&',(0,i.jsx)(n.del,{children:"A"}),'&" condition)']}),"\n",(0,i.jsx)(n.p,{children:"(throw \u2019trap-errors nil))"}),"\n",(0,i.jsx)(n.p,{children:"(defmacro trap-errors (&rest forms)"}),"\n",(0,i.jsx)(n.p,{children:"\u2018(catch \u2019trap-errors"}),"\n",(0,i.jsx)(n.p,{children:"(handler-bind ((error #\u2019trap-error-handler))"}),"\n",(0,i.jsx)(n.p,{children:",@forms)))"}),"\n",(0,i.jsx)(n.p,{children:'(list (trap-errors (signal "Foo.") 1)'}),"\n",(0,i.jsx)(n.p,{children:'(trap-errors (error "Bar.") 2)'}),"\n",(0,i.jsx)(n.p,{children:"(+ 1 2))"}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 Bar."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192"})," (1 NIL 3)"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that \u201cFoo.\u201d is not printed because the condition made by ",(0,i.jsx)(n.strong,{children:"signal"})," is a ",(0,i.jsx)(n.em,{children:"simple condition"}),", which is not of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"}),", so it doesn\u2019t trigger the handler for ",(0,i.jsx)(n.strong,{children:"error"})," set up by trap-errors."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"handler-case"})})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const t={},l="handler-bind",a={id:"chap-9/j-c-dictionary/handlerbind",title:"handler-bind",description:"Expanded Reference: handler-bind",source:"@site/docs/chap-9/j-c-dictionary/handlerbind.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/handlerbind",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/handlerbind",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/handlerbind.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"find-restart",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/findrestart"},next:{title:"handler-case",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/handlercase"}},h={},o=[{value:"Expanded Reference: handler-bind",id:"expanded-reference-handler-bind",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"handler-bind",children:"handler-bind"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-handler-bind",children:"Expanded Reference: handler-bind"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(handler-bind )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>c});var i=r(67294);const d={},s=i.createContext(d);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);