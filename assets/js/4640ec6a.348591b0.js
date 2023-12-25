"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[33662],{97270:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var r=i(85893),s=i(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"deftype"})," ",(0,r.jsx)(i,{term:"macro",children:(0,r.jsx)("i",{children:"Macro"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})})," ",(0,r.jsx)(n.em,{children:"name lambda-list"})," [[ ",(0,r.jsx)(i,{term:"declaration",children:(0,r.jsx)("i",{children:"{declaration}"})}),"* ",(0,r.jsx)(n.em,{children:"| documentation"})," ]] ",(0,r.jsx)(i,{term:"form",children:(0,r.jsx)("i",{children:"{form}"})}),"* \u2192 name"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),"\u2014a ",(0,r.jsx)(i,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"lambda-list"}),"\u2014a ",(0,r.jsx)(n.em,{children:"deftype lambda list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"declaration",children:(0,r.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,r.jsx)(i,{term:"declare",children:(0,r.jsx)("b",{children:"declare"})})," ",(0,r.jsx)(i,{term:"expression",children:(0,r.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"documentation"}),"\u2014a ",(0,r.jsx)(i,{term:"string",children:(0,r.jsx)("i",{children:"string"})}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"\u2014a ",(0,r.jsx)(i,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})})," defines a ",(0,r.jsx)(n.em,{children:"derived type specifier"})," named ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The meaning of the new ",(0,r.jsx)(n.em,{children:"type specifier"})," is given in terms of a function which expands the ",(0,r.jsx)(n.em,{children:"type specifier"})," into another ",(0,r.jsx)(n.em,{children:"type specifier"})," , which itself will be expanded if it contains references to another ",(0,r.jsx)(n.em,{children:"derived type specifier"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["The newly defined ",(0,r.jsx)(n.em,{children:"type specifier"})," may be referenced as a list of the form (",(0,r.jsx)(n.em,{children:"name arg"}),(0,r.jsx)("sub",{children:"1"})," ",(0,r.jsx)(n.em,{children:"arg"}),(0,r.jsx)("sub",{children:"2"})," ...). The number of arguments must be appropriate to the ",(0,r.jsx)(n.em,{children:"lambda-list"}),". If the new ",(0,r.jsx)(n.em,{children:"type specifier"})," takes no arguments, or if all of its arguments are optional, the ",(0,r.jsx)(n.em,{children:"type specifier"})," may be used as an ",(0,r.jsx)(n.em,{children:"atomic type specifier"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)("i",{children:"argument expressions"})," to the ",(0,r.jsx)("i",{children:"type specifier"})," , ",(0,r.jsx)("i",{children:"arg"}),(0,r.jsx)("sub",{children:"1"})," ",(0,r.jsxs)("i",{children:[". . . arg",(0,r.jsx)("sub",{children:"n"})]}),", are not ",(0,r.jsx)("i",{children:"evaluated"}),". Instead, these ",(0,r.jsx)("i",{children:"literal objects"})," become the ",(0,r.jsx)("i",{children:"objects"})," to which corresponding ",(0,r.jsx)("i",{children:"parameters"})," become ",(0,r.jsx)("i",{children:"bound"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The body of the ",(0,r.jsx)(i,{term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})})," ",(0,r.jsx)(i,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," (but not the ",(0,r.jsx)(n.em,{children:"lambda-list"}),") is implicitly enclosed in a ",(0,r.jsx)(i,{term:"block",children:(0,r.jsx)("i",{children:"block"})})," named ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),", and is evaluated as an ",(0,r.jsx)(n.em,{children:"implicit progn"}),", returning a new ",(0,r.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"lexical environment"})," of the body is the one which was current at the time the ",(0,r.jsx)(i,{term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})})," form was evaluated, augmented by the ",(0,r.jsx)(i,{term:"variable",children:(0,r.jsx)("i",{children:"variables"})})," in the ",(0,r.jsx)(n.em,{children:"lambda-list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Recursive expansion of the ",(0,r.jsx)(n.em,{children:"type specifier"})," returned as the expansion must terminate, including the expansion of ",(0,r.jsx)(n.em,{children:"type specifiers"})," which are nested within the expansion."]}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if the result of fully expanding a ",(0,r.jsx)(n.em,{children:"type specifier"})," contains any circular structure, except within the ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"objects"})})," referred to by ",(0,r.jsx)(i,{term:"member",children:(0,r.jsx)("b",{children:"member"})})," and ",(0,r.jsx)(i,{term:"eql",children:(0,r.jsx)("b",{children:"eql"})})," ",(0,r.jsx)(n.em,{children:"type specifiers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Documentation"})," is attached to ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})})," as a ",(0,r.jsx)(n.em,{children:"documentation string"})," of kind ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("b",{children:"type"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If a ",(0,r.jsx)(i,{term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})})," ",(0,r.jsx)(i,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," appears as a ",(0,r.jsx)(n.em,{children:"top level form"}),", the ",(0,r.jsx)(i,{term:"compiler",children:(0,r.jsx)("i",{children:"compiler"})})," must ensure that the ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})})," is recognized in subsequent ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," declarations. The ",(0,r.jsx)(i,{term:"programmer",children:(0,r.jsx)("i",{children:"programmer"})})," must ensure that the body of a ",(0,r.jsx)(i,{term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})})," form can be ",(0,r.jsx)(n.em,{children:"evaluated"})," at compile time if the ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})})," is referenced in subsequent ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," declarations. If the"]}),"\n",(0,r.jsxs)(n.p,{children:["expansion of a ",(0,r.jsx)(n.em,{children:"type specifier"})," is not defined fully at compile time (perhaps because it expands into an unknown ",(0,r.jsx)(n.em,{children:"type specifier"})," or a ",(0,r.jsx)(n.strong,{children:"satisfies"})," of a named ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," that isn\u2019t defined in the compile-time environment), an ",(0,r.jsx)(i,{term:"implementation",children:(0,r.jsx)("i",{children:"implementation"})})," may ignore any references to this ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," in declarations and/or signal a warning."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(defun equidimensional (a) \n  (or (< (array-rank a) 2) \n      (apply #\u2019= (array-dimensions a)))) \u2192 EQUIDIMENSIONAL \n(deftype square-matrix (&optional type size) \n  \u2018(and (array ,type (,size ,size)) \n\t(satisfies equidimensional))) \u2192 SQUARE-MATRIX \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"declare",children:(0,r.jsx)("b",{children:"declare"})}),", ",(0,r.jsx)(i,{term:"defmacro",children:(0,r.jsx)("b",{children:"defmacro"})}),", ",(0,r.jsx)(n.strong,{children:"documentation"}),", Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations)"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const d={title:"deftype"},l="deftype",a={id:"chap-4/e-e-dictionary/deftype_macro",title:"deftype",description:"Expanded Reference: deftype",source:"@site/docs/chap-4/e-e-dictionary/deftype_macro.md",sourceDirName:"chap-4/e-e-dictionary",slug:"/chap-4/e-e-dictionary/deftype_macro",permalink:"/cl-language-reference/chap-4/e-e-dictionary/deftype_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-4/e-e-dictionary/deftype_macro.md",tags:[],version:"current",frontMatter:{title:"deftype"},sidebar:"tutorialSidebar",previous:{title:"compiled-function",permalink:"/cl-language-reference/chap-4/e-e-dictionary/compiled-function_type"},next:{title:"function",permalink:"/cl-language-reference/chap-4/e-e-dictionary/function_system-class"}},o={},h=[{value:"Expanded Reference: deftype",id:"expanded-reference-deftype",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deftype",children:"deftype"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-deftype",children:"Expanded Reference: deftype"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(deftype )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var r=i(67294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);