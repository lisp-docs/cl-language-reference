"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[63433],{24245:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var o=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"invoke-debugger"})," ",(0,o.jsx)(n.em,{children:"Function"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"invoke-debugger"})," ",(0,o.jsx)(n.em,{children:"condition \u2192"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"condition"}),"\u2014a ",(0,o.jsx)(n.em,{children:"condition object"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Description:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"invoke-debugger"})," attempts to enter the debugger with ",(0,o.jsx)(n.em,{children:"condition"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.strong,{children:"*debugger-hook*"})," is not ",(0,o.jsx)(n.strong,{children:"nil"}),", it should be a ",(0,o.jsx)(n.em,{children:"function"})," (or the name of a ",(0,o.jsx)(n.em,{children:"function"}),") to be called prior to entry to the standard debugger. The ",(0,o.jsx)(n.em,{children:"function"})," is called with ",(0,o.jsx)(n.strong,{children:"*debugger-hook*"})," bound to ",(0,o.jsx)(n.strong,{children:"nil"}),", and the ",(0,o.jsx)(n.em,{children:"function"})," must accept two arguments: the ",(0,o.jsx)(n.em,{children:"condition"})," and the ",(0,o.jsx)(n.em,{children:"value"})," of ",(0,o.jsx)(n.strong,{children:"*debugger-hook*"})," prior to binding it to ",(0,o.jsx)(n.strong,{children:"nil"}),". If the ",(0,o.jsx)(n.em,{children:"function"})," returns normally, the standard debugger is entered."]}),"\n",(0,o.jsx)(n.p,{children:"The standard debugger never directly returns. Return can occur only by a non-local transfer of control, such as the use of a restart function."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lisp",children:' \n\n(ignore-errors ;Normally, this would suppress debugger entry \n\n(handler-bind ((error #\u2019invoke-debugger)) ;But this forces debugger entry \n\n(error "Foo."))) \n\nDebug: Foo. \n\nTo continue, type :CONTINUE followed by an option number: \n\n1: Return to Lisp Toplevel. \n\nDebug&gt; \n\n\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"*debugger-hook*"})," is bound to ",(0,o.jsx)(n.strong,{children:"nil"}),", program execution is discontinued, and the debugger is entered."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"*debug-io*"})," and ",(0,o.jsx)(n.strong,{children:"*debugger-hook*"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"error"}),", ",(0,o.jsx)(n.strong,{children:"break"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"break"})})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}const d={},c="invoke-debugger",l={id:"chap-9/j-c-dictionary/invokedebugger",title:"invoke-debugger",description:"Expanded Reference: invoke-debugger",source:"@site/docs/chap-9/j-c-dictionary/invokedebugger.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/invokedebugger",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/invokedebugger",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/invokedebugger.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"invalid-method-error",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/invalidmethoderror"},next:{title:"invoke-restart",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/invokerestart"}},a={},g=[{value:"Expanded Reference: invoke-debugger",id:"expanded-reference-invoke-debugger",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"invoke-debugger",children:"invoke-debugger"}),"\n","\n","\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(n.h2,{id:"expanded-reference-invoke-debugger",children:"Expanded Reference: invoke-debugger"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lisp",children:"(invoke-debugger )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var o=r(67294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);