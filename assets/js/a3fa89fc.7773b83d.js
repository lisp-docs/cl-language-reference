"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[19323],{28326:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=i(85893),s=i(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compile"})," ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," &optional ",(0,r.jsx)(n.em,{children:"definition \u2192 function, warnings-p, failure-p"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})}),"\u2014a ",(0,r.jsx)(n.em,{children:"function name"}),", or ",(0,r.jsx)(i,{styled:!0,term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"definition"}),"\u2014a ",(0,r.jsx)(n.em,{children:"lambda expression"})," or a ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),". The default is the function definition of ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," if it names a ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),", or the ",(0,r.jsx)(n.em,{children:"macro function"})," of ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," if it names a ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})}),". The consequences are undefined if no ",(0,r.jsx)(n.em,{children:"definition"})," is supplied when the ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," is ",(0,r.jsx)(i,{styled:!0,term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),"\u2014the ",(0,r.jsx)(n.em,{children:"function-name"}),", or a ",(0,r.jsx)(n.em,{children:"compiled function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"warnings-p"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"failure-p"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Compiles an ",(0,r.jsx)(n.em,{children:"interpreted function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," produces a ",(0,r.jsx)(n.em,{children:"compiled function"})," from ",(0,r.jsx)(n.em,{children:"definition"}),". If the ",(0,r.jsx)(n.em,{children:"definition"})," is a ",(0,r.jsx)(n.em,{children:"lambda expression"}),", it is coerced to a ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),". If the ",(0,r.jsx)(n.em,{children:"definition"})," is already a ",(0,r.jsx)(n.em,{children:"compiled function"}),", ",(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," either produces that function itself (",(0,r.jsx)(n.em,{children:"i.e."}),", is an identity operation) or an equivalent function."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," is ",(0,r.jsx)(i,{styled:!0,term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),", the resulting ",(0,r.jsx)(n.em,{children:"compiled function"})," is returned directly as the ",(0,r.jsx)(n.em,{children:"primary value"}),". If a ",(0,r.jsx)(n.em,{children:"non-nil name"})," is given, then the resulting ",(0,r.jsx)(n.em,{children:"compiled function"})," replaces the existing ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," definition of ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," and the ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," is returned as the ",(0,r.jsx)(n.em,{children:"primary value"}),"; if ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," is a ",(0,r.jsx)(i,{styled:!0,term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})})," that names a ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})}),", its ",(0,r.jsx)(n.em,{children:"macro function"})," is updated and the ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," is returned as the ",(0,r.jsx)(n.em,{children:"primary value"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Literal objects"})," appearing in code processed by the ",(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," function are neither copied nor ",(0,r.jsx)(n.em,{children:"coalesced"}),". The code resulting from the execution of ",(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," references ",(0,r.jsx)(i,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})})," that are ",(0,r.jsx)(i,{styled:!0,term:"eql",children:(0,r.jsx)("b",{children:"eql"})})," to the corresponding ",(0,r.jsx)(i,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})})," in the source code."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," is permitted, but not required, to ",(0,r.jsx)(i,{styled:!0,term:"establish",children:(0,r.jsx)("i",{children:"establish"})})," a ",(0,r.jsx)(i,{styled:!0,term:"handler",children:(0,r.jsx)("i",{children:"handler"})})," for ",(0,r.jsx)(i,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"conditions"})})," of ",(0,r.jsx)(i,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{styled:!0,term:"error",children:(0,r.jsx)("b",{children:"error"})}),". For example, the ",(0,r.jsx)(i,{styled:!0,term:"handler",children:(0,r.jsx)("i",{children:"handler"})})," might issue a warning and restart compilation from some ",(0,r.jsx)(n.em,{children:"implementation dependent"})," point in order to let the compilation proceed without manual intervention."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"secondary value"}),", ",(0,r.jsx)(n.em,{children:"warnings-p"}),", is ",(0,r.jsx)(i,{styled:!0,term:"false",children:(0,r.jsx)("i",{children:"false"})})," if no ",(0,r.jsx)(i,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"conditions"})})," of ",(0,r.jsx)(i,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{styled:!0,term:"error",children:(0,r.jsx)("b",{children:"error"})})," or ",(0,r.jsx)(i,{styled:!0,term:"warning",children:(0,r.jsx)("b",{children:"warning"})})," were detected by the compiler, and ",(0,r.jsx)(i,{styled:!0,term:"true",children:(0,r.jsx)("i",{children:"true"})})," otherwise."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"tertiary value"}),", ",(0,r.jsx)(n.em,{children:"failure-p"}),", is ",(0,r.jsx)(i,{styled:!0,term:"false",children:(0,r.jsx)("i",{children:"false"})})," if no ",(0,r.jsx)(i,{styled:!0,term:"condition",children:(0,r.jsx)("i",{children:"conditions"})})," of ",(0,r.jsx)(i,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{styled:!0,term:"error",children:(0,r.jsx)("b",{children:"error"})})," or ",(0,r.jsx)(i,{styled:!0,term:"warning",children:(0,r.jsx)("b",{children:"warning"})})," (other than ",(0,r.jsx)(i,{styled:!0,term:"style-warning",children:(0,r.jsx)("b",{children:"style-warning"})}),") were detected by the compiler, and ",(0,r.jsx)(i,{styled:!0,term:"true",children:(0,r.jsx)("i",{children:"true"})})," otherwise."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(defun foo () "bar") \u2192 FOO \n(compiled-function-p #\u2019foo) \u2192 implementation-dependent \n(compile \u2019foo) \u2192 FOO \n(compiled-function-p #\u2019foo) \u2192 true \n(setf (symbol-function \u2019foo) \n      (compile nil \u2019(lambda () "replaced"))) \u2192 #<Compiled-Function> \n(foo) \u2192 "replaced" \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"*error-output*"}),", ",(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The presence of macro definitions and proclamations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if the ",(0,r.jsx)(n.em,{children:"lexical environment"})," surrounding the ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," to be compiled contains any ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})})," other than those for ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macros"})}),", ",(0,r.jsx)(n.em,{children:"symbol macros"}),", or ",(0,r.jsx)(i,{styled:!0,term:"declaration",children:(0,r.jsx)("i",{children:"declarations"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and"}),"\n",(0,r.jsx)(n.p,{children:"Situations in the Compiler)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(i,{styled:!0,term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})]})}function t(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const l={title:"compile"},d="compile",o={id:"chap-3/d-i-dictionary/compile_function",title:"compile",description:"Expanded Reference: compile",source:"@site/docs/chap-3/d-i-dictionary/compile_function.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/compile_function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/compile_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/compile_function.md",tags:[],version:"current",frontMatter:{title:"compile"},sidebar:"tutorialSidebar",previous:{title:"3.8 Evaluation and Compilation Dictionary",permalink:"/cl-language-reference/docs/category/38-evaluation-and-compilation-dictionary"},next:{title:"compiler-macro-function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/compiler-macro-function_accessor"}},h={},a=[{value:"Expanded Reference: compile",id:"expanded-reference-compile",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"compile",children:"compile"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-compile",children:"Expanded Reference: compile"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(compile )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var r=i(67294);const s={},c=r.createContext(s);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);