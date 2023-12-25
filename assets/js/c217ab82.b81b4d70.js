"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[69158],{97393:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"break"})," ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," &optional ",(0,t.jsx)(n.em,{children:"format-control"})," &rest ",(0,t.jsx)(n.em,{children:"format-arguments \u2192"})," ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"format-control"}),"\u2014a ",(0,t.jsx)(n.em,{children:"format control"}),". The default is ",(0,t.jsx)(r,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"format-arguments"}),"\u2014",(0,t.jsx)(n.em,{children:"format arguments"})," for the ",(0,t.jsx)(n.em,{children:"format-control"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," ",(0,t.jsx)(n.em,{children:"formats format-control"})," and ",(0,t.jsx)(n.em,{children:"format-arguments"})," and then goes directly into the debugger without allowing any possibility of interception by programmed error-handling facilities."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.strong,{children:"continue"})," ",(0,t.jsx)(r,{styled:!0,term:"restart",children:(0,t.jsx)("i",{children:"restart"})})," is used while in the debugger, ",(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," immediately returns ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," without taking any unusual recovery action."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," binds ",(0,t.jsx)(r,{styled:!0,term:"debugger-hook",children:(0,t.jsx)("b",{children:"*debugger-hook*"})})," to ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," before attempting to enter the debugger."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'(break "You got here with arguments: ~:S." \u2019(FOO 37 A)) \n\u25b7 BREAK: You got here with these arguments: FOO, 37, A. \n\u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Return from BREAK. \n\u25b7 2: Top level. \n\u25b7 Debug> :CONTINUE 1 \n\u25b7 Return from BREAK. \n\u2192 NIL \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsx)(n.p,{children:"The debugger is entered."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*debug-io*"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"error",children:(0,t.jsx)("b",{children:"error"})}),", ",(0,t.jsx)(r,{styled:!0,term:"invoke-debugger",children:(0,t.jsx)("b",{children:"invoke-debugger"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," is used as a way of inserting temporary debugging \u201cbreakpoints\u201d in a program, not as a way of signaling errors. For this reason, ",(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," does not take the ",(0,t.jsx)(n.em,{children:"continue-format-control argument"})," that ",(0,t.jsx)(r,{styled:!0,term:"cerror",children:(0,t.jsx)("b",{children:"cerror"})})," takes. This and the lack of any possibility of interception by ",(0,t.jsx)(n.em,{children:"condition handling"})," are the only program-visible differences between ",(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," and ",(0,t.jsx)(r,{styled:!0,term:"cerror",children:(0,t.jsx)("b",{children:"cerror"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The user interface aspects of ",(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," and ",(0,t.jsx)(r,{styled:!0,term:"cerror",children:(0,t.jsx)("b",{children:"cerror"})})," are permitted to vary more widely, in order to accomodate the interface needs of the ",(0,t.jsx)(r,{styled:!0,term:"implementation",children:(0,t.jsx)("i",{children:"implementation"})}),". For example, it is permissible for a ",(0,t.jsx)(n.em,{children:"Lisp read-eval-print loop"})," to be entered by ",(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," rather than the conventional debugger."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"break",children:(0,t.jsx)("b",{children:"break"})})," could be defined by:"]}),"\n",(0,t.jsx)(n.p,{children:'(defun break (&optional (format-control "Break") &rest format-arguments)'}),"\n",(0,t.jsx)(n.p,{children:'(with-simple-restart (continue "Return from BREAK.")'}),"\n",(0,t.jsx)(n.p,{children:"(let ((*debugger-hook* nil))"}),"\n",(0,t.jsx)(n.p,{children:"(invoke-debugger"}),"\n",(0,t.jsx)(n.p,{children:"(make-condition \u2019simple-condition"}),"\n",(0,t.jsxs)(n.p,{children:[":format-control"," format-control"]}),"\n",(0,t.jsxs)(n.p,{children:[":format-arguments"," format-arguments))))"]}),"\n",(0,t.jsx)(n.p,{children:"nil)"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const o={title:"break"},l="break",d={id:"chap-9/j-c-dictionary/break_function",title:"break",description:"Expanded Reference: break",source:"@site/docs/chap-9/j-c-dictionary/break_function.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/break_function",permalink:"/cl-language-reference/chap-9/j-c-dictionary/break_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/break_function.md",tags:[],version:"current",frontMatter:{title:"break"},sidebar:"tutorialSidebar",previous:{title:"break-on-signals",permalink:"/cl-language-reference/chap-9/j-c-dictionary/break-on-signals_variable"},next:{title:"cell-error-name",permalink:"/cl-language-reference/chap-9/j-c-dictionary/cell-error-name_function"}},a={},h=[{value:"Expanded Reference: break",id:"expanded-reference-break",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"break",children:"break"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-break",children:"Expanded Reference: break"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(break )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var t=r(67294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);