"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[86737],{90028:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var r=i(85893),c=i(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compile"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compile"})," ",(0,r.jsx)(n.em,{children:"name"})," &optional ",(0,r.jsx)(n.em,{children:"definition \u2192 function, warnings-p, failure-p"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"name"}),"\u2014a ",(0,r.jsx)(n.em,{children:"function name"}),", or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"definition"}),"\u2014a ",(0,r.jsx)(n.em,{children:"lambda expression"})," or a ",(0,r.jsx)(n.em,{children:"function"}),". The default is the function definition of ",(0,r.jsx)(n.em,{children:"name"})," if it names a ",(0,r.jsx)(n.em,{children:"function"}),", or the ",(0,r.jsx)(n.em,{children:"macro function"})," of ",(0,r.jsx)(n.em,{children:"name"})," if it names a ",(0,r.jsx)(n.em,{children:"macro"}),". The consequences are undefined if no ",(0,r.jsx)(n.em,{children:"definition"})," is supplied when the ",(0,r.jsx)(n.em,{children:"name"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"function"}),"\u2014the ",(0,r.jsx)(n.em,{children:"function-name"}),", or a ",(0,r.jsx)(n.em,{children:"compiled function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"warnings-p"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"compile"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"failure-p"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Compiles an ",(0,r.jsx)(n.em,{children:"interpreted function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compile"})," produces a ",(0,r.jsx)(n.em,{children:"compiled function"})," from ",(0,r.jsx)(n.em,{children:"definition"}),". If the ",(0,r.jsx)(n.em,{children:"definition"})," is a ",(0,r.jsx)(n.em,{children:"lambda expression"}),", it is coerced to a ",(0,r.jsx)(n.em,{children:"function"}),". If the ",(0,r.jsx)(n.em,{children:"definition"})," is already a ",(0,r.jsx)(n.em,{children:"compiled function"}),", ",(0,r.jsx)(n.strong,{children:"compile"})," either produces that function itself (",(0,r.jsx)(n.em,{children:"i.e."}),", is an identity operation) or an equivalent function."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"name"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),", the resulting ",(0,r.jsx)(n.em,{children:"compiled function"})," is returned directly as the ",(0,r.jsx)(n.em,{children:"primary value"}),". If a ",(0,r.jsx)(n.em,{children:"non-nil name"})," is given, then the resulting ",(0,r.jsx)(n.em,{children:"compiled function"})," replaces the existing ",(0,r.jsx)(n.em,{children:"function"})," definition of ",(0,r.jsx)(n.em,{children:"name"})," and the ",(0,r.jsx)(n.em,{children:"name"})," is returned as the ",(0,r.jsx)(n.em,{children:"primary value"}),"; if ",(0,r.jsx)(n.em,{children:"name"})," is a ",(0,r.jsx)(n.em,{children:"symbol"})," that names a ",(0,r.jsx)(n.em,{children:"macro"}),", its ",(0,r.jsx)(n.em,{children:"macro function"})," is updated and the ",(0,r.jsx)(n.em,{children:"name"})," is returned as the ",(0,r.jsx)(n.em,{children:"primary value"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Literal objects"})," appearing in code processed by the ",(0,r.jsx)(n.strong,{children:"compile"})," function are neither copied nor ",(0,r.jsx)(n.em,{children:"coalesced"}),". The code resulting from the execution of ",(0,r.jsx)(n.strong,{children:"compile"})," references ",(0,r.jsx)(n.em,{children:"objects"})," that are ",(0,r.jsx)(n.strong,{children:"eql"})," to the corresponding ",(0,r.jsx)(n.em,{children:"objects"})," in the source code."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compile"})," is permitted, but not required, to ",(0,r.jsx)(n.em,{children:"establish"})," a ",(0,r.jsx)(n.em,{children:"handler"})," for ",(0,r.jsx)(n.em,{children:"conditions"})," of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"error"}),". For example, the ",(0,r.jsx)(n.em,{children:"handler"})," might issue a warning and restart compilation from some ",(0,r.jsx)(n.em,{children:"implementation dependent"})," point in order to let the compilation proceed without manual intervention."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"secondary value"}),", ",(0,r.jsx)(n.em,{children:"warnings-p"}),", is ",(0,r.jsx)(n.em,{children:"false"})," if no ",(0,r.jsx)(n.em,{children:"conditions"})," of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"error"})," or ",(0,r.jsx)(n.strong,{children:"warning"})," were detected by the compiler, and ",(0,r.jsx)(n.em,{children:"true"})," otherwise."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"tertiary value"}),", ",(0,r.jsx)(n.em,{children:"failure-p"}),", is ",(0,r.jsx)(n.em,{children:"false"})," if no ",(0,r.jsx)(n.em,{children:"conditions"})," of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"error"})," or ",(0,r.jsx)(n.strong,{children:"warning"})," (other than ",(0,r.jsx)(n.strong,{children:"style-warning"}),") were detected by the compiler, and ",(0,r.jsx)(n.em,{children:"true"})," otherwise."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsxs)(n.p,{children:['(defun foo () "bar") ',(0,r.jsx)(n.em,{children:"\u2192"})," FOO"]}),"\n",(0,r.jsxs)(n.p,{children:["(compiled-function-p #\u2019foo) ",(0,r.jsx)(n.em,{children:"\u2192 implementation-dependent"})]}),"\n",(0,r.jsxs)(n.p,{children:["(compile \u2019foo) ",(0,r.jsx)(n.em,{children:"\u2192"})," FOO"]}),"\n",(0,r.jsxs)(n.p,{children:["(compiled-function-p #\u2019foo) ",(0,r.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,r.jsx)(n.p,{children:"(setf (symbol-function \u2019foo)"}),"\n",(0,r.jsxs)(n.p,{children:['(compile nil \u2019(lambda () "replaced"))) ',(0,r.jsx)(n.em,{children:"\u2192"})," #<Compiled-Function>"]}),"\n",(0,r.jsxs)(n.p,{children:["(foo) ",(0,r.jsx)(n.em,{children:"\u2192"}),' "replaced"']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"*error-output*"}),", ",(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The presence of macro definitions and proclamations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if the ",(0,r.jsx)(n.em,{children:"lexical environment"})," surrounding the ",(0,r.jsx)(n.em,{children:"function"})," to be compiled contains any ",(0,r.jsx)(n.em,{children:"bindings"})," other than those for ",(0,r.jsx)(n.em,{children:"macros"}),", ",(0,r.jsx)(n.em,{children:"symbol macros"}),", or ",(0,r.jsx)(n.em,{children:"declarations"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and"}),"\n",(0,r.jsx)(n.p,{children:"Situations in the Compiler)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"compile-file"})})]})}function o(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const t={},l="compile",d={id:"chap-3/d-i-dictionary/compile",title:"compile",description:"Expanded Reference: compile",source:"@site/docs/chap-3/d-i-dictionary/compile.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/compile",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/compile",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/compile.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.8 Evaluation and Compilation Dictionary",permalink:"/cl-language-reference/docs/category/38-evaluation-and-compilation-dictionary"},next:{title:"compiler-macro-function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/compilermacrofunction"}},a={},h=[{value:"Expanded Reference: compile",id:"expanded-reference-compile",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"compile",children:"compile"}),"\n","\n","\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-compile",children:"Expanded Reference: compile"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(compile )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>o});var r=i(67294);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);