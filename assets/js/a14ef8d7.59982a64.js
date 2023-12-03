"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[86467],{40824:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=r(85893),i=r(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"restart-bind"})," ",(0,t.jsx)(n.em,{children:"Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"restart-bind"})," (",(0,t.jsx)(n.em,{children:"{"}),"(",(0,t.jsx)(n.em,{children:"name function {\u2193key-val-pair}"}),"*)",(0,t.jsx)(n.em,{children:"}"}),") ",(0,t.jsx)(n.em,{children:"{form}"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"key-val-pair::"}),"=",":interactive-function"," ",(0,t.jsx)(n.em,{children:"interactive-function |"})]}),"\n",(0,t.jsxs)(n.p,{children:[":report-function"," ",(0,t.jsx)(n.em,{children:"report-function |"})]}),"\n",(0,t.jsxs)(n.p,{children:[":test-function"," ",(0,t.jsx)(n.em,{children:"test-function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"name"}),"\u2014a ",(0,t.jsx)(n.em,{children:"symbol"}),"; not evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"function"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"interactive-function"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"report-function"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"test-function"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n.em,{children:"values"})," returned by the ",(0,t.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"restart-bind"})," executes the body of ",(0,t.jsx)(n.em,{children:"forms"})," in a ",(0,t.jsx)(n.em,{children:"dynamic environment"})," where ",(0,t.jsx)(n.em,{children:"restarts"})," with the given ",(0,t.jsx)(n.em,{children:"names"})," are in effect."]}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(n.em,{children:"name"})," is ",(0,t.jsx)(n.strong,{children:"nil"}),", it indicates an anonymous restart; if a ",(0,t.jsx)(n.em,{children:"name"})," is a ",(0,t.jsx)(n.em,{children:"non-nil symbol"}),", it indicates a named restart."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"restart-bind"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"function"}),", ",(0,t.jsx)(n.em,{children:"interactive-function"}),", and ",(0,t.jsx)(n.em,{children:"report-function"})," are unconditionally evaluated in the current lexical and dynamic environment prior to evaluation of the body. Each of these ",(0,t.jsx)(n.em,{children:"forms"})," must evaluate to a ",(0,t.jsx)(n.em,{children:"function"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"invoke-restart"})," is done on that restart, the ",(0,t.jsx)(n.em,{children:"function"})," which resulted from evaluating ",(0,t.jsx)(n.em,{children:"function"})," is called, in the ",(0,t.jsx)(n.em,{children:"dynamic environment"})," of the ",(0,t.jsx)(n.strong,{children:"invoke-restart"}),", with the ",(0,t.jsx)(n.em,{children:"arguments"})," given to ",(0,t.jsx)(n.strong,{children:"invoke-restart"}),". The ",(0,t.jsx)(n.em,{children:"function"})," may either perform a non-local transfer of control or may return normally."]}),"\n",(0,t.jsxs)(n.p,{children:["If the restart is invoked interactively from the debugger (using ",(0,t.jsx)(n.strong,{children:"invoke-restart-interactively"}),"), the arguments are defaulted by calling the ",(0,t.jsx)(n.em,{children:"function"})," which resulted from evaluating ",(0,t.jsx)(n.em,{children:"interactive-function"}),". That ",(0,t.jsx)(n.em,{children:"function"})," may optionally prompt interactively on ",(0,t.jsx)(n.em,{children:"query I/O"}),", and should return a ",(0,t.jsx)(n.em,{children:"list"})," of arguments to be used by ",(0,t.jsx)(n.strong,{children:"invoke-restart-interactively"})," when invoking the restart."]}),"\n",(0,t.jsxs)(n.p,{children:["If a restart is invoked interactively but no ",(0,t.jsx)(n.em,{children:"interactive-function"})," is used, then an argument list of ",(0,t.jsx)(n.strong,{children:"nil"})," is used. In that case, the ",(0,t.jsx)(n.em,{children:"function"})," must be compatible with an empty argument list."]}),"\n",(0,t.jsxs)(n.p,{children:["If the restart is presented interactively (",(0,t.jsx)(n.em,{children:"e.g."}),", by the debugger), the presentation is done by calling the ",(0,t.jsx)(n.em,{children:"function"})," which resulted from evaluating ",(0,t.jsx)(n.em,{children:"report-function"}),". This ",(0,t.jsx)(n.em,{children:"function"})," must be a ",(0,t.jsx)(n.em,{children:"function"})," of one argument, a ",(0,t.jsx)(n.em,{children:"stream"}),". It is expected to print a description of the action that the restart takes to that ",(0,t.jsx)(n.em,{children:"stream"}),". This ",(0,t.jsx)(n.em,{children:"function"})," is called any time the restart is printed while ",(0,t.jsx)(n.strong,{children:"*print-escape*"})," is ",(0,t.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case of interactive invocation, the result is dependent on the value of ",":interactive-function"," as follows."]}),"\n",(0,t.jsx)(n.p,{children:":interactive-function"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Value"})," is evaluated in the current lexical environment and should return a ",(0,t.jsx)(n.em,{children:"function"})," of no arguments which constructs a ",(0,t.jsx)(n.em,{children:"list"})," of arguments to be used by ",(0,t.jsx)(n.strong,{children:"invoke-restart-interactively"})," when invoking this restart. The ",(0,t.jsx)(n.em,{children:"function"})," may prompt interactively using ",(0,t.jsx)(n.em,{children:"query I/O"})," if necessary."]}),"\n",(0,t.jsx)(n.p,{children:":report-function"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Value"})," is evaluated in the current lexical environment and should return a ",(0,t.jsx)(n.em,{children:"function"})," of one argument, a ",(0,t.jsx)(n.em,{children:"stream"}),", which prints on the ",(0,t.jsx)(n.em,{children:"stream"})," a summary of the action that this restart takes. This ",(0,t.jsx)(n.em,{children:"function"})," is called whenever the restart is reported (printed while ",(0,t.jsx)(n.strong,{children:"*print-escape*"})," is ",(0,t.jsx)(n.strong,{children:"nil"}),"). If no ",":report-function"," option is provided, the manner in which the ",(0,t.jsx)(n.em,{children:"restart"})," is reported is ",(0,t.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,t.jsx)(n.p,{children:":test-function"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Value"})," is evaluated in the current lexical environment and should return a ",(0,t.jsx)(n.em,{children:"function"})," of one argument, a ",(0,t.jsx)(n.em,{children:"condition"}),", which returns ",(0,t.jsx)(n.em,{children:"true"})," if the restart is to be considered visible."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*query-io*"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"restart-case"}),", ",(0,t.jsx)(n.strong,{children:"with-simple-restart"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"restart-bind"})," is primarily intended to be used to implement ",(0,t.jsx)(n.strong,{children:"restart-case"})," and might be useful in implementing other macros. Programmers who are uncertain about whether to use ",(0,t.jsx)(n.strong,{children:"restart-case"})," or ",(0,t.jsx)(n.strong,{children:"restart-bind"})," should prefer ",(0,t.jsx)(n.strong,{children:"restart-case"})," for the cases where it is powerful enough, using ",(0,t.jsx)(n.strong,{children:"restart-bind"})," only in cases where its full generality is really needed."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const a={},d="restart-bind",l={id:"chap-9/j-c-dictionary/restartbind",title:"restart-bind",description:"Expanded Reference: restart-bind",source:"@site/docs/chap-9/j-c-dictionary/restartbind.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/restartbind",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/restartbind",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/restartbind.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"restart",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/restart"},next:{title:"restart-case",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/restartcase"}},o={},h=[{value:"Expanded Reference: restart-bind",id:"expanded-reference-restart-bind",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"restart-bind",children:"restart-bind"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-restart-bind",children:"Expanded Reference: restart-bind"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(restart-bind )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var t=r(67294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);