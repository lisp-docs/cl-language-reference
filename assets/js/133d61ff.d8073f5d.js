"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[15382],{75241:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>h,toc:()=>u});var i=r(85893),t=r(11151);function d(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:d}=n;return r||c("DictionaryLink",!0),d||c("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"invoke-debugger"})," ",(0,i.jsx)(d,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"invoke-debugger",children:(0,i.jsx)("b",{children:"invoke-debugger"})})," ",(0,i.jsx)(n.em,{children:"condition \u2192"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(d,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})}),"\u2014a ",(0,i.jsx)(n.em,{children:"condition object"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"invoke-debugger",children:(0,i.jsx)("b",{children:"invoke-debugger"})})," attempts to enter the debugger with ",(0,i.jsx)(d,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(r,{styled:!0,term:"debugger-hook",children:(0,i.jsx)("b",{children:"*debugger-hook*"})})," is not ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", it should be a ",(0,i.jsx)(d,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," (or the name of a ",(0,i.jsx)(d,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})}),") to be called prior to entry to the standard debugger. The ",(0,i.jsx)(d,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," is called with ",(0,i.jsx)(r,{styled:!0,term:"debugger-hook",children:(0,i.jsx)("b",{children:"*debugger-hook*"})})," bound to ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", and the ",(0,i.jsx)(d,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," must accept two arguments: the ",(0,i.jsx)(d,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})})," and the ",(0,i.jsx)(d,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of ",(0,i.jsx)(r,{styled:!0,term:"debugger-hook",children:(0,i.jsx)("b",{children:"*debugger-hook*"})})," prior to binding it to ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),". If the ",(0,i.jsx)(d,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"function"})})," returns normally, the standard debugger is entered."]}),"\n",(0,i.jsx)(n.p,{children:"The standard debugger never directly returns. Return can occur only by a non-local transfer of control, such as the use of a restart function."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(ignore-errors ;Normally, this would suppress debugger entry \n  (handler-bind ((error #\u2019invoke-debugger)) ;But this forces debugger entry \n    (error "Foo."))) \nDebug: Foo. \nTo continue, type :CONTINUE followed by an option number: \n1: Return to Lisp Toplevel. \nDebug> \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"debugger-hook",children:(0,i.jsx)("b",{children:"*debugger-hook*"})})," is bound to ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", program execution is discontinued, and the debugger is entered."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"*debug-io*"})," and ",(0,i.jsx)(r,{styled:!0,term:"debugger-hook",children:(0,i.jsx)("b",{children:"*debugger-hook*"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})}),", ",(0,i.jsx)(r,{styled:!0,term:"break",children:(0,i.jsx)("b",{children:"break"})})]}),"\n",(0,i.jsx)(r,{styled:!0,term:"break",children:(0,i.jsx)("b",{children:"break"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const s={title:"invoke-debugger"},l="invoke-debugger",h={id:"chap-9/j-c-dictionary/invoke-debugger_function",title:"invoke-debugger",description:"Expanded Reference: invoke-debugger",source:"@site/docs/chap-9/j-c-dictionary/invoke-debugger_function.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/invoke-debugger_function",permalink:"/cl-language-reference/chap-9/j-c-dictionary/invoke-debugger_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/invoke-debugger_function.md",tags:[],version:"current",frontMatter:{title:"invoke-debugger"},sidebar:"tutorialSidebar",previous:{title:"invalid-method-error",permalink:"/cl-language-reference/chap-9/j-c-dictionary/invalid-method-error_function"},next:{title:"invoke-restart-interactively",permalink:"/cl-language-reference/chap-9/j-c-dictionary/invoke-restart-interactively_function"}},a={},u=[{value:"Expanded Reference: invoke-debugger",id:"expanded-reference-invoke-debugger",level:2}];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"invoke-debugger",children:"invoke-debugger"}),"\n","\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-invoke-debugger",children:"Expanded Reference: invoke-debugger"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(invoke-debugger )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var i=r(67294);const t={},d=i.createContext(t);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);